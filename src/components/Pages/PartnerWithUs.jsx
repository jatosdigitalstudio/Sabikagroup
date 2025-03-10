"use client"
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import { motion } from "framer-motion"
import { fadeUpVariant } from "@/utils/custom"
import FormInvestment from "../UI/FormInvestment";

export default function PartnerWithUs() {
    const [loading,setLoading] = useState(false)
   
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 1500);
    }, []);
    
    if (loading) return <Loading />
    return (
        <section className="relative flex items-center justify-center">
            <div className="px-6 md:px-20 my-36 container mx-auto place-items-center">
                <div className="flex flex-row md:flex-col items-center justify-center mb-10">
                    <motion.div 
                        variants={fadeUpVariant}
                        initial="initial"
                        animate="animate"
                        className=" text-center text-black flex flex-col max-w-4xl justify-center mb-8 px-6 md:px-24">
                            <h1 className="text-4xl lg:text-6xl font-medium mb-6">
                                Partner with <br/> <span className="text-[#345DA3]">Sabika Group </span> 
                            </h1>
                            <p>
                                Whether you’re an entrepreneur with a vision or an established business seeking 
                                growth, <br /> let’s build something remarkable together.
                            </p>
                    </motion.div>
                </div>

                <FormInvestment/>
            </div>
        </section>
    )
}