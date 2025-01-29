"use client"
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/utils/custom";
import Link from "next/link";
export default function BusinessPreview() {
  return (
    <section className="relative flex flex-col items-center justify-center my-24" id="business">
      <motion.div 
        variants={fadeUpVariant}
        initial="initial"
        animate="animate"
        className="relative text-center text-black max-w-4xl mb-8 px-6 md:px-24">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6">
            Explore Our Businesses
        </h1>
        <p className="text-sm md:text-md lg:text-lg mb-12">
            Sabika Group operates in a variety of sectors, each with a dedicated focus on 
            delivering exceptional results. We’re shaping industries one project at a time
        </p>
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 place-items-center ">
        <div className="bg-black px-36 py-24 rounded-md "></div>
        <div className="bg-black px-36 py-24 rounded-md "></div>
        <div className="bg-black px-36 py-24 rounded-md "></div>
        <div className="bg-black px-36 py-24 rounded-md "></div>
        <div className="justify-center items-center">
            <Link href="/businesses">
                More Businesses
            </Link>
        </div>
      </div>
    </section>
  );
}
