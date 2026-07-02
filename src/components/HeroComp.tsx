import { Link } from "react-router-dom";

type HeroComProps = {
  titre: string;
  citation: string;
  tagline: string;
  sousTitre?: string;
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
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-pulse-x-red blur-3xl opacity-80 rounded-full md:w-[1000px] md:h-[400px]" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6">
        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-14 lg:gap-16 pt-28 lg:pt-32">
          {/* LEFT */}
          <div className="flex flex-col">
            <h2 className="text-white leading-[0.85] text-5xl sm:text-6xl md:text-7xl lg:text-h2">
              {titre}
            </h2>

            <p className="mt-5 text-pulse-x-subtitle-gray italic text-lg sm:text-xl md:text-2xl">
              {citation}
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col min-w-0 max-w-[520px] justify-center">
            <h2 className="text-white leading-tight font-medium text-2xl sm:text-3xl lg:text-h6">
              {tagline}
            </h2>

            <p className="mt-5 text-pulse-x-subtitle-gray text-base sm:text-lg md:text-xl">
              {sousTitre}
            </p>

            <Link
              to="/contact"
              className="mt-8 w-fit rounded-full border border-white px-6 py-3 sm:px-8 sm:py-4 text-white text-base sm:text-lg transition-all duration-300 hover:bg-white hover:text-black"
            >
              {cta}
            </Link>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="max-w-[1200px] pb-10 mt-20 lg:mt-32">
          <p className="text-white/90 leading-relaxed tracking-wide text-base sm:text-lg md:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
