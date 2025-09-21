# Use Node.js 18 LTS as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install Expo CLI globally
RUN npm install -g @expo/cli

# Copy package files
COPY package*.json ./

# Install dependencies and update lock file
RUN npm install

# Install web dependencies for Expo web support
RUN npx expo install react-dom react-native-web @expo/metro-runtime

# Copy application files
COPY . .

# Expose the port that Expo web runs on
EXPOSE 19006

# Set environment variables
ENV NODE_ENV=production
ENV EXPO_USE_DEV_SERVER=true

# Start the Expo web server
CMD ["npx", "expo", "start", "--web", "--port", "19006", "--host", "lan"]