"use client"
import { motion } from "framer-motion"
import { fadeUpVariant } from "@/utils/custom"

export default function Businesses() {
    return (
        <section className="relative h-screen flex items-center justify-center">
            <div className="px-12 container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <motion.div 
                        variants={fadeUpVariant}
                        initial="initial"
                        animate="animate"
                        className=" text-center text-black flex flex-col max-w-4xl justify-center mb-8 px-6 md:px-24">
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium mb-6">
                                Our Portfolio of <br/> <span className="text-[#345DA3]">Businesses </span> 
                            </h1>
                            <p>Sabika Group’s diverse portfolio reflects our commitment to innovation and excellence 
                                across industries. Explore the businesses that define our legacy</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}