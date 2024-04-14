"use client";
import { Button } from "@nextui-org/react";
import { GoX } from "react-icons/go";

import Link from "next/link";
interface thisProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  menuItems: { href: string; label: string }[];
}
const Drawer = ({ isOpen, setIsOpen, menuItems }: thisProps) => {
  return (
    <div id="drawer ">
      <div
        className={`fixed z-[-1] w-screen bottom-0 h-full duration-500 drawer 
             ${isOpen ? "!z-[1000]" : "opacity-0"}`}
      />
      <div
        className={`fixed w-full md:w-[600px] p-[16px] !z-[1000] !duration-400 ml-[-20px] h-[100vh] top-0 right-0 flex flex-col items-center ${
          isOpen
            ? "translate-x-[0px] duration-400"
            : "translate-x-full md:translate-x-[600px]"
        }  backdrop-filter backdrop-blur-2xl bg-opacity-65 py-6`}
      >
        <div
          className={
            isOpen ? "w-full !z-[1000] flex flex-col h-full  " : "hidden"
          }
        >
          <div>
            <div className="flex justify-end pb-10">
              <GoX
                className="text-white text-[38px] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="flex flex-col justify-start gap-4">
              <hr className="mb-8" />

              {menuItems.map((item, i) => {
                return (
                  <Button
                    key={i}
                    radius="sm"
                    variant="ghost"
                    className={`!border-none text-white !font-bold duration-250`}
                  >
                    <Link href="#">{item.label}</Link>
                  </Button>
                );
              })}
              <hr className="mt-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
