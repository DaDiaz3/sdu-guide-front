import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function Events() {
    const [events, setEvents] = useState([]);
    const [calendar, setCalendar] = useState([]);
    const currentMonth = new Date().toLocaleString("en-US", { month: "long" });


    useEffect(() => {
        axios.get("http://localhost:8000/getAll-events", { params: { filter: 3 }, withCredentials: true })
            .then(response => {
                setEvents(response.data.data);
                generateCalendar(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching events:", error);
            });
    }, []);

    const generateCalendar = (events) => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const firstDay = new Date(year, month, 1).getDay(); // День недели первого дня месяца
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Количество дней в месяце
        const lastDay = new Date(year, month, daysInMonth).getDay(); // День недели последнего дня месяца
    
        let days = [];
    
        // Добавляем пустые ячейки перед началом месяца
        for (let i = 0; i < ((firstDay + 6) % 7); i++) {
            days.push(null);
        }
    
        // Заполняем календарь днями месяца
        for (let day = 1; day <= daysInMonth; day++) {
            const event = events.find(e => new Date(e.date).getDate() === day);
            days.push({ day, event });
        }
    
        // Добавляем пустые ячейки после окончания месяца
        for (let i = (lastDay % 7); i < 6; i++) {
            days.push(null);
        }
    
        setCalendar(days);
    };
    

    return (
        <div className="min-h-screen flex flex-col font-[Cormorant] bg-[#F8F8F8] text-black">
            <Navbar />
            <main className="flex-grow">
                <section className="bg-[#4C6740] w-full h-[262px] flex items-center justify-center shadow-md">
                    <h1 className="text-white text-[48px] font-normal">All Events</h1>
                </section>

                <section className="max-w-[88rem] mx-auto mt-40">
                    <h2 className="text-2xl text-center text-[48px] mb-6">Upcoming Events</h2>
                    <p className="text-center text-gray-600 mb-16 text-[25px]">
                        Don't miss the most interesting events at our university!
                    </p>
                    <div className="space-y-6">
                        {events.map(event => (
                            <div key={event.id} className="p-4 rounded-lg flex gap-[30px]">
                                <div className="w-[440px] h-80 bg-gray-300 flex items-center justify-center rounded-[30px] overflow-hidden">
                                    <img src={`http://localhost:8000/image/${event.hash}`} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 w-[880px] p-[3.5rem] rounded-[30px] shadow-lg">
                                    <div className="inline-flex items-center gap-4 text-gray-500 px-4 py-2 rounded-[50px] border border-gray-700 w-fit m-[5px]">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={20} className="text-gray-500" />
                                            <span>
                                                {new Date(event.date).toLocaleDateString("en-GB", {
                                                    day: "2-digit", month: "long", year: "numeric"
                                                })}
                                            </span>
                                        </div>
                                        <span className="text-gray-400">|</span>
                                        <div className="flex items-center gap-2">
                                            <Clock size={20} className="text-gray-500" />
                                            <span>
                                                {new Date(`1970-01-01T${event.startTime}`).toLocaleTimeString("en-US", {
                                                    hour: "2-digit", minute: "2-digit", hour12: true
                                                })} -
                                                {new Date(`1970-01-01T${event.endTime}`).toLocaleTimeString("en-US", {
                                                    hour: "2-digit", minute: "2-digit", hour12: true
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="text-[1.8rem] leading-[2.8rem] mt-2">{event.name}</h3>
                                    <p className="text-gray-500 flex items-center gap-1 mt-2 text-[1.4rem]">
                                        <MapPin size={28} className="text-gray-500" /> {event.place}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Календарь */}
                <section className="max-w-[88rem] mx-auto mt-[200px] mb-[100px]">
                <h2 className="text-2xl text-center text-[48px] mb-20">
    The program of events for {currentMonth}
</h2>
    
    <div className="border-2 border-gray-500 rounded-[40px] bg-[#4C674033] overflow-hidden">
        <div className="grid grid-cols-7 gap-4 text-center text-lg leading-[4.75rem] bg-[#4c674014] text-[30px]">
            <div>Monday</div><div>Tuesday</div><div>Wednesday</div><div>Thursday</div>
            <div>Friday</div><div>Saturday</div><div>Sunday</div>
        </div>

        <div className="grid grid-cols-7">
            {calendar.map((cell, index) => {
                const isFirstRow = index < 7; // Первый ряд
                const isLastRow = index >= calendar.length ; // Последний ряд
                const isFirstCol = index % 7 === 0; // Первый столбец
                const isLastCol = index % 7 === 6; // Последний столбец

                return (
                    <div 
                    key={index} 
                    className={`relative border p-4 h-32 flex flex-col border-black opacity-80 
                        ${cell ? "bg-[#4C674066]" : "bg-transparent"} 
                        ${isLastRow && isFirstCol ? "rounded-bl-[40px]" : ""} 
                        ${isLastRow && isLastCol ? "rounded-br-[40px]" : ""}
                    `}
                >
                    {cell && (
                        <>
                            <span className="absolute top-2 left-2 font-bold text-lg">{cell.day}</span>
                            {cell.event && (
                                <span className="text-sm text-black-200 text-center mt-6">
                                    {cell.event.name}
                                </span>
                            )}
                        </>
                    )}
                </div>
                
                );
            })}
        </div>
    </div>
</section>

            </main>
            <Footer />
        </div>
    );
}
