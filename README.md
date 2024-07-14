# My Vite React App

This project uses Docker for both development and production environments.

## Quick Start Commands

### Development Mode

To run the app in development mode with hot reloading:
docker-compose up
Copy

### Production Mode

To build and run the app in production mode:
TARGET=production NODE_ENV=production docker-compose up --build
Copy

### Stopping the App

To stop either development or production mode:
docker-compose down
Copy

## Detailed Instructions

### Development

1. Make sure you have Docker and Docker Compose installed.
2. Run `docker-compose up` in the project root.
3. Open your browser and navigate to `http://localhost:3000`.
4. Make changes to your React files and see them reflected in real-time.

### Production

1. Run `TARGET=production NODE_ENV=production docker-compose up --build` in the project root.
2. Open your browser and navigate to `http://localhost:3000`.

## Notes

- The development setup uses Vite's built-in dev server and supports hot module replacement.
- The production setup builds the app and serves it using the `serve` package.
- The Dockerfile uses multi-stage builds to optimize for both development and production.
- Make sure to rebuild the Docker image if you change the Dockerfile or add new dependencies.
