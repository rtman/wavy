#!/bin/sh

./createClusters.sh
./build-backend-images.sh
./push-backend-images.sh
./apply-backend.sh

EXTERNAL_IP=`kubectl get svc groov-backend-public --output jsonpath='{.status.loadBalancer.ingress[0].ip'`

sed -i -e "s/.*REACT_APP_GRAPHQL_IP.*/REACT_APP_GRAPHQL_IP=$EXTERNAL_IP/" ../packages/web/.env

./build-frontend-images.sh
./push-frontend-images.sh
./apply-frontend.sh