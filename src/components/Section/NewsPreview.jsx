"use client"
// import { motion, useScroll, useTransform } from "framer-motion";
import Card from "@/components/UI/Card"
import Link from "next/link";
import { NEWS_EVENT } from "@/lib/news";
export default function NewsPreview() {
    return (
        <section className="m-24 py-12 bg-white">
            <div className="flex flex-col ">
                <h1 className="text-xl md:text-2xl lg:text-6xl font-medium mb-12">
                    News & Events
                </h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-24">
                    {NEWS_EVENT.map((item) => (
                        <Link key={item.id} href="/">
                            <div className="flex flex-col rounded-xl">
                                <div className="bg-[#345DA3] text-center text-white px-12 text-xl py-20 rounded-t-lg">Image Ilustration</div>
                                <div className="flex flex-col min-h-[350px] bg-[#EFF1F7] rounded-b-lg justify-start items-center p-6">
                                    <h1 className="font-medium text-2xl py-2">{item.title}</h1>
                                    <p className="text-gray-600">{item.meta}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
  );
}
