# 1. Base image
FROM node:18-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy files
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of app ater install
COPY . .

# 6. Build the app
RUN npm run build

# 7. Start from fresh, minimal image
FROM node:18-alpine

# 8. Set working directory
WORKDIR /app

# 9. Copy only built output and node_modules
COPY --from=builder /app ./
 
# 10. Expose port app runs on
EXPOSE 3000

# 11. Run in production mode
CMD ["npm", "run", "preview"]
