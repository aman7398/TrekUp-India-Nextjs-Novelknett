'use client';
import Image from 'next/image';
import { useState } from "react";

// Sample video sections with placeholder thumbnails
const videoSections = [
    {
        label: "Trek Videos",
        videos: [
            { id: 1, thumbnail: "/videos/trek1.jpg", link: "#" },
            { id: 2, thumbnail: "/videos/trek2.jpg", link: "#" },
            { id: 3, thumbnail: "/videos/trek3.jpg", link: "#" },
            { id: 4, thumbnail: "/videos/trek4.jpg", link: "#" },
        ],
    },
    {
        label: "Tips and Tricks",
        videos: [
            { id: 1, thumbnail: "/videos/tip1.jpg", link: "#" },
            { id: 2, thumbnail: "/videos/tip2.jpg", link: "#" },
            { id: 3, thumbnail: "/videos/tip3.jpg", link: "#" },
            { id: 4, thumbnail: "/videos/tip4.jpg", link: "#" },
        ],
    },
    {
        label: "Safety Related",
        videos: [
            { id: 1, thumbnail: "/videos/safe1.jpg", link: "#" },
            { id: 2, thumbnail: "/videos/safe2.jpg", link: "#" },
            { id: 3, thumbnail: "/videos/safe3.jpg", link: "#" },
            { id: 4, thumbnail: "/videos/safe4.jpg", link: "#" },
        ],
    },
];

export default function HarKiDunTrekVideos() {
    const [activeTab, setActiveTab] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentVideos = videoSections[activeTab].videos;
    const visibleVideos = currentVideos.slice(currentIndex, currentIndex + 3);

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        if (currentIndex < currentVideos.length - 3)
            setCurrentIndex(currentIndex + 1);
    };

    return (
        <div className="max-w-6xl mx-auto py-6 px-4 md:px-8 font-sans">
            {/* Section header */}
            <div className="flex items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-bold text-indigo-900">
                    <span className="text-orange-500">IV</span>ideos
                </h1>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-6 mb-6">
                {videoSections.map((tab, idx) => (
                    <button
                        key={tab.label}
                        onClick={() => {
                            setActiveTab(idx);
                            setCurrentIndex(0);
                        }}
                        className={`px-5 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-base transition-all
              ${activeTab === idx
                                ? "bg-orange-500 text-white shadow"
                                : "bg-orange-100 text-gray-800 hover:bg-orange-200"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Text description */}
            <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                    Har Ki Dun Trek Videos
                </h2>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Hear from our trekkers as they share their unforgettable experiences,
                    challenges, and breathtaking moments from the Har Ki Dun Trek. Real
                    stories, honest reviews, and memories from the heart of the Himalayas.
                </p>
            </div>

            {/* Video slider container */}
            <div className="relative flex items-center justify-center">
                {/* Left Arrow */}
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`absolute left-0 z-10 bg-orange-100 text-gray-700 p-3 rounded-full shadow hover:bg-orange-300 transition duration-300 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                >
                    {/* Random Unicode arrow (‹) */}
                    <span className="text-2xl">&#x2039;</span>
                </button>

                {/* Video Thumbnails */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-10 w-full">
                    {visibleVideos.map((video) => (
                        <div
                            key={video.id}
                            className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
                        >
                            <img
                                src={video.thumbnail}
                                alt={`Har Ki Dun Trek Video ${video.id}`}
                                className="w-full h-56 md:h-64 object-cover"
                                loading="lazy"
                            />
                            <a
                                href={video.link}
                                className="absolute inset-0 flex items-center justify-center text-white text-4xl"
                            >
                                {/* Play button image, manually added */}
                                <Image
                                    src="/images/play.png"
                                    alt="Play Button"
                                    width={60}
                                    height={60}
                                    className="drop-shadow-xl"
                                />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={handleNext}
                    disabled={currentIndex >= currentVideos.length - 3}
                    className={`absolute right-0 z-10 bg-orange-100 text-gray-700 p-3 rounded-full shadow hover:bg-orange-300 transition duration-300 ${currentIndex >= currentVideos.length - 3
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                >
                    {/* Random Unicode arrow (›) */}
                    <span className="text-2xl">&#x203A;</span>
                </button>
            </div>
        </div>
    );
}
