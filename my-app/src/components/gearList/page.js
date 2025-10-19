// app/components/LayeringSystem.jsx
export default function LayeringSystem() {
    const clothing = [
        {
            category: "Headwear",
            items: [
                { item: "Warm Beanie / Balaclava", reason: "For cold mornings and nights at high camp." },
                { item: "Wide-Brim Sun Hat or Buff", reason: "For sun protection during hikes at lower altitudes." },
            ],
        },
        {
            category: "Upper Body",
            items: [
                { item: "Moisture-Wicking T-Shirts (2)", reason: "Synthetic or Merino Wool. Avoid cotton entirely." },
                { item: "Thermal Base Layer (1)", reason: "Merino wool for warmth even if damp." },
                { item: "Fleece Jacket (1)", reason: "Excellent mid-layer insulation." },
                { item: "Insulated Puffed Jacket (1)", reason: "Down or Synthetic. Vital for warmth at camp and at the pass." },
                {
                    item: "Waterproof & Windproof Jacket (1)",
                    reason: "Your most important clothing item. Must be seam-sealed (Gore-Tex or equivalent).",
                },
            ],
        },
        {
            category: "Lower Body",
            items: [
                { item: "Quick-Dry Trekking Pants (2)", reason: "One can be convertible." },
                { item: "Thermal Base Layer (1)", reason: "For sleeping and extreme cold." },
                {
                    item: "Waterproof Rain Pants (1)",
                    reason: "Mandatory. Protects from rain/snow and wind during the descent.",
                },
            ],
        },
        {
            category: "Hands & Feet",
            items: [
                {
                    item: "Trekking Socks (4–5 pairs)",
                    reason: "Merino wool blend. Change socks daily to prevent blisters.",
                },
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-white flex items-center justify-center px-3 py-10">
            <section className="w-full max-w-5xl bg-[#FFE4D0] rounded-2xl shadow-md overflow-hidden">
                {/* Header */}
                <div className="flex items-center bg-[#FFE4D0] rounded-t-2xl px-5 md:px-8 py-6">
                    <div className="bg-[#FBAE86] p-3 rounded-full mr-4 flex items-center justify-center shadow-md">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M3 14s3-4 9-4 9 4 9 4M3 10s3-4 9-4 9 4 9 4"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-[#282545] font-extrabold text-xl md:text-2xl">
                            2. Clothing: The Layering System
                        </h2>
                        <p className="text-[#4a4a4a] font-semibold text-base">
                            Pack for temperatures ranging from +15°C to -5°C.
                        </p>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl mx-4 md:mx-6 mb-6 overflow-x-auto shadow-sm">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-[#FEC9A7] text-[#282545]">
                                <th className="py-3 px-4 text-left font-semibold border border-[#f5b08a] w-1/4">Category</th>
                                <th className="py-3 px-4 text-left font-semibold border border-[#f5b08a] w-1/4">Item</th>
                                <th className="py-3 px-4 text-left font-semibold border border-[#f5b08a] w-2/4">
                                    Specification & Reason
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {clothing.map((cat, i) =>
                                cat.items.map((it, j) => (
                                    <tr
                                        key={`${i}-${j}`}
                                        className="border border-[#f3c2a3] hover:bg-[#fff6f1] transition"
                                    >
                                        {j === 0 ? (
                                            <td
                                                rowSpan={cat.items.length}
                                                className="py-3 px-4 font-semibold text-[#444] border border-[#f5b08a]"
                                            >
                                                {cat.category}
                                            </td>
                                        ) : null}
                                        <td className="py-3 px-4 border border-[#f5b08a] text-[#333] font-medium">
                                            {it.item}
                                        </td>
                                        <td className="py-3 px-4 border border-[#f5b08a] text-[#555]">{it.reason}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Read More Button */}
                <div className="flex justify-center mb-8">
                    <button className="border border-[#F77E35] text-[#F77E35] hover:bg-[#F77E35] hover:text-white transition font-semibold px-6 py-2 rounded-full shadow-sm">
                        Read More
                    </button>
                </div>
            </section>
        </main>
    );
}
