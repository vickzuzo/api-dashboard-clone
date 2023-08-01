import Link from 'next/link'
import React from 'react'
import { RxDashboard, RxPerson } from 'react-icons/rx'
import { MdContentCut } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineApi } from 'react-icons/ai'
import { FaFileInvoiceDollar, FaMoneyBillWave } from 'react-icons/fa'


const Sidebar = ({children}) => {
  return (

    <div class="flex flex-row h-[calc(100vh-5rem)]">
        <aside className='w-1/5 overflow-y-auto'>
                <Link href='/' className='flex flex-row w-full my-2 items-start pl-2 hover:bg-white hover:w-full hover:my-2 hover:border-l-blue-700 hover:border-l-2'>
                    <div className='bg-gray-200 hover:bg-blue-200 cursor-pointer my-2 p-1 rounded-lg inline-block'>
                        <RxDashboard size={20} />
                    </div>
                    <h1 className='my-2 p-1 text-sm hover:font-bold'>Dashboard</h1>
                </Link>
                <h1 className='pl-2 my-2 text-gray-400 font-bold'> Management </h1>

                <Link href='/' className='flex flex-row w-full my-2 items-start pl-2 hover:bg-white hover:w-full hover:my-2 hover:border-l-blue-700 hover:border-l-2'>
                    <div className='bg-gray-200 hover:bg-blue-200 cursor-pointer my-2 p-1 rounded-lg inline-block'>
                        <RxPerson size={20} />
                    </div>
                    <h1 className='my-2 p-1 text-sm hover:font-bold'>User Management</h1>
                </Link>
                <Link href='/' className='flex flex-row w-full my-2 items-start pl-2 hover:bg-white hover:w-full hover:my-2 hover:border-l-blue-700 hover:border-l-2'>
                    <div className='bg-gray-200 hover:bg-blue-200 cursor-pointer my-2 p-1 rounded-lg inline-block'>
                        <FaMoneyBillWave size={20} />
                    </div>
                    <h1 className='my-2 p-1 text-sm hover:font-bold'>Payment History</h1>
                </Link>
                <Link href='/' className='flex flex-row w-full my-2 items-start pl-2 hover:bg-white hover:w-full hover:my-2 hover:border-l-blue-700 hover:border-l-2'>
                    <div className='bg-gray-200 hover:bg-blue-200 cursor-pointer my-2 p-1 rounded-lg inline-block'>
                        <FaFileInvoiceDollar size={20} />
                    </div>
                    <h1 className='my-2 p-1 text-sm hover:font-bold'>Invoices</h1>
                </Link>

                <Link href='/' className='flex flex-row w-full my-2 items-start pl-2 hover:bg-white hover:w-full hover:my-2 hover:border-l-blue-700 hover:border-l-2'>
                    <div className='bg-gray-200 hover:bg-blue-200 cursor-pointer my-2 p-1 rounded-lg inline-block'>
                        <AiOutlineApi size={20} />
                    </div>
                    <h1 className='my-2 p-1 text-sm hover:font-bold'>Api Keys</h1>
                </Link>

                <h1 className='pl-2 my-2 text-gray-400 font-bold'>ADMINISTRATION</h1>

                <Link href='/' className='flex flex-row w-full my-2 items-start pl-2 hover:bg-white hover:w-full hover:my-2 hover:border-l-blue-700 hover:border-l-2'>
                    <div className='bg-gray-200 hover:bg-blue-200 cursor-pointer my-2 p-1 rounded-lg inline-block'>
                        <MdContentCut size={20} />
                    </div>
                    <h1 className=' my-2 p-1 text-sm hover:font-bold'>Content Management</h1>
                </Link>
                <Link href='/' className='flex flex-row w-full my-2 items-start pl-2 hover:bg-white hover:w-full hover:my-2 hover:border-l-blue-700 hover:border-l-2'>
                    <div className='bg-gray-200 hover:bg-gray-200 cursor-pointer my-2 p-1 rounded-lg inline-block'>
                        <FiSettings size={20} />
                    </div>
                    <h1 className='my-2 p-1 text-sm font-bold'>Settings</h1>
                </Link>
        </aside>
        <main className='bg-blue-500 w-4/5 overflow-y-auto'>{children}</main>
    </div>
  )
}

export default Sidebar
