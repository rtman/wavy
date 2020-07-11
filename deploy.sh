#!/bin/sh

gcloud container clusters create groov --num-nodes=1
gcloud container clusters get-credentials groov
kubectl apply -f ./backend.yml 
kubectl apply -f ./frontend.yml 