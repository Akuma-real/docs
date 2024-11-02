---
prev: false
next: 
  text: '联系我们'
  link: '/contact/' 
---
# 公益镜像加速服务使用指南 🚀

## Github 加速服务 🐙

为了帮助部分地区用户更快速地访问 Github 仓库，可以使用以下加速链接：

- **Github 加速链接**: [https://gh.june.ink](https://gh.june.ink)

使用该链接可以加速 Github 仓库的克隆和拉取操作。💨

## Docker Hub 加速服务 🐳

如果需要加速 Docker 镜像的下载，可以使用以下加速服务：

### Docker Hub 反代 URL

- **反代 URL**: [https://hub.june.ink](https://hub.june.ink)

### 使用方法 ①

原拉取镜像命令：

```
docker pull library/alpine:latest
```

加速拉取镜像命令：

```
docker pull hub.june.ink/library/alpine:latest
```

### 使用方法 ②

一键设置镜像加速：修改文件 `/etc/docker/daemon.json`（如果不存在则创建）

```
vim /etc/docker/daemon.json
```

修改 JSON 文件更改为以下内容，然后保存：

```json
{
  "registry-mirrors": ["https://hub.june.ink"]
}
```

重载 systemd 管理守护进程配置文件：

```
sudo systemctl daemon-reload
```

重启 Docker 服务：

```
sudo systemctl restart docker
```

### 使用方法 ③

为了加速镜像拉取，使用以下命令设置 registry mirror：

```
sudo tee /etc/docker/daemon.json <<EOF
{
    "registry-mirrors": ["https://hub.june.ink"]
}
EOF
```

重载 systemd 管理守护进程配置文件：

```
sudo systemctl daemon-reload
```

重启 Docker 服务：

```
sudo systemctl restart docker
```

使用这些加速服务可以提高下载速度，享受更流畅的体验！✨