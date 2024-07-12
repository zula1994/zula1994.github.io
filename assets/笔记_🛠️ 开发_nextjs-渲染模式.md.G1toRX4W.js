import{_ as l,a as r,I as e,b as o,f as c,aw as i,E as t,o as _}from"./chunks/framework.Z4-7JWeT.js";const C=JSON.parse('{"title":"Next.js-渲染模式","description":"","frontmatter":{"cdate":"2023-06-18T00:00:00.000Z","tags":["Next.js"],"comment":true,"cssclasses":["max"]},"headers":[],"relativePath":"笔记/🛠️ 开发/nextjs-渲染模式.md","filePath":"笔记/🛠️ 开发/nextjs-渲染模式.md"}'),d={name:"笔记/🛠️ 开发/nextjs-渲染模式.md"},p=o("h1",{id:"next-js-渲染模式",tabindex:"-1"},[c("Next.js-渲染模式 "),o("a",{class:"header-anchor",href:"#next-js-渲染模式","aria-label":'Permalink to "Next.js-渲染模式"'},"​")],-1),b=i('<h2 id="现代-web-常见的渲染模式" tabindex="-1">现代 web 常见的渲染模式 <a class="header-anchor" href="#现代-web-常见的渲染模式" aria-label="Permalink to &quot;现代 web 常见的渲染模式&quot;">​</a></h2><ol><li>SSR Server-Side Rendering 服务端渲染</li></ol><blockquote><p>SSR 也就是服务端渲染好 html，然后当浏览器收到 http 响应时，接收到的 html 文件上就有页面上需要显示内容，一般只需要浏览器渲染完成 html 时，就可以看到页面内容，不需要去等待 js 的下载和执行，一般来说响应时间会比较短，正常网速下，页面显示时间短，用户等待时间少。但是跳转页面时还是 SSR，路由切换时间就很长，且页面公共元素不能复用。</p></blockquote><ol start="2"><li>CSR Client-Side Rendering 客户端渲染</li></ol><blockquote><p>CSR 是当浏览器收到 http 响应时，页面仍然是白屏，需要等待一段时间加载完成关键资源，再去通过 js 代码渲染页面内容，一般来说，就算是正常网速，页面首次显示页面时间也比较长，与关键资源的体积大小有关，一般来说同等网速比 SSR 渲染时间慢个几倍都比较正常。但跳转页面时因为资源早就下载好了，渲染页面就很快，路由切换时间就很短，页面公共元素能复用。</p></blockquote><ol start="3"><li>同构渲染</li></ol><blockquote><p>同构渲染 就是首屏时 SSR 渲染，跳转其他页面时 CSR 渲染，这样既实现了首屏速度快，切换页面体验也很好。</p></blockquote>',7);function h(m,S,x,u,N,j){const a=t("NolebasePageProperties"),s=t("NolebaseGitContributors"),n=t("NolebaseGitChangelog");return _(),r("div",null,[p,e(a),b,e(s),e(n)])}const R=l(d,[["render",h]]);export{C as __pageData,R as default};
