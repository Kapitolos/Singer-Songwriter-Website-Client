"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Product interface
interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  previewUrl?: string;
  spotifyUrl?: string;
  bandcampUrl?: string;
  blurb?: string;
  blurbBackground?: string;
  category?: string;
  inventory?: number;
}

// Cart item interface
interface CartItem {
  product: Product;
  quantity: number;
}

// Cart state interface
interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
}

// Cart context type
interface CartContextType {
  state: CartState;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (productId: number) => number;
}

// Create context
const CartContext = createContext<CartContextType | null>(null);

// Cart provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CartState>({
    items: [],
    totalItems: 0,
    totalPrice: 0,
    isOpen: false,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setState(parsedCart);
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  // Calculate totals whenever items change
  useEffect(() => {
    const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = state.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    
    setState(prev => ({
      ...prev,
      totalItems,
      totalPrice: Math.round(totalPrice * 100) / 100, // Round to 2 decimal places
    }));
  }, [state.items]);

  // Add item to cart
  const addToCart = (product: Product, quantity: number = 1) => {
    setState(prev => {
      const existingItem = prev.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        // Update existing item quantity
        const updatedItems = prev.items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        return { ...prev, items: updatedItems };
      } else {
        // Add new item
        return {
          ...prev,
          items: [...prev.items, { product, quantity }]
        };
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId: number) => {
    setState(prev => ({
      ...prev,
      items: prev.items.filter(item => item.product.id !== productId)
    }));
  };

  // Update item quantity
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setState(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    }));
  };

  // Clear entire cart
  const clearCart = () => {
    setState(prev => ({
      ...prev,
      items: [],
      totalItems: 0,
      totalPrice: 0
    }));
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setState(prev => ({
      ...prev,
      isOpen: !prev.isOpen
    }));
  };

  // Open cart
  const openCart = () => {
    setState(prev => ({
      ...prev,
      isOpen: true
    }));
  };

  // Close cart
  const closeCart = () => {
    setState(prev => ({
      ...prev,
      isOpen: false
    }));
  };

  // Get quantity of specific item
  const getItemQuantity = (productId: number): number => {
    const item = state.items.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider value={{
      state,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleCart,
      openCart,
      closeCart,
      getItemQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// Export the context for advanced usage
export { CartContext };

