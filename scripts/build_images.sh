#!/bin/sh

docker build -t "gcr.io/groov-development-ddc9d/groov-postgresql" ./packages/postgresql
docker build -t "gcr.io/groov-development-ddc9d/groov-migration" ./packages/migration
docker build -t "gcr.io/groov-development-ddc9d/groov-graphql" ./packages/graphql
# docker build -t "gcr.io/groov-development-ddc9d/groov-web" -f Dockerfile.serve ./packages/web
# docker build -t "gcr.io/groov-development-ddc9d/groov-web-set-backend-external-ip" -f ./packages/web/Dockerfile.setBackendExternalIp ./packages/web
docker build -t "gcr.io/groov-development-ddc9d/groov-web-build" -f ./packages/web/Dockerfile.build ./packages/web