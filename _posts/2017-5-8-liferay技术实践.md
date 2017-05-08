---
layout: post
title: liferay技术实践
---

liferay是一个开源Java库，通常是作为企业的内网系统。这个库将页面的不同元素，例如日历、开会计划等作为模版，用户可以通过模版来组织页面格式，由于公司项目要求，已经学习了一段时间，但是还没有明白页面是什么实现的。liferay由于是后端框架，页面实现和简单的静态页面完全不同，在学习的过程中有一些东西需要回顾一下：

## Liferay IDE

这是一个liferay的eclipse插件，可以通过eclipse插件广场上搜索下载。安装这个插件之后，在加上Java 8，就能新建基于liferay的项目了。

## liferay SDK

这是一个liferay的工具包，在新建项目的同时，需要将这个工具包所对应的文件位置引用一下。目前有个问题，就是文件引用的时候会报出“Invalid SDK settings. Configure app.server.parent.dir property in build.admin.properties to point to Liferay home”错误，不知道怎么解决。

## liferay portal

这是liferay所构建的JAVA页面，其中的JSP文件可以通过相关技术渲染出页面，在浏览器中显示出来。它有基本的功能，但是没办法改样式。

## liferay portal SRC

这是liferay的工程源码，现在还没进行到源码的分析。