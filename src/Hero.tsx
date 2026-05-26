export default function Hero() {
    return (
        <section className="relative h-screen overflow-hidden bg-black text-white">

            {/* Gradient rouge bas */}
            <div className="absolute inset-0 from-black via-black to-red-700" />

            {/* Glow rouge */}
            <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-red-600 blur-3xl opacity-70 rounded-full" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">

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
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    Social Creative Agency
                </h1>

                {/* Subtitle */}
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10">
                    Social Agency - Media and Community Management
                </p>

                {/* Button */}
                <button className="px-8 py-3 border border-white rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-white hover:text-black">
                    Start
                </button>

            </div>
        </section>
    );
}