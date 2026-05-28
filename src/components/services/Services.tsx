import ServiceCard from "./ServicesCard.tsx";

const services = [
    {
        title: "Brand Content",
        path: "/brandcontent",
        subtitle:
            "Full management of your TikTok and Instagram accounts",
        features: [
            "Creation Of 8 To 12 Organic Videos Per Month",
            "Development Of A Tailored Content Strategy",
            "Scriptwriting Aligned With Your Brand Identity",
            "Professional Video Shooting And Editing",
            "Publishing, Optimization, And Community Management",
            "Trend Monitoring And Adaptation For TikTok And Instagram",
        ],
        stat: "+ 4 M",
        statLabel: "Views / Month",
    },
    {
        title: "Social Ads",
        path: "/socialads",
        subtitle:
            "Performance-driven video production",
        features: [
            "Strategic Selection Of The Most Effective Ad Formats",
            "Creation Of Conversion-Focused Content",
            "Certified Expertise In TikTok Ads Manager",
            "Continuous A/B Testing Implementation",
            "Advanced Audience Targeting And Optimization",
            "Precise Conversion Tracking And ROI Analysis",
            "Strategic Combination Of Creators And Media To Maximize Results",
        ],
        stat: "+ 100",
        statLabel: "Videos / Month",
    },
    {
        title: "Influence",
        path: "/influence",
        subtitle:
            "Support for launching campaigns",
        features: [
            "Strategic And Creative Recommendations",
            "Talent Casting And Selection",
            "Influencer Contract Management",
            "Validation Of Creative Concepts",
            "Performance Monitoring And Optimization",
            "In-Depth Analysis And Reporting",
        ],
        stat: "+ 250",
        statLabel: "Creative Campaigns",
    },
];

export default function Services() {
    return (
        <section className="relative overflow-hidden bg-black py-28 px-6">

            {/* Background red zoom in zoom out */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-225 h-225 bg-pulse-x-red opacity-20 blur-3xl rounded-full animate-pulse" />
            </div>

            <div className="relative max-w-5xl mx-auto">

                {/* Title */}
                <h2 className="text-center text-white text-h7 font-bold uppercase mb-14">
                    Our Services
                </h2>

                {/* Cards */}
                <div className="flex flex-col gap-5">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            index={index}
                            path={service.path}
                            title={service.title}
                            subtitle={service.subtitle}
                            features={service.features}
                            stat={service.stat}
                            statLabel={service.statLabel}
                        />
                    ))}
                </div>

            </div>

        </section>
    );
}