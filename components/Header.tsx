import Link from 'next/link'
import {BsStars} from 'react-icons/bs'
import { RxPerson } from 'react-icons/rx'
import { GiHamburgerMenu } from 'react-icons/gi'

import React from 'react'


const Header = ({ currentUser}) => {
    const handleSignOut = (e) => {
        e.preventDefault();
    }
    return (
      <header className="h-20 shrink-0">
        <div className="fixed w-full flex justify-between px-2 py-2   border-b-2 border-gray-700">
          <div className='flex justify-center items-center cursor-pointer'>
            <Link href={'/'} className="font-medium p-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
                <div className='bg-gray-200 hover:bg-gray-200 cursor-pointer m-2 p-1 rounded-lg inline-block'>
                    <GiHamburgerMenu size={20} />
                </div>
            </Link>
            <Link href="/">
              <div className='hover:bg-blue-500 bg-blue-800 text-white p-2 rounded-lg inline-block'>
                  <BsStars size={20} />
              </div>
            </Link>
            <h1 className="text-2xl font-bold">API MANAGEMENT APP</h1>
          </div>
          <div className='flex justify-center space-x-2  items-center'>
            Search component goes here
          </div>
          <nav className="flex justify-center items-center">
            <Link href={'/'} className="font-medium text-slate-700 rounded-lg hover:text-slate-900">
              <div className='bg-gray-200 hover:bg-blue-200 cursor-pointer m-2 p-1 rounded-2xl inline-block'>
                  <RxPerson size={20} />
              </div>
            </Link>
            <Link href={'/'} className="font-medium text-slate-700 rounded-lg hover:text-slate-900">
              <div className='bg-gray-200 hover:bg-blue-200 cursor-pointer m-2 p-1 rounded-2xl inline-block'>
                  <RxPerson size={20} />
              </div>
            </Link>
            <div className='border border-gray-200 border-1 cursor-pointer  rounded-lg hover:bg-blue-200'>
              <div className='flex flex-row justify-center items-center'>
                <Link href={'/'} className="font-medium text-slate-700 rounded-lg hover:text-slate-900">
                  <div className='bg-gray-200 m-2 p-1 rounded-2xl inline-block'>
                      <RxPerson size={20} />
                  </div>
                </Link>
                <div className='px-2'>
                  <h1>User Name</h1>
                  <p>User Role</p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
}

export default Header;