---
title: 前端开发环境的安装
category:
- frontend
- nodejs
tag:
- frontend
- nodejs
- npm
---

## 前言

​	对于一个非前端开发人员，平时学习一些前端知识，肯定要准备一些环境的安装，例如环境的基础 nodejs 的安装。平时安装 nodejs 都是只能安装一个版本的，但是有时候不同项目要求不同的 nodejs 版本。这时候就需要想办法去重新安装合适的 nodejs 版本， 这种方法费时又费力，因此我们需要一种工具，来解决这个问题。并且前端概念也诸多，不是每天打交道的人，很难分清之间的关系。

#### `node`、`nvm`、`npm`、`npx` 区别

- `node`：是一个基于 `Chrome V8` 引擎的 `JS` 运行环境。
- `npm`：是 `node.js` 默认的包管理系统（用 `JavaScript` 编写的），在安装的 `node` 的时候，`npm` 也会跟着一起安装，管理 `node` 中的第三方插件。
- `npx`：`npm` 从 `v5.2.0` 开始新增了 `npx` 命令，`>=` 该版本会自动安装 `npx`，附带：[npx 有什么作用跟意义？为什么要有 npx？什么场景使用？](https://link.juejin.cn?target=https%3A%2F%2Fblog.csdn.net%2Fzz00008888%2Farticle%2Fdetails%2F126117685)。
- `nvm`：`node` 版本管理器，也就是说：一个 `nvm` 可以管理多个 `node` 版本（包含 `npm` 与 `npx`），可以方便快捷的 `安装`、`切换` 不同版本的 `node`。

#### `node`、`nvm`、`npm`、`npx` 关系

- `nvm` 管理 `node` (包含 `npm` 与 `npx`) 的版本，`npm` 可以管理 `node` 的第三方插件。

- 切换不同的 `node`  版本，`npm` 与 `npx` 的版本也会跟着变化。

  ```javascript
  nvm use v8.16.0
  Now using node v8.16.0 (npm v6.4.1)
  
  nvm use v14.15.4
  Now using node v14.15.4 (npm v6.14.10)
  
  nvm use v18.6.0
  Now using node v18.6.0 (npm v8.13.2)
  ```

## 一、node 版本管理 [nvm](https://github.com/nvm-sh/nvm) 

​	nvm是一个node的版本管理工具，可以简单操作[node版本](https://so.csdn.net/so/search?q=node%E7%89%88%E6%9C%AC&spm=1001.2101.3001.7020)的切换、安装、查看等等，与npm不同的，npm是依赖包的管理工具。

### 1. nvm 的安装

#### 1.1 下载 

 	[下载地址](https://github.com/coreybutler/nvm-windows/releases)

![](http://img.mgd2008.com/1673791244712.png)

#### 1..2 安装

##### 默认安装

> 如果使用默认安装，则不用设置环境变量

![img](https://img-blog.csdnimg.cn/33cd315d026041aa903c02c78b30828f.png)

![img](https://img-blog.csdnimg.cn/2860d17bfce641c0b48e539a780c0e03.png)

![img](https://img-blog.csdnimg.cn/0f69ee63bd8f4ba6b33dfaa44b0ab562.png)

![img](https://img-blog.csdnimg.cn/8cc7c83b44194154afac3d60652575ef.png)

![img](https://img-blog.csdnimg.cn/98d9b56fa2384770a8d465cdaa86b5aa.png)

##### 指定安装

>  如果不使用默认安装，需要设置 nvm 的环境变量

![img](https://img-blog.csdnimg.cn/5153ed11090b4f4db700b6cacb029134.png)

![img](https://img-blog.csdnimg.cn/5083a0ac725d45c695d1af3403ab2950.png)

#### 1.3 配置镜像源

![](http://img.mgd2008.com/1673791910302.png)

文档末尾添加如下两行

```shell
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

![](http://img.mgd2008.com/1673791957012.png)

### 2. nvm 的使用

在使用前，先卸载电脑上之前安装的 node ，否则版本 nvm 安装的 node 版本会不生效。

在 nvm 安装目录下打开 CMD （需要重启，命令才会在其它目录生效），执行如下命令

```shell
nvm ls                      // 看安装的所有node.js的版本
 
nvm list available          // 查显示可以安装的所有node.js的版本
```

![](http://img.mgd2008.com/1673792401853.png)

#### 2.1 安装最新稳定版 `node`

```shell
nvm install stable
```

#### 2.2 安装指定版本

可模糊安装，如：安装 `v4.4.0`，既可 `$ nvm install v4.4.0`，又可 `$ nvm install 4.4`

```shell
nvm install <version>
```

#### 2.3 删除已安装的指定版本

语法与 `install` 用法一致

```shell
nvm uninstall <version>
```

#### 2.4 切换使用指定的版本 `node`

```shell
// 临时版本 - 只在当前窗口生效指定版本
nvm use <version>

// 永久版本 - 所有窗口生效指定版本
nvm alias default <version>
```

`注意`：在任意一个命令行窗口进行切换之后，其他的窗口或其他命令行工具窗口 `需要关掉工具，重启才能生效`。（例如 `VSCode` 内或外部命令切换之后，需要重启 `VSCode`，才能正常生效，否则或处于 `临时生效状态`，也就是在 `VSCode` 中重新打开一个命令行查看版本还会是旧版本，所以必须要重启。）

这里的 `重启` 不是简单的关掉窗口重启，没有退出后台进程，而是完全退出杀死工具进程，重新启动。

#### 2.5 显示当前的版本

```shell
nvm current
```

#### 2.6 安装指定版本号 `npm` 包

在当前版本 `node` 环境下，重新全局安装指定版本号的 `npm` 包

```shell
nvm reinstall-packages <version>
```

