import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "博客", link: "/article/" },
  {
    text: 'Java',
    icon: 'creative',
    prefix: '/java/',
    children: [
      {
        text: 'Java基础 - 面向对象和基础',
        icon: 'creative',
        // prefix: 'oop/',
        link: 'oop/',
        children: [],
      },
      {
        text: 'Java进阶 - 集合框架',
        icon: 'config',
        link: 'collections/',
        children: [],
      },
      {
        text: 'Java进阶 - 并发框架',
        icon: 'config',
        link: 'juc/',
        children: [],
      },
      {
        text: 'Java进阶 - IO 框架',
        icon: 'config',
        link: 'io/',
        children: [],
      },
      {
        text: 'Java进阶 - 新版本特性',
        icon: 'config',
        link: 'feature/',
        children: [],
      },
    ],
  },

  {
    text: '算法',
    icon: 'creative',
    prefix: '/algorithm/',
    children: [
      {
        text: '算法基础和思想',
        icon: 'creative',
        link: 'basic/',
        children: [],
      }
    ],
  },

   {
    text: '数据库',
    icon: 'creative',
    prefix: '/database/',
    children: [
      {
        text: '数据库基础和原理',
        icon: 'creative',
        link: 'principle/',
        children: [],
      },
      {
        text: 'SQL 数据库',
        icon: 'config',
        link: 'sql/',
        children: [],
      },
      {
        text: 'NoSQL 数据库',
        icon: 'config',
        link: 'nosql/',
        children: [],
      },
    ],
  },


  {
    text: 'Spring',
    icon: 'creative',
    prefix: '/spring/',
    children: [
      {
        text: 'SpringFramework(v5.3)',
        icon: 'creative',
        // prefix: 'springframework/',
        link: 'springframework/',
        children: [],
      },
      {
        text: 'SpringBoot系列(v2.6)',
        icon: 'config',
        // prefix: 'springboot/',
        link: 'springboot/',
        children: [],
      },
      {
        text: 'SpringCloud系列(v2.6)',
        icon: 'config',
        // prefix: 'springcloud/',
        link: 'springcloud/',
        children: [],
      },
    ],
  },

{
    text: '工具|部署',
    icon: 'creative',
    prefix: '/tools/',
    children: [
      {
        text: '开发工具',
        icon: 'creative',
        link: 'dev/',
        children: [],
      },
      {
        text: 'Git 详解',
        icon: 'creative',
        link: 'git/',
        children: [],
      },
      {
        text: 'Linux',
        icon: 'creative',
        link: 'linux/',
        children: [],
      },
      {
        text: 'Docker',
        icon: 'creative',
        link: 'docker/',
        children: [],
      },
    ],
  },
  
]);
