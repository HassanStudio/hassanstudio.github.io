# hassanstudio.github.io

Hassan macOS App 的官方文档项目。

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
git clone https://github.com/HassanStudio/hassanstudio.github.io.git
cd hassanstudio.github.io
```

2. **安装工具和依赖**

```bash
# 安装 Node.js 和 pnpm（通过 mise）
# mise 会自动运行 install hook，安装项目的 pnpm 依赖
mise install
```

3. **启动开发服务器**

```bash
# 启动本地开发服务器
mise run npm:dev
```

现在你可以在浏览器中访问 `http://localhost:5173` 查看文档。

## 可用脚本

- `mise run npm:dev` - 启动本地开发服务器
- `mise run npm:build` - 构建生产版本
- `mise run npm:preview` - 预览构建结果
- `mise run npm:install` - 手动安装项目依赖（通常不需要，mise install 会自动执行）

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

## 相关链接

- [VitePress 文档](https://vitepress.dev/) - VitePress 官方文档
- [问题反馈]() - 报告问题或提出建议
