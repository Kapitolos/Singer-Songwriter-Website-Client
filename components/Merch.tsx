import React from "react";
import { useCart } from "../contexts/CartContext";
import { IoCart } from "react-icons/io5";
import { assetPath } from "../utils/assetPath";

const vinylProduct = {
  id: 101,
  title: "Even Lines - Limited Edition Vinyl",
  price: 30,
  imageUrl: "/albums/vinyl.jpg",
};
const tshirtProduct = {
  id: 102,
  title: "Even Lines T-Shirt",
  price: 25,
  imageUrl: "/albums/shirt.png",
};
const posterProduct = {
  id: 103,
  title: "Even Lines Poster",
  price: 15,
  imageUrl: "/albums/EL.jpg",
};

export default function Merch() {
  const { addToCart } = useCart();

  return (
    <div className="space-y-8">
      {/* Even Lines Vinyl */}
      <div className="rounded-2xl border border-neutral-600 bg-neutral-800/80 p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="lg:w-1/2">
            <img 
              src={assetPath("/albums/vinyl.jpg")} 
              alt="Even Lines Vinyl" 
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="mb-4 text-2xl font-semibold font-heading text-heading">Even Lines - Limited Edition Vinyl</h3>
            <p className="mb-6 text-neutral-300">
              The big one. Finally got to a studio and decided I needed to get loud. The quiet moments still find their place, but I guess I needed to do something different. Drums were recorded by Jesse Turnball not five minutes after hearing most songs for the first time.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="text-2xl font-bold text-neutral-100">$30 CAD</span>
                <span className="text-sm text-neutral-400">+ shipping</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => addToCart(vinylProduct)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-100 px-8 py-3 font-semibold text-neutral-950 shadow-md transition-colors duration-200 hover:bg-white sm:w-auto"
                >
                  <IoCart size={20} />
                  Add to Cart
                </button>
                <a 
                  href="https://thomasmatthewgibson.bandcamp.com/album/even-lines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-lg bg-neutral-100 px-8 py-3 text-center font-semibold text-neutral-950 shadow-md transition-colors duration-200 hover:bg-white sm:w-auto"
                >
                  Buy on Bandcamp
                </a>
              </div>
              
              <p className="text-sm text-neutral-400">
                Limited edition of 25 • Ships within 3 days • Includes digital download
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* T-Shirt */}
      <div className="rounded-2xl border border-neutral-600 bg-neutral-800/80 p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="lg:w-1/2">
            <img 
              src={assetPath("/albums/shirt.png")} 
              alt="Even Lines T-Shirt" 
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="mb-4 text-2xl font-semibold font-heading text-heading">Even Lines T-Shirt</h3>
            <p className="mb-6 text-neutral-300">
              High-quality cotton t-shirt featuring the Even Lines album artwork. Perfect for showing your support and staying comfortable.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="text-2xl font-bold text-neutral-100">$25 CAD</span>
                <span className="text-sm text-neutral-400">+ shipping</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => addToCart(tshirtProduct)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-100 px-8 py-3 font-semibold text-neutral-950 shadow-md transition-colors duration-200 hover:bg-white sm:w-auto"
                >
                  <IoCart size={20} />
                  Add to Cart
                </button>
              </div>
              
              <p className="text-sm text-neutral-400">
                Available in S, M, L, XL • Ships within 3 days
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Poster */}
      <div className="rounded-2xl border border-neutral-600 bg-neutral-800/80 p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="lg:w-1/2">
            <img 
              src={assetPath("/albums/EL.jpg")} 
              alt="Even Lines Poster" 
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="mb-4 text-2xl font-semibold font-heading text-heading">Even Lines Poster</h3>
            <p className="mb-6 text-neutral-300">
              Beautiful high-quality poster featuring the Even Lines album cover. Perfect for decorating your space with some great music art.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="text-2xl font-bold text-neutral-100">$15 CAD</span>
                <span className="text-sm text-neutral-400">+ shipping</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => addToCart(posterProduct)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-100 px-8 py-3 font-semibold text-neutral-950 shadow-md transition-colors duration-200 hover:bg-white sm:w-auto"
                >
                  <IoCart size={20} />
                  Add to Cart
                </button>
              </div>
              
              <p className="text-sm text-neutral-400">
                18" x 24" • Ships within 3 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 