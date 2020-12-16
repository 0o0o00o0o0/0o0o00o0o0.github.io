(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{511:function(s,a,e){"use strict";e.r(a);var t=e(4),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"起因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#起因"}},[s._v("#")]),s._v(" 起因")]),s._v(" "),e("p",[s._v("学习 ssr 还是因为需要加深自己的技能，不然被淘汰了。它的好处相信大家都了解，我也不多说了。对我而言，其实用处也不是很大。你说加载快吧？现在 spa 项目代码分割后其实也可以很快，但是这种东西肯定更快。那么有利于 seo 吧？据说现在大厂的爬虫是有技术可以对 spa 进行爬取信息的，具体不详，但是这应该算是它最大的优势吧。但是存在即合理，学习了上不了当。")]),s._v(" "),e("h2",{attrs:{id:"nuxtjs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nuxtjs"}},[s._v("#")]),s._v(" nuxtjs")]),s._v(" "),e("p",[s._v("先说一下 vue 的生态简直太棒了。vue-cli 也好， nuxtjs 也好，都有一套非常完整的脚手架，使用者可以通过脚手架搭建完全符合自己想法的开发体系。nuxtjs 的使用就不多说了。这次主要讲一下 nextjs。")]),s._v(" "),e("h2",{attrs:{id:"初见-nextjs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初见-nextjs"}},[s._v("#")]),s._v(" 初见 nextjs")]),s._v(" "),e("p",[s._v("打开 nextjs 官网简直是无语了。啥玩意儿？在长沙，vue 的使用率大于 react。我相信它们之间的文档也有部分原因。这么烂的文档我怎么学？于是我花了将近大半天的时间自己搭建了一个我个人习惯的 nextjs 的架子。即 nextjs+ts+antd+dva。")]),s._v(" "),e("h2",{attrs:{id:"nextjs-ts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nextjs-ts"}},[s._v("#")]),s._v(" nextjs + ts")]),s._v(" "),e("p",[s._v("ts 现在应该很多前端都已经基本掌握，用起来很香。nextjs 也提供了 ts 的配置，新版本 nextjs 只需要装它的 ts 模块即可。还是挺方便了。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm i --save next react react-dom @zeit/next-typescript typescript  @types/react @types/node\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("先不管，一把装了，然后在 package.json 中添加")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('  "scripts": {\n    "dev": "next",\n    "build": "next build",\n    "start": "next start"\n  },\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("接着在最外层目录新建 pages 文件夹,新建一个自己定义的 ts 写 react 吧。关于nextjs的规则我们暂时不说，这次主要谈论这次搭建这个架子的过程。")]),s._v(" "),e("h2",{attrs:{id:"antd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#antd"}},[s._v("#")]),s._v(" antd")]),s._v(" "),e("p",[s._v("antd 还是很不错的。可是按照官方配置和网上搜索的配置都不能配成按需加载。只有重写一下App根组件。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// ./pages/_app.ts\nimport "antd/dist/antd.css";\nimport React from "react";\nexport default ({ Component, pageProps }) => <Component {...pageProps} />;\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("将 antd 的所有样式引入才能正常使用。或许我还是没找到正确的方法，还请各位大佬指正。")]),s._v(" "),e("h2",{attrs:{id:"dva"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dva"}},[s._v("#")]),s._v(" dva")]),s._v(" "),e("p",[s._v("之所以是 dva 而不是 redux 是因为我只认识这东西，没接触过 redux。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm install --save dva-no-router\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后自己创建一个 Store 文件，地址为"),e("a",{attrs:{href:"https://github.com/dvajs/dva/blob/master/examples/with-nextjs/utils/store.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/dvajs/dva/blob/master/examples/with-nextjs/utils/store.js"),e("OutboundLink")],1),s._v(",注意要转为 ts。然后我发现要使用 dva，每个页面也都有一个这么个东西(store 文件存于 utils 文件夹中)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("import WithDva from '../utils/store';\n....\n static async getInitialProps(props) {}\n....\nexport default WithDva((state) => { return { index: state.index }; })(Page);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("用过 nextjs 的应该都知道这个东西。于是我想办法把他们整合到一起了，省的写那么多代码。大概是下面这个样子")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("import WithDva from './store'\nexport const WithComponent = (Components: {\n    (props: any): JSX.Element;\n    getInitialProps?: (props: any) => Promise<{\n        [key: string]: any;\n        pathname: string;\n        query: { [key: string]: any };\n        isServer: boolean;\n        dvaStore: { [key: string]: any };\n    }>\n}, initData?: (props?: Initialprops) => Promise<{ [key: string]: any }> | { [key: string]: any }) => {\n    Components.getInitialProps = async (props: Initialprops) => {\n        const {\n            pathname, query, isServer, store,\n        } = props;\n        let result: { [key: string]: any } = {};\n        // 扩展初始化数据\n        if (initData) {\n            result = await initData(props);\n        }\n        return {\n            pathname, query, isServer, dvaStore: store, ...result\n        };\n    };\n    return WithDva((state) => state)(Components)\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br")])]),e("p",[s._v("第一个参数是 react 组件，第二个是原本应该写在 getInitialProps 中的内容。 在组件中使用如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("export default WithComponent(\n  Home,\n  (props) =>\n    new Promise((res) => {\n      setTimeout(async () => {\n        // 事先全局渲染\n        // await props.store.dispatch({ type: 'index/init' })\n        res({ a: 67 });\n      }, 0);\n    })\n);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("其余的 dva 配置我也不多说了，和平时使用一致即可。值得注意的是，这里 dva 依然不支持 await/sync。要使用 yield 和*。这一点确实挺尴尬无语的。")]),s._v(" "),e("h2",{attrs:{id:"动态路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态路由"}},[s._v("#")]),s._v(" 动态路由")]),s._v(" "),e("p",[s._v("最后跳转动态路由的时候发现了一个问题，当刷新当前页面的时候，node 端不会重定向，所以会显示 404。这时候就需要用一个 express 了。首先在根目录新建一个 server.js，然后安装 express。将 package.json 代码更改一下")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('  "scripts": {\n    "dev": "node server.js",\n    "build": "next build",\n    "start": "NODE_ENV=production node server.js"\n  },\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("server.js 中关键代码如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("   server.get('/dashboard/:id', (req, res) => {\n      return app.render(req, res, '/dashboard', { id: req.params.id })\n    })\n    server.get('*', (req, res) => {\n      return handle(req, res)\n    })\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("同时这里可以做接口的反向代理等等...这样子就比 nextjs 启动项目可扩展性大多了。")]),s._v(" "),e("h2",{attrs:{id:"最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[s._v("#")]),s._v(" 最后")]),s._v(" "),e("p",[s._v("看上去好像挺简单的，也是花了我大半天各种翻资料和尝试而成的。这是我个人比较喜欢的一套组合。想详细点就去"),e("a",{attrs:{href:"https://github.com/0o0o00o0o0/nextjs-learn",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),e("OutboundLink")],1),s._v("拉下代码看下吧。毕竟也是我学习的阶段写的，肯定问题不少，欢迎各位大佬提出改进。")])])}),[],!1,null,null,null);a.default=n.exports}}]);