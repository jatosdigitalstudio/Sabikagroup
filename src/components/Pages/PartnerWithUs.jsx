"use client"
import { motion } from "framer-motion"
import { fadeUpVariant,fadeUpVariant2 } from "@/utils/custom"
export default function PartnerWithUs() {
    return (
        <section className="relative h-screen flex items-center justify-center">
            <div className="px-12 container mx-auto">
                <div className="grid grid-cols-2 place-items-center">
                    <motion.div 
                        variants={fadeUpVariant}
                        initial="initial"
                        animate="animate"
                        className="text-black flex flex-col max-w-4xl justify-center mb-8 px-6 md:px-24">
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium mb-6">
                                Partner with <br/> <span className="text-[#345DA3]">Sabika Group </span> 
                            </h1>
                            <p>We believe in the power of collaboration to create extraordinary outcomes. 
                                Whether you’re an entrepreneur with a vision or an established business seeking 
                                growth, let’s build something remarkable together.</p>
                    </motion.div>
                    <motion.div 
                        variants={fadeUpVariant2}
                        initial="initial"
                        animate="animate"
                        className="bg-[#EFF1F7] w-[450px] h-[500px]">
                       
                    </motion.div>
                </div>
            </div>
        </section>
    )
}