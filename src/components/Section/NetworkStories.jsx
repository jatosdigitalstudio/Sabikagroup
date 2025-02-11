"use client"
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/utils/custom";
import { NETWORK_STORIES } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function NetworkStories() {
  return (
    <section className="relative flex flex-col items-center justify-center my-16" id="business">
      <motion.div 
        variants={fadeUpVariant}
        initial="initial"
        animate="animate"
        className="relative text-center text-black max-w-4xl mb-8 px-6 md:px-24 lg:pt-28">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6">
          Network Stories
        </h1>
        <p className="text-sm md:text-md lg:text-lg mb-12">
          We bring innovation and integrity to every endeavor.
          Explore how we’re shaping the future of industries
        </p>
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 place-items-center lg:pb-28">
        {
          NETWORK_STORIES.map((item)  => (
            <div className="w-[300px] px-4">
              <div className="text-white rounded-md bg-black px-4 py-20 justify-center">
                
              </div>
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                <p>{item.text}</p>
            </div>
           
          ))
        }
        {/* <div className="w-[300px] text-white rounded-md bg-black px-4 py-20 justify-center">
          <h2 className="text-xl font-bold bg-(url)">Sandiaga Uno</h2>
          <p>360 Digital Agency</p>
        </div>
        <div className="w-[300px] text-center text-white rounded-md bg-black px-4 py-20">
          <h2 className="text-xl font-bold bg-(url)">John LBF</h2>
          <p>Worker Provider</p>
        </div>
        <div className="w-[300px] text-white rounded-md bg-black px-4 py-20 justify-center">
          <h2 className="text-xl font-bold bg-(url)">Raffi Ahmad</h2>
          <p>Hotels & Property</p>
        </div>
        <div className="w-[300px] text-white rounded-md bg-black px-4 py-20 justify-center">
          <h2 className="text-xl font-bold bg-(url)">Baim Wong</h2>
          <p>Travel & Umroh</p>
        </div> */}
        <div className="justify-center items-center">
            <Link href="/network-stories">
                More Stories
            </Link>
        </div>
      </div>
    </section>
  );
}
