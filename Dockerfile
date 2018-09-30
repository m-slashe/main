FROM node:8.12-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --verbose

EXPOSE 8080

CMD npm start

FROM node:8.12-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --verbose

RUN npm i -g grunt-cli

COPY . .

RUN npm run build && grunt

FROM nginx:1.15-alpine as production
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html