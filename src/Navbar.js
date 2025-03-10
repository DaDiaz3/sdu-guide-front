import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "./LanguageContext";
import sduLogo from "./Components/assets/SDUlogo.png";
import sduLogoDark from "./Components/assets/SDUlogoDark.png";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeContext"; // Подключаем глобальный контекст темы

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("ENG");
    const { translations, setLanguage } = useTranslation();
    const { darkMode, toggleDarkMode } = useTheme(); // Используем глобальное состояние темы

    const changeLanguage = (lang) => {
        setCurrentLang(lang.toUpperCase());
        setLanguage(lang.toLowerCase());
        setIsLangDropdownOpen(false);
    };

    return (
        <header className={`sticky top-0 z-20 h-16 flex items-center shadow-md ${darkMode ? "bg-[#121212] text-white" : "bg-white text-black"}`}>
            <div className="w-full flex items-center justify-between px-10">
                {/* Логотип, меняющийся в зависимости от темы */}
                <img src={darkMode ? sduLogoDark : sduLogo} alt="SDU Logo" className="h-12 transition-opacity duration-300" />

                {/* Навигация */}
                <nav className="flex-grow flex justify-center items-center space-x-6 text-[16px] font-bold uppercase">
                    <Link to="/" className="hover:text-gray-400">{translations.home || "Home"}</Link>
                    <span className="font-bold">•</span>
                    <a href="https://my.sdu.edu.kz/index.php?mod=schedule" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">{translations.portal || "Portal"}</a>
                    <span className="font-bold">•</span>
                    <Link to="/how-to" className="hover:text-gray-400">{translations.how_to || "How To"}</Link>
                    <span className="font-bold">•</span>

                    {/* Выпадающий список факультетов */}
                    <div className="relative">
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="hover:text-gray-400">
                            {translations.faculties || "FACULTIES"}
                        </button>
                        {isDropdownOpen && (
                            <div className={`absolute left-1/2 transform -translate-x-1/2 mt-3 w-40 shadow-lg rounded-lg py-2 border ${darkMode ? "bg-[#121212] border-gray-600 text-white" : "bg-white border-gray-200 text-black"}`}>
                                <a href="/BlockD" className="block px-4 py-2 hover:bg-gray-700">Block D</a>
                                <a href="/BlockE" className="block px-4 py-2 hover:bg-gray-700">Block E</a>
                                <a href="/BlockF" className="block px-4 py-2 hover:bg-gray-700">Block F</a>
                                <a href="/BlockG" className="block px-4 py-2 hover:bg-gray-700">Block G</a>
                                <a href="/BlockH" className="block px-4 py-2 hover:bg-gray-700">Block H</a>
                                <a href="/BlockI" className="block px-4 py-2 hover:bg-gray-700">Block I</a>
                            </div>
                        )}
                    </div>

                    <span className="font-bold">•</span>
                    <a href="/event" className="hover:text-gray-400">{translations.event || "Event"}</a>
                </nav>

                {/* Блок с кнопкой смены языка и темы */}
                <div className="relative flex items-center space-x-3">
                    {/* Кнопка смены языка */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                            className={`px-4 py-1 rounded uppercase font-bold ${darkMode ? "bg-[#121212] text-white" : "bg-transparent text-black"}`}
                        >
                            {currentLang}
                        </button>
                        {isLangDropdownOpen && (
                            <div className={`absolute left-1/2 transform -translate-x-1/2 mt-2 min-w-[100px] shadow-lg rounded-lg py-2 border ${darkMode ? "bg-[#121212] border-gray-600 text-white" : "bg-white border-gray-200 text-black"}`}>
                                <button onClick={() => changeLanguage("eng")} className="block w-full text-left px-4 py-2 hover:bg-gray-700">
                                    ENG
                                </button>
                                <button onClick={() => changeLanguage("kaz")} className="block w-full text-left px-4 py-2 hover:bg-gray-700">
                                    KAZ
                                </button>
                                <button onClick={() => changeLanguage("ru")} className="block w-full text-left px-4 py-2 hover:bg-gray-700">
                                    RU
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Вертикальная линия (разделитель) */}
                    <div className="w-[1px] h-6 bg-black"></div>

                    {/* Переключатель темы */}
                    <button onClick={toggleDarkMode} className={`relative w-12 h-6 flex items-center p-1 rounded-full transition-colors duration-300 ${darkMode ? "bg-gray-600" : "bg-gray-300"}`}>
                        <div className={`absolute inset-y-0 left-1 flex items-center transition-transform duration-300 ${darkMode ? "translate-x-6 text-yellow-400" : "translate-x-0 text-gray-700"}`}>
                            {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
                        </div>
                        <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 transform ${darkMode ? "translate-x-6" : "translate-x-0"}`}></div>
                    </button>
                </div>
            </div>
        </header>
    );
}
