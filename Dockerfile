FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# COPY kode sumber setelah install dependencies agar build cache maksimal
COPY . .

# Jalankan prisma generate untuk generate prisma client
RUN npx prisma generate
RUN npx prisma migrate deploy

# Set environment variable untuk database
ENV DATABASE_URL="mysql://root:@34.44.40.36:3306/projek_akhir_cc"

EXPOSE 5000

CMD ["node", "index.js"]
