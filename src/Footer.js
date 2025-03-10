import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaTelegramPlane } from "react-icons/fa";
import footerLogo from "./Components/assets/footerLOGO.png"; // Светлый логотип
import footerLogodark from "./Components/assets/footerLOGOdark.png"; // Тёмный логотип
import { useTheme } from "./ThemeContext"; // Импортируем контекст темы
import { useTranslation } from "./LanguageContext"; // Импортируем контекст перевода

export default function Footer() {
    const { darkMode } = useTheme(); // Получаем текущий режим темы
    const { translations } = useTranslation(); // Получаем переводы

    return (
        <footer className={`${darkMode ? "bg-[#3D4037]" : "bg-[#878F71]"} py-10 text-white flex justify-around items-center`}>
            {/* Website Links */}
            <div className="text-center">
                <h3 className="text-lg font-bold mb-2">
                    {translations.website || "WEBSITE"}
                </h3>
                <nav className="flex flex-col space-y-1">
                    <a href="https://my.sdu.edu.kz/index.php?mod=schedule" className="hover:underline">{translations.portal2 || "Portal"}</a>
                    <a href="/" className="hover:underline">{translations.faculties2 || "Faculties"}</a>
                    <a href="/" className="hover:underline">{translations.maps_directions || "Maps and Directions"}</a>
                    <a href="/event" className="hover:underline">{translations.events || "Events"}</a>
                </nav>
            </div>

            {/* Логотип и соцсети */}
            <div className="text-center">
                <img src={darkMode ? footerLogodark : footerLogo} alt="SDU Guide" className="h-32 mb-4 mx-auto"/> {/* Увеличил логотип */}
                <div className="flex space-x-4 justify-center">
                    <a href="#"
                       className="p-3 rounded-full border border-white hover:bg-white hover:text-[#3D4037] transition">
                        <FaInstagram size={24}/>
                    </a>
                    <a href="#"
                       className="p-3 rounded-full border border-white hover:bg-white hover:text-[#3D4037] transition">
                        <FaFacebookF size={24}/>
                    </a>
                    <a href="#"
                       className="p-3 rounded-full border border-white hover:bg-white hover:text-[#3D4037] transition">
                        <FaTiktok size={24}/> {/* TikTok */}
                    </a>
                    <a href="#"
                       className="p-3 rounded-full border border-white hover:bg-white hover:text-[#3D4037] transition">
                        <FaTelegramPlane size={24}/> {/* Telegram */}
                    </a>
                </div>
                <p className="text-sm mt-4">
                    {translations.address || "Almaty region, Karasai district. 040900, city of Kaskelen, st. Abylai Khan 1/1"}
                </p>
            </div>

            {/* Contact */}
            <div className="text-center">
                <h3 className="text-lg font-bold mb-2">
                    {translations.contact || "CONTACT"}
                </h3>
                <p>{translations.phone || "+7 727 307 95 65"}</p>
                <p>{translations.email || "info@sdu.edu.kz"}</p>
            </div>
        </footer>
    );
}
