# docs.anychart.com

Documentation site for the [AnyChart](https://www.anychart.com/) JavaScript charting library, built with [Docusaurus 3](https://docusaurus.io/).

## Prerequisites

- Node.js 18+
- npm

## Setup

```bash
npm install
npm run prepare-samples   # copies sample HTML files into static/samples/
```

## Development

```bash
npm start
```

Opens a local dev server at `http://localhost:3000` with hot reload.

## Production Build

```bash
npm run build
```

Generates static output into `build/`.

## Project Structure

```
docs/        421 migrated markdown pages
src/         components, theme overrides, CSS
scripts/     migration & sample preparation scripts
static/      images, generated samples
samples/     1607 source HTML sample files
config.toml  AnyChart version config (used by prepare-samples)
```
