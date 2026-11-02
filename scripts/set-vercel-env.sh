#!/usr/bin/env bash
# Sets the chatbot's production environment variables on Vercel (vineet-agarwal-portfolio).
# Secrets are read from config/.env.local and piped to the Vercel CLI; they are never printed.
#
#   ./scripts/set-vercel-env.sh          (needs Node 20+ and `npx vercel login` done once)
#
# Env changes only take effect after a redeploy.
set -euo pipefail
cd "$(dirname "$0")/.."

ENV_FILE=config/.env.local
VERCEL=(npx --yes vercel@latest --scope vineetagarwal013s-projects)
PROJECT=(--project vineet-agarwal-portfolio)

val() {
  local v
  v=$(grep -E "^$1=" "$ENV_FILE" | head -1 | cut -d= -f2-)
  v="${v%%#*}"; v="${v%"${v##*[![:space:]]}"}"
  v="${v%\"}"; v="${v#\"}"; v="${v%\'}"; v="${v#\'}"
  [ -n "$v" ] || { echo "$1 is missing from $ENV_FILE" >&2; exit 1; }
  printf '%s' "$v"
}

add() {  # name value [--sensitive]
  if printf '%s' "$2" | "${VERCEL[@]}" env add "$1" production "${PROJECT[@]}" ${3:-} --force >/dev/null 2>&1; then
    echo "  set $1"
  else
    echo "  FAILED to set $1" >&2; exit 1
  fi
}

echo "Setting production environment variables on Vercel (vineet-agarwal-portfolio):"
add GEMINI_API_KEY "$(val GEMINI_API_KEY)" --sensitive
add PINECONE_API_KEY "$(val PINECONE_API_KEY)" --sensitive
add PINECONE_INDEX "$(val PINECONE_INDEX)"
add EMBEDDING_PROVIDER "$(val EMBEDDING_PROVIDER)"
add LLM_PROVIDER "$(val LLM_PROVIDER)"
add EMBEDDING_MODEL "$(val EMBEDDING_MODEL)"
add LLM_MODEL "$(val LLM_MODEL)"
echo "Done. Values aren't shown; check names with:"
echo "  npx vercel env ls --environment production ${VERCEL[*]:3} ${PROJECT[*]}"
