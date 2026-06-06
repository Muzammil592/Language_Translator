# --- STAGE 1: Build Phase ---
# Node 18 ko badal kar node:22-alpine kar diya taake Vite 8 ko support mile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- STAGE 2: Production Serving Phase ---
FROM nginx:1.23-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]