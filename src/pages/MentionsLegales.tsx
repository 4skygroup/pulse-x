import { useTranslation } from "react-i18next";

export default function MentionsLegales() {
  const { t } = useTranslation();
  const sections = [
    {
      title: t("legal.publisher.title"),
      content: (
        <>
          <p>
            {t("legal.publisher.intro")}{" "}
            <a href="https://www.pulsexagency.com/" className="underline">
              https://www.pulsexagency.com/
            </a>
            , {t("legal.publisher.outro")}
          </p>

          <ul className="mt-3 space-y-1 list-none">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
              {t("legal.publisher.companyLabel")}:{" "}
              {t("legal.publisher.company")}
            </li>

            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
              {t("legal.publisher.emailLabel")}:
              <a
                href="mailto:contact@visuanceagency.com"
                className="underline ml-1"
              >
                contact@visuanceagency.com
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: t("legal.hosting.title"),
      content: (
        <ul className="space-y-1 list-none">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
            {t("legal.hosting.hostLabel")}: {t("legal.hosting.host")}
          </li>

          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
            {t("legal.hosting.websiteLabel")}:
            <a href="https://www.ovhcloud.com/" className="underline ml-1">
              https://www.ovhcloud.com/
            </a>
          </li>
        </ul>
      ),
    },
    {
      title: t("legal.activities.title"),
      content: (
        <ul className="space-y-1 list-none">
          {[
            t("legal.activities.websiteDevelopment"),
            t("legal.activities.branding"),
            t("legal.activities.uiux"),
            t("legal.activities.strategy"),
            t("legal.activities.seo"),
            t("legal.activities.content"),
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: t("legal.intellectualProperty.title"),
      content: <p>{t("legal.intellectualProperty.description")}</p>,
    },
    {
      title: t("legal.liability.title"),
      content: (
        <>
          <p>{t("legal.liability.intro")}</p>

          <ul className="mt-3 space-y-1 list-none">
            {[
              t("legal.liability.errors"),
              t("legal.liability.interruptions"),
              t("legal.liability.usage"),
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: t("legal.externalLinks.title"),
      content: <p>{t("legal.externalLinks.description")}</p>,
    },
    {
      title: t("legal.personalData.title"),
      content: <p>{t("legal.personalData.description")}</p>,
    },
    {
      title: t("legal.applicableLaw.title"),
      content: <p>{t("legal.applicableLaw.description")}</p>,
    },
  ];

  return (
    <main className="min-h-screen bg-black font-glacial px-6 py-20 md:px-16 lg:px-32">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-h6 font-bold text-white mb-2">
          {t("legal.title")}
        </h2>

        <div className="w-12 h-0.5 mb-12" />

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-t2 font-bold text-white mb-3">
                {section.title}
              </h2>

              <div className="text-t5 text-white leading-relaxed space-y-1">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
