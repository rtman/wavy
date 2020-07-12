FROM nginx:alpine

# WORKDIR /web
# COPY ./package.json ./
# RUN yarn install
# RUN yarn build
COPY build/ /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]