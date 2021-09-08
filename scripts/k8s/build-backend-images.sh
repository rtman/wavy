#!/bin/sh

docker build -t "gcr.io/wavy-development/wavy-postgresql" ./packages/postgresql
docker build -t "gcr.io/wavy-development/wavy-migration" ./packages/migration
docker build -t "gcr.io/wavy-development/wavy-graphql" ./packages/graphql