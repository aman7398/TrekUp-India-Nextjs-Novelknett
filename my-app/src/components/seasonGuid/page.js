
"use client"

import { useState } from "react";

const months = [
    {
        title: "March (Spring – Pre-Monsoon)",
        temperature: "Average temperatures range from 5°C to 10°C during the day and -10°C to -5°C at night.",
        landscapes: "Rhododendron forests begin to bloom at lower elevations, creating a picturesque landscape.",
        snow: "Snow lingers on higher trails, adding beauty and challenge.",
        description:
            "March marks the start of the trekking season. Days start getting longer and warmer, and the trails are relatively quiet early in the month. Rhododendron forests begin to bloom at lower elevations, creating a picturesque landscape. However, evenings and nights remain very cold, there’s a higher chance of cloudiness and afternoon fog compared to autumn, and flights to Lukla can sometimes be delayed. This is an excellent month for photographers, and trekkers should layer up for cold nights and book teahouses in advance.",
        image: "/your-image.jpg", // Replace this with your image path
    },
    // Add additional months as needed
];

export default function EverestBaseCampGuide() {
    const [monthIdx, setMonthIdx] = useState(0);

    return (
        <div className="bg-white min-h-screen px-1 sm:px-2 pb-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-2xl sm:text-4xl font-semibold text-center text-blue-900 mt-8 mb-3">
                    Best Time to Trek to Everest Base Camp: A Season by Season Guide
                </h1>
                <div className="border-t-2 border-orange-500 w-14 mx-auto mb-4" />
                <p className="text-gray-700 text-center px-2 mb-3">
                    Choosing the right time for your Everest Base Camp trek is the most important decision you'll make after choosing to go itself...
                    <br />
                    <span className="font-semibold">
                        Our Recommendation:
                    </span>
                    For most first-time trekkers, the post-monsoon autumn season (October–November) offers the ideal balance of stable weather, clear skies, and manageable crowds. However, every season has its unique magic. Our guide below...
                </p>
                <p className="font-bold mb-1 text-gray-900">
                    Here is a month-by-month breakdown of what to expect:
                </p>

                {/* Card Section */}
                <div className="bg-orange-50 rounded-2xl flex flex-col sm:flex-row items-center px-5 py-6 my-4 shadow-lg relative">
                    <button
                        aria-label="Previous"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-orange-200 rounded-full p-2 hover:bg-orange-300 transition"
                        onClick={() => setMonthIdx(monthIdx === 0 ? months.length - 1 : monthIdx - 1)}
                    >
                        {/* Left Arrow SVG */}
                        <svg className="h-6 w-6 text-orange-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Info Block */}
                    <div className="flex-grow w-full sm:w-6/12">
                        <h2 className="text-xl font-bold text-gray-900 mb-3">{months[monthIdx].title}</h2>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                {/* Temperature Emoji */}
                                <span className="text-xl">🌡️</span>
                                <span className="font-bold text-orange-700">Temperature:</span>
                                <span className="text-gray-700">{months[monthIdx].temperature}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xl">🌲</span>
                                <span className="font-bold text-orange-700">Landscapes:</span>
                                <span className="text-gray-700">{months[monthIdx].landscapes}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xl">❄️</span>
                                <span className="font-bold text-orange-700">Snow:</span>
                                <span className="text-gray-700">{months[monthIdx].snow}</span>
                            </div>
                        </div>
                        <p className="mt-3 text-gray-800 text-sm">{months[monthIdx].description}</p>
                    </div>
                    {/* Image Block */}
                    <div className="w-full sm:w-5/12 mt-5 sm:mt-0 flex justify-center">
                        <img
                            src={months[monthIdx].image}
                            alt="Everest trekking"
                            className="rounded-xl object-cover w-[260px] h-[180px] sm:w-[320px] sm:h-[210px] shadow"
                        />
                    </div>

                    <button
                        aria-label="Next"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-200 rounded-full p-2 hover:bg-orange-300 transition"
                        onClick={() => setMonthIdx((monthIdx + 1) % months.length)}
                    >
                        {/* Right Arrow SVG */}
                        <svg className="h-6 w-6 text-orange-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Advice Footer */}
                <div className="bg-white mt-6 rounded-xl p-3 border shadow text-sm text-gray-700">
                    <span className="font-bold">Final Advice from Our Trek Leaders & Guides:</span> Always pack for all conditions, regardless of the season. Layers are your best friend...
                </div>
            </div>
        </div>
    );
}
