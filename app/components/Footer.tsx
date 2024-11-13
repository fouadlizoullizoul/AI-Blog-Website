import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='flex justify-between flex-col px-4 sm:px-10 lg:px-20 xl:px-40 h-[30vh] '>
        <div className='flex justify-between flex-wrap gap-8  '>
            <div className='flex flex-col gap-4'>
                <h1>Home</h1>
                <div className='flex flex-col gap-2 text-[#666666] text-sm hover:text-primary cursor-pointer'>
                    <p>Features</p>
                    <p>Blogs</p>
                    <p>Resources</p>
                    <p>Testimonials</p>
                    <p>Contact Us</p>
                    <p>Newsletter</p>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h1>News</h1>
                <div className='flex flex-col gap-2 text-[#666666] text-sm hover:text-primary cursor-pointer'>
                    <p>Trending Stories</p>
                    <p>Featured Videos</p>
                    <p>Technology</p>
                    <p>Health</p>
                    <p>Politics</p>
                    <p>Environment</p>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h1>Blogs</h1>
                <div className='flex flex-col gap-2 text-[#666666] text-sm hover:text-primary cursor-pointer'>
                    <p>Quantum Computing</p>
                    <p>AI Ethics</p>
                    <p>Space Exploration</p>
                    <p>Biotechnology</p>
                    <p>Renewable Energy</p>
                    <p>Biohacking</p>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h1>Podcasts</h1>
                <div className='flex flex-col gap-2 text-[#666666] text-sm hover:text-primary cursor-pointer'>
                    <p>AI Revolution</p>
                    <p>AI Revolution</p>
                    <p>TechTalk AI</p>
                    <p>AI Conversations</p>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h1>Resources</h1>
                <div className='flex flex-col gap-2 text-[#666666] text-sm hover:text-primary cursor-pointer'>
                    <p>Whitepapers</p>
                    <p>Reports</p>
                    <p>Ebooks</p>
                    <p>Testimonials</p>
                    <p>Research Papers</p>
                </div>
            </div>
        </div>

        <div className='flex justify-between my-10 flex-wrap'>
            <div className='flex gap-2  text-[#666666] text-sm'>
                <p className='border-r pr-2'>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className='flex justify-between items-center gap-5'>
                <FaTwitter className='hover:text-primary'/>
                <FaLinkedin className='hover:text-primary'/>
                <FaGithub className='hover:text-primary'/>
            </div>
            <div className='text-[#666666] text-sm'>
                <p>© 2024 FutureTech. All rights reserved.</p>
            </div>
        </div>
    </section>
  )
}

export default Footer
