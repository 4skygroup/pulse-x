import Services from "../components/services/Services.tsx";
import Hero from "../components/Hero.tsx";
import Revenue from "../components/revenue/Revenue.tsx";
import FAQ from "../components/faq/Faq.tsx";
import Seo from "../components/Seo.tsx";

function Home() {
    return (
        <>
            <Seo
                title="Pulse X | Agence social media créative – Brand Content, Social Ads & Influence"
                description="Pulse X est une agence social media créative : brand content, social ads et marketing d'influence. Nous créons des contenus qui font grandir votre marque sur TikTok, Instagram et Meta."
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