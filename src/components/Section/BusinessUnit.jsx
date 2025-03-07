"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "@/components/UI/Card"
import { useRef } from "react";
import useWindowSize from "@/utils/windowSize";

export default function BusinessUnit() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const size = useWindowSize()
    const w = size.width > 768
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
       
    return (
        <section ref={targetRef} className="relative h-[300vh] max-w-[1920px] mx-auto bg-white" id="business">
            <div className="sticky top-0 flex flex-col lg:flex-row rounded-lg h-screen items-center overflow-hidden bg-[#EFF1F7] py-6">
                <div className="flex flex-col lg:h-full justify-center mt-36 px-8 lg:px-24 bg-[#EFF1F7] z-30">
                    <h1 className="text-5xl font-medium mb-6">
                        Explore Businesses
                    </h1>
                    <p className="text-sm md:text-lg mb-12">
                        Sabika Group operates in a variety of sectors, each with a dedicated focus on 
                        delivering exceptional results
                    </p>
                </div>
                <motion.div style={{x}} className="z-10 ml-12"> 
                    <Card />
                </motion.div>
            </div>
        </section>
  );
}
