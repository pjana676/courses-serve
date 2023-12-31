# Use a base Node.js image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose the port your application listens on
EXPOSE 8000

# Specify the command to run your Node.js application
CMD npm run set && npm start
# CMD ["npm", "run", "set"]
