"use client"
import { useState,useEffect } from "react"
import { motion } from "framer-motion";
import { fadeUpVariant, fadeUpVariant2, fadeUpVariant3} from "@/utils/custom";
import Loading from "@/app/loading";

export default function AboutCompany() {
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 1500);
    }, []);

    if (loading) return <Loading />
    return (
        <>
        <section className="justify-center py-32 px-6" id="about">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                    <motion.div 
                        variants={fadeUpVariant}
                        initial="initial"
                        animate="animate"
                        className="max-w-4xl mb-8 md:px-24">
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium mb-6">
                                About <br /> <span className="text-[#345DA3]">Sabika Group</span> 
                            </h1>
                            <p className="text-sm md:text-md lg:text-lg mb-8">
                                Founded by visionary entrepreneur Nofel Saleh Hilabi, Sabika Group is a dynamic holding company 
                                with a wide array of businesses across multiple industries. Our diverse portfolio includes property 
                                development, hospitality, media, and more. Each of our ventures is built on the pillars of innovation, 
                                integrity, and long-term sustainability, shaping the future one step at a time.
                            </p>
                    </motion.div>
                
                    <div className="flex flex-col space-y-6 max-w-4xl md:px-24">
                        <motion.div
                            variants={fadeUpVariant2}
                            initial="initial"
                            animate="animate"
                            className="bg-[#1C2677] text-white px-6 md:px-12 py-8 rounded-md">
                            <h4 className="text-4xl font-bold mb-4">Mision</h4>
                            <p>
                                Become a company that is in accordance with the values desired by the Assignor, 
                                and is able to provide satisfaction and compete among other companies in Indonesia.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={fadeUpVariant3}
                            initial="initial"
                            animate="animate"
                            className="bg-[#2F6FB2] text-white px-6 md:px-12 py-8 rounded-md">
                            <h4 className="text-4xl font-bold mb-4">Vision</h4>
                            <p>
                                Providing professional expertise services in various fields, such as detailed planning, 
                                study, analysis, concept, supervision to engineering, and management to government and 
                                private agencies by prioritizing ethics, honesty and responsibility based on professional 
                                ethics, and being able to provide the best and smartest solutions in accordance with the 
                                schedule plan, efficiency and can always anticipate the progress of the times.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

