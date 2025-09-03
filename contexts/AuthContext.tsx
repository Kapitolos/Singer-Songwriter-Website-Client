"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  initializeApp, 
  FirebaseApp 
} from 'firebase/app';
import { 
  getAuth, 
  Auth, 
  User as FirebaseUser,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { firebaseConfig } from '../config/firebase';

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL?: string | null;
  emailVerified: boolean;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthContextType {
  state: AuthState;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  resetPassword: (email: string) => Promise<void>;
  updateUserProfile: (displayName: string) => Promise<void>;
  currentUser: FirebaseUser | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [app, setApp] = useState<FirebaseApp | null>(null);
  const [auth, setAuth] = useState<Auth | null>(null);

  // Initialize Firebase
  useEffect(() => {
    try {
      const firebaseApp = initializeApp(firebaseConfig);
      const firebaseAuth = getAuth(firebaseApp);
      
      setApp(firebaseApp);
      setAuth(firebaseAuth);
    } catch (error) {
      console.error('Firebase initialization error:', error);
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  // Listen for auth state changes
  useEffect(() => {
    if (!auth) return;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      
      if (user) {
        // User is signed in
        const userData: User = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
        };
        
        setState({
          user: userData,
          isAuthenticated: true,
          isLoading: false,
        });
      } else {
        // User is signed out
        setState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const login = async (email: string, password: string): Promise<boolean> => {
    if (!auth) return false;
    
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error: any) {
      console.error('Login error:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    if (!auth) return;
    
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    if (!auth) return false;
    
    setState(prev => ({ ...prev, isLoading: true }));
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile with display name
      if (userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: name
        });
      }
      
      return true;
    } catch (error: any) {
      console.error('Registration error:', error);
      setState(prev => ({ ...prev, isLoading: false }));
      return false;
    }
  };

  const resetPassword = async (email: string): Promise<void> => {
    if (!auth) return;
    
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error('Password reset error:', error);
      throw error;
    }
  };

  const updateUserProfile = async (displayName: string): Promise<void> => {
    if (!currentUser) return;
    
    try {
      await updateProfile(currentUser, { displayName });
    } catch (error) {
      console.error('Profile update error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ 
      state, 
      login, 
      logout, 
      register, 
      resetPassword, 
      updateUserProfile,
      currentUser 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
