import React from "react";
import { Link } from "../ui/Link";
import { routes } from "@/constants";

export async function StartButton() {
  const isAuth = true;
  return (
    <Link
      href={isAuth ? routes.music.musics : routes.auth.signup}
      variant="default"
      className="group inline-flex items-center px-4 py-1.5
                 font-semibold transition"
    >
      Start now
      <svg
        className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
        fill="none"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        aria-hidden="true"
      >
        <path
          className="opacity-0 transition group-hover:opacity-100"
          d="M0 5h7"
        ></path>
        <path
          className="transition group-hover:translate-x-[3px]"
          d="M1 1l4 4-4 4"
        ></path>
      </svg>
    </Link>
  );
}
