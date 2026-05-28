type HeroComProps = {
    titre: string;
    citation: string;
    tagline: string;
    sousTitre: string;
    cta: string;
    description: string;
};

export default function HeroComp({
                                     titre,
                                     citation,
                                     tagline,
                                     sousTitre,
                                     cta,
                                     description,
                                 }: HeroComProps) {
    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-black">

            {/* Gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-black via-black via-45% to-red-600" />

            {/* Glow rouge */}
            <div className="absolute -bottom-62.5 left-1/2 -translate-x-1/2 w-300 h-125 bg-pulse-x-red blur-3xl opacity-80 rounded-full" />

            {/* Overlay léger */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Contenu */}
            <div className="relative z-10 flex min-h-screen flex-col px-20 max-w-[1400px] mx-auto w-full">
                {/* TOP */}
                <div className="grid grid-cols-[1.4fr_1fr] items-center gap-16 pt-32">

                    {/* LEFT */}
                    <div className="flex flex-col">
                        <h2 className="text-h2 text-white leading-[0.8] whitespace-nowrap">
                            {titre}
                        </h2>

                        <p className="mt-6 text-pulse-x-subtitle-gray text-t3 italic">
                            {citation}
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col min-w-0 max-w-[520px] justify-center">
                        <h2 className="text-white text-h6 leading-tight font-medium">
                            {tagline}
                        </h2>

                        <p className="mt-5 text-pulse-x-subtitle-gray text-t4">
                            {sousTitre}
                        </p>

                        <button className="mt-8 w-fit rounded-full border border-white px-8 py-4 text-white text-t4 transition-all duration-300 hover:bg-white hover:text-black">
                            {cta}
                        </button>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="max-w-[1200px] pb-10 mt-32">
                    <p className="text-white/90 text-t4 leading-relaxed tracking-wide">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}