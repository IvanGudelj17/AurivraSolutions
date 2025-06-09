'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-6 px-6 md:px-20 bg-white shadow-sm fixed top-0 z-50">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Aurivra
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link
            href="/"
            className="hover:text-gray-900 hover:underline underline-offset-4 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-gray-900 hover:underline underline-offset-4 transition duration-300"
          >
            About
          </Link>
          <Link
            href="#services"
            className="hover:text-gray-900 hover:underline underline-offset-4 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="#how-to-start"
            className="hover:text-gray-900 hover:underline underline-offset-4 transition duration-300"
          >
            How to Start
          </Link>
          <Link
            href="#contact"
            className="hover:text-gray-900 hover:underline underline-offset-4 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none transition duration-300"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {!isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden mt-4 bg-white shadow-lg rounded-lg py-6 px-6 text-center space-y-6 transition-all duration-300`}
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="block text-gray-700 font-medium hover:text-gray-900 hover:underline underline-offset-4 transition duration-300"
        >
          Home
        </Link>
        <Link
          href="#about"
          onClick={() => setIsOpen(false)}
          className="block text-gray-700 font-medium hover:text-gray-900 hover:underline underline-offset-4 transition duration-300"
        >
          About
        </Link>
        <Link
          href="#services"
          onClick={() => setIsOpen(false)}
          className="block text-gray-700 font-medium hover:text-gray-900 hover:underline underline-offset-4 transition duration-300"
        >
          Services
        </Link>
        <Link
          href="#how-to-start"
          onClick={() => setIsOpen(false)}
          className="block text-gray-700 font-medium hover:text-gray-900 hover:underline underline-offset-4 transition duration-300"
        >
          How to Start
        </Link>
        <Link
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="block text-gray-700 font-medium hover:text-gray-900 hover:underline underline-offset-4 transition duration-300"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
