---
layout: post
title: liferay技术实践
---

liferay是一个开源Java库，通常是作为企业的内网系统。这个库将页面的不同元素，例如日历、开会计划等作为模版，用户可以通过模版来组织页面格式，由于公司项目要求，已经学习了一段时间，但是还没有明白页面是什么实现的。liferay由于是后端框架，页面实现和简单的静态页面完全不同，在学习的过程中有一些东西需要回顾一下：

## Liferay IDE

这是一个liferay的eclipse插件，可以通过eclipse插件广场上搜索下载。安装这个插件之后，在加上Java 8，就能新建基于liferay的项目了，基本liferay项目包括两个：portal组建以及页面模版。

## liferay SDK

这是一个liferay的工具包，在新建项目的同时，需要将这个工具包所对应的文件位置引用一下。目前有个问题，就是文件引用的时候会报出“Invalid SDK settings. Configure app.server.parent.dir property in build.admin.properties to point to Liferay home”错误，解决方式就是找到build.properties文件，讲文件名称改成build.<你的电脑名字>.properties,然后在其中的app.server.parent.dir的值改成liferay portal的绝对路径。

## liferay portal

这是liferay所构建的JAVA页面，其中的JSP文件可以通过其中的tomcat文件渲染出页面，在浏览器中显示出来。它能体现liferay的基本的功能，但是没办法改样式，需要构建相关环境。

## liferay portal SRC

这是liferay的工程源码，可以通过软件导入，不能用eclipse，文件格式也不是mavern。由于整个门户过于复杂，源码分析不现实，如果需要改样式的话需要通过新建模版完成。

目前的遗留问题是如何将模版以及原有文件联系在一起。