import { useTranslation } from "react-i18next";

export default function PolitiqueConfidentialite() {
  const { t } = useTranslation();
  const sections = [
    {
      title: t("privacy.collection.title"),
      content: (
        <>
          <p>{t("privacy.collection.intro")}</p>

          <ul className="mt-3 space-y-1 list-none">
            {[
              t("privacy.collection.item1"),
              t("privacy.collection.item2"),
              t("privacy.collection.item3"),
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-4">{t("privacy.collection.description")}</p>
        </>
      ),
    },
    {
      title: t("privacy.useOfData.title"),
      content: (
        <ul className="space-y-1 list-none">
          {[
            t("privacy.useOfData.item1"),
            t("privacy.useOfData.item2"),
            t("privacy.useOfData.item3"),
            t("privacy.useOfData.item4"),
            t("privacy.useOfData.item5"),
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
      title: t("privacy.legalBasis.title"),
      content: (
        <ul className="space-y-1 list-none">
          {[
            t("privacy.legalBasis.item1"),
            t("privacy.legalBasis.item2"),
            t("privacy.legalBasis.item3"),
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
      title: t("privacy.retention.title"),
      content: (
        <ul className="space-y-1 list-none">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
            {t("privacy.retention.prospects")}
          </li>

          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
            {t("privacy.retention.clients")}
          </li>
        </ul>
      ),
    },
    {
      title: t("privacy.sharing.title"),
      content: (
        <>
          <p>{t("privacy.sharing.intro")}</p>

          <ul className="mt-3 space-y-1 list-none">
            {[t("privacy.sharing.item1"), t("privacy.sharing.item2")].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ),
            )}
          </ul>

          <p className="mt-4">{t("privacy.sharing.description")}</p>
        </>
      ),
    },
    {
      title: t("privacy.cookies.title"),
      content: (
        <>
          <p>{t("privacy.cookies.intro")}</p>

          <ul className="mt-3 space-y-1 list-none">
            {[
              t("privacy.cookies.item1"),
              t("privacy.cookies.item2"),
              t("privacy.cookies.item3"),
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-4">{t("privacy.cookies.description")}</p>
        </>
      ),
    },
    {
      title: t("privacy.rights.title"),
      content: (
        <>
          <p>{t("privacy.rights.intro")}</p>

          <ul className="mt-3 space-y-1 list-none">
            {[
              t("privacy.rights.item1"),
              t("privacy.rights.item2"),
              t("privacy.rights.item3"),
              t("privacy.rights.item4"),
              t("privacy.rights.item5"),
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-4">
            {t("privacy.rights.description")}{" "}
            <a href="mailto:contact@pulsexagency.com" className="underline">
              {t("privacy.company.email")}
            </a>
            .
          </p>
        </>
      ),
    },
    {
      title: t("privacy.security.title"),
      content: <p>{t("privacy.security.description")}</p>,
    },
    {
      title: t("privacy.changes.title"),
      content: <p>{t("privacy.changes.description")}</p>,
    },
    {
      title: t("privacy.lastUpdate.title"),
      content: <p>{t("privacy.lastUpdate.value")}</p>,
    },
    {
      title: t("privacy.contact.title"),
      content: (
        <a href="mailto:contact@pulsexagency.com" className="underline">
          {t("privacy.company.email")}
        </a>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-black font-glacial px-6 py-20 md:px-16 lg:px-32">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-h6 font-bold text-white mb-2">
          {t("privacy.title")}
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
