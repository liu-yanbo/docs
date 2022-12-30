---
title: Spring Boot 如何编写一个自己的 Spring Boot starter
author: 橘涂拾捌
date: 2022-12-02
category: 
 - SpringBoot
copyright: false
---

## 1. 前言

`Springboot` 中的自动配置确实方便，减少了我们开发上的复杂性，那么自动配置原理是什么呢？之前我也写过了一篇文章进行了分析。
[Springboot 系列（三）Spring Boot 自动配置 (opens new window)](https://www.wdbyte.com/2019/01/springboot/springboot03-auto-config/)。 由于自动配置用到了配置文件的绑定，如果你还不知道常见的配置文件的用法，可以参考这篇文章。
[Springboot 系列（二）Spring Boot 配置文件 (opens new window)](https://www.wdbyte.com/2019/01/springboot/springboot03-auto-config/)。

在这一次，通过学习 `Springboot` 自动配置模式，编写一个自己的 `starter`，用来加深对自动配置的理解。

熟悉模式，有助于提升编写的 `starter` 的规范性，编写自己的 `starter` 之前先来学习 `Springboot` 官方 `starter` 以及常见框架的整合 `starter` 的编写方式 ，可以领略到其中的奥秘。