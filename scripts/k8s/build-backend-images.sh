#!/bin/sh

docker build -t "gcr.io/groov-development-ddc9d/groov-postgresql" ./packages/postgresql
docker build -t "gcr.io/groov-development-ddc9d/groov-migration" ./packages/migration
docker build -t "gcr.io/groov-development-ddc9d/groov-graphql" ./packages/graphql