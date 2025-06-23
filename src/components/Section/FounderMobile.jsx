"use client"

import { Fade } from "react-awesome-reveal";

export default function FounderMobile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white mb-20">
        <Fade cascade damping={0.2}>
            <div className="grid md:grid-cols-2 w-full bg-white">
                {/* Left Section */}
                <div className="bg-[#1C2677] text-white p-10 flex flex-col justify-center md:px-20">
                    <div className="text-7xl font-serif italic text-white">“</div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
                        At Sabika Group, we believe in the power of vision, resilience, and partnership. 
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        From humble beginnings to a thriving network of businesses, our journey has been 
                        guided by a commitment to excellence and a passion for creating opportunities. 
                        Together, we are shaping a future defined by innovation and shared success.
                    </p>
                    <div className="text-blue-400 text-xl mb-1">★★★★★</div>
                    <p className="italic text-white text-lg">Nofel Saleh Hilabi</p>
                </div>

                {/* Right Section */}
                <div className="relative">
                    <img
                        src="/ceosabika.png"
                        alt="Nofel Saleh Hilabi"
                        className="w-full h-[600px] object-cover object-top"
                    />
                    <div className="absolute bottom-8 left-8 bg-black/30 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg border border-white/40">
                        <h3 className="text-2xl font-semibold">Nofel Saleh Hilabi</h3>
                        <p className="text-sm">CEO of Sabika Group</p>
                    </div>
                </div>
            </div>
        </Fade>
    </div>
  );
}
