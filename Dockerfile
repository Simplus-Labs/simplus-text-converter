# syntax=docker/dockerfile:1

# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json .
COPY pnpm-lock.yaml .

# Install dependencies using pnpm
RUN npm install -g pnpm
RUN pnpm install

# Copy the application code into the container
COPY . .

# Set environment variables if needed
# ENV NODE_ENV=production

# Expose a port if your application needs it
# EXPOSE 8080

# Command to run your application or tests
CMD ["pnpm", "test"]

