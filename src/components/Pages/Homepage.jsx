"use client"
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import Hero from "@/components/Section/Hero";
import AboutPreview from "@/components/Section/AboutPreview";
import NetworkStories from "@/components/Section/NetworkStories";
import BusinessUnit from "@/components/Section/BusinessUnit";
import BusinessUnitMobile from "@/components/Section/BusinessUnitMobile";
import NewsPreview from "@/components/Section/NewsPreview";
import CTA from "@/components/Section/CallToAction";
import useWindowSize from "@/utils/windowSize";

export default function Homepage() {
    const size = useWindowSize()
    const w = size.width < 768
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 1500);
    }, []);
    
    if (loading) return <Loading />
    return (
        <>
        <Hero/>
        <AboutPreview/>
        <NetworkStories/>
        { w ? <BusinessUnitMobile/> : <BusinessUnit/> }
        <CTA/>
        <NewsPreview/>
        </>
    );
}
