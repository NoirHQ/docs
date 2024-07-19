import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Noir",
  description: "Noir Documentation",
  base: "/adr/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'ADR', link: '/architecture/README' },
      { text: 'RFC', link: '/rfc/README' }
    ],

    sidebar: [
      {
        text: 'ADR',
        items: [
          { text: 'Architecture Decision Records (ADR)', link: '/architecture/README' },
          { text: 'ADR Creation Process', link: '/architecture/PROCESS' }
        ]
      },
      {
        text: 'RFC',
        items: [
          { text: 'Request for Comments', link: '/rfc/README' },
          { text: 'RFC Creation Process', link: '/rfc/PROCESS' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/noirhq/adr' }
    ]
  }
})
