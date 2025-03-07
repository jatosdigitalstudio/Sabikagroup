"use client"
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import { motion } from "framer-motion"
import { fadeUpVariant, fadeUpVariant2 } from "@/utils/custom"
import { BUSINESS_UNIT } from "@/lib/data"
import Link from "next/link"
import Image from "next/image";

export default function Businesses() {
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 1500);
    }, []);
    
    if (loading) return <Loading />
    return (
        <section className="relative flex items-center justify-center">
            <div className="px-6 my-36 container mx-auto place-items-center">
                <div className="flex flex-row md:flex-col items-center justify-center mb-12">
                    <motion.div 
                        variants={fadeUpVariant}
                        initial="initial"
                        animate="animate"
                        className=" text-center text-black flex flex-col max-w-4xl justify-center mb-8 px-6 md:px-24">
                            <h1 className="text-4xl lg:text-6xl font-medium mb-6">
                                Our Portfolio of <br/> <span className="text-[#345DA3]">Businesses </span> 
                            </h1>
                            <p>Sabika Group’s diverse portfolio reflects our commitment to innovation and excellence 
                                across industries. Explore the businesses that define our legacy</p>
                    </motion.div>
                </div>
                <motion.div 
                    variants={fadeUpVariant2}
                    initial="initial"
                    animate="animate"
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {
                        BUSINESS_UNIT.map((item) => (
                            <Link href={item.link} key={item.id} target="_blank" className="group relative w-full overflow-hidden shadow-md rounded-lg transition-all hover:shadow-xl">
                                <div className={`flex flex-col w-[400px] h-[350px] py-8 px-6 bg-black text-2xl text-white`}>
                                    <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill={true}
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-[#1C2677]/30" />
                    
                                    <div className="relative flex h-full flex-col items-start justify-end p-2 md:p-4 text-left text-white">
                                    <h2 className="text-xl mb-2">{item.name}</h2>
                                    <p className="text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    )
}