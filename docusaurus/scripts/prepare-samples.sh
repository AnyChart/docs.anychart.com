#!/usr/bin/env bash
# Copies sample HTML files from the repo root into static/samples/
# and replaces {{branch-name}} with the actual AnyChart version.
#
# Usage: ./scripts/prepare-samples.sh [version]
# Default version: read from ../config.toml

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
REPO_ROOT="$(dirname "$PROJECT_DIR")"
SOURCE_DIR="$REPO_ROOT/samples"
TARGET_DIR="$PROJECT_DIR/static/samples"

# Get version from argument, env, or config.toml
if [ -n "$1" ]; then
    VERSION="$1"
elif [ -n "$ANYCHART_VERSION" ]; then
    VERSION="$ANYCHART_VERSION"
else
    VERSION=$(grep 'anychart-version' "$REPO_ROOT/config.toml" | head -1 | sed 's/.*= *"\(.*\)"/\1/')
fi

echo "Preparing samples..."
echo "  Source: $SOURCE_DIR"
echo "  Target: $TARGET_DIR"
echo "  Version: $VERSION"

# Clean and recreate target
rm -rf "$TARGET_DIR"
mkdir -p "$TARGET_DIR"

# Copy all HTML files and replace {{branch-name}}
count=0
for file in "$SOURCE_DIR"/*.html; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        sed "s/{{branch-name}}/$VERSION/g" "$file" > "$TARGET_DIR/$filename"
        ((count++))
    fi
done

echo "Done. Copied $count samples."
