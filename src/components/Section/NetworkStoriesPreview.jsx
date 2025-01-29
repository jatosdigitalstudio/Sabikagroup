"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "@/components/UI/Card"
import { useRef } from "react";

export default function NetworkStories() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
      });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-[#EFF1F7] py-6">
                <motion.div style={{ x }}> 
                    <Card />
                </motion.div>
            </div>
        </section>
  );
}
