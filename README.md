# ARYA_MOON - Private Gallery Marketplace

A Next.js application for selling private image and video galleries. Built with TypeScript, Tailwind CSS, and a modular architecture.

## Features

- 🖼️ **Gallery Management** - Create, browse, and manage private media galleries
- 🔐 **Authentication** - Secure user authentication for creators and buyers
- 💳 **Payment Integration** - Ready for payment processor integration (Stripe, PayPal, etc.)
- 📱 **Responsive Design** - Mobile-first design with Tailwind CSS
- 🎨 **Modern UI** - Clean, professional interface with reusable components
- 🏗️ **Modular Architecture** - Well-organized, scalable codebase

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **State Management**: React Hooks
- **API**: Next.js API Routes (REST)

## Project Structure

```
ARYA_MOON/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── galleries/         # Gallery browsing and details
│   │   ├── auth/              # Authentication pages
│   │   ├── creator/           # Creator dashboard
│   │   └── api/               # API routes
│   │       ├── galleries/     # Gallery endpoints
│   │       ├── auth/          # Authentication endpoints
│   │       └── payments/      # Payment endpoints
│   │
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── gallery/          # Gallery-specific components
│   │   │   ├── GalleryCard.tsx
│   │   │   ├── GalleryGrid.tsx
│   │   │   └── MediaViewer.tsx
│   │   ├── auth/             # Authentication components
│   │   │   └── SignInForm.tsx
│   │   └── payment/          # Payment components
│   │       └── CheckoutButton.tsx
│   │
│   ├── services/             # Business logic and API clients
│   │   ├── api/             # API client
│   │   │   └── client.ts
│   │   ├── auth/            # Authentication service
│   │   │   └── authService.ts
│   │   ├── gallery/         # Gallery service
│   │   │   └── galleryService.ts
│   │   ├── payment/         # Payment service
│   │   │   └── paymentService.ts
│   │   └── media/           # Media service
│   │       └── mediaService.ts
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── useAuth.ts
│   │   └── useGallery.ts
│   │
│   ├── lib/                  # Utility functions and configurations
│   │   ├── utils/
│   │   │   ├── formatters.ts
│   │   │   └── validators.ts
│   │   ├── constants/
│   │   │   └── index.ts
│   │   └── config/
│   │       └── env.ts
│   │
│   ├── types/                # TypeScript type definitions
│   │   ├── index.ts         # Core types
│   │   └── api.ts           # API types
│   │
│   └── styles/               # Global styles
│       └── globals.css
│
├── public/                   # Static assets
│   ├── images/
│   └── videos/
│
├── .gitignore
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JDJCREATES/ARYA_MOON.git
cd ARYA_MOON
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```bash
# API Configuration
NEXT_PUBLIC_API_URL=/api

# Authentication
AUTH_SECRET=your-secret-key-here
SESSION_MAX_AGE=86400

# Payment Provider (e.g., Stripe)
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key

# Database
DATABASE_URL=your-database-url

# File Storage
STORAGE_PROVIDER=local
S3_BUCKET=your-s3-bucket
S3_REGION=your-s3-region
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Key Features to Implement

The application is scaffolded with placeholders for the following features:

### 1. Authentication
- User registration and login
- Session management
- Role-based access (Creator, Buyer, Admin)
- Password reset functionality

### 2. Gallery Management
- Create and edit galleries
- Upload images and videos
- Set pricing and visibility
- Organize media with titles and descriptions
- Tag and categorize galleries

### 3. Payment Processing
- Integration with payment providers (Stripe recommended)
- Secure checkout flow
- Purchase history
- Refund handling

### 4. Media Storage
- Cloud storage integration (AWS S3, Cloudinary, etc.)
- Image optimization
- Video transcoding
- Thumbnail generation

### 5. Access Control
- Gallery access after purchase
- Download restrictions
- Watermarking options
- Time-limited access

### 6. Search and Discovery
- Gallery search
- Filter by category, price, tags
- Creator profiles
- Featured galleries

## Component Architecture

### UI Components (`src/components/ui/`)
Reusable, generic UI components that can be used throughout the application.

### Layout Components (`src/components/layout/`)
Components that define the overall page structure (Header, Footer, Navigation).

### Feature Components (`src/components/gallery/`, `auth/`, `payment/`)
Domain-specific components tied to particular features.

## Services Layer

The services layer (`src/services/`) abstracts API calls and business logic:
- Each service handles a specific domain (auth, galleries, payments, media)
- Services use the API client for consistent request handling
- Returns typed responses for type safety

## Type System

All types are defined in `src/types/`:
- `index.ts` - Core business entities (User, Gallery, Media, Purchase)
- `api.ts` - API request/response types

## Styling

The project uses Tailwind CSS with a custom configuration:
- Dark mode support
- Custom color scheme
- Responsive utilities
- Component-specific styles

## Next Steps

1. **Set up a database** (PostgreSQL, MongoDB, etc.)
2. **Implement authentication** using NextAuth.js or similar
3. **Integrate payment provider** (Stripe, PayPal)
4. **Add media storage** (AWS S3, Cloudinary)
5. **Build admin dashboard** for platform management
6. **Add analytics** and reporting
7. **Implement notifications** (email, in-app)
8. **Add testing** (Jest, React Testing Library)

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

ISC License