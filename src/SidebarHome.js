import React from "react";
import { Globe2, Building2, Landmark, Hotel } from "lucide-react";

export default function SidebarHome({ onZoneClick }) {
    const zones = [
        { label: "campus", icon: <Landmark size={24} />, block: "L" },
        { label: "sdu life", icon: <Building2 size={24} />, block: "K" },
        { label: "dorm", icon: <Hotel size={24} />, block: "J" },
    ];

    return (
        <div className="w-[90px] h-[673px] bg-[#4A6641] text-white flex flex-col items-center pt-6 pb-4">
            <Globe2 size={36} />
            <span className="mt-2 text-sm font-light">Explore</span>

            <div className="mt-10 flex flex-col gap-8 items-center">
                {zones.map((zone, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-1 cursor-pointer"
                        onClick={() => onZoneClick(zone.block)}
                    >
                        <div className="w-[50px] h-[50px] rounded-full bg-[#CBD1C5] flex items-center justify-center text-white">
                            {zone.icon}
                        </div>
                        <span className="text-[12px] text-white font-light text-center whitespace-nowrap">
                            {zone.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

