(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{504:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"_1-起因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-起因"}},[t._v("#")]),t._v(" 1. 起因")]),t._v(" "),a("p",[t._v("最近项目使用了umijs，这是很不错的一个懒人框架，集成了很多功能和配置，并且有一个很完善的脚手架，几乎不需要二次配置，开箱即用。但是某一次我打包发现，umijs几乎将所有代码打包成为一个js文件了。这个js一般情况下会上1024k，这对于网络差的传输时很不客观的。于是我将浏览器的速度调成3g，哟吼吼，一片白，就是这么尴尬。虽然后面可以通过code spliting或者异步路由加载可以缩小js代码，但是还是会存在比较大的js-source文件。这对网络差的环境体检简直差。前端工程师嘛，追求一个更优的用户体验，于是我开始思考怎么解决这个问题。")]),t._v(" "),a("h4",{attrs:{id:"_2-探索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-探索"}},[t._v("#")]),t._v(" 2. 探索")]),t._v(" "),a("p",[t._v("现代主流前端开发都是SPA模式，那么浏览器第一步是加载index.html，然后才下载js文件，我们需要做的就是加载js的时候页面上能够有一个用户等待js的效果。以前可能大部分人会选择一个菊花图loading，但是现在更加流行动态的骨架屏了。\n针对骨架屏，antd也是有组件提供的，样式很漂亮，可是它会被打包到js里头，这就达不到我们的要求了。\n于是我就将umijs的html模板提取出来，然后加了一个基于antd的骨架屏效果html代码到id为root的div里头。为什么在这个里头？因为js加载完以后，会把我们的项目的相关元素覆盖这个div里头的元素，实现了骨架屏显示完毕以后就展示我们的项目的无缝衔接。而且骨架屏部分代码也不多，index.html加载很快。于是我们有了等待js的时候页面有一个骨架屏的显示，体验上升不少。")]),t._v(" "),a("h4",{attrs:{id:"_3-提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-提升"}},[t._v("#")]),t._v(" 3. 提升")]),t._v(" "),a("p",[t._v("现在大部分项目都会有一个token免登陆的情况。是的，有可能路由不同的情况展示的页面不同，写死在模板上面的骨架屏显得多么的惨白无力。那么这个index.html中的骨架屏不能写死，还要再倒腾。\nwebpack研究还不深入的我开始看webpack官网，去找有没有插件可以解决？htmlPlugin是一个方向。看了很多配置项发现这个插件也不能实现我们想要的效果。没办法，自己学着写一个webpack插件了。代码各位可以去我的"),a("a",{attrs:{href:"https://github.com/0o0o00o0o0/spa-simple-skeleton",target:"_blank",rel:"noopener noreferrer"}},[t._v("github"),a("OutboundLink")],1),t._v("看下吧，我就不多说了。\n这个插件可以通过配置来实现针对不同路由选择出现不同的骨架屏。比如说路由为/login时候配置一个登录的骨架屏，/index的时候配置一个首页的骨架屏。那么用户在弱网络下等待js的时候就会有不同的直观体验，用户体验进一步提升。")]),t._v(" "),a("h4",{attrs:{id:"_4-新问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-新问题"}},[t._v("#")]),t._v(" 4. 新问题")]),t._v(" "),a("p",[t._v("于是我把自测成功的插件添加到umijs的配置中，发现！！！监听不到webpackhtmlplugin的生命周期。没办法，根据umijs的插件开发机制自己又开发了一套umi-plugin-的相关插件。最后终于解决了我苦恼的问题。")]),t._v(" "),a("h4",{attrs:{id:"_5-最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-最后"}},[t._v("#")]),t._v(" 5. 最后")]),t._v(" "),a("p",[t._v("最后，希望大家用不到我的插件，同时我也开源了我的这两个插件。希望大神们能够指正不足。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v(" npm install spa"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("simple"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("skeleton   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 针对普通SPA页面")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者")]),t._v("\n npm install umi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("simple"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("skeleton  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 针对umijs")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("或者"),a("a",{attrs:{href:"https://github.com/0o0o00o0o0/spa-simple-skeleton",target:"_blank",rel:"noopener noreferrer"}},[t._v("spa"),a("OutboundLink")],1),t._v(","),a("a",{attrs:{href:"https://github.com/0o0o00o0o0/umi-plugin-simple-skeleton",target:"_blank",rel:"noopener noreferrer"}},[t._v("umi"),a("OutboundLink")],1),t._v("。谢谢大家")])])}),[],!1,null,null,null);s.default=r.exports}}]);