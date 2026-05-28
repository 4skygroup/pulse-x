import ProcessCard from "./ProcessCard";

interface Step {
    step: number;
    title: string;
    description: string;
    variant: "red" | "gray";
}

interface ProcessProps {
    title: string;
    subtitle: string;
    steps: Step[];
}

export default function OurProcess({ title, subtitle, steps }: ProcessProps) {
    return (
        <section className="w-full bg-black px-8 py-20 flex flex-col gap-12">
            <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full">
                <h2 className="font-glacial font-bold text-h7 text-white tracking-widest uppercase text-center">
                    {title}
                </h2>
                <p className="font-glacial text-t5 text-pulse-x-subtitle-gray leading-relaxed max-w-5xl">
                    {subtitle}
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 max-w-5xl mx-auto w-full">
                {steps.map((s) => (
                    <div key={s.step} className="flex justify-center">
                        <ProcessCard {...s} />
                    </div>
                ))}
            </div>
        </section>
    );
}