"use client"
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/utils/custom";
import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="bg-[#1C2677] justify-center py-32" id="about">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 px-6 gap-12">
                <motion.div 
                    variants={fadeUpVariant}
                    initial="initial"
                    animate="animate"
                    className="text-white max-w-4xl mb-8 md:px-24">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium md:mb-6">
                        About <br /> Sabika Group
                    </h1>
                    <p className="text-gray-200 mb-6">
                        Founded by visionary entrepreneur Nofel Saleh Hilabi, Sabika Group is a dynamic holding company 
                        with a wide array of businesses across multiple industries. Our diverse portfolio includes property 
                        development, hospitality, media, and more. Each of our ventures is built on the pillars of innovation, 
                        integrity, and long-term sustainability, shaping the future one step at a time.
                    </p>
                    <div className="max-w-sm mb-8">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col bg-[#EFF1F7] text-black p-2 rounded-md justify-center items-center">
                                <h1 className="text-3xl mb-2">10 </h1>
                                <h2 className="text-sm">Years Experienced</h2>
                            </div>
                            <div className="flex flex-col bg-[#EFF1F7] text-black p-2 rounded-md justify-center items-center">
                                <h1 className="text-3xl mb-2">23 </h1>
                                <h2 className="text-sm">Business Unit</h2>
                            </div>
                            <div className="flex flex-col bg-[#EFF1F7] text-black p-2 rounded-md justify-center items-center">
                                <h1 className="text-3xl mb-2">142</h1>
                                <h2 className="text-sm">Project Challenge</h2>
                            </div>
                            <div className="flex flex-col bg-[#EFF1F7] text-black p-2 rounded-md justify-center items-center">
                                <h1 className="text-3xl mb-2">10 </h1>
                                <h2 className="text-sm">Years Experienced</h2>
                            </div>
                        </div>
                    </div>

                    <div className="justify-center items-center">
                        <Link href="/about">
                            <span className="text-white">
                                Learn more about our Company
                            </span>
                        </Link>
                    </div>
                </motion.div>
                <motion.div 
                    variants={fadeUpVariant}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col justify-center max-w-4xl md:px-24">
                    <div className="flex justify-center mb-4">
                        <Image src="/Founder.png" width={200} height={300} alt="Nofel Saleh Hilabi" />
                    </div>
                    <p className="text-gray-200 italic md:text-md max-w-2xl  mb-4">
                        "At Sabika Group, we believe in the power of vision, resilience, and partnership. 
                        From humble beginnings to a thriving network of businesses, our journey has been 
                        guided by a commitment to excellence and a passion for creating opportunities. 
                        Together, we are shaping a future defined by innovation and shared success."
                    </p>
                    <h1 className="text-lg text-white"> <span className="font-bold">Nofel Saleh Hilabi</span> - Founder Sabika Group</h1>
                </motion.div>
            </div>
        </div>
    </section>
  );
}
