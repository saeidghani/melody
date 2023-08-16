import { ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Loader2 } from "lucide-react";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib";

export interface LinkProps
  extends NextLinkProps,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
  loading?: boolean;
}

export function Link({
  children,
  className,
  variant = "text",
  size,
  loading = false,
  ...props
}: LinkProps) {
  return (
    <NextLink
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </NextLink>
  );
}
