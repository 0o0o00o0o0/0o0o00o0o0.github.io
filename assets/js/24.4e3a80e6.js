(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{505:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h5",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("前段时间公司提出一个小项目，涉及到几个页面切换和搜索列表展示，由于自己对于webcomponents的学习和项目比较小，所以选择了腾讯开源的omi作为本次开发的框架。当一次小白鼠的同时希望深入一下对于用户自定义组件的了解。万事开头难，js框架也是这样。omi确实很小巧，并且跨多端开发，但是开发中出现的问题也不少。希望以后越来越好吧。")]),s._v(" "),t("h5",{attrs:{id:"关于生态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于生态"}},[s._v("#")]),s._v(" 关于生态")]),s._v(" "),t("p",[s._v("omi的生态还是比较完整的，脚手架，国际化，路由，ui库，图表库等等应有尽有。要求不高的开发还是完全满足的。但是毕竟开源初期，还是有很多资源的匮乏，比如说路由，ui库等对ts的支持。虽然说omi已经支持了ts，可是写ts的时候如果要使用它们的各种库需要自己写声明文件，就意味着我还需要读一遍它们的源码然后自己撸一个声明。鄙人是比较懒的，就没有使用ts。路由上hash和history是分开的两个库，而且用法还不同。好在有很多大牛在更新着生态，两周时间我就看到了新增了swiper和vscode的omi插件。所以关于omi的生态还是充满信心的。")]),s._v(" "),t("h5",{attrs:{id:"关于omi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于omi"}},[s._v("#")]),s._v(" 关于omi")]),s._v(" "),t("p",[s._v("学过react的前端上手omi应该是分分钟的事情，它与react的区别很小很小，同样使用的jsx的语法。有着和react功能一致但写法不同的生命周期。但是没有export,因为是基于webcomponents,需要定义在js中，所以引用其他组件我们需要全局引入，即：import './omiComponents.js';")]),s._v(" "),t("h6",{attrs:{id:"_1-样式的引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-样式的引用"}},[s._v("#")]),s._v(" 1.样式的引用")]),s._v(" "),t("p",[s._v("omi多了一点就是有一个css的方法，返回是字符串的css。我们可以通过import的形式引入css/scss文件，但是请注意，如果引用的css/scss的文件名不是以‘_’开头，那么你不管在哪个文件引用这个css/scss文件,这些都是定义的全局样式，也就是所有组件都会产生效果。这很明显与组件模块化的概念相悖，所以omi作者在webpack的配置中做了css/scss的文件名需要以下划横线开头，然后在css方法中返回才能定义局部。还有通过静态的方式定义局部样式，即")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("import css from './_index.css';\nimport 'components.css';\ndefine('my-components',class extends weElement{\nstatic css = '*{margin:0}'\ncss(){trturn css}\n}) \n//_index.css的样式只作用于本组件，components.css的样式作用于全局 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("其中static 定义的css/scss权重远远高于引入的css/scss。定义的某个元素的样式会完全被static中定义的那个元素的样式完全替代，包括不重复样式。")]),s._v(" "),t("h6",{attrs:{id:"_2-omi-omio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-omi-omio"}},[s._v("#")]),s._v(" 2.omi/omio")]),s._v(" "),t("p",[s._v("我们找到omi的package.json，发现一个有意思的配置：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(' "alias": {\n    "omi": "omio"\n  }\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("其中omi的配置可以是omi,也可以是omi，对应了两种模式。其中omi对应的是编译为类似react的virtual dom形式打包。优点就是兼容性好，在进行页面更新的时候，借助virtual do 元素的改变可以在内存中进行比较，再结合框架的事务机制将多次比较的结果合并后一次性更新到页面，从而有效地减少页面渲染的次数，提高渲染效率，还可以实现了服务端渲染、浏览器渲染和移动端渲染等功能。所以omi框架默认的就是omi模式。但是这与我们对于webcomponents的态度相悖了，于是有了omio模式。这种模式就是完全将组件打包成webcomponents。可是我们切换模式后发现，样式大错乱！我们定义的全局样式没有一个能影响到组件内部的样式，样式隔离了。当然我们定义的局部样式还在。办法总是有的，于是我们自己定义一个继承类。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("import css from '_index.css'; //全局样式\nexport default class extends weElement{\ncss(){\nreturn css;\n}\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("然后在其他组件内集成我们定义的这个类即可。")]),s._v(" "),t("h6",{attrs:{id:"_3-单元测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-单元测试"}},[s._v("#")]),s._v(" 3.单元测试")]),s._v(" "),t("p",[s._v("这是我使用omi遇到的最大的困难。omi没有配套的单元测试框架，使用jest和jsdom模拟环境也不能完全测试出组件，目前在尝试使用avajs进行测试，测试结果是否达成目标可以以后再补充。")]),s._v(" "),t("h5",{attrs:{id:"感受"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#感受"}},[s._v("#")]),s._v(" 感受")]),s._v(" "),t("p",[s._v("omi项目打包后的代码文件很小，这是让我惊喜的，不同于vue的打包，这里似乎将css通过代码的形式内嵌到打包后的js中了，文件量也很少，感觉很舒服。整体而言，omi很快，很小，也比较灵活，除了还差了点的生态，和令人无语的单元测试。")])])}),[],!1,null,null,null);a.default=n.exports}}]);