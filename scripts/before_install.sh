#!/bin/bash
set -e

# Create a backup of the current app directory
mv /app /app_backup || true

# Create a new app directory
mkdir /app