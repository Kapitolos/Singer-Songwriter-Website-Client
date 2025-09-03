// Stripe configuration for payments
export const stripeConfig = {
  // Your Stripe publishable key
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'your-stripe-publishable-key',
  
  // Stripe settings
  currency: 'cad',
  country: 'CA',
  
  // Payment methods
  paymentMethods: [
    'card',
    'apple_pay',
    'google_pay',
    'link'
  ],
  
  // Installments (if supported in your region)
  installments: {
    enabled: true,
    maxCount: 4
  },
  
  // Checkout settings
  checkout: {
    mode: 'payment', // 'payment' or 'subscription'
    successUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success`,
    cancelUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/cart`
  }
};

// Product configuration
export const productConfig = {
  // Product variants
  variants: [
    {
      id: 'vinyl-album',
      title: 'Even Lines Vinyl Album',
      price: 35.00,
      currency: 'CAD',
      inventory: 100,
      weight: 0.5, // kg
      requiresShipping: true
    },
    {
      id: 'tshirt',
      title: 'Even Lines T-Shirt',
      price: 25.00,
      currency: 'CAD',
      inventory: 50,
      weight: 0.2, // kg
      requiresShipping: true
    },
    {
      id: 'poster',
      title: 'Even Lines Poster',
      price: 15.00,
      currency: 'CAD',
      inventory: 75,
      weight: 0.1, // kg
      requiresShipping: true
    }
  ]
};
