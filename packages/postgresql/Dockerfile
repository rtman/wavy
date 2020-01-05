# zombodb requires postgresql 10/11
FROM postgres:11.6-alpine as intermediate

# alpine image doesnt have these necessary packages
RUN apk --no-cache add curl git build-base curl-dev wget clang clang-dev llvm

WORKDIR /usr/src

RUN git clone https://github.com/zombodb/zombodb.git

WORKDIR zombodb

RUN make clean install

WORKDIR /usr/src

RUN rm -rf zombodb

CMD [ "postgres" ]