#!/bin/bash
# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

. config.sh
curl "${URL}/sign-out" \
  --include \
  --request DELETE \

echo
