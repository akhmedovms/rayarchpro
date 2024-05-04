"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Image from "next/image";

import mainInfoOne from "@/assets/InfoArchitects/mainInfoOne.jpg";
import mainInfoSecond from "@/assets/InfoArchitects/mainInfoSecond.jpg";
import mainInfoThird from "@/assets/InfoArchitects/mainInfoThird.jpg";

function Slider() {
  return (
    <div className="flex flex-col gap-8">
      <Swiper
        centeredSlides={true}
        modules={[Autoplay, Pagination]}
        className="w-full !duration-1000"
        speed={500}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '" style="width: 20px; height: 2px; background-color: ' +
              (index === 0 ? "white" : "white") +
              '"></span>'
            );
          },
        }}
      >
        {contents.map((con, i) => (
          <Swiper key={i}>
            <SwiperSlide className="w-[100%] !duration-1000 !transition-all !h-[500px] relative">
              <div className="flex flex-col lg:text-left lg:flex-row px-5 py-[30px] md:py-[97px] ">
                <Image
                  src={con.image}
                  alt={con.title}
                  fill
                  priority={false}
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        ))}
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
];
