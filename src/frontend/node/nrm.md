---
title: npm 镜像切换工具 nrm
category:
- npm
- frontend
tag:
- nrm
- npm
- frontend
---

### 为什么慢

执行 npm 各种命令的时候，默认是去 npm 官方镜像源获取需要安装的具体软件信息

以下命令查看当前使用的镜像源

```shell
npm config get registry
```

> 默认源地址在国外，从国内访问的速度肯定比较慢

### 如何修改镜像源

阿里旗下维护着一个完整的 npm 镜像源 [registry.npm.taobao.org/](https://registry.npm.taobao.org/)

#### 1. 临时修改

```shell
npm install 软件名 --registry https://registry.npm.taobao.org/
```

#### 2. 全局修改

```shell
npm config set registry https://registry.npm.taobao.org/
```

#### 3. 使用第三方软件快速修改、切换 npm 镜像源

[nrm](https://github.com/Pana/nrm) NPM registry manager
nrm 不仅可以快速切换镜像源，还可以测试自己网络访问不同源的速度

##### 安装 nrm

```shell
npm install -g nrm
```

##### 列出当前可用的所有镜像源

```shell
nrm ls

    npm -----  https://registry.npmjs.org/
    cnpm ----  http://r.cnpmjs.org/
    taobao --  https://registry.npm.taobao.org/
    nj ------  https://registry.nodejitsu.com/
    rednpm -- http://registry.mirror.cqupt.edu.cn
    skimdb -- https://skimdb.npmjs.com/registry
```

##### 使用淘宝镜像源

```shell
nrm use taobao
```

##### 测试访问速度

```shell
nrm test taobao
```

更多用法查看 [nrm](https://github.com/Pana/nrm) GitHub