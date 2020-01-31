#!/bin/bash

# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh
. config.sh
curl "${URL}/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'"
      }
    }'

echo
