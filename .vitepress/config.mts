import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/lyf-notes/",
  // title: "lyf-blog",
  description: "学习笔记",
  themeConfig: {
    siteTitle: "lyf-blog",
    logo: "logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "语言",
        link: "/fe/language/TS小结",
        activeMatch: "/fe/language/",
      },
      {
        text: "实习小结",
        link: "/fe/实习小结/1月",
        activeMatch: "/fe/实习小结/",
      },
      {
        text: "工具使用",
        link: "/fe/工具使用/工具",
        activeMatch: "/fe/工具使用/",
      },
    ],

    sidebar: {
      "/fe/language/": {
        base: "/fe/language/",
        items: [
          {
            text: "开发语言",
            items: [
              {
                text: "TypeScript",
                collapsed: false,
                items: [{ text: "TS小结", link: "TS小结" }],
              },
              // { text: "Runtime API Examples", link: "/api-examples" },
            ],
          },
        ],
      },

      "/fe/实习小结/": {
        base: "/fe/实习小结/",
        items: [
          {
            text: "实习小结",
            items: [
              {
                text: "2024年",
                collapsed: false,
                items: [{ text: "1月", link: "1月" }],
              },
            ],
          },
        ],
      },

      "/fe/工具使用/": {
        base: "/fe/工具使用/",
        items: [
          {
            text: "实习小结",
            items: [
              {
                text: "浏览器",
                collapsed: false,
                items: [{ text: "debug", link: "浏览器debug" }],
              },
              {
                text: "git",
                collapsed: false,
                items: [{ text: "git", link: "git" }],
              },
              {
                text: "代理",
                collapsed: false,
                items: [{ text: "whistle", link: "代理" }],
              },
            ],
          },
        ],
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/persist-art/lyf-notes" },
    ],
  },
});
