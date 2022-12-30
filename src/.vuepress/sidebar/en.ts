import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/":[
    // 云原生
    {
     text: "云原生",
     icon: "note",
     prefix: "cloud_base/",
     link: "cloud_base/",
     collapsible: true,
     children: [
       {
         text: "Docker",
         icon: "duoxiancheng",
         prefix: "docker/",
         collapsible: true,
         children:[
           {
             text: "Docker的简单使用",
             icon: "duoxiancheng",
             link: "daocker.md",
           },
         ],
       },

       {
         text: "K8S",
         icon: "duoxiancheng",
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
 ]
});
