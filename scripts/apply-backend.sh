#!/bin/sh

kubectl apply -f ./docker/backend.yml 
kubectl apply -f ./docker/migration-job.yml 

