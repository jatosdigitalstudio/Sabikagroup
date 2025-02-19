import SabikaGroupSEO from "../head"
export default function AboutPage() {
    return (
        <>
        <SabikaGroupSEO 
            pageTitle="Sabika Group - About Us"
            pageDescription="Learn more about Sabika Group, our mission, and our commitment to quality and elegance."
            canonicalUrl="https://www.sabikagroup.co.id/about"
        />
        <section className="relative h-screen flex items-center justify-center">
            <div className="relative text-left text-black max-w-4xl px-6 md:px-24">
                <h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6"
                >
                    About Sabika Group
                </h1>
            </div>
        </section>
        </>
    )
}