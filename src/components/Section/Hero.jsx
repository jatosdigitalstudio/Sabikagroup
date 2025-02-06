"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUpVariant } from "@/utils/custom";
import { Button } from "../UI/Button";
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <motion.div 
        variants={fadeUpVariant}
        initial="initial"
        animate="animate"
        className="relative text-center text-black max-w-4xl px-6 md:px-24">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6">
          Empowering Industries. Building Legacies.
        </h1>
        <p className="text-sm md:text-md lg:text-lg mb-12">
          A diversified holding company driving innovation, collaboration, and sustainable success across industries
        </p>
        <div className="flex flex-col md:flex-row mx-auto justify-center gap-2 md:gap-4">
          <Link href="/#about" scroll>
              <Button 
              className="bg-[#283782] text-white px-8 py-3 rounded-md text-lg font-semibold"
              >
              Founder&apos;s Vision
              </Button>
          </Link>
          
          <Link href="/#business" scroll>
            <button 
              className="text-black px-8 py-3 rounded-md text-lg font-semibold"
            >
              Explore Our Business
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
