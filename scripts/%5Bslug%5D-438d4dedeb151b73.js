(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2492],{41127:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(16051)}])},33004:function(e,t,n){"use strict";var l=n(85893);n(67294);t.Z=function(e){var t=e.loading,n=e.loadingText;return t?(0,l.jsx)("div",{className:"absolute left-0 right-0 z-0 ml-auto mr-auto h-[100%] w-[100%] ",children:(0,l.jsx)("div",{role:"status",className:"absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 ",children:(0,l.jsxs)("div",{className:"flex flex-row justify-center items-center gap-3",children:[(0,l.jsxs)("svg",{"aria-hidden":"true",className:"text-gray-300 h-6 w-6 animate-spin fill-gray-700",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,l.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),!!(null===n||void 0===n?void 0:n.length)&&(0,l.jsx)("span",{className:"text-gray-300 dark:text-zinc-600 text-base",children:n})]})})}):null}},75494:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var l=n(85893),i=n(67294);var r=i.forwardRef((function({title:e,titleId:t,...n},l){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},n),e?i.createElement("title",{id:t},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"}))})),o=n(88045),a=[{name:"Twitter",specialHref:function(e){return"https://twitter.com/share?url=".concat(encodeURIComponent(e),"&text=Check this article out.")},icon:(0,l.jsx)("img",{src:"/logos/twitter_logo.png",className:"w-4 h-4 shrink-0"})},{name:"Link",icon:(0,l.jsx)(r,{className:"w-4 h-4 shrink-0 text-[#5f5f5f]"})}],s=function(e){var t=e.articleId,n=(0,i.useState)(!1),r=n[0],s=n[1],c="https://jito.network/blog/".concat(t),d=(0,o.$G)().t,u=function(e){e.specialHref?window.open(e.specialHref(c),"_blank"):navigator.share?navigator.share({title:"Check this out!",url:c}).then((function(){return console.log("Successful share")})).catch((function(e){return console.log("Error sharing",e)})):navigator.clipboard.writeText(c).then((function(){console.log("Link copied to clipboard"),s(!0),setTimeout((function(){return s(!1)}),2e3)})).catch((function(e){return console.error("Could not copy text: ",e)}))};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"w-full flex flex-col items-start",children:[(0,l.jsx)("div",{className:"text-sm font-medium text-medium-gray dark:text-darkmode-medium-gray mt-3 md:mt-1 hidden sm:block",children:d("Share")}),(0,l.jsx)("div",{className:"flex space-x-4 mt-[11px]",children:a.map((function(e){return(0,l.jsxs)("div",{onClick:function(){return u(e)},className:"hover:text-white jito-gray-4 shrink-0 ",children:[(0,l.jsx)("span",{className:"sr-only",children:d(e.name)}),(0,l.jsx)("div",{className:"border border-zinc-800 dark:border-zinc-700 rounded-full hover:bg-light-gray dark:bg-zinc-900 transition-colors cursor-pointer p-[6px]",children:e.icon})]},e.name)}))})]}),r&&(0,l.jsx)("div",{className:"fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-5 py-3 px-8 text-gray-300 bg-gray-800 rounded-xl shadow-md z-10",children:d("Copied to clipboard!")})]})},c=n(25675),d=n.n(c),u=function(e){var t=e.writerName;return(0,l.jsxs)("div",{className:"flex flex-row gap-2 items-center pb-1",children:[(0,l.jsx)("div",{className:"hidden sm:block relative w-12 h-12 shrink-0 rounded-full overflow-hidden",children:(0,l.jsx)(d(),{src:"/jito_small.png",layout:"fill",objectFit:"cover",alt:"Writer Avatar"})}),(0,l.jsx)("div",{className:"flex flex-col sm:ml-[6px] pt-[2px]",children:(0,l.jsx)("div",{className:"text-lg leading-6 font-medium text-gray-600 dark:text-darkmode-medium-gray",children:t})})]})},m=n(41664),x=n.n(m),h=n(9008),g=n.n(h),f=n(52913),p=n(66404),v=n.n(p),j=function(e){var t,n,r,a=e.post,c=(0,i.useRef)(null),d=(0,o.$G)().t,m=null===(t=new Date(null===a||void 0===a?void 0:a.published_at))||void 0===t?void 0:t.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});return(0,i.useEffect)((function(){if(c.current)for(var e=c.current.getElementsByTagName("a"),t=0;t<e.length;t++)e[t].setAttribute("target","_blank"),e[t].setAttribute("rel","noopener noreferrer")}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(g(),{children:[(0,l.jsxs)("title",{children:[(null===a||void 0===a?void 0:a.title)||"Blog Article"," | Jito Foundation"]}),(0,l.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,l.jsx)("meta",{name:"description",content:(null===a||void 0===a?void 0:a.excerpt)||"Technical blog for Jito Foundation."},"desc"),(0,l.jsx)("meta",{name:"keywords",content:"Jito Foundation, Blog, Solana, Articles, Projects, Updates"}),(0,l.jsx)("meta",{property:"og:title",content:((null===a||void 0===a?void 0:a.title)||"Blog Article")+" Jito Foundation"}),(0,l.jsx)("meta",{property:"og:description",content:(null===a||void 0===a?void 0:a.excerpt)||"Technical blog for Jito Foundation."}),(0,l.jsx)("meta",{property:"og:type",content:"article"}),(0,l.jsx)("meta",{property:"article:author",content:"Jito Foundation"}),(0,l.jsx)("meta",{property:"article:published_time",content:new Date(null===a||void 0===a?void 0:a.published_at).toISOString()}),(0,l.jsx)("meta",{property:"og:image",content:(r=null===a||void 0===a?void 0:a.feature_image,(r?"https://jito.network/api/imageproxy?imageUrl=".concat(encodeURIComponent(r)):r)||"https://www.jito.network/jitoBig.png")}),(0,l.jsx)("meta",{property:"og:url",content:"https://www.jito.network/blog/".concat(null===a||void 0===a?void 0:a.slug,"/")}),(0,l.jsx)("link",{rel:"canonical",href:"https://www.jito.network/blog/".concat(null===a||void 0===a?void 0:a.slug,"/")})]}),(0,l.jsx)("div",{className:"z-10 pt-3 w-full mt-12 flex flex-col items-center px-4 md:px-20",children:(0,l.jsxs)("div",{className:"grid grid-cols-5 gap-x-8 w-full max-w-7xl px-0 lg:px-20",children:[(0,l.jsxs)("div",{className:"col-span-5 lg:col-span-4 flex flex-col items-start px-4 lg:px-8",children:[(0,l.jsx)("div",{className:"text-sm font-light text-gray-500 mb-6 ",children:(0,l.jsx)(x(),{href:"/blog",children:(0,l.jsx)("a",{children:(0,l.jsxs)("div",{className:"border border-gray-500 rounded-full py-1 px-3 -ml-1 flex flex-row items-center",children:[(0,l.jsx)(f.Z,{className:"w-3 h-3 shrink-0 mr-[6px]"}),d("Blog")]})})})}),(0,l.jsxs)("div",{className:"flex flex-row items-center text-sm font-normal text-left text-medium-gray dark:text-darkmode-medium-gray mb-2",children:[m,!!(null===a||void 0===a?void 0:a.reading_time)&&" \u2022 "+a.reading_time+" minute reading time"]}),(0,l.jsx)("h1",{className:"text-4xl leading-none text-black dark:text-zinc-200 font-semibold text-left max-w-4xl",children:null===a||void 0===a?void 0:a.title}),(0,l.jsxs)("div",{className:"flex-col flex lg:hidden mt-3",children:[(0,l.jsx)(u,{writerName:"Jito Foundation"}),(0,l.jsx)(s,{articleId:null===a||void 0===a?void 0:a.slug})]}),(0,l.jsx)("div",{className:"relative w-full rounded-xl mb-4 overflow-hidden mt-6",children:(0,l.jsx)("img",{src:null!==(n=null===a||void 0===a?void 0:a.feature_image)&&void 0!==n?n:"/jitoBig.png",style:{width:"100%",height:"auto"},alt:"Solana HFT"})}),(0,l.jsx)("div",{className:v().blogContent,ref:c,dangerouslySetInnerHTML:{__html:null===a||void 0===a?void 0:a.html}})]}),(0,l.jsxs)("div",{className:"col-span-5 lg:col-span-1 flex-col items-start hidden lg:flex",children:[(0,l.jsx)(u,{writerName:"Jito Foundation"}),(0,l.jsx)(s,{articleId:null===a||void 0===a?void 0:a.slug})]})]})})]})}},16051:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return a}});var l=n(85893),i=(n(67294),n(75494)),r=n(11163),o=n(33004),a=!0;t.default=function(e){var t=e.post;return(0,r.useRouter)().isFallback?(0,l.jsx)("div",{className:"mt-8 lg:mt-0 min-h-screen",children:(0,l.jsx)(o.Z,{loading:!0})}):(0,l.jsx)("div",{className:"mt-8 lg:mt-0 min-h-screen",children:(0,l.jsx)(i.Z,{post:t})})}},66404:function(e){e.exports={blogContent:"BlogItem_blogContent__4fRLh"}},52913:function(e,t,n){"use strict";var l=n(67294);const i=l.forwardRef((function({title:e,titleId:t,...n},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},n),e?l.createElement("title",{id:t},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"}))}));t.Z=i}},function(e){e.O(0,[9774,2888,179],(function(){return t=41127,e(e.s=t);var t}));var t=e.O();_N_E=t}]);