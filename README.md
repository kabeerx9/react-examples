# My Vite React App

This project uses Docker for both development and production environments.

## Development

To run the app in development mode with real-time changes:

1. Make sure you have Docker and Docker Compose installed.
2. Run the following command in the project root:

docker-compose up

3. Open your browser and navigate to `http://localhost:3000`.
4. Make changes to your React files and see them reflected in real-time.

To stop the development server:

docker-compose down

## Production

To build and run the app in production mode:

1. Build the Docker image:

docker build -t my-vite-app .

2. Run the container:

docker run -p 3000:3000 my-vite-app

3. Open your browser and navigate to `http://localhost:3000`.

## Switching Between Dev and Prod

- For development, always use `docker-compose up`.
- For production, use the `docker build` and `docker run` commands mentioned above.

## Notes

- The development setup uses Vite's built-in dev server and supports hot module replacement.
- The production setup builds the app and serves it using the `serve` package.
- Make sure to run `docker-compose build` or `docker build` whenever you change the Dockerfile or add new dependencies.

#The vite.config would be modified to

import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
plugins: [react()],
resolve: {
alias: {
'@': path.resolve(\_\_dirname, './src'),
},
},
server: {
watch: {
usePolling: true,
},
host: true, // needed for the Docker Container port mapping to work
strictPort: true,
port: 3000, // you can replace this port with any port
},
});
