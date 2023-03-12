(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{509:function(t,r,e){"use strict";e.r(r);var a=e(4),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("从业前端三年，见过不少网页特效(当然我自己没怎么写过，写不出来)。今天主要讲一讲从业以来我所看到的关于滚动的一些小特效(或者说滚动带来的页面效果)。有时候一个页面效果真的可以让人觉得很舒服。")]),t._v(" "),e("h2",{attrs:{id:"掘金"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#掘金"}},[t._v("#")]),t._v(" 掘金")]),t._v(" "),e("p",[t._v("相信很多小伙伴和我差不多，上班第一件事情竟然是？？？？打开掘金看沸点。哟嗐，沸点这里这个小滚动效果就很不错。往下查看的时候顶部的导航栏会消失，进而出现右下角的置顶按钮。这个特效的实现肯定是难不倒我们的前端er的。监听页面的scrollTop达到某一个值就可以实现了。但是使用起来很舒服。")]),t._v(" "),e("p",[t._v("{% asset_img juejin.png %}")]),t._v(" "),e("h2",{attrs:{id:"trello"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trello"}},[t._v("#")]),t._v(" trello")]),t._v(" "),e("p",[t._v("trello 的小效果就是有三个小栏，滚动条在最右侧，但是滚动的是中间的栏目。当然position:fixed就可以实现这个效果。这里的掘金和trello都是关于滚动的简单效果，实现起来也非常容易，主要想表达体验起来很舒服。")]),t._v(" "),e("p",[t._v("{% asset_img trello.png %}")]),t._v(" "),e("h2",{attrs:{id:"手机宣传页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手机宣传页"}},[t._v("#")]),t._v(" 手机宣传页")]),t._v(" "),e("p",[t._v("看大厂的宣传网页真的是一种享受。一加7发布的时候(仅仅用来做事例，不是打广告)我去看了它的宣传网页，真的被它的效果惊到了，这就是大佬和我们码农的区别吗？我也是从这个时候关注滚动特效。用户通过滚动，当然也仅仅通过滚动，网页就有一种乱舞春秋的感觉。"),e("a",{attrs:{href:"https://www.oneplus.com/cn/7pro?from=head#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("体验"),e("OutboundLink")],1),t._v("一下吧。")]),t._v(" "),e("p",[t._v("给我冲击最大的就是，滚动到某一处，一个手机侧面从中间出现在视野，然后随着继续往下滚动，手机并没有很快滚动到顶部，而是慢慢从侧面转成正面，而且是非常流畅的那种翻转，看不出半点卡顿。然后继续滚动，手机依然没有滚到顶部，而是慢慢缩小进而滑到左侧，同时网页右侧出现说明手机牛逼的文字。此时往下滚动，手机才滚动到顶部。我怎么也没想过还会有这种特效，当然也是我孤陋寡闻，可能以前早就出现了。但是对于第一次看到这个效果的我确实感触很多并且激发了我的兴趣寻找其中原理。")]),t._v(" "),e("p",[t._v("通过f12调试各种拆分，了解了其中大概原理如下图：")]),t._v(" "),e("p",[t._v("{% asset_img scrollImg.png %}")]),t._v(" "),e("p",[t._v("此外还有很多类似效果。看大佬们的结构代码真的是即受虐又享受。")]),t._v(" "),e("h2",{attrs:{id:"自定义滚动条"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义滚动条"}},[t._v("#")]),t._v(" 自定义滚动条")]),t._v(" "),e("p",[t._v("百度一下美化滚动条，基本上都是基于谷歌浏览器的滚动条美化。到了edge等非谷歌就嗝屁。但是真的还是想要做一个自己的美化的滚动条怎么弄呢？那就自己写一个吧。思路大概如下：\n{% asset_img scrolljs.png %}")]),t._v(" "),e("p",[t._v("写博客的时候自己临时写了一个自定义滚动条的"),e("a",{attrs:{href:"https://github.com/0o0o00o0o0/my-scroll/",target:"_blank",rel:"noopener noreferrer"}},[t._v("构造函数"),e("OutboundLink")],1),t._v("，不保证完全正确和优化，只是想说明有这么个东西可以用。")]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("一次没有贴代码只贴图片的博文，希望对大家有一丢丢帮助。")])])}),[],!1,null,null,null);r.default=s.exports}}]);