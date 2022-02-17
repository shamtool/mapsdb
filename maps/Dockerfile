FROM node:16-bullseye-slim as builder

RUN npm install -g pnpm

WORKDIR /usr/app

# Store or use cache in virtual store if no deps have changed
COPY ./pnpm-lock.yaml ./
RUN pnpm fetch

COPY . ./
RUN pnpm install --offline --frozen-lockfile
RUN pnpm run build
RUN pnpm prune --production

FROM node:16-bullseye-slim as runner
ENV NODE_ENV production

# Copy necessary build ouputs
COPY --from=builder /usr/app/package.json ./package.json
COPY --from=builder /usr/app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/dist ./dist

EXPOSE 3001

ENTRYPOINT ["npm", "run", "start:prod"]
