FROM node:22-alpine AS build

WORKDIR /app

COPY .yarn ./.yarn
COPY .yarnrc.yml ./
COPY package.json yarn.lock ./
COPY .pnp.* ./

RUN yarn install

COPY . .
RUN yarn build

FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

COPY --from=build /app/.yarn ./.yarn
COPY --from=build /app/.pnp.* ./
COPY --from=build /app/.yarnrc.yml ./
COPY --from=build /app/package.json ./

RUN yarn install --immutable --production

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000

CMD ["yarn", "start"]