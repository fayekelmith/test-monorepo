# Claude Development Guide

This document provides guidance for AI-assisted development in this monorepo.

## Project Structure

This is a pnpm monorepo containing:
- `packages/api` - TypeScript backend API
- `packages/web` - React frontend application
- `packages/shared` - Shared utilities and types
- `packages/e2e` - Playwright end-to-end tests

## Development Commands

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Start development servers
pnpm dev
```

## Architecture Notes

- All packages use TypeScript
- Shared code should go in `packages/shared`
- API and web communicate via REST endpoints
- E2E tests validate the entire stack
