个人网站实践，主要用了jekyll，sass，DOM，事件监听，Git等等。

本地启动：jekyll serve

主站是用了github上找的[jekyll框架](https://github.com/barryclark/jekyll-now).

_includes文件夹中有4个文件，analytics.html服务于google统计功能；disqus.html服务于留言功能；meta.html打包了meta标签;svg-icons.html打包了底部的icon，还有很多没有显示出来。

_layouts文件夹中包括普通页面，博客页面，以及主页。普通页面就是简单的标题以及内容，博客页面在此基础上添加了时间。主页是前两个页面的母元素，还包括了页首的导航栏以及页尾的footer。

_posts文件夹是博客文章的集合。_drafts文件夹是草稿。_sass是sass文件，用于和style.scss合作，生成最后的css。_site是jekyll的生成文件。

experience是我自己写的个人项目经历界面，主要用到了js的DOM的重用功能，将数据存储在js对象中用for语句重复调用。目前的问题是不知道如何实现翻页效果以及在手机端的正常显示。

images存储图像；_config.yml是配置文件，储存了页面名称、描述、icon的链接等；about.md是主页面中about页面的具体内容；index.html定义了主页面；style.scss用于生成最终的css。
