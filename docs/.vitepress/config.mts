import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hassan",
  description: "智能的 macOS 脚本执行平台，伪装成外部编辑器，为你的开发工作流带来强大的自动化能力",

  // 如果部署到 GitHub Pages，需要设置正确的 base
  // 如果仓库名是 Hassan-Doc，base 应该是 '/Hassan-Doc/'
  // 如果使用自定义域名，可以注释掉这一行
  base: '/Hassan-Doc/',

  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '常见问题', link: '/faq' },
      { text: '更新说明', link: '/changelog' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '介绍', link: '/guide/' },
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '功能介绍', link: '/guide/features' },
          { text: '自定义脚本', link: '/guide/custom-scripts' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: '常见问题', link: '/faq' },
          { text: '更新说明', link: '/changelog' }
        ]
      }
    ],

    // 社交链接
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/rakuyoMo/Hassan' }
    // ],

    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
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
  },

  // 语言配置
  lang: 'zh-CN',

  // 最后更新时间
  lastUpdated: true
})
