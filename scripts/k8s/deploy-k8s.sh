#!/bin/sh
set -euxo pipefail

echo "Creating Cluster"
./scripts/createClusters.sh

echo "Building backend"
./scripts/build-backend-images.sh
./scripts/push-backend-images.sh
./scripts/apply-backend.sh

echo "Waiting for backend public external IP"
while true; do

    STATUS=$(kubectl get pods -o jsonpath={'.items[0].status.phase'})
    if [[ $STATUS == 'Running' ]]; 
    then 
        echo "external IP available, Done waiting"
        break
    fi

    echo "external IP not available, waiting 30 seconds"

    sleep 30
done

echo "Getting backend external ip"
EXTERNAL_IP=$(kubectl get svc wavy-backend-public --output jsonpath='{.status.loadBalancer.ingress[0].ip}') 

echo "wavy-backend-public external ip = $EXTERNAL_IP"

echo "Updating REACT_APP_GRAPHQL_IP env variable with current external ip"

sed -i -e "s/.*REACT_APP_GRAPHQL_IP.*/REACT_APP_GRAPHQL_IP=$EXTERNAL_IP/" ./packages/web/.env

echo "Building frontend"

./scripts/build-frontend-images.sh
./scripts/push-frontend-images.sh
./scripts/apply-frontend.sh

echo "Done!"