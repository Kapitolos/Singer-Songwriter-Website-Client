"use client";

import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { IoArrowBack, IoArrowForward, IoLocation, IoCard, IoCheckmarkCircle, IoPerson } from 'react-icons/io5';

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

interface PaymentInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

interface CheckoutProps {
  onBackToCart: () => void;
}

export default function Checkout({ onBackToCart }: CheckoutProps) {
  const { state, closeCart, getTotalPrice } = useCart();
  const { state: authState } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    country: 'Canada'
  });
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = getTotalPrice();
  const shippingCost = 15; // Fixed shipping cost
  const taxRate = 0.15; // 15% tax rate
  const taxAmount = totalPrice * taxRate;
  const finalTotal = totalPrice + shippingCost + taxAmount;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    try {
      // Create order data WITHOUT sensitive payment information
      const orderData = {
        items: state.items,
        shipping: shippingInfo,
        total: finalTotal,
        orderDate: new Date().toISOString(),
        orderId: Math.random().toString(36).substr(2, 9).toUpperCase()
      };
      
      // Here you would send the order to your backend
      // await fetch('/api/orders', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(orderData)
      // });
      
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsProcessing(false);
      setOrderPlaced(true);
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        closeCart();
      }, 3000);
    } catch (error) {
      setIsProcessing(false);
      // Handle error appropriately
      console.error('Order failed:', error);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center space-x-4">
        <div className={`flex items-center ${currentStep >= 1 ? 'text-black' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
            currentStep >= 1 ? 'border-black bg-black text-white' : 'border-gray-300'
          }`}>
            {currentStep > 1 ? <IoCheckmarkCircle size={20} /> : '1'}
          </div>
          <span className="ml-2 font-medium">Shipping</span>
        </div>
        
        <div className={`w-16 h-0.5 ${currentStep >= 2 ? 'bg-black' : 'bg-gray-300'}`} />
        
        <div className={`flex items-center ${currentStep >= 2 ? 'text-black' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
            currentStep >= 2 ? 'border-black bg-black text-white' : 'border-gray-300'
          }`}>
            {currentStep > 2 ? <IoCheckmarkCircle size={20} /> : '2'}
          </div>
          <span className="ml-2 font-medium">Payment</span>
        </div>
        
        <div className={`w-16 h-0.5 ${currentStep >= 3 ? 'bg-black' : 'bg-gray-300'}`} />
        
        <div className={`flex items-center ${currentStep >= 3 ? 'text-black' : 'text-gray-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
            currentStep >= 3 ? 'border-black bg-black text-white' : 'border-gray-300'
          }`}>
            3
          </div>
          <span className="ml-2 font-medium">Review</span>
        </div>
      </div>
    </div>
  );

  const renderShippingForm = () => (
    <form onSubmit={handleShippingSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            required
            value={shippingInfo.firstName}
            onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            required
            value={shippingInfo.lastName}
            onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            required
            value={shippingInfo.email}
            onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            required
            value={shippingInfo.phone}
            onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
        <input
          type="text"
          required
          value={shippingInfo.address}
          onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
          <input
            type="text"
            required
            value={shippingInfo.city}
            onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Province</label>
          <select
            required
            value={shippingInfo.province}
            onChange={(e) => setShippingInfo({...shippingInfo, province: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          >
            <option value="">Select Province</option>
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NS">Nova Scotia</option>
            <option value="NT">Northwest Territories</option>
            <option value="NU">Nunavut</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="YT">Yukon</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
          <input
            type="text"
            required
            value={shippingInfo.postalCode}
            onChange={(e) => setShippingInfo({...shippingInfo, postalCode: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-8 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          Continue to Payment
          <IoArrowForward size={20} />
        </button>
      </div>
    </form>
  );

  const renderPaymentForm = () => (
    <form onSubmit={handlePaymentSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
        <input
          type="text"
          required
          value={paymentInfo.cardholderName}
          onChange={(e) => setPaymentInfo({...paymentInfo, cardholderName: e.target.value})}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
        <input
          type="text"
          required
          placeholder="1234 5678 9012 3456"
          value={paymentInfo.cardNumber}
          onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
          <input
            type="text"
            required
            placeholder="MM/YY"
            value={paymentInfo.expiryDate}
            onChange={(e) => setPaymentInfo({...paymentInfo, expiryDate: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
          <input
            type="text"
            required
            placeholder="123"
            value={paymentInfo.cvv}
            onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="flex justify-between">
        <button
          type="button"
          onClick={goBack}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
        >
          <IoArrowBack size={20} />
          Back
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          Review Order
          <IoArrowForward size={20} />
        </button>
      </div>
    </form>
  );

  const renderOrderReview = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6">
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
      
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Information</h3>
        <div className="space-y-2 text-sm">
          <p><span className="font-medium">Name:</span> {shippingInfo.firstName} {shippingInfo.lastName}</p>
          <p><span className="font-medium">Email:</span> {shippingInfo.email}</p>
          <p><span className="font-medium">Phone:</span> {shippingInfo.phone}</p>
          <p><span className="font-medium">Address:</span> {shippingInfo.address}</p>
          <p><span className="font-medium">City:</span> {shippingInfo.city}, {shippingInfo.province} {shippingInfo.postalCode}</p>
          <p><span className="font-medium">Country:</span> {shippingInfo.country}</p>
        </div>
      </div>
      
      <div className="flex justify-between">
        <button
          type="button"
          onClick={goBack}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
        >
          <IoArrowBack size={20} />
          Back
        </button>
        <button
          onClick={handlePlaceOrder}
          disabled={isProcessing}
          className="px-8 py-3 bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          {isProcessing ? 'Processing...' : 'Place Order'}
        </button>
      </div>
    </div>
  );

  // Require authentication for checkout
  if (!authState.isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" />
        
        <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Checkout</h2>
              <button
                onClick={onBackToCart}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <IoArrowBack size={24} />
              </button>
            </div>

            {/* Authentication Required */}
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="text-center">
                <div className="text-gray-400 mb-4">
                  <IoPerson size={64} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Authentication Required</h3>
                <p className="text-gray-600 mb-6">
                  Please sign in or create an account to complete your purchase.
                </p>
                <button
                  onClick={onBackToCart}
                  className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Back to Cart
                </button>
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
            <h2 className="text-xl font-semibold text-gray-900">Checkout</h2>
            <button
              onClick={onBackToCart}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <IoArrowBack size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {orderPlaced ? (
              <div className="text-center py-12">
                <div className="text-green-500 mb-4">
                  <IoCheckmarkCircle size={64} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Order Placed Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your order. You will receive a confirmation email shortly.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    Order #: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                </div>
              </div>
            ) : (
              <>
                {renderStepIndicator()}
                
                {currentStep === 1 && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <IoLocation size={24} className="text-black" />
                  <h3 className="text-lg font-semibold text-gray-900">Shipping Information</h3>
                </div>
                {renderShippingForm()}
              </div>
            )}
            
            {currentStep === 2 && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <IoCard size={24} className="text-black" />
                  <h3 className="text-lg font-semibold text-gray-900">Payment Information</h3>
                </div>
                {renderPaymentForm()}
              </div>
            )}
            
            {currentStep === 3 && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <IoCheckmarkCircle size={24} className="text-black" />
                  <h3 className="text-lg font-semibold text-gray-900">Review & Place Order</h3>
                </div>
                {renderOrderReview()}
              </div>
            )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
