import React from "react";
import { routes } from "@/constants";
import Link from "next/link";

export function Logo() {
  return (
    <span
      className="before:block before:absolute before:-inset-1
                         before:-skew-y-3 before:bg-primary-500 
                         relative inline-block"
    >
      <Link href={routes.home} className="relative text-white">
        Melody
      </Link>
    </span>
  );
}
