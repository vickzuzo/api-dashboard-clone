import Link from 'next/link'
import { useRouter } from "next/router";
import {BsStars} from 'react-icons/bs'
import { RxPerson } from 'react-icons/rx'
import { GiHamburgerMenu } from 'react-icons/gi'

import React from 'react'
import { AppLogo } from './logo'
import { SubHeaderText } from './texts'


const AuthHeader = ({ currentUser}) => {
  const { pathname } = useRouter();
    const handleSignOut = (e) => {
        e.preventDefault();
    }
    return (
      <header className="h-[5%] shrink-0 z-10">
        <div className="fixed w-full flex justify-between p-2">
          <div className='flex justify-center items-center cursor-pointer m-5'>
            <Link href="/">
              <AppLogo/>
            </Link>
          </div>
          <nav className="flex justify-center items-center m-5">
            {pathname !== "/register" && (
              <Link href={'/register'} className="font-medium">
                <div className='bg-gray-100 hover:bg-blue-200 rounded-lg cursor-pointer m-2 p-2 inline-block'>
                  <SubHeaderText text="CREATE AN ACCOUNT" />
                </div>
              </Link>
            )}
            {pathname !== "/login" && (
              <Link href={'/login'} className="font-medium">
                <div className='bg-gray-100 hover:bg-blue-200 rounded-lg cursor-pointer m-2 p-2 inline-block'>
                  <SubHeaderText text="LOGIN" />
                </div>
              </Link>
            )}
            
          </nav>
        </div>
      </header>
    )
}

export default AuthHeader;