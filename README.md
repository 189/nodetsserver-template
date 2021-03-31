# nodetsserver-template

### Development

> Yarn 安装 npm install -g yarn

> yarn [官网](https://yarnpkg.com/)

```
$ yarn install // 首次运行
$ yarn dev
$ open http://localhost:9000
```

#### 关于 development 开发环境

- 内置 `nodemon`脚本，代码实时变化监控，`src` 目录下文件改动会自动重启服务， 无需手动重新 build;
- 内置 `ts-node`，ts 文件在运行期间在内存中自动转为 js 文件，无需手动编译转换;

### Run In Production

#### 准备工作

> `npm install -g yarn` 安装 yarn

> `yarn global add pm2` 安装 pm2

#### 部署&&启动

```
$ yarn start // Or `make start` (only for linux)
```

> `yarn start` / `make start` 会在服务激活前提前编译 ts 文件为 js, 不会在请求期间实时编译耗费性能;

> `make start` 将通过 `pm2` 启动 nodejs server，同时支持进程守护和多进程负载(根据服务器 CPU 核数)。

> [pm2 使用](https://pm2.keymetrics.io/)
