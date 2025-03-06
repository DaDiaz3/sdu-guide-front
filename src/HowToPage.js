import React from "react";
import Navbar from "./Navbar"; // Навбар
import Footer from "./Footer"; // Футер
import campusMap from "./Components/assets/campus3.png"; // Карта кампуса
import { ExternalLink, Clock } from "lucide-react"; // Иконки

export default function HowToPage() {
    return (
        <div className="min-h-screen font-[Cormorant] bg-[#F8F8F8] text-black">
            {/* Навбар */}
            <Navbar/>

            {/* Основной контент */}
            <main>
                {/* Заголовок */}
                <section className="bg-[#4C6740] w-full h-[262px] flex items-center justify-center shadow-md">
                    <h1 className="text-white text-[48px] font-normal font-[Cormorant]">How This Portal Helps</h1>
                </section>

                {/* Блок с картой */}
                <section className="w-[1440px] mx-auto py-12 px-8 flex items-center bg-white rounded-lg shadow-lg">
                    {/* Картинка */}
                    <img src={campusMap} alt="Campus Map" className="w-[45%] rounded-lg shadow-md"/>

                    {/* Текстовый блок */}
                    <div className="ml-12 w-[50%]">
                        <h2 className="text-black text-[48px] font-bold font-[Playfair Display]">
                            Navigate the campus <br/> easily and quickly!
                        </h2>
                        <p className="text-black text-[20px] font-normal font-[Playfair Display]">
                            The interactive map will help you quickly find classrooms,
                            libraries, cafes and other important areas of the university.
                        </p>

                        {/* Кнопка-ссылка */}
                        <a href="#"
                           className="text-[20px] inline-flex items-center text-[#000000] font-bold text-lg hover:underline">
                            <ExternalLink size={30} className="mr-2"/> [View map]
                        </a>
                    </div>
                </section>
            </main>

            <section className="bg-[#878F71] w-full h-[601px] flex flex-col justify-center py-12">
                <div className="w-[1440px] mx-auto flex items-center relative">
                    {/* Левая часть */}
                    <div className="w-1/2 px-12 flex justify-center">
                        <h2 className="text-[48px] text-white font-normal font-[Playfair Display] translate-y-[-60px]">
                            Why our portal?
                        </h2>
                    </div>

                    {/* Вертикальная белая линия */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-[601px] w-[2px] bg-white"></div>

                    {/* Правая часть */}
                    <div className="w-1/2 px-12 flex justify-center">
                        <p className="text-[32px] text-white font-normal font-[Playfair Display] translate-y-[80px] leading-relaxed text-center">
                            Our portal is a convenient and versatile tool that will help you
                            easily navigate the university and save time.
                        </p>
                    </div>
                </div>
            </section>


            {/* Блок Advantages */}
            <section className="max-w-[1440px] mx-auto py-16 px-6 text-center">
                <h2 className="text-[64px] font-[Cormorant Garamond] font-bold mb-12">Advantages</h2>

                {/* Карточки */}
                <div className="grid grid-cols-3 gap-x-12 gap-y-16 place-items-center relative">
                    {/* Первая строка */}
                    <AdvantageCard title="Easy navigation"
                                   text="Find any office, recreation area, or establishment in seconds."/>
                    <AdvantageCard title="Current information"
                                   text="Always accurate information about classes, teachers, and schedules."/>
                    <AdvantageCard title="Availability"
                                   text="It is open to students, teachers and staff of the university."/>

                    {/* Вторая строка (две карточки между верхними) */}
                    <div className="col-span-3 flex justify-center gap-12 mt-[80px] relative">
                        <AdvantageCard title="Smart Filters"
                                       text="Quick search for classrooms, labs, cafes, and other places."
                                       className="relative left-[-50px]"/>
                        <AdvantageCard title="Interactive map"
                                       text="Routes, floors, convenient visualization of the campus."
                                       className="relative right-[-50px]"/>
                    </div>
                </div>
            </section>

            {/* Футер */}
            <Footer/>

        </div>
    );
}

// Компонент карточек
function AdvantageCard({ title, text, className }) {
    return (
        <div className={`bg-white p-6 w-[351px] h-[350px] rounded-[30px] 
                        shadow-[0px_20px_50px_rgba(0,0,0,0.2)] 
                        relative pt-[60px] border border-gray-300 ${className}`}>
            {/* Круглый элемент сверху */}
            <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2
                           w-[90px] h-[90px] bg-[#435873] rounded-full flex items-center justify-center
                           shadow-[0px_-5px_15px_rgba(0,0,0,0.3)]">
                <Clock size={40} className="text-white"/>
            </div>

            {/* Название */}
            <h3 className="text-[26px] font-[Playfair Display] font-bold mt-4">{title}</h3>

            {/* Горизонтальная линия */}
            <div className="w-[80px] h-[2px] bg-[#435873] mx-auto my-4"></div>

            {/* Описание */}
            <p className="text-[18px] font-[Cormorant Garamond] text-gray-600">{text}</p>
        </div>
    );
}




