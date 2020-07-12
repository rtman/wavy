#!/bin/sh

gcloud container clusters create groov --num-nodes=1
gcloud container clusters get-credentials groov
kubectl apply -f ./docker/backend.yml 
kubectl apply -f ./docker/frontend.yml 