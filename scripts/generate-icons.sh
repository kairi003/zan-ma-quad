#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE="$ROOT_DIR/icon.svg"
OUTPUT_DIR="$ROOT_DIR/src/icons"

mkdir -p "$OUTPUT_DIR"

for size in 16 32 48 128; do
  rsvg-convert \
    --background-color=transparent \
    --width="$size" \
    --height="$size" \
    "$SOURCE" \
    --output="$OUTPUT_DIR/icon${size}.png"
done
