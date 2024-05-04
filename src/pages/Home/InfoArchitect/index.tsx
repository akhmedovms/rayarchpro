"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import mainInfoOne from "@/assets/InfoArchitects/mainInfoOne.jpg";
import mainInfoSecond from "@/assets/InfoArchitects/mainInfoSecond.jpg";
import mainInfoThird from "@/assets/InfoArchitects/mainInfoThird.jpg";

const content = [
  {
    title: "lorem ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={mainInfoOne}
          className="object-cover"
          alt="linear board"
          priority
        />
      </div>
    ),
  },
  {
    title: "lorem ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={mainInfoSecond}
          className="object-cover"
          alt="linear board"
          priority
        />
      </div>
    ),
  },
  {
    title: "lorem ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={mainInfoThird}
          className="object-cover"
          alt="linear board"
          priority
        />
      </div>
    ),
  },
];
function InfoArchitect() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}

export default InfoArchitect;
