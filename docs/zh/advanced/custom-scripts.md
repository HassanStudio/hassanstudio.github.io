# 自定义脚本

<!--@include: @/.vitepress/snippets/app-name.md--> 的强大之处在于其可扩展性。通过编写自定义脚本，你可以创建适合自己工作流程的自动化工具。本指南将教你如何编写和管理自定义脚本。

## 脚本基础

### 脚本存放位置

所有脚本都应该放在 <!--@include: @/.vitepress/snippets/app-name.md--> 的任务目录中：

```
<!--@include: @/.vitepress/snippets/path-tasks.md-->
```

你可以通过以下方式快速打开这个目录：
1. 打开 <!--@include: @/.vitepress/snippets/app-name.md--> 设置窗口（`Command + ,`）
2. 切换到「任务」标签页
3. 点击「在 Finder 中显示」按钮

### 脚本的基本结构

一个完整的 <!--@include: @/.vitepress/snippets/app-name.md--> 脚本包含以下部分：

```bash
#!/bin/bash
# @title 脚本标题
# @description 脚本的详细描述
# @author 你的名字

# 脚本内容
# $1 = 文件的绝对路径

echo "处理文件: $1"
```

**必需部分**：
- **Shebang 行**（`#!/bin/bash`）- 告诉系统用哪个解释器执行脚本
- **脚本内容** - 实际的处理逻辑

**可选部分**：
- **元数据注释** - 为脚本添加标题、描述和作者信息

### 文件权限

创建脚本后，需要设置可执行权限：

```bash
chmod +x <!--@include: @/.vitepress/snippets/path-tasks-script-bash.md-->
```

或者在 Finder 中：
1. 右键点击脚本文件
2. 选择「显示简介」
3. 在「共享与权限」部分，确保你有「读与写」权限

## 编写你的第一个脚本

让我们从一个简单的例子开始。

### 示例 1：复制文件名

创建一个脚本，复制文件的名称（不包含路径）到剪贴板。

```bash
#!/bin/bash
# @title 复制文件名
# @description 复制文件名（不包含路径和扩展名）到剪贴板
# @author Your Name

# 获取文件路径
file_path="$1"

# 提取文件名（不包含路径）
filename=$(basename "$file_path")

# 提取文件名（不包含扩展名）
filename_without_ext="${filename%.*}"

# 复制到剪贴板
echo -n "$filename_without_ext" | pbcopy
```

**使用步骤**：
1. 将上面的代码保存为 `copy-filename.sh`
2. 移动到 `<!--@include: @/.vitepress/snippets/path-tasks.md-->`
3. 设置可执行权限：`chmod +x copy-filename.sh`
4. 在 <!--@include: @/.vitepress/snippets/app-name.md--> 中使用

### 示例 2：使用 Python 处理 JSON

<!--@include: @/.vitepress/snippets/app-name.md--> 支持多种脚本语言，这个例子使用 Python 处理 JSON 文件。

```python
#!/usr/bin/env python3
# @title 格式化 JSON
# @description 格式化 JSON 文件并覆盖原文件
# @author Your Name

import sys
import json
import subprocess
import os

def send_notification(title, message, is_error=False):
    """发送 macOS 系统通知"""
    sound = "Basso" if is_error else "Glass"
    script = f'display notification "{message}" with title "{title}" sound name "{sound}"'
    subprocess.run(['osascript', '-e', script])

def format_json(file_path):
    try:
        # 读取 JSON 文件
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # 格式化并写回
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)

        filename = os.path.basename(file_path)
        send_notification("JSON 格式化", f"已成功格式化\n{filename}")
        return True
    except Exception as e:
        filename = os.path.basename(file_path)
        send_notification("格式化失败", f"{filename}\n错误: {str(e)}", is_error=True)
        return False

if __name__ == '__main__':
    if len(sys.argv) > 1:
        format_json(sys.argv[1])
    else:
        send_notification("参数错误", "未提供文件路径", is_error=True)
```

## 高级技巧

### 使用环境变量

<!--@include: @/.vitepress/snippets/app-name.md--> 脚本可以访问 macOS 提供的系统环境变量。

#### 可用的系统环境变量

由于 <!--@include: @/.vitepress/snippets/app-name.md--> 是 GUI 应用（由 launchd 启动），脚本可以访问以下系统级环境变量：

| 变量 | 说明 | 示例值 |
|------|------|--------|
| `$HOME` | 用户主目录 | `/Users/your_name` |
| `$USER` | 当前用户名 | `rakuyo` |
| `$TMPDIR` | 临时目录 | `/var/folders/...` |
| `$PATH` | 系统默认路径 | `/usr/bin:/bin:/usr/sbin:/sbin` |
| `$SHELL` | 默认 Shell | `/bin/zsh` |
| `$LOGNAME` | 登录名 | `your_name` |
| `$LANG` | 语言设置 | `zh_CN.UTF-8` |

#### 自定义环境变量的访问

**重要提示**：<!--@include: @/.vitepress/snippets/app-name.md--> 脚本**无法直接访问** `.zshrc` 或 `.bash_profile` 中定义的自定义环境变量，因为这些配置只在终端 Shell 中生效。

如果需要使用自定义环境变量，有以下两种方案：

##### 方案 1：直接加载 Shell 配置文件

::: warning 提示
`.zshrc` 可能包含交互式命令（如 `ls` 别名、提示符配置等），source 时可能产生不必要的输出或错误，甚至导致脚本运行失败。
:::

```bash
#!/bin/bash
# @title 加载 Shell 配置
# @description 直接加载 .zshrc 中的环境变量

# 加载 zsh 配置（如果存在）
if [ -f "$HOME/.zshrc" ]; then
    source "$HOME/.zshrc"
fi

# 现在可以使用 .zshrc 中定义的环境变量了
echo "PATH: $PATH"
```

##### 方案 2：创建专门的环境变量文件（推荐）

**步骤 1**：创建环境变量配置文件 `~/.hassan_env`

```bash
# ~/.hassan_env
export MY_PROJECT_PATH="$HOME/Projects/MyApp"
export CUSTOM_TOOL_PATH="/opt/local/bin"
export MY_API_KEY="your-api-key"

# 扩展 PATH
export PATH="/opt/homebrew/bin:$PATH"
```

**步骤 2**：在脚本中加载配置文件

```bash
#!/bin/bash
# @title 使用自定义环境变量
# @description 演示如何加载自定义环境变量

# 加载自定义环境变量
if [ -f "$HOME/.hassan_env" ]; then
    source "$HOME/.hassan_env"
fi

# 现在可以使用自定义变量了
echo "项目路径: $MY_PROJECT_PATH"
echo "工具路径: $CUSTOM_TOOL_PATH"

# 使用自定义 PATH 中的工具
which some-custom-tool
```

### 显示 macOS 通知

使用 `osascript` 显示系统通知：

```bash
#!/bin/bash

# 显示通知
osascript -e 'display notification "操作完成" with title "Hassan" sound name "Glass"'

# 带详细信息的通知
osascript -e 'display notification "已复制 3 个文件" with title "Hassan" subtitle "复制操作"'
```

### 条件执行

启用「快捷模式」后，一次只能执行一个脚本。但是您可以参考下面的方式，为不同类型的文件执行不同的操作：

```bash
#!/bin/bash
# @title 智能处理
# @description 根据文件类型执行不同的操作

file_path="$1"
file_ext="${file_path##*.}"

case "$file_ext" in
    swift)
        echo "处理 Swift 文件"
        # Swift 特定的处理
        ;;
    json)
        echo "处理 JSON 文件"
        # JSON 特定的处理
        ;;
    md)
        echo "处理 Markdown 文件"
        # Markdown 特定的处理
        ;;
    *)
        echo "未知文件类型: $file_ext"
        ;;
esac
```

## 组织脚本

### 使用目录分组

使用子目录来组织你的脚本：

```
<!--@include: @/.vitepress/snippets/path-tasks.md-->
├── Builtin/                       # 内置脚本
│   ├── _common.sh
│   ├── copy-absolute-path.sh
│   ├── copy-relative-path.sh
│   └── open-in-finder.sh
└── Custom/                        # 自定义脚本根目录
    ├── development/               # 开发工具
    │   ├── format-swift.sh
    │   ├── run-swiftlint.sh
    │   └── count-lines.sh
    ├── utilities/                 # 实用工具
    │   ├── copy-filename.sh
    │   ├── convert-encoding.sh
    │   └── compress-image.py
    └── git/                       # Git 相关
        ├── git-blame.sh
        └── git-history.sh
```

<!--@include: @/.vitepress/snippets/app-name.md--> 会以树形结构展示这些分组，方便你快速找到需要的脚本。

## 调试脚本

**方法 1：在终端中测试（推荐）**
```bash
bash <!--@include: @/.vitepress/snippets/path-tasks-script-bash.md--> "/path/to/test/file"
```

::: info 更严谨的操作
您可以使用解释器的绝对路径代替 `bash`，以获取更准确的执行结果
:::

**方法 2：输出到文件**
```bash
#!/bin/bash

file_path="$1"
log_file="/tmp/hassan-debug.log"

echo "处理文件：$file_path" >> "$log_file"
echo "时间：$(date)" >> "$log_file"

# 你的脚本逻辑...
```
