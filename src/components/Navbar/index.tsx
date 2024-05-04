import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "./Drawer/Button.module.css";
import Image from "next/image";
import logo from "@/assets/logo.jpg";

interface MenuItem {
  href: string;
  label: string;
}

const Drawer = dynamic(() => import("./Drawer"), { ssr: false });

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    const handleVisibleNavbar = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos > 0);
    };

    if (!isOpen) {
      window.addEventListener("scroll", handleVisibleNavbar);
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsScrolling(false);
    }

    return () => {
      clearTimeout(scrollTimeout);
      if (!isOpen) {
        window.removeEventListener("scroll", handleVisibleNavbar);
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <nav
      className={`z-50 py-6 fixed top-0 w-full ${
        isOpen ? "" : "transition duration-100"
      } ${
        isScrolling && !isOpen
          ? "backdrop-filter backdrop-blur-md bg-opacity-65"
          : ""
      } ${visible ? "" : "-translate-y-full"}`}
    >
      <div className="flex justify-between items-center mx-auto px-6 sm:px-14 lg:px-14">
        <div>
          <Link href="/">
            <Image src={logo} alt="Logo" width={64} priority />
          </Link>
        </div>
        <div className="hidden lg:flex gap-14 text-white">
          {menuItems.map((item, i) => (
            <button key={i} className={`${styles.hoverEffect} `}>
              <Link href={item.href} className="">
                {item.label}
              </Link>
            </button>
          ))}
        </div>
        <button
          className="cursor-pointer font-light text-white lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <svg
            className="icon icon-tabler icon-tabler-menu"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            stroke="#ffffff"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8l16 0" />
            <path d="M4 16l16 0" />
          </svg>
        </button>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} menuItems={menuItems} />
    </nav>
  );
};
const menuItems: MenuItem[] = [
  { href: "/About", label: "ABOUT US" },
  { href: "/Portfolio", label: "PORTFOLIO" },
  { href: "/Contact", label: "CONTACTS" },
  { href: "/Team", label: "TEAM" },
];
