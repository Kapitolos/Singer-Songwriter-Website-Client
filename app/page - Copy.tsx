"use client"; // Required for Next.js App Router (client-side rendering)

import React from "react";
import albums from "../data/albums/albums"; // Import the album data
import Carousel from "../components/Carousel";



export default function Home() {
  return (
    <main className="mt-1 mx-auto items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-900 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <h1 className="text-3xl text-black font-bold text-center mb-5">Thomas Matthew Gibson</h1>
      <div className="max-w-lg mx-auto">
        <Carousel albums={albums} />
   
      </div>
    </main>
  );
}
