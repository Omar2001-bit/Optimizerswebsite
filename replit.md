# Overview

This is a modern full-stack web application built with React and Express.js that appears to be a Conversion Rate Optimization (CRO) service website. The application features a sophisticated landing page with multiple sections showcasing CRO services, client results, ROI calculators, and contact forms. It's designed as a business website for a CRO agency targeting GCC markets, with comprehensive UI components and a clean, professional design system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for consistent theming
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for HTTP server
- **Language**: TypeScript with ESM modules for modern JavaScript features
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) and interface for future database integration
- **Development Setup**: Custom Vite integration for seamless full-stack development

## Database & ORM
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Database**: PostgreSQL (via Neon serverless) with connection pooling
- **Schema**: Centralized schema definitions in shared directory for type consistency
- **Migrations**: Drizzle Kit for database migration management

## Component System
- **Design System**: Comprehensive UI component library with consistent styling
- **Accessibility**: Built on Radix UI primitives ensuring WCAG compliance
- **Theming**: CSS custom properties with light/dark mode support
- **Icons**: Lucide React for consistent iconography

## Development Tools
- **Type Safety**: Strict TypeScript configuration across client, server, and shared code
- **Code Quality**: ESLint and Prettier for consistent code formatting
- **Build Process**: Separate build steps for client (Vite) and server (esbuild)
- **Hot Reload**: Development server with HMR for rapid iteration

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Drizzle ORM**: Type-safe database operations and schema management

## UI and Design
- **Radix UI**: Headless UI components for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Icon library for consistent visual elements
- **Google Fonts**: Custom font loading (Sora, DM Sans, Fira Code, Geist Mono)

## Development and Build Tools
- **Vite**: Build tool and development server with plugins for React and error handling
- **TypeScript**: Static type checking and enhanced developer experience
- **PostCSS**: CSS processing with Tailwind CSS integration
- **ESBuild**: Fast JavaScript bundler for server-side code

## State Management and Data Fetching
- **TanStack Query**: Server state management, caching, and data synchronization
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation for type-safe data handling

## Utilities and Libraries
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Type-safe CSS class composition
- **Clsx & Tailwind Merge**: Conditional CSS class handling
- **React Router (Wouter)**: Lightweight routing solution
- **Embla Carousel**: Touch-friendly carousel component