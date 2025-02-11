"use client"
import React from 'react'
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '../UI/Button';
import Link from 'next/link';
export default function CTA() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
    const { scrollXProgress } = useScroll({
        target: container,
        offset: ['start center', 'end center']
      })
  
    const y = useTransform(scrollYProgress, [0, 1], ["-100vh", "50vh"])
    const x = useTransform(scrollXProgress, [0, 2], ["100vh", "-150vh"])
  
    return (
      <div className='h-screen overflow-hidden '>
        <motion.div style={{y}} className='h-full'>
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center z-50 px-22">
                <h1 className='text-center text-7xl text-white mb-6'>Lets build the Future Together</h1>
                <p className='text-center text-white lg:w-[80%]'>Join us in creating impactful ventures and unlocking new opportunities. Whether you’re an investor, entrepreneur, or industry leader, we’d love to hear from you.</p>
                  <Link href="/partner" className='mt-12'>
                    <Button>
                      See Inquirements
                    </Button>
                  </Link>
            </div>
            <Image 
                src="/calltoaction.jpg" fill 
                alt="Partner with Sabika Group" 
                style={{objectFit: "cover"}} 
                className='brightness-[30%] relative'
            />
        </motion.div>
      </div>
    )
}