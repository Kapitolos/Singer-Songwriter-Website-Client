// Environment Configuration Template
// Copy this file to env.ts and fill in your actual values

export const envConfig = {
  // Firebase Configuration
  // Get these values from your Firebase project console
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'your-firebase-api-key',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'your-project.firebaseapp.com',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'your-project-id',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'your-project.appspot.com',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '123456789',
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || 'your-firebase-app-id'
  },

  // Stripe Configuration
  // Get these values from your Stripe dashboard
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'your-stripe-publishable-key',
    secretKey: process.env.STRIPE_SECRET_KEY || 'your-stripe-secret-key'
  },

  // Stripe Settings
  stripeSettings: {
    currency: process.env.NEXT_PUBLIC_STRIPE_CURRENCY || 'cad',
    country: process.env.NEXT_PUBLIC_STRIPE_COUNTRY || 'CA',
    installments: process.env.NEXT_PUBLIC_STRIPE_INSTALLMENTS === 'true'
  }
};

// Instructions:
// 1. Copy this file to env.ts
// 2. Create a .env.local file in your project root
// 3. Add your actual Firebase and Shopify credentials
// 4. Never commit .env.local to version control
