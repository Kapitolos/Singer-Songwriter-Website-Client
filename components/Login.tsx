"use client";

import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { IoClose, IoMail, IoLockClosed, IoPerson } from 'react-icons/io5';

interface LoginProps {
  onClose: () => void;
  onSwitchToRegister: () => void;
}

export default function Login({ onClose, onSwitchToRegister }: LoginProps) {
  const { login, state } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const success = await login(email, password);
    if (success) {
      onClose();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" />
      
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl border border-neutral-700 bg-neutral-900 text-neutral-100 shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-700 p-6">
            <h2 className="text-xl font-semibold text-neutral-100">Sign In</h2>
            <button
              onClick={onClose}
              className="text-neutral-400 transition-colors hover:text-neutral-200"
            >
              <IoClose size={24} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {error && (
              <div className="rounded-lg border border-red-800 bg-red-950/40 p-4">
                <p className="text-sm text-red-300">{error}</p>
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                Email Address
              </label>
              <div className="relative">
                <IoMail className="absolute left-3 top-1/2 -translate-y-1/2 transform text-neutral-500" size={20} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-neutral-600 bg-neutral-800/50 py-3 pl-10 pr-4 text-neutral-100 placeholder:text-neutral-500 focus:border-transparent focus:ring-2 focus:ring-red-600"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-300">
                Password
              </label>
              <div className="relative">
                <IoLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 transform text-neutral-500" size={20} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-neutral-600 bg-neutral-800/50 py-3 pl-10 pr-4 text-neutral-100 placeholder:text-neutral-500 focus:border-transparent focus:ring-2 focus:ring-red-600"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={state.isLoading}
              className="w-full rounded-lg bg-neutral-100 py-3 px-4 font-semibold text-neutral-950 transition-colors duration-200 hover:bg-white disabled:bg-neutral-600 disabled:text-neutral-300"
            >
              {state.isLoading ? 'Signing In...' : 'Sign In'}
            </button>

            <div className="text-center">
              <p className="text-sm text-neutral-400">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={onSwitchToRegister}
                  className="font-medium text-red-400 hover:text-red-300"
                >
                  Sign up
                </button>
              </p>
            </div>

            <div className="text-center">
              <p className="text-xs text-neutral-500">
                Demo: Use any email and password to sign in
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}




