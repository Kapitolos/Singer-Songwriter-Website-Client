import React from "react";
import { useCart } from "../contexts/CartContext";
import { IoCart } from "react-icons/io5";

export default function Merch() {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: "even-lines-vinyl",
      name: "Even Lines - Limited Edition Vinyl",
      price: 30,
      image: "/albums/vinyl.jpg",
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-2">Merchandise</h2>
        <p className="text-gray-600">Limited edition vinyl and merchandise available now</p>
      </div>

      {/* Even Lines Vinyl */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="lg:w-1/2">
            <img 
              src="/albums/vinyl.jpg" 
              alt="Even Lines Vinyl" 
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-black mb-4">Even Lines - Limited Edition Vinyl</h3>
            <p className="text-gray-700 mb-6">
              The big one. Finally got to a studio and decided I needed to get loud. The quiet moments still find their place, but I guess I needed to do something different. Drums were recorded by Jesse Turnball not five minutes after hearing most songs for the first time.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="text-2xl font-bold text-black">$30 CAD</span>
                <span className="text-sm text-gray-500">+ shipping</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full sm:w-auto px-8 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <IoCart size={20} />
                  Add to Cart
                </button>
                <a 
                  href="https://thomasmatthewgibson.bandcamp.com/album/even-lines"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-center"
                >
                  Buy on Bandcamp
                </a>
              </div>
              
              <p className="text-sm text-gray-500">
                Limited edition of 25 • Ships within 3 days • Includes digital download
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* T-Shirt */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="lg:w-1/2">
            <img 
              src="/albums/vinyl.jpg" 
              alt="Even Lines T-Shirt" 
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-black mb-4">Even Lines T-Shirt</h3>
            <p className="text-gray-700 mb-6">
              High-quality cotton t-shirt featuring the Even Lines album artwork. Perfect for showing your support and staying comfortable.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="text-2xl font-bold text-black">$25 CAD</span>
                <span className="text-sm text-gray-500">+ shipping</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => addItem({
                    id: "even-lines-tshirt",
                    name: "Even Lines T-Shirt",
                    price: 25,
                    image: "/albums/vinyl.jpg",
                  })}
                  className="w-full sm:w-auto px-8 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <IoCart size={20} />
                  Add to Cart
                </button>
              </div>
              
              <p className="text-sm text-gray-500">
                Available in S, M, L, XL • Ships within 3 days
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Poster */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="lg:w-1/2">
            <img 
              src="/albums/EL.jpg" 
              alt="Even Lines Poster" 
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-black mb-4">Even Lines Poster</h3>
            <p className="text-gray-700 mb-6">
              Beautiful high-quality poster featuring the Even Lines album cover. Perfect for decorating your space with some great music art.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="text-2xl font-bold text-black">$15 CAD</span>
                <span className="text-sm text-gray-500">+ shipping</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => addItem({
                    id: "even-lines-poster",
                    name: "Even Lines Poster",
                    price: 15,
                    image: "/albums/EL.jpg",
                  })}
                  className="w-full sm:w-auto px-8 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <IoCart size={20} />
                  Add to Cart
                </button>
              </div>
              
              <p className="text-sm text-gray-500">
                18" x 24" • Ships within 3 days
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-black mb-4">More Merch Coming Soon</h3>
          <p className="text-gray-700 mb-6">
            Stay tuned for more merchandise including hoodies, stickers, and other limited edition items.
          </p>
        </div>
      </div>
    </div>
  );
} 