FROM node:22-alpine AS base
WORKDIR /app

FROM base AS deps
COPY website/package.json website/package-lock.json ./
RUN npm ci

FROM base AS dev
COPY --from=deps /app/node_modules ./node_modules
COPY website/ ./
EXPOSE 3000
CMD ["npm", "start", "--", "--host", "0.0.0.0"]

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY website/ ./
ENV SITE_URL=http://localhost
ENV BASE_URL=/
RUN npm run build

FROM nginx:alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
