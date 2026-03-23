export default function ProcessSection() {
  const steps = [
    {
      id: "01",
      title: "Discover",
      desc: "Understanding your business, goals, and user needs to define a clear direction.",
    },
    {
      id: "02",
      title: "Design",
      desc: "Creating wireframes and user interfaces focused on clarity, usability, and experience.",
    },
    {
      id: "03",
      title: "Develop",
      desc: "Building fast, scalable, and responsive applications using modern technologies.",
    },
    {
      id: "04",
      title: "Launch",
      desc: "Testing, optimizing, and deploying your product for real-world performance.",
    },
  ];

  return (
    <section className=" bg-[#F5F5F3] max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="border-x border-gray-300">
        <div className="flex items-center justify-between border-b border-gray-300">
          {/* Left */}
          <div className="p-10 md:p-16">
            <p className="text-xs tracking-[0.2em] uppercase text-[#3A3A3A] mb-4">
              Our Process
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-black max-w-2xl ">
              A clear process designed to deliver high-quality digital products
            </h2>
          </div>

          {/* Right */}
          <div className="p-10 md:p-16 mt-6">
            <p className="text-[#3A3A3A] text-base leading-relaxed max-w-lg">
              From idea to launch, we follow a structured approach to ensure every
              project is efficient, scalable, and aligned with your goals.
            </p>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="border-x border-gray-300">
        <div className="grid md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-8 md:p-10 border-gray-300 ${
                index !== steps.length - 1 ? "border-r" : ""
              } ${
                index === 0 ? "border-b md:border-b-0" : ""
              } ${
                index === steps.length - 1 ? "" : "border-b md:border-b-0"
              }`}
            >
              {/* Circle Number */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#3A3A3A] text-sm text-[#3A3A3A] mb-6">
                {step.id}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-black mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#3A3A3A] text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}