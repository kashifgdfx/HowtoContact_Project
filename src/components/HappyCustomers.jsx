const reviews = [
    {
        name: "Rose Cavo",
        time: "16 hours ago",
        title: "I am happy to have found your company",
        desc: "I am happy to have found your company. Your representatives are very nice and professional.",
    },
    {
        name: "Terrence Siple",
        time: "16 hours ago",
        title: "I truly appreciate it",
        desc: "I truly appreciate it, the professionalism and patience of the technicians helping me today.",
    },
    {
        name: "Joyce",
        time: "19 hours ago",
        title: "I appreciate the issue being resolved...",
        desc: "I appreciate the issue being resolved fairly quickly.",
    },
    {
        name: "Hartsell",
        time: "20 hours ago",
        title: "Thank you for the support.",
        desc: "Thank you for the support.",
    },
    {
        name: "D Baddick",
        time: "22 hours ago",
        title: "I am very satisfied with this service.",
        desc: "I am very satisfied with this service.",
    },
    {
        name: "Hewitt",
        time: "23 hours ago",
        title: "Henry Patient with an old lady not...",
        desc: "Henry Patient with an old lady not very tech savvy.",
    },
    {
        name: "Dinesh Nishad",
        time: "3 days ago",
        title: "Nice service and humble",
        desc: "Nice service and humble",
    },
    {
        name: "Fagan",
        time: "4 days ago",
        title: "Excellent service. George was...",
        desc: "Excellent service. George was informative and clear.",
    },
];

export default function HappyCustomers() {
    return (
        <section className="py-20 bg-gray-50">

            {/* HEADING */}
            <div className="text-center mb-12 px-4">

                <h2 className="text-4xl md:text-5xl font-medium text-[#071405]">
                    Our Happy Customers
                </h2>

                {/* Decorative Line */}
                <div className="flex items-center justify-center gap-2 mt-5">
                    <span className="w-12 h-[2px] bg-[#457C3C] rounded-full"></span>

                    <span className="w-3 h-3 bg-[#457C3C] rotate-45"></span>

                    <span className="w-12 h-[2px] bg-[#457C3C] rounded-full"></span>
                </div>
            </div>

            {/* RATING SUMMARY */}
            <div className="text-center mb-14 px-4">

                <div className="flex flex-wrap items-center justify-center gap-3 text-2xl font-semibold text-[#071405]">

                    <span>Excellent</span>

                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                className="bg-[#2E5628] text-white text-sm px-1.5 py-[2px] rounded-sm"
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>

                <p className="text-gray-600 mt-3 text-sm md:text-base">
                    Rated 4.8 / 5 based on{" "}
                    <span className="underline font-medium">
                        3,329 reviews
                    </span>{" "}
                    on
                    <span className="text-[#2E5628] font-semibold ml-1">
                        Trustpilot
                    </span>
                </p>
            </div>

            {/* REVIEWS GRID */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">

                {reviews.map((item, index) => (
                    <div
                        key={index}
                        className="
              bg-white
              rounded-2xl
              p-6
              border border-gray-100
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all duration-300
            "
                    >

                        {/* STARS */}
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <span
                                    key={i}
                                    className="bg-[#2E5628] text-white text-xs px-1.5 py-[2px] rounded-sm"
                                >
                                    ★
                                </span>
                            ))}
                        </div>

                        {/* USER INFO */}
                        <p className="text-sm text-gray-500 mb-3">
                            <span className="font-semibold text-gray-700">
                                {item.name}
                            </span>{" "}
                            • {item.time}
                        </p>

                        {/* REVIEW TITLE */}
                        <h4 className="font-semibold text-[#071405] text-[17px] leading-snug mb-3">
                            {item.title}
                        </h4>

                        {/* DESCRIPTION */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}