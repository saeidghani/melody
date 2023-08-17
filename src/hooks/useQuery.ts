"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";

export const useQuery = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  type Params = { [k: string]: string | number };

  const addQuery = useCallback(
    ({
      scroll = false,
      path,
      params,
    }: { scroll?: boolean } & (
      | { path: string; params: Params }
      | { path: string; params?: never }
      | { path?: never; params: Params }
    )) => {
      let currentQuery = {};

      if (searchParams) {
        currentQuery = qs.parse(searchParams.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
      };

      for (const key in params) {
        if (key) updatedQuery[key] = params[key as keyof Params];
      }

      const url = qs.stringifyUrl(
        {
          url: path || pathname,
          query: updatedQuery,
        },
        { skipNull: true }
      );

      router.push(url, { scroll });
    },
    [pathname, router, searchParams]
  );

  return { pathname, searchParams, addQuery };
};
