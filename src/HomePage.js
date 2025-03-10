import React from "react";
import { Search } from "lucide-react";
import { Input } from "./Components/Input";
import { Card, CardContent } from "./Components/Card";
import { useTranslation } from "./LanguageContext"; // Импортируем хук для перевода

// Подключаем изображения
import heroImage from "./Components/assets/campus2.png";
import campusMap from "./Components/assets/campusmap.png";

// Импортируем Navbar и Footer
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function HomePage() {
    const { translations } = useTranslation(); // Получаем переводы

    return (
        <div className="min-h-screen font-[Cormorant] bg-gray-100 text-black">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[500px]">
                <img src={heroImage} alt="Campus" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                    <h2 className="text-[64px]">{translations.maps_and_directions || "Maps and Directions"}</h2>
                    <p className="mt-2 text-[20px] text-center max-w-[600px]">
                        {translations.find_locations || "Find classrooms, classrooms, libraries, and other important locations on campus.\n" +
                            "                        Use the interactive map for easy navigation."}
                    </p>
                    {/* Поле поиска с кнопкой */}
                    <div className="relative mt-4 flex items-center space-x-2">
                        <Input
                            placeholder={translations.search || "Search..."}
                            className="px-4 py-2 w-[350px] text-black border border-gray-300 rounded-full focus:outline-none font-[Gilroy-Regular]"
                        />
                        <button className="p-3 bg-[#435873] hover:bg-opacity-90 rounded-full">
                            <Search className="text-white" size={20}/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="container mx-auto py-10 px-6">
                <Card className="mt-4">
                    <CardContent>
                        <img src={campusMap} alt="Campus Map" className="w-full"/>
                    </CardContent>
                </Card>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
