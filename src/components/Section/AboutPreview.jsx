"use client"
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/utils/custom";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-[#345DA3] grid grid-cols-2 justify-center py-36 my-24" id="about">
        <motion.div 
            variants={fadeUpVariant}
            initial="initial"
            animate="animate"
            className="relative text-white max-w-4xl mb-8 px-6 md:px-24">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium mb-6">
                    About Sabika Group
                </h1>
                <p className="text-sm md:text-md lg:text-lg mb-8">
                    Sabika Group is a forward-thinking holding company with a mission to create 
                    value through strategic investments, innovation, and operational excellence. 
                    With a diverse portfolio spanning multiple industries, we are committed to 
                    driving growth, fostering collaboration, and delivering sustainable impact."
                </p>
                <div className="max-w-md mb-12">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col bg-[#EFF1F7] text-black p-2 rounded-md justify-center items-center">
                            <h1 className="text-4xl mb-2">10 </h1>
                            <h2>Years Experienced</h2>
                        </div>
                        <div className="flex flex-col bg-[#EFF1F7] text-black p-2 rounded-md justify-center items-center">
                            <h1 className="text-4xl mb-2">23 </h1>
                            <h2>Business Unit</h2>
                        </div>
                        <div className="flex flex-col bg-[#EFF1F7] text-black p-2 rounded-md justify-center items-center">
                            <h1 className="text-4xl mb-2">142</h1>
                            <h2>Project Challenge</h2>
                        </div>
                        <div className="flex flex-col bg-[#EFF1F7] text-black p-2 rounded-md justify-center items-center">
                            <h1 className="text-4xl mb-2">10 </h1>
                            <h2>Years Experienced</h2>
                        </div>
                    </div>
                </div>

                <div className="justify-center items-center">
                    <Link href="/about">
                        Learn more about our Journey
                    </Link>
                </div>
        </motion.div>
        <div className="flex flex-col max-w-4xl md:px-24">
            <div className="bg-black text-center text-white px-36 py-24 mb-12 rounded-md">
                Image Founder
            </div>
            <p className="text-white italic md:text-md max-w-2xl lg:text-lg mb-8">
                "At Sabika Group, we believe in the power of vision, resilience, and partnership. 
                From humble beginnings to a thriving network of businesses, our journey has been 
                guided by a commitment to excellence and a passion for creating opportunities. 
                Together, we are shaping a future defined by innovation and shared success."
            </p>
            <h1 className="text-lg text-white">Nofel Saleh Hilabi, Founder Sabika Group</h1>
        </div>
    </section>
  );
}
