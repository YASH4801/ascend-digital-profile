FROM node:alpine AS build
LABEL authors="yashn"
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build