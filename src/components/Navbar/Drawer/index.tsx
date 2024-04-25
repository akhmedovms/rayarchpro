"use client";
import { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { GoX } from "react-icons/go";
import Link from "next/link";
import styles from "./Button.module.css";
// icons
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { PiBehanceLogo } from "react-icons/pi";

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
        className={`fixed w-full backdrop-filter backdrop-blur-2xl bg-opacity-65 md:w-[600px] p-[16px] z-[1000] duration-400 ml-[-20px] h-[100vh] top-0 right-0 flex flex-col items-center ${
          isOpen
            ? "translate-x-[0px]"
            : "translate-x-full md:translate-x-[600px]"
        } py-6`}
      >
        <div className={isOpen ? "w-full flex flex-col h-full" : "hidden"}>
          <div>
            <div className="flex justify-end pb-10">
              <GoX
                className="text-white text-[38px] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="flex flex-col">
              <hr className="opacity-60 mb-8" />

              <div className="flex flex-col place-items-start pl-5 gap-4">
                {menuItems.map((item, i) => (
                  <Button
                    key={i}
                    className={`${styles.hoverEffect} bg-transparent`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link className={`${styles.LinkEf} `} href={item.href}>
                      {item.label}
                    </Link>
                  </Button>
                ))}
              </div>
              <hr className="opacity-60 mt-8" />
            </div>
            <div className="pt-10 pl-8 flex flex-col gap-3">
              <Link
                href="tel:+998997087700"
                className="text-2xl flex items-center gap-1"
              >
                <IoPhonePortraitOutline color="white" />
                <span className="text-white text-xl"> +998 99 708 77 00</span>
              </Link>

              <Link href="" className="text-2xl">
                <BsTelegram color="white" />
              </Link>
              <Link href={""} className="text-2xl">
                <FaInstagram color="white" />
              </Link>
              <Link href={""} className="text-2xl">
                <PiBehanceLogo color="white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
