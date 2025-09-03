"use client";

import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { IoClose, IoAdd, IoRemove, IoTrash } from 'react-icons/io5';
import StripeCheckout from './StripeCheckout';

export default function Cart() {
  const { state, closeCart, removeItem, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!state.isOpen) return null;

  return (
    <>
               {showCheckout ? (
           <StripeCheckout onBackToCart={() => setShowCheckout(false)} />
         ) : (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeCart}
          />
          
          {/* Cart Panel */}
                                                                 <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Shopping Cart</h2>
                <button
                  onClick={closeCart}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <IoClose size={24} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {state.items.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                      <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <p className="text-gray-500">Your cart is empty</p>
                    <p className="text-sm text-gray-400">Add some merchandise to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900 truncate">{item.name}</h3>
                          <p className="text-sm text-gray-500">${item.price} CAD</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <IoRemove size={16} />
                          </button>
                          <span className="text-sm font-medium text-gray-900 w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <IoAdd size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-red-400 hover:text-red-600 transition-colors"
                        >
                          <IoTrash size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {state.items.length > 0 && (
                <div className="border-t border-gray-200 p-6 space-y-4">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${getTotalPrice()} CAD</p>
                  </div>
                  <p className="text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  
                  <div className="space-y-3">
                                             <button
                           onClick={() => setShowCheckout(true)}
                           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                         >
                                                       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                            <span>Proceed to Secure Checkout</span>
                         </button>
                    <button
                      onClick={clearCart}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
