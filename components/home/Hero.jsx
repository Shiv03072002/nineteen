"use client";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { MousePointer2 } from "lucide-react";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorRightX = useMotionValue(220);
  const cursorRightY = useMotionValue(0);
  const cursorOpacity = useMotionValue(0);

  const progress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 6,
      ease: "linear",
      repeat: Infinity,
    });
    return () => controls.stop();
  }, []);

  const circleColor = useTransform(progress, [0, 1], ["#D9D9D6", "#6F6F6F"]);
  const imageColor  = useTransform(progress, [0, 1], ["#F5F5F3", "#D9D9D6"]);

  const box1Color = useTransform(
  progress,
  [0, 0.2, 0.4],
  ["#D9D9D6", "#6F6F6F", "#D9D9D6"]
);

const box2Color = useTransform(
  progress,
  [0.3, 0.5, 0.7],
  ["#D9D9D6", "#6F6F6F", "#D9D9D6"]
);

const box3Color = useTransform(
  progress,
  [0.6, 0.8, 1],
  ["#D9D9D6", "#6F6F6F", "#D9D9D6"]
);

  // Active index cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Column 1 cursor: bottom-center → top-right
  useEffect(() => {
    const animationX = animate(cursorX, [0, 120, 120, 0], {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    });
    const animationY = animate(cursorY, [0, -260, -260, 0], {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    });
    return () => {
      animationX.stop();
      animationY.stop();
    };
  }, []);
  

  useEffect(() => {
  const TOTAL = 2.2;
  const PAUSE = 1.8;

  function runSequence() {
    // Fade in just before motion starts
    animate(cursorOpacity, 1, { duration: 0.18, ease: "easeOut" });

    // Forward animation: from right to left
    const animX = animate(cursorRightX, [620, 180, 68], {
      duration: TOTAL,
      ease: [0.42, 0, 0.28, 1],
      times: [0, 0.45, 1],
    });

    const animY = animate(cursorRightY, [90, 30, 30], {
      duration: TOTAL,
      ease: [0.42, 0, 0.28, 1],
      times: [0, 0.45, 1],
    });

    

    // After forward animation completes, do reverse animation
    const timeout = setTimeout(() => {
      // Reverse animation: from left back to right
      const reverseAnimX = animate(cursorRightX, [68, 180, 620], {
        duration: TOTAL,
        ease: [0.42, 0, 0.28, 1],
        times: [0, 0.55, 1],
      });

      const reverseAnimY = animate(cursorRightY, [30, 30, 90], {
        duration: TOTAL,
        ease: [0.42, 0, 0.28, 1],
        times: [0, 0.55, 1],
      });

      // After reverse completes, fade out and reset
      const reverseTimeout = setTimeout(() => {
        animate(cursorOpacity, 0, { duration: 0.22, ease: "easeIn" }).then(() => {
          // Reset to starting position
          cursorRightX.set(620);
          cursorRightY.set(90);
          // Brief gap before next loop
          setTimeout(runSequence, 300);
        });
      }, TOTAL * 1000);

      return () => {
        reverseAnimX.stop();
        reverseAnimY.stop();
        clearTimeout(reverseTimeout);
      };
    }, TOTAL * 1000 + PAUSE * 1000);

    return () => {
      animX.stop();
      animY.stop();
      clearTimeout(timeout);
    };
  }

  // Initial delay so it doesn't fire immediately on mount
  const init = setTimeout(runSequence, 600);
  return () => clearTimeout(init);
}, []);

  return (
    <section>
      <div className="max-w-7xl mx-auto border-x border-[#11111154] bg-[#F5F5F3]">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2">
          {/* LEFT */}
          <div className="p-14">
            <p className="text-xs tracking-widest uppercase text-[#3A3A3A] mb-4">
              Digital Design & Development Studio
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              We design and build <br />
              high-performing digital <br />
              products
            </h1>
          </div>

          {/* RIGHT */}
          <div className="p-10 flex flex-col justify-center gap-6">
            <p className="text-gray-600 text-lg max-w-md leading-relaxed">
              A design and development studio focused on creating scalable,
              user-focused digital experiences for modern businesses.
            </p>
            <div className="flex gap-4">
              <button className="bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
                Start a Project
              </button>
              <button className="border border-gray-700 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200">
                View Our Work
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM GRID MOCKUP - 30% | 40% | 30% */}
       <div className="grid md:grid-cols-[30%_40%_30%] mx-14 border border-[#11111154] border-b-0">

          {/* COLUMN 1 — 30% - cursor bottom-center → top-right */}
          <div className="border-r border-[#11111154]">
            <div className="flex items-center gap-4 p-4 border-b border-[#11111154] bg-[#F5F5F3]">
  <motion.div
    className="w-4 h-4 bg-red-500 rounded-full"
    animate={{ y: [0, -8, 0] }}
    transition={{
      duration: 1.5, // slower bounce
      repeat: Infinity,
      ease: "easeInOut",
      repeatDelay: 4
    }}
  />
  <motion.div
    className="w-4 h-4 bg-yellow-400 rounded-full"
    animate={{ y: [0, -8, 0] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5,
      repeatDelay: 4
    }}
  />
  <motion.div
    className="w-4 h-4 bg-green-300 rounded-full"
    animate={{ y: [0, -8, 0] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1,
      repeatDelay: 4
    }}
  />
</div>

            <div className="p-4 space-y-4 relative overflow-hidden min-h-[280px]">
              <div className="flex items-center justify-between relative z-10">
                <div className="h-3 bg-[#E6E6E3] w-1/2" />
                <motion.div
                  style={{ backgroundColor: circleColor }}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="h-3 bg-[#D9D9D6] w-60 relative z-10" />

              <motion.div
                style={{ backgroundColor: imageColor }}
                className="h-40 relative z-10 border border-[#11111154]"
              />

              {/* Cursor 1: bottom-center → top-right */}
              <motion.div
                className="absolute pointer-events-none z-20"
                style={{
                  bottom: -40,
                  left: "50%",
                  x: cursorX,
                  y: cursorY,
                  translateX: "-50%",
                }}
              >
                <MousePointer2 className="w-5 h-5 text-gray-700 scale-x-[-1]" />
              </motion.div>
            </div>
          </div>

          {/* COLUMN 2 — 40% */}
          <div className="border-r border-[#11111154]">
            <div className="p-4 border-b border-[#11111154] flex justify-between ">
              <div className="h-3 w-20 bg-[#D9D9D6]" />
              <div className="flex gap-2">
                <div className="w-6 h-4 bg-[#E6E6E3]" />
                <div className="w-6 h-4 bg-[#E6E6E3]" />
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="h-3 bg-[#D9D9D6] w-full" />
              <div className="h-3 bg-[#E6E6E3] w-60 mx-auto" />
              <div className="grid grid-cols-3 gap-4">
                <motion.div className="h-40" style={{ backgroundColor: box1Color }} />
                <motion.div className="h-40" style={{ backgroundColor: box2Color }} />
                <motion.div className="h-40" style={{ backgroundColor: box3Color }} />
              </div>
            </div>
          </div>

          {/* COLUMN 3 — 30% - cursor enters right-center, arcs up, lands top-left */}
          <div>
            <div className="p-4 border-b border-[#11111154]  flex items-center justify-center">
              <div className="h-4 w-32 bg-[#D9D9D6]" />
            </div>

            <div className="p-4 space-y-4 relative overflow-hidden">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 border-b border-[#1111111A] pb-4"
                >
                  <div className="w-10 h-10 bg-[#D9D9D6] rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-[#D9D9D6] w-30" />
                    <div className="h-3 bg-[#E6E6E3] w-2/3" />
                  </div>
                </div>
              ))}

              {/* Cursor 3: right-center → arc up → top-left target */}
              <motion.div
                className="absolute pointer-events-none z-20"
                style={{
                  top: 0,
                  left: 0,
                  x: cursorRightX,
                  y: cursorRightY,
                  opacity: cursorOpacity,
                }}
              >
                <MousePointer2 className="w-5 h-5 text-gray-700" />
              </motion.div>
            </div>
          </div>

        </div>

        {/* TECH STACK BAR */}
        <div className="grid grid-cols-2 md:grid-cols-5 border-t border-[#11111154] bg-[#F5F5F3]">
          {["Figm", "React", "Next.js", "Node.js", "MongoDB"].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2.5 py-5 border-r border-[#11111154] last:border-r-0 hover:bg-gray-100/50 transition-all duration-200 cursor-pointer"
            >
              <div className="w-5 h-5 bg-gray-300 rounded-full" />
              <span className="text-xl text-gray-800 font-medium">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}