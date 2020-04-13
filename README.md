# vue-demo

>  这是一个以复刻bilibili播放页为目的的一个vue.js工程

##项目初衷
  <p>因为自己喜欢弹幕网站，而且网上鲜有靠谱的，能复刻bilibili弹幕逻辑的开源弹幕项目，认为复刻b站播放页是一件比较有挑战性的事情，所以就开始做了，目前已有初步成果</br>
  <p>虽然页面和交互逻辑都是以最大限度还原bilibili播放页为目的，包括自适应逻辑和动效，但毕竟b站是闭源项目，具体的实现逻辑很多地方跟b站原版有较大区别，同时也是为了探索不同前端技术路径</br>
  主界面</br>
  
  ![](https://github.com/skyj10/vue-demo/blob/master/readme/main1.png)
  ![](https://github.com/skyj10/vue-demo/blob/master/readme/main2.png)

  <p>目前初步完成弹幕引擎的基础核心逻辑模块,包括缩略图悬浮弹幕，下面是主弹幕引擎的使用指南，大部分其他功能同样仍未完善，可自己玩一玩</br>
 
  ![](https://github.com/skyj10/vue-demo/blob/master/readme/danmu.png)
  ![](https://github.com/skyj10/vue-demo/blob/master/readme/danmCode.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
