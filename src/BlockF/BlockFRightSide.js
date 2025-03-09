import React from "react";
import Navbar from "../Navbar"; // Навбар
import Footer from "../Footer"; // Футер
import BlockFRight from "../Components/assets/blockspng/BlockFimages/BlockFRight.png"; //

export default function HowToPage() {
    // Массив с координатами кнопок
    const hotspots = [
        { top: "35%", left: "33.3%" }, { top: "35%", left: "35.3%" }, { top: "35%", left: "42.9%" },
        { top: "35%", left: "44.9%" }, { top: "35%", left: "53.7%" }, { top: "35%", left: "55.6%" },
        { top: "35%", left: "66.3%" }, // 1-й ряд (7 кнопок)

        { top: "44.5%", left: "33.3%" }, { top: "44.5%", left: "35.3%" }, { top: "44.5%", left: "41.4%" },
        { top: "44.5%", left: "43.4%" }, { top: "44.5%", left: "49.8%" }, { top: "44.5%", left: "51.8%" },
        { top: "44.5%", left: "64.1%" }, // 2-й ряд (7 кнопок)

        { top: "54%", left: "35.5%" }, { top: "54%", left: "46%" }, { top: "54%", left: "57%" },
        { top: "54%", left: "64.5%" }, { top: "54%", left: "69.5%" }, // 3-й ряд (5 кнопок)

        { top: "63.5%", left: "41.5%" }, { top: "63.5%", left: "52%" }, { top: "63.5%", left: "65.7%" }, // 4-й ряд (3 кнопки)
    ];

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
                <section className="w-full flex justify-center py-12 px-8 bg-white rounded-lg shadow-lg relative">
                    {/* Картинка */}
                    <img src={BlockFRight} alt="Campus Map" className="w-[80%] max-w-[1200px] rounded-lg shadow-md"/>

                    {/* Кликабельные области (hotspots) */}
                    {hotspots.map(({ top, left }, index) => (
                        <button
                            key={index}
                            className="absolute w-[30px] h-[40px] bg-transparent"
                            style={{ top, left }}
                            onClick={() => alert(`Вы нажали на дверь ${index + 1}`)}
                        />
                    ))}
                </section>
            </main>

            {/* Футер */}
            <Footer/>
        </div>
    );
}