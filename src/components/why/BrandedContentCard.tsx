interface BrandedContentCardProps {
    title: string;
    description: string;
    variant: "red" | "gray";
}

export default function BrandedContentCard({
                                               title,
                                               description,
                                               variant,
                                           }: BrandedContentCardProps) {

    const bg = variant === "red" ? "bg-pulse-x-card-red" : "bg-pulse-x-card-gray";

    return (
        <div className="rounded-2xl px-5 md:px-8 py-4 md:py-6 flex flex-col gap-2 md:gap-3">
            <div className={`${bg} rounded-2xl px-5 md:px-8 py-4 md:py-6 flex flex-col gap-2 md:gap-3`}>
                <span className="font-bold text-t6 md:text-t5 text-white">
                    {title}
                </span>

                <p className="text-[0.7rem] md:text-t6 text-white leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}