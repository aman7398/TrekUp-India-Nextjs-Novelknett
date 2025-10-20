"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const expeditions = [
    {
        id: 1,
        title: "Friendship Peak Expedition",
        location: "Uttarakhand",
        duration: "7 Days",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
        tag: "Price Dropped!",
    },
    {
        id: 2,
        title: "Black Peak Expedition",
        location: "Uttarakhand",
        duration: "7 Days",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
        tag: "Price Dropped!",
    },
    {
        id: 3,
        title: "Kedarkantha Expedition",
        location: "Uttarakhand",
        duration: "6 Days",
        img: "https://images.unsplash.com/photo-1558981403-c5f9891ed576?auto=format&fit=crop&w=1000&q=80",
        tag: "Limited Seats!",
    },
];

export default function ExpeditionSlider() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === expeditions.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? expeditions.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full flex items-center justify-center mt-10">
            {/* Left Button */}
            <button
                onClick={prevSlide}
                className="absolute left-2 z-10 bg-[#FFD9C0] hover:bg-[#ffb68a] text-black p-2 rounded-full shadow-md"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slider Container */}
            <div className="overflow-hidden w-[90%] md:w-[85%]">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                    }}
                >
                    {expeditions.map((item) => (
                        <div
                            key={item.id}
                            className="w-full md:w-1/2 flex-shrink-0 px-2"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                                <div className="relative">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-72 object-cover rounded-t-2xl"
                                    />
                                    <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {item.tag}
                                    </span>
                                </div>

                                <div className="p-5 flex flex-col items-center justify-center">
                                    <div className="w-full flex justify-between text-sm text-gray-700 mb-1">
                                        <span>{item.location}</span>
                                        <span className="font-medium">{item.duration}</span>
                                    </div>
                                    <h2 className="text-lg md:text-xl font-semibold text-[#0A1B4D] mb-3 text-center">
                                        {item.title}
                                    </h2>
                                    <div className="flex gap-4">
                                        <button className="border border-orange-500 text-[#0A1B4D] px-4 py-1.5 rounded-full text-sm hover:bg-orange-500 hover:text-white transition">
                                            Dates
                                        </button>
                                        <button className="border border-orange-500 text-[#0A1B4D] px-4 py-1.5 rounded-full text-sm hover:bg-orange-500 hover:text-white transition">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Button */}
            <button
                onClick={nextSlide}
                className="absolute right-2 z-10 bg-[#FFD9C0] hover:bg-[#ffb68a] text-black p-2 rounded-full shadow-md"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
}
