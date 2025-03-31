import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import BlockD from "./Components/assets/blockspng/BlockDimages/BlockD.png";
import BlockE from "./Components/assets/blockspng/BlockEimages/BlockE.png";
import BlockF from "./Components/assets/blockspng/BlockFimages/BlockF.png";
import BlockG from "./Components/assets/blockspng/BlockGimages/BlockG.png";
import BlockH from "./Components/assets/blockspng/BlockHimages/BlockH.png";
import BlockI from "./Components/assets/blockspng/BlockIimages/BlockI.png";


export default function AllFacilities() {
    const navigate = useNavigate();
    const { darkMode } = useTheme();

    return (
        <div className="min-h-screen font-[Cormorant] bg-gray-100 text-black">
            {/* Navbar */}
            <Navbar />

            {/* Основной контент */}
            <main>
                {/* Заголовок (цвет меняется в зависимости от темы) */}
                <section className={`w-full h-[262px] flex items-center justify-center shadow-md ${darkMode ? "bg-[#3D4037]" : "bg-[#4C6740]"}`}>
                    <h1 className="text-white text-[48px] font-normal font-[Cormorant]">Block D</h1>
                </section>
                {/* Блок с картой (фон всегда #FFFFFF) */}
                <section className="relative w-full flex justify-center py-12 px-8 bg-white rounded-lg shadow-lg">
                    {/* Картинка */}
                    <img src={BlockD} alt="Campus Map" className="w-[60%] rounded-lg shadow-md" />

                    {/* Область нажатия на левое здание */}
                    <div className="absolute left-[30%] top-[16%] w-[20%] h-[60%] cursor-pointer" onClick={() => navigate("/BlockDLeftSide")} />

                    {/* Область нажатия на правое здание */}
                    <div className="absolute right-[30%] top-[16%] w-[17%] h-[60%] cursor-pointer" onClick={() => navigate("/BlockDRightSide")} />
                </section>

                {/* Заголовок (цвет меняется в зависимости от темы) */}
                <section
                    className={`w-full h-[262px] flex items-center justify-center shadow-md ${darkMode ? "bg-[#3D4037]" : "bg-[#4C6740]"}`}
                >
                    <h1 className="text-white text-[48px] font-normal font-[Cormorant]">Block E</h1>
                </section>

                {/* Блок с картой (фон всегда #FFFFFF) */}
                <section className="relative w-full flex justify-center py-12 px-8 bg-white rounded-lg shadow-lg">
                    {/* Картинка */}
                    <img src={BlockE} alt="Campus Map" className="w-[60%] rounded-lg shadow-md" />

                    {/* Область нажатия на левое здание */}
                    <div
                        className="absolute left-[30%] top-[16%] w-[20%] h-[60%] cursor-pointer"
                        onClick={() => navigate("/BlockELeftSide")}
                    />

                    {/* Область нажатия на правое здание */}
                    <div
                        className="absolute right-[30%] top-[16%] w-[17%] h-[60%] cursor-pointer"
                        onClick={() => navigate("/BlockERightSide")}
                    />
                </section>

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

                {/* Заголовок (цвет меняется в зависимости от темы) */}
                <section
                    className={`w-full h-[262px] flex items-center justify-center shadow-md ${darkMode ? "bg-[#3D4037]" : "bg-[#4C6740]"}`}
                >
                    <h1 className="text-white text-[48px] font-normal font-[Cormorant]">Block G</h1>
                </section>

                {/* Блок с картой (фон всегда #FFFFFF) */}
                <section className="relative w-full flex justify-center py-12 px-8 bg-white rounded-lg shadow-lg">
                    {/* Картинка */}
                    <img src={BlockG} alt="Campus Map" className="w-[60%] rounded-lg shadow-md" />

                    {/* Область нажатия на левое здание */}
                    <div
                        className="absolute left-[30%] top-[16%] w-[20%] h-[60%] cursor-pointer"
                        onClick={() => navigate("/BlockGLeftSide")}
                    />

                    {/* Область нажатия на правое здание */}
                    <div
                        className="absolute right-[30%] top-[16%] w-[17%] h-[60%] cursor-pointer"
                        onClick={() => navigate("/BlockGRightSide")}
                    />
                </section>

                {/* Заголовок (цвет меняется в зависимости от темы) */}
                <section
                    className={`w-full h-[262px] flex items-center justify-center shadow-md ${darkMode ? "bg-[#3D4037]" : "bg-[#4C6740]"}`}
                >
                    <h1 className="text-white text-[48px] font-normal font-[Cormorant]">Block H</h1>
                </section>

                {/* Блок с картой (фон всегда #FFFFFF) */}
                <section className="relative w-full flex justify-center py-12 px-8 bg-white rounded-lg shadow-lg">
                    {/* Картинка */}
                    <img src={BlockH} alt="Campus Map" className="w-[60%] rounded-lg shadow-md" />

                    {/* Область нажатия на левое здание */}
                    <div
                        className="absolute left-[30%] top-[16%] w-[20%] h-[60%] cursor-pointer"
                        onClick={() => navigate("/BlockHLeftSide")}
                    />

                    {/* Область нажатия на правое здание */}
                    <div
                        className="absolute right-[30%] top-[16%] w-[17%] h-[60%] cursor-pointer"
                        onClick={() => navigate("/BlockHRightSide")}
                    />
                </section>

                {/* Заголовок (цвет меняется в зависимости от темы) */}
                <section
                    className={`w-full h-[262px] flex items-center justify-center shadow-md ${darkMode ? "bg-[#3D4037]" : "bg-[#4C6740]"}`}
                >
                    <h1 className="text-white text-[48px] font-normal font-[Cormorant]">Block I</h1>
                </section>

                {/* Блок с картой (фон всегда #FFFFFF) */}
                <section className="relative w-full flex justify-center py-12 px-8 bg-white rounded-lg shadow-lg">
                    {/* Картинка */}
                    <img src={BlockI} alt="Campus Map" className="w-[60%] rounded-lg shadow-md" />

                    {/* Область нажатия на левое здание */}
                    <div
                        className="absolute left-[30%] top-[16%] w-[20%] h-[60%] cursor-pointer"
                        onClick={() => navigate("/BlockILeftSide")}
                    />

                    {/* Область нажатия на правое здание */}
                    <div
                        className="absolute right-[30%] top-[16%] w-[17%] h-[60%] cursor-pointer"
                        onClick={() => navigate("/BlockIRightSide")}
                    />
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
