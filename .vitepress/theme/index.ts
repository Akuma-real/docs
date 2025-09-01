// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import '@theojs/lumen'
import '@theojs/lumen/style'
import './var.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // lumen组件会自动注册
  }
}