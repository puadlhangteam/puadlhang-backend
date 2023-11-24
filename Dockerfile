FROM node:18 As builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm@8.9.2 && pnpm i

COPY . .

RUN pnpm build 

# RUN cd src/secrets/ && ls -lah

FROM node:18-alpine

ENV NODE_ENV=production PORT=8080

WORKDIR /app

COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./

COPY --from=builder /app/dist/ ./dist

RUN npm i -g pnpm@8.9.2 && pnpm i --frozen-lockfile

EXPOSE 8080

CMD "pnpm" "start"