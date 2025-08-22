# Codebase Structure

## Root Directory Structure
```
/
├── src/                    # Main source code
├── .bolt/                  # Bolt-specific files
├── .claude/                # Claude-specific files  
├── .serena/                # Serena tool files
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite build configuration
├── tsconfig.json           # TypeScript configuration (references)
├── tsconfig.app.json       # App-specific TypeScript config
├── tsconfig.node.json      # Node-specific TypeScript config
├── eslint.config.js        # ESLint configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── index.html              # HTML entry point
├── CLAUDE.md               # Development guidelines for Claude
└── README.md               # Project documentation (minimal)
```

## Source Code Structure (src/)
```
src/
├── App.tsx                 # Main app component with routing
├── main.tsx                # Application entry point
├── index.css               # Global styles
├── vite-env.d.ts          # Vite type definitions
├── components/             # Reusable UI components
│   ├── Header.tsx          # Main navigation
│   ├── Hero.tsx            # Landing hero section
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services overview
│   ├── ProductsSection.tsx # Products showcase
│   ├── GlobalReach.tsx     # Global presence map
│   ├── Testimonials.tsx    # Customer testimonials
│   ├── Contact.tsx         # Contact form
│   ├── CallToAction.tsx    # CTA section
│   ├── Footer.tsx          # Site footer
│   ├── LanguageToggle.tsx  # Language switcher
│   ├── AirplaneCursor.tsx  # Custom cursor animation
│   └── ServiceDetailPage.tsx # Service detail template
├── pages/                  # Route-specific pages
│   ├── SeaFreightPage.tsx
│   ├── AirFreightPage.tsx
│   └── CustomsDocumentationPage.tsx
├── contexts/               # React contexts
│   └── LanguageContext.tsx # Internationalization context
├── hooks/                  # Custom React hooks
│   ├── useIntersectionObserver.ts # Scroll animations
│   ├── useAnimatedCounters.ts     # Number animations
│   └── useTestimonialCarousel.ts  # Carousel logic
├── data/                   # Static data and constants
│   └── constants.ts        # Service details, testimonials
└── styles/                 # Custom styles
    └── animations.css      # Custom CSS animations
```

## Architecture Principles
- **Feature-first structure**: Related components grouped logically
- **Component composition**: Favor composition over inheritance
- **Single responsibility**: Each component has one clear purpose
- **TypeScript-first**: All components and hooks are typed
- **Custom hooks**: Business logic extracted into reusable hooks