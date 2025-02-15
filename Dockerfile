FROM node:18-alpine AS build

WORKDIR /app

COPY .yarn ./.yarn
COPY .yarnrc.yml ./
COPY package.json yarn.lock ./
COPY .pnp.* ./

RUN yarn install

COPY . .
RUN yarn build

FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=build /app/.yarn ./.yarn
COPY --from=build /app/.pnp.* ./
COPY --from=build /app/.yarnrc.yml ./
COPY --from=build /app/package.json ./
COPY --from=build /app/yarn.lock ./

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn install --immutable

EXPOSE 8080

CMD ["yarn", "start"]