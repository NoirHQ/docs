import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Noir",
  description: "Noir Architecture Decision Records",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'ADRs', link: '/README' }
    ],

    sidebar: [
      {
        text: 'ADRs',
        items: [
          { text: 'Architecture Decision Records', link: '/README' },
          { text: 'ADR Creation Process', link: '/PROCESS' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/noirhq/adr' }
    ]
  }
})
