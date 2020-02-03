#!/bin/bash
# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh

# don't use a password you use for any real websites!
. config.sh
curl "${URL}/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
      }
  }'

echo
