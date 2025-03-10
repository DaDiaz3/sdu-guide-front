import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useTranslation } from "./LanguageContext"; // Подключаем контекст перевода
import { useTheme } from "./ThemeContext"; // Подключаем контекст темы

export default function Events() {
    const [events, setEvents] = useState([]);
    const [calendar, setCalendar] = useState([]);
    const currentMonth = new Date().toLocaleString("en-US", { month: "long" });
    const { translations } = useTranslation(); // Переводы
    const { darkMode } = useTheme(); // Тема

    useEffect(() => {
        axios.get("http://localhost:8000/getAll-events", { params: { filter: 3, withEnded: false }, withCredentials: true })
            .then(response => {
                setEvents(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching events:", error);
            });
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8000/getAll-events-currentMonth", { withCredentials: true })
            .then(response => {
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
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const lastDay = new Date(year, month, daysInMonth).getDay();

        let days = [];

        for (let i = 0; i < ((firstDay + 6) % 7); i++) {
            days.push(null);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const event = events.find(e => new Date(e.date).getDate() === day);
            days.push({ day, event });
        }

        for (let i = (lastDay % 7); i < 6; i++) {
            days.push(null);
        }

        setCalendar(days);
    };

    return (
        <div className={`min-h-screen flex flex-col font-[Cormorant] ${darkMode ? "bg-[#2F2D2D] text-white" : "bg-[#FFFFFF] text-black"}`}>
            <Navbar />
            <main className="flex-grow">

                {/* Заголовок "All Events" */}
                <section
                    className="w-full h-[262px] flex items-center justify-center shadow-md"
                    style={{ backgroundColor: darkMode ? "#3D4037" : "#4C6740" }}
                >
                    <h1 className="text-white text-[48px] font-normal">
                        {translations["all-events"] || "All Events"}
                    </h1>
                </section>

                {/* Upcoming Events */}
                <section className="max-w-[88rem] mx-auto mt-40">
                    <h2 className="text-2xl text-center text-[48px] mb-6">
                        {translations["upcoming-events"] || "Upcoming Events"}
                    </h2>
                    <p
                        className="text-center mb-16 text-[25px]"
                        style={{color: darkMode ? "#FFFFFF" : "#000000CC"}}
                    >
                        {translations["events-description"] || "Don't miss the most interesting events at our university!"}
                    </p>

                    <div className="space-y-6">
                        {events.map(event => (
                            <div key={event.id} className="p-4 rounded-lg flex gap-[30px]">
                                <div
                                    className="w-[440px] h-80 bg-gray-300 flex items-center justify-center rounded-[30px] overflow-hidden">
                                    <img src={`http://localhost:8000/image/${event.hash}`}
                                         className="w-full h-full object-cover" alt={event.name}/>
                                </div>
                                <div className={`flex-1 w-[880px] p-[3.5rem] rounded-[30px] shadow-lg 
                                    ${darkMode ? "bg-[#3D4037] text-white" : "bg-[#FFFFFF] text-black"}`}>
                                    <div
                                        className="inline-flex items-center gap-4 text-gray-500 px-4 py-2 rounded-[50px] border border-gray-700 w-fit m-[5px]">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={20} className="text-gray-500"/>
                                            <span>
                                                {new Date(event.date).toLocaleDateString("en-GB", {
                                                    day: "2-digit", month: "long", year: "numeric"
                                                })}
                                            </span>
                                        </div>
                                        <span className="text-gray-400">|</span>
                                        <div className="flex items-center gap-2">
                                            <Clock size={20} className="text-gray-500"/>
                                            <span>
                                                {new Date(`1970-01-01T${event.startTime}`).toLocaleTimeString("en-US", {
                                                    hour: "2-digit", minute: "2-digit", hour12: true
                                                })}{" "}
                                                -{" "}
                                                {new Date(`1970-01-01T${event.endTime}`).toLocaleTimeString("en-US", {
                                                    hour: "2-digit", minute: "2-digit", hour12: true
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="text-[1.8rem] leading-[2.8rem] mt-2">{event.name}</h3>
                                    <p className="text-gray-500 flex items-center gap-1 mt-2 text-[1.4rem]">
                                        <MapPin size={28} className="text-gray-500"/> {event.place}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Calendar Section */}
                <section className="max-w-[88rem] mx-auto mt-[200px] mb-[100px]">
                    <h2 className="text-2xl text-center text-[48px] mb-20">
                    {translations["event-program"] || "The program of events for"} {currentMonth}
                    </h2>

                    <div className={`border-2 border-gray-500 rounded-[40px] overflow-hidden 
                        ${darkMode ? "bg-[#2F2D2D]" : "bg-[#FFFFFF]"}`}>
                        <div className="grid grid-cols-7 gap-4 text-center text-lg leading-[4.75rem] bg-[#4c674014] text-[30px]">
                            <div>{translations["monday"] || "Monday"}</div>
                            <div>{translations["tuesday"] || "Tuesday"}</div>
                            <div>{translations["wednesday"] || "Wednesday"}</div>
                            <div>{translations["thursday"] || "Thursday"}</div>
                            <div>{translations["friday"] || "Friday"}</div>
                            <div>{translations["saturday"] || "Saturday"}</div>
                            <div>{translations["sunday"] || "Sunday"}</div>
                        </div>

                        <div className="grid grid-cols-7">
                            {calendar.map((cell, index) => (
                                <div key={index} className={`relative border p-4 h-32 flex flex-col border-black opacity-80 
                                    ${cell ? "bg-[#4C674066]" : "bg-transparent"}`}>
                                    {cell && (
                                        <>
                                            <span className="absolute top-2 left-2 font-bold text-lg">{cell.day}</span>
                                            {cell.event && (
                                                <span className="text-sm text-black-200 text-center mt-6">
                                                    {cell.event.shortName ? cell.event.shortName : cell.event.name}
                                                </span>
                                            )}
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
