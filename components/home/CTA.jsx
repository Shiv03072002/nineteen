"use client";
import { motion } from "framer-motion";
import { MousePointer2

 } from "lucide-react";
const animation = {
  duration: 4,
  ease: "easeInOut",
  repeat: Infinity,
};

export default function CTASection() {
  return (
    <section className="bg-[#F5F5F3]">
      <div className="max-w-7xl mx-auto border-x border-gray-200">
        
        {/* TOP CTA */}
        <div className="relative text-center py-20 px-6 md:px-10 border-b border-gray-200 overflow-hidden">
          
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">
            Let's Work Together
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
            Let's build your next <br /> digital product
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
            We design and develop scalable, high-performing digital products
            tailored to your business goals.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button className="bg-gray-900 text-white px-6 py-3 text-sm font-medium">
              Start a Project
            </button>
            <button className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700">
              Contact Us
            </button>
          </div>

          {/* Floating Card */}
          <motion.div
            className="hidden md:block absolute right-0 top-0 border border-t-0  border-[#11111154] w-70  overflow-hidden"
            animate={{
              y: ["-120%", "0%", "0%", "-120%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={animation}
          >

            {/* Cursor */}
            <motion.div
  className="absolute bottom-0 left-0"
  initial={{
    y: 120,
    opacity: 0,
  }}
  animate={{
    x: [0, 70, 70, 0],   // increased from 40 → 60 (little right)
    y: [120, -50, -50, 120],
    opacity: [0, 1, 1, 0],
  }}
  transition={animation}
>
  <MousePointer2 
    size={18} 
    className="text-black fill-black scale-x-[-1]"
  />
</motion.div>

            {/* Button */}
            <motion.div className="flex justify-center py-3 border-b border-[#11111154]">
  <motion.div
    className="w-full mx-4 border text-sm py-2 text-center"
    animate={{
      backgroundColor: [
        "#ffffff",  // default white
        "#ffffff",
        "#111111",  // cursor reaches → black
        "#111111",
        "#ffffff",  // reverse → white
      ],
      color: [
        "#111111",  // default black text
        "#111111",
        "#ffffff",  // cursor reaches → white text
        "#ffffff",
        "#111111",  // reverse
      ],
    }}
    transition={animation}
  >
    Start a Project
  </motion.div>
</motion.div>

            {/* Dots */}
            <div className="flex justify-center py-4">
              <div className="w-1/2 flex justify-center gap-2 py-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
            </div>

          </motion.div>

        </div>

        {/* Browser Bar */}
        <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-gray-200">

          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <div className="flex gap-6">
            <motion.div
              className="w-12 h-3"
              animate={{
                y: [6, 0, 6],
                backgroundColor: [
                  "#f3f4f6",
                  "#d1d5db",
                  "#f3f4f6",
                ],
              }}
              transition={animation}
            />
            <div className="w-12 h-3 bg-gray-200" />
            <div className="w-12 h-3 bg-gray-200" />
            <div className="w-12 h-3 bg-gray-200" />
          </div>

          <div className="flex gap-2">
            <div className="w-8 h-3 bg-gray-200" />
            <div className="w-8 h-3 bg-gray-900" />
          </div>

        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2">

          {/* Left Content */}
          <div className="p-10 overflow-hidden">

            <motion.div
              className="space-y-4"
              animate={{
                x: ["-120%", "0%", "0%", "-120%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={animation}
            >
              <div className="h-6 bg-gray-200 w-full" />
              <div className="h-5 bg-gray-200 w-30" />
              <div className="h-3 bg-gray-200 w-full" />
              <div className="h-3 bg-gray-200 w-90" />
            </motion.div>

            <motion.div
              className="mt-8"
              animate={{
                y: ["100%", "0%", "0%", "100%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={animation}
            >
              <div className="w-40 h-10 bg-gray-900" />
            </motion.div>

          </div>

          {/* Right Card */}
          <div className="p-10 overflow-hidden">

            <motion.div
              className="h-56 bg-[#D9D9D6] mb-4 flex items-end p-4"
              animate={{
                y: ["120%", "0%", "0%", "120%"],
              }}
              transition={animation}
            >
              <div className="flex gap-4 w-full">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="h-10 bg-[#F5F5F3] flex-1"
                    animate={{
                      x: ["120%", "0%", "0%", "120%"],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={animation}
                  />
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}