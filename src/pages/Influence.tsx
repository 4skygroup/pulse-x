import HeroComp from "../components/HeroComp.tsx";
import OurProcess from "../components/our/Process.tsx";
import BrandedContentSection, {
  type BrandedContentItem,
} from "../components/why/Brandedcontent.tsx";
import Seo from "../components/Seo.tsx";
import { useTranslation } from "react-i18next";

export default function Influence() {
  const { t } = useTranslation();
  const heroContent = {
    titre: t("influence.hero.title"),
    citation: t("influence.hero.quote"),
    tagline: t("influence.hero.tagline"),
    cta: t("influence.hero.cta"),
    description: t("influence.hero.description"),
  };

  const brandedContentItems: BrandedContentItem[] = [
    {
      title: t("influence.why.item1.title"),
      description: t("influence.why.item1.description"),
      variant: "red",
    },
    {
      title: t("influence.why.item2.title"),
      description: t("influence.why.item2.description"),
      variant: "gray",
    },
    {
      title: t("influence.why.item3.title"),
      description: t("influence.why.item3.description"),
      variant: "gray",
    },
    {
      title: t("influence.why.item4.title"),
      description: t("influence.why.item4.description"),
      variant: "red",
    },
  ];

  return (
    <>
      <Seo
        title={t("influence.seo.title")}
        description={t("influence.seo.description")}
        path="/influence"
      />

      <HeroComp {...heroContent} />

      <OurProcess
        title={t("influence.process.title")}
        subtitle={t("influence.process.subtitle")}
        steps={[
          {
            step: 1,
            title: t("influence.process.step1.title"),
            description: t("influence.process.step1.description"),
            variant: "red",
          },
          {
            step: 2,
            title: t("influence.process.step2.title"),
            description: t("influence.process.step2.description"),
            variant: "gray",
          },
          {
            step: 3,
            title: t("influence.process.step3.title"),
            description: t("influence.process.step3.description"),
            variant: "red",
          },
          {
            step: 4,
            title: t("influence.process.step4.title"),
            description: t("influence.process.step4.description"),
            variant: "gray",
          },
        ]}
      />

      <BrandedContentSection
        title={t("influence.why.title")}
        items={brandedContentItems}
      />
    </>
  );
}
