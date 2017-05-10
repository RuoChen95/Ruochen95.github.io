---
layout: post
title: Liferay实践回顾
---

liferay是一个开源Java库，通常是作为企业的内网系统。这个库将页面的不同元素，例如日历、开会计划等作为模版，用户可以通过模版来组织页面格式。由于公司项目要求，已经学习了一段时间，但是还没有明白页面是什么实现的。liferay由于是后端框架，页面实现和简单的静态页面完全不同，在学习的过程中有一些东西需要回顾一下：

## 通过命令行开发

### 环境

需要三大类环境：node，npm；yeoman；SASS from Ruby。根据[教程](https://dev.liferay.com/zh/develop/tutorials/-/knowledge_base/7-0/themes-generator)配置即可。目前的问题是，npmrc文件如果按照上面要求修改，环境会报错安装不上，npm在后续构建theme的时候也会报错。

### Liferay Theme Generator

激活代码是<code>yo liferay-theme</code>

使用yeoman引入这个主题构建器，这个构建器会创建好一个主题的架构。在文件中会有一个src文件夹，这个src文件夹会存储进行改动的文件。其中的CSS文件是以Sassy CSS文件存储的。这个构建器还能通过<code>yo liferay-theme:layout</code>以及<code>yo liferay-theme:themelet</code>来改变页面的基础布局以及增加小组件。目前的问题是将theme构建好之后如何应用到已经在tomcat上跑起来的页面中……

## 通过Eclipse开发

### Liferay IDE

这是一个liferay的eclipse插件，可以通过eclipse插件广场上搜索下载。安装这个插件之后，在加上Java 8，就能新建基于liferay的项目了。

### liferay SDK

这是一个liferay的工具包，在新建项目的同时，需要将这个工具包所对应的文件位置引用一下。目前有个问题，就是文件引用的时候会报出“Invalid SDK settings. Configure app.server.parent.dir property in build.admin.properties to point to Liferay home”错误，解决方式就是找到build.properties文件，讲文件名称改成build.<你的电脑名字>.properties,然后在其中的app.server.parent.dir的值改成liferay portal的绝对路径。

### liferay portal

这是liferay所构建的JAVA页面，其中包括用于渲染页面的tomcat文件。它能体现liferay的基本的功能，但是没办法改样式。

### liferay portal SRC

这是liferay的工程源码，可以通过软件导入，不能用eclipse，文件格式也不是mavern。由于整个门户过于复杂，源码分析不现实，如果需要改样式的话需要通过新建模版完成。