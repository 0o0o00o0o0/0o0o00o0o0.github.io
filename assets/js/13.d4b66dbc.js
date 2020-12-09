(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{493:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("公司某个项目有一个功能，需要在网页上通过用户上传文件后，拉起本机的应用，然后应用显示上传速度等各种各样的详细信息，网页上显示上传进度等简短信息。类似zoom的完美体现。我们知道js是运行在浏览器的，所以拉起应用肯定需要各个桥梁相互配合。本篇文章也是这个探索过程的总结。")]),s._v(" "),a("h6",{attrs:{id:"uri"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[s._v("#")]),s._v(" URI")]),s._v(" "),a("p",[s._v("看到功能第一下就想到了通过URI来实现。通过安装应用时的注册表来拉起应用。这是一个很普遍的拉起应用的方式，腾讯qq就是这种。但是不能做到交互。拉起就完事了。这不是我们想要的东西。")]),s._v(" "),a("h6",{attrs:{id:"浏览器扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器扩展"}},[s._v("#")]),s._v(" 浏览器扩展")]),s._v(" "),a("p",[s._v("本文主要讲的就是浏览器扩展。\n浏览器扩展赋予了js操作浏览器的能力，我们可以通过扩展来实现很多功能，如去除广告，浏览网页翻译，检测莫名的js或者病毒的植入等等，当然也包括了与其他应用的通信。其中用到的就是native Message。其中浏览器扩展的开发就不做过多的阐述了，网上很多。")]),s._v(" "),a("p",[s._v("大部分用户应该是使用win来浏览网页。我们主要也是讲win。win平台下的浏览器也是五花八门但是总结下来基本上就是谷歌，火狐，EDGE，IE。其中IE仅支持activeX来扩展，目前基本已经淘汰，不在我们这次的考虑中，但是ie也需要实现这项功能，暂时留着以后讨论。")]),s._v(" "),a("p",[s._v("首先扩展的核心代码为")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// background.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" nativeHostName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'your nativeHostName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义nativeHostName，通常为com.chrome.app这种形式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" port "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" chrome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("runtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("connectNative")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nativeHostName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("；"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 谷歌扩展下的写法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" port "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" browser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("runtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("connectNative")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nativeHostName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// edge,火狐下的写法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/// 获得一个port对象，后面port的方法是一致的。")]),s._v("\nport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onDisconnect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 失去连接port = null;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取应用端传回来的message")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 给应用端发送消息")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("插件写法虽然类似，但是注册方法却各不相同。其中谷歌的注册清单json为")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.chrome.test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Chrome call native app and sent message to app."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\\\Users\\\\Public\\\\GoogleNativeClient\\\\NativeMessagingApp.exe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stdio"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"allowed_origins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chrome-extension://dkeepngffocdigjfgmbpffbcjpijdgppp/"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//json文件，请记住name，因为注册时需要这个name.path为拉起应用的路径，type固定为'stdio',然后allowed_origins为数组，记录该扩展的id，即谷歌浏览器加载扩展后该扩展的id要与清单此处的id一直。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("火狐的注册清单json为")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.firefox.test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Chrome call native app and sent message to app."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\\\Users\\\\Public\\\\GoogleNativeClient\\\\NativeMessagingApp.exe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stdio"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"allowed_extensions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testFirefox@example.org"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//和谷歌类似，但是最后为allowed_extensions，这里为火狐浏览器的uid，可以通过manifest.json自定义.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意！！ 看似谷歌和火狐只是最后一个key不同，可以何必为同一个json，但是事实证明合并后是不能用的。")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("edge需要用到c#技术，所以微软这个注册清单的方式怎么不跟风呢？因为涉猎技术不够所以停止了edge的研究。")]),s._v(" "),a("p",[s._v("接下来是注册位置,win+R --\x3e regedit")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nHKEY_CURRENT_USER\\Software\\Google\\Chrome\\NativeMessagingHosts\\com.chrome.test // 谷歌路径\nHKEY_LOCAL_MACHINE\\SOFTWARE\\Mozilla\\NativeMessagingHosts\\com.firefox.test // 火狐路径\n默认值都为我们清单json的绝对路径\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("此时就可以在拉起应用并通信了。linux和mac下谷歌和火狐拉起应用方式一致，区别就是在于注册清单方式不同，这里就不过多讨论了。")]),s._v(" "),a("p",[s._v("扩展的方式虽然可以很精确的和应用通信，但是不难发现，不同浏览器需要开发不同的扩展，安装不同的注册表和json。safari甚至还需要mac才能开发扩展，并且收费，还有诸如ie这种需要更底层的技术，难以做到统一。")]),s._v(" "),a("h6",{attrs:{id:"websocket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[s._v("#")]),s._v(" websocket")]),s._v(" "),a("p",[s._v("ws可能是能够找到的更加适合用来和应用通信的东西了。一来都是js写法，这样子可以统一各个浏览器的通信代码，二来支持ie10以上浏览器，兼容性还可以。现在就存在一个如何拉起应用和确定websocket服务端接口的问题了。其实细细思考也不是很难，URI拉起应用，应用通知后台拉起的应用的端口，后台通知网页已经拉起了应用和他的端口，网页和应用建立ws连接通信。看似简单，而且代码统一，但是还有很多坑要去踩，如ws的安全性等...")]),s._v(" "),a("h4",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("与应用通信如果仅仅在单一系统下可以通过扩展的形式来实现，但是如果是多端多浏览器建议使用websocket。也许后面也会有更多更好的技术。")])])}),[],!1,null,null,null);t.default=e.exports}}]);