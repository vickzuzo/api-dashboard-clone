import Link from 'next/link'
import {BsStars} from 'react-icons/bs'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-4 py-4 border-b-4 border-gray-700'>
      <div className='flex flex-row items-center'>
        <h4 className='mx-2 text-center text-2xl'>Api Dashboard</h4>
      </div>
      <div className='flex flex-row items-center'>
        <h2>Welcome back, Yenum</h2>
      </div>
    </div>
  )
}

export default Header