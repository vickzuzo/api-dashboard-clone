import React from 'react';
import { AppLogo } from "./logo";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
    const { pathname } = useRouter();
  return (
    <nav className="flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 self-center flex">
            <div className="mr-2">
                <Link href="/">
                    <AppLogo />
                </Link>
            </div>
        </div>
        <div className="sm:mb-0 self-center">
            <div className="h-10" style={{display: "table-cell", verticalAlign: "middle"}}>
                {pathname === "/auth/login" && (
                    <Link href={"/auth/register"} className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">
                    Create an Account
                    </Link>
                )}
                {pathname === "/auth/register" && (
                    <Link href={"/auth/login"} className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">
                    Login
                    </Link>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar