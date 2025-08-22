# Important Dependencies

## Core Dependencies

### React Ecosystem
- **react**: 18.3.1 - Core React library
- **react-dom**: 18.3.1 - DOM rendering
- **react-router-dom**: 6.30.1 - Client-side routing

### UI and Animation
- **framer-motion**: 12.23.12 - Advanced animations and transitions
- **lucide-react**: 0.344.0 - Icon library (optimized, excluded from Vite deps)
- **react-icons**: 5.5.0 - Additional icon sets

### Styling
- **tailwindcss**: 3.4.1 - Utility-first CSS framework
- **postcss**: 8.4.35 - CSS post-processor
- **autoprefixer**: 10.4.18 - Automatic vendor prefixing

### Development Tools
- **vite**: 5.4.2 - Build tool and dev server
- **typescript**: 5.5.3 - Type checking
- **@vitejs/plugin-react**: 4.3.1 - React support for Vite

### Code Quality
- **eslint**: 9.9.1 - Linting
- **typescript-eslint**: 8.3.0 - TypeScript ESLint rules
- **eslint-plugin-react-hooks**: 5.1.0-rc.0 - React Hooks linting
- **eslint-plugin-react-refresh**: 0.4.11 - React Fast Refresh linting

## Important Configuration Notes

### Vite Configuration
- Lucide React excluded from optimization for better performance
- React plugin enabled for JSX/TSX support

### TypeScript Configuration
- Project references setup (app + node configs)
- Strict type checking enabled

### ESLint Configuration
- Modern flat config format
- TypeScript-aware rules
- React Hooks rules enabled
- React Fast Refresh rules for development