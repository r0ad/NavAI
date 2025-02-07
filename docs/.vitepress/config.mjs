import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NavAI ",
  description: "让AI成为你的副驾",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '工具库', link: '/tool' },
      { text: '提示词', link: '/promote' },
      { text: '智能体', link: '/agent' }
    ],

    sidebar: [
      {
        text: '工具库',
        items: [
          { text: 'DeepSeek', link: '/tool/deepseek' },
          { text: 'Kimi', link: '/tool/kimi' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/r0ad/NavAI' }
    ]
  }
})
