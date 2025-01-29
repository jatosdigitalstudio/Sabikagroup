
export default function AboutPage() {
    return (
        <>
        <section className="relative h-screen flex items-center justify-center">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-black/90">
                <img 
                src="/hero-bg.jpg" 
                alt="Sabika Group" 
                className="w-full h-full object-cover mix-blend-overlay"
                />
            </div> */}
            
            <div className="relative text-left text-black max-w-4xl px-6 md:px-24">
                <h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6"
                >
                Empowering Industries. Transforming Futures.
                </h1>
                <p className="text-sm md:text-md lg:text-lg mb-12">
                At Sabika Group, we’re more than just a holding company – we’re a partner in progress. 
                We bring innovation and integrity to every endeavor. Explore how we’re shaping the future 
                of industries
                </p>
                <div className="flex flex-col md:flex-row mx-auto justify-center gap-2 md:gap-4">
                <button 
                    className="bg-[#283782] text-white px-8 py-3 rounded-md text-lg font-semibold"
                >
                    Explore Our Businesses
                </button>
                <button 
                    className="text-black px-8 py-3 rounded-md text-lg font-semibold"
                >
                    Founder&apos;s Vision
                </button>
                </div>
            </div>
        </section>
        </>
    )
}