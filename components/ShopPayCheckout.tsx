"use client";

import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { shopifyConfig } from '../config/shopify';
import { assetPath } from '../utils/assetPath';
import { IoArrowBack, IoCheckmarkCircle, IoCard, IoShield } from 'react-icons/io5';

interface ShopPayCheckoutProps {
  onBackToCart: () => void;
}

export default function ShopPayCheckout({ onBackToCart }: ShopPayCheckoutProps) {
  const { state, closeCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const totalPrice = state.totalPrice;
  const shippingCost = 15; // Fixed shipping cost
  const taxRate = 0.15; // 15% tax rate
  const taxAmount = totalPrice * taxRate;
  const finalTotal = totalPrice + shippingCost + taxAmount;

  // Convert cart items to Shopify line items
  const getShopifyLineItems = () => {
    return state.items.map(item => ({
      variant_id: item.product.id,
      quantity: item.quantity,
      properties: {
        _custom_name: item.product.title,
        _custom_image: item.product.imageUrl
      }
    }));
  };

  // Create Shopify checkout
  const createShopifyCheckout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // In a real implementation, you would:
      // 1. Send cart data to your backend
      // 2. Create a Shopify checkout session
      // 3. Redirect to Shopify checkout with Shop Pay

      const lineItems = getShopifyLineItems();
      
      // Simulate API call to create checkout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, create a mock checkout URL
      // In production, this would be a real Shopify checkout URL
      const mockCheckoutUrl = `https://${shopifyConfig.domain}/checkout?shop_pay=true&total=${finalTotal}`;
      setCheckoutUrl(mockCheckoutUrl);
      
      // Simulate redirect to Shopify
      setTimeout(() => {
        // In production, you would redirect to the actual checkout URL
        // window.location.href = checkoutUrl;
        console.log('Redirecting to Shopify checkout:', mockCheckoutUrl);
      }, 1000);
      
    } catch (error) {
      setError('Failed to create checkout. Please try again.');
      console.error('Checkout creation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Shop Pay specific features
  const handleShopPayFeatures = () => {
    // Shop Pay installments
    if (shopifyConfig.shopPay.installments) {
      console.log('Shop Pay installments available');
    }
    
    // Shop Pay branding
    if (shopifyConfig.shopPay.branding === 'shop_pay') {
      console.log('Shop Pay branding enabled');
    }
  };

  useEffect(() => {
    handleShopPayFeatures();
  }, []);

  if (checkoutUrl) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" />
        
        <div className="absolute right-0 top-0 h-full w-full max-w-2xl border-l border-neutral-700 bg-neutral-900 text-neutral-100 shadow-xl transform transition-transform duration-300 ease-in-out">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-700 p-6">
              <h2 className="text-xl font-semibold text-neutral-100">Shop Pay Checkout</h2>
              <button
                onClick={onBackToCart}
                className="text-neutral-400 transition-colors hover:text-neutral-200"
              >
                <IoArrowBack size={24} />
              </button>
            </div>

            {/* Redirect Message */}
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="text-center">
                <div className="text-green-500 mb-4">
                  <IoCheckmarkCircle size={64} />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-neutral-100">Redirecting to Shop Pay</h3>
                <p className="mb-6 text-neutral-400">
                  You're being redirected to Shopify's secure checkout with Shop Pay.
                </p>
                <div className="mb-6 rounded-lg border border-neutral-700 bg-neutral-800/60 p-4">
                  <p className="text-sm text-neutral-400">
                    Checkout URL: {checkoutUrl}
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-neutral-500">
                  <IoShield size={16} />
                  <span>Secure checkout powered by Shopify</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-2xl border-l border-neutral-700 bg-neutral-900 text-neutral-100 shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-700 p-6">
            <h2 className="text-xl font-semibold text-neutral-100">Shop Pay Checkout</h2>
            <button
              onClick={onBackToCart}
              className="text-neutral-400 transition-colors hover:text-neutral-200"
            >
              <IoArrowBack size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Shop Pay Benefits */}
            <div className="mb-6 rounded-lg border border-neutral-600 bg-neutral-800/60 p-6">
              <h3 className="mb-3 flex items-center text-lg font-semibold text-neutral-100">
                <IoCard className="mr-2 text-red-500" />
                Shop Pay Benefits
              </h3>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• 4 interest-free installments</li>
                <li>• Faster checkout experience</li>
                <li>• Secure payment processing</li>
                <li>• Shop Pay rewards program</li>
              </ul>
            </div>

            {/* Order Summary */}
            <div className="mb-6 rounded-lg border border-neutral-700 bg-neutral-800/60 p-6">
              <h3 className="mb-4 text-lg font-semibold text-neutral-100">Order Summary</h3>
              <div className="space-y-3">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img src={assetPath(item.product.imageUrl)} alt={item.product.title} className="w-12 h-12 object-cover rounded" />
                      <div>
                        <p className="font-medium text-neutral-100">{item.product.title}</p>
                        <p className="text-sm text-neutral-400">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium text-neutral-100">${(item.product.price * item.quantity).toFixed(2)} CAD</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 space-y-2 border-t border-neutral-700 pt-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>${totalPrice.toFixed(2)} CAD</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping:</span>
                  <span>${shippingCost.toFixed(2)} CAD</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax (15%):</span>
                  <span>${taxAmount.toFixed(2)} CAD</span>
                </div>
                <div className="flex justify-between border-t border-neutral-700 pt-2 text-lg font-semibold">
                  <span>Total:</span>
                  <span>${finalTotal.toFixed(2)} CAD</span>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 rounded-lg border border-red-800 bg-red-950/40 p-4">
                <p className="text-sm text-red-300">{error}</p>
              </div>
            )}

            {/* Checkout Button */}
            <button
              onClick={createShopifyCheckout}
              disabled={isLoading || state.items.length === 0}
              className="flex w-full items-center justify-center space-x-2 rounded-lg bg-red-700 py-4 px-6 font-semibold text-white transition-colors duration-200 hover:bg-red-600 disabled:bg-neutral-600 disabled:text-neutral-300"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Creating Checkout...</span>
                </>
              ) : (
                <>
                  <IoCard size={20} />
                  <span>Proceed with Shop Pay</span>
                </>
              )}
            </button>

            {/* Security Notice */}
            <div className="text-center mt-4">
              <div className="flex items-center justify-center space-x-2 text-sm text-neutral-500">
                <IoShield size={16} />
                <span>Secure checkout powered by Shopify</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




