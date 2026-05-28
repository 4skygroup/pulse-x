import { useNavigate } from "react-router-dom";

type ServiceCardProps = {
    title: string;
    path: string;
    subtitle: string;
    features: string[];
    stat: string;
    statLabel: string;
    index?: number;
};

export default function ServiceCard({
        title,
        path,
        subtitle,
        features,
        stat,
        statLabel,
    }: ServiceCardProps) {

    const navigate = useNavigate();

    return (

        <div
            className="cursor-pointer relative overflow-hidden rounded-2xl border border-pulse-x-red bg-black transition-transform duration-300 ease-in-out hover:scale-[1.025]"
            onClick={() => navigate(path)}
        >
            {/* Glow */}
            <div className="absolute inset-0 bg-black opacity-10 blur-3xl" />

            <div className="relative grid md:grid-cols-[2.3fr_1fr]">

                {/* Left */}
                <div className="p-5 md:p-7">
                    <h3 className="text-white font-bold text-t3 uppercase mb-2">
                        {title}
                    </h3>
                    <p className="text-white text-t4 mb-6">
                        {subtitle}
                    </p>
                    <ul className="space-y-0.5">
                        {features.map((feature, i) => (
                            <li key={i} className="text-pulse-x-subtitle-gray text-t5">
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right */}
                <div className="border-t md:border-t-0 md:border-l border-pulse-x-red flex flex-col items-center justify-center gap-6 p-5">
                    <div className="text-center">
                        <p className="text-pulse-x-red text-4xl font-bold">{stat}</p>
                        <p className="text-white text-t6 mt-1">{statLabel}</p>
                    </div>
                    <button className="bg-pulse-x-red hover:bg-pulse-x-dark-red transition-colors duration-300 text-white text-t6 font-bold px-5 py-2 rounded-lg">
                        Learn more &gt;
                    </button>
                </div>

            </div>
        </div>
    );
}