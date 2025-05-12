// components/Header.tsx

"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons
import Link from "next/link";
import { Button } from "../ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Company", href: "/company" },
  { name: "Contact", href: "/contact" },
  { name: "Career", href: "/career" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white ">
      <div className="max-w-7xl mx-auto  px-4 md:px-0 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <img
            src="/images/logo/shootorder.webp"
            alt="Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-primary transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden md:block">
          <Button variant="default">
            Get In Touch
          </Button>
        </Link>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white px-4 pb-4 pt-2 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block py-2 text-gray-800 hover:text-primary"
          >
            {link.name}
          </Link>
        ))}
        <Link href="/contact">
          <Button variant="default">
            Get In Touch
          </Button>
        </Link>
      </div>
    </header>
  );
}
