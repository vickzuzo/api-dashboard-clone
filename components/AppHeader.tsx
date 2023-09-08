import Link from "next/link";
import { BsStars } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

import React, { useEffect, useState } from "react";
import { AppLogo } from "./logo";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";

const AppHeader = ({ currentUser }) => {
  const { pathname } = useRouter();
  const handleSignOut = (e) => {
    e.preventDefault();
  };

  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 70) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const activeClassName =
    "font-medium text-blue-500 rounded-lg underline underline-offset-4";
  return (
    <header
      className={twMerge(
        "w-full sticky top-0 z-30 backdrop-filter backdrop-blur-lg trasition ease-in-out duration-500 ",
        animateHeader && "shadow-lg shadow-blue-100/30 bg-white/50"
      )}
    >
      <div
        className={twMerge(
          "flex justify-between h-16 w-full max-w-7xl mx-auto trasition ease-in-out duration-500",
          animateHeader && "h-16"
        )}
      >
        <div className="flex justify-center items-center cursor-pointer">
          <Link href="/dashboard">
            <AppLogo />
          </Link>
          <div className="cursor-pointer m-2 p-1 rounded-lg">
            <GiHamburgerMenu size={20} />
          </div>
        </div>
        <div className="cursor-pointer m-2 p-1 rounded-lg inline-block lg:hidden">
          <GiHamburgerMenu size={20} />
        </div>
        <div className="hidden lg:flex items-center justify-between w-full">
          <nav className="flex justify-center items-center gap-7 w-[65%]">
            search bar
          </nav>
          <div className="flex items-center gap-4 w-[32%]">
            message and notification icon
            user logged in
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
