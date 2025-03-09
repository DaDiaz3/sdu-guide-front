import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BlockE from "../Components/assets/blockspng/BlockEimages/BlockE.png";

export default function HowToPage() {
    const navigate = useNavigate(); // Хук для навигации

    return (
        <div className="min-h-screen font-[Cormorant] bg-[#F8F8F8] text-black">
            {/* Навбар */}
            <Navbar />

            {/* Основной контент */}
            <main>
                {/* Заголовок */}
                <section className="bg-[#4C6740] w-full h-[262px] flex items-center justify-center shadow-md">
                    <h1 className="text-white text-[48px] font-normal font-[Cormorant]">Block E</h1>
                </section>

                {/* Блок с картой */}
                <section className="relative w-full flex justify-center py-12 px-8 bg-white rounded-lg shadow-lg">
                    {/* Картинка */}
                    <img src={BlockE} alt="Campus Map" className="w-[60%] rounded-lg shadow-md" />

                    {/* Область нажатия на левое здание (убрана заливка) */}
                    <div
                        className="absolute left-[30%] top-[16%] w-[20%] h-[60%] cursor-pointer"
                        onClick={() => navigate("/BlockELeftSide")}
                    />

                    {/* Область нажатия на правое здание (убрана заливка) */}
                    <div
                        className="absolute right-[30%] top-[16%] w-[17%] h-[60%] cursor-pointer"
                        onClick={() => navigate("/BlockERightSide")}
                    />
                </section>
            </main>

            {/* Футер */}
            <Footer />
        </div>
    );
}
