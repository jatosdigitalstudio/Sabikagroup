import { headers } from "next/headers";
import { isMobile } from "../utils/isMobile";
import Hero from "@/components/Section/Hero";
import AboutPreview from "@/components/Section/AboutPreview";
import NetworkStories from "@/components/Section/NetworkStories";
import BusinessUnit from "@/components/Section/BusinessUnit";
import BusinessUnitMobile from "@/components/Section/BusinessUnitMobile";
import NewsPreview from "@/components/Section/NewsPreview";
import CTA from "@/components/Section/CallToAction";

export default async function Home() {
  const userAgent = await headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);
  return (
    <>
    <Hero/>
    <AboutPreview/>
    <NetworkStories/>
    { mobileCheck ? <BusinessUnitMobile/> : <BusinessUnit/> }
    <CTA/>
    <NewsPreview/>
    </>
  );
}
