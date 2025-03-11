"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUpVariant, fadeUpVariant2, fadeUpVariant3 } from "@/utils/custom";
import { Button } from "../UI/Button";
import { ButtonMinimal } from "../UI/ButtonMinimal";

export default function Hero() {
  return (
    <section className="relative h-screen max-h-[1200px] flex items-center justify-center">
      <div className="relative text-center text-black max-w-4xl px-6 md:px-24">
        <motion.div 
          variants={fadeUpVariant}
          initial="initial"
          animate="animate">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6">
              Empowering Industries. Building Legacies.
            </h1>
        </motion.div>
        <motion.div 
          variants={fadeUpVariant2}
          initial="initial"
          animate="animate">
            <p className="text-sm md:text-md lg:text-lg mb-12">
              A diversified holding company driving innovation, collaboration, and sustainable success across industries
            </p>
        </motion.div>
        <motion.div
          variants={fadeUpVariant3}
          initial="initial"
          animate="animate"
          className="flex flex-col md:flex-row mx-auto justify-center gap-2 md:gap-4">
            <Link href="/#about" scroll>
              <Button className="bg-[#283782] text-white px-8 py-3 rounded-md text-lg font-semibold">
                Founder&apos;s Vision
              </Button>
            </Link>
            <Link href="/#business" scroll className="flex p-4 justify-center">
              Explore Our Business
            </Link>
        </motion.div>
      </div>
    </section>
  );
}
