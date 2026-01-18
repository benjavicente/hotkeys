# TanStack Keys

A complete keys for creating new TanStack libraries with all the tooling and infrastructure you need.

## What's Included

- ✅ Framework-agnostic core package
- ✅ React and Solid adapters (easy to add more)
- ✅ Devtools packages for debugging
- ✅ Full monorepo setup with pnpm + Nx
- ✅ TypeScript configuration
- ✅ Testing setup with Vitest
- ✅ Documentation structure with TypeDoc
- ✅ Example applications
- ✅ GitHub workflows (CI, release, autofix)
- ✅ Changesets for versioning
- ✅ ESLint + Prettier
- ✅ Issue and PR templates

## Getting Started

1. Clone or copy this keys
2. Follow the instructions in TEMPLATE_GUIDE.md
3. Search and replace "keys" with your library name
4. Replace placeholder code with your implementation
5. Update documentation
6. Start building!

## Package Structure

- `@tanstack/keys` - Core library
- `@tanstack/react-keys` - React adapter
- `@tanstack/solid-keys` - Solid adapter
- `@tanstack/keys-devtools` - Base devtools
- `@tanstack/react-keys-devtools` - React devtools
- `@tanstack/solid-keys-devtools` - Solid devtools

## Commands

```bash
pnpm install          # Install dependencies
pnpm build:all        # Build all packages
pnpm test:lib         # Run tests
pnpm test:pr          # Run PR checks
pnpm format           # Format code
pnpm generate-docs    # Generate documentation
pnpm watch            # Watch mode
```

## Documentation

See TEMPLATE_GUIDE.md for detailed instructions on customizing this keys.

## License

MIT
