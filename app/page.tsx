"use client"; // Required for Next.js App Router (client-side rendering)

import React, { useState } from "react";
import albums from "../data/albums/albums"; // Import the album data
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Merch from "../components/Merch";
import News from "../components/News";
import Contact from "../components/Contact";
import Cart from "../components/Cart";
import CrossfadeImage from "../components/CrossfadeImage";
import LyricsBackground from "../components/LyricsBackground";
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

            {/* Crossfade Images */}
            <CrossfadeImage />
          </div>
        );
      case "releases":
        return (
          <div className="bg-black rounded-2xl p-4 md:p-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
              <Carousel albums={albums} />
            </div>
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
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 relative">
          <LyricsBackground />
          <div className="relative z-10">
            <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
            <main className="container mx-auto px-4 py-8 max-w-6xl">
              {renderSection()}
            </main>
            <Cart />
          </div>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
