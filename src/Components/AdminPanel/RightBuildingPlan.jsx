import { useState } from "react";
import Modal from "./Modal";


export default function RightBuildingPlan ({ svgPath, roomPrefix }) {
    const [selectedRoom, setSelectedRoom] = useState(null);
  
    const handleClick = (roomNumber) => {
      const room = `${roomPrefix}-${roomNumber}`;
      console.log(`Вы нажали на кабинет: ${room}`);
      setSelectedRoom(room);
    };
  
    const rooms = [
        // tHIRD floor
      { x: 145, y: 140, number: 301 },
      { x: 345, y: 140, number: 302 },
      { x: 545, y: 140, number: 303 },
      { x: 740, y: 140, number: 304 },
      { x: 915, y: 140, number: 305 },
        // Second floor
      { x: 145, y: 235, number: 201 },
      { x: 345, y: 235, number: 202 },
      { x: 545, y: 235, number: 203 },
      { x: 740, y: 235, number: 204 },
      { x: 915, y: 235, number: 205 },
      // first floor
      { x: 145, y: 335, number: 101 },
      { x: 345, y: 335, number: 102 },
      { x: 545, y: 335, number: 103 },
      { x: 740, y: 335, number: 104 },
      { x: 915, y: 335, number: 105 }
    ];
  
    return (
      <>
        <svg viewBox="0 0 1000 500" width="100%" height="100%">
          <image href={svgPath} width="100%" height="100%" />
          {rooms.map(({ x, y, number }) => (
            <rect
              key={number}
              x={x}
              y={y}
              width="20"
              height="40"
              fill="transparent"
              onClick={() => handleClick(number)}
            />
          ))}
        </svg>
        {selectedRoom && <Modal room={selectedRoom} onClose={() => setSelectedRoom(null)} />}
      </>
    );
  }
  