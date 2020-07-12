#!/bin/sh

docker build -t "gcr.io/groov-development-ddc9d/groov-postgresql" ./packages/postgresql
docker build -t "gcr.io/groov-development-ddc9d/groov-migration" ./packages/migration
docker build -t "gcr.io/groov-development-ddc9d/groov-graphql" ./packages/graphql
docker build -t "gcr.io/groov-development-ddc9d/groov-web" ./packages/web

docker push "gcr.io/groov-development-ddc9d/groov-postgresql"
docker push "gcr.io/groov-development-ddc9d/groov-migration"
docker push "gcr.io/groov-development-ddc9d/groov-graphql"
docker push "gcr.io/groov-development-ddc9d/groov-web"