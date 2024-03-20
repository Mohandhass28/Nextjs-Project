"use client"
import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { FaAngleRight } from "react-icons/fa";
import Content from '../components/Content/Content';

const Home = () => {
  const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open);
    };
    const animate = 'flex'
    return (
        <>
            <div className="flex">
                <div className='flex sticky max-[925px]:bg-transparent  max-[925px]:fixed top-0 h-0'>
                    {open && (<Navbar className={animate} />)}
                    <div className="h-lvh flex justify-center items-center">
                        <div className="cursor-pointer flex items-center justify-center w-[20px] h-[120px] bg-blue-950" onClick={handleClick}>
                            <span className=''>
                                <FaAngleRight />
                            </span>
                        </div>
                    </div>
                </div>
                <Content issidebaropen={open} />
            </div>
        </>
    )
}
export default Home