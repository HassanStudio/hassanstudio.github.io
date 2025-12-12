# 基础使用

<!--@include: @/.vitepress/snippets/app-name.md--> 安装完成后，你就可以开始使用了。

## 使用内置脚本

### 在 Xcode 中使用

Hassan 开箱即用，你可以直接在 Xcode 中：

1. 在 Xcode Project Navigator 中找到任意文件
2. 右键点击文件
3. 选择「**Open with External Editor**」
4. 鼠标所在的位置会显示脚本任务列表
5. 选择你想要执行的脚本

::: warning 点击 「Open with External Editor」后没有唤起 <!--@include: @/.vitepress/snippets/app-name.md-->
<!--@include: @/.vitepress/snippets/app-name.md--> 安装后会自动与 `.swift` 等常见文件类型关联。如果出现此问题，请查看[文件关联管理](/zh/advanced/file-associations)了解如何配置文件关联。
:::

### 内置脚本介绍

<!--@include: @/.vitepress/snippets/app-name.md--> 提供了三个实用的内置脚本，开箱即用：

#### 1. 复制绝对路径

将文件的完整绝对路径复制到剪贴板。

**使用场景**：
- 在终端中引用文件
- 在脚本中使用完整路径
- 与其他工具共享文件位置

**示例输出**：
```
/Users/username/Projects/MyApp/Sources/AppDelegate.swift
```

#### 2. 复制相对路径

智能计算并复制文件相对于项目根目录的路径。

该脚本会自动识别项目根目录，遇到问题时可查看[「复制相对路径」脚本无法正确识别项目根目录怎么办](/zh/advanced/faq#「复制相对路径」脚本无法正确识别项目根目录怎么办)。

::: info 逻辑实现
识别项目根目录的逻辑请参考内建脚本 `_common.sh` 中的 `find_project_root()` 函数。
:::

**使用场景**：
- 在配置文件中引用其他文件
- 编写项目文档
- 配置构建脚本
- 团队协作时共享文件位置

**示例输出**：
```
Sources/AppDelegate.swift
```

#### 3. 在 Finder 中显示

在 Finder 中定位并选中文件。

**使用场景**：
- 快速定位文件位置
- 重命名或移动文件
- 查看文件所在文件夹的其他内容

### 快捷任务

快捷任务功能允许你设置一个默认脚本，在打开文件时自动执行，无需手动选择，提升高频操作的效率。

#### 配置步骤

1. 打开设置窗口（`Command + ,`）
2. 在「通用」标签页中找到「快捷模式」
3. 勾选「启用」复选框
4. 在「快捷任务」下拉菜单中选择默认脚本（如「复制相对路径」）

#### 使用效果

启用快捷任务后：
- 通过「Open with External Editor」时会**直接执行**选定的默认脚本
- 不会显示任务选择菜单，触发路径更短

**适合场景**：
- 你有一个最常用的脚本
- 希望减少操作步骤，快速执行固定任务

::: warning 注意
启用快捷任务后，如需执行其他脚本，需关闭「快捷模式」，或者修改「快捷模式」的默认执行脚本。
:::

### 通过菜单栏使用

<!--@include: @/.vitepress/snippets/app-name.md--> 在菜单栏提供了图标，方便你快速访问各项功能。

点击菜单栏中的 <!--@include: @/.vitepress/snippets/app-name.md--> 图标（🔨），你可以：

**快捷任务管理**
- 启用/禁用快捷任务
- 选择默认脚本

**文件关联管理**
- 快速切换文件类型关联
- 打开文件关联设置

**其他功能**
- 打开偏好设置（快捷键 `Command + ,`）
- 退出应用（快捷键 `Command + Q`）

## 首选项配置

<!--@include: @/.vitepress/snippets/app-name.md--> 提供了丰富的自定义选项，你可以通过 `Command + ,` 或菜单栏打开设置窗口。

### 通用设置

在「通用」标签页中，你可以配置：

#### 外观模式

- **浅色模式** - 使用浅色主题
- **深色模式** - 使用深色主题
- **跟随系统** - 自动跟随系统外观设置

#### 应用语言

- **简体中文** - 使用中文界面
- **English** - 使用英文界面
- **跟随系统** - 自动跟随系统语言设置

#### 后台运行

启用后，关闭设置窗口时 <!--@include: @/.vitepress/snippets/app-name.md--> 会保持在后台运行，而不会退出应用。

#### 显示菜单栏图标

控制是否在系统菜单栏显示 <!--@include: @/.vitepress/snippets/app-name.md--> 图标。

## 下一步

现在你已经熟悉了 <!--@include: @/.vitepress/snippets/app-name.md--> 的基本使用！接下来你可以：

::: tip 小提示
试着在日常开发中使用 <!--@include: @/.vitepress/snippets/app-name.md--> 的内置脚本，熟悉它的工作方式。当你准备好后，再开始编写自己的自定义脚本！
:::

- [任务管理](/zh/advanced/task-management) - 了解如何组织和管理脚本
- [脚本执行引擎](/zh/advanced/script-execution) - 深入了解脚本执行原理
- [文件关联管理](/zh/advanced/file-associations) - 批量设置文件类型关联
- [自定义脚本](/zh/advanced/custom-scripts) - 学习如何编写自己的自动化脚本
- [常见问题](/zh/advanced/faq) - 查看使用过程中的常见问题
