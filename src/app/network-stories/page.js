
export default function StoriesPage() {
    return (
        <>
        <section className="relative h-screen flex items-center justify-center">
            <div className="relative text-left text-black max-w-4xl px-6 md:px-24">
                <h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6"
                >
                    Network Stories
                </h1>
            </div>
        </section>
        </>
    )
}