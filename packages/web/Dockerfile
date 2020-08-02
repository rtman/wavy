FROM node:10 as builder

WORKDIR /app
COPY ./package*.json /app/
RUN yarn install
COPY ./ /app/
RUN yarn build

# FROM beamaustralia/react-env:latest

# WORKDIR /var/www

# COPY --from=builder /app/build /var/www
# COPY .env* /var/www/
# EXPOSE 3000
# CMD ["nginx", "-g", "daemon off;"]

FROM nginx:alpine

COPY --from=builder /app/build/ /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]