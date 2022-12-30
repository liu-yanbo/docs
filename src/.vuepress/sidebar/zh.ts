import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // "/": [
  //   {
  //     text: "Java",
  //     // icon: "note",
  //     prefix: "java/",
  //     // link: "java/",
  //     collapsible: false,
  //     children: [
  //       {
  //         text: "Java基础 - 面向对象和基础",
  //         // icon: "duoxiancheng",
  //         prefix: "oop/",
  //         // link: "oop/",
  //         collapsible: true,
  //         children:[
  //           {
  //             text: "java基础",
  //             icon: "duoxiancheng",
  //             link: "javabases.md",
  //           },
  //         ],
  //       },
  //       {
  //         text: "Java进阶 - 集合框架",
  //         // icon: "duoxiancheng",
  //         prefix: "collections/",
  //         // link: "collections/",
  //         collapsible: true,
  //         children:[
  //           {
  //             text: "SpringBoot自动配置原理",
  //             // icon: "duoxiancheng",
  //             link: "SpringBootAutoConfiguration.md",
  //           },
  //           {
  //             text: "Spring Boot 如何编写自己的 Spring Boot starter",
  //             // icon: "duoxiancheng",
  //             link: "SpringBootstarter.md",
  //           },
            
  //         ],
  //       },
  //       {
  //         text: "Java进阶 - 并发框架",
  //         // icon: "duoxiancheng",
  //         prefix: "juc/",
  //         // link: "juc/",
  //         collapsible: true,
  //         children:[
  //           {
  //             text: "Spring开心就好",
  //             icon: "duoxiancheng",
  //             link: "Spring.md",
  //           },
  //         ],
  //       },

  //       {
  //         text: "Java进阶 - IO 框架",
  //         // icon: "duoxiancheng",
  //         prefix: "io/",
  //         // link: "io/",
  //         collapsible: true,
  //         children:[
  //           {
  //             text: "Spring开心就好",
  //             icon: "duoxiancheng",
  //             link: "Spring.md",
  //           },
  //         ],
  //       },

  //       {
  //         text: "Java进阶 - 新版本特性",
  //         // icon: "duoxiancheng",
  //         prefix: "feature/",
  //         // link: "feature/",
  //         collapsible: true,
  //         children:[
  //           {
  //             text: "Spring开心就好",
  //             icon: "duoxiancheng",
  //             link: "Spring.md",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   // "slides",
  // ],

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
        //  icon: "duoxiancheng",
         prefix: "docker/",
         collapsible: true,
         children:[
           {
             text: "Docker的简单使用",
             icon: "duoxiancheng",
             link: "docker.md",
           },
         ],
       },

       {
         text: "K8S",
        //  icon: "duoxiancheng",
         prefix: "k8s/",
         collapsible: true,
         children:[
           {
             text: "k8s",
             icon: "duoxiancheng",
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
          //  icon: "duoxiancheng",
           prefix: "principle/",
           collapsible: true,
           children:[
             {
               text: "Docker的简单使用",
               icon: "duoxiancheng",
               link: "docker.md",
             },
           ],
         },
  
         {
           text: "SQL 数据库",
          //  icon: "duoxiancheng",
           prefix: "sql/",
           collapsible: true,
           children:[
             {
               text: "k8s",
               icon: "duoxiancheng",
               link: "k8s.md",
             },
           ],
         },
         {
          text: "NoSQL 数据库",
         //  icon: "duoxiancheng",
          prefix: "nosql/",
          collapsible: true,
          children:[
            {
              text: "k8s",
              icon: "duoxiancheng",
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
               icon: "duoxiancheng",
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
          // icon: "duoxiancheng",
          prefix: "oop/",
          // link: "oop/",
          collapsible: true,
          children:[
            {
              text: "java基础",
              icon: "duoxiancheng",
              link: "javabases.md",
            },
          ],
        },
        {
          text: "Java进阶 - 集合框架",
          // icon: "duoxiancheng",
          prefix: "collections/",
          // link: "collections/",
          collapsible: true,
          children:[
            {
              text: "SpringBoot自动配置原理",
              // icon: "duoxiancheng",
              link: "SpringBootAutoConfiguration.md",
            },
            {
              text: "Spring Boot 如何编写自己的 Spring Boot starter",
              // icon: "duoxiancheng",
              link: "SpringBootstarter.md",
            },
            
          ],
        },
        {
          text: "Java进阶 - 并发框架",
          // icon: "duoxiancheng",
          prefix: "juc/",
          // link: "juc/",
          collapsible: true,
          children:[
            {
              text: "Spring开心就好",
              icon: "duoxiancheng",
              link: "Spring.md",
            },
          ],
        },

        {
          text: "Java进阶 - IO 框架",
          // icon: "duoxiancheng",
          prefix: "io/",
          // link: "io/",
          collapsible: true,
          children:[
            {
              text: "Spring开心就好",
              icon: "duoxiancheng",
              link: "Spring.md",
            },
          ],
        },

        {
          text: "Java进阶 - 新版本特性",
          // icon: "duoxiancheng",
          prefix: "feature/",
          // link: "feature/",
          collapsible: true,
          children:[
            {
              text: "Spring开心就好",
              icon: "duoxiancheng",
              link: "Spring.md",
            },
          ],
        },]
});
