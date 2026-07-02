import { useTranslation } from "react-i18next";
import FeatureItem from "./FeatureItem";

export default function Revenue() {
  const { t } = useTranslation();
  const services = [
    {
      title: t("home.revenue.production.title"),
      description: t("home.revenue.production.description"),
    },
    {
      title: t("home.revenue.strategy.title"),
      description: t("home.revenue.strategy.description"),
    },
    {
      title: t("home.revenue.optimization.title"),
      description: t("home.revenue.optimization.description"),
    },
    {
      title: t("home.revenue.expertise.title"),
      description: t("home.revenue.expertise.description"),
    },
  ];
  return (
    <section className="bg-black text-white py-28 px-6 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Top */}
        <div className="mb-20">
          <h2 className="text-h6 md:text-5xl font-bold text-center mb-10">
            {t("home.revenue.title")}
          </h2>

          <div className="max-w-3xl mx-auto border-l-2 border-red-600 pl-5">
            <p className="text-gray-300 text-lg leading-relaxed">
              {t("home.revenue.description")}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-12 max-w-3xl mx-auto">
          {services.map((service, index) => (
            <FeatureItem
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
