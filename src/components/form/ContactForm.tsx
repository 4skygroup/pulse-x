import { Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const FORMSPREE = "https://formspree.io/f/xvzjakbb";

type Tab = "callback" | "message";

const timeSlots = [
  { name: "9h30 – 10h30", option: "9h30 – 10h30" },
  { name: "10h30 – 11h30", option: "10h30 – 11h30" },
  { name: "11h30 – 12h30", option: "11h30 – 12h30" },
  { name: "14h00 – 15h00", option: "14h00 – 15h00" },
  { name: "15h00 – 16h00", option: "15h00 – 16h00" },
  { name: "16h00 – 17h00", option: "16h00 – 17h00" },
  { name: "17h00 – 18h00", option: "17h00 – 18h00" },
];

const opts = [
  {
    option: "seo",
    name: "contact.inputs.services.seo",
  },
  {
    option: "ads",
    name: "contact.inputs.services.ads",
  },
  {
    option: "marketing",
    name: "contact.inputs.services.marketing",
  },
  {
    option: "analytics",
    name: "contact.inputs.services.analytics",
  },
  {
    option: "other",
    name: "contact.inputs.services.other",
  },
];

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState<Tab>("callback");
  const { t } = useTranslation();

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111111] p-1">
      {/* Tab switcher */}
      <div className="mb-1 grid grid-cols-2 rounded-xl bg-white/5 p-1">
        <button
          onClick={() => setActiveTab("callback")}
          className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-t5 font-medium transition-all duration-200 ${
            activeTab === "callback"
              ? "bg-white text-black shadow"
              : "text-white/50 hover:text-white"
          }`}
        >
          <Phone className="w-4 h-4" />
          {t("contact.getCalledBack.label")}
        </button>
        <button
          onClick={() => setActiveTab("message")}
          className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-t5 font-medium transition-all duration-200 ${
            activeTab === "message"
              ? "bg-white text-black shadow"
              : "text-white/50 hover:text-white"
          }`}
        >
          <Mail className="w-4 h-4" />
          {t("contact.sendMessage.label")}
        </button>
      </div>

      {/* Form body */}
      <div className="p-5">
        {activeTab === "callback" ? <CallbackForm /> : <MessageForm />}
      </div>
    </div>
  );
}

function CallbackForm() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tel, setTel] = useState("");
  const [sujet, setSujet] = useState("");
  const [horaire, setHoraire] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch(FORMSPREE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ nom, prenom, tel, sujet, horaire, date }),
    });

    if (res.ok) {
      setStatus("sent");
      setNom("");
      setPrenom("");
      setTel("");
      setSujet("");
      setHoraire("");
      setDate("");
    } else {
      setStatus("error");
    }
  };
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field
          label={t("contact.inputs.firstname.label")}
          placeholder={t("contact.inputs.firstname.placeholder")}
          value={nom}
          onChange={setNom}
        />
        <Field
          label={t("contact.inputs.lastname.label")}
          placeholder={t("contact.inputs.lastname.placeholder")}
          value={prenom}
          onChange={setPrenom}
        />
      </div>
      <Field
        label={t("contact.inputs.phoneNumber.label")}
        placeholder={t("contact.inputs.phoneNumber.placeholder")}
        type="tel"
        value={tel}
        onChange={setTel}
      />
      <SelectField
        label={t("contact.inputs.subject")}
        options={opts}
        value={sujet}
        onChange={setSujet}
      />
      <Field
        label={t("contact.inputs.dayOfCall")}
        placeholder=""
        type="date"
        value={date}
        onChange={setDate}
      />
      <SelectField
        label={t("contact.inputs.hourOfCall")}
        options={timeSlots}
        value={horaire}
        onChange={setHoraire}
      />

      {status === "sent" && (
        <p className="text-sm text-green-400 text-center">
          {t("contact.getCalledBack.success")}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400 text-center">
          {t("contact.getCalledBack.failure")}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-white/90 active:scale-[0.98] disabled:opacity-50"
      >
        <Phone className="w-4 h-4" />
        {status === "sending"
          ? `${t("contact.getCalledBack.pending")}...`
          : `${t("contact.getCalledBack.cta")}`}
      </button>
    </form>
  );
}

function MessageForm() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch(FORMSPREE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ nom, prenom, email, sujet, message }),
    });

    if (res.ok) {
      setStatus("sent");
      setNom("");
      setPrenom("");
      setEmail("");
      setSujet("");
      setMessage("");
    } else {
      setStatus("error");
    }
  };
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field
          label={t("contact.inputs.firstname.label")}
          placeholder={t("contact.inputs.firstname.placeholder")}
          value={prenom}
          onChange={setPrenom}
        />
        <Field
          label={t("contact.inputs.lastname.label")}
          placeholder={t("contact.inputs.lastname.placeholder")}
          value={nom}
          onChange={setNom}
        />
      </div>
      <Field
        label={t("contact.inputs.mail.label")}
        placeholder={t("contact.inputs.mail.placeholder")}
        type="email"
        value={email}
        onChange={setEmail}
      />
      <SelectField
        label={t("contact.inputs.subject")}
        options={opts}
        value={sujet}
        onChange={setSujet}
      />

      <div className="flex flex-col gap-1.5">
        <label className="text-t6 font-medium uppercase tracking-widest text-white/50">
          {t("contact.inputs.message.label")}
        </label>
        <textarea
          rows={4}
          placeholder={t("contact.inputs.message.placeholder")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-t5 text-white placeholder:text-white/25 outline-none transition focus:border-white/30 focus:bg-white/8"
        />
      </div>

      {status === "sent" && (
        <p className="text-sm text-green-400 text-center">
          {t("contact.sendMessage.success")}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400 text-center">
          {t("contact.sendMessage.failure")}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-t5 font-semibold text-black transition hover:bg-white/90 active:scale-[0.98] disabled:opacity-50"
      >
        <Mail className="w-4 h-4" />
        {status === "sending"
          ? `${t("contact.sendMessage.pending")}...`
          : `${t("contact.sendMessage.cta")}`}
      </button>
    </form>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-t6 font-medium uppercase tracking-widest text-white/50">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-t5 text-white placeholder:text-white/25 outline-none transition focus:border-white/30 focus:bg-white/8 [color-scheme:dark]"
      />
    </div>
  );
}

function SelectField({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: typeof opts;
  value: string;
  onChange: (v: string) => void;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-t6 font-medium uppercase tracking-widest text-white/50">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-t5 text-white outline-none transition focus:border-white/30 focus:bg-white/8"
      >
        <option value="" disabled className="bg-[#111] text-white/50">
          {t("contact.inputs.selectPlaceholder")}…
        </option>
        {options.map((o) => (
          <option
            key={o.option}
            value={o.option}
            className="bg-[#111] text-white"
          >
            {t(o.name)}
          </option>
        ))}
      </select>
    </div>
  );
}
