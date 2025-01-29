"use client"
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/utils/custom";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <motion.div 
        variants={fadeUpVariant}
        initial="initial"
        animate="animate"
        className="relative text-center text-black max-w-4xl px-6 md:px-24">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6">
          Empowering Industries. Transforming Futures.
        </h1>
        <p className="text-sm md:text-md lg:text-lg mb-12">
          We bring innovation and integrity to every endeavor. <br/>Explore how we’re shaping the future 
          of industries
        </p>
        <div className="flex flex-col md:flex-row mx-auto justify-center gap-2 md:gap-4">
          <button 
            className="bg-[#283782] text-white px-8 py-3 rounded-md text-lg font-semibold"
          >
            Explore Our Businesses
          </button>
          <button 
            className="text-black px-8 py-3 rounded-md text-lg font-semibold"
          >
            Founder&apos;s Vision
          </button>
        </div>
      </motion.div>
    </section>
  );
}
