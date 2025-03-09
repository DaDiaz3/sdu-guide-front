import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BlockELeft from "../Components/assets/blockspng/BlockEimages/BlockELeft.png";

export default function HowToPage() {
    return (
        <div className="min-h-screen font-[Cormorant] bg-[#F8F8F8] text-black">
            {/* Навбар */}
            <Navbar/>

            {/* Основной контент */}
            <main>
                {/* Заголовок */}
                <section className="bg-[#4C6740] w-full h-[262px] flex items-center justify-center shadow-md">
                    <h1 className="text-white text-[48px] font-normal font-[Cormorant]">Block E</h1>
                </section>

                <section className="w-full flex justify-center py-12 px-8 bg-white rounded-lg shadow-lg relative">
                    {/* Картинка */}
                    <img src={BlockELeft} alt="Campus Map" className="w-[80%] max-w-[1200px] rounded-lg shadow-md"/>

                    {/* Невидимые кликабельные области (hotspots) */}
                    {["37%", "49%", "61.6%"].map((top, rowIndex) => (
                        ["34%", "43.2%", "52.5%", "61.4%", "69.6%"].map((left, colIndex) => (
                            <button
                                key={`${rowIndex}-${colIndex}`}
                                className="absolute w-[30px] h-[40px] bg-transparent"
                                style={{ top, left }}
                                onClick={() => alert(`Вы нажали на дверь ${rowIndex + 1}-${colIndex + 1}`)}
                            />
                        ))
                    ))}
                </section>
            </main>

            {/* Футер */}
            <Footer/>
        </div>
    );
}