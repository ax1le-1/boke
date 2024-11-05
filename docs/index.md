---
# 提供三种布局，doc、page和home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
title: 小赵的博客
titleTemplate: Hi,终于等到你
editLink: true
lastUpdated: true

hero:
    name: 小赵同学
    text: good good study,day day up.
    tagline: 精通Vue2,Vue3,React,Nginx,Linux,nodeJs,mysql等单词拼写
    image:
        # 首页右边的图片
        src: /avatar.png
        # 图片的描述
        alt: avatar
    # 按钮相关
    actions:
    - theme: brand
      text: 进入主页
      link: /column/views/guide
    - theme: alt
      text: markdown基础语法
      link: /column/markdown/
# 按钮下方的描述
features:
  - icon: ''
    title: markdown基础语法
    details: 
    link: /column/markdown/
  - icon: ''
    title: 喜欢美学
    details: 热爱一切美学，喜欢用各种设计工具造图。
  - icon: ''
    title: 斜杆青年
    details: 是个平平无奇但是又很热爱学习的斜杆青年。
---
