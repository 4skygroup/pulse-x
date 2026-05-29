import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./components/services/Services.tsx";
import About from "./components/About.tsx";
import BrandContent from "./pages/BrandContent.tsx";
import Contact from "./components/formulaire/Contact.tsx";
import Footer from "./footer/Footer.tsx";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About/> } />
                <Route path="/contact" element={<Contact />} />

                <Route path="/brandcontent" element={<BrandContent />} />
                {/*<Route path="/socialads" element={<SocialAds />} />*/}
                {/*<Route path="/influence" element={<Influence />} />*/}
            </Routes>
            <Footer />
        </>
    );
}

export default App;