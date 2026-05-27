import Services from "../components/services/Services.tsx";
import Hero from "../components/Hero.tsx";
import Revenue from "../components/revenue/Revenue.tsx";
import FAQ from "../components/faq/Faq.tsx";

function Home() {
    return (
        <>
            <Hero/>
            <Revenue/>
            <Services/>
            <FAQ/>
        </>
    );
}

export default Home;