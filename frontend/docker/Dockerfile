# Stage 1: Build the Angular app
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Run unit tests
FROM node:22-alpine AS tester
WORKDIR /app
COPY --from=builder /app /app
RUN npm install
RUN npm run test

# Stage 3: Production image with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon 1  off;"]