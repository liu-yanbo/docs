import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  
  lang: "zh-CN",
  title: "橘涂拾捌的wiki",
  description: "橘涂拾捌的wiki, 搭建自己的知识库",
  theme,
  plugins: [
    // searchProPlugin({
    //   // 索引全部内容
    //   indexContent: true,
    //   // 为分类和标签添加索引
    //   customFields: [
    //     {
    //       getter: (page) => page.frontmatter.category,
    //       formatter: "分类：$content",
    //     },
    //     {
    //       getter: (page) => page.frontmatter.tag,
    //       formatter: "标签：$content",
    //     },
    //   ],
    // }),
  ],
  shouldPrefetch: false,
});
