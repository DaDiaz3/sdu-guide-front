import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Calendar, Clock ,MapPin } from "lucide-react";

export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {


        axios.get("http://localhost:8000/getAll-events", { params: {
            filter: 3,
          }
          ,withCredentials: true })
            .then(response => {
                setEvents(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching events:", error);
            });
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-[Cormorant] bg-[#F8F8F8] text-black">
            <Navbar/>
            
            <main className="flex-grow">
                {/* Заголовок */}
                <section className="bg-[#4C6740] w-full h-[262px] flex items-center justify-center shadow-md">
                    <h1 className="text-white text-[48px] font-normal">All Events</h1>
                </section>
                
                {/* Блок событий */}
                <section className="max-w-[88rem] mx-auto mt-10">
                <h2 className="text-2xl font-semibold text-center text-[48px] mb-6">Upcoming Events</h2>
                    
                    <p className="text-center text-gray-600 mb-6 text-[25px]">Don't miss the mo st interesting events at our university!</p>
                    
                    <div className="space-y-6">
                        {events.map(event => (
                          <div key={event.id} className="p-4 rounded-lg flex gap-[30px]">
                          {/* Левая колонка с изображением */}
                          <div className="w-[440px] h-80 bg-gray-300 flex items-center justify-center rounded-[30px] overflow-hidden">
                              <img 
                                  src={`http://localhost:8000/image/${event.hash}`} 
                                  className="w-full h-full object-cover"
                              />
                          </div>
                      
                          {/* Правая колонка с информацией */}
                          <div className="flex-1 w-[880px] p-[3.5rem] rounded-[30px] shadow-lg ">
                          <div className="inline-flex items-center gap-4 text-gray-500 px-4 py-2 rounded-[10px] border border-gray-700 w-fit m-[5px]">
                                <div className="flex items-center gap-2">
                                    <Calendar size={20} className="text-gray-500" />
                                    <span>
                                        {new Date(event.date).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </span>
                                </div>
                                <span className="text-gray-400">|</span>
                                <div className="flex items-center gap-2">
                                    <Clock size={20} className="text-gray-500" />
                                    <span>
                                        {new Date(`1970-01-01T${event.startTime}`).toLocaleTimeString("en-US", {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            hour12: true,
                                        })} 
                                        
                                        -  

                                        {new Date(`1970-01-01T${event.endTime}`).toLocaleTimeString("en-US", {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            hour12: true,
                                        })}
                                    </span>
                                </div>
                            </div>

                              <h3 className="text-[1.8rem] leading-[2.8rem] font-semibold mt-2">{event.name}</h3>
                              <p className="text-gray-500 flex items-center gap-1 mt-2 text-[1.4rem]">
                                    <MapPin size={24} className="text-gray-500" /> {event.place}
                            </p>
                          </div>
                      </div>
                      

                        ))}
                    </div>
                </section>
            </main>
            
            <Footer/>
        </div>
    );
}
