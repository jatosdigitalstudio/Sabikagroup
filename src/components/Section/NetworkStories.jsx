"use client"
import { motion } from "framer-motion";
import { fadeUpVariant, fadeUpVariant3 } from "@/utils/custom";
import { NETWORK_STORIES } from "@/lib/data";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

export default function NetworkStories() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 mb-20" id="stories">
      <Fade cascade damping={0.2}>
        <div className="relative text-center text-black max-w-4xl mb-8 px-6 md:px-24 lg:pt-24">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6">
            Network Stories
          </h1>
          <p className="text-sm md:text-md lg:text-lg mb-12">
            We bring innovation and integrity to every endeavor.
            Explore how we’re shaping the future of industries
          </p>
        </div>
      </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:pb-28 place-items-center">
          <Fade cascade damping={0.4}>
            {
              NETWORK_STORIES.map((item) => (
                <div className="flex flex-col relative w-[300px] px-4" key={item.id}>
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
            {/* <div className="justify-center">
                <Link href="/network-stories" className="underline">
                  Read More Stories
                </Link>
            </div> */}
        </Fade>  

        </div>
    </section>
  );
}
