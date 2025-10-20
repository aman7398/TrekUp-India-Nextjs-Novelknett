export default function BlogArticle() {
    const articleContent = [
        {
            type: "paragraph",
            text: `Trekking India's vast wilderness whether in areas such as Himalayan mountain passes, Western Ghats forests, or central Indian forests requires more than stamina and determination alone. Navigating can be one of the least known but essential skills trekkers need when they set off into unknown territory; some treks may be marked, but others can be difficult during snow, fog or dense forest environments with TrekUp India we have seen how an understanding of compasses, maps and GPS based tools can alleviate anxiety while speeding up journeys while guaranteeing safety during every trek undertaken.`,
        },
        {
            type: "heading",
            text: "Why Navigation Skills Matter",
        },
        {
            type: "paragraph",
            text: `Indian trekking routes often lack clear and consistent markers, necessitating that trekkers possess navigational expertise to navigate safely. Therefore, all trekkers should possess navigational knowledge as part of their trek experience in India.`,
        },
        {
            type: "list",
            items: [
                {
                    title: "Stay Focused:",
                    text: "Pay attention to where your journey leads, even when its direction remains obscure.",
                },
                {
                    title: "Energy and Time Saving:",
                    text: "Skip unnecessary detours and backtracks.",
                },
                {
                    title: "Be Prepared in Emergencies:",
                    text: "Always return to the campsite or roadhead if you wander from your intended destination.",
                },
                {
                    title: "Be Independent:",
                    text: "Rely on yourself instead of waiting around to be guided or led by others.",
                },
            ],
        },
        {
            type: "image",
            src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
            alt: "Mountain Trek",
        },
    ];

    const tableOfContents = [
        "Can I change the travel date?",
        "Can I change the travel date?",
        "Can I change the travel date?",
        "Can I change the travel date?",
        "Can I change the travel date?",
    ];

    return (
        <section className="bg-[#FFFBF9] min-h-screen flex flex-col items-center px-4 md:px-10 py-10">
            {/* Publish Date */}
            <h3 className="text-center text-sm md:text-base font-semibold text-[#0A1B4D] mb-6">
                Article Published On -{" "}
                <span className="font-bold text-[#0A1B4D]">23-06-2025</span>
            </h3>

            {/* Layout */}
            <div className="flex flex-col lg:flex-row justify-between w-full max-w-6xl gap-8">
                {/* Left: Article */}
                <article className="flex-1 text-[#0A1B4D] space-y-6">
                    {articleContent.map((block, index) => {
                        switch (block.type) {
                            case "paragraph":
                                return (
                                    <p
                                        key={index}
                                        className="text-sm md:text-base leading-relaxed"
                                    >
                                        {block.text}
                                    </p>
                                );

                            case "heading":
                                return (
                                    <h4
                                        key={index}
                                        className="text-lg md:text-xl font-bold border-l-4 border-orange-500 pl-3"
                                    >
                                        {block.text}
                                    </h4>
                                );

                            case "list":
                                return (
                                    <ul key={index} className="list-disc list-inside space-y-2">
                                        {block.items.map((item, i) => (
                                            <li key={i}>
                                                <span className="font-semibold">{item.title}</span>{" "}
                                                {item.text}
                                            </li>
                                        ))}
                                    </ul>
                                );

                            case "image":
                                return (
                                    <div key={index} className="overflow-hidden rounded-2xl shadow-md">
                                        <img
                                            src={block.src}
                                            alt={block.alt}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                );

                            default:
                                return null;
                        }
                    })}
                </article>

                {/* Right: Table of Contents */}
                <aside className="w-full lg:w-[280px] bg-[#FFEFE5] rounded-2xl p-4 md:p-5 h-fit shadow-sm">
                    <h5 className="text-[#0A1B4D] font-bold text-lg mb-4">
                        Table Of Content
                    </h5>
                    <ul className="space-y-2">
                        {tableOfContents.map((item, i) => (
                            <li
                                key={i}
                                className="flex items-center justify-between text-sm md:text-base bg-white hover:bg-[#FFF3EB] border border-orange-300 rounded-lg px-3 py-2 cursor-pointer transition"
                            >
                                <span className="text-[#0A1B4D]">{item}</span>
                                <span className="text-[#FF6900] font-bold text-sm">{i + 1}</span>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </section>
    );
}
