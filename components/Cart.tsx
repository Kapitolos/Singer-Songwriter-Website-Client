"use client";

import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { IoClose, IoAdd, IoRemove, IoTrash } from 'react-icons/io5';
import StripeCheckout from './StripeCheckout';
import { assetPath } from '../utils/assetPath';

export default function Cart() {
  const { state, closeCart, removeFromCart, updateQuantity, clearCart } = useCart();
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
          <div className="font-cart-checkout absolute right-0 top-0 h-full w-full max-w-md border-l border-neutral-700 bg-neutral-900 text-neutral-100 shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-700 p-6">
                <h2 className="text-lg font-semibold">Shopping Cart</h2>
                <button
                  onClick={closeCart}
                  className="text-neutral-400 transition-colors hover:text-neutral-200"
                >
                  <IoClose size={24} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {state.items.length === 0 ? (
                  <div className="py-12 text-center">
                    <div className="mb-4 text-neutral-500">
                      <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <p className="text-neutral-400">Your cart is empty</p>
                    <p className="text-sm text-neutral-500">Add some merchandise to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {state.items.map((item) => (
                      <div key={item.product.id} className="flex items-center space-x-4 rounded-lg border border-neutral-700 bg-neutral-800/60 p-4">
                        <img
                          src={assetPath(item.product.imageUrl)}
                          alt={item.product.title}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="truncate text-sm font-medium text-neutral-100">{item.product.title}</h3>
                          <p className="text-sm text-neutral-400">${item.product.price} CAD</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 text-neutral-400 transition-colors hover:text-neutral-200"
                          >
                            <IoRemove size={16} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-neutral-100">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 text-neutral-400 transition-colors hover:text-neutral-200"
                          >
                            <IoAdd size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
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
                <div className="space-y-4 border-t border-neutral-700 p-6">
                  <div className="flex justify-between text-base font-medium text-neutral-100">
                    <p>Subtotal</p>
                    <p>${state.totalPrice.toFixed(2)} CAD</p>
                  </div>
                  <p className="text-sm text-neutral-400">Shipping and taxes calculated at checkout.</p>
                  
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
                      className="w-full rounded-lg border border-neutral-600 bg-neutral-800 py-2 px-4 font-medium text-neutral-200 transition-colors duration-200 hover:bg-neutral-700"
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
