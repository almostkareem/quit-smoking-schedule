# Use the official Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# install pm2 globally

RUN npm install pm2 -g

# Copy the application code
COPY . .

# Expose a port if needed (not required for this script)

# EXPOSE 3000

# Run the script
CMD ["pm2-runtime", "start", "app.js"]
