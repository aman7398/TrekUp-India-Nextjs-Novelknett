"use client";
import { useState } from "react";
import ExpeditionSlider from "./searchComponent/expiditions/page.js";
import DifficultyLevelSection from "./searchComponent/expiditionsFooter/page.js";
import BlogArticle from "./searchComponent/blogCategory/page.js";
// ✅ Sidebar Category Filter Component
const monthWise = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const difficultyWise = [
    "Easy To Moderate", "Moderate", "Moderate to Difficult", "Difficult", "Challenging"
];

const seasonWise = ["Winter", "Spring", "Summer", "Monsoon", "Autumn"];

const regionWise = [
    "Uttarakhand", "Himachal Pradesh", "Jammu & Kashmir", "Ladakh",
    "Nepal", "Tanzania", "Sikkim", "West Bengal"
];

const tailoredPrograms = [
    "School/College Programs", "Boardroom to Basecamp", "Customize Treks"
];

function CategoryFilter() {
    const [dateRange, setDateRange] = useState({ from: "", to: "" });

    function handleDateChange(e) {
        const { name, value } = e.target;
        setDateRange(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className="w-full h-full px-4 flex flex-col gap-4 md:px-6">
            <h2 className="text-center text-xl font-bold text-indigo-900">
                Search By Category
            </h2>

            {/* Search By Dates */}
            <button className="border border-orange-300 bg-white rounded-full px-4 py-1 text-xs text-indigo-900 font-semibold shadow-sm hover:bg-orange-100 w-fit mx-auto transition">
                Search By Dates
            </button>

            {/* Date Input */}
            <div className="relative w-full">
                <div className="flex gap-2">
                    <input
                        type="text"
                        name="from"
                        value={dateRange.from}
                        onChange={handleDateChange}
                        placeholder="Select Date Range"
                        className="flex-1 rounded-full py-2 px-4 outline-none text-sm bg-[#f7dac6] placeholder-[#FFAA81]"
                    />
                </div>
                <span className="absolute inset-y-0 right-3 top-2 pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="orange"
                        className="w-5 h-5 text-orange-400 opacity-70"
                    >
                        <rect x="3" y="4" width="18" height="18" rx="4" stroke="currentColor" />
                        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" />
                        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" />
                    </svg>
                </span>
            </div>

            {/* Filters */}
            <Section title="Month Wise" items={monthWise} />
            <Section title="Difficulty Wise" items={difficultyWise} />
            <Section title="Season Wise" items={seasonWise} />
            <Section title="Region Wise" items={regionWise} />
            <Section title="Tailored Trekking Programs" items={tailoredPrograms} />
        </div>
    );
}

function Section({ title, items }) {
    return (
        <div className="mb-2">
            <div className="flex flex-col items-center">
                <button className="border border-orange-300 bg-white rounded-full px-3 py-1 text-[15.63px] text-indigo-900 font-bold hover:bg-orange-100 transition">
                    {title}
                </button>
            </div>
            <ul className="mt-2 space-y-1">
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className=" text-[12.49px] font-bold text-[#05073C] cursor-pointer"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>

    );
}

// ✅ Main Trek Page
export default function TrekPage() {
    const [current, setCurrent] = useState(0);

    const treks = [
        {
            id: 1,
            title: "Har Ki Dun Trek",
            location: "Uttarakhand",
            days: "7 Days",
            priceTag: "Price Dropped!",
            image:
                "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1000&q=80",
        },
        {
            id: 2,
            title: "Har Ki Dun Trek",
            location: "Uttarakhand",
            days: "7 Days",
            priceTag: "Price Dropped!",
            image:
                "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1000&q=80",
        },
        {
            id: 3,
            title: "Har Ki Dun Trek",
            location: "Uttarakhand",
            days: "7 Days",
            priceTag: "Price Dropped!",
            image:
                "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1000&q=80",
        },
        {
            id: 4,
            title: "Har Ki Dun Trek",
            location: "Uttarakhand",
            days: "7 Days",
            priceTag: "Price Dropped!",
            image:
                "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1000&q=80",
        },
    ];

    const prevSlide = () =>
        setCurrent(current === 0 ? treks.length - 1 : current - 1);
    const nextSlide = () =>
        setCurrent(current === treks.length - 1 ? 0 : current + 1);

    return (
        <main className="">
            <div className="mx-auto px-16 min-h-screen bg-white text-[#1d1d1f] flex flex-col md:flex-row items-stretch">
                {/* ✅ Equal Height Sidebar */}
                <aside className="w-full md:w-1/4 bg-[#FFF3EB] p-2 md:p-6 flex justify-center h-full rounded-2xl mt-20">
                    <CategoryFilter />
                </aside>


                {/* ✅ Main Content matches height */}
                <section className="w-full md:w-3/4 px-4 md:px-8 py-6 space-y-4 flex flex-col justify-between h-full">
                    {/* Top Title */}
                    <div className="text-center">
                        <h1 className="text-xl md:text-2xl font-bold text-blue-900">
                            Best Autumn Treks in September, October, and November 2025!
                        </h1>
                        <p className="text-sm md:text-base text-gray-700 mt-2 text-start">
                            From September to November, the Himalayas undergo a stunning transformation as autumn sets in. The mountains come alive with rich hues of red, orange, and gold, turning every trail into a painter’s dream. Crisp air, clear skies, and vibrant landscapes make this season ideal for trekking and photography, offering unmatched views and serene moments in nature.
                        </p>
                    </div>

                    {/* Trek Carousel */}
                    <div className="relative flex items-center justify-center">
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 z-10 bg-orange-100 hover:bg-orange-200 rounded-full p-2"
                        />
                        <div className="flex gap-4 overflow-hidden">
                            {treks.map((trek, index) => (
                                <div
                                    key={trek.id}
                                    className={`min-w-[250px] max-w-[250px] rounded-2xl overflow-hidden border transition-all duration-500 ${index === current ? "opacity-100" : "opacity-70 scale-95"
                                        }`}
                                >
                                    <div className="relative">
                                        <img
                                            src={trek.image}
                                            alt={trek.title}
                                            className="w-full h-40 object-cover"
                                        />
                                        {trek.priceTag && (
                                            <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                                {trek.priceTag}
                                            </span>
                                        )}
                                    </div>
                                    <div className="bg-white text-center py-3">
                                        <p className="text-xs text-gray-500">{trek.location}</p>
                                        <p className="font-semibold">{trek.title}</p>
                                        <p className="text-xs text-gray-600 mb-2">{trek.days}</p>
                                        <div className="flex justify-center gap-2">
                                            <button className="text-sm border border-orange-400 px-3 py-1 rounded-full hover:bg-orange-50">
                                                Dates
                                            </button>
                                            <button className="text-sm border border-orange-400 px-3 py-1 rounded-full hover:bg-orange-50">
                                                Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 z-10 bg-orange-100 hover:bg-orange-200 rounded-full p-2"
                        />
                    </div>

                    {/* Banner Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        {/* Background Image */}
                        <img
                            src="https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&w=1000&q=80"
                            alt="Custom Trek"
                            className="w-full h-[650px] object-cover"
                        />

                        {/* Overlay (Black transparent background half width) */}
                        <div className="absolute inset-0 flex">
                            <div className="w-1/2 bg-black/50 flex flex-col justify-center items-start p-6 md:p-10 text-white">
                                {/* Logo */}
                                <img
                                    src="/logo.png" // 👈 Apna actual logo path lagao
                                    alt="Logo"
                                    className="w-24 md:w-32 mb-4"
                                />

                                <h2 className="text-2xl md:text-2xl font-bold mb-2">
                                    Customized To Premium & Private Trek
                                </h2>
                                <h2 className="text-xl md:text-xl font-bold mb-2">
                                    Consult your trek here!
                                </h2>
                                <p className="text-sm md:text-base mb-4 max-w-md">
                                    Our Highly Experienced, Qualified Team Will Guide You For Best Offbeat Feasible Budget Friendly Trek For You.
                                </p>
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    Click Here To Customize!
                                </button>
                            </div>
                            {/* Empty half to keep right side visible */}
                            <div className="w-1/2" />
                        </div>
                    </div>



                    {/* High Altitude Section */}
                    <div className="text-center p-12">
                        <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">
                            High-Altitude Expeditions (Above 6,000 Meters / 19,685 Feet)
                        </h2>
                        <p className="text-sm md:text-base text-gray-700 w-full mx-auto text-start">
                            Above 6,000 meters, the world becomes raw and untamed—glaciers gleam,
                            peaks pierce the sky, and every step is a test of will. This is where
                            Earth meets sky, calling adventurers to rise above the ordinary.
                        </p>
                    </div>
                    <ExpeditionSlider />

                </section>
            </div>
            <BlogArticle />
            <DifficultyLevelSection />
        </main>
    );
}
