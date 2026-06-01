import HeroComp from "../components/HeroComp.tsx";
import OurProcess from "../components/our/Process.tsx";
import BrandedContentSection, {type BrandedContentItem} from "../components/why/Brandedcontent.tsx";
import OurCommitment from "../components/OurCommitment.tsx";

export default function SocialAds() {

    const heroContent = {
        titre: "Social Ads",
        citation: '" It\'s time to tell a different story. "',
        tagline: "High-performing campaigns designed to elevate your brand online.",
        cta: "Launch your campaign",
        description:
            "We design and manage strategic advertising campaigns across social platforms to help brands increase visibility, generate leads, and maximize conversions. Every campaign is optimized to reach the right audience with engaging visuals and effective messaging, ensuring measurable and sustainable growth.",

    };

    const brandedContentItems: BrandedContentItem[] = [
        {
            title: "Improve visibility",
            description: "Social media advertising allows your business to reach a much wider audience while increasing brand awareness across multiple platforms. Strategic campaigns help your company stay visible, relevant, and consistently present in front of potential customers.",
            variant: "red",
        },
        {
            title: "Generate qualified traffic",
            description: "Well-optimized campaigns attract users who are genuinely interested in your products or services. By targeting the right audience, social ads help drive high-quality traffic directly to your website, landing pages, or online store.",
            variant: "gray",
        },
        {
            title: "Reach your ideal audience",
            description: "Advanced audience targeting tools allow campaigns to connect with people based on their interests, behaviors, demographics, and online activity. This ensures your advertisements are shown to users who are most likely to engage with your brand.",
            variant: "gray",
        },
        {
            title: "Increase conversions",
            description: "Effective advertising strategies are designed to turn attention into action. Whether your objective is sales, leads, bookings, or engagement, optimized campaigns help improve conversion rates and maximize your return on investment.",
            variant: "red",
        },
    ];

    return (
        <>
            <HeroComp {...heroContent} />
            <OurProcess
                title="OUR STRATEGY"
                subtitle="Your campaigns are ready to steal the show! With over 100 social media ads created every month at our agency, we design content that grabs attention and boosts your results."
                steps={[
                    { step: 1, title: "Audience Research", description: "Understanding your ideal customers and their behaviors.", variant: "red" },
                    { step: 2, title: "Campaign Structure", description: "Building optimized ad campaigns for better performance.", variant: "gray" },
                    { step: 3, title: "Creative Development", description: "Producing impactful visuals and persuasive content.", variant: "red" },
                    { step: 4, title: "Performance Tracking", description: "Analyzing results and improving campaigns continuously.", variant: "gray" },
                ]}
            />
            <OurCommitment />

            <BrandedContentSection title="Why invest in social media ads??" items={brandedContentItems} />
        </>
    );
}