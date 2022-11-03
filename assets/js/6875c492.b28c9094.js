"use strict";(self.webpackChunkWinwoo_blog=self.webpackChunkWinwoo_blog||[]).push([[8610],{9703:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(5999),o=a(2244);function c(e){const{metadata:t}=e,{previousPage:a,nextPage:c}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(o.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),c&&n.createElement(o.Z,{permalink:c,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(9460),o=a(390);function c(e){let{items:t,component:a=o.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(7294),l=a(6010),o=a(5999),c=a(8824),s=a(833),r=a(5281),i=a(9960),m=a(9058),g=a(9703),d=a(197),u=a(9985);function p(e){const t=function(){const{selectMessage:e}=(0,c.c)();return t=>e(t,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function b(e){let{tag:t}=e;const a=p(t);return n.createElement(n.Fragment,null,n.createElement(s.d,{title:a}),n.createElement(d.Z,{tag:"blog_tags_posts"}))}function E(e){let{tag:t,items:a,sidebar:l,listMetadata:c}=e;const s=p(t);return n.createElement(m.Z,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,s),n.createElement(i.Z,{href:t.allTagsPath},n.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(u.Z,{items:a}),n.createElement(g.Z,{metadata:c}))}function h(e){return n.createElement(s.FG,{className:(0,l.Z)(r.k.wrapper.blogPages,r.k.page.blogTagPostListPage)},n.createElement(b,e),n.createElement(E,e))}},2373:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010),o=a(6505),c=a(9500);function s(e){let{children:t,className:a}=e;return n.createElement(o.Z,{as:"pre",tabIndex:0,className:(0,l.Z)(c.Z.codeBlockStandalone,"thin-scrollbar",a)},n.createElement("code",{className:c.Z.codeBlockLines},t))}},3213:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(7462),l=a(7294),o=a(6010),c=a(6668),s=a(6412),r=a(7016),i=a(5448),m=a(3746),g=a(8397),d=a(5291),u=a(2601),p=a(6505),b=a(9500);function E(e){let{children:t,className:a="",metastring:E,title:h,showLineNumbers:Z,language:k}=e;const{prism:{defaultLanguage:N,magicComments:B}}=(0,c.L)(),f=k??(0,r.Vo)(a)??N,v=(0,s.p)(),L=(0,i.F)(),P=(0,r.bc)(E)||h,{lineClassNames:w,code:T}=(0,r.nZ)(t,{metastring:E,language:f,magicComments:B}),_=Z??(0,r.nt)(E);return l.createElement(p.Z,{as:"div",className:(0,o.Z)(a,f&&!a.includes(`language-${f}`)&&`language-${f}`)},P&&l.createElement("div",{className:b.Z.codeBlockTitle},P),l.createElement("div",{className:b.Z.codeBlockContent},l.createElement(m.ZP,(0,n.Z)({},m.lG,{theme:v,code:T,language:f??"text"}),(e=>{let{className:t,tokens:a,getLineProps:n,getTokenProps:c}=e;return l.createElement("pre",{tabIndex:0,ref:L.codeBlockRef,className:(0,o.Z)(t,b.Z.codeBlock,"thin-scrollbar")},l.createElement("code",{className:(0,o.Z)(b.Z.codeBlockLines,_&&b.Z.codeBlockLinesWithNumbering)},a.map(((e,t)=>l.createElement(g.Z,{key:t,line:e,getLineProps:n,getTokenProps:c,classNames:w[t],showLineNumbers:_})))))})),l.createElement("div",{className:b.Z.buttonGroup},(L.isEnabled||L.isCodeScrollable)&&l.createElement(u.Z,{className:b.Z.codeButton,onClick:()=>L.toggle(),isEnabled:L.isEnabled}),l.createElement(d.Z,{className:b.Z.codeButton,code:T}))))}},9500:(e,t,a)=>{a.d(t,{Z:()=>n});const n={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"}}}]);