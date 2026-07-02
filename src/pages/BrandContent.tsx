import { useTranslation } from "react-i18next";
import HeroComp from "../components/HeroComp";
import OurProcess from "../components/our/Process.tsx";
import SocialMediaSection from "../components/SocialMediaSection.tsx";
import BrandedContentSection, {
  type BrandedContentItem,
} from "../components/why/Brandedcontent.tsx";
import Seo from "../components/Seo.tsx";

export default function BrandContent() {
  const { t } = useTranslation();

  const heroContent = {
    titre: t("brandContent.hero.title"),
    citation: t("brandContent.hero.quote"),
    tagline: t("brandContent.hero.tagline"),
    sousTitre: t("brandContent.hero.subtitle"),
    cta: t("brandContent.hero.cta"),
    description: t("brandContent.hero.description"),
  };

  const brandedContentItems: BrandedContentItem[] = [
    {
      title: t("brandContent.why.item1.title"),
      description: t("brandContent.why.item1.description"),
      variant: "red",
    },
    {
      title: t("brandContent.why.item2.title"),
      description: t("brandContent.why.item2.description"),
      variant: "gray",
    },
    {
      title: t("brandContent.why.item3.title"),
      description: t("brandContent.why.item3.description"),
      variant: "gray",
    },
    {
      title: t("brandContent.why.item4.title"),
      description: t("brandContent.why.item4.description"),
      variant: "red",
    },
  ];

  return (
    <>
      <Seo
        title={t("brandContent.seo.title")}
        description={t("brandContent.seo.description")}
        path="/brandcontent"
      />

      <HeroComp {...heroContent} />

      <OurProcess
        title={t("brandContent.process.title")}
        subtitle={t("brandContent.process.subtitle")}
        steps={[
          {
            step: 1,
            title: t("brandContent.process.step1.title"),
            description: t("brandContent.process.step1.description"),
            variant: "red",
          },
          {
            step: 2,
            title: t("brandContent.process.step2.title"),
            description: t("brandContent.process.step2.description"),
            variant: "gray",
          },
          {
            step: 3,
            title: t("brandContent.process.step3.title"),
            description: t("brandContent.process.step3.description"),
            variant: "red",
          },
          {
            step: 4,
            title: t("brandContent.process.step4.title"),
            description: t("brandContent.process.step4.description"),
            variant: "gray",
          },
        ]}
      />

      <SocialMediaSection />

      <BrandedContentSection
        title={t("brandContent.why.title")}
        items={brandedContentItems}
      />
    </>
  );
}
