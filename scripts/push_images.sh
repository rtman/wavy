#!/bin/sh

docker push "gcr.io/groov-development-ddc9d/groov-postgresql"
docker push "gcr.io/groov-development-ddc9d/groov-migration"
docker push "gcr.io/groov-development-ddc9d/groov-graphql"
# docker push "gcr.io/groov-development-ddc9d/groov-web"
# docker push "gcr.io/groov-development-ddc9d/groov-web-set-backend-external-ip"
docker push "gcr.io/groov-development-ddc9d/groov-web-build"