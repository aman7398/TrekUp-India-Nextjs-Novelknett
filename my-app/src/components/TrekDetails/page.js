"use client";
import {
    FaMountain,
    FaClock,
    FaHiking,
    FaSignal,
    FaMapMarkerAlt,
    FaPlaneDeparture,
    FaCalendarAlt,
    FaHome,
    FaUtensils,
    FaFileAlt,
    FaTemperatureLow,
    FaRegSnowflake,
    FaPhoneAlt,
} from "react-icons/fa";

export default function TrekInfoSection() {
    const trekInfo = [
        { icon: <FaMountain />, title: "Max. Altitude" },
        { icon: <FaClock />, title: "Trek Duration" },
        { icon: <FaHiking />, title: "Trekking Distance" },
        { icon: <FaSignal />, title: "Difficulty Level" },
        { icon: <FaMapMarkerAlt />, title: "Start/End Point" },
        { icon: <FaPlaneDeparture />, title: "Nearest Airport" },
        { icon: <FaCalendarAlt />, title: "Best Season" },
        { icon: <FaHome />, title: "Accommodation" },
        { icon: <FaUtensils />, title: "Meals" },
        { icon: <FaFileAlt />, title: "Permits Required" },
        { icon: <FaTemperatureLow />, title: "Temperature" },
        { icon: <FaRegSnowflake />, title: "Snow" },
    ];

    const trekDates = ["May 2026", "June 2026", "July 2026", "August 2026"];

    return (
        <section className="w-full bg-white text-gray-800 py-10 px-5 md:px-10 lg:px-20">
            {/* Full Width Icons Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                {trekInfo.map((item, i) => (
                    <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
                    >
                        <div className="text-[#FF6900] text-2xl">{item.icon}</div>
                        <div>
                            <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                            <p className="text-xs text-gray-500 leading-tight">
                                You’re in control, with free cancellation and payment.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Description + Trek Cost */}
            <div className="flex flex-col gap-10">
                {/* Description Section */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        Why is it so special?
                    </h2>
                    <p className="text-sm text-gray-700 leading-6 mb-4">
                        The Kedarkantha Trek is your gateway to the quintessential Himalayan
                        winter wonderland. Renowned as one of the best beginner-friendly
                        snow treks in India, it offers a perfect, manageable adventure for
                        those looking to experience the magic of high-altitude trekking for
                        the first time, without compromising on the rewards.
                    </p>
                    <p className="text-sm text-gray-700 leading-6 mb-6">
                        Imagine a trail blanketed in deep, crunchy snow, leading you through
                        silent, frosted oak and pine forests. Picture campsites beside frozen
                        lakes and waking up in your tent to breathtaking views of sun-kissed
                        peaks. The climb to the 12,500 ft summit is a challenging but
                        achievable pre-dawn journey, culminating in a 360-degree panoramic
                        sunrise view.
                    </p>

                    {/* Image with Play Button */}
                    <div className="relative rounded-xl overflow-hidden shadow-md">
                        <img
                            src="/"
                            alt="Kedarkantha Trek"
                            className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="bg-[#FF6900] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-md">
                                ▶
                            </button>
                        </div>
                    </div>

                    {/* Text with Blur at Bottom */}
                    <div className="relative mt-6 max-h-48 overflow-hidden">
                        <p className="text-sm text-gray-700 leading-6">
                            This trek is more than just a walk; it’s a complete experience. It
                            offers solitude, camaraderie, and unforgettable beauty. Whether
                            you’re a solo traveler or a group of friends seeking adventure,
                            this trek will stay etched in your memory forever. The warmth of
                            a hot drink at a frozen campsite, the quiet of the mountains, and
                            the sense of achievement at sunrise — it’s all part of the
                            experience. Every step is worth it.
                        </p>
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
                    </div>

                    <button className="mt-4 bg-[#FF6900] text-white px-5 py-2 rounded-md font-semibold text-sm shadow hover:bg-orange-600 transition">
                        Read More
                    </button>
                </div>

                {/* Trek Cost Box (Now Below Description) */}
                <div
                    className="w-full sm:w-3/4 md:w-1/2 mx-auto rounded-2xl p-6 shadow-md border border-orange-200"
                    style={{
                        background:
                            "radial-gradient(74.17% 74.75% at 54.32% 50%, rgba(255, 170, 129, 0.2) 0%, rgba(255, 105, 0, 0.2) 100%)",
                    }}
                >
                    <h3 className="text-lg font-semibold text-gray-800 text-center">
                        Trek Cost
                    </h3>

                    <div className="text-center my-3">
                        <p className="text-4xl font-bold text-[#FF6900]">₹9,499</p>
                        <p className="text-gray-600 text-sm">+5% GST</p>
                    </div>

                    <ul className="text-sm text-gray-700 space-y-2 mb-5">
                        <li>🏕 Twin Sharing Tent Accommodation Provided</li>
                        <li>🎒 SCL Benefit with TrekUp India</li>
                        <li>🚐 ₹1500 Extra For Transport</li>
                        <li>🧍 Single Tent Occupancy</li>
                        <li>🛡 +35 Trek Insurance</li>
                        <li>💸 Discount Policy</li>
                        <li>📦 Offloads</li>
                    </ul>

                    <div className="bg-[#FFF3EB] border border-orange-200 p-4 rounded-xl mb-5 text-center">
                        <p className="font-semibold text-gray-800 mb-2">
                            Call Our Mountain Experts!
                        </p>
                        <div className="text-sm text-gray-700">
                            <p className="flex justify-center items-center gap-2">
                                <FaPhoneAlt className="text-[#FF6900]" /> +91-7060032966 | +91-7060017566
                            </p>
                            <p className="text-[#FF6900] mt-1">info@trekupindia.com</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <h4 className="font-semibold mb-3 text-gray-800">
                            Select Your Trek Date
                        </h4>
                        <div className="flex flex-col gap-2">
                            {trekDates.map((date, i) => (
                                <button
                                    key={i}
                                    className="bg-[#FF6900] text-white py-2 rounded-md font-semibold text-sm hover:bg-orange-600 transition"
                                >
                                    {date}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
