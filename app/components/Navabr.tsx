"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './Toogle'
import { usePathname } from 'next/navigation'
import  Menu  from './Menu'
const Links=[
    {href:"/",title:"Home"},
    {href:"/news",title:"News"},
    {href:"/podcats",title:"Podcats"},
    {href:"/resources",title:"Resources"},
]
const Navabr = () => {
    const pathName=usePathname()
  return (
    <div className='h-12 bg-[#1A1A1A]  flex uppercase justify-between items-center p-4 lg:px-20 xl:px-40 '>
        {/* LOGO */}
        <div className='flex-1 '>
            <Link href='/' className='flex items-center gap-2'>
                <Image src="/Group.png" alt='' width={20} height={20} />
                <h4 className="text-[8px] font-bold text-white">FutureTech</h4>
            </Link>
        </div> 
        {/* MOBILE */}
        <div className='md:hidden'>
            <Menu/>
        </div>
        {/* LEFT LINKS */}
        <div className=' hidden md:flex gap-4 text-[#7E7E81] text-[12px] flex-1 text-center items-center'>
            {Links.map((item)=>(
                <Link key={item.title} href={item.href} className={`${pathName === item.href ?  "bg-primary p-2 rounded-sm text-primary-foreground font-extralight": ""}`}>{item.title}</Link>
            ))}
        </div>  
        {/* LEFT LINKS */}
        <div className='hidden  md:flex gap-2 flex-1 justify-end'>
            <Button className='bg-[#FFD11A] text-black'>Contact</Button>
            <ModeToggle/>
        </div>
    </div>
  )
}

export default Navabr
 