const expertCards = [
    {
        title: "Preetam Singh Rawat",
        subtitle: "Founder & CEO",
        description:
            "This Kedarkantha Trek guide has been curated under the leadership of Preetam Singh Rawat, Founder & CEO of Trekup India. With over a decade of on-ground experience in the Indian Himalayas, Preetam has personally trekked and led expeditions across Uttarakhand, Himachal Pradesh, Ladakh, and Jammu & Kashmir. His mission is simple: to make Himalayan trekking safe, authentic, and lifechanging for every adventurer.",
        image: "/expert.jpg", // Place your image in the public folder
    },
];

const infoCards = [
    {
        title: "How We Created This Guide?",
        items: [
            "First-hand knowledge: Our guides and trek leaders, many of whom have lived and worked in these regions, contribute detailed insights.",
            "Local expertise: Information is cross-verified with villagers, porters, and ground teams who know the trails better than anyone.",
            "Continuous updates: Each season, we refine our trek details based on weather conditions, trekker feedback, and safety improvements.",
            "Responsible practices: The content aligns with Leave No Trace principles and Trekup India’s strict safety protocols.",
        ],
    },
    {
        title: "Why This Content Exists?",
        items: [
            "At Trekup India, our mission is simple: to empower trekkers to explore the Himalayas with confidence and respect.",
            "We want to cut through the clutter of generic trek info online by offering authentic, ground-tested guidance.",
            "Our goal is to ensure that every trekker—whether a beginner or a seasoned mountaineer—feels prepared, safe, and inspired.",
            "Most importantly, this content exists to build trust, because we believe every successful trek starts with honest information.",
        ],
    },
];

export default function MeetTheExpert() {
    return (
        <div className="bg-[#faf9f9] min-h-screen py-8 px-2">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-blue-900 tracking-tight mb-2">
                    Meet the Expert Behind the Above Insights
                </h2>
                <div className="w-20 border-t-2 border-orange-400 mx-auto mb-8" />
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Expert Card(s) */}
                    {expertCards.map((card, idx) => (
                        <div key={idx} className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 w-full lg:w-1/3 mb-4 lg:mb-0">
                            <div className="rounded-full border-4 border-orange-200 p-1 mb-3">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="rounded-full w-32 h-32 object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-lg text-gray-900">{card.title}</h3>
                                <p className="text-xs italic text-gray-500 mb-2">{card.subtitle}</p>
                                <p className="text-[15px] text-gray-700 leading-5">{card.description}</p>
                            </div>
                        </div>
                    ))}
                    {/* Info Cards */}
                    <div className="flex flex-col gap-6 w-full lg:w-2/3">
                        {infoCards.map((info, idx) => (
                            <div key={idx} className="bg-white rounded-2xl shadow-md p-6">
                                <h4 className="font-semibold text-lg text-gray-900 mb-3">{info.title}</h4>
                                <ul className="list-disc list-inside text-gray-700 space-y-1 text-[15px]">
                                    {info.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
