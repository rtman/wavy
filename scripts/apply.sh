#!/bin/sh

# service account is to access kubernetes api from in frontend pod
kubectl create serviceaccount groov-frontend-service-account
kubectl apply -f ./docker/backend.yml 
kubectl apply -f ./docker/migration-job.yml 
kubectl apply -f ./docker/roles.yml 
kubectl apply -f ./docker/frontend.yml 
