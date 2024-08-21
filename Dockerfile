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

    npm start
