"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import HERObg from "@/assets/HERO-bg.jpg";

const Main = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative inset-0">
      <Image
        className="object-cover"
        src={HERObg}
        alt="Hero image"
        fill
        priority={false}
      />
      <div
        className={`scroll-style flex flex-col h-screen justify-end pb-16 items-center ${
          showContent
            ? "opacity-100 transition-opacity duration-1000"
            : "opacity-0"
        }`}
      >
        <span className="text-white text-4xl animate-bounce">⌵</span>
      </div>
    </div>
  );
};

export default Main;
