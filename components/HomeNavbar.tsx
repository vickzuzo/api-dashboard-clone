import React from 'react';
import { AppLogo } from "./logo";
import { useRouter } from "next/router";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const HomeNavbar = ({ currentUser }) => {
    const { pathname } = useRouter();
    const activeClassName = "font-medium text-blue-500 rounded-lg underline underline-offset-4";
  return (
    <nav className="flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 self-center flex justify-center items-center gap-7 w-[25%]">
            <div className="mr-2">
                <Link href="/">
                    <AppLogo />
                </Link>
            </div>
        </div>
        <div className="mb-2 sm:mb-0 self-center flex justify-center items-center gap-7 w-[50%]">
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
        </div>
        <div className="sm:mb-0 self-center flex justify-center items-center gap-7 w-[25%]">
            <div className="h-10 w-full">
                <Link
                href="/contact"
                className="bg-white text-center flex items-center justify-center rounded-md text-sm text-blue-500 font-bold hover:shadow-lg hover:shadow-blue-100 transition duration-500 py-2 w-full"
                >
                Request a demo
                </Link>
            </div>
            <div className="h-10 w-full">
                <Link
                href={currentUser ? "/dashboard" : "/auth/login"}
                className="bg-blue-500 text-center flex items-center justify-center rounded-md text-sm text-white uppercasehover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition duration-500 py-2 w-full"
                >
                My Account
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default HomeNavbar