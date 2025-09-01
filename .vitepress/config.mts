import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Halo 文档中心",
  description: "开源建站工具 Halo 的插件和主题使用指南",
  
  // 支持iconify图标
  vue: {
    template: {
      compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' }
    }
  },
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '插件文档', link: '/plugins/webjing-core' },
      { text: '主题文档', link: '/theme/overview' }
    ],

    sidebar: {
      '/plugins/': [
        {
          text: '🔌 插件文档',
          items: [
            { text: 'webjing核心插件', link: '/plugins/webjing-core' },
            { text: '链接安全跳转中台插件', link: '/plugins/link-security' },
            {
              text: '言答Issue插件',
              collapsed: false,
              items: [
                { text: '总览', link: '/plugins/issue/index' },
                { text: '插件介绍与功能预览', link: '/plugins/issue/插件介绍与功能预览' },
                { text: '使用说明', link: '/plugins/issue/使用' }
              ]
            }
          ]
        }
      ],
      '/theme/': [
        {
          text: '🎨 主题文档',
          items: [
            { text: '主题概述', link: '/theme/overview' },
            { text: '主题预览', link: '/theme/preview' },
            { text: '主题特色功能', link: '/theme/features' },
            { text: '主题定制', link: '/theme/customization' },
            {
              text: '⚙️ 主题设置',
              collapsed: false,
              items: [
                { text: '设置总览', link: '/theme/settings/index' },
                { text: '基础设置', link: '/theme/settings/基础' },
                { text: '布局设置', link: '/theme/settings/布局' },
                { text: '样式设置', link: '/theme/settings/样式' },
                { text: '文章设置', link: '/theme/settings/文章' },
                { text: '搜索设置', link: '/theme/settings/搜索' },
                { text: '页脚设置', link: '/theme/settings/页脚' },
                { text: '认证页面', link: '/theme/settings/认证页面' },
                { text: '右侧动态面板', link: '/theme/settings/右侧动态面板' },
                { text: '插件适配', link: '/theme/settings/插件适配' },
                { text: '扩展设置', link: '/theme/settings/扩展设置' },
                {
                  text: '🧭 顶部菜单',
                  collapsed: true,
                  items: [
                    { text: '顶部菜单总览', link: '/theme/settings/顶部菜单/index' },
                    { text: 'ICONFONT图标设置', link: '/theme/settings/顶部菜单/导航栏中设置ICONFONT图标' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 添加搜索支持
    search: {
      provider: 'local'
    },

    // 页脚配置
    footer: {
      message: '基于 <a href="https://vitepress.dev/">VitePress</a> 构建',
      copyright: 'Copyright © 2025 Halo 文档中心'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
})
