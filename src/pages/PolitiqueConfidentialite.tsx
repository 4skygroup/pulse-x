export default function PolitiqueConfidentialite() {
    const sections = [
        {
            title: "Data Collection",
            content: (
                <>
                    <p>Pulse X Agency may collect personal data when you:</p>

                    <ul className="mt-3 space-y-1 list-none">
                        {[
                            "Fill out a contact form",
                            "Request a quotation",
                            "Browse the website",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-4">
                        The collected data may include: first name, last name,
                        email address, phone number, company name, message,
                        browsing data and IP address.
                    </p>
                </>
            ),
        },
        {
            title: "Use of Data",
            content: (
                <ul className="space-y-1 list-none">
                    {[
                        "Respond to contact requests",
                        "Provide quotations and services",
                        "Improve the website and user experience",
                        "Manage customer relationships",
                        "Analyze marketing performance",
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
            title: "Legal Basis",
            content: (
                <ul className="space-y-1 list-none">
                    {[
                        "User consent",
                        "Performance of a pre-contractual relationship",
                        "Legitimate interest of the company",
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
            title: "Data Retention",
            content: (
                <ul className="space-y-1 list-none">
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                        Prospects: up to 3 years after the last contact.
                    </li>

                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                        Clients: up to 10 years in accordance with legal
                        obligations.
                    </li>
                </ul>
            ),
        },
        {
            title: "Data Sharing",
            content: (
                <>
                    <p>
                        Personal data may only be shared with:
                    </p>

                    <ul className="mt-3 space-y-1 list-none">
                        {[
                            "Technical service providers (hosting, CRM, analytics)",
                            "Services necessary for the operation of the website",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-4">
                        No personal data is sold or commercially shared.
                    </p>
                </>
            ),
        },
        {
            title: "Cookies",
            content: (
                <>
                    <p>This website uses cookies to:</p>

                    <ul className="mt-3 space-y-1 list-none">
                        {[
                            "Measure website traffic",
                            "Optimize navigation",
                            "Improve marketing performance",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-4">
                        A cookie consent banner allows users to manage their
                        preferences.
                    </p>
                </>
            ),
        },
        {
            title: "Your Rights (GDPR)",
            content: (
                <>
                    <p>In accordance with the GDPR, you have the right to:</p>

                    <ul className="mt-3 space-y-1 list-none">
                        {[
                            "Access your data",
                            "Rectify your data",
                            "Delete your data",
                            "Object to processing",
                            "Data portability",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-4">
                        To exercise your rights, contact us at{" "}
                        <a
                            href="mailto:contact@pulsexagency.com"
                            className="underline"
                        >
                            contact@pulsexagency.com
                        </a>
                        .
                    </p>
                </>
            ),
        },
        {
            title: "Security",
            content: (
                <p>
                    Pulse X Agency implements appropriate technical and
                    organizational measures to protect personal data against
                    unauthorized access, loss or disclosure.
                </p>
            ),
        },
        {
            title: "Changes",
            content: (
                <p>
                    This Privacy Policy may be updated at any time to remain
                    compliant with applicable legislation.
                </p>
            ),
        },
        {
            title: "Last Update",
            content: <p>June 24, 2026</p>,
        },
        {
            title: "Contact",
            content: (
                <a
                    href="mailto:contact@pulsexagency.com"
                    className="underline"
                >
                    contact@pulsexagency.com
                </a>
            ),
        },
    ];

    return (
        <main className="min-h-screen bg-black font-glacial px-6 py-20 md:px-16 lg:px-32">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-h6 font-bold text-white mb-2">
                    Privacy Policy
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