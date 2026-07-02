import { useTranslation } from "react-i18next";
import HeroComp from "../components/HeroComp.tsx";
import OurProcess from "../components/our/Process.tsx";
import BrandedContentSection, {
  type BrandedContentItem,
} from "../components/why/Brandedcontent.tsx";
import OurCommitment from "../components/OurCommitment.tsx";
import Seo from "../components/Seo.tsx";

export default function SocialAds() {
  const { t } = useTranslation();

  const heroContent = {
    titre: t("socialAds.hero.title"),
    citation: t("socialAds.hero.quote"),
    tagline: t("socialAds.hero.tagline"),
    cta: t("socialAds.hero.cta"),
    description: t("socialAds.hero.description"),
  };

  const brandedContentItems: BrandedContentItem[] = [
    {
      title: t("socialAds.why.item1.title"),
      description: t("socialAds.why.item1.description"),
      variant: "red",
    },
    {
      title: t("socialAds.why.item2.title"),
      description: t("socialAds.why.item2.description"),
      variant: "gray",
    },
    {
      title: t("socialAds.why.item3.title"),
      description: t("socialAds.why.item3.description"),
      variant: "gray",
    },
    {
      title: t("socialAds.why.item4.title"),
      description: t("socialAds.why.item4.description"),
      variant: "red",
    },
  ];

  return (
    <>
      <Seo
        title={t("socialAds.seo.title")}
        description={t("socialAds.seo.description")}
        path="/socialads"
      />

      <HeroComp {...heroContent} />

      <OurProcess
        title={t("socialAds.process.title")}
        subtitle={t("socialAds.process.subtitle")}
        steps={[
          {
            step: 1,
            title: t("socialAds.process.step1.title"),
            description: t("socialAds.process.step1.description"),
            variant: "red",
          },
          {
            step: 2,
            title: t("socialAds.process.step2.title"),
            description: t("socialAds.process.step2.description"),
            variant: "gray",
          },
          {
            step: 3,
            title: t("socialAds.process.step3.title"),
            description: t("socialAds.process.step3.description"),
            variant: "red",
          },
          {
            step: 4,
            title: t("socialAds.process.step4.title"),
            description: t("socialAds.process.step4.description"),
            variant: "gray",
          },
        ]}
      />

      <OurCommitment />

      <BrandedContentSection
        title={t("socialAds.why.title")}
        items={brandedContentItems}
      />
    </>
  );
}
