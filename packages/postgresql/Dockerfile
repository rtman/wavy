# zombodb requires postgresql 10/11
FROM postgres:11.6-alpine as intermediate

# ENV ZOMBODB_VERSION 4.0.0

RUN apk --no-cache add curl git build-base curl-dev wget clang clang-dev llvm

WORKDIR /usr/src
# RUN wget --quiet https://github.com/zombodb/zombodb/archive/v$ZOMBODB_VERSION.tar.gz && \
#     tar zxf v$ZOMBODB_VERSION.tar.gz
RUN git clone https://github.com/zombodb/zombodb.git

# WORKDIR zombodb-$ZOMBODB_VERSION
WORKDIR zombodb

RUN make clean install

# RUN make clean install && \
#     make installcheck-setup installcheck

WORKDIR /usr/src

# RUN rm -rf zombodb-$ZOMBODB_VERSION
RUN rm -rf zombodb

CMD [ "postgres" ]