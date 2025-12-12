#!/bin/bash
# 自动检测并安装 pnpm 依赖
# 用于 mise enter hook，在进入项目目录时自动安装依赖

set -e  # 遇到错误立即退出

# 获取脚本所在目录的父目录（项目根目录）
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# 切换到项目根目录
cd "$PROJECT_ROOT"

# 检查是否存在 package.json
if [ ! -f package.json ]; then
  # 不是 Node.js 项目，静默退出
  exit 0
fi

# 检查 node_modules 是否存在
if [ ! -d node_modules ]; then
  echo "🔍 检测到 package.json 但 node_modules 不存在，正在安装依赖..."
  pnpm install
  echo "✅ 依赖安装完成！"
  exit 0
fi

# 检查 package.json 是否比 node_modules 新
if [ package.json -nt node_modules ]; then
  echo "📦 package.json 已更新，重新安装依赖..."
  pnpm install
  echo "✅ 依赖更新完成！"
  exit 0
fi

# 依赖已是最新，静默退出
exit 0
