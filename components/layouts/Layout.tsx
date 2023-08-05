import Header from '../Header'
import Sidebar from '../Sidebar'
import React from 'react'
 
export default function Layout({ children }) {
  return (
    <>
      <Header currentUser={null} />
      <Sidebar>
        <main>{children}</main>
      </Sidebar>
    </>
  )
};