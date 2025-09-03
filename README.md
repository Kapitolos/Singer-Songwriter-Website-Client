# Thomas Matthew Gibson - Music E-Commerce Portfolio

A professional portfolio website showcasing e-commerce development skills with a focus on security, user experience, and modern web technologies.

## 🎵 About

This is the official website of Thomas Matthew Gibson, a singer/songwriter from Nova Scotia. The site serves as both a music portfolio and a demonstration of e-commerce development capabilities.

## 🛒 E-Commerce Features

### Shopping Cart System
- **State Management**: React Context API with useReducer for cart state
- **Persistent Storage**: LocalStorage integration for cart persistence
- **Real-time Updates**: Live cart count and total calculations
- **Responsive Design**: Mobile-friendly cart interface

### Product Management
- **Product Display**: Detailed product information with images
- **Inventory Tracking**: Quantity management and stock validation
- **Pricing**: CAD currency support with shipping calculations
- **Product Categories**: Organized merchandise sections

### Checkout Process
- **Multi-step Flow**: Shipping → Payment → Confirmation
- **Form Validation**: Client-side validation with error handling
- **Address Validation**: Canadian postal code format validation
- **Payment Security**: Credit card validation and secure processing simulation

### Security Features
- **Input Sanitization**: XSS prevention and data cleaning
- **Form Validation**: Comprehensive client-side validation
- **CSRF Protection**: Token-based cross-site request forgery prevention
- **Content Security Policy**: XSS and injection attack prevention
- **Rate Limiting**: API endpoint protection against abuse
- **Secure Headers**: Security-focused HTTP headers

## 🛡️ Security Implementation

### Data Protection
- **Input Sanitization**: Removes potentially malicious HTML and scripts
- **Validation**: Comprehensive form validation for all user inputs
- **Encryption**: SHA-256 hashing for sensitive data
- **Secure Storage**: LocalStorage with data sanitization

### Payment Security
- **Credit Card Validation**: Luhn algorithm implementation
- **CVV Validation**: Secure card verification value checking
- **Expiry Validation**: Date format and expiration checking
- **Amount Validation**: Payment amount limits and validation

### Web Security
- **Content Security Policy**: XSS and injection prevention
- **X-Frame-Options**: Clickjacking protection
- **X-Content-Type-Options**: MIME type sniffing prevention
- **Referrer Policy**: Privacy-focused referrer handling

## 🚀 Technical Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Context**: State management
- **Heroicons**: Professional icon library

### E-Commerce
- **Cart Context**: Centralized shopping cart management
- **Form Handling**: Controlled components with validation
- **Local Storage**: Persistent cart data
- **Responsive Design**: Mobile-first approach

### Security
- **Input Validation**: Comprehensive form validation
- **Data Sanitization**: XSS prevention
- **Secure Headers**: Security-focused HTTP responses
- **Rate Limiting**: API protection mechanisms

## 📱 Features

### Navigation
- **Responsive Navbar**: Mobile-friendly navigation
- **Section-based Layout**: Home, Releases, Merch, News, Contact
- **Cart Integration**: Shopping cart accessible from any page

### Music Section
- **Album Carousel**: Interactive music showcase
- **Streaming Links**: Spotify and Bandcamp integration
- **Audio Player**: Embedded music player
- **Album Information**: Detailed release information

### Merchandise
- **Product Catalog**: Vinyl records and merchandise
- **Shopping Cart**: Add/remove items functionality
- **Checkout Process**: Secure payment flow
- **Order Management**: Cart persistence and management

### News & Updates
- **YouTube Integration**: Embedded music videos
- **Newsletter Signup**: Email subscription functionality
- **Content Management**: Easy content updates

## 🔧 Development

### Getting Started
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Project Structure
```
mec/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page component
├── components/             # React components
│   ├── Cart.tsx           # Shopping cart
│   ├── Checkout.tsx       # Checkout process
│   ├── Merch.tsx          # Merchandise display
│   ├── Navbar.tsx         # Navigation
│   └── ...                # Other components
├── contexts/               # React contexts
│   └── CartContext.tsx    # Shopping cart state
├── data/                   # Static data
│   └── albums/            # Album information
├── utils/                  # Utility functions
│   └── security.ts        # Security utilities
└── public/                 # Static assets
    └── albums/            # Album images
```

### Key Components

#### CartContext
- Manages shopping cart state
- Handles add/remove/update operations
- Provides cart persistence
- Exposes cart utilities

#### Cart Component
- Displays cart contents
- Quantity management
- Remove items functionality
- Checkout integration

#### Checkout Component
- Multi-step checkout process
- Form validation
- Payment information collection
- Security measures

#### Security Utils
- Input sanitization
- Form validation
- Payment validation
- Security headers

## 🎯 Portfolio Highlights

### E-Commerce Expertise
- **Full Shopping Cart**: Complete cart functionality
- **Checkout Process**: Professional checkout flow
- **Payment Integration**: Secure payment handling
- **Inventory Management**: Product and quantity tracking

### Security Implementation
- **Data Protection**: Comprehensive security measures
- **Input Validation**: Robust form validation
- **XSS Prevention**: Cross-site scripting protection
- **CSRF Protection**: Cross-site request forgery prevention

### User Experience
- **Responsive Design**: Mobile-first approach
- **Intuitive Navigation**: Clear user flow
- **Performance**: Optimized loading and interactions
- **Accessibility**: Screen reader friendly

### Technical Skills
- **Modern React**: Hooks, Context, TypeScript
- **State Management**: Complex state handling
- **Form Handling**: Advanced form validation
- **Security**: Web security best practices

## 🔒 Security Considerations

### Production Deployment
- **HTTPS**: SSL/TLS encryption required
- **Environment Variables**: Secure configuration management
- **API Security**: Rate limiting and authentication
- **Monitoring**: Security event logging

### Payment Processing
- **PCI Compliance**: Payment card industry standards
- **Tokenization**: Secure payment data handling
- **Fraud Detection**: Transaction monitoring
- **Compliance**: Regulatory requirements

### Data Protection
- **Privacy Policy**: User data handling
- **GDPR Compliance**: European data protection
- **Data Encryption**: At rest and in transit
- **Access Control**: User permission management

## 📈 Future Enhancements

### E-Commerce Features
- **Payment Gateway**: Stripe/PayPal integration
- **Inventory Management**: Real-time stock tracking
- **Order Management**: Customer order history
- **Shipping Integration**: Real-time shipping rates

### Security Improvements
- **Two-Factor Authentication**: Enhanced account security
- **Fraud Detection**: AI-powered transaction monitoring
- **Compliance Tools**: Automated compliance checking
- **Security Auditing**: Regular security assessments

### User Experience
- **Personalization**: User preference management
- **Recommendations**: AI-powered product suggestions
- **Social Features**: User reviews and ratings
- **Mobile App**: Native mobile application

## 📞 Contact

For questions about this portfolio or e-commerce implementation:
- **Email**: thomasmgibson@gmail.com
- **Website**: [thomasmatthewgibson.com](https://thomasmatthewgibson.com)
- **GitHub**: [@Kapitolos](https://github.com/Kapitolos)

## 📄 License

This project is for portfolio demonstration purposes. All music and merchandise belong to Thomas Matthew Gibson.

---

**Built with ❤️ using Next.js, React, TypeScript, and modern web technologies**
