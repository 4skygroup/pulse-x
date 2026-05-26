import FeatureItem from "./FeatureItem";

const services = [
    {
        title: "Production",
        description:
            "We design and produce content crafted to capture attention and drive results. Each piece is tailored to the specific conventions, algorithms, and user behaviors of : TikTok, Instagram Reels, YouTube Shorts, SnapChat Spotlight and Pinterest.",
    },
    {
        title: "Strategy",
        description:
            "Beyond production, we build cohesive editorial campaigns, whether they serve as an overarching theme or are tied to strategic milestones to maximize reach, engagement, and conversion.",
    },
    {
        title: "Optimization",
        description:
            "Our approach is based on constantly aligning your marketing goals with audience expectations. We analyze, test, and optimize to transform visibility into measurable performance.",
    },
    {
        title: "Expertise",
        description:
            "With Pulse X, you benefit from deep expertise in the TikTok and Instagram ecosystems, driven by a dedicated, knowledgeable team that stays constantly up-to-date.",
    },
];

export default function Revenue() {
    return (
        <section className="bg-black text-white py-28 px-6">

            <div className="max-w-5xl mx-auto">

                {/* Top */}
                <div className="mb-20">

                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
                        We turn attention into revenue
                    </h2>

                    <div className="max-w-3xl mx-auto border-l-2 border-red-600 pl-5">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At Pulse X, we help brands with their strategic expansion on social media,
                            leveraging our proven expertise in short-form content with high performance potential.
                        </p>
                    </div>

                </div>

                {/* Features */}
                <div className="flex flex-col gap-12 max-w-3xl mx-auto">                    {services.map((service, index) => (
                        <FeatureItem
                            key={index}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>

            </div>

        </section>
    );
}