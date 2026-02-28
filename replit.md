# G&E Industrial Supplies Website

## Overview

This is a marketing website for G&E Industrial Supplies, Inc., a HUBZone-certified small business providing facility maintenance, global logistics, environmental management, and construction services to government and defense contractors. The site showcases their capabilities, services, and contact information with a professional industrial/corporate aesthetic.

## Key Business Data
- **UEI**: G8CXJ2PMKN76
- **CAGE Code**: 711V1
- **Bonding**: $30M Single / $100M Aggregate
- **Headquarters**: El Paso, TX
- **Contact Email**: info@geindustrialsupplies.com
- **GSA Schedule Status**: Pending (not Active)
- **Middle East contracts**: Attributed to Vectrus Systems Corporation as prime

## Site Structure
- **Homepage**: Hero with credentials strip (UEI/CAGE/Bonding), 9-item Core Capabilities grid, Contract Vehicles preview (GSA shown as Pending), Leadership preview, Footer
- **About > Company Overview**: Three core strengths (Pricing, Workers, Technical Capabilities), Proven Performance (Camp As Sayliyah / CARE Doha), Our Commitment, Certifications
- **About > Executive Leadership**: 5-section layout (Executive Leadership, Government Contracts, US Sales CONUS, Global Sales OCONUS, Engineering) with 12 members
- **Services**: 6 service categories aligned to federal terminology (Base & Facility Support, Global Logistics, Waste Management, Construction, Industrial Supply, Professional Solutions)
- **Contract Vehicles**: 5 vehicles with NAICS codes section, GSA as Pending (yellow), Vectrus attribution on LOGCAP V and DLA
- **Contact**: Contact form with database persistence
- **Favicon**: Custom SVG gear icon matching navbar logo

## Leadership Team (12 members, 5 sections)
- **Executive Leadership**: Ajith K. Nair (President & COO), John Paul (VP Global Sales), David Banks (VP Mission Operations)
- **Government Contracts**: Melissa Harris Tate (Lead Director, BD & Capture), Stephan Mentler (Director, Civil Solutions)
- **US Sales and Services (CONUS)**: Jeffery Bell (Senior Sales Manager), Eric Bach (Senior Sales Representative), Brandy Hardin (HR & Administration Manager)
- **Global Sales and Services (OCONUS)**: Prakash Gopi (GM, Middle East Operations), Merna Almekkawi (Sales & Marketing Engineer)
- **Engineering**: Vivek Krishnamoorthy (Civil Engineer & Program Manager), Muhammed Jishad (QA / Civil Engineer)

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom industrial blue/slate color palette
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll reveals
- **State Management**: TanStack React Query for server state and data fetching
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ES modules
- **API Pattern**: REST endpoints defined in `shared/routes.ts` with Zod schemas for type-safe request/response validation
- **Build System**: Custom build script using Vite for frontend and esbuild for backend bundling

### Data Storage
- **Database**: PostgreSQL via `node-postgres` (pg) connection pool
- **ORM**: Drizzle ORM with schema defined in `shared/schema.ts`
- **Migrations**: Drizzle Kit for schema push (`db:push` command)

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Database table definitions and Zod validation schemas
- `routes.ts`: API endpoint definitions with input/output type contracts

### Development vs Production
- **Development**: Vite dev server with HMR, served through Express middleware
- **Production**: Static files built to `dist/public`, served by Express static middleware with SPA fallback

## External Dependencies

### Database
- PostgreSQL database (connection via `DATABASE_URL` environment variable)
- `connect-pg-simple` for session storage (available but may not be in active use)

### Third-Party Services
- Google Fonts (Montserrat, Inter) loaded via CDN in `index.html`
- Unsplash images used for service/hero backgrounds (external URLs in component files)

### Key NPM Packages
- **UI**: Full shadcn/ui component suite with Radix UI primitives
- **Data**: Drizzle ORM, TanStack React Query, Zod
- **Forms**: React Hook Form with `@hookform/resolvers`
- **Build**: Vite, esbuild, TypeScript
- **Utilities**: date-fns, clsx, tailwind-merge, class-variance-authority