FROM node:18-alpine AS build

WORKDIR /app

COPY .yarn ./.yarn
COPY .yarnrc.yml ./
COPY package.json yarn.lock ./

RUN yarn install --immutable

COPY . .

RUN yarn build

FROM nginx:alpine

ADD https://github.com/nginx/nginx-prometheus-exporter/releases/download/v0.11.0/nginx-prometheus-exporter /usr/local/bin/nginx-prometheus-exporter
RUN chmod +x /usr/local/bin/nginx-prometheus-exporter

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080 9113 8081

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]