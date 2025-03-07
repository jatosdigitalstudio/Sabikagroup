"use client"
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import { motion } from "framer-motion"
import { fadeUpVariant, fadeUpVariant3 } from "@/utils/custom"

export default function NewsEvents() {
    const [loading,setLoading] = useState(true)
        useEffect(() => {
            setTimeout(() => {
            setLoading(false);
            }, 1500);
        }, []);
        
    if (loading) return <Loading />
    return (
        <section className="relative h-screen flex flex-col items-center justify-center">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 px-6">
                    <motion.div 
                        variants={fadeUpVariant}
                        initial="initial"
                        animate="animate"
                        className="text-black flex max-w-4xl items-center justify-center mb-8  md:px-24">
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium mb-6">
                                Get the latest news and events from <span className="text-[#345DA3]">Sabika Group</span> 
                            </h1>
                    </motion.div>
                    <motion.div 
                        variants={fadeUpVariant3}
                        initial="initial"
                        animate="animate"
                        className="grid grid-cols-2 gap-4 md:gap-8 md:px-24">
                        <div className="bg-[#1C2677] text-center text-white py-24 px-6 rounded-md">
                            Events
                        </div>
                        <div className="bg-[#1C2677] text-center text-white py-24 px-6 rounded-md">
                            Events
                        </div>
                        <div className="bg-[#1C2677] text-center text-white py-24 px-6 rounded-md">
                            Events
                        </div>
                        <div className="bg-[#1C2677] text-center text-white py-24 px-6 rounded-md">
                            Events
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}