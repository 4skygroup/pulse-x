import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import GlobeMap from "../components/Map/GlobeMap";

export default function Location() {
  const { t } = useTranslation();

  return (
    <div className="bg-black mt-10">
      <section className="flex flex-col bg-black text-white items-center justify-center gap-y-8 md:gap-y-12 pb-12 md:pt-5 md:pb-25 px-4 md:px-5 bg-[radial-gradient(circle_at_top_left,rgba(242,51,51,0.20)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(242,51,51,0.20)_0%,transparent_45%)]">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8 mt-20">
          <p className="bg-linear-to-r from-white to-[#A0A0A0] bg-clip-text text-transparent text-center font-bold max-w-4xl text-3xl md:text-h4">
            {t("locations.title")}
          </p>

          <p className="text-[#CFC4C5] text-center text-base md:text-lg max-w-3xl">
            {t("locations.description")}
          </p>
        </div>

        <hr className="w-full max-w-4xl border-white/10" />

        <div className="grid grid-cols-3 md:flex md:flex-row gap-8 md:gap-25 w-fit max-w-4xl justify-items-center">
          <div className="flex flex-col gap-y-1 items-center justify-center">
            <span className="font-bold text-3xl md:text-h6">+50</span>
            <span className="uppercase text-xs md:text-t5">
              {t("locations.stats.experts")}
            </span>
          </div>

          <div className="flex flex-col gap-y-1 items-center justify-center">
            <span className="font-bold text-3xl md:text-h6">+150</span>
            <span className="uppercase text-xs md:text-t5">
              {t("locations.stats.clients")}
            </span>
          </div>

          <div className="flex flex-col gap-y-1 items-center justify-center">
            <span className="font-bold text-3xl md:text-h6">4</span>
            <span className="uppercase text-xs md:text-t5">
              {t("locations.stats.continents")}
            </span>
          </div>
        </div>
      </section>
      {/*  */}
      <section style={{ padding: "20px", backgroundImage: "#000" }}>
        <GlobeMap />
      </section>

      <section className="w-full flex justify-center items-center p-4 md:p-5">
        <div className="max-lg:w-full lg:w-[calc(100%-20px)] max-w-7xl bg-white flex flex-col justify-center items-center py-12 md:py-20 px-5 gap-y-6 md:gap-y-7.5 rounded-r01">
          <p className="font-bold text-center text-black text-2xl md:text-h5">
            {t("locations.cta.title")}
          </p>

          <Link
            to="/contact"
            className="text-sm md:text-t2 py-4 md:py-5 px-8 md:px-10 bg-black text-white w-fit rounded-full flex justify-center items-center gap-3"
          >
            {t("locations.cta.button")}

            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.4 15L0 13.6L11.6 2H5V0H15V10H13V3.4L1.4 15Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
