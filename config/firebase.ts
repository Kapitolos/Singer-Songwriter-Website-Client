// Firebase configuration
// Replace these values with your actual Firebase project credentials
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "your-api-key",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "your-project.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "your-project-id",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "your-project.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "your-app-id"
};

// Firebase Authentication configuration
export const authConfig = {
  // Enable email/password authentication
  signInOptions: [
    'password',
    'emailLink'
  ],
  // Custom parameters
  signInFlow: 'popup',
  // Redirect after sign in
  signInSuccessUrl: '/',
  // Terms of service URL
  tosUrl: '/terms',
  // Privacy policy URL
  privacyPolicyUrl: '/privacy'
};
