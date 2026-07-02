import { useTranslation } from "react-i18next";
import Seo from "./Seo.tsx";
import { useNavigate } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div>
      <Seo
        title={t("about.seo.title")}
        description={t("about.seo.description")}
        path="/about"
      />
      <section className="w-full bg-black">
        {/* Image */}
        <div className="w-full px-4 md:px-8 lg:px-12 mt-10 md:pt-10">
          <div className="max-w-[1400px] mx-auto">
            <img
              src="/aboutus.png"
              alt="Hero"
              loading="lazy"
              className="w-full h-[250px] md:h-[400px] lg:h-[610px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Red banner */}
        <div className="w-full bg-[#970909] py-4 px-4 md:px-8 mt-6 md:mt-10">
          <p className="text-white text-t6 md:text-t5 text-center font-glacial italic max-w-4xl mx-auto leading-relaxed">
            {t("about.hero.subtitle")}
          </p>
        </div>
      </section>

      <section className="w-full bg-[#970909] py-14 md:py-20 px-4 md:px-8 flex flex-col items-center">
        {/* Intro paragraph */}
        <p className="text-white text-t6 md:text-t5 text-center max-w-3xl mb-10 md:mb-14 font-glacial leading-relaxed">
          {t("about.intro")}
        </p>

        {/* Three columns */}
        <div className="w-full max-w-5xl flex flex-col gap-8 md:gap-12">
          {/* Project leads */}
          <div className="text-center">
            <h3 className="text-white text-t5 md:text-t4 font-bold font-glacial mb-3">
              {t("about.roles.projectLeads.title")}
            </h3>

            <p className="text-pulse-x-subtitle-gray text-[0.75rem] md:text-t6 font-glacial leading-relaxed max-w-2xl mx-auto">
              {t("about.roles.projectLeads.description")}
            </p>
          </div>

          {/* Production */}
          <div className="text-center">
            <h3 className="text-white text-t5 md:text-t4 font-bold font-glacial mb-3">
              {t("about.roles.production.title")}
            </h3>

            <p className="text-pulse-x-subtitle-gray text-[0.75rem] md:text-t6 font-glacial leading-relaxed max-w-2xl mx-auto">
              {t("about.roles.production.description")}
            </p>
          </div>

          {/* Media experts */}
          <div className="text-center">
            <h3 className="text-white text-t5 md:text-t4 font-bold font-glacial mb-3">
              {t("about.roles.media.title")}
            </h3>

            <p className="text-pulse-x-subtitle-gray text-[0.75rem] md:text-t6 font-glacial leading-relaxed max-w-2xl mx-auto">
              {t("about.roles.media.description")}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 md:mt-16">
          <button
            onClick={() => navigate("/contact")}
            className="border border-white text-white text-[0.75rem] md:text-t6 font-glacial px-6 md:px-8 py-3 hover:bg-white hover:text-pulse-x-dark-red transition-colors duration-200"
          >
            {t("about.cta.button")}
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
