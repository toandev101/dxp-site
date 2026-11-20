#!/bin/bash

set +x
envFilename="/app/.env.local"
nextFolder="/app/.next/"

declare -A configMap
declare -a replacements

apply_path() {
  if [[ ! -f "$envFilename" ]]; then
    return
  fi

  while IFS= read -r line; do
    if [[ "${line:0:1}" == "#" || -z "$line" || "${line}" =~ ^[[:space:]]*$ ]]; then
      continue
    fi

    configName="${line%%=*}"
    configValue="${line#*=}"
    configValue="${configValue%"${configValue##*[![:space:]]}"}"
    configValue="${configValue#\"}"
    configValue="${configValue%\"}"

    envValue=$(env | grep "^$configName=" | cut -d= -f2-)
    envValue="${envValue#\"}"
    envValue="${envValue%\"}"

    if [[ -z "$envValue" ]]; then
      configMap["$configName"]=$configValue
      continue
    fi

    if [[ "$configValue" =~ ^https?:// ]] && [[ "$configValue" == */ ]]; then
      configValue="${configValue%/}"
    fi
    if [[ "$envValue" =~ ^https?:// ]] && [[ "$envValue" == */ ]]; then
      envValue="${envValue%/}"
    fi

    configMap["$configName"]=$envValue

    if [[ -n "$configValue" && -n "$envValue" && "$configValue" != "$envValue" ]]; then
      replacements+=("${#configValue}|$configValue|$envValue")
    fi
  done < "$envFilename"

  IFS=$'\n' sorted=($(sort -t'|' -k1 -rn <<<"${replacements[*]}"))
  unset IFS

  for item in "${sorted[@]}"; do
    configValue=$(echo "$item" | cut -d'|' -f2)
    envValue=$(echo "$item" | cut -d'|' -f3)

    escaped_envValue="${envValue//\\/\\\\}"
    escaped_envValue="${escaped_envValue//|/\\|}"
    escaped_envValue="${escaped_envValue//&/\\&}"

    find "$nextFolder" \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s|$configValue|$escaped_envValue|g"
  done
}

apply_path

echo "Starting NextJs NEXT_PUBLIC_WEBSITE_URL: ${configMap['NEXT_PUBLIC_WEBSITE_URL']}"
exec "$@"
