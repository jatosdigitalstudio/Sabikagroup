import Hero from "@/components/Section/Hero";
import NetworkStories from "@/components/Section/NetworkStoriesPreview";
import BusinessPreview from "@/components/Section/BusinessesPreview";
import NewsPreview from "@/components/Section/NewsPreview";
import CTA from "@/components/Section/CallToAction";
export default function Home() {
  return (
    <>
    <Hero/>
    <NetworkStories/>
    <BusinessPreview />
    <CTA/>
    <NewsPreview/>
    </>
  );
}
