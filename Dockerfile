# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Install dependencies (including Prisma client)
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy rest of the source code
COPY . .

# Prisma Generation
RUN npx prisma generate

# Expose the port the app runs on
EXPOSE 5001

# Start the app
CMD ["node", "index.js"]
