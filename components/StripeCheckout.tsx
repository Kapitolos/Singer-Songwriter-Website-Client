"use client";

import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { stripeConfig, productConfig } from '../config/shopify';
import { IoArrowBack, IoCheckmarkCircle, IoCard, IoShield, IoLockClosed } from 'react-icons/io5';

interface StripeCheckoutProps {
  onBackToCart: () => void;
}

export default function StripeCheckout({ onBackToCart }: StripeCheckoutProps) {
  const { state, closeCart, getTotalPrice } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutSession, setCheckoutSession] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const totalPrice = getTotalPrice();
  const shippingCost = 15; // Fixed shipping cost
  const taxRate = 0.15; // 15% tax rate
  const taxAmount = totalPrice * taxRate;
  const finalTotal = totalPrice + shippingCost + taxAmount;

  // Convert cart items to Stripe line items
  const getStripeLineItems = () => {
    return state.items.map(item => {
      const product = productConfig.variants.find(v => v.id === item.id);
      return {
        price_data: {
          currency: stripeConfig.currency,
          product_data: {
            name: item.name,
            images: [item.image],
            description: `${item.name} - Thomas Matthew Gibson Merchandise`
          },
          unit_amount: Math.round(item.price * 100), // Stripe expects cents
        },
        quantity: item.quantity,
      };
    });
  };

  // Create Stripe checkout session
  const createStripeCheckout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // In a real implementation, you would:
      // 1. Send cart data to your backend
      // 2. Create a Stripe checkout session
      // 3. Redirect to Stripe checkout

      const lineItems = getStripeLineItems();
      
      // Simulate API call to create checkout session
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, create a mock checkout session
      // In production, this would be a real Stripe checkout session
      const mockSession = {
        id: 'cs_mock_' + Math.random().toString(36).substr(2, 9),
        url: `https://checkout.stripe.com/pay/${Math.random().toString(36).substr(2, 9)}`,
        amount_total: Math.round(finalTotal * 100),
        currency: stripeConfig.currency
      };
      
      setCheckoutSession(mockSession);
      
      // Simulate redirect to Stripe
      setTimeout(() => {
        // In production, you would redirect to the actual checkout URL
        // window.location.href = checkoutSession.url;
        console.log('Redirecting to Stripe checkout:', mockSession.url);
      }, 1000);
      
    } catch (error) {
      setError('Failed to create checkout. Please try again.');
      console.error('Checkout creation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Stripe specific features
  const handleStripeFeatures = () => {
    // Stripe installments
    if (stripeConfig.installments.enabled) {
      console.log('Stripe installments available');
    }
    
    // Payment methods
    console.log('Available payment methods:', stripeConfig.paymentMethods);
  };

  useEffect(() => {
    handleStripeFeatures();
  }, []);

  if (checkoutSession) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" />
        
        <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Stripe Checkout</h2>
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Redirecting to Stripe</h3>
                <p className="text-gray-600 mb-6">
                  You're being redirected to Stripe's secure checkout.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600">
                    Session ID: {checkoutSession.id}
                  </p>
                  <p className="text-sm text-gray-600">
                    Amount: ${(checkoutSession.amount_total / 100).toFixed(2)} {checkoutSession.currency.toUpperCase()}
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <IoShield size={16} />
                  <span>Secure checkout powered by Stripe</span>
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
            <h2 className="text-xl font-semibold text-gray-900">Secure Checkout</h2>
            <button
              onClick={onBackToCart}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <IoArrowBack size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Stripe Benefits */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <IoCard className="mr-2" />
                Secure Payment Benefits
              </h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• 256-bit SSL encryption</li>
                <li>• PCI DSS compliant</li>
                <li>• Multiple payment methods</li>
                <li>• Instant payment confirmation</li>
                <li>• Fraud protection</li>
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
              onClick={createStripeCheckout}
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
                  <IoLockClosed size={20} />
                  <span>Proceed to Secure Checkout</span>
                </>
              )}
            </button>

            {/* Security Notice */}
            <div className="text-center mt-4">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <IoShield size={16} />
                <span>Secure checkout powered by Stripe</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-400 mt-2">
                <span>PCI DSS Compliant • 256-bit SSL • Fraud Protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
