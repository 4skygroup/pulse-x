import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./components/services/Services.tsx";
import About from "./components/About.tsx";
import BrandContent from "./pages/BrandContent.tsx";
import Contact from "./components/form/Contact.tsx";
import Footer from "./components/footer/Footer.tsx";
import SocialAds from "./pages/SocialAds.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Influence from "./pages/Influence.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.tsx";

function App() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About/> } />
                <Route path="/contact" element={<Contact />} />

                <Route path="/brandcontent" element={<BrandContent />} />
                <Route path="/socialads" element={<SocialAds />} />
                <Route path="/influence" element={<Influence />} />

                <Route path="/mentions-legales" element={<MentionsLegales/>} />
                <Route path="/confidentialite" element={<PolitiqueConfidentialite/>} />

            </Routes>
            <Footer />
        </>
    );
}

export default App;