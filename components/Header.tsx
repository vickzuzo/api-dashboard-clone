import Link from "next/link";
import { BsStars } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

import React, { useEffect, useState } from "react";
import { AppLogo } from "./logo";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";

const Header = ({ currentUser }) => {
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
          "flex justify-between h-28 w-full max-w-7xl mx-auto trasition ease-in-out duration-500",
          animateHeader && "h-20"
        )}
      >
        <div className="flex justify-center items-center cursor-pointer">
          <Link href="/dashboard">
            <AppLogo />
          </Link>
        </div>
        <div className="cursor-pointer m-2 p-1 rounded-lg inline-block lg:hidden">
          <GiHamburgerMenu size={20} />
        </div>
        <div className="hidden lg:flex items-center justify-between w-full">
          <nav className="flex justify-center items-center gap-7 w-[65%]">
            <Link
              href={"/"}
              className={twMerge(
                "font-medium text-gray-500 rounded-lg hover:text-gray-600 text-sm",
                pathname === "/" ? activeClassName : ""
              )}
            >
              Home
            </Link>
            <Link
              href={"/support"}
              className={twMerge(
                "font-medium text-gray-500 rounded-lg hover:text-gray-600 text-sm",
                pathname === "/support" ? activeClassName : ""
              )}
            >
              Support
            </Link>
            <Link
              href={"/docs"}
              className={twMerge(
                "font-medium text-gray-500 rounded-lg hover:text-gray-600 text-sm",
                pathname === "/docs" ? activeClassName : ""
              )}
            >
              API Documentation
            </Link>
            <Link
              href={"/about"}
              className={twMerge(
                "font-medium text-gray-500 rounded-lg hover:text-gray-600 text-sm",
                pathname === "/about" ? activeClassName : ""
              )}
            >
              About us
            </Link>
            <Link
              href={"/contact"}
              className={twMerge(
                "font-medium text-gray-500 rounded-lg hover:text-gray-600 text-sm",
                pathname === "/contact" ? activeClassName : ""
              )}
            >
              Contact us
            </Link>
          </nav>
          <div className="flex items-center gap-4 w-[32%]">
            <Link
              href="/contact"
              className="bg-white text-center flex items-center justify-center rounded-md text-sm text-blue-500 font-bold hover:shadow-lg hover:shadow-blue-100 transition duration-500 py-2 w-1/2"
            >
              Request a demo
            </Link>
            <Link
              href={currentUser ? "/dashboard" : "/auth/login"}
              className="bg-blue-500 text-center flex items-center justify-center rounded-md text-sm text-white uppercasehover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition duration-500 py-2 w-1/2"
            >
              My Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
