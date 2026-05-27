import { faqData } from "./FaqData.ts";
import FAQRow from "./FaqRow.tsx";

const FAQ = () => {
    return (
        <section className="w-full bg-black min-h-screen flex flex-col items-center px-6 py-16">
            <h2 className="font-glacial text-h7 font-bold text-white mb-12 tracking-widest uppercase">
                FAQ
            </h2>

            <div className="w-full max-w-2xl">
                {/* FAQ rows */}
                {faqData.map((item) => (
                    <FAQRow key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default FAQ;