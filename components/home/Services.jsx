import { Layout, Code2, Package, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Layout,
      title: "UI/UX Design",
      description:
        "Designing intuitive, user-focused interfaces that enhance usability and engagement.",
    },
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Building fast, responsive, and scalable web applications using modern technologies.",
    },
    {
      icon: Package,
      title: "SaaS Products",
      description:
        "Creating powerful and scalable SaaS platforms tailored to your business needs.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Improving speed, accessibility, and overall performance for better user experience.",
    },
  ];

  return (
    <section className=" bg-[#F5F5F3] max-w-7xl mx-auto">
      <div className="border-x border-gray-300">
        {/* Header */}
        <div className="border-b border-gray-300">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="p-10 md:p-16">
              <p className="text-xs tracking-[0.2em] uppercase text-[#3A3A3A] mb-4">
                Our Services
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-black max-w-2xl">
                Design and development services built for modern digital products
              </h2>
            </div>
            <div className=" p-10 md:p-16 mt-6">
              <p className="text-[#3A3A3A] leading-relaxed max-w-xl">
                We help businesses design, build, and scale digital experiences
                through a combination of strategy, design, and development.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-14 border-x border-gray-300 ">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={[
                  "border-gray-300",
                  i % 2 === 1 ? "lg:border-l" : "",
                  i >= 2 ? "border-t" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {/* Title row */}
                <div className="flex items-center gap-3 px-8 md:px-10 py-5 border-b border-gray-300">
                  <div className="text-[#3A3A3A]">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-semibold text-black">
                    {service.title}
                  </span>
                </div>
                {/* Description */}
                <div className="px-8 md:px-10 py-8 md:py-10">
                  <p className="text-sm text-[#3A3A3A] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}