"use client"

import { useState } from "react";

// Replace these arrays with your own images per tab
const galleries = [
    {
        label: "Summer (May–June)",
        images: [
            "/images/summer1.jpg",
            "/images/summer2.jpg",
            "/images/summer3.jpg",
            "/images/summer4.jpg",
            "/images/summer5.jpg",
            "/images/summer6.jpg",
            "/images/summer7.jpg",
            "/images/summer8.jpg",
        ]
    },
    {
        label: "Autumn (Sept–Oct)",
        images: [
            "/images/autumn1.jpg",
            "/images/autumn2.jpg",
            "/images/autumn3.jpg",
            "/images/autumn4.jpg",
            "/images/autumn5.jpg",
            "/images/autumn6.jpg",
            "/images/autumn7.jpg",
            "/images/autumn8.jpg",
        ]
    },
    {
        label: "Culture and Architecture",
        images: [
            "/images/culture1.jpg",
            "/images/culture2.jpg",
            "/images/culture3.jpg",
            "/images/culture4.jpg",
            "/images/culture5.jpg",
            "/images/culture6.jpg",
            "/images/culture7.jpg",
            "/images/culture8.jpg",
        ]
    }
];

export default function HarKiDunGallery() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="max-w-6xl mx-auto pt-4 px-2 md:px-8">
            {/* Main heading */}
            <h1 className="text-2xl md:text-4xl font-extrabold text-center text-indigo-900 mb-0">
                Har Ki Dun Trek Gallery
            </h1>

            {/* Orange line below heading */}
            <div className="flex justify-center mt-2 mb-6">
                <div className="w-40 border-t-4 border-orange-400 rounded"></div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-3 md:gap-6 mb-6 flex-wrap">
                {galleries.map((tab, idx) => (
                    <button
                        key={tab.label}
                        className={`font-semibold px-8 py-3 rounded-2xl text-base transition-all
              ${activeTab === idx
                                ? "bg-orange-500 text-white shadow"
                                : "bg-orange-100 text-gray-800 hover:bg-orange-200"}
              `}
                        onClick={() => setActiveTab(idx)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {galleries[activeTab].images.map((src, idx) => (
                    <div key={idx} className="overflow-hidden rounded-lg shadow hover:shadow-xl transition">
                        <img
                            src={src}
                            alt={`Gallery img ${idx + 1}`}
                            className="object-cover w-full h-48 md:h-52 lg:h-56 transition-transform hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
