#!/bin/bash

# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh
. config.sh
curl "${URL}/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \


echo
