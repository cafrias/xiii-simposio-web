FROM node:erbium-alpine
USER node

# Setup environment
WORKDIR /home/node

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the project
COPY . ./

# Build project
RUN npm run build

# Serve statically
EXPOSE 5000
CMD ["npm", "run", "serve"]
