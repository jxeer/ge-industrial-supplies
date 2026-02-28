# G&E Industrial Supplies, Inc. - Corporate Website

## Tech Stack

### Frontend
- **React 18** - UI component library
- **Vite** - Build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Page animations
- **Wouter** - Lightweight client-side routing
- **React Query (TanStack Query)** - Server state management
- **React Hook Form + Zod** - Form handling and validation
- **Shadcn/UI** - Component library

### Backend
- **Express.js** - Node.js web framework
- **TypeScript** - Type-safe JavaScript
- **Drizzle ORM** - Database toolkit
- **PostgreSQL** - Relational database
- **Zod** - Schema validation

## Pages

### Home (`/`)
Landing page featuring:
- Full-screen space/Earth background image
- Centered hero with company tagline
- Six clickable service panels at bottom

### Capabilities (`/capabilities`)
Company capabilities statement with:
- Capitol building background
- Two-column layout (Company Data + Corporate Summary)
- Download button for capabilities PDF
- CAGE Code and UEI identifiers

### Services (`/services`)
Services overview page with:
- Grid of six service categories
- Links to individual service detail pages
- Matching dark theme with other pages

### Service Detail (`/services/:serviceId`)
Individual service pages for each of the six services:
- Facility Maintenance
- Global Logistics
- Environmental Management
- Construction Services
- Specialized Equipment
- Professional Solutions

Each page features relevant background imagery and detailed service information.

### Contact (`/contact`)
Contact form page with:
- Form fields: Name, Company, Email, Phone, Message
- Form validation using Zod schemas
- Database persistence for submissions
- Matching dark theme design

## API Endpoints

### `POST /api/contact/submit`
Submit a contact form inquiry.

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "company": "string (optional)",
  "message": "string (required)"
}
```

**Response:**
- `201`: Submission created successfully
- `400`: Validation error

## Company Information

**G&E Industrial Supplies, Inc.**
- **Founded:** 1989
- **Headquarters:** 857 Pendale Rd, El Paso, TX 79907
- **SBA Status:** HUBZone Certified
- **CAGE Code:** 711V1
- **UEI:** G8CXJ2PMKN76

### Services
1. **Facility Maintenance** - Base ops and life support under LOGCAP V
2. **Global Logistics** - Industrial machinery and commercial equipment wholesale
3. **Environmental Management** - Waste elimination and utility management
4. **Construction Services** - Large-scale infrastructure projects
5. **Specialized Equipment** - Heavy machinery and tactical vehicle deployment
6. **Professional Solutions** - Technical manpower and HR solutions

## License

Proprietary - G&E Industrial Supplies, Inc.
