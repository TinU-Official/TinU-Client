# Conductor Setup Script for TinU Frontend

#!/bin/zsh
set -e

# .env 복사
cp $CONDUCTOR_ROOT_PATH/.env .env

# 의존성 설치
pnpm install

# lefthook worktree 패치
# git hook 스크립트는 LEFTHOOK_BIN을 가장 먼저 확인하므로,
# 워크스페이스 로컬 lefthook 경로를 주입한 hooks를 별도 디렉토리에 생성
LEFTHOOK_BIN="$(pwd)/node_modules/.bin/lefthook"
GIT_COMMON_HOOKS="$(git rev-parse --git-common-dir)/hooks"

mkdir -p .git-hooks

for hook in pre-commit commit-msg prepare-commit-msg; do
  ORIGINAL="$GIT_COMMON_HOOKS/$hook"
  if [ -f "$ORIGINAL" ]; then
    DEST=".git-hooks/$hook"
    echo "#!/bin/sh" > "$DEST"
    echo "export LEFTHOOK_BIN=\"$LEFTHOOK_BIN\"" >> "$DEST"
    tail -n +2 "$ORIGINAL" >> "$DEST"
    chmod +x "$DEST"
  fi
done

git config --local core.hooksPath .git-hooks

