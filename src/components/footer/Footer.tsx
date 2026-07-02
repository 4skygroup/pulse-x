import React from "react";
import { entites, politique, services, social } from "./FooterData.tsx";
import CreatedBy from "./CreatedBy.tsx";

const FooterColumn = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-4">
    <h4 className="text-t5 font-bold text-white">{title}</h4>
    <div className="flex flex-col gap-[0.55rem]">{children}</div>
  </div>
);

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-t5 text-white hover:underline transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #000000 45%, #E32323 100%)",
      }}
    >
      {/* Glow rouge */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75rem] h-[20rem] rounded-full blur-3xl opacity-60 pointer-events-none"
        style={{ backgroundColor: "#E32323" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-12 pb-6">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <a href="/" aria-label="Pulse X – Accueil">
            <img
              className="h-12"
              src="/logoPulseX.png"
              alt="Pulse X"
              loading="lazy"
            />
          </a>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <FooterColumn title="Politics">
            {politique.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {services.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Our entities">
            {entites.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Our networks">
            <div className="flex flex-wrap gap-3 mt-1">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[38px] h-[38px] rounded-full border border-white/50 text-white hover:border-white hover:bg-white/10 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </FooterColumn>
        </div>

        {/* COPYRIGHT */}
        <CreatedBy />
      </div>
    </footer>
  );
};

export default Footer;
