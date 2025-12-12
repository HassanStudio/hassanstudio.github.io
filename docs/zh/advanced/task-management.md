# 任务管理

<!--@include: @/.vitepress/snippets/app-name.md--> 提供了完善的任务管理系统，让你轻松组织和管理所有脚本。

## 任务目录

<!--@include: @/.vitepress/snippets/app-name.md--> 会自动扫描以下目录中的脚本：

```
<!--@include: @/.vitepress/snippets/path-tasks.md-->
```

首次启动时，<!--@include: @/.vitepress/snippets/app-name.md--> 会自动创建这个目录，并复制[内置脚本](/zh/guide/getting-started#内置脚本介绍)到该位置。

## 任务组织

### 层级结构

你可以使用文件夹来组织脚本，<!--@include: @/.vitepress/snippets/app-name.md--> 会以树形结构展示：

::: info 文件夹即分组！
使用目录结构来组织你的脚本，<!--@include: @/.vitepress/snippets/app-name.md--> 会自动识别并以树形结构展示。
:::

```
<!--@include: @/.vitepress/snippets/path-tasks.md-->
├── Builtin/                       # 内置脚本目录（安装时默认创建）
│   ├── _common.sh                 # 内置的工具脚本
│   ├── copy-absolute-path.sh
│   ├── copy-relative-path.sh
│   └── open-in-finder.sh    
└── Custom/                        # 自定义脚本目录（示例）
    ├── development/
    │   ├── format-code.sh
    │   └── run-tests.sh
    └── utilities/
        ├── convert-format.py
        └── analyze-file.swift
```

::: warning 提示
目前无法关闭「文件夹分组」功能，<!--@include: @/.vitepress/snippets/app-name.md--> 会严格按照 `Tasks` 文件夹下的文件目录结构去展示脚本。
:::

### 脚本元数据

你可以在脚本中使用注释添加元数据，<!--@include: @/.vitepress/snippets/app-name.md--> 会解析并显示：

```bash
#!/bin/bash
# @title: 格式化代码
# @description: 使用 SwiftFormat 格式化 Swift 代码
# @author: Rakuyo
# @version: 1.0

# 脚本内容...
```

**支持的元数据标签**：
- `@title:` - 脚本的显示标题
- `@description:` - 脚本的详细描述
- `@author:` - 脚本作者
- `@version:` - 脚本版本
<!-- - `@fileTypes:` - 该脚本所适用的文件类型（多个值用逗号分隔） -->

::: warning 注意
- 元数据必须在文件开头的注释区域，遇到非注释行会停止解析
- 目前只支持 `#` 和 `//` 两种注释符号
- 元数据标签必须使用 `@key: value` 格式，**冒号是必需的**
:::

### 脚本模块化

<!--@include: @/.vitepress/snippets/app-name.md--> 支持脚本之间的互相依赖和组件化，让你可以创建公共脚本库供其他脚本调用。

#### 公共脚本

你可以创建以 `.` 或 `_` 开头的脚本文件作为公共模块，这些文件**不会显示在任务列表**中，但可以被其他脚本引用：

**命名方式**：
- 以 `.` 开头：如 `.common.sh`、`.utils.py`
- 以 `_` 开头：如 `_helpers.sh`、`_config.rb`

**使用示例**：

创建公共脚本 `.common.sh`：
```bash
# .common.sh - 公共函数库
function log_info() {
    echo "[INFO] $1"
}

# 更多函数...
```

在其他脚本中引用：
```bash
# format-code.sh

#!/bin/bash
# @title: 格式化代码
# @description: 使用 SwiftFormat 格式化 Swift 代码
# @author: Rakuyo
# @version: 1.0

# 引用公共脚本
source "$(dirname "$0")/.common.sh"

log_info "开始格式化代码..."
# 后续逻辑...
```
