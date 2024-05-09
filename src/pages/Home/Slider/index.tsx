"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";

import mainInfoOne from "@/assets/InfoArchitects/mainInfoOne.jpg";
import mainInfoSecond from "@/assets/InfoArchitects/mainInfoSecond.jpg";
import mainInfoThird from "@/assets/InfoArchitects/mainInfoThird.jpg";
import { useState } from "react";

// background-color: rgba(89, 131, 252, 1);
// background-image: linear-gradient(180deg, rgba(89, 131, 252, 1) 69%, rgba(21, 21, 21, 1) 100%);

function Slider() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleImageClick = (i) => {
    setActiveIndex(i === activeIndex ? null : i);
  };
  return (
    <div className="flex flex-col gap-8">
      <style jsx global>{`
        .swiper-scrollbar {
          background-color: #717171;
          height: 2px !important;
          margin-bottom: 18px;
          width: 100%;
          margin-left: 30px;
          right: 0 !important;
        }
        .swiper-scrollbar-drag {
          border-radius: 0;
          background-color: white;
        }
      `}</style>
      <Swiper
        centeredSlides={true}
        modules={[Autoplay, Pagination, Scrollbar]}
        className="w-full !duration-1000"
        speed={500}
        loop={contents.length > 1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
      >
        <div>
          {contents.map((con, i) => (
            <SwiperSlide
              key={i}
              className="w-[100%] !duration-1000 !transition-all !h-[500px]"
            >
              <div className="flex flex-col lg:text-left lg:flex-row px-5 py-[30px] md:py-[97px] relative h-screen">
                <Image
                  src={con.image}
                  alt={con.title}
                  fill
                  priority={false}
                  className="object-cover"
                  onClick={() => handleImageClick(i)}
                />
                {activeIndex === i && (
                  <div className="z-10 ">
                    <h3>{con.title}</h3>
                    <p>{con.description}</p>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;

const contents = [
  {
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit aperiam laboriosam ea corrupti velit quod fugit sunt ex commodi.",
    image: mainInfoOne,
  },
  {
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit aperiam laboriosam ea corrupti velit quod fugit sunt ex commodi.",
    image: mainInfoSecond,
  },
  {
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit aperiam laboriosam ea corrupti velit quod fugit sunt ex commodi.",
    image: mainInfoThird,
  },
  {
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit aperiam laboriosam ea corrupti velit quod fugit sunt ex commodi.",
    image: mainInfoOne,
  },
  {
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit aperiam laboriosam ea corrupti velit quod fugit sunt ex commodi.",
    image: mainInfoSecond,
  },
  {
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit aperiam laboriosam ea corrupti velit quod fugit sunt ex commodi.",
    image: mainInfoThird,
  },
];
