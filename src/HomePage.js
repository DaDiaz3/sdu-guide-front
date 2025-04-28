import React, { useRef, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "./Components/Input";
import { Card, CardContent } from "./Components/Card";
import { useTranslation } from "./LanguageContext";

import heroImage from "./Components/assets/campus2.png";
import campusMap from "./Components/assets/campusmap.png";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function HomePage() {
    const { translations } = useTranslation();

    const [searchValue, setSearchValue] = useState("");
    const [selectedBlock, setSelectedBlock] = useState(null);
    const campusRef = useRef(null);

    const blockCoords = [
        { top: "210px", left: "505px", width: "13px", height: "45px", link: "BlockDLeftSide", block: "D" },
        { top: "210px", left: "520px", width: "13.67px", height: "45px", link: "BlockDRightSide", block: "D" },
        { top: "210px", left: "560px", width: "13px", height: "45px", link: "BlockELeftSide", block: "E" },
        { top: "210px", left: "575px", width: "13.67px", height: "45px", link: "BlockERightSide", block: "E" },
        { top: "210px", left: "620px", width: "13px", height: "45px", link: "BlockFLeftSide", block: "F" },
        { top: "210px", left: "635px", width: "13.67px", height: "45px", link: "BlockFRightSide", block: "F" },
        { top: "210px", left: "675px", width: "13px", height: "45px", link: "BlockGLeftSide", block: "G" },
        { top: "210px", left: "690px", width: "13.67px", height: "45px", link: "BlockGRightSide", block: "G" },
        { top: "210px", left: "735px", width: "13px", height: "45px", link: "BlockHLeftSide", block: "H" },
        { top: "210px", left: "750px", width: "13.67px", height: "45px", link: "BlockHRightSide", block: "H" },
        { top: "210px", left: "790px", width: "16px", height: "45px", link: "BlockILeftSide", block: "I" },
        { top: "210px", left: "807px", width: "16px", height: "45px", link: "BlockIRightSide", block: "I" },
    ];

    const blockColors = {
        D: "#863383",
        E: "#641515",
        F: "#363F78",
        G: "#5E7745",
        H: "#3B70A4",
        I: "#6A3BA4"
    };

    const parseRoomCode = (code) => {
        const clean = code.toUpperCase().replace(/[^A-Z0-9]/g, "");
        const match = clean.match(/^([D-I])(\d{3})$/);
        if (!match) return null;

        const block = match[1];
        const number = parseInt(match[2], 10);

        const isLeft = (number >= 101 && number <= 105) || (number >= 201 && number <= 205) || (number >= 301 && number <= 305);
        const isRight = (number >= 107 && number <= 108) || (number >= 206 && number <= 211) || (number >= 306 && number <= 312) || (number >= 406 && number <= 412);

        const side = isLeft ? "Left" : isRight ? "Right" : null;

        if (!side) return null;

        return {
            block,
            side,
            room: `${block}-${number}`,
            link: `Block${block}${side}Side`
        };
    };

    const handleSearch = () => {
        const result = parseRoomCode(searchValue);
        if (result) {
            setSelectedBlock(result);
            setTimeout(() => {
                campusRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            setSelectedBlock(null);
            alert("Invalid room code");
        }
    };

    return (
        <div className="min-h-screen font-[Cormorant] bg-gray-100 text-black">
            <Navbar />
            <div className="relative h-[500px]">
                <img src={heroImage} alt="Campus" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                    <h2 className="text-[64px]">{translations.maps_and_directions || "Maps and Directions"}</h2>
                    <p className="mt-2 text-[20px] text-center max-w-[600px]">
                        {translations.find_locations || "Find classrooms, libraries, and other locations on campus."}
                    </p>
                    <div className="relative mt-4 flex items-center space-x-2">
                        <Input
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleSearch();
                            }}
                            placeholder={translations.search || "Search..."}
                            className="px-4 py-2 w-[350px] text-black border border-gray-300 rounded-full focus:outline-none font-[Gilroy-Regular]"
                        />
                        <button
                            onClick={handleSearch}
                            className="p-3 bg-[#435873] hover:bg-opacity-90 rounded-full"
                        >
                            <Search className="text-white" size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <div ref={campusRef} className="container mx-auto py-10 px-6">
                <Card className="mt-4">
                    <CardContent>
                        <div className="relative w-full max-w-[1030px] mx-auto">
                            <img src={campusMap} alt="Campus Map" className="w-full" />

                            <div
                                className="absolute"
                                style={{
                                    top: "0",
                                    left: "0",
                                    transform: "rotate(-8deg)",
                                    transformOrigin: "top left",
                                }}
                            >
                                {blockCoords.map((coord, index) => {
                                    const isActive = selectedBlock && selectedBlock.link === coord.link;
                                    const bgColor = isActive ? blockColors[coord.block] : "transparent";

                                    return (
                                        <a
                                            key={index}
                                            href={`/${coord.link}`}
                                            className={`absolute transition-all duration-200 ease-in-out text-white text-sm font-bold flex items-center justify-center hover:scale-110`}
                                            style={{
                                                top: coord.top,
                                                left: coord.left,
                                                width: coord.width,
                                                height: coord.height,
                                                backgroundColor: bgColor,
                                                border: isActive ? "2px solid black" : "none",
                                                zIndex: isActive ? 10 : 1,
                                                textDecoration: "none"
                                            }}
                                        >
                                            {isActive && (
                                                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 text-xs rounded shadow">
                                                    {selectedBlock.room}
                                                </div>
                                            )}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Footer />
        </div>
    );
}
