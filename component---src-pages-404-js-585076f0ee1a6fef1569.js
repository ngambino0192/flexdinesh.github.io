(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(155),o=a(153);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(144),c=a.n(s);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var u=a(146),l=a.n(u);a.d(t,"PageRenderer",function(){return l.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Full Stack Dev",fullName:"Dinesh Pandiyan",twitterHandle:"https://twitter.com/flexdinesh"}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(51),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},149:function(e,t,a){},150:function(e,t,a){e.exports={header:"Header-module--header--2gV_n",menu:"Header-module--menu--2Suuy",menuItem:"Header-module--menu-item--1Qfhj",title:"Header-module--title--3JWMg"}},151:function(e,t,a){e.exports={footer:"Footer-module--footer--VUGIP"}},152:function(e,t,a){e.exports={pageWrapper:"Layout-module--page-wrapper--2LN4h",contentContainer:"Layout-module--content-container--2LGnA"}},153:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(157),u=a.n(c),l=a(145);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:s,titleTemplate:e.site.siteMetadata.fullName+" | %s",meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n},{name:"og:image",content:e.allFile.edges[0].node.childImageSharp.resize.src},{name:"google-site-verification",content:"lpiCbxqS9teGY6OaEiSz8PQFGmf52vwkQGss2PufUGI"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var p="3745578359"},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Full Stack Dev",description:"Dinesh Pandiyan is a Full Stack Engineer with amazing JavaScript skills. He is the author of popular open source projects like Typy, React Socks, React RenderInBrowser, Dev Landing Page and more.",author:"@flexdinesh",fullName:"Dinesh Pandiyan"}},allFile:{edges:[{node:{name:"dp",extension:"jpg",relativePath:"dp.jpg",publicURL:"/static/dp-7d54fca2b81ed369dfb3932162564996.jpg",childImageSharp:{resize:{width:400,height:400,aspectRatio:1,originalName:"dp.jpg",src:"/static/7d54fca2b81ed369dfb3932162564996/ec080/dp.jpg"}}}}]}}}},155:function(e,t,a){"use strict";var n=a(147),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(145),u=(a(149),a(150)),l=a.n(u),d=function(e){var t=e.showHome;return i.a.createElement("header",{className:l.a.header},i.a.createElement("div",{className:l.a.menu},t?i.a.createElement("div",{className:l.a.menuItem},i.a.createElement(c.Link,{to:"/"},"Home")):null,i.a.createElement("div",{className:l.a.menuItem},i.a.createElement(c.Link,{to:"/about/"},"About"))))};d.propTypes={siteMetadata:s.a.object,showHome:s.a.bool};var p=d,m=(a(156),a(151)),f=a.n(m),h=function(e){var t=e.siteMetadata;return i.a.createElement("footer",{className:f.a.footer},i.a.createElement("div",null,i.a.createElement("span",null,"© Copyright 2019 "),i.a.createElement("a",{href:t.twitterHandle,className:f.a.link,target:"blank"},t.fullName)))};h.propTypes={siteMetadata:s.a.object};var g=h,y=a(152),v=a.n(y),w=function(e){var t=e.children,a=e.showHome,r=void 0===a||a;return i.a.createElement(c.StaticQuery,{query:"1062546648",render:function(e){return i.a.createElement("div",{className:v.a.pageWrapper},i.a.createElement(p,{siteMetadata:e.site.siteMetadata,showHome:r}),i.a.createElement("div",{className:v.a.contentContainer},t),i.a.createElement(g,{siteMetadata:e.site.siteMetadata}))},data:n})};w.propTypes={children:s.a.node.isRequired,showHome:s.a.bool};var b=w;t.a=b}}]);
//# sourceMappingURL=component---src-pages-404-js-585076f0ee1a6fef1569.js.map