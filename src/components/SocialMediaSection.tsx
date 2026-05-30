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
    const animationRef = useRef<Animation | null>(null);

    const doubled = [...images, ...images];

    useEffect(() => {
        const strip = stripRef.current;
        if (!strip) return;

        const setup = () => {
            if (animationRef.current) {
                animationRef.current.cancel();
                animationRef.current = null;
            }

            const children = Array.from(strip.children) as HTMLElement[];
            const half = children.length / 2;

            if (half === 0) return;

            const gap = parseFloat(getComputedStyle(strip).gap || "0") || 8;

            let setWidth = 0;
            for (let i = 0; i < half; i++) {
                setWidth += children[i].getBoundingClientRect().width;
            }
            // Inclure tous les gaps du premier set (y compris après le dernier élément)
            setWidth += gap * half;

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

            animationRef.current = strip.animate(keyframes, {
                duration: duration * 1000,
                iterations: Infinity,
                easing: "linear",
            });
        };

        // Attendre que toutes les images soient chargées avant de mesurer
        const imgs = Array.from(strip.querySelectorAll("img")) as HTMLImageElement[];
        const allLoaded = imgs.every((img) => img.complete && img.naturalWidth > 0);

        if (allLoaded) {
            setup();
        } else {
            let loadedCount = 0;
            const onLoad = () => {
                loadedCount++;
                if (loadedCount >= imgs.length) setup();
            };
            imgs.forEach((img) => {
                if (img.complete && img.naturalWidth > 0) {
                    loadedCount++;
                } else {
                    img.addEventListener("load", onLoad, { once: true });
                    img.addEventListener("error", onLoad, { once: true });
                }
            });
            if (loadedCount >= imgs.length) setup();
        }

        window.addEventListener("resize", setup);

        return () => {
            animationRef.current?.cancel();
            window.removeEventListener("resize", setup);
        };
    }, [direction, duration]);

    return (
        <div className="overflow-hidden">
            <div ref={stripRef} className="flex gap-2">
                {doubled.map((n, i) => (
                    <img
                        key={i}
                        src={`/img${n}.png`}
                        loading="eager"
                        decoding="async"
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
            <h2
                className="text-center text-t3 md:text-h6 text-pulse-x-red tracking-widest uppercase mb-8"
            >
                Building your presence on social media
            </h2>

            <div className="flex gap-6 max-w-5xl mx-auto">
                {/* Colonne gauche */}
                <div className="flex flex-col justify-between py-1">
                    {leftIcons.map((icon, i) => (
                        <SocialIcon key={i} icon={icon} />
                    ))}
                </div>

                {/* Sliders */}
                <div className="flex-1 flex flex-col gap-2 min-w-0">
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