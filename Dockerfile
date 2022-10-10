#Stage 1
#Installing and building the angular application:

#1. Copy the angular code from a local machine to a docker machine.
#2. Copy the packages.json to install dependencies.
#3. Install the angular-cli and npm dependencies.
#4. Build an angular application.

FROM node:alpine AS build
WORKDIR /app
COPY / ./
COPY package*.json ./

RUN npm install -g @angular/cli && \
    npm install && \
    ng build
COPY . .

#Stage 2

#1. Copy the angular dist folder from the previous docker machine named build on to the nginx location folder.
#2. Then we use the default cmd that starts the nginx server.

FROM nginx:alpine
WORKDIR /app
COPY --from=build /app/dist/my-local-env /usr/share/nginx/html
