import { Card } from "@/components/ui/card";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <main
      className="min-h-screen flex justify-center items-center xs:p-4
                   text-gray-900"
    >
      <Card
        className="w-full max-w-[400px] mx-auto max-xs:border-none 
                   max-xs:shadow-none max-xs:rounded-none p-4 md:p-6"
      >
        {children}
      </Card>
    </main>
  );
}
