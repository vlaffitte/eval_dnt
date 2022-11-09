FROM node:19 as build
WORKDIR /app

RUN npm install -g @angular/cli@latest

COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 4200
