import { useTranslation } from "react-i18next";
import ServiceCard from "./ServicesCard.tsx";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("home.services.brandContent.title"),
      path: "/brandcontent",
      subtitle: t("home.services.brandContent.subtitle"),
      features: [
        t("home.services.brandContent.feature1"),
        t("home.services.brandContent.feature2"),
        t("home.services.brandContent.feature3"),
        t("home.services.brandContent.feature4"),
        t("home.services.brandContent.feature5"),
        t("home.services.brandContent.feature6"),
      ],
      stat: t("home.services.brandContent.stat"),
      statLabel: t("home.services.brandContent.statLabel"),
    },
    {
      title: t("home.services.socialAds.title"),
      path: "/socialads",
      subtitle: t("home.services.socialAds.subtitle"),
      features: [
        t("home.services.socialAds.feature1"),
        t("home.services.socialAds.feature2"),
        t("home.services.socialAds.feature3"),
        t("home.services.socialAds.feature4"),
        t("home.services.socialAds.feature5"),
        t("home.services.socialAds.feature6"),
        t("home.services.socialAds.feature7"),
      ],
      stat: t("home.services.socialAds.stat"),
      statLabel: t("home.services.socialAds.statLabel"),
    },
    {
      title: t("home.services.influence.title"),
      path: "/influence",
      subtitle: t("home.services.influence.subtitle"),
      features: [
        t("home.services.influence.feature1"),
        t("home.services.influence.feature2"),
        t("home.services.influence.feature3"),
        t("home.services.influence.feature4"),
        t("home.services.influence.feature5"),
        t("home.services.influence.feature6"),
      ],
      stat: t("home.services.influence.stat"),
      statLabel: t("home.services.influence.statLabel"),
    },
  ];
  return (
    <section className="relative overflow-hidden bg-black py-28 px-6">
      {/* Background red zoom in zoom out */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-225 h-225 bg-pulse-x-red opacity-20 blur-3xl rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-white text-t3 md:text-h6 font-bold uppercase mb-14">
          {t("home.services.title")}
        </h2>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              path={service.path}
              title={service.title}
              subtitle={service.subtitle}
              features={service.features}
              stat={service.stat}
              statLabel={service.statLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
