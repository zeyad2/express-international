# Task Completion Workflow

## When a Task is Completed

### Code Quality Checks
1. **Run ESLint**: `npm run lint`
   - Fix any linting errors with `npm run lint -- --fix`
   - Ensure all TypeScript types are correct
   - Verify component prop interfaces are properly defined

2. **Build Check**: `npm run build`
   - Ensure production build succeeds
   - Check for any build-time TypeScript errors
   - Verify no missing dependencies

### Code Review Checklist
- [ ] Component follows single responsibility principle
- [ ] Props are properly typed with interfaces
- [ ] Accessibility requirements met (alt tags, semantic HTML, keyboard nav)
- [ ] Tailwind classes used appropriately
- [ ] File size under limits (components <200 lines, hooks <100 lines)
- [ ] Naming conventions followed (PascalCase components, camelCase functions)
- [ ] No hardcoded strings (use constants or translation context)

### Performance Considerations
- [ ] Use React.memo for expensive re-renders if needed
- [ ] Use useCallback for expensive computations
- [ ] Optimize images for web
- [ ] Check bundle size impact with `npm run build`

### Security Checks
- [ ] No secrets committed to code
- [ ] User input properly escaped/validated
- [ ] No dangerous HTML rendering without sanitization

### Documentation Updates
- [ ] Update CLAUDE.md if new patterns introduced
- [ ] Add comments for complex business logic
- [ ] Update component prop documentation if needed

## Testing Strategy (Future)
Currently no testing framework configured. When adding tests:
- Use Jest + React Testing Library
- Test behavior, not implementation
- Keep tests close to components
- Use descriptive test names