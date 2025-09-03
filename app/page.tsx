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
              
              {/* Spotify Link */}
              <div className="mb-8">
                <a 
                  href="https://open.spotify.com/artist/5YBhQGrVd7HtLkJSwAoE4W?si=_x8JSSXBQQ6qpLr0pDELWA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Listen on Spotify
                </a>
              </div>
            </div>

            {/* Featured Video */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-black mb-2">Hello Mary Hello Nothing</h2>
                <p className="text-gray-600">Latest Performance</p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/WlpLONr1oHQ?si=-kCeKt2Pnf1H9wgb" 
                    title="Hello Mary Hello Nothing - Performance" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Featured Release */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-black mb-2">Latest Release</h2>
                <p className="text-gray-600">Even Lines - Now Available</p>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                <div className="lg:w-1/2">
                  <img 
                    src="/albums/EL.jpg" 
                    alt="Even Lines" 
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-2xl font-semibold text-black mb-4">Even Lines</h3>
                  <p className="text-gray-700 mb-6">
                    The big one. Finally got to a studio and decided I needed to get loud. The quiet moments still find their place, but I guess I needed to do something different. Drums were recorded by Jesse Turnball not five minutes after hearing most songs for the first time.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <a 
                      href="https://open.spotify.com/artist/5YBhQGrVd7HtLkJSwAoE4W?si=_x8JSSXBQQ6qpLr0pDELWA"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                      Listen on Spotify
                    </a>
                    <a 
                      href="https://thomasmatthewgibson.bandcamp.com/album/even-lines"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      Buy on Bandcamp
                    </a>
                  </div>
                </div>
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
