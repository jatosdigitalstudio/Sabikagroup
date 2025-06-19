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
    const y = useTransform(scrollYProgress, [0, 1], ["-100vh", "50vh"])
  
    return (
      <div className='h-screen bg-[#EFF1F7] overflow-hidden mb-24'>
        <motion.div style={{y}} className='h-full'>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center w-[80%] lg:w-[60%] z-50 md:px-22">
                <h1 className='text-center text-4xl md:text-7xl text-white mb-6'>Lets build the Future Together</h1>
                <p className='text-center text-white w-full lg:w-[80%]'>Join us in creating impactful ventures and unlocking new opportunities. Whether you’re an investor, entrepreneur, or industry leader, we’d love to hear from you.</p>
                  <Link href="/partner" className='mt-12'>
                    <Button>
                      See Inquirements
                    </Button>
                  </Link>
            </div>
            <Image 
                src="https://images.pexels.com/photos/7641842/pexels-photo-7641842.jpeg?_gl=1*1kgssrw*_ga*ODY1OTg2Nzk1LjE3MzkyMDU1NDU.*_ga_8JE65Q40S6*czE3NTAzMzE1NDckbzQkZzEkdDE3NTAzMzE2NzgkajU5JGwwJGgw" fill 
                alt="Partner with Sabika Group" 
                style={{objectFit: "cover"}} 
                className='brightness-[30%] relative'
            />
        </motion.div>
      </div>
    )
}