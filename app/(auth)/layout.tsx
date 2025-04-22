import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='auth h-screen flex justify-center items-center'>{children}</main>
  )
}

export default Layout
