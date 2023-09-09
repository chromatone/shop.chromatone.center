import{S as T,g as u,U as d,V as o,W as p,X as v,Y as G,Z as y}from"./framework.46d917ad.js";var h="https://js.stripe.com/v3",g=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,S="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",E=function(){for(var e=document.querySelectorAll('script[src^="'.concat(h,'"]')),n=0;n<e.length;n++){var t=e[n];if(g.test(t.src))return t}return null},A=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",t=document.createElement("script");t.src="".concat(h).concat(n);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(t),t},C=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"2.1.2",startTime:n})},c=null,b=function(e){return c!==null||(c=new Promise(function(n,t){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&e&&console.warn(S),window.Stripe){n(window.Stripe);return}try{var a=E();a&&e?console.warn(S):a||(a=A(e)),a.addEventListener("load",function(){window.Stripe?n(window.Stripe):t(new Error("Stripe.js not available"))}),a.addEventListener("error",function(){t(new Error("Failed to load Stripe.js"))})}catch(l){t(l);return}})),c},B=function(e,n,t){if(e===null)return null;var a=e.apply(void 0,n);return C(a,t),a},M=Promise.resolve().then(function(){return b(null)}),m=!1;M.catch(function(r){m||console.warn(r)});var L=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];m=!0;var a=Date.now();return M.then(function(l){return B(l,n,a)})};function N(r,e,n){if(typeof r=="function"||T(r))return u(()=>d(o(r),o(e),o(n)));const t=p(r);return u({get(){return t.value=d(t.value,o(e),o(n))},set(a){t.value=d(a,o(e),o(n))}})}const R=["AC","AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CV","CW","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MK","ML","MM","MN","MO","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US","UY","UZ","VA","VC","VE","VG","VN","VU","WF","WS","XK","YE","YT","ZA","ZM","ZW","ZZ"],I=JSON.parse(`[{"id":"parcel","status":"published","sort":null,"user_updated":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_updated":"2023-09-09T15:51:51.742Z","title":"Registered mail","description":"Sending parcels with tracking numbers from Thailand is surprisingly costly. But it's more reliable and transparent as you and us can check the progress of the delivery. It usually takes about 2-3 weeks for a registered parcel to ship.","price":16},{"id":"stamp","status":"published","sort":null,"user_updated":"796b4fbf-a0d9-4eac-998a-49bf3f9ffe65","date_updated":"2023-09-09T15:51:56.672Z","title":"Regular post","description":"The most straightforward way to send a letter to any place. Just glue on stamps and drop it into a mailbox nearby. Regular post is slower and less predictable, but still does it's job well. We'll send you a notification upon sending the parcel, but then expect up to a 2-4 weeks of waiting time.","price":6}]`),V="pk_live_51M1WfLBJnUXQERocrGtVUDvfIdzMmecoAClLVFLSi2VG2cNF2kS6bVsR4uUVtMYvusv4lkBMaDuOzgVJUuNMWndm00CVS3obG3",P=5;p(!1);const w=p(!1),i=v("shopping-cart",{}),s=G({current:v("delivery-way","regular"),selected:u(()=>s.ways[s.current]),needed:u(()=>{let r=!1;for(let e in i.value)r=r||!i.value[e].digital;return r}),ways:I}),K=u(()=>{var e,n;let r=0;for(let t in i.value)r+=Number((n=(e=i.value)==null?void 0:e[t])==null?void 0:n.quantity);return r}),W=u(()=>{var e,n,t,a,l;let r=0;for(let f in i.value)r+=Number((n=(e=i.value)==null?void 0:e[f])==null?void 0:n.price)*Number((a=(t=i.value)==null?void 0:t[f])==null?void 0:a.quantity);return s.needed&&(r+=(l=s==null?void 0:s.selected)==null?void 0:l.price),r});y(i,r=>{Object.keys(r).length<=0&&(w.value=!1);for(let e in r)r[e].quantity<=0&&delete i.value[e]},{deep:!0});function F(r,{id:e,price:n,digital:t,path:a}){i.value[e]?i.value[e].quantity++:i.value[e]={id:e,title:r,price:n,quantity:N(1,0,P).value,digital:t,path:a},w.value=!0}async function Z(){const r=await L(V),e=[];for(let t in i.value)e.push({price:t,quantity:i.value[t].quantity});s.needed&&e.push({price:s.selected.id,quantity:1});const n={lineItems:e,mode:"payment",successUrl:"https://chromatone.center/shop/success.html",cancelUrl:"https://chromatone.center/shop/cancel.html",shippingAddressCollection:s.needed?{allowedCountries:R}:void 0};console.log(n);try{await(r==null?void 0:r.redirectToCheckout(n))}catch(t){console.log(t),alert(`checkout failed, ${t}`)}}export{F as a,K as b,i as c,s as d,Z as e,w as o,W as t};
