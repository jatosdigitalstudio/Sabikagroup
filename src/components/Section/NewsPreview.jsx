"use client"
// import { motion, useScroll, useTransform } from "framer-motion";
import Card from "@/components/UI/Card"
import Link from "next/link";

export default function NewsPreview() {
    return (
        <section className="m-24 bg-white">
            <div className="flex flex-col ">
                <h1 className="text-xl md:text-2xl lg:text-6xl font-medium mb-12">
                    News & Events <br/>
                    From Sabika
                </h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-24">
                    <div className="flex flex-col rounded-xl">
                        <div className="bg-black py-24 rounded-t-lg">dwdw</div>
                        <div className="bg-[#EFF1F7] rounded-b-lg py-24">qwdqw</div>
                    </div>
                    <div className="flex flex-col rounded-xl">
                        <div className="bg-black py-24 rounded-t-lg">dwdw</div>
                        <div className="bg-[#EFF1F7] rounded-b-lg py-24">qwdqw</div>
                    </div>
                    <div className="flex flex-col rounded-xl">
                        <div className="bg-black py-24 rounded-t-lg">dwdw</div>
                        <div className="bg-[#EFF1F7] rounded-b-lg py-24">qwdqw</div>
                    </div>
                </div>
            </div>
        </section>
  );
}
