"use client"
import { motion } from "framer-motion";
import { BUSINESS_UNIT } from "@/lib/data";
import { Fade, Slide } from "react-awesome-reveal";

export default function NewAbout() {
  return (
    <section className="justify-center" id="about">
        <div className="container mx-auto">
             {/* Carousel Section */}
            <div className="bg-[#1C2677] w-full overflow-hidden py-8">
                <motion.div
                className="flex space-x-12 px-4 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    duration: 20,
                }}
                >
                {BUSINESS_UNIT.map((data, i) => (
                    <div key={i} className="flex-shrink-0">
                    <img src={data.logo} alt={data.name} className="h-24 w-auto rounded-md" />
                    </div>
                ))}
                </motion.div>
            </div>

            {/* About Section */}
            <div className="bg-white py-20">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12">
                   <Slide direction="left" cascade damping={0.2}>
                        <div className="text-black max-w-4xl mb-8 md:px-24">
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium mb-6">
                                About <br /> Sabika Group
                            </h1>
                        </div>
                    </Slide>
                    <Slide direction="right" cascade damping={0.2}>
                        <div className="text-white max-w-4xl mb-8 md:px-24">
                            <p className="text-black mb-6">
                                Founded by visionary entrepreneur Nofel Saleh Hilabi, Sabika Group is a dynamic holding company 
                                with a wide array of businesses across multiple industries. Our diverse portfolio includes property 
                                development, hospitality, media, and more. Each of our ventures is built on the pillars of innovation, 
                                integrity, and long-term sustainability, shaping the future one step at a time.
                            </p>
                            <div className="max-w-sm mb-8">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col bg-[#EFF1F7] text-black p-2 rounded-md justify-center items-center">
                                        <h1 className="text-3xl mb-2">10 </h1>
                                        <h2 className="text-sm">Years Experienced</h2>
                                    </div>
                                    <div className="flex flex-col bg-[#EFF1F7] text-black p-2 rounded-md justify-center items-center">
                                        <h1 className="text-3xl mb-2">23 </h1>
                                        <h2 className="text-sm">Business Unit</h2>
                                    </div>
                                    <div className="flex flex-col bg-[#EFF1F7] text-black p-2 rounded-md justify-center items-center">
                                        <h1 className="text-3xl mb-2">142</h1>
                                        <h2 className="text-sm">Project Challenge</h2>
                                    </div>
                                    <div className="flex flex-col bg-[#EFF1F7] text-black p-2 rounded-md justify-center items-center">
                                        <h1 className="text-3xl mb-2">10 </h1>
                                        <h2 className="text-sm">Years Experienced</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    </section>
  );
}
