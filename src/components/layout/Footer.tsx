import { Instagram } from "lucide-react";
import React from "react";
import { Container } from "../common/Container";

export function Footer() {
  return (
    <footer className="border-t">
      <Container
        className="flex max-md:flex-col-reverse gap-y-2 items-center 
                   justify-between py-4 text-gray-600"
      >
        <p className="max-md:text-sm">
          <span>&copy;</span> 2023 Melody, Inc. All rights reserved.
        </p>
        <Instagram />
      </Container>
    </footer>
  );
}
