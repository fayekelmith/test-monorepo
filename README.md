# Test Monorepo

A demonstration monorepo showcasing a full-stack TypeScript application with pnpm workspaces.

## Overview

This monorepo contains a complete application stack:
- **API**: Backend service built with TypeScript
- **Web**: React frontend application
- **Shared**: Common utilities and types
- **E2E**: Playwright test suite

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 8+
- Docker (optional)

### Installation

```bash
pnpm install
```

### Development

```bash
# Start all services
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test
```

### Docker

```bash
docker-compose up
```

## Project Structure

See [CLAUDE.md](CLAUDE.md) for detailed architecture information.

## Documentation

- [API Documentation](docs/API.md)
