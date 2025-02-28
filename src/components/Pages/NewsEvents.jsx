"use client"
import { motion } from "framer-motion"
import { fadeUpVariant } from "@/utils/custom"
export default function NewsEvents() {
    return (
        <section className="relative h-screen flex items-center justify-center">
            <div className="container mx-auto">
                <div className="grid grid-cols-2">
                    <motion.div 
                        variants={fadeUpVariant}
                        initial="initial"
                        animate="animate"
                        className="text-black flex max-w-4xl items-center justify-center mb-8 px-6 md:px-24">
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium mb-6">
                                Get the latest news and events from <span className="text-[#345DA3]">Sabika Group</span> 
                            </h1>
                    </motion.div>
                    <motion.div 
                        variants={fadeUpVariant}
                        initial="initial"
                        animate="animate"
                        className="grid grid-cols-2 gap-8 px-24">
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