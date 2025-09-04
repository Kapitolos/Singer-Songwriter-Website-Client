# MusicECom - Client Application

A modern, responsive music e-commerce website built with Next.js for Thomas Matthew Gibson, a singer/songwriter from Nova Scotia. This application features album showcases, merchandise sales, audio previews, and integrated payment processing.

## 🎵 Features

- **Artist Showcase**: Beautiful landing page featuring the artist's latest releases and performances
- **Album Gallery**: Interactive carousel displaying all albums with preview tracks
- **Audio Player**: Built-in audio player for music previews
- **E-commerce**: Shopping cart and checkout functionality with Stripe integration
- **Merchandise**: Product catalog for physical items (vinyl, t-shirts, posters)
- **User Authentication**: Firebase-based user registration and login
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **News & Contact**: Sections for updates and contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.0 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Payments**: Stripe
- **State Management**: React Context (Cart & Auth)
- **UI Components**: Custom components with Framer Motion animations
- **Icons**: Heroicons & React Icons
- **Carousel**: React Slick

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MusicECom/mec
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Stripe Configuration
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key

   # Base URL
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
mec/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── AlbumBlurb.tsx    # Album detail component
│   ├── AudioPlayer.tsx   # Audio playback component
│   ├── Carousel.tsx      # Album carousel
│   ├── Cart.tsx          # Shopping cart
│   ├── Checkout.tsx      # Checkout process
│   ├── Contact.tsx       # Contact form
│   ├── Login.tsx         # User authentication
│   ├── Merch.tsx         # Merchandise catalog
│   ├── Navbar.tsx        # Navigation component
│   ├── News.tsx          # News/updates section
│   └── Register.tsx      # User registration
├── config/               # Configuration files
│   ├── firebase.ts       # Firebase setup
│   └── shopify.ts        # Stripe/payment config
├── contexts/             # React Context providers
│   ├── AuthContext.tsx   # Authentication state
│   └── CartContext.tsx   # Shopping cart state
├── data/                 # Static data
│   └── albums/           # Album information
├── public/               # Static assets
│   └── albums/           # Album artwork and audio files
└── utils/                # Utility functions
    ├── hashUtils.ts      # Hashing utilities
    └── security.ts       # Security helpers
```

## 🎨 Key Components

### Home Page (`app/page.tsx`)
- Artist introduction and latest release showcase
- Featured video embed (YouTube)
- Spotify and Bandcamp integration
- Navigation between different sections

### Album System
- **Album Data** (`data/albums/albums.ts`): Centralized album information
- **Carousel** (`components/Carousel.tsx`): Interactive album display
- **Album Blurb** (`components/AlbumBlurb.tsx`): Detailed album information

### E-commerce Features
- **Cart System**: Add/remove items, quantity management
- **Checkout**: Stripe integration for secure payments
- **Product Catalog**: Physical merchandise (vinyl, apparel, posters)

### Authentication
- **Firebase Auth**: User registration and login
- **Protected Routes**: Secure access to user-specific features
- **Context Management**: Global authentication state

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎵 Album Data

The application includes albums from Thomas Matthew Gibson's discography:
- **Lakeview** - Apartment-recorded demo with authentic vibe
- **To Say No More Goodbyes** - Pandemic-era isolation recording
- **Hello Mary Hello Nothing** - Rock and roll lockdown outlet
- **Crossing** - Tribute to lost loved ones
- **Even Lines** - Studio-recorded with full production

## 🔐 Security Features

- Environment variable protection
- Firebase security rules
- Stripe secure payment processing
- Input validation and sanitization
- CORS configuration

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Touch-friendly interactions
- Optimized images and audio
- Progressive Web App capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎤 About the Artist

Thomas Matthew Gibson is a singer/songwriter from Nova Scotia, Canada. His music spans from intimate acoustic recordings to full studio productions, with each album telling a unique story of creation and personal growth.

**Listen on Spotify**: [Thomas Matthew Gibson](https://open.spotify.com/artist/5YBhQGrVd7HtLkJSwAoE4W?si=_x8JSSXBQQ6qpLr0pDELWA)

**Buy on Bandcamp**: [thomasmatthewgibson.bandcamp.com](https://thomasmatthewgibson.bandcamp.com)

## 🆘 Support

For support, email support@thomasmatthewgibson.com or create an issue in this repository.