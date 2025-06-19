"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUpVariant, fadeUpVariant2, fadeUpVariant3 } from "@/utils/custom";
import { Button } from "../UI/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center z-0">
      <Image
        src="https://images.pexels.com/photos/188035/pexels-photo-188035.jpeg?_gl=1*1l3l2ql*_ga*ODY1OTg2Nzk1LjE3MzkyMDU1NDU.*_ga_8JE65Q40S6*czE3NTAyMjY0NDUkbzQkZzEkdDE3NTAyMjY1MzEkajUxJGwwJGgw"
        alt="background"
        fill
        quality={100}
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-white/70" />
      <div className="relative text-center text-black max-w-5xl px-6 md:px-24">
        <motion.div 
          variants={fadeUpVariant}
          initial="initial"
          animate="animate">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium mb-6">
              Empowering Industries. Building Legacies.
            </h1>
        </motion.div>
        <motion.div 
          variants={fadeUpVariant2}
          initial="initial"
          animate="animate"
          className="mx-auto md:w-[80%]">
            <p className="max-w-3xl text-sm md:text-md lg:text-lg mb-12">
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
