type FeatureItemProps = {
    title: string;
    description: string;
};

export default function FeatureItem({ title, description }: FeatureItemProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[3fr_7fr] gap-3 md:gap-8 items-start">
            <h3 className="text-white uppercase text-t5 md:text-t4 tracking-wide">
                {title}
            </h3>

            <p className="text-gray-300 text-t5 leading-relaxed">
                {description}
            </p>
        </div>
    );
}