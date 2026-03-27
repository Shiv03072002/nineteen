import Link from "next/link";
import { Zap, Layers, Code, Rocket } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized builds for speed, efficiency, and smooth user experience.",
  },
  {
    icon: Layers,
    title: "Scalable Systems",
    description: "Built to grow with your business and handle increasing demand.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Structured and maintainable code for long-term flexibility.",
  },
  {
    icon: Rocket,
    title: "On-Time Delivery",
    description: "Projects delivered efficiently with a clear and proven workflow.",
  },
];

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "8+", label: "Industries Served" },
  { value: "3+", label: "Years of Experience" },
  { value: "95%", label: "Client Satisfaction" },
];

export default function WhyUs() {
  return (
    <section className=" bg-[#F5F5F3] max-w-7xl mx-auto">
      <div className="border-x border-[#11111154]">
        {/* Main grid */}
        <div className="flex flex-col lg:flex-row border-b border-[#11111154]">
          {/* Left col: text + CTA - 40% width */}
          <div className="lg:w-[40%] border-r border-[#11111154] p-10 md:p-16 flex flex-col justify-center gap-6">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#3A3A3A] mb-4">
                Why Choose Us
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-black mb-5">
                Built for performance, designed for growth
              </h2>
              <p className="text-[#3A3A3A] leading-relaxed">
                We combine design thinking and modern development to create
                digital products that are fast, scalable, and user-focused.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-black text-white text-sm font-medium px-6 py-3.5 w-fit hover:bg-[#3A3A3A] transition-colors duration-200"
            >
              Start a Project
            </Link>
          </div>

          {/* Right 2 cols: 2×2 feature grid - 60% width */}
          <div className="lg:w-[60%] grid grid-cols-2 bg-[#FAFAF8]">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className={[
                    "p-8 md:p-10 flex flex-col gap-5",
                    i % 2 === 1 ? "border-l border-[#11111154]" : "",
                    i >= 2 ? "border-t border-[#11111154]" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className="text-[#3A3A3A]">
                    <Icon size={22} strokeWidth={1.4} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-[#3A3A3A] leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-gray-300">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className={`flex flex-col items-center justify-center py-8 md:py-10 gap-2 ${
                idx < stats.length - 1 ? "border-r border-[#11111154]" : ""
              }`}
            >
              <span className="text-3xl md:text-4xl font-semibold text-black leading-none">
                {s.value}
              </span>
              <span className="text-xs text-[#3A3A3A]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}