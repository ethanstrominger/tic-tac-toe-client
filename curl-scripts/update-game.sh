#!/bin/bash

# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh
. config.sh
echo "${ID}"
echo "${TOKEN}"
echo "${VALUE}"
curl "${URL}/games/{$ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": "false"
    }
  }'


echo
