# VitePress 片段使用说明

这个目录包含了文档中常用的变量和路径片段，方便统一管理和修改。

## 📁 片段结构

### 基础层（原子变量）

| 文件 | 内容 | 用途 |
|------|------|------|
| `app-name.md` | `Hassan` | 应用名称 |
| `bundle-id.md` | `com.rakuyo.hassan` | Bundle Identifier |

### 组合层

| 文件 | 内容 | 用途 |
|------|------|------|
| `container-prefix.md` | `~/Library/Containers/[bundle-id]/Data/Library/` | 沙盒容器前缀路径 |

### 完整路径层

| 文件 | 内容 | 用途 |
|------|------|------|
| `path-tasks.md` | 任务目录完整路径 | 用于普通文本 |
| `path-preferences.md` | 偏好设置完整路径 | 用于普通文本 |
| `path-app-support.md` | 应用支持目录完整路径 | 用于普通文本 |
| `path-app-support-bash.md` | 应用支持目录（转义版） | 用于 bash 代码块 |
| `path-tasks-script-bash.md` | 脚本路径示例（转义版） | 用于 bash 代码块 |

## 📖 使用方法

### 1. 在普通文本中使用

```markdown
应用名称是 <!--@include: @/.vitepress/snippets/app-name.md-->
Bundle ID 是 <!--@include: @/.vitepress/snippets/bundle-id.md-->
任务目录位于 `<!--@include: @/.vitepress/snippets/path-tasks.md-->`
```

### 2. 在代码块中使用（需要在代码块外）

**错误示例**（不会工作）：
````markdown
```bash
# 这样不会工作，片段不会在代码块内展开
rm -rf <!--@include: @/.vitepress/snippets/path-app-support-bash.md-->
```
````

**正确示例**：
```markdown
删除应用支持目录：

```bash
rm -rf <!--@include: @/.vitepress/snippets/path-app-support-bash.md-->
```

或者使用变量说明：

```markdown
删除应用支持目录（位于 <!--@include: @/.vitepress/snippets/path-app-support.md-->）：

```bash
rm -rf <!--@include: @/.vitepress/snippets/path-app-support-bash.md-->
```

### 3. 片段嵌套

片段支持嵌套引用。例如：

- `container-prefix.md` 引用了 `bundle-id.md`
- `path-tasks.md` 引用了 `container-prefix.md`

修改基础片段时，所有引用它的片段都会自动更新。

## ✏️ 如何修改

1. **修改应用名称**：编辑 `app-name.md`
2. **修改 Bundle ID**：编辑 `bundle-id.md`（会自动更新所有路径）
3. **修改完整路径**：编辑对应的路径片段文件

## 💡 最佳实践

1. **普通文本引用**：使用无转义版本的片段
2. **Bash 命令示例**：代码块中直接写完整路径（因为片段在代码块内不会展开）
3. **代码块说明**：在代码块外使用片段说明路径，代码块内使用实际路径
4. **保持简洁**：只创建真正需要复用的片段

## 📝 示例

完整的使用示例：

```markdown
### 脚本存放位置

所有脚本都应该放在 <!--@include: @/.vitepress/snippets/app-name.md--> 的任务目录中：

`<!--@include: @/.vitepress/snippets/path-tasks.md-->`

设置脚本权限：

```bash
chmod +x <!--@include: @/.vitepress/snippets/path-tasks-script-bash.md-->
```

## 🔄 更新历史

- 2024-12-10: 创建片段系统，支持嵌套引用
