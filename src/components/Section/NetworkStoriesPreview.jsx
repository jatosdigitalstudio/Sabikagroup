"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "@/components/UI/Card"
import { useRef } from "react";
import Link from "next/link";

export default function NetworkStories() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
      });
    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-55%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-white">
            <div className="sticky top-0 flex flex-row h-screen items-center overflow-hidden bg-[#EFF1F7] py-6">
                <div className="flex flex-col h-full justify-center items-center mx-auto pl-36 pr-12 bg-[#EFF1F7] z-30">
                    <h1 className="text-xl md:text-2xl lg:text-6xl font-medium mb-6">
                        Network Stories
                    </h1>
                    <p className="text-sm md:text-md lg:text-lg mb-12">
                        We bring innovation and integrity to every endeavor. <br/>Explore how we’re shaping the future 
                        of industries
                    </p>
                    <Link href="/network-stories" className="text-left">
                        Read More Stories
                    </Link>
                </div>
                <motion.div style={{ x }} className="z-10"> 
                    <Card />
                </motion.div>
            </div>
        </section>
  );
}
