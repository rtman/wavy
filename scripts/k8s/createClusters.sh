#!/bin/sh

gcloud container clusters create wavy --num-nodes=1 --enable-autoscaling --min-nodes 1 --max-nodes 4
gcloud container clusters get-credentials wavy