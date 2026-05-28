import HeroComp from "../components/HeroComp";

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
        <HeroComp {...heroContent} />
    );
}