# ---- Build Stage ----
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source & build
COPY . .
RUN npm run build

# ---- Production Stage ----
FROM node:18-alpine
WORKDIR /app

# Copy only what we need from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/node_modules ./node_modules

# Expose port & start
EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "start"]