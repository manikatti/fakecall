#!/bin/sh
echo "Using Node.js $(node --version)" && node ${PODS_TARGET_SRCROOT}/scripts/download-realm.js ios --sync
