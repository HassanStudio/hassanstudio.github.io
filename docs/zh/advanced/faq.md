# 常见问题

这里收集了 <!--@include: @/.vitepress/snippets/app-name.md--> 使用过程中的常见问题和解答。如果你的问题没有在这里找到答案，欢迎[联系我们](/zh/about/contact)获取技术支持。

## 安装与配置

### <!--@include: @/.vitepress/snippets/app-name.md--> 需要哪些系统权限？

<!--@include: @/.vitepress/snippets/app-name.md--> 可能需要以下权限：

- **通知权限** - 用于显示脚本执行结果的通知
- **文件访问权限** - 用于读取和处理文件

这些权限系统会在需要时自动请求，请根据提示授予。

### 如何卸载 <!--@include: @/.vitepress/snippets/app-name.md-->？

1. 退出 <!--@include: @/.vitepress/snippets/app-name.md--> 应用（`Command + Q`）
2. 将 `/Applications/Hassan.app` 拖到废纸篓
3. 清空废纸篓

如果你想彻底清理所有数据：

```bash
# 删除任务目录
rm -rf <!--@include: @/.vitepress/snippets/path-app-support-bash.md-->

# 删除偏好设置
defaults delete <!--@include: @/.vitepress/snippets/bundle-id.md-->
```

::: tip 提示
如果你之前设置了文件关联，建议先在 <!--@include: @/.vitepress/snippets/app-name.md--> 设置中点击「恢复默认」，然后再卸载。
:::

## 使用问题

### 为什么脚本执行后没有反应？

可能的原因和解决方法：

1. **检查脚本权限**
   ```bash
   ls -l <!--@include: @/.vitepress/snippets/path-tasks-script-bash.md-->
   ```
   确保脚本有执行权限（`-rwxr-xr-x`）

2. **检查脚本语法**
   在终端中手动执行脚本，查看是否有错误：
   ```bash
   bash <!--@include: @/.vitepress/snippets/path-tasks-script-bash.md--> "/path/to/test/file"
   ```

3. **检查 shebang 行**
   确保脚本第一行有正确的 shebang：
   ```bash
   #!/bin/bash
   ```

4. **检查解释器配置**
   - 打开 <!--@include: @/.vitepress/snippets/app-name.md--> 设置
   - 切换到「解释器」标签页
   - 确保脚本所使用的解释器在列表中
      - 如果不存在，请参考[解释器配置](/zh/advanced/script-execution#解释器配置)增加解释器

### 「复制相对路径」脚本无法正确识别项目根目录怎么办？

<!--@include: @/.vitepress/snippets/app-name.md--> 按以下优先级检测项目根目录：

1. `.xcworkspace`
2. `Tuist/` + (`mise.toml` 或 `Workspace.swift`)
3. `.git`
4. `.xcodeproj`

如果检测不正确，请确认：

1. 文件是否在项目目录中
2. 项目是否包含上述标识文件/目录
3. 是否有多个嵌套的项目结构（<!--@include: @/.vitepress/snippets/app-name.md--> 会选择最近的一个）

## 脚本编写

### 如何在脚本中获取文件路径？

<!--@include: @/.vitepress/snippets/app-name.md--> 会将文件的绝对路径作为第一个参数传递给脚本：

```bash
#!/bin/bash
file_path="$1"  # 第一个参数就是文件路径

echo "处理文件：$file_path"
```

### 如何让脚本显示更友好的名称？

使用元数据注释，详见[脚本元数据](/zh/advanced/task-management#脚本元数据)。

### 如何调试脚本？

详见[脚本元数据](/zh/advanced/custom-scripts#调试脚本)。

## 还有其他问题？

如果你的问题没有在这里找到答案，欢迎[联系我们](/zh/about/contact)获取帮助。
