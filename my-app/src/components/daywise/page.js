"use client";

import { useState } from "react";

const daysContent = [
    {
        day: "Day 1",
        title: "Day 2: Trek from Sankri to Juda Ka Talab",
        images: [
            "/assets/details/rightImg.jpg",
            "/assets/details/rightImg1.jpg",
            "/assets/details/rightImg2.jpg",
            "/assets/details/rightImg3.jpg",
        ],
        text: `
Basic Trek Details for the Day: Today covers a trek of approximately 4 km from Sankri (1,950 m) to Juda Ka Talab (2,700 m), taking around 4–5 hours. Meals include breakfast, packed lunch, and dinner at the campsite. Water sources are available at streams, but trekkers should carry at least 2 liters.
Trail Description & Terrain Insights: The trail winds through dense pine and maple forests, gradually ascending to open clearings where shepherd huts appear. The difficulty is moderate, suitable for beginners with some trekking experience.
Natural & Scenic Highlights: Juda Ka Talab is an alpine lake surrounded by meadows. In winter, the lake is partially frozen, while summer reveals blooming wildflowers. The trail offers glimpses of surrounding peaks and gentle river crossings.
Cultural & Local Touchpoints: Local legends describe the lake as formed when Lord Shiva let down his hair here. Shepherd settlements along the trail provide cultural context and a peek into mountain livelihoods.
Safety & Acclimatization Guidance: Some patches can be slippery, especially in snow. Trekkers should pace themselves, stay hydrated, and rest frequently to acclimatize gradually.
People Experience Notes: Trekkers find this day serene and rewarding, with opportunities to pause by the lake for photos, meditation, or simply soaking in the alpine beauty.
Logistics & Camp Info: Campsite is at Juda Ka Talab (2,700 m) in tents. Nights are cold, particularly in winter, so warm sleeping bags are essential.
Practical Tips For Trekkers: Carry woolens and rain covers, pack extra water, and follow leave-no-trace principles to protect the lake and surrounding meadows.
    `,
    },
    {
        day: "Day 2",
        title: "Trek from Sankri to Juda Ka Talab - Placeholder",
        images: [
            "/images/day2a.jpg",
            "/images/day2b.jpg",
            "/images/day2c.jpg",
            "/images/day2d.jpg",
        ],
        text: "This is the content for Day 2.",
    },
    {
        day: "Day 3",
        title: "Day 3 Content Placeholder",
        images: [
            "/images/day3a.jpg",
            "/images/day3b.jpg",
            "/images/day3c.jpg",
            "/images/day3d.jpg",
        ],
        text: "This is the content for Day 3.",
    },
    {
        day: "Day 4",
        title: "Day 4 Content Placeholder",
        images: [
            "/images/day4a.jpg",
            "/images/day4b.jpg",
            "/images/day4c.jpg",
            "/images/day4d.jpg",
        ],
        text: "This is the content for Day 4.",
    },
    {
        day: "Day 5",
        title: "Day 5 Content Placeholder",
        images: [
            "/images/day5a.jpg",
            "/images/day5b.jpg",
            "/images/day5c.jpg",
            "/images/day5d.jpg",
        ],
        text: "This is the content for Day 5.",
    },
    {
        day: "Day 6",
        title: "Day 6 Content Placeholder",
        images: [
            "/images/day6a.jpg",
            "/images/day6b.jpg",
            "/images/day6c.jpg",
            "/images/day6d.jpg",
        ],
        text: "This is the content for Day 6.",
    },
];

export default function TrekItinerary() {
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);

    const handlePrev = () => {
        if (selectedDayIndex > 0) setSelectedDayIndex(selectedDayIndex - 1);
    };

    const handleNext = () => {
        if (selectedDayIndex < daysContent.length - 1)
            setSelectedDayIndex(selectedDayIndex + 1);
    };

    const currentDay = daysContent[selectedDayIndex];

    return (
        <div className="container mx-auto p-4 md:p-8 font-sans">
            <h1 className="text-lg md:text-2xl font-bold text-indigo-900 mb-6">
                Detailed Day Wise Har Ki Dun Itinerary
            </h1>
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left panel buttons */}
                <div className="flex md:flex-col justify-center md:justify-start gap-2 md:gap-4">
                    {daysContent.map(({ day }, index) => (
                        <button
                            key={day}
                            onClick={() => setSelectedDayIndex(index)}
                            className={`rounded-lg px-4 py-2 w-24 md:w-28 text-center font-semibold ${index === selectedDayIndex
                                ? "bg-orange-600 text-white shadow-md"
                                : "bg-orange-200 text-orange-800 hover:bg-orange-400"
                                } transition-colors duration-200`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col gap-4">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                        {currentDay.title}
                    </h2>

                    {/* Images grid */}
                    <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto p-4">
                        {/* Left Column */}
                        <div className="flex flex-col gap-4">
                            {/* Image 1 (half height) */}
                            <div className="flex-1">
                                <img
                                    src={currentDay.images[0]}
                                    alt={`${currentDay.day} main`}
                                    className="w-full h-full object-cover rounded-2xl aspect-[4/3] sm:aspect-[16/9]"
                                />
                            </div>
                            {/* Image 3 (bottom full) */}
                            <div className="flex-1">
                                <img
                                    src={currentDay.images[1]}
                                    alt={`${currentDay.day} top right`}
                                    className="w-full h-full object-cover rounded-2xl aspect-[4/3]"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-4">
                            {/* Image 2 (top full height of col) */}
                            <div className="flex-1">
                                <img
                                    src={currentDay.images[2]}
                                    alt={`${currentDay.day} bottom left`}
                                    className="w-full h-full object-cover rounded-2xl aspect-[3/4] sm:aspect-[9/16]"
                                />
                            </div>
                            {/* Image 4 (below image 2) */}
                            <div className="flex-1">
                                <img
                                    src={currentDay.images[3]}
                                    alt={`${currentDay.day} bottom right`}
                                    className="w-full h-full object-cover rounded-2xl aspect-[4/3]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text content */}
                    <p className="whitespace-pre-line text-gray-700 text-sm md:text-base leading-relaxed">
                        {currentDay.text.trim()}
                    </p>

                    {/* Navigation buttons bottom */}
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={handlePrev}
                            disabled={selectedDayIndex === 0}
                            className={`px-3 py-1 rounded-full shadow-md text-orange-600 border border-orange-600 font-semibold hover:bg-orange-600 hover:text-white transition-colors disabled:opacity-50 disabled:pointer-events-none`}
                        >
                            &lt; Day {selectedDayIndex === 0 ? 1 : selectedDayIndex}
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={selectedDayIndex === daysContent.length - 1}
                            className={`px-3 py-1 rounded-full shadow-md text-orange-600 border border-orange-600 font-semibold hover:bg-orange-600 hover:text-white transition-colors disabled:opacity-50 disabled:pointer-events-none`}
                        >
                            Day {selectedDayIndex === daysContent.length - 1
                                ? daysContent.length
                                : selectedDayIndex + 2}{" "}
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
