"use client";

import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { IoCart, IoPerson, IoLogOut } from "react-icons/io5";

type NavbarProps = {
  activeSection: string;
  onSectionChange: (section: string) => void;
};

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const { toggleCart, getTotalItems } = useCart();
  const { state: authState, logout } = useAuth();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "releases", label: "Releases" },
    { id: "merch", label: "Merch" },
    { id: "news", label: "News" },
    { id: "contact", label: "Contact" },
  ];

  return (
         <nav className="bg-white shadow-lg border-b border-amber-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-black">Thomas Matthew Gibson</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "bg-black text-white"
                    : "text-gray-700 hover:text-black hover:bg-amber-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Cart Icon */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-black hover:bg-amber-50 rounded-md transition-colors duration-200"
            >
              <IoCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Auth Controls */}
            {authState.isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  Hi, {authState.user?.displayName || authState.user?.email?.split('@')[0]}
                </span>
                <button
                  onClick={logout}
                  className="p-2 text-gray-700 hover:text-black hover:bg-amber-50 rounded-md transition-colors duration-200"
                  title="Sign Out"
                >
                  <IoLogOut size={20} />
                </button>
              </div>
            ) : (
                                            <button
                 onClick={() => setShowAuth(true)}
                 className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-black hover:bg-amber-50 rounded-md transition-colors duration-200"
               >
                 <IoPerson size={16} />
                 <span>Sign In</span>
               </button>
            )}
          </div>

          {/* Mobile menu button and cart */}
          <div className="md:hidden flex items-center space-x-3">
                         <button
               onClick={toggleCart}
               className="relative p-2 text-gray-700 hover:text-black transition-colors"
             >
              <IoCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {getTotalItems()}
                </span>
              )}
            </button>
                         <button
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="text-gray-700 hover:text-black focus:outline-none focus:text-black"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-amber-100">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                                     className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                     activeSection === item.id
                       ? "bg-black text-white"
                       : "text-gray-700 hover:text-black hover:bg-amber-50"
                   }`}
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