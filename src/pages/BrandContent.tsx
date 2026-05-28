import HeroComp from "../components/HeroComp";
import OurProcess from "../components/process/Process.tsx";

export default function BrandContent() {

    const heroContent = {
        titre: "Brand Content",
        citation: '" It\'s time to tell a different story. "',
        tagline: "Behind every brand, there's a unique feeling worth sharing",
        sousTitre: "More than content. It's an experience.",
        cta: "Explore Our Projects",
        description:
            "We help brands create impactful visual content designed to capture attention and strengthen their online presence. From creative concepts to polished execution, every project is built to reflect your identity and engage your audience. Whether through photography, short-form videos, or campaign visuals, we focus on creating content that feels authentic, modern, and memorable.",

    };

    return (
        <>
            <HeroComp {...heroContent} />
            <OurProcess
                title="Our Process"
                subtitle="You stay focused on your business, we handle your entire social presence behind the scenes. From shaping a clear direction to delivering consistent, high-quality content, everything is taken care of to keep your accounts active, relevant, and growing."
                steps={[
                    { step: 1, title: "Planning", description: "We define your goals and create a clear creative direction.", variant: "red" },
                    { step: 2, title: "Production", description: "Filming, photography, and content creation tailored to your brand.", variant: "gray" },
                    { step: 3, title: "Post-Production", description: "Editing, color grading, and final adjustments for a premium result.", variant: "red" },
                    { step: 4, title: "Publication", description: "Optimized delivery for all your social media platforms.", variant: "gray" },
                ]}
            />
        </>

    );
}