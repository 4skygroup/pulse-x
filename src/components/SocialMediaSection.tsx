import React, { useRef, useEffect } from "react";
import {
    FacebookIcon,
    InstagramIcon,
    SnapchatIcon,
    TiktokIcon,
    YoutubeIcon,
} from "./Icons.tsx";

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

const leftIcons: SocialIconProps["icon"][] = [
    "instagram",
    "youtube",
    "facebook",
    "instagram",
    "youtube",
    "facebook",
    "tiktok",
    "tiktok",
    "snapchat",
];

const InfiniteStrip: React.FC<{
    images: number[];
    direction: "left" | "right";
    duration?: number;
}> = ({ images, direction, duration = 12 }) => {
    const stripRef = useRef<HTMLDivElement>(null);

    // Double les images pour boucle infinie seamless
    const doubled = [...images, ...images];

    useEffect(() => {
        const strip = stripRef.current;
        if (!strip) return;

        const children = Array.from(strip.children) as HTMLElement[];
        const half = children.length / 2;

        let setWidth = 0;

        for (let i = 0; i < half; i++) {
            const rect = children[i].getBoundingClientRect();
            setWidth += rect.width;

            if (i < half - 1) {
                const style = window.getComputedStyle(strip);
                setWidth += parseFloat(style.gap || "0");
            }
        }

        strip.style.setProperty("--set-width", `-${setWidth}px`);

        const keyframes =
            direction === "left"
                ? [
                    { transform: "translateX(0)" },
                    { transform: "translateX(var(--set-width))" },
                ]
                : [
                    { transform: "translateX(var(--set-width))" },
                    { transform: "translateX(0)" },
                ];

        const animation = strip.animate(keyframes, {
            duration: duration * 1000,
            iterations: Infinity,
            easing: "linear",
        });

        return () => animation.cancel();
    }, [direction, duration]);

    return (
        <div className="overflow-hidden">
            <div ref={stripRef} className="flex gap-2">
                {doubled.map((n, i) => (
                    <img
                        key={i}
                        src={`/img${n}.png`}
                        className="
                            aspect-[3/4]
                            w-[48%]
                            md:w-[32%]
                            flex-shrink-0
                            object-cover
                        "
                        alt={`img${n}`}
                    />
                ))}
            </div>
        </div>
    );
};

const SocialMediaSection: React.FC = () => {
    return (
        <section className="bg-black px-8 py-10 font-glacial">
            {/* Titre */}
            <h2
                className="text-center text-pulse-x-red tracking-widest uppercase mb-8"
                style={{
                    fontSize: "1rem",
                    letterSpacing: "0.25em",
                }}
            >
                Building your presence on social media
            </h2>

            <div className="flex gap-6 max-w-5xl mx-auto">
                {/* Colonne gauche */}
                <div
                    className="flex flex-col justify-between py-1"
                    style={{ gap: "0.75rem" }}
                >
                    {leftIcons.map((icon, i) => (
                        <SocialIcon key={i} icon={icon} />
                    ))}
                </div>

                {/* Sliders */}
                <div className="flex-1 flex flex-col gap-2">
                    <InfiniteStrip
                        images={[1, 2, 3]}
                        direction="left"
                        duration={12}
                    />

                    <InfiniteStrip
                        images={[4, 5, 6]}
                        direction="right"
                        duration={12}
                    />
                </div>
            </div>
        </section>
    );
};

export default SocialMediaSection;