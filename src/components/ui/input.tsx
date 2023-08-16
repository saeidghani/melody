import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib";

const inputVariants = cva(
  `autofill:bg-yellow-200 flex w-full bg-white text-sm file:border-0 
   file:bg-transparent file:text-sm file:font-medium 
   placeholder:text-gray-500 placeholder:text-xs focus-visible:outline-none 
   disabled:cursor-not-allowed disabled:opacity-50
   focus:border-primary-200`,
  {
    variants: {
      variant: {
        primary: `border rounded-md px-3`,
        secondary: `border-b`,
      },
      hSize: {
        md: "h-9",
        lg: "h-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      hSize: "lg",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, hSize, className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, hSize, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
