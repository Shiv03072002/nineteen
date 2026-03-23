"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation menu items
  const navItems = [
    { name: "Services", href: "#" },
    { name: "Why Us", href: "#" },
    { name: "Work", href: "#" },
    { name: "Process", href: "#" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="w-full bg-[#F7F7F5] border-b border-[#11111133] sticky top-0 z-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex items-center justify-between py-4 md:py-6">
            {/* Logo - Left */}
            <p className="text-[16px] sm:text-[18px] font-semibold tracking-[0.08em]">
              1970 STUDIO
            </p>

            {/* Center Links - Desktop */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10 text-[13px] lg:text-[14px] text-[#3A3A3A] absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="hover:text-black transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right Side - Button & Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Desktop Button */}
              <button className="hidden md:block bg-black text-white px-5 py-2.5 text-[14px] hover:bg-gray-800 transition-colors">
                Start Project
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="p-2 hover:bg-gray-100 transition-colors md:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slider Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white border-l border-gray-200 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close button inside slider */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">

         <h1 className="text-[16px] sm:text-[18px] font-semibold tracking-[0.08em]">
              1970 STUDIO
            </h1>

          <button
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="px-6 py-4 text-[14px] text-[#3A3A3A] hover:text-black hover:bg-gray-50 transition-colors border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="p-4 border-b border-gray-200">
          <button
            className="w-full bg-black text-white px-4 py-3 text-[14px] hover:bg-gray-800 transition-colors text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Start Project
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
