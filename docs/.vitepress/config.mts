import { defineConfig } from 'vitepress'
import { nav,sidebar } from './relaconf';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "relax",
  themeConfig: {
    logo: '/avatar.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [1, 6],
      label: '文章目录'
    }
  }
})
