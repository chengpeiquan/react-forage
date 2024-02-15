(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6926:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(362)}])},362:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return x},default:function(){return g}});var r=n(5250),a=n(4475),s=n(8019),l=n(1239);n(1199);var i=n(483),o=n(8504),c=n(79),d=n(4675),u=n(4113),h=n(2687);let f=()=>{let{isDark:e}=(0,u.MU)(),{logo:t}=(0,u.uP)(),[n,a]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{a(e)},[e]),(0,r.jsxs)("div",{className:"flex flex-col items-center gap-20 w-full text-center my-32",children:[(0,r.jsxs)("div",{className:"flex flex-col luster",children:[(0,r.jsx)("div",{className:"w-48 h-48 mx-auto select-none",children:(0,r.jsx)("img",{className:"w-full h-full pointer-events-none",src:t,alt:""})}),(0,r.jsx)("h2",{className:"font-bold headline mb-8",children:d.OY}),(0,r.jsx)("p",{className:"max-w-80 lg:max-w-96 mx-auto text-sm lg:text-base select-none",children:d.NX})]}),n&&(0,r.jsx)("div",{className:"aperture"}),(0,r.jsx)(h.Qj,{icon:!1,href:"/getting-started",children:"Get Started"})]})},x=[{depth:2,value:"Installation",id:"installation"},{depth:2,value:"Examples",id:"examples"},{depth:3,value:"Store state into IndexedDB",id:"store-state-into-indexeddb"},{depth:3,value:"Store complex types of data",id:"store-complex-types-of-data"},{depth:3,value:"Custom serialization and deserialization functions",id:"custom-serialization-and-deserialization-functions"},{depth:3,value:"Drops store of the current instance",id:"drops-store-of-the-current-instance"}];function m(e){let t=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",span:"span",h3:"h3"},(0,i.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),"\n",(0,r.jsxs)(h.W2,{children:[(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),(0,r.jsx)(t.p,{children:"Install the module with your favorite package manager:"}),(0,r.jsxs)(o.mQ,{items:["npm","pnpm","yarn"],children:[(0,r.jsx)(o.OK,{children:(0,r.jsx)(t.pre,{"data-language":"shell","data-theme":"default",filename:"Terminal",hasCopyCode:!0,children:(0,r.jsx)(t.code,{"data-language":"shell","data-theme":"default",children:(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"react-forage"})]})})})}),(0,r.jsx)(o.OK,{children:(0,r.jsx)(t.pre,{"data-language":"shell","data-theme":"default",filename:"Terminal",hasCopyCode:!0,children:(0,r.jsx)(t.code,{"data-language":"shell","data-theme":"default",children:(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"react-forage"})]})})})}),(0,r.jsx)(o.OK,{children:(0,r.jsx)(t.pre,{"data-language":"shell","data-theme":"default",filename:"Terminal",hasCopyCode:!0,children:(0,r.jsx)(t.code,{"data-language":"shell","data-theme":"default",children:(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string)"},children:"react-forage"})]})})})})]}),(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),(0,r.jsxs)(t.p,{children:["In the following example, state data will be stored in IndexedDB. You can switch to the Application panel in the browser console (press ",(0,r.jsx)(t.code,{children:"F12"}),"). In IndexedDB, you can see a database named ",(0,r.jsx)(t.code,{children:"react-forage-website"})," and a data table named ",(0,r.jsx)(t.code,{children:"examples"}),"."]}),(0,r.jsxs)(h.mU,{children:[(0,r.jsx)(t.h3,{id:"store-state-into-indexeddb",children:"Store state into IndexedDB"}),(0,r.jsxs)(h.UB,{children:[(0,r.jsx)(t.p,{children:"Refresh this page and you will get the state from IndexedDB."}),(0,r.jsx)(h.Ck,{})]}),(0,r.jsx)(t.h3,{id:"store-complex-types-of-data",children:"Store complex types of data"}),(0,r.jsxs)(h.UB,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"useLocalForageState"})," hook will do the serialization and deserialization\nwork automatically."]}),(0,r.jsx)(h.lR,{})]}),(0,r.jsx)(t.h3,{id:"custom-serialization-and-deserialization-functions",children:"Custom serialization and deserialization functions"}),(0,r.jsxs)(h.UB,{children:[(0,r.jsxs)(t.p,{children:["You may not need the default ",(0,r.jsx)(t.code,{children:"JSON.stringify"})," or ",(0,r.jsx)(t.code,{children:"JSON.parse"})," to serialize\nstring."]}),(0,r.jsx)(h.B3,{})]}),(0,r.jsx)(t.h3,{id:"drops-store-of-the-current-instance",children:"Drops store of the current instance"}),(0,r.jsxs)(h.UB,{children:[(0,r.jsx)(t.p,{children:"Please open the console to view the database changes of IndexedDB. When\ninvoked with no arguments, it drops the “store” of the current instance."}),(0,r.jsx)(h.m4,{})]})]})]})]})}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.a)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)},pageOpts:{filePath:"pages/index.mdx",route:"/",pageMap:[{kind:"Meta",data:{index:{title:"Home",theme:{layout:"full",breadcrumb:!1,footer:!0,sidebar:!1,toc:!1,pagination:!1}},"getting-started":{title:"Getting Started",theme:{breadcrumb:!1}},"api-reference":{title:"API Reference",theme:{breadcrumb:!1}},changelog:{title:"Release Notes",type:"page",href:"https://github.com/chengpeiquan/react-forage/blob/main/CHANGELOG.md",newWindow:!0},"localforage-api":{title:"LocalForage API",type:"page",href:"https://localforage.github.io/localForage/",newWindow:!0}}},{kind:"MdxPage",name:"api-reference",route:"/api-reference"},{kind:"MdxPage",name:"getting-started",route:"/getting-started"},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Index",headings:x},pageNextRoute:"/",nextraLayout:s.ZP,themeConfig:l.Z};var g=(0,a.j)(p)},2687:function(e,t,n){"use strict";n.d(t,{lR:function(){return B},Ck:function(){return _},W2:function(){return R},m4:function(){return z},mU:function(){return E},UB:function(){return D},Qj:function(){return L},B3:function(){return P}});var r,a,s=n(5250),l=n(79),i=n(9577),o=n(6265),c=n.n(o),d=n(7443),u=n(5829),h=(r=l.useEffect,(e,t)=>{let n=(0,l.useRef)(!1);r(()=>()=>{n.current=!1},[]),r(()=>{if(n.current)return e();n.current=!0},t)}),f=(0,l.createContext)({config:{},localforage:u}),x=({config:e={},children:t})=>{let n=(0,l.useMemo)(()=>u.createInstance(e),[e]);return l.createElement(f.Provider,{value:{config:e,localforage:n}},t)},m=()=>(0,l.useContext)(f),p=(e,t={})=>{let n,r,{localforage:a}=m(),{onError:s=e=>{console.error(e)}}=t,i=e=>t.serializer?t.serializer(e):JSON.stringify(e),o=e=>t.deserializer?t.deserializer(e):JSON.parse(e),c=()=>"function"==typeof t.defaultValue?(0,t.defaultValue)():t.defaultValue,u=async()=>{try{let t=await a?.getItem(e);if(t)return o(t)}catch(e){s(e)}return c()},[f,x]=(0,l.useState)(c()),p=t=>{let n="function"==typeof t?t(f):t;if(x(n),typeof n>"u")a?.removeItem(e);else try{a?.setItem(e,i(n))}catch(e){console.error(e)}},g=()=>{u().then(e=>p(e)).catch(e=>s(e))};return(0,l.useEffect)(()=>{g()},[]),h(()=>{g()},[e]),[f,((d.bM||d.If)&&"function"!=typeof p&&console.error(`useMemoizedFn expected parameter is a function, got ${typeof p}`),(n=(0,l.useRef)(p)).current=(0,l.useMemo)(()=>p,[p]),(r=(0,l.useRef)()).current||(r.current=function(...e){return n.current.apply(this,e)}),r.current)]},g=((a=g||{}).IndexedDB="asyncStorage",a.WebSQL="webSQLStorage",a.LocalStorage="localStorageWrapper",a);let j=e=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...e,children:(0,s.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",children:[(0,s.jsx)("path",{strokeLinejoin:"round",d:"M21 3h-6m6 0l-9 9m9-9v6"}),(0,s.jsx)("path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"})]})}),v=e=>(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...e,children:[(0,s.jsx)("path",{fill:"currentColor",d:"M15.729 3.884c1.434-1.44 3.532-1.47 4.693-.304c1.164 1.168 1.133 3.28-.303 4.72l-2.423 2.433a.75.75 0 0 0 1.062 1.059l2.424-2.433c1.911-1.919 2.151-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.819 7.692c-1.911 1.919-2.151 4.982-.303 6.837a.75.75 0 1 0 1.063-1.058c-1.164-1.168-1.132-3.28.303-4.72z"}),(0,s.jsx)("path",{fill:"currentColor",d:"M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.133 3.279-.303 4.72l-4.847 4.866c-1.435 1.44-3.533 1.47-4.694.304c-1.164-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 0 0-1.063-1.059l-2.424 2.433c-1.911 1.92-2.151 4.982-.303 6.838c1.85 1.858 4.907 1.615 6.82-.304l4.847-4.867c1.911-1.918 2.151-4.982.303-6.837"})]});var b=n(9747),k=n(1009),w=n(5958);function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,w.m6)((0,i.W)(t))}let N=(0,k.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),C=l.forwardRef((e,t)=>{let{className:n,variant:r,size:a,asChild:l=!1,...i}=e,o=l?b.g7:"button";return(0,s.jsx)(o,{className:y(N({variant:r,size:a,className:n})),ref:t,...i})});C.displayName="Button";let I=l.forwardRef((e,t)=>{let{className:n,type:r,...a}=e;return(0,s.jsx)("input",{type:r,className:y("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...a})});I.displayName="Input";let M="Hello~",O=["a","e","i","o","u"],S={wrapper:(0,i.Z)("flex items-center gap-2"),colWrapper:(0,i.Z)("flex flex-col gap-2")},z=()=>{let{localforage:e}=m();return(0,s.jsx)(C,{variant:"outline",onClick:()=>e.dropInstance(),children:"Drop Instance"})},P=()=>{let[e,t]=p("use-local-forage-state-demo-3",{defaultValue:M,serializer:e=>null!=e?e:"",deserializer:e=>e});return(0,s.jsxs)("div",{className:S.wrapper,children:[(0,s.jsx)(I,{value:e||"",placeholder:"Please enter some words...",onChange:e=>t(e.target.value)}),(0,s.jsx)(C,{variant:"outline",onClick:()=>t(M),children:"Reset"}),(0,s.jsx)(C,{variant:"outline",onClick:()=>t(void 0),children:"Clear"})]})},B=()=>{let[e,t]=p("use-local-forage-state-demo-2",{defaultValue:O});return(0,s.jsxs)("div",{className:S.colWrapper,children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(C,{variant:"outline",onClick:()=>t([...e,(0,d.O1)().slice(-1)]),children:"Push Random"}),(0,s.jsx)(C,{variant:"outline",onClick:()=>t(O),children:"reset"})]}),(0,s.jsx)("p",{children:null==e?void 0:e.join("-")})]})},_=()=>{let[e,t]=p("use-local-forage-state-demo-1",{defaultValue:M});return(0,s.jsxs)("div",{className:S.wrapper,children:[(0,s.jsx)(I,{value:e||"",placeholder:"Please enter some words...",onChange:e=>t(e.target.value)}),(0,s.jsx)(C,{variant:"outline",onClick:()=>t(M),children:"Reset"}),(0,s.jsx)(C,{variant:"outline",onClick:()=>t(void 0),children:"Clear"})]})},R=e=>{let{children:t}=e;return(0,s.jsx)(x,{config:{name:"react-forage-website",storeName:"examples"},children:(0,s.jsx)("div",{className:"max-w-screen-md mx-auto",children:t})})},E=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:"flex flex-col w-full",children:t})},D=e=>{let{children:t}=e,n=(0,i.Z)("flex flex-col gap-3 w-full box-border py-3 px-4 mt-3 rounded-xl","bg-[var(--code-block-bg)]");return(0,s.jsx)("div",{className:n,children:t})},L=e=>{let{icon:t=!0,secondary:n=!1,href:r,target:a,children:o}=e,d=n?"secondary":"default",u=(0,l.useMemo)(()=>"_blank"===a,[a]),h=(0,l.useMemo)(()=>u?"noreferrer":void 0,[u]),f=(0,l.useMemo)(()=>t?a?(0,s.jsx)(j,{className:"mr-2"}):(0,s.jsx)(v,{className:"mr-2"}):null,[t,a]),x=(0,i.Z)({"mr-2 mt-6":n});return(0,s.jsx)(C,{asChild:!0,variant:d,className:x,children:(0,s.jsxs)(c(),{href:r,target:a,rel:h,children:[f,(0,s.jsx)("span",{className:"font-bold",children:o})]})})}},4113:function(e,t,n){"use strict";n.d(t,{Kf:function(){return u},MU:function(){return c},uP:function(){return d}});var r=n(5250),a=n(79),s=n(8407),l=n(8019),i=n(7443),o=n(4675);function c(){let{resolvedTheme:e}=(0,s.F)();return{isDark:(0,a.useMemo)(()=>!!i.sk||"dark"===e,[e])}}function d(){return{logo:"/assets/".concat(o.c3,".png")}}function u(){let{title:e}=(0,l.ZR)(),{isDark:t}=c(),n="".concat(o.oY,"/assets/og.jpg"),s=(0,a.useMemo)(()=>t?"/favicon-dark.ico":"/favicon.ico",[t]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#fff"}),(0,r.jsx)("meta",{name:"theme-color",content:"#fff"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,r.jsx)("meta",{name:"description",content:o.NX}),(0,r.jsx)("meta",{name:"og:description",content:o.NX}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:image:src",content:n}),(0,r.jsx)("meta",{name:"twitter:site:domain",content:o.j$}),(0,r.jsx)("meta",{name:"twitter:url",content:o.oY}),(0,r.jsx)("meta",{name:"og:title",content:e?e+" – ".concat(o.OY):o.OY}),(0,r.jsx)("meta",{name:"og:image",content:n}),(0,r.jsx)("meta",{name:"apple-mobile-web-app-title",content:o.OY}),(0,r.jsx)("link",{rel:"icon",href:s})]})}},1239:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5250),a=n(79),s=n(3509),l=n(4675),i=n(4113),o=JSON.parse('{"v":"chengpeiquan <chengpeiquan@chengpeiquan.com>","Vl":"MIT"}'),c={logo:(0,r.jsx)(()=>{let{logo:e}=(0,i.uP)();return(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("img",{className:"flex flex-shrink-0 w-6 rounded select-none pointer-events-none",src:e,alt:l.OY}),(0,r.jsx)("span",{className:"luster",children:l.OY})]})},{}),gitTimestamp:()=>null,head:i.Kf,footer:{text:(0,r.jsx)(()=>{let e=(0,a.useMemo)(()=>{let[e]=o.v.split(" ");return e},[]),t=(0,a.useMemo)(()=>"https://github.com/".concat(e),[e]);return(0,r.jsxs)("span",{children:[o.Vl," 2024-PRESENT \xa9"," ",(0,r.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:e}),"."]})},{})},editLink:{component:null},feedback:{content:null},useNextSeoProps(){let{asPath:e}=(0,s.useRouter)();return{titleTemplate:"/"===e?l.OY:"%s – ".concat(l.OY)}},project:{link:l.Bv}}}},function(e){e.O(0,[717,774,888,179],function(){return e(e.s=6926)}),_N_E=e.O()}]);