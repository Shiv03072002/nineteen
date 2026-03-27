"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "CEO, E-commerce Brand",
    text: "Fast delivery, clean code, and great communication. We'll definitely work with them again.",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Rahul",
  },
  {
    name: "Karthik Reddy",
    role: "Founder, SaaS Startup",
    text: "Working with 1970 Studio was a great experience. They understood our requirements clearly and delivered a product that was visually impressive.",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Karthik",
  },
  {
    name: "Priya Sharma",
    role: "CTO, Tech Solutions",
    text: "Outstanding quality and attention to detail. The team went above and beyond our expectations.",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Priya",
  },
  {
    name: "Amit Patel",
    role: "Marketing Director",
    text: "Incredible work ethic and technical expertise. Highly recommended for any digital project.",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Amit",
  },
  {
    name: "Neha Gupta",
    role: "Product Manager",
    text: "Excellent collaboration and innovative solutions. They truly understand modern web development.",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Neha",
  },
  {
    name: "Vikram Singh",
    role: "Startup Founder",
    text: "The best development experience I've had. Delivered ahead of schedule with perfect execution.",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Vikram",
  },
];

export default function TestimonialsSection() {
  // Create slides that show 4 items at once (2 profiles + 2 testimonials)
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push({
      leftProfile: testimonials[i],
      testimonial1: testimonials[i],
      testimonial2: testimonials[(i + 1) % testimonials.length],
      rightProfile: testimonials[(i + 1) % testimonials.length],
    });
  }

  return (
    <section className=" bg-[#F5F5F3] max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="border-x  border-[#11111154]">
        <div className="flex items-center justify-between border-b  border-[#11111154]">
          {/* Left */}
          <div className="p-10 md:p-16">
            <p className="text-xs tracking-[0.2em] uppercase text-[#3A3A3A] mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-black max-w-sm">
              What our clients say about us
            </h2>
          </div>

          {/* Right */}
          <div className="p-10 md:p-16 mt-6">
            <p className="text-[#3A3A3A] max-w-md">
              We've worked with startups and businesses across industries to deliver impactful digital products.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Swiper */}
      <div className="border-x  border-[#11111154]">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={800}
          allowTouchMove={true}
          spaceBetween={0}
          slidesPerView={1}
          className="testimonials-swiper"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              {/* Use odd/even logic - even index (0,2,4...) = original, odd index (1,3,5...) = reverse */}
              {idx % 2 === 0 ? (
                // Original Layout for even slides
                <div className="grid md:grid-cols-4">
                  {/* Left Profile */}
                  <div className="flex bg-[#FAFAF8] flex-col items-center justify-center p-8 md:p-10 border-r  border-[#11111154] min-h-[400px]">
                    <img
                      src={slide.leftProfile.image}
                      alt={slide.leftProfile.name}
                      className="w-16 h-16 rounded-full object-cover mb-4"
                    />
                    <div className="flex gap-1 text-yellow-500 text-lg">
                      ★ ★ ★ ★ ★
                    </div>
                  </div>

                  {/* Testimonial 1 */}
                  <div className="p-8 md:p-10 border-r  border-[#11111154] flex flex-col justify-between min-h-[400px]">
                    <p className="text-lg text-[#3A3A3A] leading-relaxed mb-8">
                      "{slide.testimonial1.text}"
                    </p>
                    <div>
                      <p className="font-medium text-black">{slide.testimonial1.name}</p>
                      <p className="text-sm text-[#3A3A3A]">{slide.testimonial1.role}</p>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="p-8 md:p-10 border-r  border-[#11111154] flex flex-col justify-between min-h-[400px]">
                    <p className="text-lg text-[#3A3A3A] leading-relaxed mb-8">
                      "{slide.testimonial2.text}"
                    </p>
                    <div>
                      <p className="font-medium text-black">{slide.testimonial2.name}</p>
                      <p className="text-sm text-[#3A3A3A]">{slide.testimonial2.role}</p>
                    </div>
                  </div>

                  {/* Right Profile */}
                  <div className="flex flex-col items-center justify-center p-8 md:p-10 bg-[#FAFAF8] min-h-[400px]">
                    <img
                      src={slide.rightProfile.image}
                      alt={slide.rightProfile.name}
                      className="w-16 h-16 rounded-full object-cover mb-4"
                    />
                    <div className="flex gap-1 text-yellow-500 text-lg">
                      ★ ★ ★ ★ ★
                    </div>
                  </div>
                </div>
              ) : (
                // Reverse Layout for odd slides
                <div className="grid md:grid-cols-4">
                  {/* Right Profile - now first */}
                  <div className="flex flex-col items-center justify-center p-8 md:p-10 bg-[#FAFAF8] border-r  border-[#11111154] min-h-[400px]">
                    <img
                      src={slide.rightProfile.image}
                      alt={slide.rightProfile.name}
                      className="w-16 h-16 rounded-full object-cover mb-4"
                    />
                    <div className="flex gap-1 text-yellow-500 text-lg">
                      ★ ★ ★ ★ ★
                    </div>
                  </div>

                  {/* Testimonial 2 - now second */}
                  <div className="p-8 md:p-10 border-r  border-[#11111154] flex flex-col justify-between min-h-[400px]">
                    <p className="text-lg text-[#3A3A3A] leading-relaxed mb-8">
                      "{slide.testimonial2.text}"
                    </p>
                    <div>
                      <p className="font-medium text-black">{slide.testimonial2.name}</p>
                      <p className="text-sm text-[#3A3A3A]">{slide.testimonial2.role}</p>
                    </div>
                  </div>

                  {/* Testimonial 1 - now third */}
                  <div className="p-8 md:p-10 border-r  border-[#11111154] flex flex-col justify-between min-h-[400px]">
                    <p className="text-lg text-[#3A3A3A] leading-relaxed mb-8">
                      "{slide.testimonial1.text}"
                    </p>
                    <div>
                      <p className="font-medium text-black">{slide.testimonial1.name}</p>
                      <p className="text-sm text-[#3A3A3A]">{slide.testimonial1.role}</p>
                    </div>
                  </div>

                  {/* Left Profile - now last */}
                  <div className="flex bg-[#FAFAF8] flex-col items-center justify-center p-8 md:p-10 min-h-[400px]">
                    <img
                      src={slide.leftProfile.image}
                      alt={slide.leftProfile.name}
                      className="w-16 h-16 rounded-full object-cover mb-4"
                    />
                    <div className="flex gap-1 text-yellow-500 text-lg">
                      ★ ★ ★ ★ ★
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}