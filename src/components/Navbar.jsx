"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
const links = [{
    title:"Home",
    path:"/"
},{
    title:"About",
    path:"/about"
},{
    title:"Contact",
    path:"/contact"
},{
    title:"Blog",
    path:"/blog"
    },]

const Navbar = () => {
    const pathName = usePathname()
    const [isOpen,setIsOpen]=useState(false)
    const session = true
    const isAdmin =true
    return (
        <div className='w-full px-36 py-5 mb-16 rounded bg-blue-600/20 '>
        <div className='flex items-center justify-between flex-row'>
                <Link href='/' className='text-2xl font-bold'>NEXT LOGO</Link>
                <div>
                    <button className='flex md:hidden' onClick={()=>{setIsOpen(!isOpen)}}><CiMenuBurger className='w-[25px] h-[25px] text-white'></CiMenuBurger></button>
                </div>
                
                <div className={isOpen ? "text-xl absolute flex items-center justify-center gap-8 flex-col top-12 right-0 w-3/5 h-screen bg-blue-900/20 rounded-lg":"hidden"}>
                {links.map(link => {
                    return <Link className={`${pathName===link.path ? "bg-white py-1 px-2 rounded-l-full rounded-r-full text-black ": ""}`} href={link.path} key={link.path}>{ link.title}</Link>
                })}
            
            </div>
                <div className='text-xl hidden md:flex items-center justify-center gap-8 '>
                {links.map(link => {
                    return <Link className={`${pathName===link.path ? "bg-white py-1 px-2 rounded-l-full rounded-r-full text-black ": ""}`} href={link.path} key={link.path}>{ link.title}</Link>
                })}
            </div>
        </div>
        </div>
    )
}

export default Navbar