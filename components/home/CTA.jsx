
export default function CTASection() {
  return (
    <section className="bg-[#F5F5F3]">
      <div className="max-w-7xl mx-auto border-x border-gray-200">
        {/* TOP CTA */}
        <div className="relative text-center py-20 px-6 md:px-10 border-b border-gray-200">
          
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
            <button className="bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
              Start a Project
            </button>
            <button className="border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200">
              Contact Us
            </button>
          </div>

          {/* Floating Card (Right) */}
          <div className="hidden md:block absolute right-10 top-10 border border-gray-200 w-64 bg-white shadow-lg">
            
            <div className="bg-gray-900 text-white text-sm py-3 text-center">
              Start a Project
            </div>

            <div className="p-4 border-t border-gray-200 flex items-center justify-between">
              <span className="text-xl">✈️</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
            </div>

          </div>
        </div>

        {/* BROWSER BAR */}
        <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-gray-200 bg-white">
          
          {/* Left dots */}
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          {/* Middle nav */}
          <div className="flex gap-6">
            <div className="w-16 h-3 bg-gray-400 rounded" />
            <div className="w-12 h-3 bg-gray-200 rounded" />
            <div className="w-12 h-3 bg-gray-200 rounded" />
            <div className="w-12 h-3 bg-gray-200 rounded" />
          </div>

          {/* Right */}
          <div className="flex gap-2">
            <div className="w-6 h-6 bg-gray-200 rounded" />
            <div className="w-6 h-6 bg-gray-900 rounded" />
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="p-10  bg-white">
            <div className="space-y-4">
              <div className="h-6 bg-gray-200  w-full" />
              <div className="h-5 bg-gray-200  w-30" />
              <div className="h-3 bg-gray-200  w-full" />
              <div className="h-3 bg-gray-200  w-90" />
            </div>

            <div className="mt-8">
              <div className="w-40 h-10 bg-gray-900 rounded" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="p-10 bg-white">
            <div className="h-56 bg-gray-200 rounded mb-4" />
            <div className="flex gap-4">
              <div className="h-10 bg-gray-200 rounded flex-1" />
              <div className="h-10 bg-gray-200 rounded flex-1" />
              <div className="h-10 bg-gray-200 rounded flex-1" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}