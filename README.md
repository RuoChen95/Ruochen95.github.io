个人网站实践，主要用了jekyll，sass，DOM，事件监听，Git等等。

本地启动：<code>jekyll serve</code>

主站是用了github上找的[jekyll框架](https://github.com/barryclark/jekyll-now)。教程简单，值得推荐。

_includes文件夹中包括：
1. analytics.html服务于google统计功能；
2. disqus.html服务于留言功能；
3. meta.html打包了meta标签；
4. svg-icons.html打包了底部的icon，还有很多没有显示出来。

_layouts文件夹中包括：
1. 普通页面(page.html)就是简单的标题以及内容
2. 博客页面(post.html)在此基础上添加了时间
3. 个人经历页面(experience.html)增加了demo外链以及experience栏目
4. 主页(default.html)是前两个页面的母元素，还包括了页首的导航栏以及页尾的footer。

_posts文件夹是博客文章的集合。_drafts文件夹是草稿。_sass是sass文件，用于和style.scss合作，生成最后的css。_site是jekyll的生成文件。

experience文件夹是我自己写的个人项目经历界面，主要用到了js的DOM的重用功能，将数据存储在js对象中用for语句重复调用。目前的问题是不知道如何实现翻页效果以及在手机端的正常显示。

images文件夹存储图像；_config.yml是配置文件，储存了页面名称、描述、icon的链接等；about.md是主页面中about页面的具体内容；index.html定义了主页面；style.scss用于生成最终的css。

projects文件夹储存了我自己写的项目源码或编译后的代码。

-----

（测试用）

（然后又做了些工作）

vue项目打包checklist

1. 是否手动修改了index.html中的js路径
