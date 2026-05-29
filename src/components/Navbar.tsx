import { useState } from "react";
import { NavLink } from "react-router-dom";

interface NavItem {
    label: string;
    path: string;
    external?: boolean;
}

const navItems: NavItem[] = [
    { label: "The Group", path: "https://www.playtosky.com/", external: true },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black flex items-center justify-between px-8 py-4">

            {/* Logo */}
            <NavLink to="/" className="shrink-0">
                <img
                    src="/logoPulseX.png"
                    alt="Pulse X"
                    className="h-9"
                />
            </NavLink>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-10">
                {navItems.map(({ label, path, external }) => (
                    <li key={path}>
                        {external ? (
                            <a
                                href={path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-glacial text-t5 text-white hover:text-pulse-x-red transition-colors duration-200"
                            >
                                {label}
                            </a>
                        ) : (
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    `font-glacial text-t5 transition-colors duration-200 ${
                                        isActive
                                            ? "text-pulse-x-red"
                                            : "text-white hover:text-pulse-x-red"
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        )}
                    </li>
                ))}
            </ul>

            {/* Hamburger button */}
            <button
                className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
            >
                <span
                    className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                        menuOpen ? "translate-y-2 rotate-45" : ""
                    }`}
                />

                <span
                    className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                        menuOpen ? "opacity-0" : ""
                    }`}
                />

                <span
                    className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                        menuOpen ? "-translate-y-2 -rotate-45" : ""
                    }`}
                />
            </button>

            {/* Mobile menu */}
            <div
                className={`absolute top-full left-0 right-0 bg-black md:hidden overflow-hidden transition-all duration-300 ${
                    menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col px-8 py-4 gap-6">
                    {navItems.map(({ label, path, external }) => (
                        <li key={path}>
                            {external ? (
                                <a
                                    href={path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMenuOpen(false)}
                                    className="font-glacial text-t4 text-white hover:text-pulse-x-red transition-colors duration-200"
                                >
                                    {label}
                                </a>
                            ) : (
                                <NavLink
                                    to={path}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `font-glacial text-t4 transition-colors duration-200 ${
                                            isActive
                                                ? "text-pulse-x-red"
                                                : "text-white hover:text-pulse-x-red"
                                        }`
                                    }
                                >
                                    {label}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}