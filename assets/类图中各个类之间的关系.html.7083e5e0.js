import{_ as s,X as l,Y as d,a0 as n,a2 as e,$ as i,a3 as r,B as t}from"./framework.485a9db6.js";const o={},c=n("blockquote",null,[n("p",null,"本文主要介绍 UML 图中，类与类之间的关系表示。")],-1),v={href:"https://www.planttext.com/",target:"_blank",rel:"noopener noreferrer"},u={href:"http://plantuml.com/",target:"_blank",rel:"noopener noreferrer"},m=r(`<h2 id="泛化关系-generalization" tabindex="-1"><a class="header-anchor" href="#泛化关系-generalization" aria-hidden="true">#</a> 泛化关系（Generalization）</h2><blockquote><p>用来描述继承关系，在 Java 中使用 extends 关键字。</p></blockquote><p><img src="https://www.planttext.com/api/plantuml/png/SoWkIImgAStDuU8goIp9ILLmJyrBBKhCoQnABCdCp-FYIiv9B2vM24lDo4nEp87od1EBeAoGejBaR2ukgBI2JOskBbWMHG2go24rBmLe4G00" alt="泛化关系（Generalization）" loading="lazy"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@startuml

title Generalization

class Vehical
class Car
class Truck

Vehical <span class="token operator">&lt;</span><span class="token operator">|</span>-- Car
Vehical <span class="token operator">&lt;</span><span class="token operator">|</span>-- Truck

@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现关系-realization" tabindex="-1"><a class="header-anchor" href="#实现关系-realization" aria-hidden="true">#</a> 实现关系（Realization）</h2><blockquote><p>用来实现一个接口，在 Java 中使用 implements 关键字。</p></blockquote><p><img src="http://img.mgd2008.com/image-20230130144002343.png" alt="实现关系（Realization）" loading="lazy"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@startuml

title Realization

interface MoveBehavior

class Fly
class Run

MoveBehavior <span class="token operator">&lt;</span><span class="token operator">|</span><span class="token punctuation">..</span> Fly
MoveBehavior <span class="token operator">&lt;</span><span class="token operator">|</span><span class="token punctuation">..</span> Run

@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="聚合关系-aggregation" tabindex="-1"><a class="header-anchor" href="#聚合关系-aggregation" aria-hidden="true">#</a> 聚合关系（Aggregation）</h2><blockquote><p>表示整体由部分组成，但是整体和部分不是强依赖的，整体不存在了部分还是会存在的。</p></blockquote><p><img src="http://img.mgd2008.com/54ddc67aed1d95ee44659f1b0c5005e7_SoWkIImgAStDuU8goIp9ILLmJ4ylIarFBCdCp-FYIiv9B2vMSCxFBIWjIIs2yRrJAvFo4ujIe5pV_DBYL2WxEBaeDHMe4QP58LzN5w4UHHIY3KK8fjiXDIy5w2G0.png" alt="聚合关系（Aggregation）" loading="lazy"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@startuml

title Aggregation

class Computer

class Keyboard
class Mouse
class Screen

Computer o-- Keyboard
Computer o-- Mouse
Computer o-- Screen

@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组合关系-composition" tabindex="-1"><a class="header-anchor" href="#组合关系-composition" aria-hidden="true">#</a> 组合关系（Composition）</h2><blockquote><p>和聚合关系不同，组合中整体和部分是强依赖的，整体不存在了部分也不存在了。比如公司没了部门就不存在了。但是公司和员工就属于聚合关系了，因为公司没了员工还在。</p></blockquote><p><img src="http://img.mgd2008.com/50db8bf50f6cff3b22be76c34bf6f4a7_SoWkIImgAStDuU8goIp9ILLmpiyjo2_EBCdCp-FYIiv9B2u62oNcLSAuBga5G2svgNabZXWYJbnSKDKAMhgwA4gnYmCrEAJcfG0T0000.png" alt="组合关系（Composition）" loading="lazy"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@startuml

title Composition

class Company

class DepartmentA
class DepartmentB

Company *-- DepartmentA
Company *-- DepartmentB

@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关联关系-association" tabindex="-1"><a class="header-anchor" href="#关联关系-association" aria-hidden="true">#</a> 关联关系（Association）</h2><blockquote><p>表示不同对象之间有关联，这是一种静态关系，和运行过程的状态无关，在最开始就确定。因此也可以用1对1、多对1、多对多这种关联关系来表示。比如学生和学校就是一种关联关系，一个学校可以有很多学生、但是一个学生只属于一个学校，因此这是一种多对一的关系，在运行开始之前就可以确定。</p></blockquote><p><img src="http://img.mgd2008.com/5d8ea7e50fa10f6dd64944c24067dead_SoWkIImgAStDuU8goIp9ILLmB2xEJyvCBCdCp-FYIiv9B2vM24xEoC_FWN5AIbDIyqguk22Y2ag6IWgw2afvIWWPXzIy5A290000.png" alt="关联关系（Association）" loading="lazy"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@startuml

title Association

class School
class Student

School <span class="token string">&quot;1&quot;</span> - <span class="token string">&quot;n&quot;</span> Student

@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="依赖关系-dependeny" tabindex="-1"><a class="header-anchor" href="#依赖关系-dependeny" aria-hidden="true">#</a> 依赖关系（Dependeny）</h2><blockquote><p>和关联关系不同的是，依赖关系是在运行过程中起作用的。A 类和 B 类是依赖关系的主要有三种形式：</p><ul><li>A 类是 B 类中（某个方法的）局部变量；</li><li>A 类是 B 类方法中的一个参数；</li><li>A 类向 B 类发送消息，从而影响 B 类发生变化；</li></ul></blockquote><p><img src="http://img.mgd2008.com/e17b69a28d90ed85d1784408dc018da4_LOun2W9134Nxd29ifSqSGHQnrT8-Z5ysC3iZCt515kzkL8GnHPhtVlB7PbBjFYSYKqlW0sx85-Jue9YaDJxhfD71IkmpbmMRewyz9bcqr2qzYJGRwbKYk4TzvAFbOk2XLy8N3YoDJqI_No7i_YxrvEsDNj4xlm00.png" alt="依赖关系（Dependeny）" loading="lazy"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>@startuml

title Dependency
class Vihicle <span class="token punctuation">{</span>
    move<span class="token punctuation">(</span>MoveBehavior<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

interface MoveBehavior <span class="token punctuation">{</span>
    move<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

note <span class="token string">&quot;MoveBehavior.move()&quot;</span> as N

Vihicle <span class="token punctuation">..</span><span class="token operator">&gt;</span> MoveBehavior

Vihicle <span class="token punctuation">..</span> N

@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,25),p={href:"https://design-patterns.readthedocs.io/zh_CN/latest/read_uml.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.cnblogs.com/shanyou/archive/2009/09/21/1570716.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/jianyuerensheng/article/details/51602015",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.cnblogs.com/ywqu/archive/2009/12/22/1629426.html",target:"_blank",rel:"noopener noreferrer"};function k(_,f){const a=t("ExternalLinkIcon");return l(),d("div",null,[c,n("p",null,[e("以下类图使用 "),n("a",v,[e("PlantUML在新窗口打开"),i(a)]),e(" 绘制，更多语法及使用请参考: "),n("a",u,[e("http://plantuml.com/"),i(a)]),e(" 。")]),m,n("ul",null,[n("li",null,[n("a",p,[e("图说设计模式"),i(a)])]),n("li",null,[n("a",b,[e("面向对象设计的SOLID原则"),i(a)])]),n("li",null,[n("a",h,[e("面向对象编程三大特性 ------ 封装、继承、多态"),i(a)])]),n("li",null,[n("a",g,[e("UML建模之时序图（Sequence Diagram）"),i(a)])])])])}const I=s(o,[["render",k],["__file","类图中各个类之间的关系.html.vue"]]);export{I as default};
