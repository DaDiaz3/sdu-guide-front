import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "./LanguageContext";
import sduLogo from "./Components/assets/SDUlogo.png";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("ENG");
    const { translations, setLanguage } = useTranslation();

    const changeLanguage = (lang) => {
        setCurrentLang(lang.toUpperCase());
        setLanguage(lang.toLowerCase());
        setIsLangDropdownOpen(false);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-20 h-16 flex items-center">
            <div className="w-full flex items-center justify-between px-10">
                <img src={sduLogo} alt="SDU Logo" className="h-12" />
                <nav className="flex-grow flex justify-center items-center space-x-6 text-gray-600 text-[16px] font-bold uppercase">
                    <Link to="/" className="hover:text-gray-900">{translations.home || "Home"}</Link>
                    <span className="text-black font-bold">•</span>
                    <a href="https://my.sdu.edu.kz/index.php?mod=schedule" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">{translations.portal || "Portal"}</a>
                    <span className="text-black font-bold">•</span>
                    <Link to="/how-to" className="hover:text-gray-900">{translations.how_to || "How To"}</Link>
                    <span className="text-black font-bold">•</span>

                    {/* Faculties Dropdown */}
                    <div className="relative">
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 hover:text-gray-900">
                            {translations.faculties || "FACULTIES"} <FaChevronDown className="text-sm transition-transform" style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-40 bg-white shadow-lg rounded-lg py-2 border border-gray-200">
                                <a href="/BlockD" className="block px-4 py-2 hover:bg-gray-100">Block D</a>
                                <a href="/BlockE" className="block px-4 py-2 hover:bg-gray-100">Block E</a>
                                <a href="/BlockF" className="block px-4 py-2 hover:bg-gray-100">Block F</a>
                                <a href="/BlockG" className="block px-4 py-2 hover:bg-gray-100">Block G</a>
                                <a href="/BlockH" className="block px-4 py-2 hover:bg-gray-100">Block H</a>
                                <a href="/BlockI" className="block px-4 py-2 hover:bg-gray-100">Block I</a>
                            </div>
                        )}
                    </div>

                    <span className="text-black font-bold">•</span>
                    <a href="/event" className="hover:text-gray-900">{translations.event || "Event"}</a>
                </nav>

                {/* Language Dropdown */}
                <div className="relative flex items-center space-x-3">
                    <span className="uppercase text-gray-600 font-bold">{currentLang}</span>
                    <div className="relative">
                        <button onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)} className="px-3 py-1 border rounded flex items-center gap-2 hover:bg-gray-200">
                            <FaChevronDown className="text-sm transition-transform" style={{ transform: isLangDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                        </button>
                        {isLangDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-lg py-2 border border-gray-200">
                                <button onClick={() => changeLanguage("eng")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">ENG</button>
                                <button onClick={() => changeLanguage("kaz")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">KAZ</button>
                                <button onClick={() => changeLanguage("ru")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">RU</button>
                            </div>
                        )}
                    </div>
                    <div className="border-l h-6 mx-2"></div>
                    {/* Switch (заглушка) */}
                    <div className="relative w-10 h-5 bg-gray-300 rounded-full flex items-center p-1 cursor-pointer">
                        <div className="w-4 h-4 bg-white rounded-full shadow-md transform transition-transform"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}
