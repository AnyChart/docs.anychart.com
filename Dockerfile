# =============================================================================
# AnyChart Docs — Multi-Stage Docker Build
#
# Builds any branch into a lightweight nginx container serving static docs.
# Behavior changes via build args:
#   ANYCHART_VERSION  — library version for {{branch-name}} replacement
#   IS_STAGING        — "true" enables staging features (banner, diff, admin)
#   SITE_URL          — canonical URL for SEO tags
# =============================================================================

# ---------------------------------------------------------------------------
# Stage 1: Build the Docusaurus static site
# ---------------------------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (layer caching — only re-runs if package files change)
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

# Copy source code
COPY docusaurus.config.ts tsconfig.json sidebars.ts ./
COPY docs/ docs/
COPY src/ src/
COPY static/ static/
COPY samples/ samples/
COPY scripts/ scripts/

# Build arguments — passed at build time, baked into the static output
ARG ANYCHART_VERSION=8.14.1
ARG IS_STAGING=false
ARG SITE_URL=https://docs.anychart.com

# Set environment variables for the build
ENV ANYCHART_VERSION=${ANYCHART_VERSION}
ENV IS_STAGING=${IS_STAGING}
ENV SITE_URL=${SITE_URL}

# Build: prepare samples then generate static site
RUN npm run build

# ---------------------------------------------------------------------------
# Stage 2: Serve with nginx (tiny image, no Node.js, no source code)
# ---------------------------------------------------------------------------
FROM nginx:alpine AS runtime

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy built static site from builder stage
COPY --from=builder /app/build/ /usr/share/nginx/html/

# Copy nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Labels for container identification
ARG ANYCHART_VERSION=8.14.1
ARG IS_STAGING=false
LABEL org.opencontainers.image.title="AnyChart Documentation"
LABEL org.opencontainers.image.description="AnyChart docs built from version ${ANYCHART_VERSION}"
LABEL com.anychart.version="${ANYCHART_VERSION}"
LABEL com.anychart.staging="${IS_STAGING}"

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
