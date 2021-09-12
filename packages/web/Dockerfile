FROM node:12 as builder

WORKDIR /app
COPY ./package*.json /app/
RUN yarn install
COPY ./ /app/
RUN yarn build

FROM nginx:alpine

COPY --from=builder /app/build/ /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]