import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "./LanguageContext"; // Подключаем контекст
import sduLogo from "./Components/assets/SDUlogo.png"; // Логотип SDU

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { translations, setLanguage } = useTranslation();

    console.log("setLanguage function:", setLanguage);

    return (
        <header className="bg-white shadow-md sticky top-0 z-20 py-4">
            <div className="w-full flex items-center justify-between px-6 relative">
                <img src={sduLogo} alt="SDU Logo" className="h-12 absolute left-0" />
                <nav className="flex-grow flex justify-center items-center space-x-10 text-gray-600 text-[18px] font-bold uppercase">
                    <Link to="/" className="hover:text-gray-900">Home</Link>
                    <span className="text-black font-bold">•</span>
                    <a href="https://my.sdu.edu.kz/index.php?mod=schedule" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Portal</a>
                    <span className="text-black font-bold">•</span>
                    <Link to="/how-to" className="hover:text-gray-900">How To</Link>
                    <span className="text-black font-bold">•</span>

                    {/* Faculties Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-2 hover:text-gray-900"
                        >
                            FACULTIES <FaChevronDown className="text-sm transition-transform" style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
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
                    <a href="/event" className="hover:text-gray-900">Event</a>
                    <span className="text-black font-bold">•</span>
                    <a href="#" className="hover:text-gray-900">{translations["others"] || "Others"}</a>

                    {/* Переключение языка */}
                    <button onClick={() => {
                        console.log("Switching to English");
                        setLanguage("en");
                    }} className="px-3 py-1 border rounded hover:bg-gray-200">EN</button>

                    <button onClick={() => {
                        console.log("Switching to Russian");
                        setLanguage("ru");
                    }} className="px-3 py-1 border rounded hover:bg-gray-200">RU</button>

                </nav>
            </div>
        </header>
    );
}
