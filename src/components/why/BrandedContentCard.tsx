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
    const bg =
        variant === "red"
            ? "bg-pulse-x-card-red"
            : "bg-pulse-x-card-gray";

    return (
        <div
            className={`${bg} rounded-2xl px-5 md:px-8 py-4 md:py-6 flex flex-col gap-2 md:gap-3 h-full min-h-[220px]`}
        >
            <span className="font-bold text-t4 md:text-t3 text-white">
                {title}
            </span>

            <p className="text-t5 md:text-t4 text-white leading-relaxed">
                {description}
            </p>
        </div>
    );
}