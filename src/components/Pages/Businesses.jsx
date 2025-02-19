"use client"
import { motion } from "framer-motion"
import { fadeUpVariant, fadeUpVariant3 } from "@/utils/custom"
import { BUSINESS_UNIT } from "@/lib/data"
import Link from "next/link"
export default function Businesses() {
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {
                        BUSINESS_UNIT.map((item) => (
                            <Link href={item.link} key={item.id}>
                                <motion.div 
                                    variants={fadeUpVariant3}
                                    initial="initial"
                                    animate="animate"
                                    className="flex flex-col justify-center items-center bg-[#345DA3] text-white rounded-md w-[300px] h-[200px]"
                                >
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <p className="text-gray-200 text-sm">{item.desc}</p>
                                </motion.div>
                            </Link>
                        ))
                    }
                   
                </div>
            </div>
            
        </section>
    )
}