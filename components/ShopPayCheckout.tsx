"use client";

import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { shopifyConfig, productConfig } from '../config/shopify';
import { IoArrowBack, IoCheckmarkCircle, IoCard, IoShield } from 'react-icons/io5';

interface ShopPayCheckoutProps {
  onBackToCart: () => void;
}

export default function ShopPayCheckout({ onBackToCart }: ShopPayCheckoutProps) {
  const { state, closeCart, getTotalPrice } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const totalPrice = getTotalPrice();
  const shippingCost = 15; // Fixed shipping cost
  const taxRate = 0.15; // 15% tax rate
  const taxAmount = totalPrice * taxRate;
  const finalTotal = totalPrice + shippingCost + taxAmount;

  // Convert cart items to Shopify line items
  const getShopifyLineItems = () => {
    return state.items.map(item => {
      const product = productConfig.variants.find(v => v.id === item.id);
      return {
        variant_id: product?.id || item.id,
        quantity: item.quantity,
        properties: {
          _custom_name: item.name,
          _custom_image: item.image
        }
      };
    });
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
        
        <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Shop Pay Checkout</h2>
              <button
                onClick={onBackToCart}
                className="text-gray-400 hover:text-gray-600 transition-colors"
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Redirecting to Shop Pay</h3>
                <p className="text-gray-600 mb-6">
                  You're being redirected to Shopify's secure checkout with Shop Pay.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600">
                    Checkout URL: {checkoutUrl}
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
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
      
      <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Shop Pay Checkout</h2>
            <button
              onClick={onBackToCart}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <IoArrowBack size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Shop Pay Benefits */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <IoCard className="mr-2" />
                Shop Pay Benefits
              </h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• 4 interest-free installments</li>
                <li>• Faster checkout experience</li>
                <li>• Secure payment processing</li>
                <li>• Shop Pay rewards program</li>
              </ul>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-3">
                {state.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)} CAD</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 mt-4 pt-4 space-y-2">
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
                <div className="flex justify-between text-lg font-semibold border-t border-gray-200 pt-2">
                  <span>Total:</span>
                  <span>${finalTotal.toFixed(2)} CAD</span>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {/* Checkout Button */}
            <button
              onClick={createShopifyCheckout}
              disabled={isLoading || state.items.length === 0}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
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
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
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


