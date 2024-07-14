# Base stage for both development and production
FROM node:20 AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Development stage
FROM base AS development
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Build stage
FROM base AS build
RUN npm run build

# Production stage
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=build /app/dist ./dist
RUN npm install -g serve
EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "3000"]