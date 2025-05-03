import React from "react";
import MapLabel from "./MapLabel";
import { useZone } from "./ZoneContext";

const zonesData = [
    { id: "Zone A", type: "rect", x: 352, y: 195, width: 160, height: 105, labelX: 352, labelY: 140 },
    { id: "Eat Zone", type: "rect", x: 950, y: 500, width: 160, height: 150, labelX: 950, labelY: 440 },
    { id: "Red Cantin", type: "rect", x: 870, y: 500, width: 70, height: 90, labelX: 870, labelY: 450 },
    { id: "Bochka A", type: "circle", cx: 610, cy: 560, r: 35, labelX: 550, labelY: 490 },
    { id: "Bochka B", type: "circle", cx: 670, cy: 525, r: 28, labelX: 610, labelY: 465 },
    { id: "Bochka C", type: "circle", cx: 745, cy: 560, r: 35, labelX: 685, labelY: 495 },
    { id: "Bochka D", type: "circle", cx: 840, cy: 530, r: 28, labelX: 780, labelY: 470 },
    { id: "Zone H", type: "rect", x: 330, y: 370, width: 80, height: 100, labelX: 330, labelY: 310 },
    { id: "WIFI Zone", type: "circle", cx: 455, cy: 520, r: 28, labelX: 395, labelY: 460 },
    { id: "Hall", type: "rotated", x: 1180, y: 530, width: 65, height: 90, rotate: 45, labelX: 1180, labelY: 470 },
    { id: "Lab", type: "rect", x: 1285, y: 510, width: 58, height: 55, labelX: 1285, labelY: 450 },
    { id: "Game Zone", type: "rotated", x: 1360, y: 650, width: 65, height: 40, rotate: 135, labelX: 1100, labelY: 500 },
];

export default function InteractiveMapOverlay() {
    const { activeZone } = useZone();

    return (
        <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 1643 824"
            xmlns="http://www.w3.org/2000/svg"
        >
            {zonesData.map((zone) => {
                const isActive = zone.id === activeZone;

                const shapeProps = {
                    fill: "transparent",
                    className: "pointer-events-auto cursor-pointer",
                };

                return (
                    <g key={zone.id}>
                        {zone.type === "rect" && (
                            <rect
                                {...shapeProps}
                                x={zone.x}
                                y={zone.y}
                                width={zone.width}
                                height={zone.height}
                            />
                        )}
                        {zone.type === "circle" && (
                            <circle
                                {...shapeProps}
                                cx={zone.cx}
                                cy={zone.cy}
                                r={zone.r}
                            />
                        )}
                        {zone.type === "rotated" && (
                            <rect
                                {...shapeProps}
                                x={zone.x}
                                y={zone.y}
                                width={zone.width}
                                height={zone.height}
                                transform={`rotate(${zone.rotate}, ${zone.x + zone.width / 2}, ${zone.y + zone.height / 2})`}
                            />
                        )}

                        {isActive && (
                            <MapLabel x={zone.labelX} y={zone.labelY} width={zone.width || 120} text={zone.id} />
                        )}
                    </g>
                );
            })}
        </svg>
    );
}
