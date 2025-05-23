# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Install dependencies (including Prisma client)
COPY package.json package-lock.json ./
RUN npm ci

# Generate Prisma client
RUN npx prisma generate

# Copy rest of the source code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Start the app
CMD ["node", "index.js"]