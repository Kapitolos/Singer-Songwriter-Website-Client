import React from "react";

export default function Contact() {
  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <div className="rounded-2xl border border-neutral-600 bg-neutral-800/80 p-8 shadow-xl">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-2xl font-semibold font-heading text-heading">Let's Connect</h3>
            <p className="mb-6 text-neutral-300">
              Whether you're interested in booking a show, collaborating on music, or just want to share your thoughts, I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email Contact */}
            <div className="rounded-lg border border-neutral-600 bg-neutral-900/90 p-6">
              <div className="mb-4 flex items-center justify-center">
                <svg className="mr-3 h-8 w-8 text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h4 className="text-xl font-semibold font-heading text-heading">Email</h4>
              </div>
              <div className="text-center">
                <a 
                  href="mailto:thomasmgibson@gmail.com"
                  className="text-lg font-medium text-red-400 transition-colors duration-200 hover:text-red-300"
                >
                  thomasmgibson@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 