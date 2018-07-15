---
layout: post
title: npm package技术实践
---

基本目的：将vue组件上传到npm文件服务器上，方便不同项目的调用，做到组件的解耦以及脱水。目前计划尝试解耦新做的coupon组件，后续计划解耦页面头尾，步进器。

需要进一步学习：

vue方面：

* 父子组件事件传递
* 插槽slot

npm方面：

* 上传npm package及其使用（已完成）
* webpack的构建步骤

----

将组件上传到npm package及其使用

可见我的项目https://github.com/RuoChen95/Learn-Vue-2，其中的[sample project](https://github.com/RuoChen95/Learn-Vue-2/tree/master/sample-project)的coupon就用到了自己写的[coupon组件](https://github.com/RuoChen95/Learn-Vue-2/tree/master/btm-coupon-demo-pkg)。目前版本可以说是npm package的最简化版了。在使用的时候注意写明组件路径：

> import Coupon from 'btm-coupon-demo-pkg/components/coupon.vue'
