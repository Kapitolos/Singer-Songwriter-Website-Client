import React from "react";

export default function News() {
  const newsItems = [
    {
      id: 1,
      date: "October 24, 2024",
      title: "Even Lines Vinyl Now Available",
      content: "Limited edition vinyl of 'Even Lines' is now available for purchase. Only 25 copies pressed, so get yours while supplies last!",
      link: "https://thomasmatthewgibson.bandcamp.com/album/even-lines",
      linkText: "Buy on Bandcamp"
    },
    {
      id: 2,
      date: "October 2024",
      title: "Even Lines Album Release",
      content: "The new album 'Even Lines' is now available on all streaming platforms. This is the big one - finally got to a studio and decided I needed to get loud.",
      link: "https://open.spotify.com/artist/5YBhQGrVd7HtLkJSwAoE4W?si=_x8JSSXBQQ6qpLr0pDELWA",
      linkText: "Listen on Spotify"
    },
    {
      id: 3,
      date: "December 2023",
      title: "Crossing Single Release",
      content: "Released 'Crossing' - the oldest of all recordings. Lost my uncle and a very old friend in close succession and with both passings I didn't have much of an outlet other than picking up my guitar.",
      link: "https://thomasmatthewgibson.bandcamp.com/album/crossing",
      linkText: "Listen on Bandcamp"
    },
    {
      id: 4,
      date: "February 2022",
      title: "Hello Mary Hello Nothing EP",
      content: "Yet another lockdown led to yet another outlet. This time I wanted some rock and roll and these songs just poured out in a matter of days.",
      link: "https://thomasmatthewgibson.bandcamp.com/album/hello-mary-hello-nothing",
      linkText: "Listen on Bandcamp"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-2">News & Updates</h2>
        <p className="text-gray-600">Stay up to date with the latest releases and news</p>
      </div>

      {/* YouTube Videos Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-black mb-4">Latest Videos</h3>
          <p className="text-gray-600">Check out the latest performances and behind-the-scenes content</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black text-center">Performance Video</h4>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/WlpLONr1oHQ?si=-kCeKt2Pnf1H9wgb" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black text-center">Behind the Scenes</h4>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/kFS_rlyqqKA?si=YCAcAr5JjHyBczkH" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-xl p-6 border border-amber-100">
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
              <div className="lg:w-1/4">
                <div className="text-sm text-gray-500 font-medium">{item.date}</div>
              </div>
              <div className="lg:w-3/4">
                <h3 className="text-xl font-semibold text-black mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{item.content}</p>
                <a 
                  href={item.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  {item.linkText}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-black mb-4">Stay Connected</h3>
          <p className="text-gray-700 mb-6">
            Get notified about new releases, upcoming shows, and exclusive content.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 