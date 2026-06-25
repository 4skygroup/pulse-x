import Seo from "./Seo.tsx";
import {useNavigate} from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Seo
                title="About | Pulse X Agency – Social Creative Agency"
                description="Learn about Pulse X, a social creative agency bringing together project leads, production specialists, and media experts to deliver high-quality digital content and campaign management."
                path="/about"
            />
            <section className="w-full bg-white">

                {/* Image */}
                <div className="w-full bg-white px-4 md:px-8 lg:px-12 mt-10 md:pt-10">
                    <div className="max-w-[1400px] mx-auto">
                        <img
                            src="/aboutus.png"
                            alt="Hero"
                            loading="lazy"
                            className="w-full h-[250px] md:h-[400px] lg:h-[600px] object-cover rounded-xl"                        />
                    </div>
                </div>

                {/* Red banner */}
                <div className="w-full bg-[#970909] py-4 px-4 md:px-8 mt-6 md:mt-10">
                    <p className="text-white text-t6 md:text-t5 text-center font-glacial italic max-w-4xl mx-auto leading-relaxed">
                        Pulse X is powered by a team of specialists who are deeply in tune with evolving digital behaviors.
                    </p>
                </div>

            </section>

            <section className="w-full bg-[#970909] py-14 md:py-20 px-4 md:px-8 flex flex-col items-center">

                {/* Intro paragraph */}
                <p className="text-white text-t6 md:text-t5 text-center max-w-3xl mb-10 md:mb-14 font-glacial leading-relaxed">
                    From the start, we set out to rethink the traditional agency model by bringing multiple skill sets together under
                    one role, combining client guidance, creative thinking, and production expertise. This approach was designed
                    to match a new generation of talent eager to leverage their resources.
                </p>

                {/* Three columns */}
                <div className="w-full max-w-5xl flex flex-col gap-8 md:gap-12">

                    {/* Project leads */}
                    <div className="text-center">
                        <h3 className="text-white text-t5 md:text-t4 font-bold font-glacial mb-3">
                            Project leads
                        </h3>

                        <p className="text-pulse-x-subtitle-gray text-[0.75rem] md:text-t6 font-glacial leading-relaxed max-w-2xl mx-auto">
                            Your day-to-day partners, they coordinate every aspect of your project. From defining the strategy to
                            overseeing execution, they ensure everything runs smoothly while continuously optimizing performance to push
                            results further.
                        </p>
                    </div>

                    {/* Production */}
                    <div className="text-center">
                        <h3 className="text-white text-t5 md:text-t4 font-bold font-glacial mb-3">
                            Production & post-production specialists
                        </h3>

                        <p className="text-pulse-x-subtitle-gray text-[0.75rem] md:text-t6 font-glacial leading-relaxed max-w-2xl mx-auto">
                            They bring your content to life. Directors, editors, and motion designers work together to deliver polished,
                            high-quality assets that align with your visual identity and meet platform standards.
                        </p>
                    </div>

                    {/* Media experts */}
                    <div className="text-center">
                        <h3 className="text-white text-t5 md:text-t4 font-bold font-glacial mb-3">
                            Media experts
                        </h3>

                        <p className="text-pulse-x-subtitle-gray text-[0.75rem] md:text-t6 font-glacial leading-relaxed max-w-2xl mx-auto">
                            Focused on results, they manage and optimize your campaigns with precision. Guided by your objectives, they
                            work to accelerate your growth, whether that means increasing awareness, engagement, or conversions.
                        </p>
                    </div>

                </div>

                {/* CTA Button */}
                <div className="mt-12 md:mt-16">
                    <button
                        onClick={() => navigate("/contact")}
                        className="border border-white text-white text-[0.75rem] md:text-t6 font-glacial px-6 md:px-8 py-3 hover:bg-white hover:text-pulse-x-dark-red transition-colors duration-200"
                    >
                        Get In Touch Now !
                    </button>
                </div>

            </section>
        </div>
    );
};

export default About;