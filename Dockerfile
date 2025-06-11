# 1. Base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy files
COPY . .

# 4. Install dependencies
RUN npm install

# 5. Build the app
RUN npm run build

# 6. Expose port app runs on
EXPOSE 3000

# 7. Run in production mode
CMD ["npm", "run", "preview"]
