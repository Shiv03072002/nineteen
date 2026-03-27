import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F5F5F3]  ">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col lg:flex-row border-x  border-[#11111154]">

          {/* Col 1 — Brand (33% width) */}
          <div className="w-full lg:w-[33%] py-12 pr-0 pl-[20px] flex flex-col justify-between gap-10 border-b lg:border-b-0 lg:border-r  border-[#11111154]">
            <div className="flex flex-col gap-2">
              {/* Badge */}
              <span className="inline-block border border-gray-400 text-black text-[12px] tracking-[0.14em] uppercase px-3 py-0.75 w-fit rounded-full">
                Build. Scale. Launch.
              </span>

              {/* Logo */}
              <p className="text-[32px] font-extrabold tracking-[0.08em] uppercase text-black">
                1970 Studio
              </p>

              {/* Tagline */}
              <p className="text-[15px] text-[#3A3A3A] leading-relaxed max-w-lg">
                A design and development studio building modern, scalable
                digital products.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6 mt-8">
              {["LinkedIn", "Instagram", "YouTube"].map((s) => (
                <Link
                  key={s}
                  href="#"
                  className="text-[14px] text-gray-600 hover:text-black transition-colors duration-200"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Remaining columns (67% width) */}
          <div className="w-full lg:w-[67%] flex flex-col md:flex-row">
            
            {/* Col 2 — Services */}
            <div className="flex-1 py-12 lg:px-10 flex flex-col gap-6 bg-[#FAFAF8] border-b md:border-b-0 md:border-r  border-[#11111154]">
              <p className="text-[12px] font-medium tracking-[0.18em] uppercase text-black">
                Services
              </p>
              <nav className="flex flex-col gap-4">
                {[
                  "UI/UX Design",
                  "Web Development",
                  "SaaS Products",
                  "Performance Optimization",
                ].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-[15px] text-[#3A3A3A] hover:text-black transition-colors duration-200"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Col 3 — Company */}
            <div className="flex-1 py-12 lg:px-10 flex flex-col gap-6 bg-[#FAFAF8] border-b md:border-b-0 md:border-r  border-[#11111154]">
              <p className="text-[12px] font-medium tracking-[0.18em] uppercase text-black">
                Company
              </p>
              <nav className="flex flex-col gap-4">
                {["Work", "Services", "Process", "About"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-[15px] text-[#3A3A3A] hover:text-black transition-colors duration-200"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Col 4 — Contact */}
            <div className="flex-1 py-12 pr-[60px] lg:px-10 flex flex-col gap-6 bg-[#FAFAF8]">
              <p className="text-[12px] font-medium tracking-[0.18em] uppercase text-black">
                Contact
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "contact@1970studio.com",
                  "+91 1234567890",
                  "India",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-[15px] text-[#3A3A3A]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t  border-[#11111154]">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-5">
          <p className="text-[14px] text-[#3A3A3A] text-center">
            © 2026 1970 Studio | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}