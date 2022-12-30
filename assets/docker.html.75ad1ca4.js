import{_ as l,V as t,W as c,Z as n,a0 as s,Y as i,a1 as a,z as o}from"./framework.8958f656.js";const p={},d=n("h3",{id:"docker帮助命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker帮助命令","aria-hidden":"true"},"#"),s(" Docker帮助命令")],-1),u=n("h4",{id:"安装docker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装docker","aria-hidden":"true"},"#"),s(" 安装Docker")],-1),r={href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"},v=a(`<h5 id="系统要求" tabindex="-1"><a class="header-anchor" href="#系统要求" aria-hidden="true">#</a> 系统要求</h5><h5 id="卸载旧版本" tabindex="-1"><a class="header-anchor" href="#卸载旧版本" aria-hidden="true">#</a> 卸载旧版本</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> remove <span class="token function">docker</span> docker-engine docker.io containerd runc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="使用存储库安装" tabindex="-1"><a class="header-anchor" href="#使用存储库安装" aria-hidden="true">#</a> 使用存储库安装</h5><p>在新主机上首次安装 Docker Engine 之前，您需要设置 Docker 存储库。之后，您可以从存储库安装和更新 Docker。</p><h5 id="设置存储库" tabindex="-1"><a class="header-anchor" href="#设置存储库" aria-hidden="true">#</a> 设置存储库</h5><ol><li><p>更新<code>apt</code>包索引并安装包以允许<code>apt</code>通过 HTTPS 使用存储库：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo apt-get update

$ sudo apt-get install \\
    ca-certificates \\
    curl \\
    gnupg \\
    lsb-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加 Docker 的官方 GPG 密钥：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo mkdir -p /etc/apt/keyrings
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用以下命令设置存储库：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ echo \\
  &quot;deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\
  $(lsb_release -cs) stable&quot; | sudo tee /etc/apt/sources.list.d/docker.list &gt; /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h5 id="安装-docker-引擎" tabindex="-1"><a class="header-anchor" href="#安装-docker-引擎" aria-hidden="true">#</a> 安装 Docker 引擎</h5>`,8),m=n("p",null,[s("更新"),n("code",null,"apt"),s("包索引：")],-1),b=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`$ sudo apt-get update
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),k=n("p",null,[s("运行时收到 GPG 错误"),n("code",null,"apt-get update"),s("？")],-1),g={href:"https://en.wikipedia.org/wiki/Umask",target:"_blank",rel:"noopener noreferrer"},q=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo chmod a+r /etc/apt/keyrings/docker.gpg
$ sudo apt-get update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=a(`<li><p>安装 Docker Engine、containerd 和 Docker Compose。</p><ul><li>最新的</li><li>具体版本</li></ul><p>要安装最新版本，请运行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> $ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr></li><li><p><code>hello-world</code>通过运行镜像验证 Docker Engine 安装是否成功 ：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ sudo docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此命令下载测试图像并在容器中运行它。当容器运行时，它会打印一条确认消息并退出。</p></li>`,2),f=n("code",null,"docker",-1),y=n("code",null,"sudo",-1),x={href:"https://docs.docker.com/engine/install/linux-postinstall/",target:"_blank",rel:"noopener noreferrer"},D=a(`<h4 id="查看docker版本信息" tabindex="-1"><a class="header-anchor" href="#查看docker版本信息" aria-hidden="true">#</a> 查看Docker版本信息</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker版本信息</span>
<span class="token function">docker</span> version 
root@liuyanbo:/home/mysql<span class="token comment"># docker -v</span>
Docker version <span class="token number">20.10</span>.21, build baeda1f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@liuyanbo:/home/mysql<span class="token comment"># docker -v</span>
Docker version <span class="token number">20.10</span>.21, build baeda1f
------------------------------------------
root@liuyanbo:/home/mysql<span class="token comment"># docker version</span>
Client: Docker Engine - Community
 Version:           <span class="token number">20.10</span>.21
 API version:       <span class="token number">1.41</span>
 Go version:        go1.18.7
 Git commit:        baeda1f
 Built:             Tue Oct <span class="token number">25</span> <span class="token number">18</span>:01:58 <span class="token number">2022</span>
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      <span class="token boolean">true</span>

Server: Docker Engine - Community
 Engine:
  Version:          <span class="token number">20.10</span>.21
  API version:      <span class="token number">1.41</span> <span class="token punctuation">(</span>minimum version <span class="token number">1.12</span><span class="token punctuation">)</span>
  Go version:       go1.18.7
  Git commit:       <span class="token number">3056208</span>
  Built:            Tue Oct <span class="token number">25</span> <span class="token number">17</span>:59:49 <span class="token number">2022</span>
  OS/Arch:          linux/amd64
  Experimental:     <span class="token boolean">false</span>
 containerd:
  Version:          <span class="token number">1.6</span>.9
  GitCommit:        1c90a442489720eec95342e1789ee8a5e1b9536f
 runc:
  Version:          <span class="token number">1.1</span>.4
  GitCommit:        v1.1.4-0-g5fd4c4d
 docker-init:
  Version:          <span class="token number">0.19</span>.0
  GitCommit:        de40ad0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看docker系统级别信息" tabindex="-1"><a class="header-anchor" href="#查看docker系统级别信息" aria-hidden="true">#</a> 查看Docker系统级别信息</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 系统级别的信息，包括镜像和容器的数量</span>
<span class="token function">docker</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@liuyanbo:/home/mysql<span class="token comment"># docker info</span>
Client:
 Context:    default
 Debug Mode: <span class="token boolean">false</span>
 Plugins:
  app: Docker App <span class="token punctuation">(</span>Docker Inc., v0.9.1-beta3<span class="token punctuation">)</span>
  buildx: Docker Buildx <span class="token punctuation">(</span>Docker Inc., v0.9.1-docker<span class="token punctuation">)</span>
  compose: Docker Compose <span class="token punctuation">(</span>Docker Inc., v2.4.1<span class="token punctuation">)</span>

Server:
 Containers: <span class="token number">2</span>
  Running: <span class="token number">2</span>
  Paused: <span class="token number">0</span>
  Stopped: <span class="token number">0</span>
 Images: <span class="token number">3</span>
 Server Version: <span class="token number">20.10</span>.21
 Storage Driver: overlay2
  Backing Filesystem: extfs
  Supports d_type: <span class="token boolean">true</span>
  Native Overlay Diff: <span class="token boolean">true</span>
  userxattr: <span class="token boolean">false</span>
 Logging Driver: json-file
 Cgroup Driver: systemd
 Cgroup Version: <span class="token number">2</span>
 Plugins:
  Volume: <span class="token builtin class-name">local</span>
  Network: bridge <span class="token function">host</span> ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file <span class="token builtin class-name">local</span> logentries splunk syslog
 Swarm: inactive
 Runtimes: io.containerd.runc.v2 io.containerd.runtime.v1.linux runc
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: 1c90a442489720eec95342e1789ee8a5e1b9536f
 runc version: v1.1.4-0-g5fd4c4d
 init version: de40ad0
 Security Options:
  apparmor
  seccomp
   Profile: default
  cgroupns
 Kernel Version: <span class="token number">5.15</span>.0-53-generic
 Operating System: Ubuntu <span class="token number">22.04</span>.1 LTS
 OSType: linux
 Architecture: x86_64
 CPUs: <span class="token number">2</span>
 Total Memory: <span class="token number">3</span>.799GiB
 Name: liuyanbo
 ID: GJKU:GG6K:AN7I:VEAC:GPP6:C5QT:DNMC:6CEG:ZFP3:3OP2:YBHT:HQDK
 Docker Root Dir: /var/lib/docker
 Debug Mode: <span class="token boolean">false</span>
 Registry: https://index.docker.io/v1/
 Labels:
 Experimental: <span class="token boolean">false</span>
 Insecure Registries:
  <span class="token number">127.0</span>.0.0/8
 Registry Mirrors:
  https://60e2y77h.mirror.aliyuncs.com/
 Live Restore Enabled: <span class="token boolean">false</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="帮助命令" tabindex="-1"><a class="header-anchor" href="#帮助命令" aria-hidden="true">#</a> 帮助命令</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 帮助命令</span>
<span class="token function">docker</span> 命令 <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),A={href:"https://docs.docker.com/engine/reference/commandline/docker/",target:"_blank",rel:"noopener noreferrer"},_=a(`<h4 id="docker启动与停止命令" tabindex="-1"><a class="header-anchor" href="#docker启动与停止命令" aria-hidden="true">#</a> Docker启动与停止命令</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动docker服务：</span>
systemctl start <span class="token function">docker</span>
<span class="token comment"># 停止docker服务：</span>
systemctl stop <span class="token function">docker</span>
<span class="token comment"># 重启docker服务：</span>
systemctl restart <span class="token function">docker</span>
<span class="token comment"># 查看docker服务状态：</span>
systemctl status <span class="token function">docker</span>
<span class="token comment"># 设置开机启动docker服务：</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像命令" tabindex="-1"><a class="header-anchor" href="#镜像命令" aria-hidden="true">#</a> 镜像命令</h3><h4 id="查看本地主机上的镜像" tabindex="-1"><a class="header-anchor" href="#查看本地主机上的镜像" aria-hidden="true">#</a> 查看本地主机上的镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有本地主机上的镜像</span>
<span class="token function">docker</span> images

root@liuyanbo:/home/mysql<span class="token comment"># docker images</span>
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
redis        latest    3358aea34e8c   <span class="token number">3</span> days ago      117MB
nginx        latest    605c77e624dd   <span class="token number">10</span> months ago   141MB
mysql        <span class="token number">5.7</span>       c20987f18b13   <span class="token number">11</span> months ago   448MB

<span class="token comment"># 解释</span>
REPOSITORY <span class="token comment"># 镜像仓库</span>
TAG		   <span class="token comment"># 镜像标签</span>
IMAGE ID   <span class="token comment"># 镜像ID</span>
CREATED    <span class="token comment"># 镜像创建的时间</span>
SIZE	   <span class="token comment"># 镜像的大小	</span>

<span class="token comment"># 可选项</span>
--all, <span class="token parameter variable">-a</span>         <span class="token comment"># 查看所有镜像</span>
--quiet, <span class="token parameter variable">-q</span>        <span class="token comment"># 查看镜像ID</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="从远程仓库查找镜像" tabindex="-1"><a class="header-anchor" href="#从远程仓库查找镜像" aria-hidden="true">#</a> 从远程仓库查找镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search 镜像名称

root@liuyanbo:/home/mysql<span class="token comment"># docker search mysql</span>
NAME                            DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
mysql                           MySQL is a widely used, open-source relation…   <span class="token number">13489</span>     <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>       
mariadb                         MariaDB Server is a high performing <span class="token function">open</span> sou…   <span class="token number">5145</span>      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>       

<span class="token comment"># 可选项</span>
<span class="token parameter variable">--filter</span><span class="token operator">=</span>STARS<span class="token operator">=</span><span class="token number">3000</span> 	<span class="token comment"># 查找STARS大于3000的</span>

root@liuyanbo:/home/mysql<span class="token comment"># docker search mysql --filter=STARS=5000</span>
NAME      DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
mysql     MySQL is a widely used, open-source relation…   <span class="token number">13489</span>     <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>       
mariadb   MariaDB Server is a high performing <span class="token function">open</span> sou…   <span class="token number">5145</span>      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="下载镜像" tabindex="-1"><a class="header-anchor" href="#下载镜像" aria-hidden="true">#</a> 下载镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull 镜像名称<span class="token punctuation">[</span>:tag<span class="token punctuation">]</span>

root@liuyanbo:/home/mysql<span class="token comment"># docker pull ubuntu:20.04</span>
<span class="token number">20.04</span>: Pulling from library/ubuntu		<span class="token comment"># 如果不指定tag,则默认就是latest</span>
7b1a6ab2e44d: Pull complete 			<span class="token comment"># 分层下载，docker images的核心，联合文件系统</span>
Digest: sha256:626ffe58f6e7566e00254b638eb7e0f3b11d4da9675088f4781a50ae288f3322		<span class="token comment"># 签名</span>
Status: Downloaded newer image <span class="token keyword">for</span> ubuntu:20.04
docker.io/library/ubuntu:20.04		<span class="token comment"># 镜像的真实地址</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除镜像" tabindex="-1"><a class="header-anchor" href="#删除镜像" aria-hidden="true">#</a> 删除镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@liuyanbo:/home/mysql<span class="token comment"># docker rmi -f IMAGE ID                        # 删除指定镜像</span>
root@liuyanbo:/home/mysql<span class="token comment"># docker rmi -f IMAGE ID1 IMAGE ID2 IMAGE ID3   # 删除多个镜像</span>
root@liuyanbo:/home/mysql<span class="token comment">#  docker rmi -f $(docker images -aq)           # 删除所有镜像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器命令" tabindex="-1"><a class="header-anchor" href="#容器命令" aria-hidden="true">#</a> 容器命令</h3><h4 id="查看容器" tabindex="-1"><a class="header-anchor" href="#查看容器" aria-hidden="true">#</a> 查看容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
			<span class="token comment"># 列出当前正在运行的容器</span>
<span class="token parameter variable">-a</span>			<span class="token comment"># 列出列出正在运行的容器包括历史容器</span>
<span class="token parameter variable">-n</span><span class="token operator">=</span>?		<span class="token comment"># 显示最近创建的容器</span>
<span class="token parameter variable">-q</span>			<span class="token comment"># 只显示当前容器的编号</span>

root@liuyanbo:~<span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE          COMMAND                  CREATED        STATUS        PORTS                                                  NAMES
9b1917bd32ba   ubuntu:20.04   <span class="token string">&quot;bash&quot;</span>                   <span class="token number">16</span> hours ago   Up <span class="token number">16</span> hours                                                          ubuntu20.04
d586d243603f   mysql:5.7      <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">19</span> hours ago   Up <span class="token number">19</span> hours   <span class="token number">33060</span>/tcp, <span class="token number">0.0</span>.0.0:3344-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, :::3344-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp   mysql5.7
319c827a40c9   redis          <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">46</span> hours ago   Up <span class="token number">24</span> hours   <span class="token number">0.0</span>.0.0:6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp, :::6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp              redis


root@liuyanbo:~<span class="token comment"># docker ps -qa</span>
9b1917bd32ba
d603ded6e961
e747f051261d
d586d243603f
319c827a40c9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明：容器来自于镜像</strong></p><h4 id="新建容器并启动" tabindex="-1"><a class="header-anchor" href="#新建容器并启动" aria-hidden="true">#</a> 新建容器并启动</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">[</span>可选参数<span class="token punctuation">]</span> image

<span class="token comment"># 参数说明</span>
<span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;设置的容器名称&quot;</span> 
<span class="token parameter variable">-d</span>      <span class="token comment"># 后台方式运行</span>
<span class="token parameter variable">-it</span> 	<span class="token comment"># 交互式方式运行，进入容器查看状态</span>
<span class="token parameter variable">-p</span> 		<span class="token comment"># 指定容器的端口  -p 书主机端口:容器端口</span>
        <span class="token comment"># -p ip:主机端口：容器端口</span>
        <span class="token comment"># -p 主机端口：容器端口（常用）</span>
        <span class="token comment"># -p 容器端口</span>
   
		<span class="token comment"># -p 随机指定端口</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="交互式容器" tabindex="-1"><a class="header-anchor" href="#交互式容器" aria-hidden="true">#</a> 交互式容器</h5><blockquote><p>以交互式方式创建并启动容器，启动完成后，直接进入当前容器。使用exit命令退出容器。需要注意的是以此种方式 启动容器，如果退出容器，则容器会进入停止状态。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#创建并启动名称为 mycentos7 的交互式容器；下面指令中的镜像名称 ubuntu:20.04 也可以使用镜像id</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>ubuntu ubuntu:20.04 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="守护式容器" tabindex="-1"><a class="header-anchor" href="#守护式容器" aria-hidden="true">#</a> 守护式容器</h5><blockquote><p>创建一个守护式容器；如果对于一个需要长期运行的容器来说，我们可以创建一个守护式容器。命令如下（容器名称不能重复）</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#创建并启动守护式容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-di</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>ubuntu ubuntu:20.04
<span class="token comment">#登录进入容器命令为：docker exec -it container_name (或者 container_id) /bin/bash（exit退出时，容器不会停止）</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> ubuntu /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="退出容器" tabindex="-1"><a class="header-anchor" href="#退出容器" aria-hidden="true">#</a> 退出容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">exit</span>            <span class="token comment"># 直接退出容器并关闭</span>
Ctrl + P + Q    <span class="token comment"># 容器不关闭退出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动和停止容器" tabindex="-1"><a class="header-anchor" href="#启动和停止容器" aria-hidden="true">#</a> 启动和停止容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start 容器id           <span class="token comment"># 启动容器</span>
<span class="token function">docker</span> restart 容器id         <span class="token comment"># 重启容器</span>
<span class="token function">docker</span> stop 容器id            <span class="token comment"># 停止当前正在运行的容器</span>
<span class="token function">docker</span> <span class="token function">kill</span> 容器id            <span class="token comment"># 强制停止当前的容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除容器" tabindex="-1"><a class="header-anchor" href="#删除容器" aria-hidden="true">#</a> 删除容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> 容器id                       <span class="token comment"># 删除指定容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>       <span class="token comment"># 删除所有容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> -q<span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span>  <span class="token comment"># 删除所有的容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置容器开机自启动" tabindex="-1"><a class="header-anchor" href="#设置容器开机自启动" aria-hidden="true">#</a> 设置容器开机自启动</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-qa</span> 
<span class="token function">docker</span>  update <span class="token parameter variable">--restart</span><span class="token operator">=</span>always 容器ID/容器名

<span class="token function">docker</span>  update <span class="token parameter variable">--restart</span><span class="token operator">=</span>always 56f0b18af626

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查看日志" tabindex="-1"><a class="header-anchor" href="#查看日志" aria-hidden="true">#</a> 查看日志</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs <span class="token parameter variable">-tf</span> <span class="token parameter variable">--tail</span> number 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看容器中的进程信息" tabindex="-1"><a class="header-anchor" href="#查看容器中的进程信息" aria-hidden="true">#</a> 查看容器中的进程信息</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">top</span> 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看镜像的元数据" tabindex="-1"><a class="header-anchor" href="#查看镜像的元数据" aria-hidden="true">#</a> 查看镜像的元数据</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> inspect 容器ID

root@liuyanbo:~<span class="token comment"># docker inspect d586d243603f</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;d586d243603fdb446dfa5f6dfdd3ed785d85b87ab6e281aafe35872f37a89d59&quot;</span>,
        <span class="token string">&quot;Created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-11-19T10:18:42.02744616Z&quot;</span>,
        <span class="token string">&quot;Path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;docker-entrypoint.sh&quot;</span>,
        <span class="token string">&quot;Args&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;mysqld&quot;</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;State&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Status&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;running&quot;</span>,
            <span class="token string">&quot;Running&quot;</span><span class="token builtin class-name">:</span> true,
            <span class="token string">&quot;Paused&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Restarting&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;OOMKilled&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Dead&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Pid&quot;</span><span class="token builtin class-name">:</span> <span class="token number">17398</span>,
            <span class="token string">&quot;ExitCode&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;Error&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;StartedAt&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2022-11-19T10:18:42.345175206Z&quot;</span>,
            <span class="token string">&quot;FinishedAt&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0001-01-01T00:00:00Z&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Image&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sha256:c20987f18b130f9d144c9828df630417e2a9523148930dc3963e9d0dab302a76&quot;</span>,
        <span class="token string">&quot;ResolvConfPath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/d586d243603fdb446dfa5f6dfdd3ed785d85b87ab6e281aafe35872f37a89d59/resolv.conf&quot;</span>,
        <span class="token string">&quot;HostnamePath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/d586d243603fdb446dfa5f6dfdd3ed785d85b87ab6e281aafe35872f37a89d59/hostname&quot;</span>,
        <span class="token string">&quot;HostsPath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/d586d243603fdb446dfa5f6dfdd3ed785d85b87ab6e281aafe35872f37a89d59/hosts&quot;</span>,
        <span class="token string">&quot;LogPath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/d586d243603fdb446dfa5f6dfdd3ed785d85b87ab6e281aafe35872f37a89d59/d586d243603fdb446dfa5f6dfdd3ed785d85b87ab6e281aafe35872f37a89d59-json.log&quot;</span>,
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/mysql5.7&quot;</span>,
        <span class="token string">&quot;RestartCount&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
        <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;overlay2&quot;</span>,
        <span class="token string">&quot;Platform&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;linux&quot;</span>,
        <span class="token string">&quot;MountLabel&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;ProcessLabel&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;AppArmorProfile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;docker-default&quot;</span>,
        <span class="token string">&quot;ExecIDs&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;HostConfig&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Binds&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;/home/mysql/conf:/etc/mysql/conf.d&quot;</span>,
                <span class="token string">&quot;/home/mysql/data:/var/lib/mysql&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;ContainerIDFile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;LogConfig&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;json-file&quot;</span>,
                <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;NetworkMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;default&quot;</span>,
            <span class="token string">&quot;PortBindings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;3306/tcp&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token string">&quot;HostIp&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                        <span class="token string">&quot;HostPort&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;3344&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;RestartPolicy&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;no&quot;</span>,
                <span class="token string">&quot;MaximumRetryCount&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;AutoRemove&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;VolumeDriver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;VolumesFrom&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CapAdd&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CapDrop&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CgroupnsMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;private&quot;</span>,
            <span class="token string">&quot;Dns&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;DnsOptions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;DnsSearch&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;ExtraHosts&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;GroupAdd&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;IpcMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;private&quot;</span>,
            <span class="token string">&quot;Cgroup&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;OomScoreAdj&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;PidMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Privileged&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;PublishAllPorts&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;ReadonlyRootfs&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;SecurityOpt&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;UTSMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;UsernsMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;ShmSize&quot;</span><span class="token builtin class-name">:</span> <span class="token number">67108864</span>,
            <span class="token string">&quot;Runtime&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;runc&quot;</span>,
            <span class="token string">&quot;ConsoleSize&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token number">0</span>,
                <span class="token number">0</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Isolation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;CpuShares&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;Memory&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;NanoCpus&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CgroupParent&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;BlkioWeight&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;BlkioWeightDevice&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;BlkioDeviceReadBps&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;BlkioDeviceWriteBps&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;BlkioDeviceReadIOps&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;BlkioDeviceWriteIOps&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CpuPeriod&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuQuota&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuRealtimePeriod&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuRealtimeRuntime&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpusetCpus&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;CpusetMems&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Devices&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;DeviceCgroupRules&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;DeviceRequests&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;KernelMemory&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;KernelMemoryTCP&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MemoryReservation&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MemorySwap&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MemorySwappiness&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;OomKillDisable&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;PidsLimit&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Ulimits&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CpuCount&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuPercent&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;IOMaximumIOps&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;IOMaximumBandwidth&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MaskedPaths&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;/proc/asound&quot;</span>,
                <span class="token string">&quot;/proc/acpi&quot;</span>,
                <span class="token string">&quot;/proc/kcore&quot;</span>,
                <span class="token string">&quot;/proc/keys&quot;</span>,
                <span class="token string">&quot;/proc/latency_stats&quot;</span>,
                <span class="token string">&quot;/proc/timer_list&quot;</span>,
                <span class="token string">&quot;/proc/timer_stats&quot;</span>,
                <span class="token string">&quot;/proc/sched_debug&quot;</span>,
                <span class="token string">&quot;/proc/scsi&quot;</span>,
                <span class="token string">&quot;/sys/firmware&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;ReadonlyPaths&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;/proc/bus&quot;</span>,
                <span class="token string">&quot;/proc/fs&quot;</span>,
                <span class="token string">&quot;/proc/irq&quot;</span>,
                <span class="token string">&quot;/proc/sys&quot;</span>,
                <span class="token string">&quot;/proc/sysrq-trigger&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;GraphDriver&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Data&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;LowerDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/4a071dd28aebec27e67dd5dff29b2dc03c14418f24b5d0a163e23a8518e8763b-init/diff:/var/lib/docker/overlay2/cbab91d22142dd13e845717ff19cd68ad0c199956e14a6751dfb05a202a1b01c/diff:/var/lib/docker/overlay2/8c63a5a61ae4a62ea33f9cbc25ba4e95714360b6055bc4c7330e67e74491714d/diff:/var/lib/docker/overlay2/d74ced919c9c40d96c02db59f0a268ef8fefa445623af79bd65f6b512e4e0f9c/diff:/var/lib/docker/overlay2/9f1615d18e7850ebea6d859e86d25853d0fee09e1807f308bfb2d88392087730/diff:/var/lib/docker/overlay2/1ff6db9c40f0fde0e25869e949dbef00cdb1a7f022baf3cdf2567c2aaa2715a3/diff:/var/lib/docker/overlay2/74f40eab985bca71437ab6e7fda39f77fc8cfa126fc781c53f74a555cb5383b4/diff:/var/lib/docker/overlay2/3030cee4db8bcfd3a5c99e6e3ae58ae3c165b14946d7bfde425f39e51aeadf3d/diff:/var/lib/docker/overlay2/7ad647497c2a3642d0be442101ca08d68eee664788a10c0b71fc10d67197e8e1/diff:/var/lib/docker/overlay2/c4f81185076887c8fbf597f3581355025f54106223888fead1285fbc23adc345/diff:/var/lib/docker/overlay2/80893daeadf2d5eac58fb99e27ffd538f7afcadfb5961de40b5dbc2cee3f8ece/diff:/var/lib/docker/overlay2/799bcca41703cb21add92fba82eafae0945f91b30d7fb6cecd54ef558f9da508/diff&quot;</span>,
                <span class="token string">&quot;MergedDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/4a071dd28aebec27e67dd5dff29b2dc03c14418f24b5d0a163e23a8518e8763b/merged&quot;</span>,
                <span class="token string">&quot;UpperDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/4a071dd28aebec27e67dd5dff29b2dc03c14418f24b5d0a163e23a8518e8763b/diff&quot;</span>,
                <span class="token string">&quot;WorkDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/4a071dd28aebec27e67dd5dff29b2dc03c14418f24b5d0a163e23a8518e8763b/work&quot;</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;overlay2&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Mounts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bind&quot;</span>,
                <span class="token string">&quot;Source&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/home/mysql/conf&quot;</span>,
                <span class="token string">&quot;Destination&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/etc/mysql/conf.d&quot;</span>,
                <span class="token string">&quot;Mode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                <span class="token string">&quot;RW&quot;</span><span class="token builtin class-name">:</span> true,
                <span class="token string">&quot;Propagation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rprivate&quot;</span>
            <span class="token punctuation">}</span>,
            <span class="token punctuation">{</span>
                <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bind&quot;</span>,
                <span class="token string">&quot;Source&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/home/mysql/data&quot;</span>,
                <span class="token string">&quot;Destination&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/mysql&quot;</span>,
                <span class="token string">&quot;Mode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                <span class="token string">&quot;RW&quot;</span><span class="token builtin class-name">:</span> true,
                <span class="token string">&quot;Propagation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rprivate&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Hostname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;d586d243603f&quot;</span>,
            <span class="token string">&quot;Domainname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;User&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;AttachStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStdout&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStderr&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;ExposedPorts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;3306/tcp&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
                <span class="token string">&quot;33060/tcp&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;Tty&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;OpenStdin&quot;</span><span class="token builtin class-name">:</span> true,
            <span class="token string">&quot;StdinOnce&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Env&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;MYSQL_ROOT_PASSWORD=123456&quot;</span>,
                <span class="token string">&quot;PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin&quot;</span>,
                <span class="token string">&quot;GOSU_VERSION=1.12&quot;</span>,
                <span class="token string">&quot;MYSQL_MAJOR=5.7&quot;</span>,
                <span class="token string">&quot;MYSQL_VERSION=5.7.36-1debian10&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Cmd&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;mysqld&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Image&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;mysql:5.7&quot;</span>,
            <span class="token string">&quot;Volumes&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;/var/lib/mysql&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;WorkingDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Entrypoint&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;docker-entrypoint.sh&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;OnBuild&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;NetworkSettings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Bridge&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;SandboxID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;941d14e9248e994cd4dc61cff5cea512a12205f2f206742a1ca28fad95de00c0&quot;</span>,
            <span class="token string">&quot;HairpinMode&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;LinkLocalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;LinkLocalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;Ports&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;3306/tcp&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token string">&quot;HostIp&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0.0.0.0&quot;</span>,
                        <span class="token string">&quot;HostPort&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;3344&quot;</span>
                    <span class="token punctuation">}</span>,
                    <span class="token punctuation">{</span>
                        <span class="token string">&quot;HostIp&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;::&quot;</span>,
                        <span class="token string">&quot;HostPort&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;3344&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>,
                <span class="token string">&quot;33060/tcp&quot;</span><span class="token builtin class-name">:</span> null
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;SandboxKey&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/run/docker/netns/941d14e9248e&quot;</span>,
            <span class="token string">&quot;SecondaryIPAddresses&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;SecondaryIPv6Addresses&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;d54f97786d2c451dbca46f3040a315e1c373d492d607a753f5b5d85a7d1ea834&quot;</span>,
            <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.1&quot;</span>,
            <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;GlobalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.2&quot;</span>,
            <span class="token string">&quot;IPPrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
            <span class="token string">&quot;IPv6Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:02&quot;</span>,
            <span class="token string">&quot;Networks&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;bridge&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;IPAMConfig&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Aliases&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;NetworkID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;15089f30dc5e0896bc887996921774b1819c2225348d04dab6edf746d166510d&quot;</span>,
                    <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;d54f97786d2c451dbca46f3040a315e1c373d492d607a753f5b5d85a7d1ea834&quot;</span>,
                    <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.1&quot;</span>,
                    <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.2&quot;</span>,
                    <span class="token string">&quot;IPPrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
                    <span class="token string">&quot;IPv6Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:02&quot;</span>,
                    <span class="token string">&quot;DriverOpts&quot;</span><span class="token builtin class-name">:</span> null
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="进入当前正在运行的容器" tabindex="-1"><a class="header-anchor" href="#进入当前正在运行的容器" aria-hidden="true">#</a> 进入当前正在运行的容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 我们通常进入容器使用后台方式运行的，需要修改一些配置</span>

<span class="token comment"># 命令</span>

<span class="token comment"># 方式一</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID /bin/bash

<span class="token comment"># 方式二</span>
<span class="token function">docker</span> attach 容器ID


<span class="token comment"># docker exec       # 进入容器后开启一个新的终端，可以在里面操作</span>
<span class="token comment"># docker attach     # 进入容器正在执行的终端，不会启动新的进程</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="从容器中拷贝文件到主机" tabindex="-1"><a class="header-anchor" href="#从容器中拷贝文件到主机" aria-hidden="true">#</a> 从容器中拷贝文件到主机</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将文件从容器拷贝到宿主机</span>
<span class="token function">docker</span> <span class="token function">cp</span> 容器ID:容器内路径 目的地主机路径

<span class="token comment"># 将主机的文件拷贝到容器</span>
<span class="token function">docker</span> <span class="token function">cp</span> 目的地主机路径 容器ID:容器内路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="将容器打包成镜像" tabindex="-1"><a class="header-anchor" href="#将容器打包成镜像" aria-hidden="true">#</a> 将容器打包成镜像</h4><blockquote><p>Docker镜像都只是只读的，当容器启动时，一个新的可写层被加载到镜像的顶部</p><p>这一层就是我们通常说的容器层，容器之下的都叫做镜像层</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> commit 提交容器成为一个新的版本
<span class="token comment"># 命令和git原理类似</span>
<span class="token function">docker</span> commit <span class="token parameter variable">-m</span><span class="token operator">=</span><span class="token string">&quot;提交的描述信息&quot;</span> <span class="token parameter variable">-a</span><span class="token operator">=</span><span class="token string">&quot;作者&quot;</span> 容器ID 目标镜像名:<span class="token punctuation">[</span>TAG<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器数据卷" tabindex="-1"><a class="header-anchor" href="#容器数据卷" aria-hidden="true">#</a> 容器数据卷</h3><blockquote><p>容器之间可以有一个数据共享技术！ Docker容器中产生的数据，同步到本地！</p><p>这就是卷技术，目录的挂载，将我们容器内的的目录挂载到Linux目录上面！</p><p>*<strong>总结</strong> 容器的持久化和同步操作！容器间数据也是可以共享的！</p></blockquote><h4 id="目录挂载" tabindex="-1"><a class="header-anchor" href="#目录挂载" aria-hidden="true">#</a> 目录挂载</h4><blockquote><p>方式一：直接使用命令来挂载 -v</p></blockquote><h5 id="指定目录挂载" tabindex="-1"><a class="header-anchor" href="#指定目录挂载" aria-hidden="true">#</a> 指定目录挂载</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span> 主机目录:容器目录

<span class="token comment"># 验证方式</span>
<span class="token comment"># 一、直接同步文件</span>
<span class="token comment"># 二、使用docker inspect 容器ID </span>
<span class="token string">&quot;Mounts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bind&quot;</span>,
                <span class="token string">&quot;Source&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/home/mysql/conf&quot;</span>,
                <span class="token string">&quot;Destination&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/etc/mysql/conf.d&quot;</span>,
                <span class="token string">&quot;Mode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                <span class="token string">&quot;RW&quot;</span><span class="token builtin class-name">:</span> true,
                <span class="token string">&quot;Propagation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rprivate&quot;</span>
            <span class="token punctuation">}</span>,
            <span class="token punctuation">{</span>
                <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bind&quot;</span>,
                <span class="token string">&quot;Source&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/home/mysql/data&quot;</span>,    <span class="token comment"># 主机目录</span>
                <span class="token string">&quot;Destination&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/mysql&quot;</span>, <span class="token comment"># 容器目录</span>
                <span class="token string">&quot;Mode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                <span class="token string">&quot;RW&quot;</span><span class="token builtin class-name">:</span> true,
                <span class="token string">&quot;Propagation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rprivate&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>,      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark><strong>注意</strong></mark> 容器停止也不影响同步</p><h5 id="匿名挂载" tabindex="-1"><a class="header-anchor" href="#匿名挂载" aria-hidden="true">#</a> 匿名挂载</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 匿名挂载</span>
<span class="token parameter variable">-v</span> 容器内路径
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">--name</span> niming_nginx <span class="token parameter variable">-v</span> /etc/nginx nginx     <span class="token comment"># -P 随机指定端口 (P大写)</span>
 
<span class="token comment"># 查看所有volume的情况</span>
<span class="token punctuation">[</span>root@liuyanbo ~<span class="token punctuation">]</span><span class="token comment"># docker volume ls</span>
DRIVER              VOLUME NAME
<span class="token builtin class-name">local</span>               561b81a03506f31d45ada3f9fb7bd8d7c9b5e0f826c877221a17e45d4c80e096
<span class="token builtin class-name">local</span>               36083fb6ca083005094cbd49572a0bffeec6daadfbc5ce772909bb00be760882
 
<span class="token comment"># 这里发现，这种情况就是匿名挂载，我们在-v 后面只写了容器内的路径，没有写容器外的路径！</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="具名挂载" tabindex="-1"><a class="header-anchor" href="#具名挂载" aria-hidden="true">#</a> 具名挂载</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 具名挂载</span>
<span class="token punctuation">[</span>root@liuyanbo ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -P --name juming_nginx -v juming-nginx:/etc/nginx nginx</span>
26da1ec7d4994c76e80134d24d82403a254a4e1d84ec65d5f286000105c3da17
<span class="token comment"># 查看所有的卷信息</span>
<span class="token function">docker</span> volume <span class="token function">ls</span> 
<span class="token punctuation">[</span>root@liuyanbo ~<span class="token punctuation">]</span><span class="token comment"># docker volume ls</span>
DRIVER              VOLUME NAME
<span class="token builtin class-name">local</span>               561b81a03506f31d45ada3f9fb7bd8d7c9b5e0f826c877221a17e45d4c80e096
<span class="token builtin class-name">local</span>               36083fb6ca083005094cbd49572a0bffeec6daadfbc5ce772909bb00be760882
<span class="token builtin class-name">local</span>               juming-nginx
 
<span class="token comment"># 通过-v 卷名：容器内的路径</span>
<span class="token comment"># 查看一下这个卷</span>
<span class="token function">docker</span> volume inspect 卷名

<span class="token punctuation">[</span>root@liuyanbo ~<span class="token punctuation">]</span><span class="token comment"># docker volume inspect juming-nginx</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
      <span class="token string">&quot;CreatedAt&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2020-08-12T18:15:21+08:00&quot;</span>,
      <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;local&quot;</span>,
      <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> null,
      <span class="token string">&quot;Mountpoint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/volumes/juming-nginx/_data&quot;</span>, <span class="token comment"># 宿主机同步目录 </span>
      <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;juming-nginx&quot;</span>,
      <span class="token string">&quot;Options&quot;</span><span class="token builtin class-name">:</span> null,
      <span class="token string">&quot;Scope&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;local&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><mark><strong>所有docker容器内的卷，没有指定目录的情况下都是在<code>/var/lib/docker/volumes/xxxxx/_data</code></strong></mark></p></blockquote><blockquote><p><mark><strong>我们通过具名挂载可以方便的找到我们的一个卷，大多数情况下使用的是<code>具名挂载</code></strong></mark></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 如何确定是具名挂载还是匿名挂载，还是指定路径挂载！</span>
<span class="token parameter variable">-v</span>  容器内路径                   <span class="token comment"># 匿名挂载</span>
<span class="token parameter variable">-v</span>  卷名:容器内路径               <span class="token comment"># 具名挂载</span>
<span class="token parameter variable">-v</span> /主机路径:容器内路径            <span class="token comment"># 指定路径挂载</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 通过 -v 容器内容路径 ro rw 改变读写权限</span>
ro  <span class="token builtin class-name">readonly</span>    <span class="token comment"># 只读</span>
rw  readwrite   <span class="token comment"># 可读可写</span>
 
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">--name</span> juming-nginx <span class="token parameter variable">-v</span> juming-nginx:/etc/nginx:ro nginx
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">--name</span> juming-nginx <span class="token parameter variable">-v</span> juming-nginx:/etc/nginx:rw nginx
 
<span class="token comment"># ro 只要看到ro就说明这个路径只能通过宿主机来操作，容器内容无法操作</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>方式二：使用Dockerfile</p></blockquote><h5 id="dockerfile初体验" tabindex="-1"><a class="header-anchor" href="#dockerfile初体验" aria-hidden="true">#</a> Dockerfile初体验</h5><blockquote><p>Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。</p></blockquote><blockquote><p>通过这个脚本可以生成镜像，镜像是一层一层的，脚本一个个的命令，每个命令都是一层！</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建一个Dockerfile文件， 名字可以随机</span>
<span class="token comment"># 文件的内容 指定（大写） 参数</span>
FROM ubuntu
 
VOLUME <span class="token punctuation">[</span><span class="token string">&quot;volume01&quot;</span>, <span class="token string">&quot;volume02&quot;</span><span class="token punctuation">]</span>
 
CMD <span class="token builtin class-name">echo</span> <span class="token string">&quot;----end----&quot;</span>

CMD /bin/bash
 
<span class="token comment"># 这里的每一个命令都是镜像的一层！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@liuyanbo:~<span class="token comment"># docker build -f Dockerfile -t liuyanbo/ubuntu:1.0 .</span>
Sending build context to Docker daemon   <span class="token number">12</span>.8kB
Error response from daemon: no build stage <span class="token keyword">in</span> current context
root@liuyanbo:/tmp<span class="token comment"># vim Dockerfile </span>
root@liuyanbo:/tmp<span class="token comment"># docker build -f Dockerfile -t liuyanbo/ubuntu:1.0 .</span>
Sending build context to Docker daemon   <span class="token number">12</span>.8kB
Step <span class="token number">1</span>/4 <span class="token builtin class-name">:</span> FROM ubuntu
latest: Pulling from library/ubuntu
Digest: sha256:626ffe58f6e7566e00254b638eb7e0f3b11d4da9675088f4781a50ae288f3322
Status: Downloaded newer image <span class="token keyword">for</span> ubuntu:latest
 ---<span class="token operator">&gt;</span> ba6acccedd29
 <span class="token comment"># 匿名挂载</span>
Step <span class="token number">2</span>/4 <span class="token builtin class-name">:</span> VOLUME <span class="token punctuation">[</span><span class="token string">&quot;volume01&quot;</span>, <span class="token string">&quot;volume02&quot;</span><span class="token punctuation">]</span>
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> 6c8d4447304b
Removing intermediate container 6c8d4447304b
 ---<span class="token operator">&gt;</span> d31fe796d8ee
Step <span class="token number">3</span>/4 <span class="token builtin class-name">:</span> CMD <span class="token builtin class-name">echo</span> <span class="token string">&quot;----end----&quot;</span>
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> 9b3ec117ec4b
Removing intermediate container 9b3ec117ec4b
 ---<span class="token operator">&gt;</span> 73a6aab2a922
Step <span class="token number">4</span>/4 <span class="token builtin class-name">:</span> CMD /bin/bash
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> 0a9afd866668
Removing intermediate container 0a9afd866668
 ---<span class="token operator">&gt;</span> ae9afffa4bf1
Successfully built ae9afffa4bf1
Successfully tagged liuyanbo/ubuntu:1.0


root@liuyanbo:~<span class="token comment"># docker images</span>
REPOSITORY        TAG       IMAGE ID       CREATED         SIZE
liuyanbo/ubuntu   <span class="token number">1.0</span>       ae9afffa4bf1   <span class="token number">2</span> minutes ago   <span class="token number">72</span>.8MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看容器的元数据信息</span>
<span class="token function">docker</span> inspect 容器ID

<span class="token string">&quot;Mounts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;volume&quot;</span>,
                <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;916dd588f0c3046fe71cd4cd23355efa751bf1bcab6c9b12debe0d7b36b307d6&quot;</span>,
                <span class="token string">&quot;Source&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/volumes/916dd588f0c3046fe71cd4cd23355efa751bf1bcab6c9b12debe0d7b36b307d6/_data&quot;</span>,
                <span class="token string">&quot;Destination&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;volume01&quot;</span>,
                <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;local&quot;</span>,
                <span class="token string">&quot;Mode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                <span class="token string">&quot;RW&quot;</span><span class="token builtin class-name">:</span> true,
                <span class="token string">&quot;Propagation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>,
            <span class="token punctuation">{</span>
                <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;volume&quot;</span>,
                <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;6ba2664035f7e8db0019d3f695c9890b57b9b97f56f42a8bdea3513cac42fde3&quot;</span>,
                <span class="token string">&quot;Source&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/volumes/6ba2664035f7e8db0019d3f695c9890b57b9b97f56f42a8bdea3513cac42fde3/_data&quot;</span>,
                <span class="token string">&quot;Destination&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;volume02&quot;</span>,
                <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;local&quot;</span>,
                <span class="token string">&quot;Mode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                <span class="token string">&quot;RW&quot;</span><span class="token builtin class-name">:</span> true,
                <span class="token string">&quot;Propagation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>,

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这种方式我们未来使用的十分多， 因为我们通常会构建自己的镜像！</strong></p><p><strong>假设构建镜像时候没有挂载卷，要手动镜像挂载 -v 卷名:容器内路径</strong></p><h5 id="数据卷容器" tabindex="-1"><a class="header-anchor" href="#数据卷容器" aria-hidden="true">#</a> 数据卷容器</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> docker01 --volumes-from docker01<span class="token punctuation">(</span>数据卷容器<span class="token punctuation">)</span> 镜像<span class="token punctuation">[</span>TAG<span class="token punctuation">]</span>


<span class="token punctuation">[</span>root@liuyanbo ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -p 3344:3306 -v /etc/mysql/conf.d -v /var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql:5.7</span>
 
<span class="token punctuation">[</span>root@liuyanbo ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -p 3344:3306 -v /etc/mysql/conf.d -v /var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql02 --volumes-from mysql01 mysql:5.7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark><strong>结论</strong></mark></p><p><strong>容器之间配置信息的传递， 数据卷容器的声明周期一直持续到没有容器使用为止。但是一旦你持久化到了本地，这个时候，本地的数据是不会删除的！</strong></p><h3 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h3><blockquote><p>Dockerfile是用来构建docker镜像的文件！</p></blockquote><h4 id="参数命令构建步骤" tabindex="-1"><a class="header-anchor" href="#参数命令构建步骤" aria-hidden="true">#</a> 参数命令构建步骤</h4><ol><li>编写一个Dockerfie文件</li><li>docker build 构建成为一个镜像</li><li>docker run 运行镜像</li><li>docker push 发布镜像（Docker Hub、阿里云镜像）</li></ol><p><strong>看一下ubuntu官方是怎么制作镜像的</strong></p><p><img src="http://img.mgd2008.com/static/img/1669004768271.png" alt="" loading="lazy"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM scratch
ADD ubuntu-focal-oci-amd64-root.tar.gz /
CMD <span class="token punctuation">[</span><span class="token string">&quot;bash&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="dockefile的构建过程" tabindex="-1"><a class="header-anchor" href="#dockefile的构建过程" aria-hidden="true">#</a> Dockefile的构建过程</h4><p><strong>基础知识：</strong></p><ol><li>每个保留关键字（指令）都是必须大写字母</li><li>执行从上到下顺序执行</li><li>#表示注释</li><li>每个指令都会创建提交一个新的镜像层，并提交！</li></ol><p><img src="http://img.mgd2008.com/static/img/126043b38ed9817b306c87c58e8b8a43_watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ZhbmppYW5oYWk=,size_16,color_FFFFFF,t_70#pic_center.png" alt="" loading="lazy"></p><p><strong>Docker 三剑客</strong></p><ol><li><p>DockerFile： 构建文件， 定义了一切的步骤，源代码</p></li><li><p>DockerImages： 通过DockerFile构建生成的镜像， 最终发布和运行的产品！</p></li><li><p>Docker容器：容器就是镜像运行起来提供服务器</p></li></ol><h4 id="dockerfile指令说明" tabindex="-1"><a class="header-anchor" href="#dockerfile指令说明" aria-hidden="true">#</a> Dockerfile指令说明</h4><p><img src="http://img.mgd2008.com/static/img/20221121123957.png" alt="" loading="lazy"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM            <span class="token comment"># 基础镜像，一切从这里开始构建</span>
MAINTAINER      <span class="token comment"># 镜像是谁写的， 姓名+邮箱</span>
RUN             <span class="token comment"># 镜像构建的时候需要运行的命令</span>
ADD             <span class="token comment"># 步骤， tomcat镜像， 这个tomcat压缩包！添加内容</span>
WORKDIR         <span class="token comment"># 镜像的工作目录</span>
VOLUME          <span class="token comment"># 挂载的目录</span>
EXPOSE          <span class="token comment"># 保留端口配置</span>
CMD             <span class="token comment"># 指定这个容器启动的时候要运行的命令，只有最后一个会生效可被替代</span>
ENTRYPOINT      <span class="token comment"># 指定这个容器启动的时候要运行的命令， 可以追加命令</span>
ONBUILD         <span class="token comment"># 当构建一个被继承Dockerfile 这个时候就会运行 ONBUILD 的指令，触发指令</span>
COPY            <span class="token comment"># 类似ADD, 将我们文件拷贝到镜像中</span>
ENV             <span class="token comment"># 构建的时候设置环境变量！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义一个tomcat容器" tabindex="-1"><a class="header-anchor" href="#自定义一个tomcat容器" aria-hidden="true">#</a> 自定义一个tomcat容器</h4><blockquote><p>Dockerfile文件如下</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@liuyanbo:/usr/local/diy_tomcat<span class="token comment"># vim Dockerfile </span>
FROM ubuntu
<span class="token comment"># 作者</span>
MAINTAINER liuyanbo<span class="token operator">&lt;</span><span class="token number">1538527834</span>@qq.com<span class="token operator">&gt;</span>

COPY readme.txt  /usr/local

ADD apache-tomcat-9.0.69.tar.gz /usr/local
ADD jdk-8u261-linux-x64.tar.gz /usr/local

ENV MYPATH /usr/local

WORKDIR <span class="token variable">$MYPATH</span>

ENV JAVA_HOME <span class="token variable">$MYPATH</span>/jdk1.8.0_261
ENV CLASSPATH <span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar
ENV CATALINA_HOME <span class="token variable">$MYPATH</span>/apache-tomcat-9.0.69
ENV CATALINA_BASH <span class="token variable">$MYPATH</span>/apache-tomcat-9.0.69
ENV <span class="token environment constant">PATH</span> <span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$CATALINA_HOME</span>/lib:<span class="token variable">$CATALINA_HOME</span>/bin

EXPOSE <span class="token number">8080</span>

CMD <span class="token variable">$CATALINA_HOME</span>/bin/startup.sh <span class="token operator">&amp;&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> <span class="token variable">$CATALINA_HOME</span>/logs/catalina.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="构建镜像" tabindex="-1"><a class="header-anchor" href="#构建镜像" aria-hidden="true">#</a> 构建镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@liuyanbo:/usr/local/diy_tomcat<span class="token comment"># docker build  -t diytomcat .</span>
Sending build context to Docker daemon  <span class="token number">525</span>.2MB
Step <span class="token number">1</span>/14 <span class="token builtin class-name">:</span> FROM ubuntu
 ---<span class="token operator">&gt;</span> ba6acccedd29
Step <span class="token number">2</span>/14 <span class="token builtin class-name">:</span> MAINTAINER liuyanbo<span class="token operator">&lt;</span><span class="token number">1538527834</span>@qq.com<span class="token operator">&gt;</span>
 ---<span class="token operator">&gt;</span> Using cache
 ---<span class="token operator">&gt;</span> cd886ac434fe
Step <span class="token number">3</span>/14 <span class="token builtin class-name">:</span> COPY readme.txt  /usr/local/diy_tomcat/
 ---<span class="token operator">&gt;</span> 950df6d8ab28
Step <span class="token number">4</span>/14 <span class="token builtin class-name">:</span> ADD apache-tomcat-9.0.69.zip /usr/local/
 ---<span class="token operator">&gt;</span> 2441861d2f1b
Step <span class="token number">5</span>/14 <span class="token builtin class-name">:</span> ADD jdk-8u261-linux-x64.tar.gz /usr/local
 ---<span class="token operator">&gt;</span> 5d2a5e94b1f0
Step <span class="token number">6</span>/14 <span class="token builtin class-name">:</span> ENV MYPATH /usr/local
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> ad08d6eb4cd8
Removing intermediate container ad08d6eb4cd8
 ---<span class="token operator">&gt;</span> 7d7e6f75f190
Step <span class="token number">7</span>/14 <span class="token builtin class-name">:</span> WORKDIR <span class="token variable">$MYPATH</span>
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> 1ca5f08a5b79
Removing intermediate container 1ca5f08a5b79
 ---<span class="token operator">&gt;</span> 86b57b03c2c2
Step <span class="token number">8</span>/14 <span class="token builtin class-name">:</span> ENV JAVA_HOME /usr/local/jdk1.8.0_261
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> 0e6a8b291c2a
Removing intermediate container 0e6a8b291c2a
 ---<span class="token operator">&gt;</span> 51a9bb5c9433
Step <span class="token number">9</span>/14 <span class="token builtin class-name">:</span> ENV CLASSPATH <span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> bbe8eee2f65c
Removing intermediate container bbe8eee2f65c
 ---<span class="token operator">&gt;</span> b8c1adac29d7
Step <span class="token number">10</span>/14 <span class="token builtin class-name">:</span> ENV CATALINA_HOME /usr/local/apache-tomcat-9.0.69
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> 4b016b1edf7f
Removing intermediate container 4b016b1edf7f
 ---<span class="token operator">&gt;</span> 6fb35f768a1a
Step <span class="token number">11</span>/14 <span class="token builtin class-name">:</span> ENV CATALINA_BASH /usr/local/apache-tomcat-9.0.69
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> 368232992bea
Removing intermediate container 368232992bea
 ---<span class="token operator">&gt;</span> 81e774fc0e18
Step <span class="token number">12</span>/14 <span class="token builtin class-name">:</span> ENV <span class="token environment constant">PATH</span> <span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$CATALINA_HOME</span>/lib:<span class="token variable">$CATALINA_HOME</span>/bin
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> 3131aa66fbb9
Removing intermediate container 3131aa66fbb9
 ---<span class="token operator">&gt;</span> 54b596118d60
Step <span class="token number">13</span>/14 <span class="token builtin class-name">:</span> EXPOSE <span class="token number">8080</span>
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> 3d6bac83af85
Removing intermediate container 3d6bac83af85
 ---<span class="token operator">&gt;</span> 9f006a8951fc
Step <span class="token number">14</span>/14 <span class="token builtin class-name">:</span> CMD /usr/local/apache-tomcat-9.0.69/bin/startup.sh <span class="token operator">&amp;&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-f</span> /usr/local/apache-tomcat-9.0.69/logs/catalina.out
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> 5fb121ce8953
Removing intermediate container 5fb121ce8953
 ---<span class="token operator">&gt;</span> 8e3550e12335
Successfully built 8e3550e12335
Successfully tagged diytomcat:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动镜像" tabindex="-1"><a class="header-anchor" href="#启动镜像" aria-hidden="true">#</a> 启动镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-id</span> <span class="token parameter variable">--name</span> diytomcat  <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token parameter variable">-v</span> /usr/local/diy_tomcat/logs/:/usr/local/apache-tomcat-9.0.69/logs/ <span class="token parameter variable">-v</span> /usr/local/diy_tomcat/webapps/:/usr/local/apache-tomcat-9.0.69/webapps/ diytomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><mark><strong>注意</strong></mark></p><ol><li>目录映射覆盖</li><li>tomcat端口映射后，主机访问不通</li></ol><h4 id="发布自己的镜像" tabindex="-1"><a class="header-anchor" href="#发布自己的镜像" aria-hidden="true">#</a> 发布自己的镜像</h4><h5 id="docker-hub" tabindex="-1"><a class="header-anchor" href="#docker-hub" aria-hidden="true">#</a> Docker Hub</h5><h5 id="阿里云镜像仓库" tabindex="-1"><a class="header-anchor" href="#阿里云镜像仓库" aria-hidden="true">#</a> 阿里云镜像仓库</h5><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p><img src="http://img.mgd2008.com/static/img/cc6561fc8b4de802b65b4140a5228335_watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ZhbmppYW5oYWk=,size_16,color_FFFFFF,t_70#pic_center.png" alt="" loading="lazy"></p><p><img src="http://img.mgd2008.com/static/img/fa8a5f4aa8aa798c3d90abd9322f6da7_watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ZhbmppYW5oYWk=,size_16,color_FFFFFF,t_70#pic_center.png" alt="" loading="lazy"></p><h3 id="docker网络" tabindex="-1"><a class="header-anchor" href="#docker网络" aria-hidden="true">#</a> Docker网络</h3>`,105);function S(M,I){const e=o("ExternalLinkIcon");return t(),c("div",null,[d,u,n("p",null,[n("a",r,[s("Docker官方安装文档"),i(e)])]),v,n("ol",null,[n("li",null,[m,b,n("blockquote",null,[k,n("p",null,[s("您的默认"),n("a",g,[s("umask"),i(e)]),s("可能配置不正确，导致无法检测存储库公钥文件。在更新包索引之前尝试授予 Docker 公钥文件的读取权限：")]),q])]),h]),n("p",null,[s("您现在已经成功安装并启动了 Docker 引擎。用户组存在但不包含任何用户，这"),f,s("就是为什么您需要使用它"),y,s(" 来运行 Docker 命令。继续"),n("a",x,[s("Linux 后安装"),i(e)]),s(" ，以允许非特权用户运行 Docker 命令和其他可选配置步骤。")]),D,n("p",null,[n("em",null,[n("strong",null,[n("a",A,[s("Docker命令帮助文档"),i(e)])])])]),_])}const R=l(p,[["render",S],["__file","docker.html.vue"]]);export{R as default};
