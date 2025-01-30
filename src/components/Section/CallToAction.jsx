"use client"
import React from 'react'
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  
    const y = useTransform(scrollYProgress, [0, 1], ["-100vh", "50vh"])
  
    return (
      <div className='h-screen overflow-hidden '>
        <div className="flex flex-col justify-center items-center">
            <h1 className='text-center text-7xl text-black z-50'>Partner with Us</h1>
        </div>
        <motion.div style={{y}} className='relative h-full'>
            <Image 
                src="/calltoaction.jpg" fill 
                alt="Partner with Sabika Group" 
                style={{objectFit: "cover"}} 
                className='bg-black/30 relative'
            />
        </motion.div>

        <div className="bg-black/30"></div>
      </div>
    )
}