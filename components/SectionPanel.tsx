"use client";

import React from "react";

/**
 * Matches the Releases section chrome: black outer padding + white inner card
 * with amber border (md+). On desktop the white panel has a fixed height (fills
 * the grid cell) so every section matches the same box; overflow uses a normal
 * scrollbar inside that panel.
 */
export default function SectionPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-0 w-full flex-1 flex-col bg-black p-0 shadow-none rounded-none md:h-full md:rounded-2xl md:p-6">
      <div className="min-h-0 flex-1 rounded-none border border-neutral-800 bg-neutral-900 p-3 text-neutral-200 shadow-none md:min-h-0 md:flex-1 md:overflow-y-auto md:overscroll-contain md:rounded-2xl md:border-neutral-700 md:p-8 md:shadow-xl md:[scrollbar-gutter:stable] [scrollbar-width:thin]">
        {children}
      </div>
    </div>
  );
}
