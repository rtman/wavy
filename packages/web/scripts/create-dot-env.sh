#!/bin/bash
# PWD is ../

echo "create-dot-env.sh - CREATING $1.env"

rm -f "$1.env"

# Extract environment variables names from .env.public then save them to .env
# using values from the environment (eg set in App Center or CircleCI).

for KEY in $(cat .env.public | egrep "^[A-Za-z]+" | sed 's/\"/\\\"/g' | sed -n 's|\(.*\)=\(.*\)|\1|p'); do
  echo "$KEY=$(printf '%s\n' "${!KEY}")"
  echo "$KEY=$(printf '%s\n' "${!KEY}")" >> "$1.env"
done

echo "create-dot-env.sh - DONE wrote $1.env"
