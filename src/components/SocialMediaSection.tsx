import React from "react";
import {FacebookIcon, InstagramIcon, SnapchatIcon, TiktokIcon, YoutubeIcon} from "./Icons.tsx";

interface SocialIconProps {
    icon: "instagram" | "youtube" | "facebook" | "tiktok" | "snapchat";
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
    const icons = {
        instagram: <InstagramIcon />,
        youtube: <YoutubeIcon />,
        facebook: <FacebookIcon />,
        tiktok: <TiktokIcon />,
        snapchat: <SnapchatIcon />,
    };

    return (
        <div className="w-7 h-7 text-pulse-x-red flex items-center justify-center">
            {icons[icon]}
        </div>
    );
};

// Colonne gauche : icônes des réseaux sociaux
const leftIcons: SocialIconProps["icon"][] = [
    "instagram", "youtube", "facebook", "instagram", "youtube", "facebook", "tiktok", "tiktok", "snapchat",
];

const SocialMediaSection: React.FC = () => {
    return (
        <section className="bg-black px-8 py-10 font-glacial">
            {/* Titre */}
            <h2
                className="text-center text-pulse-x-red tracking-widest uppercase mb-8"
                style={{ fontSize: "1rem", letterSpacing: "0.25em" }}
            >
                Building your presence on social media
            </h2>

            <div className="flex gap-6 max-w-5xl mx-auto">
                {/* Colonne gauche : icônes */}
                <div className="flex flex-col justify-between py-1" style={{ gap: "0.75rem" }}>
                    {leftIcons.map((icon, i) => (
                        <SocialIcon key={i} icon={icon} />
                    ))}
                </div>

                {/* Grille d'images 3×2 */}
                <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2">
                    {/* Rangée 1 */}
                    <img src="/img1.png" className="aspect-[3/4] w-full" alt="img1"/>
                    <img src="/img2.png" className="aspect-[3/4] w-full" alt="img2"/>
                    <img src="/img3.png" className="aspect-[3/4] w-full" alt="img3"/>
                    <img src="/img4.png" className="aspect-[3/4] w-full" alt="img4"/>
                    <img src="/img5.png" className="aspect-[3/4] w-full" alt="img5"/>
                    <img src="/img6.png" className="aspect-[3/4] w-full" alt="img6"/>
                </div>
            </div>
        </section>
    );
};

export default SocialMediaSection;