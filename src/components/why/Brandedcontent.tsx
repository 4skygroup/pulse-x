import BrandedContentCard from "./BrandedContentCard";

export interface BrandedContentItem {
    title: string;
    description: string;
    variant: "red" | "gray";
}

interface BrandedContentSectionProps {
    title: string;
    items: BrandedContentItem[];
}

export default function BrandedContentSection({
    title,
    items,
}: BrandedContentSectionProps) {

    return (
        <section className="bg-black w-full px-4 md:px-16 py-16 flex flex-col items-center gap-10">
            <h2 className="text-t3 md:text-h6 font-bold text-white text-center">
                {title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl items-stretch">
                {items.map((item, index) => (
                    <BrandedContentCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        variant={item.variant}
                    />
                ))}
            </div>
        </section>
    );
}