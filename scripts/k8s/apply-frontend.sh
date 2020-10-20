#!/bin/sh

# service account and roles is to access kubernetes api from in frontend pod
# kubectl create serviceaccount groov-frontend-service-account
# kubectl apply -f ./docker/roles.yml 
kubectl apply -f ./docker/frontend.yml 
