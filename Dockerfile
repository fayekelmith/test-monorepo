# Multi-stage Dockerfile for monorepo

FROM node:18-alpine AS base
RUN npm install -g pnpm
WORKDIR /app

# Install dependencies
FROM base AS dependencies
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY packages/api/package.json ./packages/api/
COPY packages/web/package.json ./packages/web/
COPY packages/shared/package.json ./packages/shared/
RUN pnpm install --frozen-lockfile

# Build stage
FROM dependencies AS build
COPY . .
RUN pnpm build

# Production API image
FROM node:18-alpine AS api
WORKDIR /app
COPY --from=build /app/packages/api/dist ./dist
COPY --from=build /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/index.js"]

# Production web image
FROM nginx:alpine AS web
COPY --from=build /app/packages/web/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
