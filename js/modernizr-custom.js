/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-classlist-flexbox-formvalidation-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function i(){var e,n,t,i,o,s,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),h.push((i?"":"no-")+a.join("-"))}}function o(e){var n=b.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?b.className.baseVal=n:b.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=s(x?"svg":"body"),e.fake=!0),e}function l(e,t,r,i){var o,l,f,u,d="modernizr",p=s("div"),c=a();if(parseInt(r,10))for(;r--;)f=s("div"),f.id=i?i[r]:d+(r+1),p.appendChild(f);return o=s("style"),o.type="text/css",o.id="s"+d,(c.fake?c:p).appendChild(o),c.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(c)),l=t(p,e),c.fake?(c.parentNode.removeChild(c),b.style.overflow=u,b.offsetHeight):p.parentNode.removeChild(p),!!l}function f(e,n){return!!~(""+e).indexOf(n)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var i;for(var o in e)if(e[o]in n)return t===!1?e[o]:(i=n[e[o]],r(i,"function")?d(i,t||n):i);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,r){var i=n.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(c(n[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+c(n[i])+":"+r+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,i,o){function a(){d&&(delete N.style,delete N.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var l=m(e,i);if(!r(l,"undefined"))return l}for(var d,p,c,v,g,y=["modernizr","tspan","samp"];!N.style&&y.length;)d=!0,N.modElem=s(y.shift()),N.style=N.modElem.style;for(c=e.length,p=0;c>p;p++)if(v=e[p],g=N.style[v],f(v,"-")&&(v=u(v)),N.style[v]!==t){if(o||r(i,"undefined"))return a(),"pfx"==n?v:!0;try{N.style[v]=i}catch(h){}if(N.style[v]!=g)return a(),"pfx"==n?v:!0}return a(),!1}function g(e,n,t,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,i,o):(a=(e+" "+T.join(s+" ")+s).split(" "),p(a,n,t))}function y(e,n,r){return g(e,t,t,n,r)}var h=[],C=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var b=n.documentElement;Modernizr.addTest("classlist","classList"in b);var x="svg"===b.nodeName.toLowerCase(),_=w.testStyles=l;Modernizr.addTest("formvalidation",function(){var n=s("form");if(!("checkValidity"in n&&"addEventListener"in n))return!1;if("reportValidity"in n)return!0;var t,r=!1;return Modernizr.formvalidationapi=!0,n.addEventListener("submit",function(n){(!e.opera||e.operamini)&&n.preventDefault(),n.stopPropagation()},!1),n.innerHTML='<input name="modTest" required="required" /><button></button>',_("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(n),t=n.getElementsByTagName("input")[0],t.addEventListener("invalid",function(e){r=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!t.validationMessage,n.getElementsByTagName("button")[0].click()}),r});var S="Moz O ms Webkit",E=w._config.usePrefixes?S.split(" "):[];w._cssomPrefixes=E;var T=w._config.usePrefixes?S.toLowerCase().split(" "):[];w._domPrefixes=T;var P={elem:s("modernizr")};Modernizr._q.push(function(){delete P.elem});var N={style:P.elem.style};Modernizr._q.unshift(function(){delete N.style}),w.testAllProps=g,w.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),i(),o(h),delete w.addTest,delete w.addAsyncTest;for(var z=0;z<Modernizr._q.length;z++)Modernizr._q[z]();e.Modernizr=Modernizr}(window,document);