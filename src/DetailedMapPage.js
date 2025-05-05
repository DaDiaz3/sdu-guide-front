import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DetailedCampusMap from "./Components/assets/DetailedCampusMap.png";
import { useTheme } from "./ThemeContext"; // Используем глобальную тему
import Sidebar from "./Sidebar"; // путь корректируйте по вашей структуре
import InteractiveMapOverlay from "./InteractiveMapOverlay";

export default function DetailedMapPage() {
    const { darkMode } = useTheme();

    return (
        <div className={`min-h-screen font-[Cormorant] ${darkMode ? "bg-[#121212] text-white" : "bg-[#F8F8F8] text-black"}`}>
            {/* Navbar сверху */}
            <Navbar />

            {/* Sidebar слева, контент справа */}
            <div className="flex">
                {/* Sidebar */}
                <div className="w-[250px]">
                    <Sidebar />
                </div>

                {/* Контент справа от Sidebar */}
                <section
                    className="flex-1 py-12 flex justify-center"
                    style={{ backgroundColor: darkMode ? "#2F2D2D" : "#FFFFFF" }}
                >
                    <div className="relative w-[90%] rounded-lg shadow-md">
                        <img src={DetailedCampusMap} alt="Campus Map" className="w-full" />
                        <InteractiveMapOverlay />
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}


