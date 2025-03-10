import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import campusMap from "./Components/assets/campus3.png";
import { ExternalLink, Clock } from "lucide-react";
import { useTranslation } from "./LanguageContext";
import { useTheme } from "./ThemeContext"; // Используем глобальную тему

export default function HowToPage() {
    const { translations } = useTranslation();
    const { darkMode } = useTheme(); // Получаем текущую тему

    return (
        <div className={`min-h-screen font-[Cormorant] ${darkMode ? "bg-[#121212] text-white" : "bg-[#F8F8F8] text-black"}`}>
            <Navbar />

            {/* Секция "How This Portal Helps" */}
            <section className="w-full h-[262px] flex items-center justify-center shadow-md"
                     style={{ backgroundColor: darkMode ? "#3D4037" : "#4C6740" }}>
                <h1 className="text-white text-[48px] font-normal font-[Cormorant]">
                    {translations.how_this_portal_helps || "How This Portal Helps"}
                </h1>
            </section>

            {/* Секция "Navigate the campus easily and quickly!" */}
            <section className="w-full py-12 px-8 flex justify-center"
                     style={{ backgroundColor: darkMode ? "#2F2D2D" : "#FFFFFF" }}>
                <div className="w-[1440px] flex items-center rounded-lg">
                    <img src={campusMap} alt="Campus Map" className="w-[45%] rounded-lg shadow-md"/>
                    <div className="ml-12 w-[50%]">
                        <h2 className="text-[48px] font-bold font-[Playfair Display]">
                            {translations.navigate_campus || "Navigate the campus easily and quickly!"}
                        </h2>
                        <p className="text-[20px] font-normal font-[Playfair Display]">
                            {translations.interactive_map_help || "The interactive map helps you quickly find classrooms, libraries, cafes, and more."}
                        </p>

                        <a href="#"
                           className="text-[20px] inline-flex items-center font-bold text-lg hover:underline">
                            <ExternalLink size={30} className="mr-2"/> {translations.view_map || "[View map]"}
                        </a>
                    </div>
                </div>
            </section>

            {/* Секция "Why our portal?" */}
            <section className="w-full h-[601px] flex flex-col justify-center py-12"
                     style={{ backgroundColor: darkMode ? "#3D4037" : "#878F71" }}>
                <div className="w-[1440px] mx-auto flex items-center relative">
                    <div className="w-1/2 px-12 flex justify-center">
                        <h2 className="text-[48px] font-normal font-[Playfair Display] translate-y-[-60px] text-white">
                            {translations.why_our_portal || "Why our portal?"}
                        </h2>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-[601px] w-[2px] bg-white"></div>
                    <div className="w-1/2 px-12 flex justify-center">
                        <p className="text-[32px] font-normal font-[Playfair Display] translate-y-[80px] leading-relaxed text-center text-white">
                            {translations.our_portal_benefits || "Our portal helps you easily navigate the university and save time."}
                        </p>
                    </div>
                </div>
            </section>

            {/* Секция "Advantages" */}
            <section className="w-full py-16 px-6 text-center"
                     style={{backgroundColor: darkMode ? "#2F2D2D" : "#FFFFFF"}}>
            <div className="max-w-[1440px] mx-auto">
                    <h2 className="text-[64px] font-[Cormorant Garamond] font-bold mb-12">
                        {translations.advantages || "Advantages"}
                    </h2>

                    <div className="grid grid-cols-3 gap-x-12 gap-y-16 place-items-center relative">
                        <AdvantageCard title={translations.easy_navigation || "Easy navigation"}
                                       text={translations.easy_navigation_desc || "Find any office, recreation area, or establishment in seconds."}/>
                        <AdvantageCard title={translations.current_info || "Current information"}
                                       text={translations.current_info_desc || "Always accurate information about classes, teachers, and schedules."}/>
                        <AdvantageCard title={translations.accessibility || "Accessibility"}
                                       text={translations.accessibility_desc || "Available to students, teachers, and university staff."}/>

                        <div className="col-span-3 flex justify-center gap-12 mt-[80px] relative">
                            <AdvantageCard title={translations.smart_filters || "Smart Filters"}
                                           text={translations.smart_filters_desc || "Quick search for classrooms, labs, cafes, and more."}
                                           className="relative left-[-50px]"/>
                            <AdvantageCard title={translations.interactive_map || "Interactive map"}
                                           text={translations.interactive_map_desc || "Routes, floors, convenient campus visualization."}
                                           className="relative right-[-50px]"/>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

// Карточка преимущества
function AdvantageCard({ title, text, className }) {
    return (
        <div className={`bg-white p-6 w-[351px] h-[350px] rounded-[30px] 
                        shadow-[0px_20px_50px_rgba(0,0,0,0.2)] 
                        relative pt-[60px] border border-gray-300 ${className}`}>
            <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2
                           w-[90px] h-[90px] bg-[#435873] rounded-full flex items-center justify-center
                           shadow-[0px_-5px_15px_rgba(0,0,0,0.3)]">
                <Clock size={40} className="text-white"/>
            </div>
            <h3 className="text-[26px] font-[Playfair Display] font-bold mt-4 text-black">{title}</h3>
            <div className="w-[80px] h-[2px] bg-[#435873] mx-auto my-4"></div>
            <p className="text-[18px] font-[Cormorant Garamond] text-black">{text}</p>
        </div>
    );
}
