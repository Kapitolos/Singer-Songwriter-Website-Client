import React from "react";

export default function Contact() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-2">Contact</h2>
        <p className="text-gray-600">Get in touch for bookings, collaborations, or just to say hello</p>
      </div>

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

            {/* Social Links */}
            <div className="bg-amber-50 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-black mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
                <h4 className="text-xl font-semibold text-black">Follow</h4>
              </div>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://open.spotify.com/artist/5YBhQGrVd7HtLkJSwAoE4W?si=_x8JSSXBQQ6qpLr0pDELWA"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Spotify
                </a>
                <a 
                  href="https://thomasmatthewgibson.bandcamp.com"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-6h2v2h-2v-2zm0-8h2v6h-2V8z"/>
                  </svg>
                  Bandcamp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 