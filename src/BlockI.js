import React from "react";
import Navbar from "./Navbar"; // Навбар
import Footer from "./Footer"; // Футер
import BlockI from "./Components/assets/blockspng/BlockI.png"; // Карта кампуса

export default function HowToPage() {
    return (
        <div className="min-h-screen font-[Cormorant] bg-[#F8F8F8] text-black">
            {/* Навбар */}
            <Navbar/>

            {/* Основной контент */}
            <main>
                {/* Заголовок */}
                <section className="bg-[#4C6740] w-full h-[262px] flex items-center justify-center shadow-md">
                    <h1 className="text-white text-[48px] font-normal font-[Cormorant]">Block I</h1>
                </section>

                {/* Блок с картой */}
                <section className="w-full flex justify-center py-12 px-8 bg-white rounded-lg shadow-lg">
                    {/* Картинка */}
                    <img src={BlockI} alt="Campus Map" className="w-[60%] rounded-lg shadow-md"/>
                </section>
            </main>

            {/* Футер */}
            <Footer/>
        </div>
    );
}
