# ------------------- Stage 1: Build Stage ------------------------------
    FROM node:21 AS client

    # Set the working directory to /app
    WORKDIR /app
    
    # Copy the package.json and package-lock.json for dependency installation
    COPY package*.json ./
    
    # Install dependencies
    RUN npm install
    
    # Copy the rest of the application code
    COPY . .

 # Expose port 3000 for the Node.js application
    EXPOSE 3000
    
    # Define the default command to run the application in development mode
    CMD ["npm", "start"]
