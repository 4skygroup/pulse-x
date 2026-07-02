import { useTranslation } from "react-i18next";

const OurCommitment = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#111111] w-full px-4 md:px-16 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left: Text content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-glacial font-bold text-t3 md:text-h6 text-white mb-6">
            {t("ourCommitment.title")}
          </h2>

          <p className="font-glacial text-t5 md:text-t4 text-pulse-x-subtitle-gray leading-relaxed mb-4">
            {t("ourCommitment.paragraph1")}
          </p>

          <p className="font-glacial text-t5 md:text-t4 text-pulse-x-subtitle-gray leading-relaxed">
            {t("ourCommitment.paragraph2")}
          </p>
        </div>

        {/* Right: Social media image */}
        <div className="w-full md:w-auto flex justify-center">
          <div className="bg-[#1E1E1E] rounded-2xl p-4 md:p-6 flex items-center justify-center w-full max-w-[400px] h-[220px] md:h-[300px]">
            <img
              src="/img-reseau.png"
              alt="Social media platforms"
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
