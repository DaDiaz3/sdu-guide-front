import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BlockF from "../Components/assets/blockspng/BlockFimages/BlockF.png";
import { useTheme } from "../ThemeContext"; // Импортируем контекст темы

export default function BlockFPage() {
    const navigate = useNavigate();
    const { darkMode } = useTheme(); // Получаем текущий режим темы

    return (
        <div className={`min-h-screen font-[Cormorant] ${darkMode ? "bg-[#2F2D2D] text-white" : "bg-[#F8F8F8] text-black"}`}>
            {/* Навбар */}
            <Navbar />

            {/* Основной контент */}
            <main>
                {/* Заголовок (цвет меняется в зависимости от темы) */}
                <section
                    className={`w-full h-[262px] flex items-center justify-center shadow-md ${darkMode ? "bg-[#3D4037]" : "bg-[#4C6740]"}`}
                >
                    <h1 className="text-white text-[48px] font-normal font-[Cormorant]">Block F</h1>
                </section>

                {/* Блок с картой (фон всегда #FFFFFF) */}
                <section className="relative w-full flex justify-center py-12 px-8 bg-white rounded-lg shadow-lg">
                    {/* Картинка */}
                    <img src={BlockF} alt="Campus Map" className="w-[60%] rounded-lg shadow-md" />

                    {/* Область нажатия на левое здание */}
                    <div
                        className="absolute left-[30%] top-[16%] w-[20%] h-[60%] cursor-pointer"
                        onClick={() => navigate("/BlockFLeftSide")}
                    />

                    {/* Область нажатия на правое здание */}
                    <div
                        className="absolute right-[30%] top-[16%] w-[17%] h-[60%] cursor-pointer"
                        onClick={() => navigate("/BlockFRightSide")}
                    />
                </section>
            </main>

            {/* Футер */}
            <Footer />
        </div>
    );
}
