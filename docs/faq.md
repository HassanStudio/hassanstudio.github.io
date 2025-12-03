# 常见问题

这里收集了 Hassan 使用过程中的常见问题和解答。如果你的问题没有在这里找到答案，欢迎联系我们获取技术支持。

## 安装与配置

### 为什么 macOS 阻止我打开 Hassan？

如果你从官网下载了 Hassan（而不是从 App Store），首次启动时 macOS 可能会显示安全警告。这是 macOS Gatekeeper 的安全保护机制。请按照以下步骤操作：

1. 在「应用程序」文件夹中找到 Hassan.app
2. 按住 `Control` 键并点击应用图标
3. 在弹出菜单中选择「打开」
4. 在安全对话框中点击「打开」

::: tip 提示
从 App Store 安装的版本不会遇到此问题。完成首次打开后，之后就可以正常双击启动了。
:::

### Hassan 需要哪些系统权限？

Hassan 可能需要以下权限：

- **通知权限** - 用于显示脚本执行结果的通知
- **文件访问权限** - 用于读取和处理文件

这些权限系统会在需要时自动请求，请根据提示授予。

### 如何卸载 Hassan？

1. 退出 Hassan 应用（`Command + Q`）
2. 将 `/Applications/Hassan.app` 拖到废纸篓
3. 清空废纸篓

如果你想彻底清理所有数据：

```bash
# 删除任务目录
rm -rf ~/Library/Application\ Support/Hassan

# 删除偏好设置
defaults delete com.rakuyo.Hassan
```

如果你之前设置了文件关联，建议先在 Hassan 设置中点击「恢复默认」，然后再卸载。

### 如何恢复文件关联设置？

如果你想撤销 Hassan 对文件类型的关联：

**方法 1：通过 Hassan（推荐）**
1. 打开 Hassan 设置窗口
2. 切换到「文件关联」标签页
3. 点击「恢复默认」按钮

**方法 2：通过 Finder**
1. 找到任意相关类型的文件
2. 右键 → 显示简介
3. 在「打开方式」中选择你想要的默认应用
4. 点击「全部更改...」

## 使用问题

### 在 Xcode 中右键没有「Open with External Editor」选项怎么办？

请确认以下几点：

1. **检查文件关联**：确认该文件类型已关联到 Hassan
   - 在 Finder 中右键点击文件 → 显示简介
   - 查看「打开方式」是否为 Hassan

2. **重启 Xcode**：修改文件关联后，需要重启 Xcode 才能生效

3. **检查 macOS 版本**：确保你的 macOS 版本符合要求（macOS 15.0+）

### 为什么脚本执行后没有反应？

可能的原因和解决方法：

1. **检查脚本权限**
   ```bash
   ls -l ~/Library/Application\ Support/Hassan/Tasks/your-script.sh
   ```
   确保脚本有执行权限（`-rwxr-xr-x`）

2. **检查脚本语法**
   在终端中手动执行脚本，查看是否有错误：
   ```bash
   bash ~/Library/Application\ Support/Hassan/Tasks/your-script.sh "/path/to/test/file"
   ```

3. **检查 shebang 行**
   确保脚本第一行有正确的 shebang：
   ```bash
   #!/bin/bash
   ```

4. **检查解释器配置**
   - 打开 Hassan 设置
   - 切换到「解释器」标签页
   - 点击「自动检测系统解释器」

### 复制相对路径时无法正确识别项目根目录怎么办？

Hassan 按以下优先级检测项目根目录：

1. `.xcworkspace`
2. `Tuist/` + `mise.toml`
3. `.git`
4. `.xcodeproj`

如果检测不正确，请确认：

1. 文件是否在项目目录中
2. 项目是否包含上述标识文件/目录
3. 是否有多个嵌套的项目结构（Hassan 会选择最近的一个）

### 如何同时使用 Hassan 和其他外部编辑器？

Hassan 不会阻止你使用其他外部编辑器。你有以下几种选择：

**方法 1：通过「打开方式」**
1. 在 Xcode 中右键点击文件
2. 选择「打开方式」而不是「在外部编辑器中打开」
3. 选择你想使用的应用程序

**方法 2：临时更改文件关联**
1. 在 Hassan 设置中取消该文件类型的关联
2. 使用其他编辑器
3. 完成后再重新关联

**方法 3：使用不同的文件类型**
- 让 Hassan 处理某些文件类型（如 `.swift`）
- 让其他编辑器处理其他文件类型（如 `.md`）

## 脚本编写问题

### 如何在脚本中获取文件路径？

Hassan 会将文件的绝对路径作为第一个参数传递给脚本：

```bash
#!/bin/bash
file_path="$1"  # 第一个参数就是文件路径

echo "处理文件: $file_path"
```

### 脚本可以接收多个文件吗？

目前 Hassan 每次只传递一个文件路径。如果需要批量处理多个文件，可以：

1. 在脚本中实现循环处理
2. 在脚本中提示用户选择多个文件
3. 多次执行脚本

### 如何让脚本显示更友好的名称？

使用元数据注释：

```bash
#!/bin/bash
# @title 我的脚本
# @description 这个脚本的详细描述
# @author 你的名字

# 脚本内容...
```

Hassan 会解析这些注释并在任务列表中显示。

### 脚本执行时如何访问环境变量？

脚本会继承 Hassan 的环境变量。你可以直接使用：

```bash
#!/bin/bash

echo "用户目录: $HOME"
echo "当前路径: $PWD"
echo "Shell: $SHELL"
```

### Python 脚本找不到第三方库怎么办？

确保你的脚本使用了正确的 Python 解释器：

```python
#!/usr/bin/env python3
# 使用 /usr/bin/env 查找 Python

import sys
print(sys.executable)  # 查看实际使用的 Python 路径
```

如果使用虚拟环境中的 Python：

```python
#!/Users/username/.venv/bin/python3
# 使用虚拟环境中的 Python
```

### 如何调试脚本？

**方法 1：在终端中测试**
```bash
bash ~/Library/Application\ Support/Hassan/Tasks/your-script.sh "/path/to/test/file"
```

**方法 2：添加调试输出**
```bash
#!/bin/bash
set -x  # 打印执行的每个命令

file_path="$1"
echo "调试: 文件路径 = $file_path"

# 你的脚本逻辑...
```

**方法 3：输出到文件**
```bash
#!/bin/bash

file_path="$1"
log_file="/tmp/hassan-debug.log"

echo "处理文件: $file_path" >> "$log_file"
echo "时间: $(date)" >> "$log_file"

# 你的脚本逻辑...
```

## 性能问题

### Hassan 会影响 Xcode 的性能吗？

不会。Hassan 是一个独立的应用程序，只在被调用时才会运行，不会影响 Xcode 的性能。

### 脚本执行速度很慢怎么办？

1. **检查脚本逻辑**：优化脚本中的复杂操作
2. **使用快速语言**：简单任务使用 Shell 脚本，复杂任务可以考虑使用编译型语言
3. **避免耗时操作**：避免在脚本中执行网络请求等耗时操作
4. **异步执行**：对于耗时操作，考虑在后台执行

### Hassan 占用内存过高怎么办？

Hassan 的正常内存占用应该小于 20MB。如果占用过高：

1. 重启 Hassan 应用
2. 检查是否有脚本在后台持续运行
3. 查看系统活动监视器，确认是否为 Hassan 进程

## 技术问题

### Hassan 支持哪些脚本语言？

Hassan 支持任何有 shebang 行的可执行脚本，包括但不限于：

- Shell: Bash, Zsh, Sh
- Python: Python 2, Python 3
- Ruby
- Swift
- Perl
- Node.js (使用 `#!/usr/bin/env node`)
- 其他任何可执行脚本

### 可以在脚本中使用 GUI 吗？

可以，但有限制。你可以使用：

- `osascript` 显示对话框和通知
- AppleScript 与其他应用交互
- 简单的 GUI 工具如 `dialog`

不建议在脚本中启动复杂的 GUI 应用。

### Hassan 的数据存储在哪里？

- **任务目录**: `~/Library/Application Support/Hassan/Tasks/`
- **偏好设置**: `~/Library/Preferences/com.rakuyo.Hassan.plist`
- **应用支持文件**: `~/Library/Application Support/Hassan/`

## 反馈与帮助

### 如何报告 Bug 或提出建议？

如果你发现了 Bug 或有功能建议，请通过以下方式联系我们：

- 发送邮件描述问题和建议
- 提供 macOS 版本和 Hassan 版本信息
- 如果是 Bug，请提供详细的重现步骤和错误日志

### 如何获得技术支持？

如果你在使用 Hassan 时遇到问题：

1. 查看本文档的相关章节
2. 检查常见问题解答
3. 联系我们获取技术支持

## 其他问题

### Hassan 的名字有什么含义？

Hassan 的灵感来自《Fate》系列中的"山中老人"（Hassan-i-Sabbah），象征着"披着编辑器外衣"的概念 —— 它是一个脚本执行器，伪装成普通的外部编辑器，为 Xcode 工作流提供强大的自动化能力。

### Hassan 会收集我的数据吗？

**绝对不会！** Hassan：

- ✅ 所有操作都在本地完成
- ✅ 不收集任何使用统计
- ✅ 不上传任何数据
- ✅ 不需要网络连接
- ✅ 完全尊重你的隐私

### Hassan 的价格是多少？

请访问 Hassan 官网了解定价信息和购买方式。

## 还有其他问题？

如果你的问题没有在这里找到答案，欢迎联系我们获取帮助。
