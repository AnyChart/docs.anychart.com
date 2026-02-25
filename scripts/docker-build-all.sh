#!/bin/bash
# =============================================================================
# Build 3 Docker containers from 3 different branches
#
# Usage: bash scripts/docker-build-all.sh
#
# Builds:
#   docs-production (port 8080) ← gogin-AI-refactor (main work branch)
#   docs-staging    (port 8081) ← gogin-AI-refactor-STG
#   docs-preview    (port 8082) ← gogin-AI-refactor-DVF
# =============================================================================

set -e

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CURRENT_BRANCH=$(git -C "$REPO_DIR" rev-parse --abbrev-ref HEAD)

echo "========================================"
echo "Building 3 docs containers"
echo "Current branch: $CURRENT_BRANCH"
echo "========================================"

# Function to build a container from a specific branch
build_from_branch() {
    local BRANCH=$1
    local IMAGE_NAME=$2
    local VERSION=$3
    local STAGING=$4

    echo ""
    echo "----------------------------------------"
    echo "Building $IMAGE_NAME from branch: $BRANCH"
    echo "  ANYCHART_VERSION=$VERSION"
    echo "  IS_STAGING=$STAGING"
    echo "----------------------------------------"

    # Checkout the target branch
    git -C "$REPO_DIR" checkout "$BRANCH" --quiet

    # Build the Docker image
    docker build \
        --build-arg ANYCHART_VERSION="$VERSION" \
        --build-arg IS_STAGING="$STAGING" \
        -t "$IMAGE_NAME" \
        "$REPO_DIR"

    echo "Built: $IMAGE_NAME"
}

# Build all 3 containers
build_from_branch "gogin-AI-refactor"     "docs-production" "8.14.1"   "false"
build_from_branch "gogin-AI-refactor-STG" "docs-staging"    "8.14.1"   "true"
build_from_branch "gogin-AI-refactor-DVF" "docs-preview"    "DVF-5001" "true"

# Return to original branch
git -C "$REPO_DIR" checkout "$CURRENT_BRANCH" --quiet

echo ""
echo "========================================"
echo "All 3 images built successfully!"
echo ""
echo "Run them with:"
echo "  docker run -d -p 8080:80 --name docs-production docs-production"
echo "  docker run -d -p 8081:80 --name docs-staging    docs-staging"
echo "  docker run -d -p 8082:80 --name docs-preview    docs-preview"
echo ""
echo "Or all at once:"
echo "  docker run -d -p 8080:80 --name docs-production docs-production && \\"
echo "  docker run -d -p 8081:80 --name docs-staging    docs-staging && \\"
echo "  docker run -d -p 8082:80 --name docs-preview    docs-preview"
echo ""
echo "Then visit:"
echo "  Production: http://localhost:8080"
echo "  Staging:    http://localhost:8081"
echo "  Preview:    http://localhost:8082"
echo "========================================"
