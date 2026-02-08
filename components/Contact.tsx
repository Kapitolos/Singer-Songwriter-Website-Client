import React from "react";

export default function Contact() {
  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-black mb-4">Let's Connect</h3>
            <p className="text-gray-700 mb-6">
              Whether you're interested in booking a show, collaborating on music, or just want to share your thoughts, I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email Contact */}
            <div className="bg-amber-50 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h4 className="text-xl font-semibold text-black">Email</h4>
              </div>
              <div className="text-center">
                <a 
                  href="mailto:thomasmgibson@gmail.com"
                  className="text-lg text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  thomasmgibson@gmail.com
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  I typically respond within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 