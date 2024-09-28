# Build the React app
FROM node:18-alpine AS build
WORKDIR /create-a-cv
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve the React app using nginx
FROM nginx:stable-alpine
COPY --from=build /create-a-cv/build /usr/share/nginx/html
EXPOSE 80
RUN npm start
