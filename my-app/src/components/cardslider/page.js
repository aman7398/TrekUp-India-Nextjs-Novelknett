"use client";


import { useState } from "react";

const cards = [
    {
        title: "Card 1",
        description: "This is the first card",
        color: "bg-red-400"
    },
    {
        title: "Card 2",
        description: "This is the second card",
        color: "bg-green-400"
    },
    {
        title: "Card 3",
        description: "This is the third card",
        color: "bg-blue-400"
    },
];

export default function CardSlider() {
    const [current, setCurrent] = useState(0);

    const prevCard = () => {
        setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    };

    const nextCard = () => {
        setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto py-10">
            <button
                onClick={prevCard}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-lg z-10"
            >
                &#8592;
            </button>
            <div className="flex justify-center items-center relative h-64">
                {cards.map((card, index) => {
                    let position = "translate-x-0 scale-100 z-30";
                    if (index === (current + 1) % cards.length) {
                        position = "translate-x-32 scale-90 z-20 opacity-70";
                    } else if (index === (current + cards.length - 1) % cards.length) {
                        position = "-translate-x-32 scale-90 z-20 opacity-70";
                    } else {
                        position = "opacity-0 scale-75 z-10 absolute";
                    }

                    return (
                        <div
                            key={index}
                            className={`absolute w-64 h-64 rounded-xl shadow-xl flex flex-col justify-center items-center text-white font-bold text-lg transition-all duration-500 ${card.color} ${position}`}
                        >
                            <h2>{card.title}</h2>
                            <p className="text-sm mt-2 text-center">{card.description}</p>
                        </div>
                    );
                })}
            </div>
            <button
                onClick={nextCard}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-lg z-10"
            >
                &#8594;
            </button>
        </div>
    );
}
