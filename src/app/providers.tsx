"use client";
import { Navbar } from "@/components/Navbar";
import { NextUIProvider } from "@nextui-org/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <div>
        <Navbar />
      </div>
      <div className="h-[2000px]">{children}</div>
    </NextUIProvider>
  );
};
