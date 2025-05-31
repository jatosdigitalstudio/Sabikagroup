"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUpVariant, fadeUpVariant3 } from "@/utils/custom";
import { NETWORK_STORIES } from "@/lib/data";
import Loading from "@/app/loading";

export default function Network() {
  const [loading,setLoading] = useState(true)
    useEffect(() => {
      setTimeout(() => {
      setLoading(false);
      }, 1500);
  }, []);
  
  if (loading) return <Loading />
  return (
    <section className="relative flex flex-col items-center justify-center" id="stories">
      <div className="px-6 my-36 container mx-auto place-items-center">
        <motion.div 
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          className="relative text-center text-black max-w-4xl mb-8  md:px-24 ">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6">
            Network <span className="text-[#345DA3]">Stories</span> 
          </h1>
          <p className="text-sm md:text-md lg:text-lg mb-12">
            We bring innovation and integrity to every endeavor.
            Explore how we’re shaping the future of industries
          </p>
        </motion.div>
        <motion.div 
          variants={fadeUpVariant3}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3  gap-12 lg:pb-28 place-items-center">
          {
            NETWORK_STORIES.map((item)  => (
              <div className="flex flex-col relative w-[300px] " key={item.id}>
                <div className="text-white rounded-md overflow-hidden mb-6">
                  <Image 
                    src={item.image}
                    width={500}
                    height={500}
                    alt={item.name}
                  />
                </div>
                <div className="px-2">
                  <h2 className="text-xl font-bold mb-2 bottom-0">{item.name}</h2>
                  <p>"{item.text}"</p>
                </div>
              </div>
            ))
          }
        </motion.div>
      </div>
    </section>
  );
}
