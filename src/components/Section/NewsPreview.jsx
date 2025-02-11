"use client"
// import { motion, useScroll, useTransform } from "framer-motion";
import Card from "@/components/UI/Card"
import Link from "next/link";

export default function NewsPreview() {
    return (
        <section className="m-24 py-12 bg-white">
            <div className="flex flex-col ">
                <h1 className="text-xl md:text-2xl lg:text-6xl font-medium mb-12">
                    News & Events
                </h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-24">
                    <div className="flex flex-col rounded-xl">
                        <div className="bg-[#345DA3] text-white px-12 text-xl py-20 rounded-t-lg">Our Journey</div>
                        <div className="bg-[#EFF1F7] rounded-b-lg py-36"></div>
                    </div>
                    <div className="flex flex-col rounded-xl">
                        <div className="bg-[#345DA3] text-white px-12 text-xl py-20 rounded-t-lg">Our Experienced</div>
                        <div className="bg-[#EFF1F7] rounded-b-lg py-36"></div>
                    </div>
                    <div className="flex flex-col rounded-xl">
                        <div className="bg-[#345DA3] text-white px-12 text-xl py-20 rounded-t-lg">Our Businesses</div>
                        <div className="bg-[#EFF1F7] rounded-b-lg py-36"></div>
                    </div>
                </div>
            </div>
        </section>
  );
}
