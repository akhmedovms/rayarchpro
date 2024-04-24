"use client";
import { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { GoX } from "react-icons/go";
import Link from "next/link";
import styles from "./Button.module.css";

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
              <hr className=" opacity-60 mb-8" />

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
