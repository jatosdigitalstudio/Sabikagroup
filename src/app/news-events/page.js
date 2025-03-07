import NewsEvents from "@/components/Pages/NewsEvents"
import NewsPreview from "@/components/Section/NewsPreview"

export const metadata = {
    title: 'Sabika Group - News & Events',
    description: "Learn more about Sabika Group, our mission, and our commitment to quality and elegance.",
};

export default function NewsPage() {
    return (
        <>
            <NewsEvents/>
            <NewsPreview/>
        </>
    )
}