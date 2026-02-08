"use client"; // Required for Next.js App Router (client-side rendering)

import React, { useState } from "react";
import albums from "../data/albums/albums"; // Import the album data
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Merch from "../components/Merch";
import News from "../components/News";
import Contact from "../components/Contact";
import Cart from "../components/Cart";
import { CartProvider } from "../contexts/CartContext";
import { AuthProvider } from "../contexts/AuthContext";


export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="space-y-8">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
                  Thomas Matthew Gibson
                </h1>
              </div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
                Singer/Songwriter from Nova Scotia
              </p>
            </div>

            {/* Tub Image */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
              <div className="flex justify-center">
                <img 
                  src="/albums/Tub.jpg" 
                  alt="Tub" 
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        );
      case "releases":
        return (
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
            <h2 className="text-2xl font-bold text-black mb-6 text-center">Latest Releases</h2>
            <Carousel albums={albums} />
          </div>
        );
      case "merch":
        return <Merch />;
      case "news":
        return <News />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
          <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
          <main className="container mx-auto px-4 py-8 max-w-6xl">
            {renderSection()}
          </main>
          <Cart />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
