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
import SectionPanel from "../components/SectionPanel";
import { CartProvider } from "../contexts/CartContext";
import { AuthProvider } from "../contexts/AuthContext";

function DesktopPlaceholderPanel() {
  return (
    <div className="flex min-h-[12rem] flex-col justify-center py-2">
      <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-2">
        Right column
      </p>
      <p className="text-lg text-neutral-300 leading-relaxed">
        Placeholder copy for the desktop home view. Choose a section from the navigation above
        to show releases, merch, news, or contact here.
      </p>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("releases");

  const homeHero = (
    <div className="space-y-8 md:space-y-6">
      <div className="text-center md:text-left mb-8 md:mb-0">
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl">
            Thomas Matthew Gibson
          </h1>
        </div>
        <p className="text-lg text-neutral-300 max-w-2xl md:max-w-none mx-auto md:mx-0 mb-6 md:mb-0">
          Singer/Songwriter from Nova Scotia
        </p>
      </div>
      <CrossfadeImage />
    </div>
  );

  const renderNonHomeSection = () => {
    switch (activeSection) {
      case "releases":
        return (
          <SectionPanel>
            <Carousel albums={albums} />
          </SectionPanel>
        );
      case "merch":
        return (
          <SectionPanel>
            <Merch />
          </SectionPanel>
        );
      case "news":
        return (
          <SectionPanel>
            <News />
          </SectionPanel>
        );
      case "contact":
        return (
          <SectionPanel>
            <Contact />
          </SectionPanel>
        );
      default:
        return null;
    }
  };

  const desktopRightPanel =
    activeSection === "home" ? (
      <SectionPanel>
        <DesktopPlaceholderPanel />
      </SectionPanel>
    ) : (
      renderNonHomeSection()
    );

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-black text-neutral-100 relative">
          <LyricsBackground />
          <div className="relative z-10">
            <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
            <main className="container mx-auto px-4 py-8 max-w-6xl md:max-w-7xl md:min-h-[calc(100dvh-11rem)]">
              {/* Mobile: unchanged — one column, full section switch */}
              <div className="md:hidden">
                {activeSection === "home" ? homeHero : renderNonHomeSection()}
              </div>

              {/* Desktop: fixed row height so right panel matches Releases dimensions; inner scrollbars, not page growth */}
              <div className="hidden md:grid md:h-[calc(100dvh-11rem)] md:max-h-[calc(100dvh-11rem)] md:grid-cols-[3fr_7fr] md:gap-10 md:items-stretch">
                <div className="min-h-0 min-w-0 overflow-y-auto overscroll-contain md:pr-1">
                  {homeHero}
                </div>
                <div className="flex min-h-0 min-w-0 flex-col md:h-full md:max-h-full md:pr-1">
                  {desktopRightPanel}
                </div>
              </div>
            </main>
            <Cart />
          </div>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
