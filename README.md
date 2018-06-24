# Grit

* 基于 create-react-app
* 支持 react-router, mobx, sass, ant-mobile, styled-components
* 支持 immutable, rxjs, ramda, lodash, moment
* 链接地址 [w-lianfu.github.io/grit/](https://w-lianfu.github.io/grit/)

## 注意

* 每次 npm 安装其它插件库, sass 和 @ 就会失效, 需要到 node_modules 目录下的 react-scripts目录, 修改 webpack.config.dev.js 和 webpack.config.prod.js 两个文件(初次使用也需要增加下面两个配置)
```
  在 alias 中增加 '@': paths.appSrc,
  在 roles 中增加对 sass-loader 的支持
```
