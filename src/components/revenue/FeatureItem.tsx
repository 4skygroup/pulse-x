type FeatureItemProps = {
    title: string;
    description: string;
};

export default function FeatureItem({title, description,}: FeatureItemProps) {
    return (
        <div className="grid grid-cols-[140px_1fr] gap-8 items-start">

            <h3 className="text-white font-bold uppercase text-sm tracking-wide">
                {title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
                {description}
            </p>

        </div>
    );
}