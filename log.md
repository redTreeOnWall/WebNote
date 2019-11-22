# react
```
 全局安装
npm install -g create-react-app
# 构建一个my-app的项目
npx create-react-app my-app
cd my-app
#启动编译当前的React项目，并自动打开 http://localhost:3000/
npm start
```
注意: 安装过程中包json解析出错这样的错误,则:

> 运行npm install时有时会遇到以下错误：  
>   npm ERR! Unexpected end of JSON input while parsing near ...
>
>   这时可以先执行下面的命令：
>
>   npm cache clean --force
>
>   然后再执行npm install就可以了

# ui
```
// 用npm安装
npm install @material-ui/core

npm install @material-ui/icons
```


# 笔记
- react 在 setState的时候会更新(重新render )

