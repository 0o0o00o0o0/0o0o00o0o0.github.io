(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{502:function(t,e,r){"use strict";r.r(e);var a=r(4),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("p",[t._v("我可以说是长沙前端群最闲的人了，加了很多个长沙"),r("em",[t._v("不收费")]),t._v("的前端群，即能够吸取别人出现的问题和解决方案来扩充自己知识，同时也能够在帮助解决别人问题上尽自己一份薄力。见过几次问布局的，而群里齐刷刷的都回答flex布局，没有任何一个其他的布局，不知道是确实只知道flex布局还是知道其他的布局懒的说。 诚然，flex布局真的很好用，但是我们也应该要了解了解其他方面的布局。本文仅简述除flex外其他两种少见的布局和基本使用方法。")]),t._v(" "),r("h2",{attrs:{id:"flex"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[t._v("#")]),t._v(" flex")]),t._v(" "),r("p",[t._v("面试前不是很自信的前端都会找一些面试题来为自己充充电，其中一个相当经典的问题就是垂直居中问题。百度一下很多答案，最常见的几个答案无非就是负margin,transform,设置成行内元素然后lineHeight,flex等等。不知道大家发现没有，这些方法中不是需要知道子容器的宽高(负margin,transform)就是不能真正意义上的垂直(设置lineHeight),常见垂直居中布局中只有flex既不需要关心父容器的宽高又不需要关心子容器的宽高就能垂直居中了，这确实很惊艳而且代码量很少，同时flex还有其他很多很高效的用法，深得我们前端喜爱。但是，我说但是了，这基本上是深得移动端的开发的喜爱。作为常年开发PC端的我来说并不是经常使用flex,flex只兼容ie10以上的浏览器(最大痛点),而且老版的flex的写法还不一样，一会儿"),r("code",[t._v("display:box")]),t._v(",一会儿"),r("code",[t._v("display:flex")]),t._v(",还要做兼容处理。有没有其他布局既能够有flex布局的基本能力有能兼容老浏览器呢？有！")]),t._v(" "),r("h2",{attrs:{id:"table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" table")]),t._v(" "),r("p",[r("code",[t._v("display:table")]),t._v("这个table布局就厉害了（用法涉及到很多api,请自行百度）。首先很久很久以前能用table布局，兼容性是ie8及以上，ie8往下现在的份额应该可以忽略不计了吧，其次就是table布局下对容器宽高变化敏感，简单点说就是具有弹性，响应padding属性内容溢出时会自动撑开父元素，几乎具有flex的基本功能（毕竟年代久远，不可能做到比flex还优秀），下面就来几个实例")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://jsbin.com/doxihaboga/2/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("垂直居中实例"),r("OutboundLink")],1),t._v("，如同flex一般丝滑")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://jsbin.com/leteliwuhu/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("传统圣杯布局"),r("OutboundLink")],1),t._v(",两栏布局可以同时参考")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://jsbin.com/yagomikimu/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("神奇等高布局"),r("OutboundLink")],1),t._v(",适合数据如table展示的场景")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://jsbin.com/wototoyanu/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("动态页脚"),r("OutboundLink")],1),t._v(",适合公司官网展现")])]),t._v(" "),r("p",[t._v("以上应该是最常见的几种table布局了。缺点也很明显，使用table了，那么它的容器下的横向排列总会是等高的，这就相当尴尬了。还有就是很多api还需要结合html的table标签进行理解，比较费时。也许这也是它不能够好好流行下去的原因吧。")]),t._v(" "),r("h2",{attrs:{id:"grid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grid"}},[t._v("#")]),t._v(" grid")]),t._v(" "),r("p",[r("code",[t._v("display:grid")]),t._v("我复制一段阮一峰大佬的原话："),r("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v('Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。'),r("OutboundLink")],1),t._v(",有多牛掰我就不多说了，api实在太多了，我来稍微总结一下：")]),t._v(" "),r("ul",[r("li",[t._v("整体布局样式： "),r("a",{attrs:{href:"https://jsbin.com/qadabacoxu/1/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("grid-template-columns  grid-template-rows"),r("OutboundLink")],1),t._v(",决定了整个grid布局横纵的网格数和对应比例。")]),t._v(" "),r("li",[t._v("布局间隔："),r("a",{attrs:{href:"https://jsbin.com/qadabacoxu/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("grid-row-gap，grid-column-gap，grid-gap"),r("OutboundLink")],1),t._v("，这三个属性其实就是决定了看不见的网格边线的宽度。")]),t._v(" "),r("li",[t._v("布局流向："),r("a",{attrs:{href:"https://jsbin.com/jitodozolo/1/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("grid-auto-flow"),r("OutboundLink")],1),t._v('。默认值是row，即"先行后列"。也可以将它设成column，变成"先列后行"。和flex的流向的概念差不多。')]),t._v(" "),r("li",[t._v("对齐属性："),r("a",{attrs:{href:"https://jsbin.com/vilidaziju/1/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("justify-items"),r("OutboundLink")],1),t._v("，align-items，place-items,justify-content，align-content，place-content。items结尾的就是对单元格内的元素进行对齐排列组合，content结尾的就是对grid内所有网格作为一个整体的对齐排列组合。这里属性很多很复杂，是一个学习难点")]),t._v(" "),r("li",[t._v("重点-"),r("a",{attrs:{href:"https://jsbin.com/laqujaroce/1/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("网格item的属性"),r("OutboundLink")],1),t._v("：grid-column-start：左边框所在的垂直网格线。grid-column-end：右边框所在的垂直网格线。grid-row-start：上边框所在的水平网格线。grid-row-end：下边框所在的水平网格线。注意，最左边或最上边的网格线编号为1而不是0。有了这几个属性，就可以在网格内任务排列自己想要的布局。")]),t._v(" "),r("li",[t._v("流动性："),r("a",{attrs:{href:"https://jsbin.com/lajezenalu/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("grid-auto-flow"),r("OutboundLink")],1),t._v(": row dense;column dense,自动填充网格。可以在例子中去掉属性看效果")])]),t._v(" "),r("p",[t._v("下面是几种常见的用法：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://jsbin.com/jayipotolo/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("垂直居中"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://jsbin.com/duzararazo/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("圣杯布局"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://jsbin.com/fanozitufe/2/edit?html,css,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("响应式布局"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://jsbin.com/qelogupesa/1/edit?js,output",target:"_blank",rel:"noopener noreferrer"}},[t._v("常见用法"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("grid布局基本上可以用来做任何的布局，缺点也很明显，就是兼容性。")]),t._v(" "),r("h2",{attrs:{id:"float-和-absolute"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#float-和-absolute"}},[t._v("#")]),t._v(" float 和 absolute")]),t._v(" "),r("p",[t._v("这两种布局也是最最常用的了，但是面对布局问题，似乎很多人不会第一想到这两个最强兼容性最普遍使用的布局。")]),t._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("p",[t._v("对一个页面进行布局往往是一个伪命题，你可以通过各种各样的css搭配来实现你的目的。作为最流行的flex确实受到了很多人的重用，但是严谨的前端工程师，我们应该在布局前慎重考虑后再选择自己的布局方法和手段，毕竟flex不是万能的。")])])}),[],!1,null,null,null);e.default=o.exports}}]);