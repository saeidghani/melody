"use client";
import { Input } from "@/components/ui/input";
import { useDebounce, useQuery } from "@/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SearchInput() {
  const router = useRouter();
  const { searchParams, addQuery } = useQuery();
  const search = searchParams.get("search");
  const searchValue = search ?? "";
  const debouncedSearch = useDebounce<string>(searchValue);
  const [text, setText] = useState(() => searchValue);

  useEffect(() => {
    if (debouncedSearch) router.refresh();
  }, [debouncedSearch, router]);

  return (
    <Input
      className="w-full max-w-[350px] mt-2"
      placeholder="Search..."
      hSize="md"
      value={text}
      onChange={(e) => {
        const { value } = e.currentTarget;
        setText(value);
        addQuery({ params: { search: value.toLowerCase(), page: 1 } });
      }}
    />
  );
}
