# Style and Conventions

## Code Style (from CLAUDE.md)

### Core Philosophy
- **KISS (Keep It Simple, Stupid)**: Favor simple, declarative solutions
- **YAGNI (You Aren't Gonna Need It)**: Don't add complexity until needed
- **Single Responsibility Principle**: Each component has one purpose
- **Composition over Inheritance**: Use component composition
- **Fail Fast**: Validate props and throw helpful errors early

### File and Function Limits
- Components: under 200 lines
- Hooks: under 100 lines, single concern
- Files: under 300 lines (refactor if larger)
- Line length: max 100 characters (ESLint + Prettier enforced)

### Naming Conventions
- **Components**: PascalCase (e.g., `ServiceCard.tsx`)
- **Hooks**: useCamelCase (e.g., `useIntersectionObserver`)
- **Variables & functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Interfaces/Types**: PascalCase (e.g., `ServiceDetail`)

### TypeScript Standards
- Props always typed with interface or type
- Default values handled inside component
- Always type hooks and API responses
- Use string literals with double quotes
- JSX Props in camelCase

### Component Standards
```typescript
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
```

### Accessibility Requirements
- Always use alt on images
- Use semantic HTML
- Ensure keyboard navigation works

### Styling Approach
- **Tailwind CSS**: Prefer utility classes
- **Custom CSS**: Only when necessary
- **Responsive**: Mobile-first approach
- **Animations**: Framer Motion for complex animations