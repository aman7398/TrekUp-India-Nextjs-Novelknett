"use client";

import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const treks = [
    {
        id: 1,
        title: "Har Ki Dun Trek",
        location: "Uttarakhand",
        duration: "7 Days",
        image: "/assets/topimages/topImg.jpg",
        tag: "Price Dropped!",
    },
    { id: 2, title: "Har Ki Dun Trek", location: "Uttarakhand", duration: "7 Days", image: "/assets/topimages/topImg.jpg", tag: "Price Dropped!" },
    { id: 3, title: "Har Ki Dun Trek", location: "Uttarakhand", duration: "7 Days", image: "/assets/topimages/topImg.jpg", tag: "Price Dropped!" },
    { id: 4, title: "Har Ki Dun Trek", location: "Uttarakhand", duration: "7 Days", image: "/assets/topimages/topImg.jpg", tag: "Price Dropped!" },
];

export default function TrekCarousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((p) => (p === treks.length - 1 ? 0 : p + 1));
    const prevSlide = () => setCurrent((p) => (p === 0 ? treks.length - 1 : p - 1));

    return (
        <div className="relative w-full py-12 bg-[#fff7f5] flex flex-col items-center overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0c0c48] mb-6">
                Best Ongoing & Upcoming Treks For 2025
            </h2>

            <div className="relative w-full max-w-6xl">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {treks.map((trek) => (
                        <div
                            key={trek.id}
                            className="w-full flex-shrink-0 px-3 md:w-1/3 lg:w-1/4 flex justify-center"
                        >
                            {/* Card: removed hover shadow, added bottom+right offset shadow */}
                            <div
                                className="bg-white rounded-2xl overflow-hidden"
                                // Tailwind arbitrary shadow: offset right & bottom
                                style={{ boxShadow: "6px 6px 0 rgba(0,0,0,0.06)" }}
                            >
                                <div className="relative">
                                    <Image
                                        src={trek.image}
                                        alt={trek.title}
                                        width={400}
                                        height={300}
                                        className="object-cover w-full h-56"
                                    />
                                    <span
                                        className="absolute top-3 right-3 text-white text-xs font-semibold px-3 py-2 rounded-full"
                                        style={{
                                            background: "linear-gradient(180deg, #FFAA81, #FF6900)",
                                            border: "1px solid #FFD4BF",
                                            boxShadow:
                                                "inset 0px 1px 2px #DFEEFF4D, inset 0px -1px 1px #FFFFFF59",
                                        }}
                                    >
                                        {trek.tag}
                                    </span>

                                </div>

                                <div className="px-5 py-4">
                                    <div className="flex justify-between text-sm text-[#05073C] mb-1 px-4">
                                        <span>{trek.location}</span>
                                        <span>{trek.duration}</span>
                                    </div>

                                    <h3 className="font-semibold text-[23px] text-center text-[#05073C] mb-3">{trek.title}</h3>

                                    <div className="flex justify-between px-6">
                                        {/* Buttons: bottom-only shadow using inline style (matches orange bottom shadow) */}
                                        <button
                                            className="rounded-full px-4 py-1 text-sm font-medium border border-[#ff7043] text-[#ff7043] transition bg-white"
                                            style={{
                                                boxShadow: "3px 4px 0 rgba(255,112,67,0.25)",
                                            }}
                                        >
                                            Dates
                                        </button>

                                        <button
                                            className="rounded-full px-4 py-1 text-sm font-medium border border-[#ff7043] text-[#ff7043] transition bg-white"
                                            style={{
                                                boxShadow: "3px 4px 0 rgba(255,112,67,0.25)",
                                            }}
                                        >
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#ffd6c8] hover:bg-[#ffd6c8] text-[#0c0c48] p-3 rounded-full shadow transition"
                    aria-label="previous"
                >
                    {/* <ChevronLeft size={20} /> */}
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#ffd6c8] hover:bg-[#ffd6c8] text-[#0c0c48] p-3 rounded-full shadow transition"
                    aria-label="next"
                >
                    {/* <ChevronRight size={20} /> */}
                </button>

                {/* Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                    {treks.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-2 h-2 rounded-full cursor-pointer transition ${index === current ? "bg-[#0c0c48]" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
