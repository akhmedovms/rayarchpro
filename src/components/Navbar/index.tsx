import { useEffect, useState } from "react";
import Link from "next/link";
import Drawer from "./Drawer";

interface MenuItem {
  href: string;
  label: string;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [visible, setVisible] = useState(false);

  const menuItems: MenuItem[] = [
    { href: "/aboutus", label: "About us" },
    { href: "/contact", label: "Contact" },
    { href: "/team", label: "Team" },
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    const visibleNavbar = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos > 0);
    };

    window.addEventListener("scroll", visibleNavbar);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", visibleNavbar);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`z-50 py-6 fixed top-0 w-full transition duration-100 ${
        isScrolling ? "backdrop-filter backdrop-blur-md bg-opacity-65" : ""
      } ${visible ? "" : "-translate-y-full"}`}
    >
      <div className="flex justify-between items-center mx-auto px-4 lg:px-14">
        <div>
          <Link href="/">
            <h2 className="text-white text-4xl font-light">Ray</h2>
          </Link>
        </div>
        <div className="hidden lg:flex gap-14 text-white">
          {menuItems.map((item, i) => (
            <Link key={i} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <button
          className="cursor-pointer text-[42px] font-light text-white lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <svg
            className="icon icon-tabler icon-tabler-menu"
            width="38"
            height="38"
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
    </div>
  );
}
