"use client";

import React from "react";
import { useCart } from "../contexts/CartContext";
import { IoCart } from "react-icons/io5";

const vinylProduct = {
  id: 101,
  title: "Even Lines - Limited Edition Vinyl",
  price: 30,
  imageUrl: "/albums/vinyl.jpg",
};

type NewsItem = {
  id: number;
  date: string;
  title: string;
  content: string;
  link?: string;
  linkText?: string;
  type: "post" | "video";
  videoId?: string;
  imageUrl?: string;
  showAddToCart?: boolean;
  price?: number;
};

export default function News() {
  const { addToCart } = useCart();

  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: "October 24, 2024",
      title: "Even Lines Vinyl Now Available",
      content: "Limited edition vinyl of 'Even Lines' is now available for purchase.",
      type: "post",
      imageUrl: "/albums/vinyl.jpg",
      showAddToCart: true,
      price: 30,
    },
    {
      id: 2,
      date: "October 2024",
      title: "Even Lines Album Release",
      content: "The new album 'Even Lines' is now available on all streaming platforms.",
      link: "https://open.spotify.com/artist/5YBhQGrVd7HtLkJSwAoE4W?si=_x8JSSXBQQ6qpLr0pDELWA",
      linkText: "Listen on Spotify",
      type: "post",
      imageUrl: "/albums/EL.jpg"
    },
    {
      id: 5,
      date: "October 2024",
      title: "Hello Mary Hello Nothing",
      content: "This acoustic performance was captured just moments after the song was written.",
      type: "video",
      videoId: "WlpLONr1oHQ"
    },
    {
      id: 6,
      date: "October 2024",
      title: "Lakeview five-year anniversary",
      content: "A performance of \"Nothing happens\" from the Lakeview EP on its fifth anniversary.",
      type: "video",
      videoId: "kFS_rlyqqKA"
    },
    {
      id: 3,
      date: "December 2023",
      title: "Crossing Single Release",
      content: "",
      link: "https://thomasmatthewgibson.bandcamp.com/album/crossing",
      linkText: "Listen on Bandcamp",
      type: "post",
      imageUrl: "/albums/Crossing.jpg"
    },
    {
      id: 4,
      date: "February 2022",
      title: "Hello Mary Hello Nothing EP",
      content: "",
      link: "https://thomasmatthewgibson.bandcamp.com/album/hello-mary-hello-nothing",
      linkText: "Listen on Bandcamp",
      type: "post",
      imageUrl: "/albums/HMHN.jpg"
    }
  ];

  // Sort by date (most recent first) - simple string comparison should work for these date formats
  const sortedItems = [...newsItems].sort((a, b) => {
    // Convert dates to comparable format (approximate)
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        {sortedItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-xl p-6 border border-amber-100">
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
              <div className="lg:w-1/4">
                <div className="text-sm text-gray-500 font-medium mb-3">{item.date}</div>
                {item.imageUrl && (
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg shadow-md"
                  />
                )}
              </div>
              <div className="lg:w-3/4">
                <h3 className="text-xl font-semibold text-black mb-3">{item.title}</h3>
                {item.content ? (
                  <p className="text-gray-700 mb-4 leading-relaxed">{item.content}</p>
                ) : null}
                
                {item.showAddToCart && item.price != null && (
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="text-xl font-bold text-black">${item.price} CAD</span>
                    <span className="text-sm text-gray-500">+ shipping</span>
                    <button
                      onClick={() => addToCart(vinylProduct)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      <IoCart size={20} />
                      Add to Cart
                    </button>
                  </div>
                )}
                
                {item.type === "video" && item.videoId && (
                  <div className="mb-4">
                    <div className="relative w-full" style={{ paddingBottom: '47.8%' }}>
                      <iframe 
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${item.videoId}?si=-kCeKt2Pnf1H9wgb`}
                        title={item.title}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
                
                {item.link && item.linkText && !item.showAddToCart && (
                  <a 
                    href={item.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    {item.linkText}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-black mb-4">Stay Connected</h3>
          <p className="text-gray-700 mb-6">
            Get notified about new releases, upcoming shows, and exclusive content.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 