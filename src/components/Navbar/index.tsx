import { useEffect, useState } from "react";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import Drawer from "./Drawer";
export function Navbarr() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const menuItems = [
    { href: "/aboutus", label: "About us" },
    { href: "/contact", label: "Contact" },
    { href: "/team", label: "Team" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos > prevScrollPos || prevScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div
      className={`bg-gray-800 py-6 fixed top-0 w-full transition duration-100  ${
        visible ? "" : "-translate-y-full"
      } `}
    >
      <div className="flex justify-between items-center bigContainer">
        <div>
          <Link href="/">
            <h2 className="text-white text-4xl font-light">Ray</h2>
          </Link>
        </div>
        <div className="hidden md:flex gap-14 text-white">
          {menuItems.map((item, i) => (
            <Link key={i} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <button
          className="cursor-pointer text-[42px] font-light text-white md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <svg
            className="icon icon-tabler icon-tabler-menu"
            width="38"
            height="38"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
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
