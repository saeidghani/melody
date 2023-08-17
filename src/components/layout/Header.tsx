import { routes } from "@/constants";
import { Container } from "../common/Container";
import { Logo } from "../common/Logo";
import { Link } from "../ui/link";
import clsx from "clsx";

type Item = {
  key: string;
  label: string;
  className?: string;
  href: string;
};

const authButtons: Item[] = [
  {
    key: "1",
    label: "Sign in",
    href: routes.auth.signin,
  },
  {
    key: "2",
    label: "Sign up",
    className: "font-bold",
    href: routes.auth.signup,
  },
];

const navButtons: Item[] = [
  {
    key: "1",
    label: "Musics",
    href: routes.music.musics,
  },
  {
    key: "2",
    label: "Playlists",
    href: routes.music.playlist.index,
  },
];

interface HeaderProps {
  isAuth: boolean;
}

export function Header({ isAuth }: HeaderProps) {
  return (
    <header className="border-b py-4">
      <Container className="flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-4">
          {(isAuth ? navButtons : authButtons).map(
            ({ key, label, href, className }) => (
              <Link
                key={key}
                variant="text"
                size="sm"
                className={clsx("p-0 whitespace-nowrap", className)}
                href={href}
              >
                {label}
              </Link>
            )
          )}
        </div>
      </Container>
    </header>
  );
}
