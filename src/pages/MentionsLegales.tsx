export default function MentionsLegales() {
    const sections = [
        {
            title: "Publisher",
            content: (
                <>
                    <p>
                        The Pulse X Agency website, accessible at{" "}
                        <a
                            href="https://www.pulsexagency.com/"
                            className="underline"
                        >
                            https://www.pulsexagency.com/
                        </a>
                        , is published by:
                    </p>

                    <ul className="mt-3 space-y-1 list-none">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                            Company: Visuance Agency
                        </li>

                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                            Email:
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
            title: "Hosting",
            content: (
                <ul className="space-y-1 list-none">
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                        Host: OVH Cloud
                    </li>

                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                        Website:
                        <a
                            href="https://www.ovhcloud.com/"
                            className="underline ml-1"
                        >
                            https://www.ovhcloud.com/
                        </a>
                    </li>
                </ul>
            ),
        },
        {
            title: "Activities",
            content: (
                <ul className="space-y-1 list-none">
                    {[
                        "Custom website development",
                        "Branding & visual identity",
                        "UX/UI Design",
                        "Digital strategy & marketing",
                        "SEO & traffic acquisition",
                        "Digital content creation",
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
            title: "Intellectual Property",
            content: (
                <p>
                    All content available on this website (texts, visuals,
                    logos, videos, mockups, structure, etc.) is protected by
                    intellectual property laws. Any reproduction,
                    distribution or use without prior written authorization is
                    strictly prohibited.
                </p>
            ),
        },
        {
            title: "Liability",
            content: (
                <>
                    <p>
                        Pulse X Agency strives to provide accurate and
                        up-to-date information. However, the publisher cannot
                        be held liable for:
                    </p>

                    <ul className="mt-3 space-y-1 list-none">
                        {[
                            "Errors or omissions",
                            "Temporary website interruptions",
                            "The use made of the information published on the website",
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
            title: "External Links",
            content: (
                <p>
                    This website may contain links to third-party websites.
                    Pulse X Agency declines all responsibility regarding the
                    content of these external websites.
                </p>
            ),
        },
        {
            title: "Personal Data",
            content: (
                <p>
                    Personal data collected through this website is processed
                    in accordance with applicable regulations and our Privacy
                    Policy.
                </p>
            ),
        },
        {
            title: "Applicable Law",
            content: (
                <p>
                    This website is governed by French law. Any dispute shall
                    fall under the jurisdiction of the competent courts of
                    Pulse X Agency's registered office.
                </p>
            ),
        },
    ];

    return (
        <main className="min-h-screen bg-black font-glacial px-6 py-20 md:px-16 lg:px-32">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-h6 font-bold text-white mb-2">
                    Legal Notice
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