import { 
  LayoutDashboard, 
  ShoppingBag, 
  Zap, 
  Code, 
  Monitor, 
  Plus,
  ArrowRight 
} from "lucide-react";

export default function WorkSection() {
  const projects = [
    {
      id: 1,
      title: "Fintrack Dashboard",
      tag: "SAAS",
      description: "A modern financial dashboard designed to track real-time data, analytics, and user insights with clarity and performance.",
      icon: LayoutDashboard,
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Stike E-commerce",
      tag: "WEB",
      description: "A scalable e-commerce platform with a seamless shopping experience, optimized performance, and responsive design.",
      icon: ShoppingBag,
      iconColor: "text-green-600"
    }
  ];

  const tools = [
    { id: 1, icon: Zap, name: "React" },
    { id: 2, icon: Code, name: "Next.js" },
    { id: 3, icon: Monitor, name: "Tailwind" },
    { id: 4, icon: Plus, name: "Figma" }
  ];

  return (
    <section className="">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto border-x border-gray-300 bg-[#F5F5F3]">
        <div className="grid md:grid-cols-2 border-b border-gray-200">
          <div className="p-10 border-r border-gray-200">
            <p className="text-xs tracking-widest text-gray-500 uppercase mb-4">
              Our Work
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-gray-900">
              A selection of projects <br />
              we've designed and built
            </h2>
          </div>

          <div className="p-10 flex items-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Explore some of our recent work across web design, development, and
              digital product experiences.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tag={project.tag}
              description={project.description}
              Icon={project.icon}
              iconColor={project.iconColor}
              tools={tools}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, tag, description, Icon, iconColor, tools }) {
  return (
    <div className=" last:border-r-0 hover:bg-[#EBEBE8] transition-all duration-300 group">
      
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200 bg-[#F5F5F3] group-hover:bg-[#EBEBE8] transition-colors duration-300">
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div className="w-8 h-8 flex items-center justify-center  transition-colors duration-300 rounded-lg">
            <Icon className={`w-5 h-5  group-hover:scale-110 transition-transform duration-300`} />
          </div>

          {/* Title */}
          <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
            {title}
          </h3>
        </div>

        <span className="text-xs border border-gray-300 px-3 py-1.5 rounded-full text-gray-600 bg-[#F5F5F3] group-hover:border-gray-400 group-hover:text-gray-700 transition-all duration-300">
          {tag}
        </span>
      </div>

      {/* Image Placeholder */}
      <div className="h-[320px] bg-gradient-to-br from-[#EBEBE8] to-[#E0E0DC] flex items-center justify-center relative overflow-hidden">
        <div className="w-full h-full bg-[linear-gradient(45deg,#D1D1CB_25%,transparent_25%),linear-gradient(-45deg,#D1D1CB_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#D1D1CB_75%),linear-gradient(-45deg,transparent_75%,#D1D1CB_75%)] bg-[length:40px_40px] bg-[position:0_0,0_20px,20px_-20px,-20px_0px] opacity-40" />
      </div>

      {/* Content */}
      <div className="p-6 bg-[#F5F5F3] group-hover:bg-[#EBEBE8] transition-colors duration-300">
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tools Used:
            </p>

            {/* Icons */}
            <div className="flex gap-2.5">
              {tools.map((tool) => (
                <div 
                  key={tool.id}
                  className="w-7 h-7 bg-[#EBEBE8] rounded-full border border-gray-200 hover:bg-[#E0E0DC] hover:border-gray-300 transition-all duration-200 cursor-pointer flex items-center justify-center group/tool"
                  title={tool.name}
                >
                  <tool.icon className="w-3.5 h-3.5 text-gray-600 group-hover/tool:scale-110 transition-transform duration-200" />
                </div>
              ))}
            </div>
          </div>

          {/* View Case Study Button */}
          <button className="w-full mt-4 px-4 py-3 bg-black text-white border border-gray-300 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 group/btn hover:bg-gray-900">
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
}