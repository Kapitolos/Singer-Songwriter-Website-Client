"use client";

import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { IoCart } from "react-icons/io5";
import { assetPath } from "../utils/assetPath";

type NavbarProps = {
  activeSection: string;
  onSectionChange: (section: string) => void;
};

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, state } = useCart();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "releases", label: "Releases" },
    { id: "merch", label: "Merch" },
    { id: "news", label: "News" },
    { id: "contact", label: "Contact" },
  ];

  const desktopNavItems = navItems.filter((item) => item.id !== "home");

  return (
    <nav className="relative shadow-lg border-b-4 border-white sticky top-0 z-50 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black pointer-events-none" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45 pointer-events-none"
        style={{ backgroundImage: `url(${assetPath("/albums/flowers.png")})` }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center h-20 md:h-32">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {desktopNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className="px-4 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 text-white drop-shadow-lg"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Cart Icon */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={toggleCart}
              className="relative p-2 text-white hover:text-white hover:bg-black hover:bg-opacity-50 rounded-md transition-colors duration-200 drop-shadow-lg"
            >
              <IoCart size={24} />
              {state.totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {state.totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button and cart */}
          <div className="md:hidden flex items-center space-x-3">
                         <button
               onClick={toggleCart}
               className="relative p-2 text-white hover:text-white hover:bg-black hover:bg-opacity-50 transition-colors drop-shadow-lg"
             >
              <IoCart size={24} />
              {state.totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {state.totalItems}
                </span>
              )}
            </button>
                         <button
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="text-white hover:text-white focus:outline-none focus:text-white drop-shadow-lg"
             >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-neutral-600 bg-black/90 px-2 pb-3 pt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 text-white hover:text-white hover:bg-white hover:bg-opacity-20"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 