import HeroComp from "../components/HeroComp.tsx";
import OurProcess from "../components/our/Process.tsx";
import BrandedContentSection, {type BrandedContentItem} from "../components/why/Brandedcontent.tsx";
import Seo from "../components/Seo.tsx";

export default function Influence() {

    const heroContent = {
        titre: "Influence",
        citation: '"It’s time to create meaningful connections."',
        tagline: "Tailored influencer campaigns designed to strengthen your brand image and expand your online presence.",
        cta: "Explore our influencer network",
        description:
            "Our influencer marketing services are focused on building authentic collaborations between brands and creators who truly align with your values and target audience. We develop impactful campaigns that combine creativity, strategy, and engagement to help your business grow organically across social media platforms. From content creation to campaign management, every collaboration is designed to increase visibility, strengthen credibility, and create lasting connections with your community.",

    };

    const brandedContentItems: BrandedContentItem[] = [
        {
            title: "Authentic collaborations",
            description: "We focus on creating genuine partnerships between brands and creators in order to produce content that feels natural, engaging, and trustworthy for audiences.",
            variant: "red",
        },
        {
            title: "Stronger audience engagement",
            description: "Influencer campaigns encourage direct interaction with communities, helping brands increase engagement, visibility, and customer loyalty across social platforms.",
            variant: "gray",
        },
        {
            title: "Creative and impactful content",
            description: "Collaborating with content creators allows brands to benefit from fresh, original, and visually engaging content adapted to modern social media trends.",
            variant: "gray",
        },
        {
            title: "Measurable business growth",
            description: "Our influencer strategies are designed to generate real results, from increased brand awareness and engagement to conversions, sales, and long-term community growth.\n",
            variant: "red",
        },
    ];

    return (
        <>
            <Seo
                title="Influencer Marketing | Pulse X Agency"
                description="Pulse X connects brands with the right creators for authentic influencer campaigns. Strategic matching, campaign management, and performance optimization to grow your brand organically."
                path="/influence"
            />
            <HeroComp {...heroContent} />
            <OurProcess
                title="OUR STRATEGY"
                subtitle="Your campaigns are ready to steal the show! With over 100 social media ads created every month at our agency, we design content that grabs attention and boosts your results."
                steps={[
                    { step: 1, title: "Strategic Matching", description: "We carefully identify creators whose audience, image, and content style perfectly align with your brand identity and campaign objectives.", variant: "red" },
                    { step: 2, title: "Campaign Planning", description: "Every influencer campaign is designed with a personalized strategy focused on storytelling, audience engagement, and impactful communication.", variant: "gray" },
                    { step: 3, title: "Campaign Management", description: "From outreach and negotiations to content approvals and publishing schedules, we manage every aspect of the collaboration process.", variant: "red" },
                    { step: 4, title: "Performance Optimization", description: "We continuously monitor campaign analytics, audience interaction, and overall results to ensure maximum effectiveness and long-term success.", variant: "gray" },
                ]}
            />

            <BrandedContentSection title="Why work with our influencer marketing agency?" items={brandedContentItems} />
        </>
    );
}