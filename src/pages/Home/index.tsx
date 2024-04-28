"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import HERObg from "@/assets/HERO-bg.jpg";

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="">
      <div className="absolute inset-0">
        <Image className="object-cover" src={HERObg} alt="" fill priority />
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
    </div>
  );
};

export default Home;
