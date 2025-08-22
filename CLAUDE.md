# CLAUDE.md

This file provides comprehensive guidance to Claude Code when working with React + TypeScript code in this repository.
It explains the project’s philosophy, architecture, workflows, conventions, and patterns to ensure Claude can contribute code consistently and correctly.

## Core Development Philosophy
KISS (Keep It Simple, Stupid)

Favor simple, declarative solutions over over-engineered patterns. Simplicity makes components easier to read, maintain, and extend.

YAGNI (You Aren’t Gonna Need It)

Do not add props, abstractions, or complex hooks until they are actually needed.

Design Principles

Single Responsibility Principle: Each component or hook should have one purpose.

Open/Closed Principle: Components should be open for extension (via props/children), but closed for modification.

Composition over Inheritance: Use component composition instead of class inheritance.

Fail Fast: Validate props and throw helpful errors early in development.

🧱 Code Structure & Modularity
File and Function Limits

Components should be under 200 lines. Split into smaller components when growing.

Hooks should be under 100 lines and focus on a single concern.

Keep files short and focused; if a file grows >300 lines, refactor.

Line length max 100 characters (enforced by ESLint + Prettier).

Project Architecture

Follow feature-first (vertical slice) structure:

src/
  main.tsx              # App entry
  App.tsx               # Root component & router

  contexts/             # Context providers (e.g., LanguageContext)
  hooks/                # Shared custom hooks
  components/           # Reusable UI components
  styles/               # Tailwind config & global CSS
  data/                 # Static data (services, testimonials, etc.)

  features/
    services/
      SeaFreightPage.tsx
      AirFreightPage.tsx
      CustomsDocumentationPage.tsx

    testimonials/
      Testimonials.tsx
      useTestimonialCarousel.ts

  tests/
    __mocks__/          # Mocks for testing
    unit/               # Unit tests for hooks/components
    integration/        # Cross-component tests

🛠️ Development Environment
Package Management

This project uses npm (can be swapped to pnpm or yarn if team decides).

# Install dependencies
npm install

# Add a package
npm install package-name

# Add a dev dependency
npm install -D package-name

# Remove a package
npm uninstall package-name

Development Commands
# Start dev server
npm run dev

# Build production
npm run build

# Preview production build
npm run preview

# Run lint checks
npm run lint

# Fix linting errors
npm run lint -- --fix

# Run tests
npm run test

📋 Style & Conventions
Code Style

TypeScript first: Always type props, hooks, and API responses.

Formatting: Enforced by Prettier (run via ESLint).

Tailwind: Prefer utility classes; use custom CSS only when necessary.

String literals: Use double quotes consistently.

JSX Props: Use camelCase.

Naming Conventions

Components: PascalCase (e.g., ServiceCard.tsx).

Hooks: useCamelCase (e.g., useIntersectionObserver).

Variables & functions: camelCase.

Constants: UPPER_SNAKE_CASE.

Interfaces/Types: PascalCase (e.g., ServiceDetail).

🧪 Testing Strategy
Testing Tools

Jest + React Testing Library.

Playwright (optional) for end-to-end flows.

Best Practices

Test behavior, not implementation details.

Use descriptive test names.

Keep tests next to the code they test (or in tests/ if shared).

Example Test
import { render, screen, fireEvent } from "@testing-library/react";
import LanguageToggle from "./LanguageToggle";

test("toggles language between English and Arabic", () => {
  render(<LanguageToggle />);
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByText("العربية")).toBeInTheDocument();
});

🚨 Error Handling
Error Boundaries

Use React Error Boundaries for catching runtime errors.

Display fallback UI instead of crashing the app.

API Errors

Wrap API calls in try/catch.

Provide meaningful error messages (localized if possible).

🔧 Configuration Management

Use .env files for environment variables.

Prefix React env vars with VITE_ (Vite requirement).

Example:

VITE_API_URL=https://api.example.com
VITE_ENABLE_ANALYTICS=true


Access in code:

const apiUrl = import.meta.env.VITE_API_URL;

🏗️ Components & Props
Component Standards

Props always typed with interface or type.

Default values handled inside component (or via defaultProps).

Accessibility:

Always use alt on images.

Use semantic HTML.

Ensure keyboard navigation works.

Example Component
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="rounded-lg shadow-md p-4 flex items-center gap-3">
      {icon}
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

🔄 Git Workflow
Branch Strategy

main → Production-ready code.

develop → Integration branch.

feature/* → New features.

fix/* → Bug fixes.

docs/* → Documentation changes.

test/* → Test-related changes.

Commit Messages
<type>(<scope>): <subject>

<body>

<footer>


Types: feat, fix, docs, style, refactor, test, chore

Example:

feat(services): add new air freight pricing section

- Create ServiceCard component
- Add translations for EN/AR
- Update constants with new service

Closes #45

📊 Performance Considerations

Use React.memo and useCallback for expensive re-renders.

Lazy load routes & components with React.lazy.

Use Suspense + code-splitting for faster loads.

Optimize images (Next-gen formats, responsive sizes).

Cache API results when possible.

🛡️ Security Best Practices

Never commit secrets → use .env.

Escape/validate user input.

Enable Content Security Policy (CSP).

Sanitize any HTML before rendering.

Keep dependencies updated (npm audit fix).

🔍 Debugging Tools

Use React DevTools.

Add debug logs via console.debug (remove before production).

For network debugging: use browser DevTools or tools like Mock Service Worker (MSW).

📚 Useful Resources

React Docs: https://react.dev

TypeScript Handbook: https://www.typescriptlang.org/docs/

React Testing Library: https://testing-library.com/docs/react-testing-library/intro/

Tailwind CSS: https://tailwindcss.com/docs

Vite: https://vitejs.dev/

⚠️ Important Notes

NEVER ASSUME OR GUESS – Ask if uncertain.

Follow TypeScript + ESLint rules strictly.

Always update translations when adding UI text.

Keep CLAUDE.md updated when patterns evolve.
- the server is running, no need to run npm run dev