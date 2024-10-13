import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "鬼鬼Samaの小窝",
  description: "这里放着我的一些小破烂。🌍",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: 'https://blog.june.ink' }
    ],

    sidebar: [
      {
        text: '墨语社',
        items: [
          { text: '镜像加速', link: '/proxy' },
          { text: '联系我们', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Akuma-real/' }
    ]
  }
})
