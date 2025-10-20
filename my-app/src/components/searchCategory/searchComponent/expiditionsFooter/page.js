export default function DifficultyLevelSection() {
    const levels = [
        {
            title: "Easy To Moderate",
            items: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
        },
        {
            title: "Moderate",
            items: [
                "Easy To Moderate",
                "Moderate",
                "Moderate to Difficult",
                "Difficult",
                "Challenging",
            ],
        },
        {
            title: "Moderate To Difficult",
            items: ["Winter", "Spring", "Summer", "Monsoon", "Autumn"],
        },
        {
            title: "Difficult",
            items: [
                "Uttarakhand",
                "Himachal Pradesh",
                "Jammu & Kashmir",
                "Ladakh",
                "Nepal",
                "Tanzania",
                "Sikkim",
                "West Bengal",
            ],
        },
        {
            title: "Challenging",
            items: [
                "Uttarakhand",
                "Himachal Pradesh",
                "Jammu & Kashmir",
                "Ladakh",
                "Nepal",
                "Tanzania",
                "Sikkim",
                "West Bengal",
            ],
        },
    ];

    return (
        <section className="bg-[#FFF3EB] py-12 px-4 sm:px-6 md:px-10 lg:px-16 rounded-[40px] mt-12">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A1B4D]">
                    All Treks By Difficulty Level
                </h2>
                <div className="w-32 h-1 bg-orange-500 mx-auto mt-2 rounded-full"></div>
                <p className="bg-white inline-block mt-4 px-4 py-2 rounded-xl text-[#0A1B4D] font-semibold text-lg md:text-xl shadow-sm">
                    Trek in The Himalayas - A Journey Beyond the Ordinary
                </p>
            </div>

            {/* Difficulty Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16">
                {levels.map((level) => (
                    <div key={level.title}>
                        <h3 className="inline-block border-[1px] bg-[#FFFCFA] border-[#FF6900] text-[#0A1B4D] font-semibold rounded-xl px-4 py-1 mb-4">
                            {level.title}
                        </h3>
                        <ul className="text-start ml-4 sm:ml-6 md:ml-10 lg:ml-12 space-y-1">
                            {level.items.map((item) => (
                                <li
                                    key={item}
                                    className="text-[#0A1B4D] hover:text-orange-500 transition text-[14px] md:text-[14px] font-bold cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
