const HeroSection = () => {
    return (
        <div>
            <section className="w-full bg-white">
                {/* Image placeholder */}
                <div className="w-full bg-white flex items-center justify-center" style={{ minHeight: "500px" }}>
                    <img
                        src=""
                        alt="Hero"
                        className="w-full h-full object-cover"
                        style={{ minHeight: "500px" }}
                    />
                </div>

                {/* Red banner */}
                <div className="w-full bg-[#970909] py-4 px-8">
                    <p className="text-white text-t5 text-center font-glacial italic">
                        Pulse X is powered by a team of specialists who are deeply in tune with evolving digital behaviors.
                    </p>
                </div>
            </section>

            <section className="w-full bg-[#970909] py-16 px-8 flex flex-col items-center">
                {/* Intro paragraph */}
                <p className="text-white text-t5 text-center max-w-3xl mb-12 font-glacial leading-relaxed">
                    From the start, we set out to rethink the traditional agency model by bringing multiple skill sets together under
                    one role, combining client guidance, creative thinking, and production expertise. This approach was designed
                    to match a new generation of talent eager to leverage their resources.
                </p>

                {/* Three columns */}
                <div className="w-full max-w-4xl flex flex-col gap-10">
                    {/* Project leads */}
                    <div className="text-center">
                        <h3 className="text-white text-t4 font-bold font-glacial mb-3">Project leads</h3>
                        <p className="text-pulse-x-subtitle-gray text-t6 font-glacial leading-relaxed max-w-2xl mx-auto">
                            Your day-to-day partners, they coordinate every aspect of your project. From defining the strategy to
                            overseeing execution, they ensure everything runs smoothly while continuously optimizing performance to push
                            results further.
                        </p>
                    </div>

                    {/* Production & post-production specialists */}
                    <div className="text-center">
                        <h3 className="text-white text-t4 font-bold font-glacial mb-3">Production & post-production specialists</h3>
                        <p className="text-pulse-x-subtitle-gray text-t6 font-glacial leading-relaxed max-w-2xl mx-auto">
                            They bring your content to life. Directors, editors, and motion designers work together to deliver polished,
                            high-quality assets that align with your visual identity and meet platform standards.
                        </p>
                    </div>

                    {/* Media experts */}
                    <div className="text-center">
                        <h3 className="text-white text-t4 font-bold font-glacial mb-3">Media experts</h3>
                        <p className="text-pulse-x-subtitle-gray text-t6 font-glacial leading-relaxed max-w-2xl mx-auto">
                            Focused on results, they manage and optimize your campaigns with precision. Guided by your objectives, they
                            work to accelerate your growth, whether that means increasing awareness, engagement, or conversions.
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-14">
                    <button className="border border-white text-white text-t6 font-glacial px-8 py-3 hover:bg-white hover:text-pulse-x-dark-red transition-colors duration-200">
                        Get In Touch Now !
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;