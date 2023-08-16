import { cn } from "@/lib";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const containerVariants = cva(`mx-auto px-4 sm:px-6 lg:px-8`, {
  variants: {
    size: {
      default: "max-w-7xl",
      md: "max-w-5xl",
      sm: "max-w-2xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export function Container({ size, className, ...props }: ContainerProps) {
  return (
    <div className={cn(containerVariants({ size, className }))} {...props} />
  );
}
