// Faq.tsx
import { useState } from "react";
import { faqData } from "./FaqData.ts";
import FAQRow from "./FaqRow.tsx";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-black flex flex-col items-center px-6 py-16">
      <h2 className="font-glacial text-t3 md:text-h6 font-bold text-white mb-12 tracking-widest uppercase">
        {t("home.faq.title")}
      </h2>

      <div className="w-full max-w-2xl">
        {faqData.map((item, index) => (
          <FAQRow
            key={item.id}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
