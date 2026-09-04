#!/usr/bin/env bash

set -euo pipefail

NAME="${1:-world}"
declare -a items=(a b c)

for i in "${items[@]}"; do
  if [[ "$i" == "b" ]]; then
    printf 'hello %s\n' "$NAME" >&2
  fi
done

func() { local x=$(( 2 + 3 )); echo "$x"; }
