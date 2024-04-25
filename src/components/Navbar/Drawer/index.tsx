"use client";
import { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { GoX } from "react-icons/go";
import Link from "next/link";
import styles from "./Button.module.css";
import { Tooltip } from "@nextui-org/react";

// icons
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaTelegram, FaInstagram, FaBehance } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  menuItems: { href: string; label: string }[];
}

const Drawer = ({ isOpen, setIsOpen, menuItems }: DrawerProps) => {
  useEffect(() => {
    const closeDrawerOnOverlayClick = (event: MouseEvent) => {
      const drawer = document.getElementById("drawer");
      if (isOpen && drawer && !drawer.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", closeDrawerOnOverlayClick);
    }

    return () => {
      document.removeEventListener("mousedown", closeDrawerOnOverlayClick);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div id="drawer">
      <div
        className={`fixed w-full backdrop-filter backdrop-blur-2xl bg-opacity-65 sm:w-[400px] md:w-[600px] p-[16px] z-[1000] duration-400 ml-[-20px] h-[100vh] top-0 right-0 flex flex-col items-center ${
          isOpen
            ? "translate-x-[0px]"
            : "translate-x-full sm:translate-x-[400px] md:translate-x-[600px]"
        } py-6`}
      >
        <div className={isOpen ? "w-full flex flex-col h-full" : "hidden"}>
          <div>
            <div className="flex justify-end pr-3 sm:pr-10 pb-5">
              <button
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div>
              <svg className={`${styles.RayEffect}`} viewBox="0 0 1320 300">
                <text x="41.5%" y="50%" dy=".35em" text-anchor="middle">
                  RAYARCHPRO
                </text>
              </svg>
            </div>

            <div className="flex flex-col">
              <hr className="opacity-60 mb-8" />

              <div className="flex flex-col place-items-start pl-8 gap-12">
                {menuItems.map((item, i) => (
                  <button
                    key={i}
                    className={`${styles.hoverEffect} `}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link className={`${styles.LinkEf}`} href={item.href}>
                      {item.label}
                    </Link>
                  </button>
                ))}
              </div>
              <hr className="opacity-60 mt-8" />
            </div>
            <div className="pt-10 pl-8 flex gap-6">
              <Tooltip content="+998 99 708 7000" delay={50}>
                <Link
                  href="tel:+998997087000"
                  className="flex items-center justify-center p-2 rounded-full bg-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-device-mobile"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                    <path d="M11 4h2" />
                    <path d="M12 17v.01" />
                  </svg>
                </Link>
              </Tooltip>
              <Tooltip content="T.me / RAYARCHPRO" delay={50}>
                <Link
                  href="https://t.me/RAY_Archpro"
                  className="flex items-center justify-center  p-2 rounded-full   bg-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-telegram"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                  </svg>
                </Link>
              </Tooltip>
              <Tooltip content="Inst / RAYARCHPRO" delay={50}>
                <Link
                  href="https://www.instagram.com/ray.archpro"
                  className=" flex items-center justify-center p-2 rounded-full bg-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-instagram"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                  </svg>
                </Link>
              </Tooltip>

              <Tooltip content="Be.net / RAYARCHPRO" delay={50}>
                <Link
                  href="https://www.behance.net/rayarchpro1"
                  className="text-2xl flex items-center justify-center  p-2 rounded-full bg-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-behance"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
                    <path d="M3 12l4.5 0" />
                    <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
                    <path d="M16 6l3 0" />
                  </svg>
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
