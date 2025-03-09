import React from "react";
import Navbar from "../Navbar"; // Навбар
import Footer from "../Footer"; // Футер
import BlockFRight from "../Components/assets/blockspng/BlockFimages/BlockFRight.png"; //

export default function HowToPage() {
    return (
        <div className="min-h-screen font-[Cormorant] bg-[#F8F8F8] text-black">
            {/* Навбар */}
            <Navbar/>

            {/* Основной контент */}
            <main>
                {/* Заголовок */}
                <section className="bg-[#4C6740] w-full h-[262px] flex items-center justify-center shadow-md">
                    <h1 className="text-white text-[48px] font-normal font-[Cormorant]">Block F</h1>
                </section>

                {/* Блок с картой */}
                <section className="w-full flex justify-center py-12 px-8 bg-white rounded-lg shadow-lg">
                    {/* Картинка */}
                    <img src={BlockFRight} alt="Campus Map" className="w-[80%] max-w-[1200px] rounded-lg shadow-md"/>
                </section>
            </main>

            {/* Футер */}
            <Footer/>
        </div>
    );
}
