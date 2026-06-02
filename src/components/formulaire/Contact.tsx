import ContactForm from "./ContactForm.tsx";
import Seo from "../Seo.tsx";

export default function Contact() {
    return (
        <>
        <Seo
            title="Contact | Pulse X Agency"
            description="Ready to grow your brand? Contact Pulse X to launch your social media strategy. Our team of experts is here to help you boost your online presence."
            path="/contact"
        />
        <div className="relative w-full min-h-[calc(90vh-100px)] flex items-center justify-center overflow-hidden">

            {/* Gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-black via-black via-45% to-red-600" />

            {/* Glow rouge */}
            <div className="absolute -bottom-62 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-pulse-x-red blur-3xl opacity-80 rounded-full" />

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col items-center px-4 py-12 md:py-20 text-black">

                {/* Cadre principal */}
                <div className="max-w-4xl w-full mx-auto bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-14 shadow-sm border border-white/20 mt-6">

                    {/* Title */}
                    {/* <h2 className="text-t3 md:text-h6 text-center uppercase tracking-wide mb-2 text-white drop-shadow-sm">
                        Contact us
                    </h2> */}

                    <p className="text-2xl md:text-3xl text-right mb-2 tracking-wide text-white drop-shadow-sm">
                        Let&apos;s start your strategy !
                    </p>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                        {/* LEFT */}
                        <div className="md:col-span-5 flex justify-center items-center p-4">
                            <img
                                src="/logoPulseX.png"
                                alt="Logo Pulse X Management"
                                loading="lazy"
                                className="w-full max-w-[280px] md:max-w-full h-auto object-contain drop-shadow-sm"
                            />
                        </div>

                        {/* RIGHT */}
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}