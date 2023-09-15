import{U as A,l,V as d,W as u,X as p,Y as v,Z as C,$ as m}from"./framework.7102fc9b.js";import{d as w}from"./shop.data.c551d8dc.js";var M="https://js.stripe.com/v3",h=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,S="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",y=function(){for(var e=document.querySelectorAll('script[src^="'.concat(M,'"]')),n=0;n<e.length;n++){var t=e[n];if(h.test(t.src))return t}return null},L=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",t=document.createElement("script");t.src="".concat(M).concat(n);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(t),t},B=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"2.1.2",startTime:n})},c=null,N=function(e){return c!==null||(c=new Promise(function(n,t){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&e&&console.warn(S),window.Stripe){n(window.Stripe);return}try{var a=y();a&&e?console.warn(S):a||(a=L(e)),a.addEventListener("load",function(){window.Stripe?n(window.Stripe):t(new Error("Stripe.js not available"))}),a.addEventListener("error",function(){t(new Error("Failed to load Stripe.js"))})}catch(s){t(s);return}})),c},R=function(e,n,t){if(e===null)return null;var a=e.apply(void 0,n);return B(a,t),a},G=Promise.resolve().then(function(){return N(null)}),E=!1;G.catch(function(r){E||console.warn(r)});var I=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];E=!0;var a=Date.now();return G.then(function(s){return R(s,n,a)})};function V(r,e,n){if(typeof r=="function"||A(r))return l(()=>d(u(r),u(e),u(n)));const t=p(r);return l({get(){return t.value=d(t.value,u(e),u(n))},set(a){t.value=d(a,u(e),u(n))}})}const P=["AC","AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CV","CW","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MK","ML","MM","MN","MO","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US","UY","UZ","VA","VC","VE","VG","VN","VU","WF","WS","XK","YE","YT","ZA","ZM","ZW","ZZ"],{delivery_types:U}=w,g="pk_live_51M1WfLBJnUXQERocrGtVUDvfIdzMmecoAClLVFLSi2VG2cNF2kS6bVsR4uUVtMYvusv4lkBMaDuOzgVJUuNMWndm00CVS3obG3",K=5;p(!1);const T=p(!1),i=v("shopping-cart",{}),o=C({current:v("delivery-way","regular"),selected:l(()=>o.ways[o.current]),needed:l(()=>{let r=!1;for(let e in i.value)r=r||!i.value[e].digital;return r}),ways:U}),D=l(()=>{var e,n;let r=0;for(let t in i.value)r+=Number((n=(e=i.value)==null?void 0:e[t])==null?void 0:n.quantity);return r}),O=l(()=>{var e,n,t,a,s;let r=0;for(let f in i.value)r+=Number((n=(e=i.value)==null?void 0:e[f])==null?void 0:n.price)*Number((a=(t=i.value)==null?void 0:t[f])==null?void 0:a.quantity);return o.needed&&(r+=(s=o==null?void 0:o.selected)==null?void 0:s.price),r});m(i,r=>{Object.keys(r).length<=0&&(T.value=!1);for(let e in r)r[e].quantity<=0&&delete i.value[e]},{deep:!0});function Z(r,{id:e,price:n,digital:t,path:a}){i.value[e]?i.value[e].quantity++:i.value[e]={id:e,title:r,price:n,quantity:V(1,0,K).value,digital:t,path:a},T.value=!0}async function b(){const r=await I(g),e=[];for(let t in i.value)e.push({price:t,quantity:i.value[t].quantity});o.needed&&e.push({price:o.selected.id,quantity:1});const n={lineItems:e,mode:"payment",successUrl:"https://shop.chromatone.center/success/",cancelUrl:"https://shop.chromatone.center/cancel/",shippingAddressCollection:o.needed?{allowedCountries:P}:void 0};try{await(r==null?void 0:r.redirectToCheckout(n))}catch(t){console.log(t),alert(`checkout failed, ${t}`)}}export{D as a,b,i as c,o as d,Z as e,T as o,O as t};
