import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-lists'
import { withMermaid } from 'vitepress-plugin-mermaid'
import fs from 'fs'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: "Hassan",
  description: "Designed for Xcode, enabling quick execution of custom scripts via right-click menu",

  // 使用组织主页 hassanstudio.github.io，不需要设置 base
  // base: '/Hassan-Doc/',

  // Clean URLs：移除 URL 中的 .html 后缀
  cleanUrls: true,

  // Markdown 配置
  markdown: {
    config: (md) => {
      // 任务列表支持
      md.use(taskLists, {
        disabled: false,
        divWrap: false,
        divClass: 'checkbox',
        idPrefix: 'cbx_',
        ulClass: 'task-list',
        liClass: 'task-list-item'
      })
    }
  },

  // Favicon 配置
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }]
  ],

  // 最后更新时间
  lastUpdated: true,

  // Vite 配置：开发环境重定向中间件
  vite: {
    // 修复 vitepress-plugin-mermaid 依赖问题
    optimizeDeps: {
      include: ['@braintree/sanitize-url']
    },
    resolve: {
      alias: {
        dayjs: 'dayjs/',
      },
    },
    server: {
      middlewareMode: false,
    },
    plugins: [
      {
        name: 'language-redirect-dev',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = req.url || ''

            // 只拦截看起来像页面请求的路径
            // 1. 根路径 /
            // 2. 以 / 结尾的路径（如 /about/）
            // 3. 不包含 /en/ 或 /zh/ 且不包含文件扩展名的路径
            const isPageRequest =
              url === '/' ||
              (url.endsWith('/') && !url.startsWith('/en/') && !url.startsWith('/zh/')) ||
              (!url.includes('.') && !url.includes('?') && !url.startsWith('/@') && !url.startsWith('/en/') && !url.startsWith('/zh/'))

            if (!isPageRequest) {
              return next()
            }

            // 检查 Accept-Language 请求头
            const acceptLanguage = req.headers['accept-language'] || ''
            const isZh = acceptLanguage.toLowerCase().includes('zh')

            let targetUrl = url === '/' ? (isZh ? '/zh/' : '/en/') : (isZh ? `/zh${url}` : `/en${url}`)

            // 返回重定向 HTML（用于客户端处理）
            res.setHeader('Content-Type', 'text/html')
            res.end(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>body{display:none}</style>
  <script>
    const lang = navigator.language.toLowerCase();
    const currentPath = '${url}';
    const enPath = currentPath === '/' ? '/en/' : '/en' + currentPath;
    const zhPath = currentPath === '/' ? '/zh/' : '/zh' + currentPath;

    if (lang.startsWith('zh')) {
      window.location.replace(zhPath);
    } else {
      window.location.replace(enPath);
    }
  </script>
  <noscript>
    <meta http-equiv="refresh" content="0; url=${targetUrl}">
  </noscript>
</head>
<body></body>
</html>`)
          })
        }
      }
    ]
  },

  // 构建钩子：生成自动语言重定向页面
  buildEnd: async (siteConfig) => {
    const outDir = siteConfig.outDir
    const enDir = path.join(outDir, 'en')
    const zhDir = path.join(outDir, 'zh')

    // 递归获取所有 HTML 文件
    const getHtmlFiles = (dir: string, baseDir: string = dir): string[] => {
      const files: string[] = []
      if (!fs.existsSync(dir)) return files

      const items = fs.readdirSync(dir)
      for (const item of items) {
        const fullPath = path.join(dir, item)
        const stat = fs.statSync(fullPath)
        if (stat.isDirectory()) {
          files.push(...getHtmlFiles(fullPath, baseDir))
        } else if (item.endsWith('.html')) {
          files.push(path.relative(baseDir, fullPath))
        }
      }
      return files
    }

    const enFiles = getHtmlFiles(enDir)

    // 为每个英文页面在根路径创建重定向
    for (const file of enFiles) {
      const targetPath = path.join(outDir, file)
      const targetDir = path.dirname(targetPath)

      // 确保目录存在
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true })
      }

      // 创建重定向 HTML
      const redirectHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>body{display:none}</style>
  <script>
    const lang = navigator.language.toLowerCase();
    const enPath = '/en/${file.replace(/\\/g, '/')}';
    const zhPath = '/zh/${file.replace(/\\/g, '/')}';

    // 检查中文页面是否存在
    if (lang.startsWith('zh')) {
      fetch(zhPath, { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            window.location.replace(zhPath);
          } else {
            window.location.replace(enPath);
          }
        })
        .catch(() => window.location.replace(enPath));
    } else {
      window.location.replace(enPath);
    }
  </script>
  <noscript>
    <meta http-equiv="refresh" content="0; url=/en/${file.replace(/\\/g, '/')}">
  </noscript>
</head>
<body></body>
</html>`

      fs.writeFileSync(targetPath, redirectHtml)
    }
  },

  // 国际化配置
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        // 导航栏
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Contact', link: '/en/about/contact' }
        ],

        // 侧边栏
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'About Hassan', link: '/en/guide/' },
              { text: 'Installation', link: '/en/guide/install' },
              { text: 'Basic Usage', link: '/en/guide/getting-started' }
            ]
          },
          {
            text: 'Advanced',
            items: [
              { text: 'Task Management', link: '/en/advanced/task-management' },
              { text: 'Script Execution', link: '/en/advanced/script-execution' },
              { text: 'File Associations', link: '/en/advanced/file-associations' },
              { text: 'Custom Scripts', link: '/en/advanced/custom-scripts' },
              { text: 'FAQ', link: '/en/advanced/faq' }
            ]
          },
          {
            text: 'More',
            items: [
              { text: 'Privacy Policy', link: '/en/about/privacy' },
              { text: 'Third-Party Licenses', link: '/en/about/licenses' },
              { text: 'Changelog', link: '/en/about/changelog' },
              { text: 'Contact Us', link: '/en/about/contact' }
            ]
          }
        ],

        // 页脚
        footer: {
          copyright: 'Copyright © 2024-present Rakuyo'
        },

        // 搜索
        search: {
          provider: 'local'
        },

        // 文档页脚
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },

        // 大纲配置
        outline: {
          level: [2, 3],
          label: 'On this page'
        },

        // 最后更新时间文本
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },

        // 返回顶部文本
        returnToTopLabel: 'Return to top',

        // 侧边栏菜单标签
        sidebarMenuLabel: 'Menu',

        // 深色模式开关标签
        darkModeSwitchLabel: 'Theme',

        // 浅色模式开关标题
        lightModeSwitchTitle: 'Switch to light theme',

        // 深色模式开关标题
        darkModeSwitchTitle: 'Switch to dark theme'
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        // 导航栏
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/' },
          { text: '联系我们', link: '/zh/about/contact' }
        ],

        // 侧边栏
        sidebar: [
          {
            text: '快速开始',
            items: [
              { text: '关于 Hassan', link: '/zh/guide/' },
              { text: '安装', link: '/zh/guide/install' },
              { text: '基础使用', link: '/zh/guide/getting-started' }
            ]
          },
          {
            text: '进阶',
            items: [
              { text: '任务管理', link: '/zh/advanced/task-management' },
              { text: '脚本执行引擎', link: '/zh/advanced/script-execution' },
              { text: '文件关联管理', link: '/zh/advanced/file-associations' },
              { text: '自定义脚本', link: '/zh/advanced/custom-scripts' },
              { text: '常见问题', link: '/zh/advanced/faq' }
            ]
          },
          {
            text: '更多信息',
            items: [
              { text: '隐私政策', link: '/zh/about/privacy' },
              { text: '第三方许可证', link: '/zh/about/licenses' },
              { text: '更新日志', link: '/zh/about/changelog' },
              { text: '联系我们', link: '/zh/about/contact' }
            ]
          }
        ],

        // 页脚
        footer: {
          copyright: 'Copyright © 2024-present Rakuyo'
        },

        // 搜索
        search: {
          provider: 'local'
        },

        // 文档页脚
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },

        // 大纲配置
        outline: {
          level: [2, 3],
          label: '页面导航'
        },

        // 最后更新时间文本
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },

        // 返回顶部文本
        returnToTopLabel: '回到顶部',

        // 侧边栏菜单标签
        sidebarMenuLabel: '菜单',

        // 深色模式开关标签
        darkModeSwitchLabel: '主题',

        // 浅色模式开关标题
        lightModeSwitchTitle: '切换到浅色模式',

        // 深色模式开关标题
        darkModeSwitchTitle: '切换到深色模式'
      }
    }
  },

  // Mermaid 配置
  mermaid: {
    startOnLoad: true,
    theme: 'default'
  },
  mermaidPlugin: {
    class: 'mermaid'
  }
}))
