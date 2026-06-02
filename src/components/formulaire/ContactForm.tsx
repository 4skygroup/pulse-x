"use client";

import { useState } from "react";

export default function ContactForm() {
    const [subject, setSubject] = useState("");

    return (
        <form className="md:col-span-7 flex flex-col gap-4 text-xs font-medium text-white/90">

            {/* Ligne 1 : Nom & Prénom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" id="lastname" placeholder="Dupond" className="w-full bg-white/20 border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-black/30 focus:outline-none focus:border-white text-sm" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" id="firstname" placeholder="Arnold" className="w-full bg-white/20 border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-black/30 focus:outline-none focus:border-white text-sm" />
                </div>
            </div>

            {/* Ligne 2 : Email & Nom de l'entreprise */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email">Adresse Email</label>
                    <input type="email" id="email" placeholder="a.dupont@gmail.com" className="w-full bg-white/20 border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-black/30 focus:outline-none focus:border-white text-sm" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="company">Nom De L&apos;entreprise</label>
                    <input type="text" id="company" placeholder="SNCF Connect" className="w-full bg-white/20 border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-black/30 focus:outline-none focus:border-white text-sm" />
                </div>
            </div>

            {/* Ligne 3 : Téléphone & Sujet */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone">Numéro De Téléphone</label>
                    <input type="tel" id="phone" placeholder="06 12 34 56 78" className="w-full bg-white/20 border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-black/30 focus:outline-none focus:border-white text-sm" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject">Sujet</label>
                    <div className="relative">
                        <select
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full bg-white/20 border border-white/40 rounded-lg px-4 py-2.5 text-black appearance-none focus:outline-none focus:border-white text-sm"
                        >
                            <option value="" disabled className="text-black/50">Sélectionnez un sujet</option>
                            <option value="representation" className="text-black">Talent Representation</option>
                            <option value="partnership" className="text-black">Brand Partnership</option>
                            <option value="other" className="text-black">Other Inquiry</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-black/60">
                            ▼
                        </div>
                    </div>
                </div>
            </div>

            {/* Ligne 4 : Message */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="message">Votre Message</label>
                <textarea id="message" rows={3} placeholder="Message" className="w-full bg-white/20 border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-black/30 focus:outline-none focus:border-white text-sm resize-none"></textarea>
            </div>

            {/* Bouton d'envoi aligné au centre */}
            <div className="flex justify-center mt-4">
                <button type="submit" className="bg-black text-pulse-burgundy font-regular  tracking-wider px-10 py-3 rounded-lg shadow-md hover:bg-white/20 hover:shadow-xl transition-all duration-300 text-sm">
                    Envoyer
                </button>
            </div>

        </form>
    );
}