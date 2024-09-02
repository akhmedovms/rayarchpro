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

function Slider() {
  return (
    <div className="flex flex-col gap-8">
      <style jsx global>{`
        .swiper-scrollbar {
          background-color: #717171;
          height: 2px !important;
          margin-bottom: 18px;
          width: 100%;
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
        autoplay={true}
        speed={500}
        scrollbar={{ draggable: true }}
      >
        {contents.map((con, i) => (
          <SwiperSlide
            key={i}
            className="w-[100%] !duration-1000 !transition-all !h-[600px] lg:!h-[700px]"
          >
            <div className="flex flex-col xl:text-left xl:flex-row px-5 py-[30px] md:py-[97px] relative h-screen">
              <Image
                src={con.image}
                alt={con.title}
                fill
                priority={false}
                className="object-cover"
              />
              <div
                className={`z-10 pl-5 pt-24 transition-opacity duration-500`}
              >
                <div className="flex justify-center items-center flex-col">
                  <h3 className="text-4xl text-white">{con.title}</h3>
                  <p className="text-2xl text-white">{con.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
// background-color: rgba(89, 131, 252, 1);
// background-image: linear-gradient(180deg, rgba(89, 131, 252, 1) 69%, rgba(21, 21, 21, 1) 100%);

const contents = [
  {
    title: "Residental Interiors",
    description: "Interior",
    image: mainInfoOne,
  },
  {
    title: "Residental Interiors",
    description: "Exterior",
    image: mainInfoSecond,
  },
  {
    title: "Residental Interiors",
    description: "Modern Exterior",
    image: mainInfoThird,
  },
  {
    title: "Residental Interiors",
    description: "Modern Design",
    image: mainInfoOne,
  },
  {
    title: "Residental Interiors",
    description: "Classic",
    image: mainInfoSecond,
  },
  {
    title: "Residental Interiors",
    description: "Exterior Design",
    image: mainInfoThird,
  },
];
