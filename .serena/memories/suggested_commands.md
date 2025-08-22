# Suggested Commands

## Development Commands

### Daily Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality
```bash
# Run ESLint checks
npm run lint

# Fix ESLint errors automatically
npm run lint -- --fix
```

### Package Management
```bash
# Install dependencies
npm install

# Add a package
npm install package-name

# Add development dependency
npm install -D package-name

# Remove a package
npm uninstall package-name
```

### System Commands (Linux)
```bash
# File operations
ls -la              # List files with details
find . -name "*.tsx" # Find TypeScript React files
grep -r "pattern"   # Search for pattern in files
cd directory       # Change directory

# Git operations
git status          # Check repository status
git add .           # Stage all changes
git commit -m "message" # Commit changes
git push            # Push to remote
git pull            # Pull from remote
```

## Important Notes
- **No test command**: No testing framework configured yet
- **No format command**: Formatting handled by ESLint
- **Vite dev server**: Hot reload enabled by default
- **TypeScript**: Compilation handled by Vite automatically