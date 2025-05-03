import React, { useRef, useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "./Components/Input";
import { Card, CardContent } from "./Components/Card";
import { useTranslation } from "./LanguageContext";
import SidebarHome from "./SidebarHome";

import heroImage from "./Components/assets/campus2.png";
import campusMap from "./Components/assets/campusmap.png";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function HomePage() {
    const { translations } = useTranslation();

    const [searchValue, setSearchValue] = useState("");
    const [events, setEvents] = useState([]);
    const [eventBlocks, setEventBlocks] = useState([]);
    const [selectedBlock, setSelectedBlock] = useState(null);
    const [hoveredBlock, setHoveredBlock] = useState(null);
    const [highlightedZone, setHighlightedZone] = useState(null); // 🟨 Добавлено
    const campusRef = useRef(null);

    const blockCoords = [
        { top: "190px", left: "450px", width: "30px", height: "35px", link: "BlockDLeftSide", block: "D" },
        { top: "190px", left: "505px", width: "30px", height: "35px", link: "BlockELeftSide", block: "E" },
        { top: "190px", left: "555px", width: "30px", height: "35px", link: "BlockFLeftSide", block: "F" },
        { top: "190px", left: "605px", width: "30px", height: "35px", link: "BlockGLeftSide", block: "G" },
        { top: "190px", left: "655px", width: "30px", height: "35px", link: "BlockHLeftSide", block: "H" },
        { top: "190px", left: "705px", width: "30px", height: "35px", link: "BlockILeftSide", block: "I" },
        { top: "330px", left: "500px", width: "130px", height: "80px", link: "BlockJLeftSide", block: "J" }, // Dormitory
        { top: "330px", left: "750px", width: "60px", height: "60px", link: "BlockKLeftSide", block: "K" },   // Sdu Life
        { top: "225px", left: "400px", width: "350px", height: "55px", link: "BlockLLeftSide", block: "L" }, // Campus
    ];

    const blockColors = {
        D: "#863383",
        E: "#641515",
        F: "#363F78",
        G: "#5E7745",
        H: "#3B70A4",
        I: "#6A3BA4",
        J: "#B45A00",
        K: "#008B8B",
        L: "#708090"
    };

    const mergedBlocks = {};
    blockCoords.forEach(coord => {
        if (!mergedBlocks[coord.block]) {
            mergedBlocks[coord.block] = {
                block: coord.block,
                top: parseInt(coord.top),
                left: parseInt(coord.left),
                right: parseInt(coord.left) + parseInt(coord.width),
                bottom: parseInt(coord.top) + parseInt(coord.height),
            };
        } else {
            mergedBlocks[coord.block].top = Math.min(mergedBlocks[coord.block].top, parseInt(coord.top));
            mergedBlocks[coord.block].left = Math.min(mergedBlocks[coord.block].left, parseInt(coord.left));
            mergedBlocks[coord.block].right = Math.max(mergedBlocks[coord.block].right, parseInt(coord.left) + parseInt(coord.width));
            mergedBlocks[coord.block].bottom = Math.max(mergedBlocks[coord.block].bottom, parseInt(coord.top) + parseInt(coord.height));
        }
    });

    const mergedBlockCoords = Object.values(mergedBlocks).map(block => ({
        top: block.top + "px",
        left: block.left + "px",
        width: (block.right - block.left) + "px",
        height: (block.bottom - block.top) + "px",
        link: `Block${block.block}`,
        block: block.block
    }));

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

    useEffect(() => {
        fetch("http://localhost:8000/getAll-events?filter=8&withEnded=false&today=true")
            .then((response) => response.json())
            .then((data) => {
                setEvents(data.data);

                const blocks = data.data.map(event => {
                    const match = event.place.match(/Block\s([A-Z])/);
                    return match ? match[1] : null;
                }).filter(Boolean);

                setEventBlocks(blocks);
            })
            .catch((error) => {
                console.error("Error fetching events:", error);
            });
    }, []);

    const handleSearch = () => {
        const result = parseRoomCode(searchValue);
        if (result) {
            setSelectedBlock(result);
            setHighlightedZone(null);
            setTimeout(() => {
                campusRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            setSelectedBlock(null);
            alert("Invalid room code");
        }
    };

    const handleZoneClick = (block) => {
        setSelectedBlock({ block, link: `Block${block}` });
        setHighlightedZone(block);
        campusRef.current?.scrollIntoView({ behavior: "smooth" });
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
                <div className="flex gap-6">
                    <div className="w-[250px]">
                        <SidebarHome onZoneClick={handleZoneClick} />
                    </div>
                    <Card className="flex-1 mt-4">
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
                                    {mergedBlockCoords.map((coord, index) => {
                                        const isActive = selectedBlock && selectedBlock.link === coord.link;
                                        const isEventBlock = eventBlocks.includes(coord.block);
                                        const isCampus = coord.block === "L"; // Кампус
                                        const isDormitoryOrSduLife = coord.block === "J" || coord.block === "K"; // Dormitory и Sdu Life

                                        return (
                                            <a
                                                key={index}
                                                href={isCampus ? "/detailed-map" : `/Block${coord.block}`} // Генерация правильной ссылки для всех блоков
                                                onMouseEnter={() => setHoveredBlock(coord.block)}
                                                onMouseLeave={() => setHoveredBlock(null)}
                                                className={`absolute transition-all duration-200 ease-in-out text-white text-sm font-bold flex items-center justify-center hover:scale-110 ${isDormitoryOrSduLife ? "cursor-default" : ""}`}
                                                style={{
                                                    top: coord.top,
                                                    left: coord.left,
                                                    width: coord.width,
                                                    height: coord.height,
                                                    border: isActive ? "2px solid black" : (isEventBlock ? "2px dashed orange" : "none"),
                                                    zIndex: isActive ? 10 : (isEventBlock ? 5 : 1),
                                                    textDecoration: "none",
                                                }}
                                            >
                                                {hoveredBlock === coord.block && isEventBlock && (
                                                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 text-xs rounded shadow">
                                                        {events.find(event => event.place.includes(`Block ${coord.block}`))?.shortName || "Event"}
                                                    </div>
                                                )}

                                                {isActive && selectedBlock.room && (
                                                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 text-xs rounded shadow">
                                                        {selectedBlock.room}
                                                    </div>
                                                )}

                                                {highlightedZone === coord.block && (
                                                    <div
                                                        className="absolute z-[9999] left-1/2 transform -translate-x-1/2"
                                                        style={{ top: '-60px' }}
                                                    >
                                                        <div className="bg-black text-white px-4 py-2 rounded-2xl text-lg font-[Cormorant] relative shadow-lg">
                                                            {{
                                                                J: "Dormitory",
                                                                K: "Sdu Life",
                                                                L: "Campus"
                                                            }[coord.block]}
                                                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-15px] w-[1px] h-[15px] bg-black"></div>
                                                        </div>
                                                    </div>
                                                )}

                                                {isEventBlock && !isActive && (
                                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                                                )}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Footer />
        </div>
    );
}
