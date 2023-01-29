import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // 算法
  "/algorithm/":[
    {
     text: "算法",
    //  icon: "note",
     prefix: "algorithm/",
    //  link: "algorithm/",
     collapsible: false,
     children: [
       {
         text: "Docker",
        // 
         prefix: "docker/",
         collapsible: true,
         children:[
           {
             text: "Docker的简单使用",
            
             link: "docker.md",
           },
         ],
       },

       {
         text: "K8S",
        // 
         prefix: "k8s/",
         collapsible: true,
         children:[
           {
             text: "k8s",
            
             link: "k8s.md",
           },
         ],
       },
     ],
   },
 ],

    // 数据库
    "/database/":[
      {
       text: "数据库",
      //  icon: "note",
       prefix: "database/",
      //  link: "database/",
       collapsible: false,
       children: [
         {
           text: "数据库基础和原理",
          // 
           prefix: "principle/",
           collapsible: true,
           children:[
             {
               text: "Docker的简单使用",
              
               link: "docker.md",
             },
           ],
         },
  
         {
           text: "SQL 数据库",
          // 
           prefix: "sql/",
           collapsible: true,
           children:[
             {
               text: "k8s",
              
               link: "k8s.md",
             },
           ],
         },
         {
          text: "NoSQL 数据库",
         // 
          prefix: "nosql/",
          collapsible: true,
          children:[
            {
              text: "k8s",
             
              link: "k8s.md",
            },
          ],
        },
       ],
     },
   ],
    // 工具|部署
    "/tools/":[
      {
       text: "工具|部署",
       prefix: "tools/",
       collapsible: false,
       children: [
         {
           text: "开源项目文章",
           prefix: "articles/",
           collapsible: false,
           children:[
           ],
         },
       ],
     },
   ],
     // 框架|中间件
     "/framework/":[
      {
       text: "框架|中间件",
       prefix: "framework/",
       collapsible: false,
       children: [
         {
           text: "开源项目文章",
           prefix: "articles/",
           collapsible: false,
           children:[
           ],
         },
       ],
     },
   ],
    // spring
    "/spring/":[
         {
           text: "SpringFramework",        
           prefix: "springframework/",
           link: "springframework/",
           collapsible: true,
           children:[
             {
               text: "Spring IOC 和 DI 的区别",
              
               link: "ioc-di.md",
             },
           ],
         },
  
         {
           text: "SpringBoot 系列",
           prefix: "springboot/",
           collapsible: true,
           children:[
             {
               text: "SpringBoot 自动装配原理",
               link: "SpringBootAutoConfiguration.md",
             },
             {
              text: "SpringBoot 如何编写自己的 starter",
              link: "SpringBootstarter.md",
            },
           ],
         },
         {
          text: "SpringCloud 系列",
          prefix: "springcloud/",
          collapsible: true,
          children:[
            {
              text: "k8s",
              link: "k8s.md",
            },
          ],
        },
   ],

   "/java/": [
        {
          text: "Java基础 - 面向对象和基础",
          prefix: "oop/",
          link: "oop/",
          collapsible: true,
          children:[
            {
              text: "Java 基础语言",
              link: "java-basic-lang.md",
            },
            {
              text: "Java 面向对象 - 封装",
              link: "oop-encapsulation.md",
            },
            {
              text: "Java 面向对象 - 继承",
              link: "oop-inheritance.md",
            },
            {
              text: "Java 面向对象 - 多态",
              link: "oop-polymorphism.md",
            },
            {
              text: "Java 详解 Java 继承",
              link: "oop-inheritance-details.md",
            },
            {
              text: "Java 接口和抽象类的使用选择",
              link: "interface&&abstract-class.md",
            },
            {
              text: "Java static关键字是什么",
              link: "static.md",
            },

          ],
        },
        {
          text: "Java进阶 - 集合框架",         
          prefix: "collections/",
          link: "collections/",
          collapsible: true,
          children:[
            {
              text: "SpringBoot自动配置原理",             
              link: "SpringBootAutoConfiguration.md",
            },
            {
              text: "Spring Boot 如何编写自己的 Spring Boot starter",             
              link: "SpringBootstarter.md",
            },
            
          ],
        },
        {
          text: "Java进阶 - 并发框架",          
          prefix: "juc/",
          link: "juc/",
          collapsible: true,
          children:[
            {
              text: "Spring开心就好",             
              link: "Spring.md",
            },
          ],
        },

        {
          text: "Java进阶 - IO 框架",
          
          prefix: "io/",
          link: "io/",
          collapsible: true,
          children:[
            {
              text: "Spring开心就好",             
              link: "Spring.md",
            },
          ],
        },

        {
          text: "Java进阶 - 新版本特性",       
          prefix: "feature/",
          link: "feature/",
          collapsible: true,
          children:[
            {
              text: "Spring开心就好",            
              link: "Spring.md",
            },
          ],
        },],
"/dev/": [
  {
    text: "Maven",
    prefix: "maven/",
    collapsible: true,
    children:[
      {
        text: "java基础",
        icon: "duoxiancheng",
        link: "javabases.md",
      },
    ],
  },
],

"/frontend/":[
  {
    text: "nodejs 开发指南",        
    prefix: "node/",
    link: "node/",
    collapsible: true,
    children:[
      {
        text: "前端开发环境的安装",
        link: "env.md",
      },
      {
        text: "npm 源切换工具 nrm 的使用 ",
        link: "nrm.md",
      },
    ],
  },
],

});
