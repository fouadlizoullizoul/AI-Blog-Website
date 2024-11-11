"use client";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./Toogle";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
const Links = [
  {id:1, href: "/", title: "Home" },
  {id:2, href: "/news", title: "News" },
  {id:3, href: "/podcats", title: "Podcats" },
  {id:4, href: "/resources", title: "Resources" },
];
const Menu = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <Image
          alt=""
          src="/Icon.png"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
          className="cursor-pointer"
        />
      ) : (
        <IoIosClose
          className="cursor-pointer text-2xl text-white"
          onClick={() => setOpen(false)}

        />
      )}
      {open && (
        <div className="absolute left-0 top-[7rem] w-full flex items-center justify-center flex-col gap-8 z-10 h-[calc(100vh-5rem)]  bg-black">
          <ModeToggle />
          {Links.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className={`${
                pathName === link.href
                  ? "text-primary"
                  : "text-[#7E7E81] text-[12px] "
              }`}
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <Button className="bg-[#FFD11A] text-black">LOGIN</Button>
        </div>
      )}
    </div>
  );
};

export default Menu;
