# Hassan-Doc

Hassan macOS App 的官方文档项目。

## 关于 Hassan

Hassan 是一个智能的 macOS 脚本执行平台，灵感来自《Fate》系列中的"山中老人"（Hassan-i-Sabbah）。它伪装成外部编辑器，实际上提供了强大的脚本执行和自动化功能。

**核心特性**：
- 🎭 智能伪装 - 伪装成外部编辑器，无缝集成到 Xcode
- ⚡️ 脚本执行引擎 - 支持多种脚本语言（Shell、Python、Ruby、Swift 等）
- 📋 任务管理系统 - 自动扫描和组织脚本
- 🔗 文件关联管理 - 批量设置文件类型的默认编辑器
- 🎯 快捷任务 - 配置默认脚本，自动执行
- 📦 内置脚本 - 复制路径、在 Finder 中显示等实用功能

## 技术栈

本文档使用以下技术构建：

- [VitePress](https://vitepress.dev/) - 基于 Vite 和 Vue 的静态站点生成器
- [pnpm](https://pnpm.io/) - 快速、节省磁盘空间的包管理器
- [mise](https://mise.jdx.dev/) - 开发工具版本管理器

## 开发环境设置

### 前置要求

确保你已经安装了 [mise](https://mise.jdx.dev/)。如果还没有安装，请参考 [mise 安装指南](https://mise.jdx.dev/getting-started.html)。

### 快速开始

1. **克隆仓库**

```bash
git clone https://github.com/rakuyoMo/Hassan-Doc.git
cd Hassan-Doc
```

2. **安装工具**

```bash
# 安装 Node.js 和 pnpm（通过 mise）
mise install
```

3. **安装依赖**

```bash
# 使用 mise 环境中的 pnpm 安装依赖
mise exec -- pnpm install
```

4. **启动开发服务器**

```bash
# 启动本地开发服务器
mise exec -- pnpm dev
```

现在你可以在浏览器中访问 `http://localhost:5173` 查看文档。

## 可用脚本

- `pnpm dev` - 启动本地开发服务器
- `pnpm build` - 构建生产版本
- `pnpm preview` - 预览构建结果

## 项目结构

```
Hassan-Doc/
├── docs/                   # 文档源文件
│   ├── .vitepress/        # VitePress 配置
│   │   └── config.mts     # 站点配置文件
│   ├── guide/             # 使用指南
│   │   ├── index.md       # 指南首页
│   │   ├── getting-started.md  # 快速开始
│   │   ├── features.md    # 功能介绍
│   │   └── custom-scripts.md   # 自定义脚本
│   ├── index.md           # 文档首页
│   ├── faq.md             # 常见问题
│   └── changelog.md       # 更新说明
├── mise.toml              # mise 工具配置
├── package.json           # 项目依赖配置
└── README.md              # 本文件
```

## 文档内容

### 主要章节

- **介绍** - 了解 Hassan 是什么，为什么使用它
- **快速开始** - 安装、配置和基本使用
- **功能介绍** - 详细的功能说明和使用方法
- **自定义脚本** - 学习如何编写自己的自动化脚本
- **常见问题** - 使用过程中的常见问题解答
- **更新说明** - 版本更新历史和新功能

## 贡献指南

欢迎贡献文档改进！请遵循以下步骤：

1. Fork 本仓库
2. 创建你的功能分支 (`git checkout -b feature/ImproveDocs`)
3. 提交你的更改 (`git commit -m 'docs: 改进某某文档'`)
4. 推送到分支 (`git push origin feature/ImproveDocs`)
5. 创建一个 Pull Request

### 文档编写规范

- 使用清晰、简洁的语言
- 提供足够的示例代码
- 使用 VitePress 的 Markdown 扩展（如提示框、代码高亮等）
- 确保所有链接都是正确的
- 文件末尾保留一个空行

## 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。

## 相关链接

- [Hassan GitHub 仓库](https://github.com/rakuyoMo/Hassan) - 主项目源代码
- [Hassan 在线文档](https://hassan.rakuyo.dev) - 部署的在线文档
- [VitePress 文档](https://vitepress.dev/) - VitePress 官方文档
- [问题反馈](https://github.com/rakuyoMo/Hassan/issues) - 报告问题或提出建议


