"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { handleBookClick } from "@/utils/booking";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const sectionIds = ['about', 'shows', 'cast', 'venue'];
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (section: string) => {
    return activeSection === section;
  };
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white bg-opacity-95 shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div></div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about">
                <span className={`transition-colors ${
                  isActive('about') 
                    ? "text-[var(--charlie-blue)] font-medium" 
                    : scrolled ? "text-gray-700" : "text-white"
                }`}>
                  About
                </span>
              </Link>
              <Link href="#shows">
                <span className={`transition-colors ${
                  isActive('shows') 
                    ? "text-[var(--charlie-blue)] font-medium" 
                    : scrolled ? "text-gray-700" : "text-white"
                }`}>
                  Shows
                </span>
              </Link>
              <Link href="#cast">
                <span className={`transition-colors ${
                  isActive('cast') 
                    ? "text-[var(--charlie-blue)] font-medium" 
                    : scrolled ? "text-gray-700" : "text-white"
                }`}>
                  Cast
                </span>
              </Link>
              <Link href="#venue">
                <span className={`transition-colors ${
                  isActive('venue') 
                    ? "text-[var(--charlie-dark-blue)] font-medium" 
                    : scrolled ? "text-gray-700" : "text-white"
                }`}>
                  Venue
                </span>
              </Link>
              <button className="btn-charlie text-white text-sm py-2 px-4" onClick={() => handleBookClick('Navbar')}>
                Get Tickets
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-lg focus:outline-none ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 pt-16 bg-white bg-opacity-98">
          <div className="flex flex-col items-center p-8 space-y-6">
            <Link href="#about" onClick={closeMobileMenu}>
              <span className={`text-lg font-medium transition-colors ${
                isActive('about') ? "text-[var(--charlie-blue)]" : "text-gray-700"
              }`}>
                About
              </span>
            </Link>
            <Link href="#shows" onClick={closeMobileMenu}>
              <span className={`text-lg font-medium transition-colors ${
                isActive('shows') ? "text-[var(--charlie-blue)]" : "text-gray-700"
              }`}>
                Shows
              </span>
            </Link>
            <Link href="#cast" onClick={closeMobileMenu}>
              <span className={`text-lg font-medium transition-colors ${
                isActive('cast') ? "text-[var(--charlie-blue)]" : "text-gray-700"
              }`}>
                Cast
              </span>
            </Link>
            <Link href="#venue" onClick={closeMobileMenu}>
              <span className={`text-lg font-medium transition-colors ${
                isActive('venue') ? "text-[var(--charlie-blue)]" : "text-gray-700"
              }`}>
                Venue
              </span>
            </Link>
            <button className="btn-charlie text-white py-3 px-8 w-full max-w-xs mt-4" onClick={() => handleBookClick('Navbar')}>
              Get Tickets
            </button>
          </div>
        </div>
      )}
    </>
  );
}