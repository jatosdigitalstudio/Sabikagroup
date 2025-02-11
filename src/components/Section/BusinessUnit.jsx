"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "@/components/UI/Card"
import { useRef } from "react";
import Link from "next/link";

export default function BusinessUnit() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
      });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] max-w-[1440px] mx-auto bg-white">
            <div className="sticky top-0 flex flex-row rounded-lg h-screen items-center overflow-hidden bg-[#EFF1F7] py-6">
                <div className="flex flex-col h-full justify-center px-24 bg-[#EFF1F7] z-30">
                    <h1 className="text-xl md:text-2xl lg:text-5xl font-medium mb-6">
                        Explore Businesses
                    </h1>
                    <p className="text-sm md:text-md lg:text-lg mb-12">
                        Sabika Group operates in a variety of sectors, each with a dedicated focus on 
                        delivering exceptional results
                    </p>
                    {/* <Link href="/network-stories" className="text-left">
                        Read More Stories
                    </Link> */}
                </div>
                <motion.div style={{ x }} className="z-10"> 
                    <Card />
                </motion.div>
            </div>
        </section>
  );
}
