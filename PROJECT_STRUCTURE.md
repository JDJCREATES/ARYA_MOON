# Project Structure Documentation

This document provides a detailed overview of the ARYA_MOON project structure, explaining the purpose of each directory and key files.

## Directory Overview

### `/src/app` - Next.js App Router
Contains all pages and API routes using Next.js 14+ App Router architecture.

```
app/
├── layout.tsx              # Root layout with global providers
├── page.tsx                # Home page
├── galleries/              # Gallery pages
│   ├── page.tsx           # Gallery listing page
│   └── [id]/              # Dynamic gallery detail pages
│       └── page.tsx
├── auth/                   # Authentication pages
│   ├── signin/
│   │   └── page.tsx       # Sign in page
│   └── signup/
│       └── page.tsx       # Sign up page
├── creator/                # Creator-specific pages
│   └── dashboard/
│       └── page.tsx       # Creator dashboard
└── api/                    # API routes
    ├── galleries/
    │   └── route.ts       # Gallery CRUD endpoints
    ├── auth/
    │   └── signin/
    │       └── route.ts   # Authentication endpoint
    └── payments/
        └── checkout/
            └── route.ts   # Payment checkout endpoint
```

### `/src/components` - React Components
Organized by feature and reusability.

#### `/src/components/ui` - Generic UI Components
Reusable, context-independent components:
- `Button.tsx` - Customizable button with variants
- `Card.tsx` - Container component for content cards

#### `/src/components/layout` - Layout Components
Page structure components:
- `Header.tsx` - Site header with navigation
- `Footer.tsx` - Site footer with links

#### `/src/components/gallery` - Gallery Components
Gallery-specific functionality:
- `GalleryCard.tsx` - Individual gallery preview card
- `GalleryGrid.tsx` - Grid layout for galleries
- `MediaViewer.tsx` - Image/video viewer with thumbnails

#### `/src/components/auth` - Authentication Components
- `SignInForm.tsx` - Login form with validation

#### `/src/components/payment` - Payment Components
- `CheckoutButton.tsx` - Purchase initiation button

### `/src/services` - Business Logic Layer
Handles API communication and business logic.

```
services/
├── api/
│   └── client.ts           # Base API client with HTTP methods
├── auth/
│   └── authService.ts      # Authentication operations
├── gallery/
│   └── galleryService.ts   # Gallery CRUD operations
├── payment/
│   └── paymentService.ts   # Payment processing
└── media/
    └── mediaService.ts     # Media upload/management
```

**Purpose**: Abstracts API calls from components, providing a consistent interface for data operations.

### `/src/hooks` - Custom React Hooks
Reusable state logic:
- `useAuth.ts` - Authentication state and methods
- `useGallery.ts` - Gallery data fetching and management

**Purpose**: Encapsulates complex state logic for reuse across components.

### `/src/lib` - Utilities and Configuration

#### `/src/lib/utils`
Helper functions:
- `formatters.ts` - Data formatting (price, date, text)
- `validators.ts` - Input validation functions

#### `/src/lib/constants`
- `index.ts` - Application-wide constants (categories, status codes, limits)

#### `/src/lib/config`
- `env.ts` - Environment variable configuration

### `/src/types` - TypeScript Definitions
Type safety across the application:
- `index.ts` - Core business entity types (User, Gallery, Media, Purchase)
- `api.ts` - API request/response types

### `/src/styles` - Global Styles
- `globals.css` - Global CSS with Tailwind directives

### `/public` - Static Assets
- `/images` - Static images
- `/videos` - Static videos

## Key Files

### Configuration Files

#### `next.config.ts`
Next.js configuration including:
- Image optimization settings
- Remote image patterns

#### `tsconfig.json`
TypeScript configuration:
- Path aliases (`@/*` → `./src/*`)
- Strict mode enabled
- React JSX settings

#### `tailwind.config.ts`
Tailwind CSS configuration:
- Content paths for CSS purging
- Custom theme extensions
- Color scheme definitions

#### `postcss.config.mjs`
PostCSS configuration for Tailwind processing

#### `.eslintrc.json`
ESLint configuration using Next.js recommended rules

#### `.gitignore`
Specifies files to exclude from version control:
- `node_modules`
- `.next` build directory
- `.env` files
- Build artifacts

#### `package.json`
Project dependencies and scripts:
- `dev` - Development server
- `build` - Production build
- `start` - Production server
- `lint` - Code linting

## Architecture Patterns

### 1. Separation of Concerns
- **Presentation**: Components focus on UI
- **Logic**: Services handle business logic
- **Data**: Types define data structures
- **Utils**: Helper functions are isolated

### 2. Modularity
Each feature (gallery, auth, payment) has:
- Dedicated components
- Service layer
- Type definitions
- Custom hooks (when needed)

### 3. Type Safety
- All data structures have TypeScript types
- API responses are typed
- Props are strictly typed
- Environment variables are typed

### 4. Scalability
- Feature-based organization
- Easy to add new features
- Clear dependencies
- Reusable components

## Data Flow

```
User Interaction
    ↓
Component
    ↓
Custom Hook (optional)
    ↓
Service Layer
    ↓
API Route
    ↓
Database/External API
```

## Adding New Features

To add a new feature (e.g., "Reviews"):

1. **Create types** in `/src/types/index.ts`:
   ```typescript
   export interface Review {
     id: string;
     // ...
   }
   ```

2. **Create service** in `/src/services/review/`:
   ```typescript
   export const reviewService = {
     getReviews: async () => { /* ... */ }
   }
   ```

3. **Create components** in `/src/components/review/`:
   ```tsx
   export default function ReviewCard() { /* ... */ }
   ```

4. **Create hook** (if needed) in `/src/hooks/`:
   ```typescript
   export function useReviews() { /* ... */ }
   ```

5. **Create API routes** in `/src/app/api/reviews/`:
   ```typescript
   export async function GET() { /* ... */ }
   ```

6. **Create pages** in `/src/app/reviews/`:
   ```tsx
   export default function ReviewsPage() { /* ... */ }
   ```

## Best Practices

1. **Components**: Keep them small and focused
2. **Services**: One service per domain
3. **Types**: Define types before implementation
4. **Hooks**: Extract complex logic from components
5. **Utils**: Make functions pure and testable
6. **API Routes**: Follow REST conventions
7. **File Naming**: Use PascalCase for components, camelCase for utilities

## Environment Variables

Required environment variables (see `.env.example`):
- `AUTH_SECRET` - Authentication secret key
- `DATABASE_URL` - Database connection string
- `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` - Stripe public key
- `STRIPE_SECRET_KEY` - Stripe secret key
- Storage provider credentials (S3, etc.)

## Development Workflow

1. Start development server: `npm run dev`
2. Make changes to relevant files
3. Test in browser at `http://localhost:3000`
4. Run linter: `npm run lint`
5. Build for production: `npm run build`
6. Test production build: `npm start`

## Testing Strategy (To Be Implemented)

Recommended testing approach:
- **Unit Tests**: Utils, services, hooks
- **Component Tests**: UI components
- **Integration Tests**: API routes
- **E2E Tests**: Critical user flows

## Security Considerations

1. **Authentication**: Implement secure token-based auth
2. **Authorization**: Role-based access control
3. **Input Validation**: Validate all user inputs
4. **SQL Injection**: Use parameterized queries
5. **XSS Protection**: Sanitize user-generated content
6. **HTTPS**: Enforce HTTPS in production
7. **Environment Variables**: Never commit secrets
8. **Rate Limiting**: Implement API rate limiting
9. **CORS**: Configure CORS appropriately

## Performance Optimization

1. **Image Optimization**: Use Next.js Image component
2. **Code Splitting**: Automatic with Next.js App Router
3. **Lazy Loading**: Dynamic imports for heavy components
4. **Caching**: Implement appropriate caching strategies
5. **CDN**: Serve static assets from CDN
6. **Database Indexing**: Index frequently queried fields

## Deployment

Recommended platforms:
- **Vercel**: Optimized for Next.js
- **AWS**: Full control and scalability
- **Netlify**: Simple deployment
- **Railway**: Database and app hosting

## Monitoring and Analytics

To be implemented:
- Error tracking (Sentry)
- Analytics (Google Analytics, Plausible)
- Performance monitoring (Vercel Analytics)
- User behavior tracking

## Future Enhancements

Planned features:
- [ ] User reviews and ratings
- [ ] Creator analytics dashboard
- [ ] Email notifications
- [ ] Social media sharing
- [ ] Gallery recommendations
- [ ] Subscription model
- [ ] Mobile app
- [ ] Multi-language support
- [ ] Advanced search with filters
- [ ] Video previews
- [ ] Bulk upload tools
- [ ] Automated content moderation

## Support and Documentation

For questions or issues:
1. Check this documentation
2. Review README.md
3. Check inline code comments
4. Contact the development team

## License

ISC License - See LICENSE file for details
