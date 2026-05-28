interface ProcessCardProps {
    step: number;
    title: string;
    description: string;
    variant?: "red" | "gray";
}

export default function ProcessCard({
        title,
        description,
        variant = "gray",
    }: ProcessCardProps) {
    const isRed = variant === "red";

    return (
        <div
            className={`
                max-w-[250px] relative flex flex-col gap-4 rounded-2xl p-6 min-h-[150px] transition-transform duration-300 hover:-translate-y-1
                ${isRed ? "bg-pulse-x-card-red text-white" : "bg-pulse-x-card-gray text-black"}
            `}
        >
            <p
                className={`
                    font-glacial font-bold text-t5 leading-tight
                    ${isRed ? "text-white" : "text-black"}
                `}
            >
                {title}
            </p>

            <p
                className={`
                    font-glacial text-t6 leading-snug
                    ${isRed ? "text-white/90" : "text-black/80"}
                `}
            >
                {description}
            </p>
        </div>
    );
}