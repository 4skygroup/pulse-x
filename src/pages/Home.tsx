import Services from "../components/services/Services.tsx";
import Hero from "../components/Hero.tsx";
import Revenue from "../components/revenue/Revenue.tsx";

function Home() {
    return (
        <>
            <Hero/>
            <Revenue/>
            <Services/>
        </>
    );
}

export default Home;