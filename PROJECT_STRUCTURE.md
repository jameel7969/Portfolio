# Project Structure

This is a React + Vite application with Bootstrap styling and a modular architecture.

## Directory Structure

```
src/
├── assets/              # Static assets
│   ├── images/         # Image files
│   └── styles/         # Custom CSS/SCSS files
├── components/         # Reusable components
│   ├── common/         # Common/shared components (Button, Card, etc.)
│   └── layout/         # Layout components (Navbar, Footer, Layout)
├── context/            # React Context providers
├── hooks/              # Custom React hooks
├── pages/              # Page components (Home, About, Contact, etc.)
├── services/           # API services and external integrations
├── utils/              # Utility functions and helpers
├── App.jsx             # Main application component with routing
└── main.jsx            # Application entry point
```

## Installed Packages

- **React** - UI library
- **Vite** - Build tool and dev server
- **Bootstrap** - CSS framework
- **React Bootstrap** - Bootstrap components for React
- **React Router DOM** - Client-side routing

## Available Pages

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page with form

## Component Organization

### Layout Components (`components/layout/`)
- **Navbar.jsx** - Navigation bar with routing
- **Footer.jsx** - Page footer
- **Layout.jsx** - Main layout wrapper with header and footer

### Common Components (`components/common/`)
- **Button.jsx** - Reusable button component
- **Card.jsx** - Reusable card component

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Adding New Pages

1. Create a new component in `src/pages/`
2. Import and add route in `src/App.jsx`
3. Add navigation link in `src/components/layout/Navbar.jsx`

## Adding New Components

- Place shared components in `src/components/common/`
- Place layout components in `src/components/layout/`
- Create feature-specific folders if needed
