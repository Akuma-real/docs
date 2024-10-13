import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "墨语社",
  description: "这里是一个由热爱探索的人创建的温馨小角落。🌍",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '前往墨语社', link: 'https://social.june.ink' }
    ],

    sidebar: [
      {
        text: '墨语社',
        items: [
          { text: '加入我们', link: '/join' },
          { text: '邀请朋友', link: '/invite' },
          { text: '服务条款', link: '/tos' },
          { text: '合理使用规约', link: '/aup' },
          { text: '联系我们', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Akuma-real/social_docs' }
    ]
  }
})
