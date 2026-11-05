import Services from "../components/services/Services.tsx";
import Hero from "../components/Hero.tsx";
import Revenue from "../components/revenue/Revenue.tsx";
import FAQ from "../components/faq/Faq.tsx";
import Seo from "../components/Seo.tsx";

function Home() {
    return (
        <>
            <Seo
                title="Pulse X | Social Creative Agency – Brand Content, Social Ads & Influence"
                description="Pulse X is a social creative agency specializing in Brand Content, Social Ads and Influencer Marketing. We create impactful content to grow your brand on TikTok, Instagram, and Meta."
                path="/"
            />
            <Hero/>
            <Revenue/>
            <Services/>
            <FAQ/>
        </>
    );
}

export default Home;