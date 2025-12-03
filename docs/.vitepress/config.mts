import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hassan",
  description: "专为 Xcode 设计，让你通过右键菜单快速执行自定义脚本，为开发工作流注入自动化能力",

  // 使用组织主页 hassanstudio.github.io，不需要设置 base
  // base: '/Hassan-Doc/',

  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '常见问题', link: '/faq' },
      { text: '关于', link: '/about/' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '快速开始', link: '/guide/' },
          { text: '功能介绍', link: '/guide/features' },
          { text: '自定义脚本', link: '/guide/custom-scripts' }
        ]
      },
      {
        text: '关于',
        items: [
          { text: '关于 Hassan', link: '/about/' },
          { text: '隐私政策', link: '/about/privacy' },
          { text: '第三方许可证', link: '/about/licenses' },
          { text: '联系我们', link: '/about/contact' }
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
