(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(155),o=a(153),l=(a(172),a(173),a(160)),s=a(4),c=a.n(s),d=a(174),u=a.n(d),m=function(e){var t=e.children,a=e.withPad,r=void 0!==a&&a;return n.a.createElement("span",{className:r?u.a.highlightWithPad:u.a.highlight},t)},p=a(175),f=a.n(p),h=a(176),g=a(178),w=function(e){var t=e.siteMetadata;return n.a.createElement("div",{className:f.a.container},n.a.createElement("a",{href:t.githubHandle,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(h.a,{icon:g.b})),n.a.createElement("a",{href:t.twitterHandle,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(h.a,{icon:g.f})),n.a.createElement("a",{href:t.stackOverflowHandle,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(h.a,{icon:g.e})),n.a.createElement("a",{href:t.devToHandle,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(h.a,{icon:g.a})),n.a.createElement("a",{href:t.mediumHandle,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(h.a,{icon:g.d})),n.a.createElement("a",{href:t.linkedInHandle,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(h.a,{icon:g.c})))},b=a(179),v=a.n(b),y=a(145),k=function(e){var t=e.siteMetadata;return n.a.createElement("div",{className:v.a.container},n.a.createElement("h1",{className:v.a.name},t.fullName),n.a.createElement("div",{className:v.a.subWrapper},n.a.createElement("div",{className:v.a.sub},n.a.createElement(m,{withPad:!0},"Creator")),n.a.createElement("div",{className:v.a.dotSeparator}),n.a.createElement("div",{className:v.a.sub},n.a.createElement(m,{withPad:!0},"Writer")),n.a.createElement("div",{className:v.a.dotSeparator}),n.a.createElement("div",{className:v.a.sub},n.a.createElement(m,{withPad:!0},"Engineer"))),n.a.createElement(w,{siteMetadata:t}),n.a.createElement("div",{className:v.a.separator}))};k.propTypes={siteMetadata:c.a.object};var E=function(){return n.a.createElement(y.StaticQuery,{query:"3095501042",render:function(e){return n.a.createElement(k,{siteMetadata:e.site.siteMetadata})},data:l})},S=(a(33),a(161),a(156),a(180)),I=a.n(S),x=function(){return n.a.createElement("span",{className:I.a.dotSeparator})},N=a(181),R=a.n(N),B=function(e){var t=e.title,a=e.desc,r=e.link;return n.a.createElement("div",{className:R.a.wrapper},n.a.createElement("a",{className:R.a.anchor,href:r,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("div",{className:R.a.title},t),n.a.createElement("div",{className:R.a.dotSeparatorWrapper},n.a.createElement(x,null)),n.a.createElement("div",{className:R.a.desc},a)))};B.propTypes={title:c.a.string,desc:c.a.string,link:c.a.string};var M=B,H=a(182),P=a.n(H),T=function(e){var t=e.portfolioItems;return n.a.createElement("div",{className:P.a.container},n.a.createElement("h1",{className:P.a.title},"I Build Things"),n.a.createElement("p",{className:P.a.intro},"I have created a few JavaScript and React libraries (40k+ npm downloads)."),n.a.createElement("div",{className:P.a.showcaseContainer},t.map(function(e){return n.a.createElement(M,Object.assign({},e,{key:e.title}))})),n.a.createElement("div",{className:P.a.separator}))};T.propTypes={portfolioItems:c.a.array};var j=function(){return n.a.createElement(y.StaticQuery,{query:"3095501042",render:function(e){return n.a.createElement(T,{portfolioItems:e.allJavascriptFrontmatter.edges[0].node.frontmatter.portfolioItems})},data:l})},D=a(183),C=a(184),L=a.n(C),W=function(e){var t=e.title,a=e.link,r=(e.desc,e.date);return n.a.createElement("div",{className:L.a.wrapper},n.a.createElement("a",{className:L.a.anchor,href:a,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("div",{className:L.a.title},t)),n.a.createElement("div",{className:L.a.date},r))};W.propTypes={title:c.a.string,desc:c.a.string,link:c.a.string};var q=W,J=a(185),F=a.n(J),A=function(e){var t=e.blogItems;return n.a.createElement("div",{className:F.a.container},n.a.createElement("h1",{className:F.a.title},"I Write Stuff"),n.a.createElement("p",{className:F.a.intro},"I blog about stuff I find interesting (250k+ views in DEV and Medium)."),n.a.createElement("div",{className:F.a.showcaseContainer},t.map(function(e){var t=e.node;return n.a.createElement(q,{title:t.frontmatter.title,desc:t.frontmatter.description,link:t.fields.slug,date:t.frontmatter.date,key:t.id})})),n.a.createElement("div",{className:F.a.separator}))};A.propTypes={blogItems:c.a.array};var Q=function(){return n.a.createElement(y.StaticQuery,{query:"3472271534",render:function(e){return n.a.createElement(A,{blogItems:e.allMarkdownRemark.edges})},data:D})};t.default=function(e){e.data;return n.a.createElement(i.a,{showHome:!1},n.a.createElement(o.a,{title:"Full Stack Dev",keywords:["developer","engineer","react","javascript"]}),n.a.createElement(E,null),n.a.createElement(j,null),n.a.createElement(Q,null))}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),l=a(144),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(146),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var m=n.a.createContext({}),p=function(e){return n.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,a){var r;e.exports=(r=a(148))&&r.default||r},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Full Stack Dev",fullName:"Dinesh Pandiyan",twitterHandle:"https://twitter.com/flexdinesh"}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),l=a(51),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},149:function(e,t,a){},150:function(e,t,a){e.exports={header:"Header-module--header--2gV_n",menu:"Header-module--menu--2Suuy",menuItem:"Header-module--menu-item--1Qfhj",title:"Header-module--title--3JWMg"}},151:function(e,t,a){e.exports={footer:"Footer-module--footer--VUGIP"}},152:function(e,t,a){e.exports={pageWrapper:"Layout-module--page-wrapper--2LN4h",contentContainer:"Layout-module--content-container--2LGnA"}},153:function(e,t,a){"use strict";var r=a(154),n=a(0),i=a.n(n),o=a(4),l=a.n(o),s=a(157),c=a.n(s),d=a(145);function u(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,l=e.title;return i.a.createElement(d.StaticQuery,{query:m,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:e.site.siteMetadata.fullName+" | %s",meta:[{name:"description",content:r},{property:"og:title",content:l},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:r},{name:"og:image",content:e.allFile.edges[0].node.childImageSharp.resize.src},{name:"google-site-verification",content:"lpiCbxqS9teGY6OaEiSz8PQFGmf52vwkQGss2PufUGI"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u;var m="3745578359"},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Full Stack Dev",description:"Dinesh Pandiyan is a Full Stack Engineer with amazing JavaScript skills. He is the author of popular open source projects like Typy, React Socks, React RenderInBrowser, Dev Landing Page and more.",author:"@flexdinesh",fullName:"Dinesh Pandiyan"}},allFile:{edges:[{node:{name:"dp",extension:"jpg",relativePath:"dp.jpg",publicURL:"/static/dp-7d54fca2b81ed369dfb3932162564996.jpg",childImageSharp:{resize:{width:400,height:400,aspectRatio:1,originalName:"dp.jpg",src:"/static/7d54fca2b81ed369dfb3932162564996/ec080/dp.jpg"}}}}]}}}},155:function(e,t,a){"use strict";var r=a(147),n=a(0),i=a.n(n),o=a(4),l=a.n(o),s=a(145),c=(a(149),a(150)),d=a.n(c),u=function(e){var t=e.showHome;return i.a.createElement("header",{className:d.a.header},i.a.createElement("div",{className:d.a.menu},t?i.a.createElement("div",{className:d.a.menuItem},i.a.createElement(s.Link,{to:"/"},"Home")):null,i.a.createElement("div",{className:d.a.menuItem},i.a.createElement(s.Link,{to:"/about/"},"About"))))};u.propTypes={siteMetadata:l.a.object,showHome:l.a.bool};var m=u,p=(a(156),a(151)),f=a.n(p),h=function(e){var t=e.siteMetadata;return i.a.createElement("footer",{className:f.a.footer},i.a.createElement("div",null,i.a.createElement("span",null,"© Copyright 2019 "),i.a.createElement("a",{href:t.twitterHandle,className:f.a.link,target:"blank"},t.fullName)))};h.propTypes={siteMetadata:l.a.object};var g=h,w=a(152),b=a.n(w),v=function(e){var t=e.children,a=e.showHome,n=void 0===a||a;return i.a.createElement(s.StaticQuery,{query:"1062546648",render:function(e){return i.a.createElement("div",{className:b.a.pageWrapper},i.a.createElement(m,{siteMetadata:e.site.siteMetadata,showHome:n}),i.a.createElement("div",{className:b.a.contentContainer},t),i.a.createElement(g,{siteMetadata:e.site.siteMetadata}))},data:r})};v.propTypes={children:l.a.node.isRequired,showHome:l.a.bool};var y=v;t.a=y},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Full Stack Dev",fullName:"Dinesh Pandiyan",twitterHandle:"https://twitter.com/flexdinesh",githubHandle:"https://github.com/flexdinesh",stackOverflowHandle:"https://stackoverflow.com/story/flexdinesh",devToHandle:"https://dev.to/flexdinesh",mediumHandle:"https://medium.com/@flexdinesh",linkedInHandle:"https://www.linkedin.com/in/dineshpandiyan/"}},allJavascriptFrontmatter:{edges:[{node:{frontmatter:{portfolioItems:[{title:"tweetfancy.io",desc:"Tweet with bold, italics and strikethough text",link:"https://tweetfancy.io/"},{title:"Typy",desc:"Minimal JavaScript type checking library",link:"https://github.com/flexdinesh/typy"},{title:"React Socks",desc:"React library to render components only on specific viewports",link:"https://github.com/flexdinesh/react-socks"},{title:"React Render-In-Browser",desc:"React library to render browser specific content",link:"https://github.com/flexdinesh/react-render-in-browser"},{title:"Dev Landing Page",desc:"Baremetal landing page for developers",link:"https://github.com/flexdinesh/dev-landing-page"},{title:"React-Redux Boilerplate",desc:"A minimal React-Redux boilerplate setup with all the best practices",link:"https://github.com/flexdinesh/react-redux-boilerplate"},{title:"Browser or Node",desc:"Check where the code is running in the browser or node.js",link:"https://github.com/flexdinesh/browser-or-node"},{title:"Axios Retry Interceptor",desc:"Configurable Axios Interceptor to retry failed http calls",link:"https://github.com/flexdinesh/axios-retry-interceptor"},{title:"Del-Key",desc:"Safely delete deeply nested keys in JavaScript objects",link:"https://github.com/flexdinesh/del-key"},{title:"React Library Boilerplate",desc:"Boilerplate code for building React libraries",link:"https://github.com/flexdinesh/react-npm-package-boilerplate"},{title:"NPM Module Starter",desc:"Starter template building vanilla JavaScript libraries",link:"https://github.com/flexdinesh/npm-module-boilerplate"}]}}}]}}}},174:function(e,t,a){e.exports={highlight:"Highlight-module--highlight--tuKuV",highlightWithPad:"Highlight-module--highlight-with-pad--33WoG",highlightUnderline:"Highlight-module--highlight-underline--3HJRf"}},175:function(e,t,a){e.exports={container:"SocialHandles-module--container--1fXsf",iconWobble:"SocialHandles-module--icon-wobble--2WLY7"}},179:function(e,t,a){e.exports={container:"NameBoard-module--container--1mKBR",separator:"NameBoard-module--separator--P641a",name:"NameBoard-module--name--3__D1",subWrapper:"NameBoard-module--sub-wrapper--1VZnX",sub:"NameBoard-module--sub--2P6Cv",dotSeparator:"NameBoard-module--dot-separator--2SlYC"}},180:function(e,t,a){e.exports={dotSeparator:"DotSeparator-module--dot-separator--2lI9M"}},181:function(e,t,a){e.exports={wrapper:"ShowcaseItem-module--wrapper--LFH4W",anchor:"ShowcaseItem-module--anchor--19rP_",desc:"ShowcaseItem-module--desc--2Rsot",title:"ShowcaseItem-module--title--3R72-",dotSeparatorWrapper:"ShowcaseItem-module--dot-separator-wrapper--2Sveo"}},182:function(e,t,a){e.exports={container:"IBuildSection-module--container--1XtL4",separator:"IBuildSection-module--separator--1kf4J",title:"IBuildSection-module--title--2ovTw",intro:"IBuildSection-module--intro--1MwRl",showcaseContainer:"IBuildSection-module--showcase-container--3gDmI",dotSeparator:"IBuildSection-module--dot-separator--3OQ59"}},183:function(e){e.exports={data:{allMarkdownRemark:{totalCount:11,edges:[{node:{id:"59a4037c-7fb6-57b1-9af7-dc85128e4248",frontmatter:{title:"2018 - Year In Review",description:"Reflecting on how I cruised through 2018",date:"January 4, 2019"},fields:{slug:"/2018-year-in-review/"},excerpt:"2018 has been an amazing year for me. I  learnt  new things,  built  a few things,  wrote  a handful of blog posts and  met  some amazing…"}},{node:{id:"1f00de35-e9d9-58ea-98ff-ae8640cb3510",frontmatter:{title:"Responsive React Components",description:"Render viewport specific components with a one-liner",date:"November 20, 2018"},fields:{slug:"/responsive-react-components/"},excerpt:"TL;DR  -  You can render viewport specific components in React with a one-liner React is awesome and the whole world agrees to it…"}},{node:{id:"7fb5cd92-ac1a-5f4f-b5ee-1e69b1b48a3f",frontmatter:{title:"Render Browser Specific Content",description:"Render browser specific components with a one-liner",date:"May 27, 2018"},fields:{slug:"/render-browser-specific-content-with-react/"},excerpt:"\n TL;DR  - You can render browser specific content in React with a one-liner. Have you ever wanted to put up a banner for all your IE users…"}},{node:{id:"6874a235-1ffe-584f-9403-006dd46a56ee",frontmatter:{title:"I Created My Portfolio with React and Some Magic",description:"Awesome Portfolio written in React",date:"April 1, 2018"},fields:{slug:"/portfolio-with-react/"},excerpt:"TL;DR  - I re-wrote my  portfolio  in React and added some niche tricks to make it look all shiny and rad. Everytime you refresh the page, a…"}},{node:{id:"3d0c3337-fca5-5b09-835e-b9d513bdc2f0",frontmatter:{title:"Upgrade to Webpack 4",description:"Upgrading your project from Webpack 3 to Webpack 4",date:"March 12, 2018"},fields:{slug:"/upgrade-to-webpack-4/"},excerpt:"Webpack 4   (codename Legato)  was released two weeks back. And it is packed with a lot of shiny features. Unlike Webpack 3, which was not a…"}},{node:{id:"fd188a93-77f2-52e2-bdf6-8219ecc7073f",frontmatter:{title:"React-Redux Boilerplate with Best Practices",description:"A minimal React-Redux starter template",date:"March 11, 2018"},fields:{slug:"/react-redux-boilerplate/"},excerpt:"TL;DR: There's an amazing  React-Redux Boilerplate . This post is based on what I learnt from setting it up. React  has been quite the talk…"}},{node:{id:"cbaa7cf0-7e88-554c-a670-32c87fc897ca",frontmatter:{title:"Publish your own NPM package",description:"Step by step tutorial to build npm libraries",date:"March 5, 2018"},fields:{slug:"/publish-your-own-npm-package/"},excerpt:"Note: There's an amazing boilerplate for  npm modules . This post is based on what I learned from setting it up. NPM has been become the de…"}},{node:{id:"9366e546-92a3-546f-9f0d-5d926384ef3b",frontmatter:{title:"Short Circuit Assignment in JavaScript",description:"Default values with short-circuit evaluation",date:"February 17, 2018"},fields:{slug:"/short-circuit-assignment-in-javascript/"},excerpt:"tldr;   Assign default value to a variable using short circuit evaluation, when expected value is not found. JavaScript is amazing. But most…"}},{node:{id:"ba3622d5-d4d2-522b-9217-55ce5aee34f3",frontmatter:{title:"Accessing Nested Objects in JavaScript",description:"Dealing with 'cannot read property of undefined' error",date:"February 10, 2018"},fields:{slug:"/accessing-nested-objects-in-javascript/"},excerpt:"tldr;   safely access nested objects in JavaScript in a super cool way. JavaScript is amazing, we all know that already. But a few things in…"}},{node:{id:"33993f9c-97f6-5c1c-9c53-16866fc6b110",frontmatter:{title:"Create your developer landing page with GitHub Pages",description:"Minimal Developer Landing Page in minutes",date:"February 9, 2018"},fields:{slug:"/dev-landing-page-with-github-pages/"},excerpt:"All of us devs, at one point or other, would have wanted to have a personal website of our own, either to showcase our online presence or…"}},{node:{id:"6e49ca07-8e21-51b1-bd38-df354aab7107",frontmatter:{title:"How I got started with Open-Source",description:"A quick-start guide for beginners to get started with Open-Source",date:"February 4, 2018"},fields:{slug:"/how-i-got-started-with-open-source/"},excerpt:"TLDR: I started with documentation instead of waiting for some big idea to get started. As most developers, I have also been wanting to get…"}}]}}}},184:function(e,t,a){e.exports={wrapper:"BlogItem-module--wrapper--2z1UY",anchor:"BlogItem-module--anchor--MU6Fu",desc:"BlogItem-module--desc--3XNt9",date:"BlogItem-module--date--16HWI",title:"BlogItem-module--title--3z-8b",dotSeparatorWrapper:"BlogItem-module--dot-separator-wrapper--1OepT"}},185:function(e,t,a){e.exports={container:"IBlogSection-module--container--1XJZb",separator:"IBlogSection-module--separator--1Yh9X",title:"IBlogSection-module--title--1N0f_",intro:"IBlogSection-module--intro--3ARQQ",showcaseContainer:"IBlogSection-module--showcase-container--3OIJf",dotSeparator:"IBlogSection-module--dot-separator--3GUS0"}}}]);
//# sourceMappingURL=component---src-pages-index-js-e107fa67024290341670.js.map