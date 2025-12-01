# 自定义脚本

Hassan 的强大之处在于其可扩展性。通过编写自定义脚本，你可以创建适合自己工作流程的自动化工具。本指南将教你如何编写和管理自定义脚本。

## 脚本基础

### 脚本存放位置

所有脚本都应该放在 Hassan 的任务目录中：

```
~/Library/Application Support/Hassan/Tasks/
```

你可以通过以下方式快速打开这个目录：
1. 打开 Hassan 设置窗口（`Command + ,`）
2. 切换到「任务」标签页
3. 点击「在 Finder 中显示」按钮

### 脚本的基本结构

一个完整的 Hassan 脚本包含以下部分：

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
chmod +x ~/Library/Application\ Support/Hassan/Tasks/your-script.sh
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

# 显示通知（可选）
echo "已复制文件名: $filename_without_ext"
```

**使用步骤**：
1. 将上面的代码保存为 `copy-filename.sh`
2. 移动到 `~/Library/Application Support/Hassan/Tasks/`
3. 设置可执行权限：`chmod +x copy-filename.sh`
4. 在 Hassan 中使用

### 示例 2：统计代码行数

创建一个脚本，统计代码文件的行数并显示通知。

```bash
#!/bin/bash
# @title 统计代码行数
# @description 统计代码文件的总行数、空行数和注释行数
# @author Your Name

file_path="$1"

# 统计总行数
total_lines=$(wc -l < "$file_path")

# 统计空行数
blank_lines=$(grep -c "^$" "$file_path")

# 统计注释行数（Swift/Objective-C）
comment_lines=$(grep -c "^[ \t]*//" "$file_path")

# 计算代码行数
code_lines=$((total_lines - blank_lines - comment_lines))

# 输出结果
echo "文件: $(basename "$file_path")"
echo "总行数: $total_lines"
echo "空行: $blank_lines"
echo "注释行: $comment_lines"
echo "代码行: $code_lines"
```

### 示例 3：使用 Python 处理 JSON

Hassan 支持多种脚本语言，这个例子使用 Python 处理 JSON 文件。

```python
#!/usr/bin/env python3
# @title 格式化 JSON
# @description 格式化 JSON 文件并覆盖原文件
# @author Your Name

import sys
import json

def format_json(file_path):
    try:
        # 读取 JSON 文件
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # 格式化并写回
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)

        print(f"已格式化: {file_path}")
        return True
    except Exception as e:
        print(f"错误: {str(e)}")
        return False

if __name__ == '__main__':
    if len(sys.argv) > 1:
        format_json(sys.argv[1])
    else:
        print("错误: 未提供文件路径")
```

## 高级技巧

### 使用环境变量

Hassan 执行脚本时会提供一些有用的环境变量：

```bash
#!/bin/bash

# 文件路径（作为第一个参数传递）
file_path="$1"

# 从路径中提取信息
file_dir=$(dirname "$file_path")
file_name=$(basename "$file_path")
file_ext="${file_name##*.}"

echo "目录: $file_dir"
echo "文件名: $file_name"
echo "扩展名: $file_ext"
```

### 错误处理

良好的脚本应该包含错误处理：

```bash
#!/bin/bash
# @title 带错误处理的脚本
# @description 演示如何在脚本中处理错误

set -e  # 遇到错误立即退出

file_path="$1"

# 检查文件是否存在
if [ ! -f "$file_path" ]; then
    echo "错误: 文件不存在"
    exit 1
fi

# 检查文件是否可读
if [ ! -r "$file_path" ]; then
    echo "错误: 文件不可读"
    exit 1
fi

# 你的处理逻辑...
echo "处理文件: $file_path"
```

### 与剪贴板交互

Hassan 脚本经常需要与剪贴板交互：

```bash
#!/bin/bash

# 复制到剪贴板
echo -n "要复制的内容" | pbcopy

# 从剪贴板读取
clipboard_content=$(pbpaste)

# 追加到剪贴板
current_content=$(pbpaste)
echo -n "${current_content}\n新内容" | pbcopy
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

根据文件类型执行不同的操作：

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
~/Library/Application Support/Hassan/Tasks/
├── copy-absolute-path.sh          # 内置脚本
├── copy-relative-path.sh          # 内置脚本
├── open-in-finder.sh              # 内置脚本
└── custom/                        # 自定义脚本根目录
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

Hassan 会以树形结构展示这些分组，方便你快速找到需要的脚本。

### 脚本命名建议

- 使用小写字母和连字符
- 使用描述性的名称
- 包含动作词（如 `copy-`, `format-`, `convert-`）
- 添加文件扩展名（`.sh`, `.py`, `.rb` 等）

**好的命名**：
- `copy-relative-path.sh`
- `format-json.py`
- `convert-to-utf8.rb`

**不好的命名**：
- `script1.sh`
- `test.py`
- `myScript.rb`

## 调试脚本

### 在终端中测试

在将脚本添加到 Hassan 之前，先在终端中测试：

```bash
# 直接执行脚本
bash ~/path/to/your-script.sh "/path/to/test/file.swift"

# 或者如果脚本有执行权限
~/path/to/your-script.sh "/path/to/test/file.swift"
```

### 启用调试输出

在脚本开头添加调试选项：

```bash
#!/bin/bash
set -x  # 打印每个命令
set -v  # 打印脚本内容

# 你的脚本内容...
```

### 查看脚本输出

Hassan 会捕获脚本的输出。如果脚本没有按预期工作：
1. 在脚本中添加 `echo` 语句输出调试信息
2. 在终端中手动运行脚本查看详细输出

## 脚本示例集

### Git 操作

```bash
#!/bin/bash
# @title Git Blame
# @description 查看文件的 Git blame 信息

file_path="$1"

# 检查文件是否在 Git 仓库中
if ! git -C "$(dirname "$file_path")" rev-parse --git-dir > /dev/null 2>&1; then
    echo "错误: 文件不在 Git 仓库中"
    exit 1
fi

# 显示 Git blame
git blame "$file_path"
```

### 文件转换

```bash
#!/bin/bash
# @title 转换为 UTF-8
# @description 将文件编码转换为 UTF-8

file_path="$1"

# 检测当前编码
current_encoding=$(file -b --mime-encoding "$file_path")

if [ "$current_encoding" = "utf-8" ]; then
    echo "文件已经是 UTF-8 编码"
    exit 0
fi

# 转换编码
iconv -f "$current_encoding" -t UTF-8 "$file_path" > "${file_path}.utf8"
mv "${file_path}.utf8" "$file_path"

echo "已转换为 UTF-8: $file_path"
```

### 代码分析

```python
#!/usr/bin/env python3
# @title 分析代码复杂度
# @description 简单分析代码的圈复杂度

import sys
import re

def count_complexity(file_path):
    with open(file_path, 'r') as f:
        content = f.read()

    # 统计控制流关键字
    keywords = ['if', 'else', 'for', 'while', 'case', 'catch', 'guard']
    complexity = 1  # 基础复杂度

    for keyword in keywords:
        complexity += len(re.findall(r'\b' + keyword + r'\b', content))

    print(f"文件: {file_path}")
    print(f"圈复杂度: {complexity}")

    if complexity > 20:
        print("警告: 复杂度较高，建议重构")

if __name__ == '__main__':
    if len(sys.argv) > 1:
        count_complexity(sys.argv[1])
```

## 最佳实践

### 1. 添加完整的元数据

始终为脚本添加标题和描述，这会让脚本在 Hassan 中更易于识别：

```bash
#!/bin/bash
# @title 清晰的标题
# @description 详细的描述，说明脚本的功能和使用方法
# @author 你的名字
```

### 2. 验证输入

始终验证脚本接收到的文件路径：

```bash
#!/bin/bash

file_path="$1"

if [ -z "$file_path" ]; then
    echo "错误: 未提供文件路径"
    exit 1
fi

if [ ! -f "$file_path" ]; then
    echo "错误: 文件不存在"
    exit 1
fi
```

### 3. 提供清晰的反馈

让用户知道脚本在做什么：

```bash
#!/bin/bash

echo "正在处理文件..."
# 处理逻辑
echo "完成！"
```

### 4. 处理特殊字符

文件路径可能包含空格或特殊字符，始终使用引号：

```bash
#!/bin/bash

file_path="$1"  # 使用引号
dirname=$(dirname "$file_path")  # 使用引号
```

### 5. 设置合理的退出码

使用退出码表示脚本的执行结果：

```bash
#!/bin/bash

if 处理成功; then
    exit 0  # 成功
else
    exit 1  # 失败
fi
```

## 下一步

现在你已经掌握了编写自定义脚本的基础知识！

- [功能介绍](/guide/features) - 了解更多 Hassan 的功能
- [常见问题](/faq) - 查看脚本编写中的常见问题

::: tip 分享你的脚本
如果你创建了有用的脚本，考虑在 GitHub 上分享给社区！
:::
