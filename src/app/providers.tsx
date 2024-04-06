"use client";
import { Navbarr } from "@/components/Navbar";
import { NextUIProvider } from "@nextui-org/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <div>
        <Navbarr />
      </div>
      <div className="h-[2000px]">{children}</div>
    </NextUIProvider>
  );
};