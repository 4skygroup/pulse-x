import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ToggleLanguage() {
  const { i18n } = useTranslation();

  return (
    <button
      onClick={() => i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")}
      className="flex items-center gap-2 bg-white text-black px-6 py-1.5 rounded-full text-sm"
    >
      <Globe size={14} />
      {i18n.language === "fr" ? "English" : "Français"}
    </button>
  );
}
