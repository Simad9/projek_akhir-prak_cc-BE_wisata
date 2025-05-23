# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Install dependencies (including Prisma client)
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy Prisma schema and generated client files
COPY prisma ./prisma
COPY node_modules/.prisma ./node_modules/.prisma

# Copy rest of the source code
COPY . .

# Start the app
CMD ["node", "server.js"]
