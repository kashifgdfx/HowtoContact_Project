const FeaturedUSP = () => {
  const uspData = [
    {
      img: "/featured1.png",
      alt: "System optimization and performance tuning service",
      titleMain: "Complete",
      titleSub: "Optimization",
      desc: "Full and complete system optimisation services are available.",
    },
    {
      img: "/featured2.png",
      alt: "Device diagnosis and hardware repair assistance",
      titleMain: "Diagnosis",
      titleSub: "& Repair",
      desc: "We offer a free diagnostic to determine the services your device.",
    },
    {
      img: "/featured3.png",
      alt: "Software setup and secure installation services",
      titleMain: "Setup",
      titleSub: "& Install",
      desc: "We can manage your security services and you can trust us.",
    },
    {
      img: "/featured4.png",
      alt: "Malware and virus removal for PC and laptops",
      titleMain: "Virus",
      titleSub: "Removal",
      desc: "If your device has malware on it, we can provide malware removal.",
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {uspData.map((item, index) => (
            <div
              key={index}
              className={`
                border-gray-200
                ${index !== uspData.length - 1 ? "lg:border-r" : ""}
              `}
            >
              <div className="h-full px-6 py-10 text-center hover:bg-[#F8FBF7] transition duration-300">
                {/* ICON */}
                <div className="flex justify-center mb-5">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="h-16 w-auto object-contain"
                  />
                </div>

                {/* TITLE */}
                <h4 className="text-xl font-bold text-[#193315] mb-3">
                  <span className="text-[#5DA452]">{item.titleMain}</span>{" "}
                  {item.titleSub}
                </h4>

                {/* DESC */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedUSP;
