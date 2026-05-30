const OurCommitment = () => {
    return (
        <section className="bg-[#111111] w-full px-4 md:px-16 py-12">

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

                {/* Left: Text content */}
                <div className="flex-1 text-center md:text-left">

                    <h2 className="font-glacial font-bold text-t3 md:text-h6 text-white mb-6">
                        Our commitment
                    </h2>

                    <p className="font-glacial text-t5 md:text-t4 text-pulse-x-subtitle-gray leading-relaxed mb-4">
                        We create high-impact advertising content designed to generate attention,
                        increase engagement, and deliver measurable growth for your business.
                        From strategic planning to creative production and campaign optimization,
                        every element is built to maximize performance across all social media
                        platforms.
                    </p>

                    <p className="font-glacial text-t5 md:text-t4 text-pulse-x-subtitle-gray leading-relaxed">
                        Our objective is to help your brand connect with the right audience,
                        strengthen visibility, and achieve long-term marketing success through
                        effective paid advertising strategies.
                    </p>
                </div>

                {/* Right: Social media image */}
                <div className="w-full md:w-auto flex justify-center">

                    <div className="bg-[#1E1E1E] rounded-2xl p-4 md:p-6 flex items-center justify-center w-full max-w-[400px] h-[220px] md:h-[300px]">
                        <img
                            src="/img-reseau.png"
                            alt="Social media platforms"
                            className="w-full h-full object-contain"
                        />
                    </div>

                </div>

            </div>

        </section>
    );
};

export default OurCommitment;