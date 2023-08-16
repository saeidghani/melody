import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  `inline-flex items-center justify-center rounded-md font-medium 
   ring-offset-white transition-colors focus-visible:outline-none 
   focus-visible:ring-2 focus-visible:ring-primary-400 
   focus-visible:ring-offset-2 disabled:pointer-events-none 
   disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: `bg-primary-500 text-primary-50 hover:bg-primary-500/90`,
        destructive: `bg-red-500 text-primary-50 hover:bg-red-500/90`,
        outline: `text-primary-500 border border-primary-200 
                  hover:text-primary-900`,
        secondary: `bg-primary-100 text-primary-900 hover:bg-primary-100/80`,
        ghost: `text-primary-500 hover:bg-primary-100 hover:text-primary-900`,
        text: `text-gray-900 hover:text-primary-500 
               text-primary-500 hover:text-primary-300`,
        underline: `underline underline-offset-4 text-gray-500 
                    hover:text-primary-900`,
        accent: `bg-accent-500 text-primary-50 hover:bg-accent-500/90`,
      },
      size: {
        xs: "h-6 text-xs",
        sm: "h-8 text-sm",
        default: "h-10 px-4 text-sm",
        lg: "h-12 px-8 text-sm rounded-md",
        icon: "text-sm h-10 w-10",
      },
      width: {
        auto: "w-auto",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      width: "auto",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      width,
      asChild = false,
      loading = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, width, className }))}
        disabled={loading}
        ref={ref}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
