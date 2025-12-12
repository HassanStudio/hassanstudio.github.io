# App 隐私政策

> 如有任何问题，请随时[联系我们](/zh/about/contact)

<!--@include: @/.vitepress/snippets/app-name.md--> 非常重视用户的隐私和数据安全。本隐私政策说明了 <!--@include: @/.vitepress/snippets/app-name.md--> 如何处理用户信息。

## 简短声明

**<!--@include: @/.vitepress/snippets/app-name.md--> 不收集、不上传、不分享任何用户数据。所有操作都在您的设备上本地完成。**

## 数据收集

### 我们不收集任何数据

<!--@include: @/.vitepress/snippets/app-name.md--> 是一个完全本地化的应用程序，我们：

- [x] **不收集**任何使用统计数据
- [x] **不收集**任何崩溃报告
- [x] **不收集**任何分析数据
- [x] **不收集**任何个人信息
- [x] **不收集**您的文件或脚本内容
- [x] **不收集**您的系统信息

## 本地处理

<!--@include: @/.vitepress/snippets/app-name.md--> 的所有功能都在您的设备上本地完成：

- **脚本执行**：在您的 Mac 上本地执行，不会发送到任何服务器
- **文件处理**：所有文件操作都在本地完成
- **配置管理**：所有设置都存储在您的 Mac 上
- **任务管理**：任务列表仅在本地扫描和管理

## 网络连接

**<!--@include: @/.vitepress/snippets/app-name.md--> 不需要网络连接**：

- <!--@include: @/.vitepress/snippets/app-name.md--> 不会主动建立任何网络连接
- <!--@include: @/.vitepress/snippets/app-name.md--> 不会向任何服务器发送数据
- <!--@include: @/.vitepress/snippets/app-name.md--> 不会检查更新（除非您手动触发）
- <!--@include: @/.vitepress/snippets/app-name.md--> 可以在完全离线的环境中正常工作

## 权限使用

<!--@include: @/.vitepress/snippets/app-name.md--> 可能需要以下系统权限才能正常工作：

### 1. 通知权限

**用途**：显示脚本执行结果的通知

**说明**：
- 用于告知您脚本执行成功或失败
- 通知内容仅包含执行结果，不包含敏感信息
- 通知仅在本地生成，不会发送到任何服务器
- 您可以在系统设置中随时关闭通知权限

### 2. 文件访问权限

**用途**：读取和处理您选择的文件

**说明**：
- 仅访问您在 Xcode 中明确选择要处理的文件
- 用于执行脚本时传递文件路径
- 不会自动访问您的其他文件
- 遵循 macOS 沙盒安全机制

### 3. 辅助功能权限（可选）

**用途**：某些高级脚本功能可能需要

**说明**：
- 仅在您的自定义脚本需要时才会请求
- 用于脚本执行系统级操作
- 可以随时在系统设置中撤销

## 数据存储

<!--@include: @/.vitepress/snippets/app-name.md--> 在您的 Mac 上存储以下数据：

### 任务目录
```
<!--@include: @/.vitepress/snippets/path-tasks.md-->
```
- 存储您的自定义脚本和内置脚本
- 完全在您的本地控制之下
- 可以随时添加、修改或删除

### 偏好设置
```
<!--@include: @/.vitepress/snippets/path-preferences.md-->
```
- 存储您的应用设置和配置
- 包括快捷任务、文件关联、解释器配置等
- 使用 macOS 标准的偏好设置存储机制

### 应用支持文件
```
<!--@include: @/.vitepress/snippets/path-app-support.md-->
```
- 存储应用运行所需的支持文件
- 包括内置脚本的备份等

**所有这些数据都存储在您的 Mac 上，不会同步到云端或发送到任何服务器。**

## 第三方服务

**<!--@include: @/.vitepress/snippets/app-name.md--> 不使用任何第三方服务**：

- ❌ 无第三方分析服务（如 Google Analytics）
- ❌ 无崩溃报告服务（如 Crashlytics）
- ❌ 无广告服务
- ❌ 无云存储服务
- ❌ 无任何其他第三方服务

### 关于第三方代码库

虽然 <!--@include: @/.vitepress/snippets/app-name.md--> 不使用任何第三方服务，但为了提供更好的开发体验和代码质量，<!--@include: @/.vitepress/snippets/app-name.md--> 使用了一些优秀的开源代码库。

**重要说明**：
- 这些代码库都在您的设备上**本地运行**
- **不涉及任何数据收集**或网络传输
- 所有依赖库均为**开源项目**，代码公开透明可审查
- <!--@include: @/.vitepress/snippets/app-name.md--> 遵守所有依赖库的开源许可证要求

完整的第三方开源库列表和许可证信息，请查看[第三方开源许可证声明](/zh/about/licenses)。

## 脚本执行安全

### 您的脚本

- 您的自定义脚本完全由您控制
- 脚本在您的 Mac 上以您的用户权限执行
- <!--@include: @/.vitepress/snippets/app-name.md--> 不会修改、上传或分享您的脚本
- 脚本执行过程完全本地化

### 内置脚本

<!--@include: @/.vitepress/snippets/app-name.md--> 提供的内置脚本（复制路径、在 Finder 中显示等），其源代码是公开透明的，您可以在`<!--@include: @/.vitepress/snippets/path-tasks.md-->Builtin/`文件夹中查看。

## 数据安全

<!--@include: @/.vitepress/snippets/app-name.md--> 采取以下措施保护您的数据安全：

1. **本地处理**：所有数据处理都在本地完成，不会离开您的设备
2. **沙盒隔离**：遵循 macOS 沙盒机制，保护系统安全
3. **权限最小化**：仅请求必要的权限
4. **无网络连接**：不建立任何网络连接，杜绝数据泄露风险

## 用户权利

作为 <!--@include: @/.vitepress/snippets/app-name.md--> 的用户，您拥有以下权利：

### 1. 数据访问权
您可以随时访问 <!--@include: @/.vitepress/snippets/app-name.md--> 存储的所有数据：
- 任务脚本位于 `<!--@include: @/.vitepress/snippets/path-tasks.md-->`
- 配置文件位于 `<!--@include: @/.vitepress/snippets/path-preferences.md-->`

### 2. 数据删除权
您可以随时删除所有数据：
```bash
# 删除任务目录
rm -rf <!--@include: @/.vitepress/snippets/path-app-support-bash.md-->

# 删除偏好设置
defaults delete <!--@include: @/.vitepress/snippets/bundle-id.md-->
```

### 3. 权限撤销权
您可以在 macOS 系统设置中随时撤销授予 <!--@include: @/.vitepress/snippets/app-name.md--> 的权限：
- 系统设置 → 隐私与安全性 → 通知
- 系统设置 → 隐私与安全性 → 文件和文件夹

### 4. 完全控制权
- 您完全控制 <!--@include: @/.vitepress/snippets/app-name.md--> 访问的所有数据
- 您可以随时查看、修改或删除任何数据
- 您可以随时卸载 <!--@include: @/.vitepress/snippets/app-name.md-->

## 隐私政策更新

我们可能会不定期更新本隐私政策。更新后的政策将在本页面发布，并在文档底部标注最后更新日期。

重大变更时，我们将会在官网，以及 App Store 发布页面发布公告。

## 合规声明

<!--@include: @/.vitepress/snippets/app-name.md--> 遵守以下隐私法规：

- **GDPR**（欧盟通用数据保护条例）：由于我们不收集任何数据，<!--@include: @/.vitepress/snippets/app-name.md--> 天然符合 GDPR 要求
- **CCPA**（加州消费者隐私法案）：我们不出售或分享任何个人信息
- **Apple App Store 隐私要求**：<!--@include: @/.vitepress/snippets/app-name.md--> 完全符合 Apple 的隐私指南

## 总结

<!--@include: @/.vitepress/snippets/app-name.md--> 的隐私承诺：

- [x] **零数据收集** - 我们不收集任何数据
- [x] **本地处理** - 所有操作都在您的设备上完成
- [x] **无网络连接** - 不需要网络，不会上传数据
- [x] **用户控制** - 您完全控制所有数据

您的隐私和数据安全是我们的首要任务。
