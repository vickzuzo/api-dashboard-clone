import Link from 'next/link'
import React from 'react'
import {BsStars} from 'react-icons/bs'
import { RxDashboard, RxPerson } from 'react-icons/rx'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'

const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen p-4 flex flex-col justify-between'>
            <Link href='/' className='w-20'>
                <div className='bg-blue-800 text-white  p-3 rounded-lg inline-block'>
                    <BsStars size={20} />
                </div>
            </Link>

            <Link href='/' className='flex flex-row w-full my-2 items-start pl-2 hover:bg-white hover:w-full hover:my-2 hover:border-l-blue-700 hover:border-l-2'>
                <div className='hover:bg-blue-200 cursor-pointer my-2 p-1 rounded-lg inline-block'>
                    <RxDashboard size={20} />
                </div>
                <h1 className='my-2 p-1 text-sm hover:font-bold opacity-0 hover:opacity-100'>Dashboard</h1>
            </Link>

            <Link href='/' className='flex flex-row w-full my-2 items-start pl-2 hover:bg-white hover:w-full hover:my-2 hover:border-l-blue-700 hover:border-l-2'>
                <div className='bg-gray-200 hover:bg-gray-200 cursor-pointer my-2 p-1 rounded-lg inline-block'>
                    <RxPerson size={20} />
                </div>
                {/* <h1 className=' my-2 p-1 text-sm hover:font-bold'>Users & Roles</h1> */}
            </Link>
            <Link href='/' className='flex flex-row w-full my-2 items-start pl-2 hover:bg-white hover:w-full hover:my-2 hover:border-l-blue-700 hover:border-l-2'>
                <div className='bg-gray-200 hover:bg-gray-200 cursor-pointer my-2 p-1 rounded-lg inline-block'>
                    <HiOutlineShoppingBag size={20} />
                </div>
                {/* <h1 className=' my-2 p-1 text-sm hover:font-bold'>Payment History</h1> */}
            </Link>
            <Link href='/' className='flex flex-row w-full my-2 items-start pl-2 hover:bg-white hover:w-full hover:my-2 hover:border-l-blue-700 hover:border-l-2'>
                <div className='bg-gray-200 hover:bg-gray-200 cursor-pointer my-2 p-1 rounded-lg inline-block'>
                    <RxPerson size={20} />
                </div>
                {/* <h1 className=' my-2 p-1 text-sm hover:font-bold'>Invoices</h1> */}
            </Link>

            <Link href='/' className='flex flex-row w-full my-2 items-start pl-2 hover:bg-white hover:w-full hover:my-2 hover:border-l-blue-700 hover:border-l-2'>
                <div className='bg-gray-200 hover:bg-gray-200 cursor-pointer my-2 p-1 rounded-lg inline-block'>
                    <RxPerson size={20} />
                </div>
                {/* <h1 className=' my-2 p-1 text-sm hover:font-bold'>Api Keys</h1> */}
            </Link>

            {/* <h1 className='my-2 text-gray-400 font-bold'>ADMINISTRATION</h1> */}

            <Link href='/' className='flex flex-row w-full my-2 items-start pl-2 hover:bg-white hover:w-full hover:my-2 hover:border-l-blue-700 hover:border-l-2'>
                <div className='bg-gray-200 hover:bg-gray-200 cursor-pointer my-2 p-1 rounded-lg inline-block'>
                    <RxPerson size={20} />
                </div>
                {/* <h1 className=' my-2 p-1 text-sm hover:font-bold'>Content Management</h1> */}
            </Link>
            <Link href='/' className='flex flex-row w-full my-2 items-start pl-2 hover:bg-white hover:w-full hover:my-2 hover:border-l-blue-700 hover:border-l-2'>
                <div className='bg-gray-200 hover:bg-gray-200 cursor-pointer my-2 p-1 rounded-lg inline-block'>
                    <RxPerson size={20} />
                </div>
                {/* <h1 className=' my-2 p-1 text-sm font-bold'>Settings</h1> */}
            </Link>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar