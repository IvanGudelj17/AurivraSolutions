'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full py-6 px-6 md:px-20 bg-white shadow-sm fixed top-0 z-50">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Aurivra
        </div>

        {/* Links */}
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
      </nav>
    </header>
  );
}
