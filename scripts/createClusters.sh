#!/bin/sh

gcloud container clusters create groov --num-nodes=1 --enable-autoscaling --min-nodes 1 --max-nodes 4
gcloud container clusters get-credentials groov