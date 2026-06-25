import {Link} from "react-router-dom";

export default function Hero() {
    return (
        <section className="relative h-screen overflow-hidden bg-black text-white">

            {/* Gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-black via-black via-45% to-red-600" />

            {/* Glow rouge */}
            <div className="absolute -bottom-62.5 left-1/2 -translate-x-1/2 w-300 h-125 bg-pulse-x-red blur-3xl opacity-80 rounded-full" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[100vh] flex-col items-center justify-center px-6 text-center">

                {/* Logos */}
                <div className="flex items-center gap-10 mb-8">
                    <img
                        src="/tiktok.png"
                        alt="TikTok"
                        className="h-12 object-contain"
                    />

                    <img
                        src="/meta.png"
                        alt="Meta"
                        className="h-12 object-contain"
                    />
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
                    Social Creative Agency
                </h1>

                {/* Subtitle */}
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10">
                    Social Agency - Media and Community Management
                </p>

                {/* Button */}
                <Link
                    to="/contact"
                    className="px-8 py-3 border border-white rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-white hover:text-black"
                >
                    Start
                </Link>

            </div>
        </section>
    );
}