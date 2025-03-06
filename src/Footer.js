import React from "react";
import { Instagram, Facebook, Send, Music } from "lucide-react";
import footerLogo from "./Components/assets/footerLOGO.png"; // Логотип в футере

export default function Footer() {
    return (
        <footer className="bg-[#878F71] py-10 text-white flex justify-around items-center">
            {/* Website Links */}
            <div className="text-center">
                <h3 className="text-lg font-bold mb-2">WEBSITE</h3>
                <nav className="flex flex-col space-y-1">
                    <a href="#" className="hover:underline">Portal</a>
                    <a href="#" className="hover:underline">Faculties</a>
                    <a href="#" className="hover:underline">Maps and Directions</a>
                    <a href="#" className="hover:underline">Events</a>
                    <a href="#" className="hover:underline">Others</a>
                </nav>
            </div>

            {/* Логотип и соцсети */}
            <div className="text-center">
                <img src={footerLogo} alt="SDU Guide" className="h-16 mb-4 mx-auto"/>
                <div className="flex space-x-4 justify-center">
                    <a href="#" className="p-3 rounded-full border border-white hover:bg-white hover:text-[#878F71] transition">
                        <Instagram size={24}/>
                    </a>
                    <a href="#" className="p-3 rounded-full border border-white hover:bg-white hover:text-[#878F71] transition">
                        <Facebook size={24}/>
                    </a>
                    <a href="#" className="p-3 rounded-full border border-white hover:bg-white hover:text-[#878F71] transition">
                        <Music size={24}/> {/* TikTok */}
                    </a>
                    <a href="#" className="p-3 rounded-full border border-white hover:bg-white hover:text-[#878F71] transition">
                        <Send size={24}/> {/* Telegram */}
                    </a>
                </div>
                <p className="text-sm mt-4">
                    Алматинская область, район Карасай, 040900, город Каскелен, ул. Абылай хана 1/1
                </p>
            </div>

            {/* Contact */}
            <div className="text-center">
                <h3 className="text-lg font-bold mb-2">CONTACT</h3>
                <p>+7 727 307 95 65</p>
                <p>info@sdu.edu.kz</p>
            </div>
        </footer>
    );
}
