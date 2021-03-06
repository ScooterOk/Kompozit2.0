!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(T,e){"use strict";var t=[],S=T.document,i=Object.getPrototypeOf,a=t.slice,v=t.concat,l=t.push,o=t.indexOf,n={},r=n.toString,g=n.hasOwnProperty,s=g.toString,c=s.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},w=function(e){return null!=e&&e===e.window},d={type:!0,src:!0,noModule:!0};function k(e,t,n){var i,o=(t=t||S).createElement("script");if(o.text=e,n)for(i in d)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function b(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[r.call(e)]||"object":typeof e}var C=function(e,t){return new C.fn.init(e,t)},u=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function p(e){var t=!!e&&"length"in e&&e.length,n=b(e);return!m(e)&&!w(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}C.fn=C.prototype={jquery:"3.3.1",constructor:C,length:0,toArray:function(){return a.call(this)},get:function(e){return null==e?a.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=C.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return C.each(this,e)},map:function(n){return this.pushStack(C.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:t.sort,splice:t.splice},C.extend=C.fn.extend=function(){var e,t,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||m(s)||(s={}),a===l&&(s=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],s!==(i=e[t])&&(c&&i&&(C.isPlainObject(i)||(o=Array.isArray(i)))?(o?(o=!1,r=n&&Array.isArray(n)?n:[]):r=n&&C.isPlainObject(n)?n:{},s[t]=C.extend(c,r,i)):void 0!==i&&(s[t]=i));return s},C.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==r.call(e)||(t=i(e))&&("function"!=typeof(n=g.call(t,"constructor")&&t.constructor)||s.call(n)!==c))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){k(e)},each:function(e,t){var n,i=0;if(p(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},trim:function(e){return null==e?"":(e+"").replace(u,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?C.merge(n,"string"==typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:o.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,o=e.length;i<n;i++)e[o++]=t[i];return e.length=o,e},grep:function(e,t,n){for(var i=[],o=0,r=e.length,s=!n;o<r;o++)!t(e[o],o)!==s&&i.push(e[o]);return i},map:function(e,t,n){var i,o,r=0,s=[];if(p(e))for(i=e.length;r<i;r++)null!=(o=t(e[r],r,n))&&s.push(o);else for(r in e)null!=(o=t(e[r],r,n))&&s.push(o);return v.apply([],s)},guid:1,support:y}),"function"==typeof Symbol&&(C.fn[Symbol.iterator]=t[Symbol.iterator]),C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var f=function(n){var e,f,k,r,o,h,u,v,b,l,c,x,T,s,S,g,a,d,y,C="sizzle"+1*new Date,m=n.document,$=0,i=0,p=se(),w=se(),A=se(),E=function(e,t){return e===t&&(c=!0),0},j={}.hasOwnProperty,t=[],D=t.pop,M=t.push,N=t.push,P=t.slice,O=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},H="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",q="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+L+"*("+q+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+q+"))|)"+L+"*\\]",z=":("+q+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",W=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),F=new RegExp("^"+L+"*,"+L+"*"),B=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),X=new RegExp(z),_=new RegExp("^"+q+"$"),G={ID:new RegExp("^#("+q+")"),CLASS:new RegExp("^\\.("+q+")"),TAG:new RegExp("^("+q+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+z),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+H+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,V=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ee=function(e,t,n){var i="0x"+t-65536;return i!=i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},ie=function(){x()},oe=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{N.apply(t=P.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(n){N={apply:t.length?function(e,t){M.apply(e,P.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}function re(e,t,n,i){var o,r,s,a,l,c,d,u=t&&t.ownerDocument,p=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==p&&9!==p&&11!==p)return n;if(!i&&((t?t.ownerDocument||t:m)!==T&&x(t),t=t||T,S)){if(11!==p&&(l=K.exec(e)))if(o=l[1]){if(9===p){if(!(s=t.getElementById(o)))return n;if(s.id===o)return n.push(s),n}else if(u&&(s=u.getElementById(o))&&y(t,s)&&s.id===o)return n.push(s),n}else{if(l[2])return N.apply(n,t.getElementsByTagName(e)),n;if((o=l[3])&&f.getElementsByClassName&&t.getElementsByClassName)return N.apply(n,t.getElementsByClassName(o)),n}if(f.qsa&&!A[e+" "]&&(!g||!g.test(e))){if(1!==p)u=t,d=e;else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(te,ne):t.setAttribute("id",a=C),r=(c=h(e)).length;r--;)c[r]="#"+a+" "+ye(c[r]);d=c.join(","),u=J.test(e)&&ve(t.parentNode)||t}if(d)try{return N.apply(n,u.querySelectorAll(d)),n}catch(e){}finally{a===C&&t.removeAttribute("id")}}}return v(e.replace(R,"$1"),t,n,i)}function se(){var i=[];return function e(t,n){return i.push(t+" ")>k.cacheLength&&delete e[i.shift()],e[t+" "]=n}}function ae(e){return e[C]=!0,e}function le(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ce(e,t){for(var n=e.split("|"),i=n.length;i--;)k.attrHandle[n[i]]=t}function de(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function ue(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function pe(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function fe(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&oe(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function he(s){return ae(function(r){return r=+r,ae(function(e,t){for(var n,i=s([],e.length,r),o=i.length;o--;)e[n=i[o]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&void 0!==e.getElementsByTagName&&e}for(e in f=re.support={},o=re.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},x=re.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:m;return i!==T&&9===i.nodeType&&i.documentElement&&(s=(T=i).documentElement,S=!o(T),m!==T&&(n=T.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",ie,!1):n.attachEvent&&n.attachEvent("onunload",ie)),f.attributes=le(function(e){return e.className="i",!e.getAttribute("className")}),f.getElementsByTagName=le(function(e){return e.appendChild(T.createComment("")),!e.getElementsByTagName("*").length}),f.getElementsByClassName=Q.test(T.getElementsByClassName),f.getById=le(function(e){return s.appendChild(e).id=C,!T.getElementsByName||!T.getElementsByName(C).length}),f.getById?(k.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},k.find.ID=function(e,t){if(void 0!==t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(k.filter.ID=function(e){var n=e.replace(Z,ee);return function(e){var t=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},k.find.ID=function(e,t){if(void 0!==t.getElementById&&S){var n,i,o,r=t.getElementById(e);if(r){if((n=r.getAttributeNode("id"))&&n.value===e)return[r];for(o=t.getElementsByName(e),i=0;r=o[i++];)if((n=r.getAttributeNode("id"))&&n.value===e)return[r]}return[]}}),k.find.TAG=f.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):f.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],o=0,r=t.getElementsByTagName(e);if("*"===e){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i}return r},k.find.CLASS=f.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&S)return t.getElementsByClassName(e)},a=[],g=[],(f.qsa=Q.test(T.querySelectorAll))&&(le(function(e){s.appendChild(e).innerHTML="<a id='"+C+"'></a><select id='"+C+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+L+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+L+"*(?:value|"+H+")"),e.querySelectorAll("[id~="+C+"-]").length||g.push("~="),e.querySelectorAll(":checked").length||g.push(":checked"),e.querySelectorAll("a#"+C+"+*").length||g.push(".#.+[+~]")}),le(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=T.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+L+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),s.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(f.matchesSelector=Q.test(d=s.matches||s.webkitMatchesSelector||s.mozMatchesSelector||s.oMatchesSelector||s.msMatchesSelector))&&le(function(e){f.disconnectedMatch=d.call(e,"*"),d.call(e,"[s!='']:x"),a.push("!=",z)}),g=g.length&&new RegExp(g.join("|")),a=a.length&&new RegExp(a.join("|")),t=Q.test(s.compareDocumentPosition),y=t||Q.test(s.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},E=t?function(e,t){if(e===t)return c=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!f.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument===m&&y(m,e)?-1:t===T||t.ownerDocument===m&&y(m,t)?1:l?O(l,e)-O(l,t):0:4&n?-1:1)}:function(e,t){if(e===t)return c=!0,0;var n,i=0,o=e.parentNode,r=t.parentNode,s=[e],a=[t];if(!o||!r)return e===T?-1:t===T?1:o?-1:r?1:l?O(l,e)-O(l,t):0;if(o===r)return de(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;s[i]===a[i];)i++;return i?de(s[i],a[i]):s[i]===m?-1:a[i]===m?1:0}),T},re.matches=function(e,t){return re(e,null,null,t)},re.matchesSelector=function(e,t){if((e.ownerDocument||e)!==T&&x(e),t=t.replace(U,"='$1']"),f.matchesSelector&&S&&!A[t+" "]&&(!a||!a.test(t))&&(!g||!g.test(t)))try{var n=d.call(e,t);if(n||f.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<re(t,T,null,[e]).length},re.contains=function(e,t){return(e.ownerDocument||e)!==T&&x(e),y(e,t)},re.attr=function(e,t){(e.ownerDocument||e)!==T&&x(e);var n=k.attrHandle[t.toLowerCase()],i=n&&j.call(k.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==i?i:f.attributes||!S?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},re.escape=function(e){return(e+"").replace(te,ne)},re.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},re.uniqueSort=function(e){var t,n=[],i=0,o=0;if(c=!f.detectDuplicates,l=!f.sortStable&&e.slice(0),e.sort(E),c){for(;t=e[o++];)t===e[o]&&(i=n.push(o));for(;i--;)e.splice(n[i],1)}return l=null,e},r=re.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=r(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[i++];)n+=r(t);return n},(k=re.selectors={cacheLength:50,createPseudo:ae,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||re.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&re.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+L+")"+e+"("+L+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,i,o){return function(e){var t=re.attr(e,n);return null==t?"!="===i:!i||(t+="","="===i?t===o:"!="===i?t!==o:"^="===i?o&&0===t.indexOf(o):"*="===i?o&&-1<t.indexOf(o):"$="===i?o&&t.slice(-o.length)===o:"~="===i?-1<(" "+t.replace(W," ")+" ").indexOf(o):"|="===i&&(t===o||t.slice(0,o.length+1)===o+"-"))}},CHILD:function(h,e,t,v,g){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),w="of-type"===e;return 1===v&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var i,o,r,s,a,l,c=y!==m?"nextSibling":"previousSibling",d=e.parentNode,u=w&&e.nodeName.toLowerCase(),p=!n&&!w,f=!1;if(d){if(y){for(;c;){for(s=e;s=s[c];)if(w?s.nodeName.toLowerCase()===u:1===s.nodeType)return!1;l=c="only"===h&&!l&&"nextSibling"}return!0}if(l=[m?d.firstChild:d.lastChild],m&&p){for(f=(a=(i=(o=(r=(s=d)[C]||(s[C]={}))[s.uniqueID]||(r[s.uniqueID]={}))[h]||[])[0]===$&&i[1])&&i[2],s=a&&d.childNodes[a];s=++a&&s&&s[c]||(f=a=0)||l.pop();)if(1===s.nodeType&&++f&&s===e){o[h]=[$,a,f];break}}else if(p&&(f=a=(i=(o=(r=(s=e)[C]||(s[C]={}))[s.uniqueID]||(r[s.uniqueID]={}))[h]||[])[0]===$&&i[1]),!1===f)for(;(s=++a&&s&&s[c]||(f=a=0)||l.pop())&&((w?s.nodeName.toLowerCase()!==u:1!==s.nodeType)||!++f||(p&&((o=(r=s[C]||(s[C]={}))[s.uniqueID]||(r[s.uniqueID]={}))[h]=[$,f]),s!==e)););return(f-=g)===v||f%v==0&&0<=f/v}}},PSEUDO:function(e,r){var t,s=k.pseudos[e]||k.setFilters[e.toLowerCase()]||re.error("unsupported pseudo: "+e);return s[C]?s(r):1<s.length?(t=[e,e,"",r],k.setFilters.hasOwnProperty(e.toLowerCase())?ae(function(e,t){for(var n,i=s(e,r),o=i.length;o--;)e[n=O(e,i[o])]=!(t[n]=i[o])}):function(e){return s(e,0,t)}):s}},pseudos:{not:ae(function(e){var i=[],o=[],a=u(e.replace(R,"$1"));return a[C]?ae(function(e,t,n,i){for(var o,r=a(e,null,i,[]),s=e.length;s--;)(o=r[s])&&(e[s]=!(t[s]=o))}):function(e,t,n){return i[0]=e,a(i,null,n,o),i[0]=null,!o.pop()}}),has:ae(function(t){return function(e){return 0<re(t,e).length}}),contains:ae(function(t){return t=t.replace(Z,ee),function(e){return-1<(e.textContent||e.innerText||r(e)).indexOf(t)}}),lang:ae(function(n){return _.test(n||"")||re.error("unsupported lang: "+n),n=n.replace(Z,ee).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===s},focus:function(e){return e===T.activeElement&&(!T.hasFocus||T.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:fe(!1),disabled:fe(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!k.pseudos.empty(e)},header:function(e){return V.test(e.nodeName)},input:function(e){return Y.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var i=n<0?n+t:n;0<=--i;)e.push(i);return e}),gt:he(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=k.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})k.pseudos[e]=ue(e);for(e in{submit:!0,reset:!0})k.pseudos[e]=pe(e);function ge(){}function ye(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function me(a,e,t){var l=e.dir,c=e.next,d=c||l,u=t&&"parentNode"===d,p=i++;return e.first?function(e,t,n){for(;e=e[l];)if(1===e.nodeType||u)return a(e,t,n);return!1}:function(e,t,n){var i,o,r,s=[$,p];if(n){for(;e=e[l];)if((1===e.nodeType||u)&&a(e,t,n))return!0}else for(;e=e[l];)if(1===e.nodeType||u)if(o=(r=e[C]||(e[C]={}))[e.uniqueID]||(r[e.uniqueID]={}),c&&c===e.nodeName.toLowerCase())e=e[l]||e;else{if((i=o[d])&&i[0]===$&&i[1]===p)return s[2]=i[2];if((o[d]=s)[2]=a(e,t,n))return!0}return!1}}function we(o){return 1<o.length?function(e,t,n){for(var i=o.length;i--;)if(!o[i](e,t,n))return!1;return!0}:o[0]}function ke(e,t,n,i,o){for(var r,s=[],a=0,l=e.length,c=null!=t;a<l;a++)(r=e[a])&&(n&&!n(r,i,o)||(s.push(r),c&&t.push(a)));return s}function be(f,h,v,g,y,e){return g&&!g[C]&&(g=be(g)),y&&!y[C]&&(y=be(y,e)),ae(function(e,t,n,i){var o,r,s,a=[],l=[],c=t.length,d=e||function(e,t,n){for(var i=0,o=t.length;i<o;i++)re(e,t[i],n);return n}(h||"*",n.nodeType?[n]:n,[]),u=!f||!e&&h?d:ke(d,a,f,n,i),p=v?y||(e?f:c||g)?[]:t:u;if(v&&v(u,p,n,i),g)for(o=ke(p,l),g(o,[],n,i),r=o.length;r--;)(s=o[r])&&(p[l[r]]=!(u[l[r]]=s));if(e){if(y||f){if(y){for(o=[],r=p.length;r--;)(s=p[r])&&o.push(u[r]=s);y(null,p=[],o,i)}for(r=p.length;r--;)(s=p[r])&&-1<(o=y?O(e,s):a[r])&&(e[o]=!(t[o]=s))}}else p=ke(p===t?p.splice(c,p.length):p),y?y(null,t,p,i):N.apply(t,p)})}function xe(e){for(var o,t,n,i=e.length,r=k.relative[e[0].type],s=r||k.relative[" "],a=r?1:0,l=me(function(e){return e===o},s,!0),c=me(function(e){return-1<O(o,e)},s,!0),d=[function(e,t,n){var i=!r&&(n||t!==b)||((o=t).nodeType?l(e,t,n):c(e,t,n));return o=null,i}];a<i;a++)if(t=k.relative[e[a].type])d=[me(we(d),t)];else{if((t=k.filter[e[a].type].apply(null,e[a].matches))[C]){for(n=++a;n<i&&!k.relative[e[n].type];n++);return be(1<a&&we(d),1<a&&ye(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(R,"$1"),t,a<n&&xe(e.slice(a,n)),n<i&&xe(e=e.slice(n)),n<i&&ye(e))}d.push(t)}return we(d)}return ge.prototype=k.filters=k.pseudos,k.setFilters=new ge,h=re.tokenize=function(e,t){var n,i,o,r,s,a,l,c=w[e+" "];if(c)return t?0:c.slice(0);for(s=e,a=[],l=k.preFilter;s;){for(r in n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),a.push(o=[])),n=!1,(i=B.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(R," ")}),s=s.slice(n.length)),k.filter)!(i=G[r].exec(s))||l[r]&&!(i=l[r](i))||(n=i.shift(),o.push({value:n,type:r,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?re.error(e):w(e,a).slice(0)},u=re.compile=function(e,t){var n,g,y,m,w,i,o=[],r=[],s=A[e+" "];if(!s){for(t||(t=h(e)),n=t.length;n--;)(s=xe(t[n]))[C]?o.push(s):r.push(s);(s=A(e,(g=r,y=o,m=0<y.length,w=0<g.length,i=function(e,t,n,i,o){var r,s,a,l=0,c="0",d=e&&[],u=[],p=b,f=e||w&&k.find.TAG("*",o),h=$+=null==p?1:Math.random()||.1,v=f.length;for(o&&(b=t===T||t||o);c!==v&&null!=(r=f[c]);c++){if(w&&r){for(s=0,t||r.ownerDocument===T||(x(r),n=!S);a=g[s++];)if(a(r,t||T,n)){i.push(r);break}o&&($=h)}m&&((r=!a&&r)&&l--,e&&d.push(r))}if(l+=c,m&&c!==l){for(s=0;a=y[s++];)a(d,u,t,n);if(e){if(0<l)for(;c--;)d[c]||u[c]||(u[c]=D.call(i));u=ke(u)}N.apply(i,u),o&&!e&&0<u.length&&1<l+y.length&&re.uniqueSort(i)}return o&&($=h,b=p),d},m?ae(i):i))).selector=e}return s},v=re.select=function(e,t,n,i){var o,r,s,a,l,c="function"==typeof e&&e,d=!i&&h(e=c.selector||e);if(n=n||[],1===d.length){if(2<(r=d[0]=d[0].slice(0)).length&&"ID"===(s=r[0]).type&&9===t.nodeType&&S&&k.relative[r[1].type]){if(!(t=(k.find.ID(s.matches[0].replace(Z,ee),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(r.shift().value.length)}for(o=G.needsContext.test(e)?0:r.length;o--&&(s=r[o],!k.relative[a=s.type]);)if((l=k.find[a])&&(i=l(s.matches[0].replace(Z,ee),J.test(r[0].type)&&ve(t.parentNode)||t))){if(r.splice(o,1),!(e=i.length&&ye(r)))return N.apply(n,i),n;break}}return(c||u(e,d))(i,t,!S,n,!t||J.test(e)&&ve(t.parentNode)||t),n},f.sortStable=C.split("").sort(E).join("")===C,f.detectDuplicates=!!c,x(),f.sortDetached=le(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),le(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ce("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),f.attributes&&le(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ce("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),le(function(e){return null==e.getAttribute("disabled")})||ce(H,function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),re}(T);C.find=f,C.expr=f.selectors,C.expr[":"]=C.expr.pseudos,C.uniqueSort=C.unique=f.uniqueSort,C.text=f.getText,C.isXMLDoc=f.isXML,C.contains=f.contains,C.escapeSelector=f.escape;var h=function(e,t,n){for(var i=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&C(e).is(n))break;i.push(e)}return i},x=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},$=C.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var E=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,i){return m(n)?C.grep(e,function(e,t){return!!n.call(e,t,e)!==i}):n.nodeType?C.grep(e,function(e){return e===n!==i}):"string"!=typeof n?C.grep(e,function(e){return-1<o.call(n,e)!==i}):C.filter(n,e,i)}C.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?C.find.matchesSelector(i,e)?[i]:[]:C.find.matches(e,C.grep(t,function(e){return 1===e.nodeType}))},C.fn.extend({find:function(e){var t,n,i=this.length,o=this;if("string"!=typeof e)return this.pushStack(C(e).filter(function(){for(t=0;t<i;t++)if(C.contains(o[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)C.find(e,o[t],n);return 1<i?C.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&$.test(e)?C(e):e||[],!1).length}});var D,M=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(C.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:M.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof C?t[0]:t,C.merge(this,C.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),E.test(i[1])&&C.isPlainObject(t))for(i in t)m(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=S.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(C):C.makeArray(e,this)}).prototype=C.fn,D=C(S);var N=/^(?:parents|prev(?:Until|All))/,P={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}C.fn.extend({has:function(e){var t=C(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(C.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,o=this.length,r=[],s="string"!=typeof e&&C(e);if(!$.test(e))for(;i<o;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?-1<s.index(n):1===n.nodeType&&C.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(1<r.length?C.uniqueSort(r):r)},index:function(e){return e?"string"==typeof e?o.call(C(e),this[0]):o.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(C.uniqueSort(C.merge(this.get(),C(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),C.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return x((e.parentNode||{}).firstChild,e)},children:function(e){return x(e.firstChild)},contents:function(e){return A(e,"iframe")?e.contentDocument:(A(e,"template")&&(e=e.content||e),C.merge([],e.childNodes))}},function(i,o){C.fn[i]=function(e,t){var n=C.map(this,o,e);return"Until"!==i.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=C.filter(t,n)),1<this.length&&(P[i]||C.uniqueSort(n),N.test(i)&&n.reverse()),this.pushStack(n)}});var H=/[^\x20\t\r\n\f]+/g;function L(e){return e}function q(e){throw e}function I(e,t,n,i){var o;try{e&&m(o=e.promise)?o.call(e).done(t).fail(n):e&&m(o=e.then)?o.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}C.Callbacks=function(i){var e,n;i="string"==typeof i?(e=i,n={},C.each(e.match(H)||[],function(e,t){n[t]=!0}),n):C.extend({},i);var o,t,r,s,a=[],l=[],c=-1,d=function(){for(s=s||i.once,r=o=!0;l.length;c=-1)for(t=l.shift();++c<a.length;)!1===a[c].apply(t[0],t[1])&&i.stopOnFalse&&(c=a.length,t=!1);i.memory||(t=!1),o=!1,s&&(a=t?[]:"")},u={add:function(){return a&&(t&&!o&&(c=a.length-1,l.push(t)),function n(e){C.each(e,function(e,t){m(t)?i.unique&&u.has(t)||a.push(t):t&&t.length&&"string"!==b(t)&&n(t)})}(arguments),t&&!o&&d()),this},remove:function(){return C.each(arguments,function(e,t){for(var n;-1<(n=C.inArray(t,a,n));)a.splice(n,1),n<=c&&c--}),this},has:function(e){return e?-1<C.inArray(e,a):0<a.length},empty:function(){return a&&(a=[]),this},disable:function(){return s=l=[],a=t="",this},disabled:function(){return!a},lock:function(){return s=l=[],t||o||(a=t=""),this},locked:function(){return!!s},fireWith:function(e,t){return s||(t=[e,(t=t||[]).slice?t.slice():t],l.push(t),o||d()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!r}};return u},C.extend({Deferred:function(e){var r=[["notify","progress",C.Callbacks("memory"),C.Callbacks("memory"),2],["resolve","done",C.Callbacks("once memory"),C.Callbacks("once memory"),0,"resolved"],["reject","fail",C.Callbacks("once memory"),C.Callbacks("once memory"),1,"rejected"]],o="pending",s={state:function(){return o},always:function(){return a.done(arguments).fail(arguments),this},catch:function(e){return s.then(null,e)},pipe:function(){var o=arguments;return C.Deferred(function(i){C.each(r,function(e,t){var n=m(o[t[4]])&&o[t[4]];a[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[t[0]+"With"](this,n?[e]:arguments)})}),o=null}).promise()},then:function(t,n,i){var l=0;function c(o,r,s,a){return function(){var n=this,i=arguments,e=function(){var e,t;if(!(o<l)){if((e=s.apply(n,i))===r.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?a?t.call(e,c(l,r,L,a),c(l,r,q,a)):(l++,t.call(e,c(l,r,L,a),c(l,r,q,a),c(l,r,L,r.notifyWith))):(s!==L&&(n=void 0,i=[e]),(a||r.resolveWith)(n,i))}},t=a?e:function(){try{e()}catch(e){C.Deferred.exceptionHook&&C.Deferred.exceptionHook(e,t.stackTrace),l<=o+1&&(s!==q&&(n=void 0,i=[e]),r.rejectWith(n,i))}};o?t():(C.Deferred.getStackHook&&(t.stackTrace=C.Deferred.getStackHook()),T.setTimeout(t))}}return C.Deferred(function(e){r[0][3].add(c(0,e,m(i)?i:L,e.notifyWith)),r[1][3].add(c(0,e,m(t)?t:L)),r[2][3].add(c(0,e,m(n)?n:q))}).promise()},promise:function(e){return null!=e?C.extend(e,s):s}},a={};return C.each(r,function(e,t){var n=t[2],i=t[5];s[t[1]]=n.add,i&&n.add(function(){o=i},r[3-e][2].disable,r[3-e][3].disable,r[0][2].lock,r[0][3].lock),n.add(t[3].fire),a[t[0]]=function(){return a[t[0]+"With"](this===a?void 0:this,arguments),this},a[t[0]+"With"]=n.fireWith}),s.promise(a),e&&e.call(a,a),a},when:function(e){var n=arguments.length,t=n,i=Array(t),o=a.call(arguments),r=C.Deferred(),s=function(t){return function(e){i[t]=this,o[t]=1<arguments.length?a.call(arguments):e,--n||r.resolveWith(i,o)}};if(n<=1&&(I(e,r.done(s(t)).resolve,r.reject,!n),"pending"===r.state()||m(o[t]&&o[t].then)))return r.then();for(;t--;)I(o[t],s(t),r.reject);return r.promise()}});var z=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;C.Deferred.exceptionHook=function(e,t){T.console&&T.console.warn&&e&&z.test(e.name)&&T.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},C.readyException=function(e){T.setTimeout(function(){throw e})};var W=C.Deferred();function R(){S.removeEventListener("DOMContentLoaded",R),T.removeEventListener("load",R),C.ready()}C.fn.ready=function(e){return W.then(e).catch(function(e){C.readyException(e)}),this},C.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--C.readyWait:C.isReady)||((C.isReady=!0)!==e&&0<--C.readyWait||W.resolveWith(S,[C]))}}),C.ready.then=W.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?T.setTimeout(C.ready):(S.addEventListener("DOMContentLoaded",R),T.addEventListener("load",R));var F=function(e,t,n,i,o,r,s){var a=0,l=e.length,c=null==n;if("object"===b(n))for(a in o=!0,n)F(e,t,a,n[a],!0,r,s);else if(void 0!==i&&(o=!0,m(i)||(s=!0),c&&(s?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(C(e),n)})),t))for(;a<l;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return o?e:c?t.call(e):l?t(e[0],n):r},B=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function _(e){return e.replace(B,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=C.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,o=this.cache(e);if("string"==typeof t)o[_(t)]=n;else for(i in t)o[_(i)]=t[i];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][_(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map(_):(t=_(t))in i?[t]:t.match(H)||[]).length;for(;n--;)delete i[t[n]]}(void 0===t||C.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!C.isEmptyObject(t)}};var V=new Y,Q=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,J=/[A-Z]/g;function Z(e,t,n){var i,o;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(J,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n="true"===(o=n)||"false"!==o&&("null"===o?null:o===+o+""?+o:K.test(o)?JSON.parse(o):o)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}C.extend({hasData:function(e){return Q.hasData(e)||V.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return V.access(e,t,n)},_removeData:function(e,t){V.remove(e,t)}}),C.fn.extend({data:function(n,e){var t,i,o,r=this[0],s=r&&r.attributes;if(void 0===n){if(this.length&&(o=Q.get(r),1===r.nodeType&&!V.get(r,"hasDataAttrs"))){for(t=s.length;t--;)s[t]&&0===(i=s[t].name).indexOf("data-")&&(i=_(i.slice(5)),Z(r,i,o[i]));V.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof n?this.each(function(){Q.set(this,n)}):F(this,function(e){var t;if(r&&void 0===e){if(void 0!==(t=Q.get(r,n)))return t;if(void 0!==(t=Z(r,n)))return t}else this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),C.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=V.get(e,t),n&&(!i||Array.isArray(n)?i=V.access(e,t,C.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=C.queue(e,t),i=n.length,o=n.shift(),r=C._queueHooks(e,t);"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===t&&n.unshift("inprogress"),delete r.stop,o.call(e,function(){C.dequeue(e,t)},r)),!i&&r&&r.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return V.get(e,n)||V.access(e,n,{empty:C.Callbacks("once memory").add(function(){V.remove(e,[t+"queue",n])})})}}),C.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?C.queue(this[0],t):void 0===n?this:this.each(function(){var e=C.queue(this,t,n);C._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&C.dequeue(this,t)})},dequeue:function(e){return this.each(function(){C.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,o=C.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=V.get(r[s],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],ie=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&C.contains(e.ownerDocument,e)&&"none"===C.css(e,"display")},oe=function(e,t,n,i){var o,r,s={};for(r in t)s[r]=e.style[r],e.style[r]=t[r];for(r in o=n.apply(e,i||[]),t)e.style[r]=s[r];return o};function re(e,t,n,i){var o,r,s=20,a=i?function(){return i.cur()}:function(){return C.css(e,t,"")},l=a(),c=n&&n[3]||(C.cssNumber[t]?"":"px"),d=(C.cssNumber[t]||"px"!==c&&+l)&&te.exec(C.css(e,t));if(d&&d[3]!==c){for(l/=2,c=c||d[3],d=+l||1;s--;)C.style(e,t,d+c),(1-r)*(1-(r=a()/l||.5))<=0&&(s=0),d/=r;d*=2,C.style(e,t,d+c),n=n||[]}return n&&(d=+d||+l||0,o=n[1]?d+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=d,i.end=o)),o}var se={};function ae(e,t){for(var n,i,o=[],r=0,s=e.length;r<s;r++)(i=e[r]).style&&(n=i.style.display,t?("none"===n&&(o[r]=V.get(i,"display")||null,o[r]||(i.style.display="")),""===i.style.display&&ie(i)&&(o[r]=(u=c=l=void 0,c=(a=i).ownerDocument,d=a.nodeName,(u=se[d])||(l=c.body.appendChild(c.createElement(d)),u=C.css(l,"display"),l.parentNode.removeChild(l),"none"===u&&(u="block"),se[d]=u)))):"none"!==n&&(o[r]="none",V.set(i,"display",n)));var a,l,c,d,u;for(r=0;r<s;r++)null!=o[r]&&(e[r].style.display=o[r]);return e}C.fn.extend({show:function(){return ae(this,!0)},hide:function(){return ae(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ie(this)?C(this).show():C(this).hide()})}});var le=/^(?:checkbox|radio)$/i,ce=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,de=/^$|^module$|\/(?:java|ecma)script/i,ue={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function pe(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?C.merge([e],n):n}function fe(e,t){for(var n=0,i=e.length;n<i;n++)V.set(e[n],"globalEval",!t||V.get(t[n],"globalEval"))}ue.optgroup=ue.option,ue.tbody=ue.tfoot=ue.colgroup=ue.caption=ue.thead,ue.th=ue.td;var he,ve,ge=/<|&#?\w+;/;function ye(e,t,n,i,o){for(var r,s,a,l,c,d,u=t.createDocumentFragment(),p=[],f=0,h=e.length;f<h;f++)if((r=e[f])||0===r)if("object"===b(r))C.merge(p,r.nodeType?[r]:r);else if(ge.test(r)){for(s=s||u.appendChild(t.createElement("div")),a=(ce.exec(r)||["",""])[1].toLowerCase(),l=ue[a]||ue._default,s.innerHTML=l[1]+C.htmlPrefilter(r)+l[2],d=l[0];d--;)s=s.lastChild;C.merge(p,s.childNodes),(s=u.firstChild).textContent=""}else p.push(t.createTextNode(r));for(u.textContent="",f=0;r=p[f++];)if(i&&-1<C.inArray(r,i))o&&o.push(r);else if(c=C.contains(r.ownerDocument,r),s=pe(u.appendChild(r),"script"),c&&fe(s),n)for(d=0;r=s[d++];)de.test(r.type||"")&&n.push(r);return u}he=S.createDocumentFragment().appendChild(S.createElement("div")),(ve=S.createElement("input")).setAttribute("type","radio"),ve.setAttribute("checked","checked"),ve.setAttribute("name","t"),he.appendChild(ve),y.checkClone=he.cloneNode(!0).cloneNode(!0).lastChild.checked,he.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!he.cloneNode(!0).lastChild.defaultValue;var me=S.documentElement,we=/^key/,ke=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,be=/^([^.]*)(?:\.(.+)|)/;function xe(){return!0}function Te(){return!1}function Se(){try{return S.activeElement}catch(e){}}function Ce(e,t,n,i,o,r){var s,a;if("object"==typeof t){for(a in"string"!=typeof n&&(i=i||n,n=void 0),t)Ce(e,a,n,i,t[a],r);return e}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),!1===o)o=Te;else if(!o)return e;return 1===r&&(s=o,(o=function(e){return C().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=C.guid++)),e.each(function(){C.event.add(this,t,o,i,n)})}C.event={global:{},add:function(t,e,n,i,o){var r,s,a,l,c,d,u,p,f,h,v,g=V.get(t);if(g)for(n.handler&&(n=(r=n).handler,o=r.selector),o&&C.find.matchesSelector(me,o),n.guid||(n.guid=C.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(e){return void 0!==C&&C.event.triggered!==e.type?C.event.dispatch.apply(t,arguments):void 0}),c=(e=(e||"").match(H)||[""]).length;c--;)f=v=(a=be.exec(e[c])||[])[1],h=(a[2]||"").split(".").sort(),f&&(u=C.event.special[f]||{},f=(o?u.delegateType:u.bindType)||f,u=C.event.special[f]||{},d=C.extend({type:f,origType:v,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&C.expr.match.needsContext.test(o),namespace:h.join(".")},r),(p=l[f])||((p=l[f]=[]).delegateCount=0,u.setup&&!1!==u.setup.call(t,i,h,s)||t.addEventListener&&t.addEventListener(f,s)),u.add&&(u.add.call(t,d),d.handler.guid||(d.handler.guid=n.guid)),o?p.splice(p.delegateCount++,0,d):p.push(d),C.event.global[f]=!0)},remove:function(e,t,n,i,o){var r,s,a,l,c,d,u,p,f,h,v,g=V.hasData(e)&&V.get(e);if(g&&(l=g.events)){for(c=(t=(t||"").match(H)||[""]).length;c--;)if(f=v=(a=be.exec(t[c])||[])[1],h=(a[2]||"").split(".").sort(),f){for(u=C.event.special[f]||{},p=l[f=(i?u.delegateType:u.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=p.length;r--;)d=p[r],!o&&v!==d.origType||n&&n.guid!==d.guid||a&&!a.test(d.namespace)||i&&i!==d.selector&&("**"!==i||!d.selector)||(p.splice(r,1),d.selector&&p.delegateCount--,u.remove&&u.remove.call(e,d));s&&!p.length&&(u.teardown&&!1!==u.teardown.call(e,h,g.handle)||C.removeEvent(e,f,g.handle),delete l[f])}else for(f in l)C.event.remove(e,f+t[c],n,i,!0);C.isEmptyObject(l)&&V.remove(e,"handle events")}},dispatch:function(e){var t,n,i,o,r,s,a=C.event.fix(e),l=new Array(arguments.length),c=(V.get(this,"events")||{})[a.type]||[],d=C.event.special[a.type]||{};for(l[0]=a,t=1;t<arguments.length;t++)l[t]=arguments[t];if(a.delegateTarget=this,!d.preDispatch||!1!==d.preDispatch.call(this,a)){for(s=C.event.handlers.call(this,a,c),t=0;(o=s[t++])&&!a.isPropagationStopped();)for(a.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!a.rnamespace.test(r.namespace)||(a.handleObj=r,a.data=r.data,void 0!==(i=((C.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,l))&&!1===(a.result=i)&&(a.preventDefault(),a.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,a),a.result}},handlers:function(e,t){var n,i,o,r,s,a=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&1<=e.button))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(r=[],s={},n=0;n<l;n++)void 0===s[o=(i=t[n]).selector+" "]&&(s[o]=i.needsContext?-1<C(o,this).index(c):C.find(o,this,null,[c]).length),s[o]&&r.push(i);r.length&&a.push({elem:c,handlers:r})}return c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a},addProp:function(t,e){Object.defineProperty(C.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[C.expando]?e:new C.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&A(this,"input"))return this.click(),!1},_default:function(e){return A(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},C.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},C.Event=function(e,t){if(!(this instanceof C.Event))return new C.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?xe:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&C.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[C.expando]=!0},C.Event.prototype={constructor:C.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=xe,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=xe,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=xe,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},C.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&ke.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},C.event.addProp),C.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,o){C.event.special[e]={delegateType:o,bindType:o,handle:function(e){var t,n=e.relatedTarget,i=e.handleObj;return n&&(n===this||C.contains(this,n))||(e.type=i.origType,t=i.handler.apply(this,arguments),e.type=o),t}}}),C.fn.extend({on:function(e,t,n,i){return Ce(this,e,t,n,i)},one:function(e,t,n,i){return Ce(this,e,t,n,i,1)},off:function(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,C(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,t,e[o]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){C.event.remove(this,e,n,t)})}});var $e=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,Ee=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function De(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&C(e).children("tbody")[0]||e}function Me(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Ne(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,i,o,r,s,a,l,c;if(1===t.nodeType){if(V.hasData(e)&&(r=V.access(e),s=V.set(t,r),c=r.events))for(o in delete s.handle,s.events={},c)for(n=0,i=c[o].length;n<i;n++)C.event.add(t,o,c[o][n]);Q.hasData(e)&&(a=Q.access(e),l=C.extend({},a),Q.set(t,l))}}function Oe(n,i,o,r){i=v.apply([],i);var e,t,s,a,l,c,d=0,u=n.length,p=u-1,f=i[0],h=m(f);if(h||1<u&&"string"==typeof f&&!y.checkClone&&Ee.test(f))return n.each(function(e){var t=n.eq(e);h&&(i[0]=f.call(this,e,t.html())),Oe(t,i,o,r)});if(u&&(t=(e=ye(i,n[0].ownerDocument,!1,n,r)).firstChild,1===e.childNodes.length&&(e=t),t||r)){for(a=(s=C.map(pe(e,"script"),Me)).length;d<u;d++)l=e,d!==p&&(l=C.clone(l,!0,!0),a&&C.merge(s,pe(l,"script"))),o.call(n[d],l,d);if(a)for(c=s[s.length-1].ownerDocument,C.map(s,Ne),d=0;d<a;d++)l=s[d],de.test(l.type||"")&&!V.access(l,"globalEval")&&C.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?C._evalUrl&&C._evalUrl(l.src):k(l.textContent.replace(je,""),c,l))}return n}function He(e,t,n){for(var i,o=t?C.filter(t,e):e,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||C.cleanData(pe(i)),i.parentNode&&(n&&C.contains(i.ownerDocument,i)&&fe(pe(i,"script")),i.parentNode.removeChild(i));return e}C.extend({htmlPrefilter:function(e){return e.replace($e,"<$1></$2>")},clone:function(e,t,n){var i,o,r,s,a,l,c,d=e.cloneNode(!0),u=C.contains(e.ownerDocument,e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||C.isXMLDoc(e)))for(s=pe(d),i=0,o=(r=pe(e)).length;i<o;i++)a=r[i],l=s[i],void 0,"input"===(c=l.nodeName.toLowerCase())&&le.test(a.type)?l.checked=a.checked:"input"!==c&&"textarea"!==c||(l.defaultValue=a.defaultValue);if(t)if(n)for(r=r||pe(e),s=s||pe(d),i=0,o=r.length;i<o;i++)Pe(r[i],s[i]);else Pe(e,d);return 0<(s=pe(d,"script")).length&&fe(s,!u&&pe(e,"script")),d},cleanData:function(e){for(var t,n,i,o=C.event.special,r=0;void 0!==(n=e[r]);r++)if(G(n)){if(t=n[V.expando]){if(t.events)for(i in t.events)o[i]?C.event.remove(n,i):C.removeEvent(n,i,t.handle);n[V.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),C.fn.extend({detach:function(e){return He(this,e,!0)},remove:function(e){return He(this,e)},text:function(e){return F(this,function(e){return void 0===e?C.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Oe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||De(this,e).appendChild(e)})},prepend:function(){return Oe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=De(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Oe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Oe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(C.cleanData(pe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return C.clone(this,e,t)})},html:function(e){return F(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ue[(ce.exec(e)||["",""])[1].toLowerCase()]){e=C.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(C.cleanData(pe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Oe(this,arguments,function(e){var t=this.parentNode;C.inArray(this,n)<0&&(C.cleanData(pe(this)),t&&t.replaceChild(e,this))},n)}}),C.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,s){C.fn[e]=function(e){for(var t,n=[],i=C(e),o=i.length-1,r=0;r<=o;r++)t=r===o?this:this.clone(!0),C(i[r])[s](t),l.apply(n,t.get());return this.pushStack(n)}});var Le=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),qe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=T),t.getComputedStyle(e)},Ie=new RegExp(ne.join("|"),"i");function ze(e,t,n){var i,o,r,s,a=e.style;return(n=n||qe(e))&&(""!==(s=n.getPropertyValue(t)||n[t])||C.contains(e.ownerDocument,e)||(s=C.style(e,t)),!y.pixelBoxStyles()&&Le.test(s)&&Ie.test(t)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?s+"":s}function We(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){a.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",me.appendChild(a).appendChild(l);var e=T.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",r=36===t(e.right),i=36===t(e.width),l.style.position="absolute",o=36===l.offsetWidth||"absolute",me.removeChild(a),l=null}}function t(e){return Math.round(parseFloat(e))}var n,i,o,r,s,a=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,C.extend(y,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),r},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),o}}))}();var Re=/^(none|table(?!-c[ea]).+)/,Fe=/^--/,Be={position:"absolute",visibility:"hidden",display:"block"},Ue={letterSpacing:"0",fontWeight:"400"},Xe=["Webkit","Moz","ms"],_e=S.createElement("div").style;function Ge(e){var t=C.cssProps[e];return t||(t=C.cssProps[e]=function(e){if(e in _e)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=Xe.length;n--;)if((e=Xe[n]+t)in _e)return e}(e)||e),t}function Ye(e,t,n){var i=te.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function Ve(e,t,n,i,o,r){var s="width"===t?1:0,a=0,l=0;if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(l+=C.css(e,n+ne[s],!0,o)),i?("content"===n&&(l-=C.css(e,"padding"+ne[s],!0,o)),"margin"!==n&&(l-=C.css(e,"border"+ne[s]+"Width",!0,o))):(l+=C.css(e,"padding"+ne[s],!0,o),"padding"!==n?l+=C.css(e,"border"+ne[s]+"Width",!0,o):a+=C.css(e,"border"+ne[s]+"Width",!0,o));return!i&&0<=r&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-r-l-a-.5))),l}function Qe(e,t,n){var i=qe(e),o=ze(e,t,i),r="border-box"===C.css(e,"boxSizing",!1,i),s=r;if(Le.test(o)){if(!n)return o;o="auto"}return s=s&&(y.boxSizingReliable()||o===e.style[t]),("auto"===o||!parseFloat(o)&&"inline"===C.css(e,"display",!1,i))&&(o=e["offset"+t[0].toUpperCase()+t.slice(1)],s=!0),(o=parseFloat(o)||0)+Ve(e,t,n||(r?"border":"content"),s,i,o)+"px"}function Ke(e,t,n,i,o){return new Ke.prototype.init(e,t,n,i,o)}C.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=ze(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,r,s,a=_(t),l=Fe.test(t),c=e.style;if(l||(t=Ge(a)),s=C.cssHooks[t]||C.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:c[t];"string"==(r=typeof n)&&(o=te.exec(n))&&o[1]&&(n=re(e,t,o),r="number"),null!=n&&n==n&&("number"===r&&(n+=o&&o[3]||(C.cssNumber[a]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,i){var o,r,s,a=_(t);return Fe.test(t)||(t=Ge(a)),(s=C.cssHooks[t]||C.cssHooks[a])&&"get"in s&&(o=s.get(e,!0,n)),void 0===o&&(o=ze(e,t,i)),"normal"===o&&t in Ue&&(o=Ue[t]),""===n||n?(r=parseFloat(o),!0===n||isFinite(r)?r||0:o):o}}),C.each(["height","width"],function(e,a){C.cssHooks[a]={get:function(e,t,n){if(t)return!Re.test(C.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Qe(e,a,n):oe(e,Be,function(){return Qe(e,a,n)})},set:function(e,t,n){var i,o=qe(e),r="border-box"===C.css(e,"boxSizing",!1,o),s=n&&Ve(e,a,n,r,o);return r&&y.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(o[a])-Ve(e,a,"border",!1,o)-.5)),s&&(i=te.exec(t))&&"px"!==(i[3]||"px")&&(e.style[a]=t,t=C.css(e,a)),Ye(0,t,s)}}}),C.cssHooks.marginLeft=We(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(ze(e,"marginLeft"))||e.getBoundingClientRect().left-oe(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),C.each({margin:"",padding:"",border:"Width"},function(o,r){C.cssHooks[o+r]={expand:function(e){for(var t=0,n={},i="string"==typeof e?e.split(" "):[e];t<4;t++)n[o+ne[t]+r]=i[t]||i[t-2]||i[0];return n}},"margin"!==o&&(C.cssHooks[o+r].set=Ye)}),C.fn.extend({css:function(e,t){return F(this,function(e,t,n){var i,o,r={},s=0;if(Array.isArray(t)){for(i=qe(e),o=t.length;s<o;s++)r[t[s]]=C.css(e,t[s],!1,i);return r}return void 0!==n?C.style(e,t,n):C.css(e,t)},e,t,1<arguments.length)}}),((C.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,i,o,r){this.elem=e,this.prop=n,this.easing=o||C.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=r||(C.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=C.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=C.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){C.fx.step[e.prop]?C.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[C.cssProps[e.prop]]&&!C.cssHooks[e.prop]?e.elem[e.prop]=e.now:C.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},C.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},C.fx=Ke.prototype.init,C.fx.step={};var Je,Ze,et,tt,nt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){Ze&&(!1===S.hidden&&T.requestAnimationFrame?T.requestAnimationFrame(ot):T.setTimeout(ot,C.fx.interval),C.fx.tick())}function rt(){return T.setTimeout(function(){Je=void 0}),Je=Date.now()}function st(e,t){var n,i=0,o={height:e};for(t=t?1:0;i<4;i+=2-t)o["margin"+(n=ne[i])]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function at(e,t,n){for(var i,o=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),r=0,s=o.length;r<s;r++)if(i=o[r].call(n,t,e))return i}function lt(r,e,t){var n,s,i=0,o=lt.prefilters.length,a=C.Deferred().always(function(){delete l.elem}),l=function(){if(s)return!1;for(var e=Je||rt(),t=Math.max(0,c.startTime+c.duration-e),n=1-(t/c.duration||0),i=0,o=c.tweens.length;i<o;i++)c.tweens[i].run(n);return a.notifyWith(r,[c,n,t]),n<1&&o?t:(o||a.notifyWith(r,[c,1,0]),a.resolveWith(r,[c]),!1)},c=a.promise({elem:r,props:C.extend({},e),opts:C.extend(!0,{specialEasing:{},easing:C.easing._default},t),originalProperties:e,originalOptions:t,startTime:Je||rt(),duration:t.duration,tweens:[],createTween:function(e,t){var n=C.Tween(r,c.opts,e,t,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(n),n},stop:function(e){var t=0,n=e?c.tweens.length:0;if(s)return this;for(s=!0;t<n;t++)c.tweens[t].run(1);return e?(a.notifyWith(r,[c,1,0]),a.resolveWith(r,[c,e])):a.rejectWith(r,[c,e]),this}}),d=c.props;for(function(e,t){var n,i,o,r,s;for(n in e)if(o=t[i=_(n)],r=e[n],Array.isArray(r)&&(o=r[1],r=e[n]=r[0]),n!==i&&(e[i]=r,delete e[n]),(s=C.cssHooks[i])&&"expand"in s)for(n in r=s.expand(r),delete e[i],r)n in e||(e[n]=r[n],t[n]=o);else t[i]=o}(d,c.opts.specialEasing);i<o;i++)if(n=lt.prefilters[i].call(c,r,d,c.opts))return m(n.stop)&&(C._queueHooks(c.elem,c.opts.queue).stop=n.stop.bind(n)),n;return C.map(d,at,c),m(c.opts.start)&&c.opts.start.call(r,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),C.fx.timer(C.extend(l,{elem:r,anim:c,queue:c.opts.queue})),c}C.Animation=C.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return re(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(H);for(var n,i=0,o=e.length;i<o;i++)n=e[i],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,o,r,s,a,l,c,d,u="width"in t||"height"in t,p=this,f={},h=e.style,v=e.nodeType&&ie(e),g=V.get(e,"fxshow");for(i in n.queue||(null==(s=C._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,p.always(function(){p.always(function(){s.unqueued--,C.queue(e,"fx").length||s.empty.fire()})})),t)if(o=t[i],nt.test(o)){if(delete t[i],r=r||"toggle"===o,o===(v?"hide":"show")){if("show"!==o||!g||void 0===g[i])continue;v=!0}f[i]=g&&g[i]||C.style(e,i)}if((l=!C.isEmptyObject(t))||!C.isEmptyObject(f))for(i in u&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(c=g&&g.display)&&(c=V.get(e,"display")),"none"===(d=C.css(e,"display"))&&(c?d=c:(ae([e],!0),c=e.style.display||c,d=C.css(e,"display"),ae([e]))),("inline"===d||"inline-block"===d&&null!=c)&&"none"===C.css(e,"float")&&(l||(p.done(function(){h.display=c}),null==c&&(d=h.display,c="none"===d?"":d)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),l=!1,f)l||(g?"hidden"in g&&(v=g.hidden):g=V.access(e,"fxshow",{display:c}),r&&(g.hidden=!v),v&&ae([e],!0),p.done(function(){for(i in v||ae([e]),V.remove(e,"fxshow"),f)C.style(e,i,f[i])})),l=at(v?g[i]:0,i,p),i in g||(g[i]=l.start,v&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),C.speed=function(e,t,n){var i=e&&"object"==typeof e?C.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return C.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in C.fx.speeds?i.duration=C.fx.speeds[i.duration]:i.duration=C.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){m(i.old)&&i.old.call(this),i.queue&&C.dequeue(this,i.queue)},i},C.fn.extend({fadeTo:function(e,t,n,i){return this.filter(ie).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(t,e,n,i){var o=C.isEmptyObject(t),r=C.speed(e,n,i),s=function(){var e=lt(this,C.extend({},t),r);(o||V.get(this,"finish"))&&e.stop(!0)};return s.finish=s,o||!1===r.queue?this.each(s):this.queue(r.queue,s)},stop:function(o,e,r){var s=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof o&&(r=e,e=o,o=void 0),e&&!1!==o&&this.queue(o||"fx",[]),this.each(function(){var e=!0,t=null!=o&&o+"queueHooks",n=C.timers,i=V.get(this);if(t)i[t]&&i[t].stop&&s(i[t]);else for(t in i)i[t]&&i[t].stop&&it.test(t)&&s(i[t]);for(t=n.length;t--;)n[t].elem!==this||null!=o&&n[t].queue!==o||(n[t].anim.stop(r),e=!1,n.splice(t,1));!e&&r||C.dequeue(this,o)})},finish:function(s){return!1!==s&&(s=s||"fx"),this.each(function(){var e,t=V.get(this),n=t[s+"queue"],i=t[s+"queueHooks"],o=C.timers,r=n?n.length:0;for(t.finish=!0,C.queue(this,s,[]),i&&i.stop&&i.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===s&&(o[e].anim.stop(!0),o.splice(e,1));for(e=0;e<r;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),C.each(["toggle","show","hide"],function(e,i){var o=C.fn[i];C.fn[i]=function(e,t,n){return null==e||"boolean"==typeof e?o.apply(this,arguments):this.animate(st(i,!0),e,t,n)}}),C.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,i){C.fn[e]=function(e,t,n){return this.animate(i,e,t,n)}}),C.timers=[],C.fx.tick=function(){var e,t=0,n=C.timers;for(Je=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||C.fx.stop(),Je=void 0},C.fx.timer=function(e){C.timers.push(e),C.fx.start()},C.fx.interval=13,C.fx.start=function(){Ze||(Ze=!0,ot())},C.fx.stop=function(){Ze=null},C.fx.speeds={slow:600,fast:200,_default:400},C.fn.delay=function(i,e){return i=C.fx&&C.fx.speeds[i]||i,e=e||"fx",this.queue(e,function(e,t){var n=T.setTimeout(e,i);t.stop=function(){T.clearTimeout(n)}})},et=S.createElement("input"),tt=S.createElement("select").appendChild(S.createElement("option")),et.type="checkbox",y.checkOn=""!==et.value,y.optSelected=tt.selected,(et=S.createElement("input")).value="t",et.type="radio",y.radioValue="t"===et.value;var ct,dt=C.expr.attrHandle;C.fn.extend({attr:function(e,t){return F(this,C.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){C.removeAttr(this,e)})}}),C.extend({attr:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return void 0===e.getAttribute?C.prop(e,t,n):(1===r&&C.isXMLDoc(e)||(o=C.attrHooks[t.toLowerCase()]||(C.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void C.removeAttr(e,t):o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:(e.setAttribute(t,n+""),n):o&&"get"in o&&null!==(i=o.get(e,t))?i:null==(i=C.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,o=t&&t.match(H);if(o&&1===e.nodeType)for(;n=o[i++];)e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?C.removeAttr(e,n):e.setAttribute(n,n),n}},C.each(C.expr.match.bool.source.match(/\w+/g),function(e,t){var s=dt[t]||C.find.attr;dt[t]=function(e,t,n){var i,o,r=t.toLowerCase();return n||(o=dt[r],dt[r]=i,i=null!=s(e,t,n)?r:null,dt[r]=o),i}});var ut=/^(?:input|select|textarea|button)$/i,pt=/^(?:a|area)$/i;function ft(e){return(e.match(H)||[]).join(" ")}function ht(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(H)||[]}C.fn.extend({prop:function(e,t){return F(this,C.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[C.propFix[e]||e]})}}),C.extend({prop:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&C.isXMLDoc(e)||(t=C.propFix[t]||t,o=C.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:e[t]=n:o&&"get"in o&&null!==(i=o.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=C.find.attr(e,"tabindex");return t?parseInt(t,10):ut.test(e.nodeName)||pt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),y.optSelected||(C.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),C.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){C.propFix[this.toLowerCase()]=this}),C.fn.extend({addClass:function(t){var e,n,i,o,r,s,a,l=0;if(m(t))return this.each(function(e){C(this).addClass(t.call(this,e,ht(this)))});if((e=vt(t)).length)for(;n=this[l++];)if(o=ht(n),i=1===n.nodeType&&" "+ft(o)+" "){for(s=0;r=e[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");o!==(a=ft(i))&&n.setAttribute("class",a)}return this},removeClass:function(t){var e,n,i,o,r,s,a,l=0;if(m(t))return this.each(function(e){C(this).removeClass(t.call(this,e,ht(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)for(;n=this[l++];)if(o=ht(n),i=1===n.nodeType&&" "+ft(o)+" "){for(s=0;r=e[s++];)for(;-1<i.indexOf(" "+r+" ");)i=i.replace(" "+r+" "," ");o!==(a=ft(i))&&n.setAttribute("class",a)}return this},toggleClass:function(o,t){var r=typeof o,s="string"===r||Array.isArray(o);return"boolean"==typeof t&&s?t?this.addClass(o):this.removeClass(o):m(o)?this.each(function(e){C(this).toggleClass(o.call(this,e,ht(this),t),t)}):this.each(function(){var e,t,n,i;if(s)for(t=0,n=C(this),i=vt(o);e=i[t++];)n.hasClass(e)?n.removeClass(e):n.addClass(e);else void 0!==o&&"boolean"!==r||((e=ht(this))&&V.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===o?"":V.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&-1<(" "+ft(ht(n))+" ").indexOf(t))return!0;return!1}});var gt=/\r/g;C.fn.extend({val:function(n){var i,e,o,t=this[0];return arguments.length?(o=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=o?n.call(this,e,C(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=C.map(t,function(e){return null==e?"":e+""})),(i=C.valHooks[this.type]||C.valHooks[this.nodeName.toLowerCase()])&&"set"in i&&void 0!==i.set(this,t,"value")||(this.value=t))})):t?(i=C.valHooks[t.type]||C.valHooks[t.nodeName.toLowerCase()])&&"get"in i&&void 0!==(e=i.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(gt,""):null==e?"":e:void 0}}),C.extend({valHooks:{option:{get:function(e){var t=C.find.attr(e,"value");return null!=t?t:ft(C.text(e))}},select:{get:function(e){var t,n,i,o=e.options,r=e.selectedIndex,s="select-one"===e.type,a=s?null:[],l=s?r+1:o.length;for(i=r<0?l:s?r:0;i<l;i++)if(((n=o[i]).selected||i===r)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=C(n).val(),s)return t;a.push(t)}return a},set:function(e,t){for(var n,i,o=e.options,r=C.makeArray(t),s=o.length;s--;)((i=o[s]).selected=-1<C.inArray(C.valHooks.option.get(i),r))&&(n=!0);return n||(e.selectedIndex=-1),r}}}}),C.each(["radio","checkbox"],function(){C.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<C.inArray(C(e).val(),t)}},y.checkOn||(C.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in T;var yt=/^(?:focusinfocus|focusoutblur)$/,mt=function(e){e.stopPropagation()};C.extend(C.event,{trigger:function(e,t,n,i){var o,r,s,a,l,c,d,u,p=[n||S],f=g.call(e,"type")?e.type:e,h=g.call(e,"namespace")?e.namespace.split("."):[];if(r=u=s=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!yt.test(f+C.event.triggered)&&(-1<f.indexOf(".")&&(f=(h=f.split(".")).shift(),h.sort()),l=f.indexOf(":")<0&&"on"+f,(e=e[C.expando]?e:new C.Event(f,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:C.makeArray(t,[e]),d=C.event.special[f]||{},i||!d.trigger||!1!==d.trigger.apply(n,t))){if(!i&&!d.noBubble&&!w(n)){for(a=d.delegateType||f,yt.test(a+f)||(r=r.parentNode);r;r=r.parentNode)p.push(r),s=r;s===(n.ownerDocument||S)&&p.push(s.defaultView||s.parentWindow||T)}for(o=0;(r=p[o++])&&!e.isPropagationStopped();)u=r,e.type=1<o?a:d.bindType||f,(c=(V.get(r,"events")||{})[e.type]&&V.get(r,"handle"))&&c.apply(r,t),(c=l&&r[l])&&c.apply&&G(r)&&(e.result=c.apply(r,t),!1===e.result&&e.preventDefault());return e.type=f,i||e.isDefaultPrevented()||d._default&&!1!==d._default.apply(p.pop(),t)||!G(n)||l&&m(n[f])&&!w(n)&&((s=n[l])&&(n[l]=null),C.event.triggered=f,e.isPropagationStopped()&&u.addEventListener(f,mt),n[f](),e.isPropagationStopped()&&u.removeEventListener(f,mt),C.event.triggered=void 0,s&&(n[l]=s)),e.result}},simulate:function(e,t,n){var i=C.extend(new C.Event,n,{type:e,isSimulated:!0});C.event.trigger(i,null,t)}}),C.fn.extend({trigger:function(e,t){return this.each(function(){C.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return C.event.trigger(e,t,n,!0)}}),y.focusin||C.each({focus:"focusin",blur:"focusout"},function(n,i){var o=function(e){C.event.simulate(i,e.target,C.event.fix(e))};C.event.special[i]={setup:function(){var e=this.ownerDocument||this,t=V.access(e,i);t||e.addEventListener(n,o,!0),V.access(e,i,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=V.access(e,i)-1;t?V.access(e,i,t):(e.removeEventListener(n,o,!0),V.remove(e,i))}}});var wt=T.location,kt=Date.now(),bt=/\?/;C.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new T.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||C.error("Invalid XML: "+e),t};var xt=/\[\]$/,Tt=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,Ct=/^(?:input|select|textarea|keygen)/i;function $t(n,e,i,o){var t;if(Array.isArray(e))C.each(e,function(e,t){i||xt.test(n)?o(n,t):$t(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,i,o)});else if(i||"object"!==b(e))o(n,e);else for(t in e)$t(n+"["+t+"]",e[t],i,o)}C.param=function(e,t){var n,i=[],o=function(e,t){var n=m(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!C.isPlainObject(e))C.each(e,function(){o(this.name,this.value)});else for(n in e)$t(n,e[n],t,o);return i.join("&")},C.fn.extend({serialize:function(){return C.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=C.prop(this,"elements");return e?C.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!C(this).is(":disabled")&&Ct.test(this.nodeName)&&!St.test(e)&&(this.checked||!le.test(e))}).map(function(e,t){var n=C(this).val();return null==n?null:Array.isArray(n)?C.map(n,function(e){return{name:t.name,value:e.replace(Tt,"\r\n")}}):{name:t.name,value:n.replace(Tt,"\r\n")}}).get()}});var At=/%20/g,Et=/#.*$/,jt=/([?&])_=[^&]*/,Dt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Mt=/^(?:GET|HEAD)$/,Nt=/^\/\//,Pt={},Ot={},Ht="*/".concat("*"),Lt=S.createElement("a");function qt(r){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,i=0,o=e.toLowerCase().match(H)||[];if(m(t))for(;n=o[i++];)"+"===n[0]?(n=n.slice(1)||"*",(r[n]=r[n]||[]).unshift(t)):(r[n]=r[n]||[]).push(t)}}function It(t,o,r,s){var a={},l=t===Ot;function c(e){var i;return a[e]=!0,C.each(t[e]||[],function(e,t){var n=t(o,r,s);return"string"!=typeof n||l||a[n]?l?!(i=n):void 0:(o.dataTypes.unshift(n),c(n),!1)}),i}return c(o.dataTypes[0])||!a["*"]&&c("*")}function zt(e,t){var n,i,o=C.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:i||(i={}))[n]=t[n]);return i&&C.extend(!0,e,i),e}Lt.href=wt.href,C.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:wt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ht,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":C.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,C.ajaxSettings),t):zt(C.ajaxSettings,e)},ajaxPrefilter:qt(Pt),ajaxTransport:qt(Ot),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var d,u,p,n,f,i,h,v,o,r,g=C.ajaxSetup({},t),y=g.context||g,m=g.context&&(y.nodeType||y.jquery)?C(y):C.event,w=C.Deferred(),k=C.Callbacks("once memory"),b=g.statusCode||{},s={},a={},l="canceled",x={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n)for(n={};t=Dt.exec(p);)n[t[1].toLowerCase()]=t[2];t=n[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=a[e.toLowerCase()]=a[e.toLowerCase()]||e,s[e]=t),this},overrideMimeType:function(e){return null==h&&(g.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)x.always(e[x.status]);else for(t in e)b[t]=[b[t],e[t]];return this},abort:function(e){var t=e||l;return d&&d.abort(t),c(0,t),this}};if(w.promise(x),g.url=((e||g.url||wt.href)+"").replace(Nt,wt.protocol+"//"),g.type=t.method||t.type||g.method||g.type,g.dataTypes=(g.dataType||"*").toLowerCase().match(H)||[""],null==g.crossDomain){i=S.createElement("a");try{i.href=g.url,i.href=i.href,g.crossDomain=Lt.protocol+"//"+Lt.host!=i.protocol+"//"+i.host}catch(e){g.crossDomain=!0}}if(g.data&&g.processData&&"string"!=typeof g.data&&(g.data=C.param(g.data,g.traditional)),It(Pt,g,t,x),h)return x;for(o in(v=C.event&&g.global)&&0==C.active++&&C.event.trigger("ajaxStart"),g.type=g.type.toUpperCase(),g.hasContent=!Mt.test(g.type),u=g.url.replace(Et,""),g.hasContent?g.data&&g.processData&&0===(g.contentType||"").indexOf("application/x-www-form-urlencoded")&&(g.data=g.data.replace(At,"+")):(r=g.url.slice(u.length),g.data&&(g.processData||"string"==typeof g.data)&&(u+=(bt.test(u)?"&":"?")+g.data,delete g.data),!1===g.cache&&(u=u.replace(jt,"$1"),r=(bt.test(u)?"&":"?")+"_="+kt+++r),g.url=u+r),g.ifModified&&(C.lastModified[u]&&x.setRequestHeader("If-Modified-Since",C.lastModified[u]),C.etag[u]&&x.setRequestHeader("If-None-Match",C.etag[u])),(g.data&&g.hasContent&&!1!==g.contentType||t.contentType)&&x.setRequestHeader("Content-Type",g.contentType),x.setRequestHeader("Accept",g.dataTypes[0]&&g.accepts[g.dataTypes[0]]?g.accepts[g.dataTypes[0]]+("*"!==g.dataTypes[0]?", "+Ht+"; q=0.01":""):g.accepts["*"]),g.headers)x.setRequestHeader(o,g.headers[o]);if(g.beforeSend&&(!1===g.beforeSend.call(y,x,g)||h))return x.abort();if(l="abort",k.add(g.complete),x.done(g.success),x.fail(g.error),d=It(Ot,g,t,x)){if(x.readyState=1,v&&m.trigger("ajaxSend",[x,g]),h)return x;g.async&&0<g.timeout&&(f=T.setTimeout(function(){x.abort("timeout")},g.timeout));try{h=!1,d.send(s,c)}catch(e){if(h)throw e;c(-1,e)}}else c(-1,"No Transport");function c(e,t,n,i){var o,r,s,a,l,c=t;h||(h=!0,f&&T.clearTimeout(f),d=void 0,p=i||"",x.readyState=0<e?4:0,o=200<=e&&e<300||304===e,n&&(a=function(e,t,n){for(var i,o,r,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}if(l[0]in n)r=l[0];else{for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){r=o;break}s||(s=o)}r=r||s}if(r)return r!==l[0]&&l.unshift(r),n[r]}(g,x,n)),a=function(e,t,n,i){var o,r,s,a,l,c={},d=e.dataTypes.slice();if(d[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];for(r=d.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=d.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(!(s=c[l+" "+r]||c["* "+r]))for(o in c)if((a=o.split(" "))[1]===r&&(s=c[l+" "+a[0]]||c["* "+a[0]])){!0===s?s=c[o]:!0!==c[o]&&(r=a[0],d.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}(g,a,x,o),o?(g.ifModified&&((l=x.getResponseHeader("Last-Modified"))&&(C.lastModified[u]=l),(l=x.getResponseHeader("etag"))&&(C.etag[u]=l)),204===e||"HEAD"===g.type?c="nocontent":304===e?c="notmodified":(c=a.state,r=a.data,o=!(s=a.error))):(s=c,!e&&c||(c="error",e<0&&(e=0))),x.status=e,x.statusText=(t||c)+"",o?w.resolveWith(y,[r,c,x]):w.rejectWith(y,[x,c,s]),x.statusCode(b),b=void 0,v&&m.trigger(o?"ajaxSuccess":"ajaxError",[x,g,o?r:s]),k.fireWith(y,[x,c]),v&&(m.trigger("ajaxComplete",[x,g]),--C.active||C.event.trigger("ajaxStop")))}return x},getJSON:function(e,t,n){return C.get(e,t,n,"json")},getScript:function(e,t){return C.get(e,void 0,t,"script")}}),C.each(["get","post"],function(e,o){C[o]=function(e,t,n,i){return m(t)&&(i=i||n,n=t,t=void 0),C.ajax(C.extend({url:e,type:o,dataType:i,data:t,success:n},C.isPlainObject(e)&&e))}}),C._evalUrl=function(e){return C.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},C.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=C(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){C(this).wrapInner(n.call(this,e))}):this.each(function(){var e=C(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){C(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){C(this).replaceWith(this.childNodes)}),this}}),C.expr.pseudos.hidden=function(e){return!C.expr.pseudos.visible(e)},C.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},C.ajaxSettings.xhr=function(){try{return new T.XMLHttpRequest}catch(e){}};var Wt={0:200,1223:204},Rt=C.ajaxSettings.xhr();y.cors=!!Rt&&"withCredentials"in Rt,y.ajax=Rt=!!Rt,C.ajaxTransport(function(o){var r,s;if(y.cors||Rt&&!o.crossDomain)return{send:function(e,t){var n,i=o.xhr();if(i.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(n in o.xhrFields)i[n]=o.xhrFields[n];for(n in o.mimeType&&i.overrideMimeType&&i.overrideMimeType(o.mimeType),o.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)i.setRequestHeader(n,e[n]);r=function(e){return function(){r&&(r=s=i.onload=i.onerror=i.onabort=i.ontimeout=i.onreadystatechange=null,"abort"===e?i.abort():"error"===e?"number"!=typeof i.status?t(0,"error"):t(i.status,i.statusText):t(Wt[i.status]||i.status,i.statusText,"text"!==(i.responseType||"text")||"string"!=typeof i.responseText?{binary:i.response}:{text:i.responseText},i.getAllResponseHeaders()))}},i.onload=r(),s=i.onerror=i.ontimeout=r("error"),void 0!==i.onabort?i.onabort=s:i.onreadystatechange=function(){4===i.readyState&&T.setTimeout(function(){r&&s()})},r=r("abort");try{i.send(o.hasContent&&o.data||null)}catch(e){if(r)throw e}},abort:function(){r&&r()}}}),C.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),C.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return C.globalEval(e),e}}}),C.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),C.ajaxTransport("script",function(n){var i,o;if(n.crossDomain)return{send:function(e,t){i=C("<script>").prop({charset:n.scriptCharset,src:n.url}).on("load error",o=function(e){i.remove(),o=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(i[0])},abort:function(){o&&o()}}});var Ft,Bt=[],Ut=/(=)\?(?=&|$)|\?\?/;C.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Bt.pop()||C.expando+"_"+kt++;return this[e]=!0,e}}),C.ajaxPrefilter("json jsonp",function(e,t,n){var i,o,r,s=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Ut,"$1"+i):!1!==e.jsonp&&(e.url+=(bt.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return r||C.error(i+" was not called"),r[0]},e.dataTypes[0]="json",o=T[i],T[i]=function(){r=arguments},n.always(function(){void 0===o?C(T).removeProp(i):T[i]=o,e[i]&&(e.jsonpCallback=t.jsonpCallback,Bt.push(i)),r&&m(o)&&o(r[0]),r=o=void 0}),"script"}),y.createHTMLDocument=((Ft=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ft.childNodes.length),C.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((i=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(i)):t=S),r=!n&&[],(o=E.exec(e))?[t.createElement(o[1])]:(o=ye([e],t,r),r&&r.length&&C(r).remove(),C.merge([],o.childNodes)));var i,o,r},C.fn.load=function(e,t,n){var i,o,r,s=this,a=e.indexOf(" ");return-1<a&&(i=ft(e.slice(a)),e=e.slice(0,a)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),0<s.length&&C.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(e){r=arguments,s.html(i?C("<div>").append(C.parseHTML(e)).find(i):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,r||[e.responseText,t,e])})}),this},C.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){C.fn[t]=function(e){return this.on(t,e)}}),C.expr.pseudos.animated=function(t){return C.grep(C.timers,function(e){return t===e.elem}).length},C.offset={setOffset:function(e,t,n){var i,o,r,s,a,l,c=C.css(e,"position"),d=C(e),u={};"static"===c&&(e.style.position="relative"),a=d.offset(),r=C.css(e,"top"),l=C.css(e,"left"),("absolute"===c||"fixed"===c)&&-1<(r+l).indexOf("auto")?(s=(i=d.position()).top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(l)||0),m(t)&&(t=t.call(e,n,C.extend({},a))),null!=t.top&&(u.top=t.top-a.top+s),null!=t.left&&(u.left=t.left-a.left+o),"using"in t?t.using.call(e,u):d.css(u)}},C.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){C.offset.setOffset(this,t,e)});var e,n,i=this[0];return i?i.getClientRects().length?(e=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,i=this[0],o={top:0,left:0};if("fixed"===C.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===C.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&((o=C(e).offset()).top+=C.css(e,"borderTopWidth",!0),o.left+=C.css(e,"borderLeftWidth",!0))}return{top:t.top-o.top-C.css(i,"marginTop",!0),left:t.left-o.left-C.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===C.css(e,"position");)e=e.offsetParent;return e||me})}}),C.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,o){var r="pageYOffset"===o;C.fn[t]=function(e){return F(this,function(e,t,n){var i;if(w(e)?i=e:9===e.nodeType&&(i=e.defaultView),void 0===n)return i?i[o]:e[t];i?i.scrollTo(r?i.pageXOffset:n,r?n:i.pageYOffset):e[t]=n},t,e,arguments.length)}}),C.each(["top","left"],function(e,n){C.cssHooks[n]=We(y.pixelPosition,function(e,t){if(t)return t=ze(e,n),Le.test(t)?C(e).position()[n]+"px":t})}),C.each({Height:"height",Width:"width"},function(s,a){C.each({padding:"inner"+s,content:a,"":"outer"+s},function(i,r){C.fn[r]=function(e,t){var n=arguments.length&&(i||"boolean"!=typeof e),o=i||(!0===e||!0===t?"margin":"border");return F(this,function(e,t,n){var i;return w(e)?0===r.indexOf("outer")?e["inner"+s]:e.document.documentElement["client"+s]:9===e.nodeType?(i=e.documentElement,Math.max(e.body["scroll"+s],i["scroll"+s],e.body["offset"+s],i["offset"+s],i["client"+s])):void 0===n?C.css(e,t,o):C.style(e,t,n,o)},a,n?e:void 0,n)}})}),C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){C.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),C.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),C.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),C.proxy=function(e,t){var n,i,o;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return i=a.call(arguments,2),(o=function(){return e.apply(t||this,i.concat(a.call(arguments)))}).guid=e.guid=e.guid||C.guid++,o},C.holdReady=function(e){e?C.readyWait++:C.ready(!0)},C.isArray=Array.isArray,C.parseJSON=JSON.parse,C.nodeName=A,C.isFunction=m,C.isWindow=w,C.camelCase=_,C.type=b,C.now=Date.now,C.isNumeric=function(e){var t=C.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return C});var Xt=T.jQuery,_t=T.$;return C.noConflict=function(e){return T.$===C&&(T.$=_t),e&&T.jQuery===C&&(T.jQuery=Xt),C},e||(T.jQuery=T.$=C),C});var $jscomp={scope:{},findInternal:function(e,t,n){e instanceof String&&(e=String(e));for(var i=e.length,o=0;o<i;o++){var r=e[o];if(t.call(n,r,o,e))return{i:o,v:r}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[t]=n.value)},$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e},$jscomp.global=$jscomp.getGlobal(this),$jscomp.polyfill=function(e,t,n,i){if(t){for(n=$jscomp.global,e=e.split("."),i=0;i<e.length-1;i++){var o=e[i];o in n||(n[o]={}),n=n[o]}(t=t(i=n[e=e[e.length-1]]))!=i&&null!=t&&$jscomp.defineProperty(n,e,{configurable:!0,writable:!0,value:t})}},$jscomp.polyfill("Array.prototype.find",function(e){return e||function(e,t){return $jscomp.findInternal(this,e,t).v}},"es6-impl","es3"),function(e,t,n){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(t||n)}(function(s){var a=function(c,w,k){var b={invalid:[],getCaret:function(){try{var e,t=0,n=c.get(0),i=document.selection,o=n.selectionStart;return i&&-1===navigator.appVersion.indexOf("MSIE 10")?((e=i.createRange()).moveStart("character",-b.val().length),t=e.text.length):(o||"0"===o)&&(t=o),t}catch(e){}},setCaret:function(e){try{if(c.is(":focus")){var t,n=c.get(0);n.setSelectionRange?n.setSelectionRange(e,e):((t=n.createTextRange()).collapse(!0),t.moveEnd("character",e),t.moveStart("character",e),t.select())}}catch(e){}},events:function(){c.on("keydown.mask",function(e){c.data("mask-keycode",e.keyCode||e.which),c.data("mask-previus-value",c.val()),c.data("mask-previus-caret-pos",b.getCaret()),b.maskDigitPosMapOld=b.maskDigitPosMap}).on(s.jMaskGlobals.useInput?"input.mask":"keyup.mask",b.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){c.keydown().keyup()},100)}).on("change.mask",function(){c.data("changed",!0)}).on("blur.mask",function(){r===b.val()||c.data("changed")||c.trigger("change"),c.data("changed",!1)}).on("blur.mask",function(){r=b.val()}).on("focus.mask",function(e){!0===k.selectOnFocus&&s(e.target).select()}).on("focusout.mask",function(){k.clearIfNotMatch&&!i.test(b.val())&&b.val("")})},getRegexMask:function(){for(var e,t,n,i,o=[],r=0;r<w.length;r++)(e=x.translation[w.charAt(r)])?(t=e.pattern.toString().replace(/.{1}$|^.{1}/g,""),n=e.optional,(e=e.recursive)?(o.push(w.charAt(r)),i={digit:w.charAt(r),pattern:t}):o.push(n||e?t+"?":t)):o.push(w.charAt(r).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));return o=o.join(""),i&&(o=o.replace(new RegExp("("+i.digit+"(.*"+i.digit+")?)"),"($1)?").replace(new RegExp(i.digit,"g"),i.pattern)),new RegExp(o)},destroyEvents:function(){c.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(e){var t=c.is("input")?"val":"text";return 0<arguments.length?(c[t]()!==e&&c[t](e),t=c):t=c[t](),t},calculateCaretPosition:function(){var e=c.data("mask-previus-value")||"",t=b.getMasked(),n=b.getCaret();if(e!==t){var i,o=c.data("mask-previus-caret-pos")||0,r=(t=t.length,e.length),s=e=0,a=0,l=0;for(i=n;i<t&&b.maskDigitPosMap[i];i++)s++;for(i=n-1;0<=i&&b.maskDigitPosMap[i];i--)e++;for(i=n-1;0<=i;i--)b.maskDigitPosMap[i]&&a++;for(i=o-1;0<=i;i--)b.maskDigitPosMapOld[i]&&l++;r<n?n=10*t:n<=o&&o!==r?b.maskDigitPosMapOld[n]||(n=(o=n)-(l-a)-e,b.maskDigitPosMap[n]&&(n=o)):o<n&&(n=n+(a-l)+s)}return n},behaviour:function(e){e=e||window.event,b.invalid=[];var t=c.data("mask-keycode");if(-1===s.inArray(t,x.byPassKeys)){t=b.getMasked();var n=b.getCaret();return setTimeout(function(){b.setCaret(b.calculateCaretPosition())},s.jMaskGlobals.keyStrokeCompensation),b.val(t),b.setCaret(n),b.callbacks(e)}},getMasked:function(e,t){var n,i,o,r=[],s=void 0===t?b.val():t+"",a=0,l=w.length,c=0,d=s.length,u=1,p="push",f=-1,h=0,v=[];for(k.reverse?(p="unshift",u=-1,n=0,a=l-1,c=d-1,i=function(){return-1<a&&-1<c}):(n=l-1,i=function(){return a<l&&c<d});i();){var g=w.charAt(a),y=s.charAt(c),m=x.translation[g];m?(y.match(m.pattern)?(r[p](y),m.recursive&&(-1===f?f=a:a===n&&a!==f&&(a=f-u),n===f&&(a-=u)),a+=u):y===o?(h--,o=void 0):m.optional?(a+=u,c-=u):m.fallback?(r[p](m.fallback),a+=u,c-=u):b.invalid.push({p:c,v:y,e:m.pattern}),c+=u):(e||r[p](g),y===g?(v.push(c),c+=u):(o=g,v.push(c+h),h++),a+=u)}return s=w.charAt(n),l!==d+1||x.translation[s]||r.push(s),r=r.join(""),b.mapMaskdigitPositions(r,v,d),r},mapMaskdigitPositions:function(e,t,n){for(e=k.reverse?e.length-n:0,b.maskDigitPosMap={},n=0;n<t.length;n++)b.maskDigitPosMap[t[n]+e]=1},callbacks:function(e){var t=b.val(),n=t!==r,i=[t,e,c,k],o=function(e,t,n){"function"==typeof k[e]&&t&&k[e].apply(this,n)};o("onChange",!0===n,i),o("onKeyPress",!0===n,i),o("onComplete",t.length===w.length,i),o("onInvalid",0<b.invalid.length,[t,e,c,b.invalid,k])}};c=s(c);var i,x=this,r=b.val();w="function"==typeof w?w(b.val(),void 0,c,k):w,x.mask=w,x.options=k,x.remove=function(){var e=b.getCaret();return x.options.placeholder&&c.removeAttr("placeholder"),c.data("mask-maxlength")&&c.removeAttr("maxlength"),b.destroyEvents(),b.val(x.getCleanVal()),b.setCaret(e),c},x.getCleanVal=function(){return b.getMasked(!0)},x.getMaskedVal=function(e){return b.getMasked(!1,e)},x.init=function(e){if(e=e||!1,k=k||{},x.clearIfNotMatch=s.jMaskGlobals.clearIfNotMatch,x.byPassKeys=s.jMaskGlobals.byPassKeys,x.translation=s.extend({},s.jMaskGlobals.translation,k.translation),x=s.extend(!0,{},x,k),i=b.getRegexMask(),e)b.events(),b.val(b.getMasked());else{k.placeholder&&c.attr("placeholder",k.placeholder),c.data("mask")&&c.attr("autocomplete","off");for(var t=!(e=0);e<w.length;e++){var n=x.translation[w.charAt(e)];if(n&&n.recursive){t=!1;break}}t&&c.attr("maxlength",w.length).data("mask-maxlength",!0),b.destroyEvents(),b.events(),e=b.getCaret(),b.val(b.getMasked()),b.setCaret(e)}},x.init(!c.is("input"))};s.maskWatchers={};var t=function(){var e=s(this),t={},n=e.attr("data-mask");if(e.attr("data-mask-reverse")&&(t.reverse=!0),e.attr("data-mask-clearifnotmatch")&&(t.clearIfNotMatch=!0),"true"===e.attr("data-mask-selectonfocus")&&(t.selectOnFocus=!0),l(e,n,t))return e.data("mask",new a(this,n,t))},l=function(e,t,n){n=n||{};var i=s(e).data("mask"),o=JSON.stringify;e=s(e).val()||s(e).text();try{return"function"==typeof t&&(t=t(e)),"object"!=typeof i||o(i.options)!==o(n)||i.mask!==t}catch(e){}},e=function(e){var t,n=document.createElement("div");return(t=(e="on"+e)in n)||(n.setAttribute(e,"return;"),t="function"==typeof n[e]),t};s.fn.mask=function(e,t){t=t||{};var n=this.selector,i=(o=s.jMaskGlobals).watchInterval,o=t.watchInputs||o.watchInputs,r=function(){if(l(this,e,t))return s(this).data("mask",new a(this,e,t))};return s(this).each(r),n&&""!==n&&o&&(clearInterval(s.maskWatchers[n]),s.maskWatchers[n]=setInterval(function(){s(document).find(n).each(r)},i)),this},s.fn.masked=function(e){return this.data("mask").getMaskedVal(e)},s.fn.unmask=function(){return clearInterval(s.maskWatchers[this.selector]),delete s.maskWatchers[this.selector],this.each(function(){var e=s(this).data("mask");e&&e.remove().removeData("mask")})},s.fn.cleanVal=function(){return this.data("mask").getCleanVal()},s.applyDataMask=function(e){((e=e||s.jMaskGlobals.maskElements)instanceof s?e:s(e)).filter(s.jMaskGlobals.dataMaskAttr).each(t)},e={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&e("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}},s.jMaskGlobals=s.jMaskGlobals||{},(e=s.jMaskGlobals=s.extend(!0,{},e,s.jMaskGlobals)).dataMask&&s.applyDataMask(),setInterval(function(){s.jMaskGlobals.watchDataMask&&s.applyDataMask()},e.watchInterval)},window.jQuery,window.Zepto),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(c){"use strict";var o,s=window.Slick||{};(o=0,s=function(e,t){var n,i=this;i.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:c(e),appendDots:c(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return c('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},i.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},c.extend(i,i.initials),i.activeBreakpoint=null,i.animType=null,i.animProp=null,i.breakpoints=[],i.breakpointSettings=[],i.cssTransitions=!1,i.focussed=!1,i.interrupted=!1,i.hidden="hidden",i.paused=!0,i.positionProp=null,i.respondTo=null,i.rowCount=1,i.shouldClick=!0,i.$slider=c(e),i.$slidesCache=null,i.transformType=null,i.transitionType=null,i.visibilityChange="visibilitychange",i.windowWidth=0,i.windowTimer=null,n=c(e).data("slick")||{},i.options=c.extend({},i.defaults,t,n),i.currentSlide=i.options.initialSlide,i.originalSettings=i.options,void 0!==document.mozHidden?(i.hidden="mozHidden",i.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(i.hidden="webkitHidden",i.visibilityChange="webkitvisibilitychange"),i.autoPlay=c.proxy(i.autoPlay,i),i.autoPlayClear=c.proxy(i.autoPlayClear,i),i.autoPlayIterator=c.proxy(i.autoPlayIterator,i),i.changeSlide=c.proxy(i.changeSlide,i),i.clickHandler=c.proxy(i.clickHandler,i),i.selectHandler=c.proxy(i.selectHandler,i),i.setPosition=c.proxy(i.setPosition,i),i.swipeHandler=c.proxy(i.swipeHandler,i),i.dragHandler=c.proxy(i.dragHandler,i),i.keyHandler=c.proxy(i.keyHandler,i),i.instanceUid=o++,i.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,i.registerBreakpoints(),i.init(!0)}).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},s.prototype.addSlide=s.prototype.slickAdd=function(e,t,n){var i=this;if("boolean"==typeof t)n=t,t=null;else if(t<0||t>=i.slideCount)return!1;i.unload(),"number"==typeof t?0===t&&0===i.$slides.length?c(e).appendTo(i.$slideTrack):n?c(e).insertBefore(i.$slides.eq(t)):c(e).insertAfter(i.$slides.eq(t)):!0===n?c(e).prependTo(i.$slideTrack):c(e).appendTo(i.$slideTrack),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slides.each(function(e,t){c(t).attr("data-slick-index",e)}),i.$slidesCache=i.$slides,i.reinit()},s.prototype.animateHeight=function(){var e=this;if(1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:t},e.options.speed)}},s.prototype.animateSlide=function(e,t){var n={},i=this;i.animateHeight(),!0===i.options.rtl&&!1===i.options.vertical&&(e=-e),!1===i.transformsEnabled?!1===i.options.vertical?i.$slideTrack.animate({left:e},i.options.speed,i.options.easing,t):i.$slideTrack.animate({top:e},i.options.speed,i.options.easing,t):!1===i.cssTransitions?(!0===i.options.rtl&&(i.currentLeft=-i.currentLeft),c({animStart:i.currentLeft}).animate({animStart:e},{duration:i.options.speed,easing:i.options.easing,step:function(e){e=Math.ceil(e),!1===i.options.vertical?n[i.animType]="translate("+e+"px, 0px)":n[i.animType]="translate(0px,"+e+"px)",i.$slideTrack.css(n)},complete:function(){t&&t.call()}})):(i.applyTransition(),e=Math.ceil(e),!1===i.options.vertical?n[i.animType]="translate3d("+e+"px, 0px, 0px)":n[i.animType]="translate3d(0px,"+e+"px, 0px)",i.$slideTrack.css(n),t&&setTimeout(function(){i.disableTransition(),t.call()},i.options.speed))},s.prototype.getNavTarget=function(){var e=this.options.asNavFor;return e&&null!==e&&(e=c(e).not(this.$slider)),e},s.prototype.asNavFor=function(t){var e=this.getNavTarget();null!==e&&"object"==typeof e&&e.each(function(){var e=c(this).slick("getSlick");e.unslicked||e.slideHandler(t,!0)})},s.prototype.applyTransition=function(e){var t=this,n={};!1===t.options.fade?n[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:n[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,!1===t.options.fade?t.$slideTrack.css(n):t.$slides.eq(e).css(n)},s.prototype.autoPlay=function(){var e=this;e.autoPlayClear(),e.slideCount>e.options.slidesToShow&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},s.prototype.autoPlayClear=function(){this.autoPlayTimer&&clearInterval(this.autoPlayTimer)},s.prototype.autoPlayIterator=function(){var e=this,t=e.currentSlide+e.options.slidesToScroll;e.paused||e.interrupted||e.focussed||(!1===e.options.infinite&&(1===e.direction&&e.currentSlide+1===e.slideCount-1?e.direction=0:0===e.direction&&(t=e.currentSlide-e.options.slidesToScroll,e.currentSlide-1==0&&(e.direction=1))),e.slideHandler(t))},s.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=c(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=c(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},s.prototype.buildDots=function(){var e,t,n=this;if(!0===n.options.dots){for(n.$slider.addClass("slick-dotted"),t=c("<ul />").addClass(n.options.dotsClass),e=0;e<=n.getDotCount();e+=1)t.append(c("<li />").append(n.options.customPaging.call(this,n,e)));n.$dots=t.appendTo(n.options.appendDots),n.$dots.find("li").first().addClass("slick-active")}},s.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){c(t).attr("data-slick-index",e).data("originalStyling",c(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?c('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),c("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},s.prototype.buildRows=function(){var e,t,n,i,o,r,s,a=this;if(i=document.createDocumentFragment(),r=a.$slider.children(),1<a.options.rows){for(s=a.options.slidesPerRow*a.options.rows,o=Math.ceil(r.length/s),e=0;e<o;e++){var l=document.createElement("div");for(t=0;t<a.options.rows;t++){var c=document.createElement("div");for(n=0;n<a.options.slidesPerRow;n++){var d=e*s+(t*a.options.slidesPerRow+n);r.get(d)&&c.appendChild(r.get(d))}l.appendChild(c)}i.appendChild(l)}a.$slider.empty().append(i),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},s.prototype.checkResponsive=function(e,t){var n,i,o,r=this,s=!1,a=r.$slider.width(),l=window.innerWidth||c(window).width();if("window"===r.respondTo?o=l:"slider"===r.respondTo?o=a:"min"===r.respondTo&&(o=Math.min(l,a)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){for(n in i=null,r.breakpoints)r.breakpoints.hasOwnProperty(n)&&(!1===r.originalSettings.mobileFirst?o<r.breakpoints[n]&&(i=r.breakpoints[n]):o>r.breakpoints[n]&&(i=r.breakpoints[n]));null!==i?null!==r.activeBreakpoint?(i!==r.activeBreakpoint||t)&&(r.activeBreakpoint=i,"unslick"===r.breakpointSettings[i]?r.unslick(i):(r.options=c.extend({},r.originalSettings,r.breakpointSettings[i]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),s=i):(r.activeBreakpoint=i,"unslick"===r.breakpointSettings[i]?r.unslick(i):(r.options=c.extend({},r.originalSettings,r.breakpointSettings[i]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),s=i):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),s=i),e||!1===s||r.$slider.trigger("breakpoint",[r,s])}},s.prototype.changeSlide=function(e,t){var n,i,o=this,r=c(e.currentTarget);switch(r.is("a")&&e.preventDefault(),r.is("li")||(r=r.closest("li")),n=o.slideCount%o.options.slidesToScroll!=0?0:(o.slideCount-o.currentSlide)%o.options.slidesToScroll,e.data.message){case"previous":i=0===n?o.options.slidesToScroll:o.options.slidesToShow-n,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide-i,!1,t);break;case"next":i=0===n?o.options.slidesToScroll:n,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide+i,!1,t);break;case"index":var s=0===e.data.index?0:e.data.index||r.index()*o.options.slidesToScroll;o.slideHandler(o.checkNavigable(s),!1,t),r.children().trigger("focus");break;default:return}},s.prototype.checkNavigable=function(e){var t,n;if(n=0,e>(t=this.getNavigableIndexes())[t.length-1])e=t[t.length-1];else for(var i in t){if(e<t[i]){e=n;break}n=t[i]}return e},s.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(c("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",c.proxy(e.interrupt,e,!0)).off("mouseleave.slick",c.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),c(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&c(e.$slideTrack).children().off("click.slick",e.selectHandler),c(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),c(window).off("resize.slick.slick-"+e.instanceUid,e.resize),c("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),c(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},s.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",c.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",c.proxy(e.interrupt,e,!1))},s.prototype.cleanUpRows=function(){var e;1<this.options.rows&&((e=this.$slides.children().children()).removeAttr("style"),this.$slider.empty().append(e))},s.prototype.clickHandler=function(e){!1===this.shouldClick&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},s.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),c(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){c(this).attr("style",c(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},s.prototype.disableTransition=function(e){var t={};t[this.transitionType]="",!1===this.options.fade?this.$slideTrack.css(t):this.$slides.eq(e).css(t)},s.prototype.fadeSlide=function(e,t){var n=this;!1===n.cssTransitions?(n.$slides.eq(e).css({zIndex:n.options.zIndex}),n.$slides.eq(e).animate({opacity:1},n.options.speed,n.options.easing,t)):(n.applyTransition(e),n.$slides.eq(e).css({opacity:1,zIndex:n.options.zIndex}),t&&setTimeout(function(){n.disableTransition(e),t.call()},n.options.speed))},s.prototype.fadeSlideOut=function(e){var t=this;!1===t.cssTransitions?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},s.prototype.filterSlides=s.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},s.prototype.focusHandler=function(){var n=this;n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(e){e.stopImmediatePropagation();var t=c(this);setTimeout(function(){n.options.pauseOnFocus&&(n.focussed=t.is(":focus"),n.autoPlay())},0)})},s.prototype.getCurrent=s.prototype.slickCurrentSlide=function(){return this.currentSlide},s.prototype.getDotCount=function(){var e=this,t=0,n=0,i=0;if(!0===e.options.infinite)if(e.slideCount<=e.options.slidesToShow)++i;else for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(!0===e.options.centerMode)i=e.slideCount;else if(e.options.asNavFor)for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else i=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll);return i-1},s.prototype.getLeft=function(e){var t,n,i,o,r=this,s=0;return r.slideOffset=0,n=r.$slides.first().outerHeight(!0),!0===r.options.infinite?(r.slideCount>r.options.slidesToShow&&(r.slideOffset=r.slideWidth*r.options.slidesToShow*-1,o=-1,!0===r.options.vertical&&!0===r.options.centerMode&&(2===r.options.slidesToShow?o=-1.5:1===r.options.slidesToShow&&(o=-2)),s=n*r.options.slidesToShow*o),r.slideCount%r.options.slidesToScroll!=0&&e+r.options.slidesToScroll>r.slideCount&&r.slideCount>r.options.slidesToShow&&(e>r.slideCount?(r.slideOffset=(r.options.slidesToShow-(e-r.slideCount))*r.slideWidth*-1,s=(r.options.slidesToShow-(e-r.slideCount))*n*-1):(r.slideOffset=r.slideCount%r.options.slidesToScroll*r.slideWidth*-1,s=r.slideCount%r.options.slidesToScroll*n*-1))):e+r.options.slidesToShow>r.slideCount&&(r.slideOffset=(e+r.options.slidesToShow-r.slideCount)*r.slideWidth,s=(e+r.options.slidesToShow-r.slideCount)*n),r.slideCount<=r.options.slidesToShow&&(s=r.slideOffset=0),!0===r.options.centerMode&&r.slideCount<=r.options.slidesToShow?r.slideOffset=r.slideWidth*Math.floor(r.options.slidesToShow)/2-r.slideWidth*r.slideCount/2:!0===r.options.centerMode&&!0===r.options.infinite?r.slideOffset+=r.slideWidth*Math.floor(r.options.slidesToShow/2)-r.slideWidth:!0===r.options.centerMode&&(r.slideOffset=0,r.slideOffset+=r.slideWidth*Math.floor(r.options.slidesToShow/2)),t=!1===r.options.vertical?e*r.slideWidth*-1+r.slideOffset:e*n*-1+s,!0===r.options.variableWidth&&(i=r.slideCount<=r.options.slidesToShow||!1===r.options.infinite?r.$slideTrack.children(".slick-slide").eq(e):r.$slideTrack.children(".slick-slide").eq(e+r.options.slidesToShow),t=!0===r.options.rtl?i[0]?-1*(r.$slideTrack.width()-i[0].offsetLeft-i.width()):0:i[0]?-1*i[0].offsetLeft:0,!0===r.options.centerMode&&(i=r.slideCount<=r.options.slidesToShow||!1===r.options.infinite?r.$slideTrack.children(".slick-slide").eq(e):r.$slideTrack.children(".slick-slide").eq(e+r.options.slidesToShow+1),t=!0===r.options.rtl?i[0]?-1*(r.$slideTrack.width()-i[0].offsetLeft-i.width()):0:i[0]?-1*i[0].offsetLeft:0,t+=(r.$list.width()-i.outerWidth())/2)),t},s.prototype.getOption=s.prototype.slickGetOption=function(e){return this.options[e]},s.prototype.getNavigableIndexes=function(){var e,t=this,n=0,i=0,o=[];for(!1===t.options.infinite?e=t.slideCount:(n=-1*t.options.slidesToScroll,i=-1*t.options.slidesToScroll,e=2*t.slideCount);n<e;)o.push(n),n=i+t.options.slidesToScroll,i+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return o},s.prototype.getSlick=function(){return this},s.prototype.getSlideCount=function(){var n,i,o=this;return i=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(e,t){if(t.offsetLeft-i+c(t).outerWidth()/2>-1*o.swipeLeft)return n=t,!1}),Math.abs(c(n).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},s.prototype.goTo=s.prototype.slickGoTo=function(e,t){this.changeSlide({data:{message:"index",index:parseInt(e)}},t)},s.prototype.init=function(e){var t=this;c(t.$slider).hasClass("slick-initialized")||(c(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},s.prototype.initADA=function(){var n=this,i=Math.ceil(n.slideCount/n.options.slidesToShow),o=n.getNavigableIndexes().filter(function(e){return 0<=e&&e<n.slideCount});n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==n.$dots&&(n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(e){var t=o.indexOf(e);c(this).attr({role:"tabpanel",id:"slick-slide"+n.instanceUid+e,tabindex:-1}),-1!==t&&c(this).attr({"aria-describedby":"slick-slide-control"+n.instanceUid+t})}),n.$dots.attr("role","tablist").find("li").each(function(e){var t=o[e];c(this).attr({role:"presentation"}),c(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+n.instanceUid+e,"aria-controls":"slick-slide"+n.instanceUid+t,"aria-label":e+1+" of "+i,"aria-selected":null,tabindex:"-1"})}).eq(n.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var e=n.currentSlide,t=e+n.options.slidesToShow;e<t;e++)n.$slides.eq(e).attr("tabindex",0);n.activateADA()},s.prototype.initArrowEvents=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow.on("keydown.slick",e.keyHandler),e.$nextArrow.on("keydown.slick",e.keyHandler)))},s.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(c("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&c("li",e.$dots).on("mouseenter.slick",c.proxy(e.interrupt,e,!0)).on("mouseleave.slick",c.proxy(e.interrupt,e,!1))},s.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",c.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",c.proxy(e.interrupt,e,!1)))},s.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),c(document).on(e.visibilityChange,c.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&c(e.$slideTrack).children().on("click.slick",e.selectHandler),c(window).on("orientationchange.slick.slick-"+e.instanceUid,c.proxy(e.orientationChange,e)),c(window).on("resize.slick.slick-"+e.instanceUid,c.proxy(e.resize,e)),c("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),c(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),c(e.setPosition)},s.prototype.initUI=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.show()},s.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&!0===t.options.accessibility?t.changeSlide({data:{message:!0===t.options.rtl?"next":"previous"}}):39===e.keyCode&&!0===t.options.accessibility&&t.changeSlide({data:{message:!0===t.options.rtl?"previous":"next"}}))},s.prototype.lazyLoad=function(){function e(e){c("img[data-lazy]",e).each(function(){var e=c(this),t=c(this).attr("data-lazy"),n=c(this).attr("data-srcset"),i=c(this).attr("data-sizes")||r.$slider.attr("data-sizes"),o=document.createElement("img");o.onload=function(){e.animate({opacity:0},100,function(){n&&(e.attr("srcset",n),i&&e.attr("sizes",i)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,e,t])})},o.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,e,t])},o.src=t})}var t,n,i,r=this;if(!0===r.options.centerMode?!0===r.options.infinite?i=(n=r.currentSlide+(r.options.slidesToShow/2+1))+r.options.slidesToShow+2:(n=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),i=r.options.slidesToShow/2+1+2+r.currentSlide):(n=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,i=Math.ceil(n+r.options.slidesToShow),!0===r.options.fade&&(0<n&&n--,i<=r.slideCount&&i++)),t=r.$slider.find(".slick-slide").slice(n,i),"anticipated"===r.options.lazyLoad)for(var o=n-1,s=i,a=r.$slider.find(".slick-slide"),l=0;l<r.options.slidesToScroll;l++)o<0&&(o=r.slideCount-1),t=(t=t.add(a.eq(o))).add(a.eq(s)),o--,s++;e(t),r.slideCount<=r.options.slidesToShow?e(r.$slider.find(".slick-slide")):r.currentSlide>=r.slideCount-r.options.slidesToShow?e(r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow)):0===r.currentSlide&&e(r.$slider.find(".slick-cloned").slice(-1*r.options.slidesToShow))},s.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},s.prototype.next=s.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},s.prototype.orientationChange=function(){this.checkResponsive(),this.setPosition()},s.prototype.pause=s.prototype.slickPause=function(){this.autoPlayClear(),this.paused=!0},s.prototype.play=s.prototype.slickPlay=function(){var e=this;e.autoPlay(),e.options.autoplay=!0,e.paused=!1,e.focussed=!1,e.interrupted=!1},s.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&c(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},s.prototype.prev=s.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},s.prototype.preventDefault=function(e){e.preventDefault()},s.prototype.progressiveLazyLoad=function(e){e=e||1;var t,n,i,o,r,s=this,a=c("img[data-lazy]",s.$slider);a.length?(t=a.first(),n=t.attr("data-lazy"),i=t.attr("data-srcset"),o=t.attr("data-sizes")||s.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){i&&(t.attr("srcset",i),o&&t.attr("sizes",o)),t.attr("src",n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===s.options.adaptiveHeight&&s.setPosition(),s.$slider.trigger("lazyLoaded",[s,t,n]),s.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){s.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),s.$slider.trigger("lazyLoadError",[s,t,n]),s.progressiveLazyLoad())},r.src=n):s.$slider.trigger("allImagesLoaded",[s])},s.prototype.refresh=function(e){var t,n,i=this;n=i.slideCount-i.options.slidesToShow,!i.options.infinite&&i.currentSlide>n&&(i.currentSlide=n),i.slideCount<=i.options.slidesToShow&&(i.currentSlide=0),t=i.currentSlide,i.destroy(!0),c.extend(i,i.initials,{currentSlide:t}),i.init(),e||i.changeSlide({data:{message:"index",index:t}},!1)},s.prototype.registerBreakpoints=function(){var e,t,n,i=this,o=i.options.responsive||null;if("array"===c.type(o)&&o.length){for(e in i.respondTo=i.options.respondTo||"window",o)if(n=i.breakpoints.length-1,o.hasOwnProperty(e)){for(t=o[e].breakpoint;0<=n;)i.breakpoints[n]&&i.breakpoints[n]===t&&i.breakpoints.splice(n,1),n--;i.breakpoints.push(t),i.breakpointSettings[t]=o[e].settings}i.breakpoints.sort(function(e,t){return i.options.mobileFirst?e-t:t-e})}},s.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&c(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},s.prototype.resize=function(){var e=this;c(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=c(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},s.prototype.removeSlide=s.prototype.slickRemove=function(e,t,n){var i=this;if(e="boolean"==typeof e?!0===(t=e)?0:i.slideCount-1:!0===t?--e:e,i.slideCount<1||e<0||e>i.slideCount-1)return!1;i.unload(),!0===n?i.$slideTrack.children().remove():i.$slideTrack.children(this.options.slide).eq(e).remove(),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slidesCache=i.$slides,i.reinit()},s.prototype.setCSS=function(e){var t,n,i=this,o={};!0===i.options.rtl&&(e=-e),t="left"==i.positionProp?Math.ceil(e)+"px":"0px",n="top"==i.positionProp?Math.ceil(e)+"px":"0px",o[i.positionProp]=e,!1===i.transformsEnabled||(!(o={})===i.cssTransitions?o[i.animType]="translate("+t+", "+n+")":o[i.animType]="translate3d("+t+", "+n+", 0px)"),i.$slideTrack.css(o)},s.prototype.setDimensions=function(){var e=this;!1===e.options.vertical?!0===e.options.centerMode&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),!0===e.options.centerMode&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),!1===e.options.vertical&&!1===e.options.variableWidth?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):!0===e.options.variableWidth?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();!1===e.options.variableWidth&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},s.prototype.setFade=function(){var n,i=this;i.$slides.each(function(e,t){n=i.slideWidth*e*-1,!0===i.options.rtl?c(t).css({position:"relative",right:n,top:0,zIndex:i.options.zIndex-2,opacity:0}):c(t).css({position:"relative",left:n,top:0,zIndex:i.options.zIndex-2,opacity:0})}),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},s.prototype.setHeight=function(){var e=this;if(1===e.options.slidesToShow&&!0===e.options.adaptiveHeight&&!1===e.options.vertical){var t=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.css("height",t)}},s.prototype.setOption=s.prototype.slickSetOption=function(){var e,t,n,i,o,r=this,s=!1;if("object"===c.type(arguments[0])?(n=arguments[0],s=arguments[1],o="multiple"):"string"===c.type(arguments[0])&&(n=arguments[0],i=arguments[1],s=arguments[2],"responsive"===arguments[0]&&"array"===c.type(arguments[1])?o="responsive":void 0!==arguments[1]&&(o="single")),"single"===o)r.options[n]=i;else if("multiple"===o)c.each(n,function(e,t){r.options[e]=t});else if("responsive"===o)for(t in i)if("array"!==c.type(r.options.responsive))r.options.responsive=[i[t]];else{for(e=r.options.responsive.length-1;0<=e;)r.options.responsive[e].breakpoint===i[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(i[t])}s&&(r.unload(),r.reinit())},s.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),!1===e.options.fade?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},s.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=!0===e.options.vertical?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),void 0===t.WebkitTransition&&void 0===t.MozTransition&&void 0===t.msTransition||!0===e.options.useCSS&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&!1!==e.animType&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&!1!==e.animType},s.prototype.setSlideClasses=function(e){var t,n,i,o,r=this;if(n=r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),r.$slides.eq(e).addClass("slick-current"),!0===r.options.centerMode){var s=r.options.slidesToShow%2==0?1:0;t=Math.floor(r.options.slidesToShow/2),!0===r.options.infinite&&(t<=e&&e<=r.slideCount-1-t?r.$slides.slice(e-t+s,e+t+1).addClass("slick-active").attr("aria-hidden","false"):(i=r.options.slidesToShow+e,n.slice(i-t+1+s,i+t+2).addClass("slick-active").attr("aria-hidden","false")),0===e?n.eq(n.length-1-r.options.slidesToShow).addClass("slick-center"):e===r.slideCount-1&&n.eq(r.options.slidesToShow).addClass("slick-center")),r.$slides.eq(e).addClass("slick-center")}else 0<=e&&e<=r.slideCount-r.options.slidesToShow?r.$slides.slice(e,e+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):n.length<=r.options.slidesToShow?n.addClass("slick-active").attr("aria-hidden","false"):(o=r.slideCount%r.options.slidesToShow,i=!0===r.options.infinite?r.options.slidesToShow+e:e,r.options.slidesToShow==r.options.slidesToScroll&&r.slideCount-e<r.options.slidesToShow?n.slice(i-(r.options.slidesToShow-o),i+o).addClass("slick-active").attr("aria-hidden","false"):n.slice(i,i+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==r.options.lazyLoad&&"anticipated"!==r.options.lazyLoad||r.lazyLoad()},s.prototype.setupInfinite=function(){var e,t,n,i=this;if(!0===i.options.fade&&(i.options.centerMode=!1),!0===i.options.infinite&&!1===i.options.fade&&(t=null,i.slideCount>i.options.slidesToShow)){for(n=!0===i.options.centerMode?i.options.slidesToShow+1:i.options.slidesToShow,e=i.slideCount;e>i.slideCount-n;e-=1)t=e-1,c(i.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");for(e=0;e<n+i.slideCount;e+=1)t=e,c(i.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");i.$slideTrack.find(".slick-cloned").find("[id]").each(function(){c(this).attr("id","")})}},s.prototype.interrupt=function(e){e||this.autoPlay(),this.interrupted=e},s.prototype.selectHandler=function(e){var t=c(e.target).is(".slick-slide")?c(e.target):c(e.target).parents(".slick-slide"),n=parseInt(t.attr("data-slick-index"));n||(n=0),this.slideCount<=this.options.slidesToShow?this.slideHandler(n,!1,!0):this.slideHandler(n)},s.prototype.slideHandler=function(e,t,n){var i,o,r,s,a,l=null,c=this;if(t=t||!1,!(!0===c.animating&&!0===c.options.waitForAnimate||!0===c.options.fade&&c.currentSlide===e))if(!1===t&&c.asNavFor(e),i=e,l=c.getLeft(i),s=c.getLeft(c.currentSlide),c.currentLeft=null===c.swipeLeft?s:c.swipeLeft,!1===c.options.infinite&&!1===c.options.centerMode&&(e<0||e>c.getDotCount()*c.options.slidesToScroll))!1===c.options.fade&&(i=c.currentSlide,!0!==n?c.animateSlide(s,function(){c.postSlide(i)}):c.postSlide(i));else if(!1===c.options.infinite&&!0===c.options.centerMode&&(e<0||e>c.slideCount-c.options.slidesToScroll))!1===c.options.fade&&(i=c.currentSlide,!0!==n?c.animateSlide(s,function(){c.postSlide(i)}):c.postSlide(i));else{if(c.options.autoplay&&clearInterval(c.autoPlayTimer),o=i<0?c.slideCount%c.options.slidesToScroll!=0?c.slideCount-c.slideCount%c.options.slidesToScroll:c.slideCount+i:i>=c.slideCount?c.slideCount%c.options.slidesToScroll!=0?0:i-c.slideCount:i,c.animating=!0,c.$slider.trigger("beforeChange",[c,c.currentSlide,o]),r=c.currentSlide,c.currentSlide=o,c.setSlideClasses(c.currentSlide),c.options.asNavFor&&(a=(a=c.getNavTarget()).slick("getSlick")).slideCount<=a.options.slidesToShow&&a.setSlideClasses(c.currentSlide),c.updateDots(),c.updateArrows(),!0===c.options.fade)return!0!==n?(c.fadeSlideOut(r),c.fadeSlide(o,function(){c.postSlide(o)})):c.postSlide(o),void c.animateHeight();!0!==n?c.animateSlide(l,function(){c.postSlide(o)}):c.postSlide(o)}},s.prototype.startLoad=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},s.prototype.swipeDirection=function(){var e,t,n,i,o=this;return e=o.touchObject.startX-o.touchObject.curX,t=o.touchObject.startY-o.touchObject.curY,n=Math.atan2(t,e),(i=Math.round(180*n/Math.PI))<0&&(i=360-Math.abs(i)),i<=45&&0<=i?!1===o.options.rtl?"left":"right":i<=360&&315<=i?!1===o.options.rtl?"left":"right":135<=i&&i<=225?!1===o.options.rtl?"right":"left":!0===o.options.verticalSwiping?35<=i&&i<=135?"down":"up":"vertical"},s.prototype.swipeEnd=function(e){var t,n,i=this;if(i.dragging=!1,i.swiping=!1,i.scrolling)return i.scrolling=!1;if(i.interrupted=!1,i.shouldClick=!(10<i.touchObject.swipeLength),void 0===i.touchObject.curX)return!1;if(!0===i.touchObject.edgeHit&&i.$slider.trigger("edge",[i,i.swipeDirection()]),i.touchObject.swipeLength>=i.touchObject.minSwipe){switch(n=i.swipeDirection()){case"left":case"down":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide+i.getSlideCount()):i.currentSlide+i.getSlideCount(),i.currentDirection=0;break;case"right":case"up":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide-i.getSlideCount()):i.currentSlide-i.getSlideCount(),i.currentDirection=1}"vertical"!=n&&(i.slideHandler(t),i.touchObject={},i.$slider.trigger("swipe",[i,n]))}else i.touchObject.startX!==i.touchObject.curX&&(i.slideHandler(i.currentSlide),i.touchObject={})},s.prototype.swipeHandler=function(e){var t=this;if(!(!1===t.options.swipe||"ontouchend"in document&&!1===t.options.swipe||!1===t.options.draggable&&-1!==e.type.indexOf("mouse")))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,!0===t.options.verticalSwiping&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},s.prototype.swipeMove=function(e){var t,n,i,o,r,s,a=this;return r=void 0!==e.originalEvent?e.originalEvent.touches:null,!(!a.dragging||a.scrolling||r&&1!==r.length)&&(t=a.getLeft(a.currentSlide),a.touchObject.curX=void 0!==r?r[0].pageX:e.clientX,a.touchObject.curY=void 0!==r?r[0].pageY:e.clientY,a.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(a.touchObject.curX-a.touchObject.startX,2))),s=Math.round(Math.sqrt(Math.pow(a.touchObject.curY-a.touchObject.startY,2))),!a.options.verticalSwiping&&!a.swiping&&4<s?!(a.scrolling=!0):(!0===a.options.verticalSwiping&&(a.touchObject.swipeLength=s),n=a.swipeDirection(),void 0!==e.originalEvent&&4<a.touchObject.swipeLength&&(a.swiping=!0,e.preventDefault()),o=(!1===a.options.rtl?1:-1)*(a.touchObject.curX>a.touchObject.startX?1:-1),!0===a.options.verticalSwiping&&(o=a.touchObject.curY>a.touchObject.startY?1:-1),i=a.touchObject.swipeLength,(a.touchObject.edgeHit=!1)===a.options.infinite&&(0===a.currentSlide&&"right"===n||a.currentSlide>=a.getDotCount()&&"left"===n)&&(i=a.touchObject.swipeLength*a.options.edgeFriction,a.touchObject.edgeHit=!0),!1===a.options.vertical?a.swipeLeft=t+i*o:a.swipeLeft=t+i*(a.$list.height()/a.listWidth)*o,!0===a.options.verticalSwiping&&(a.swipeLeft=t+i*o),!0!==a.options.fade&&!1!==a.options.touchMove&&(!0===a.animating?(a.swipeLeft=null,!1):void a.setCSS(a.swipeLeft))))},s.prototype.swipeStart=function(e){var t,n=this;if(n.interrupted=!0,1!==n.touchObject.fingerCount||n.slideCount<=n.options.slidesToShow)return!(n.touchObject={});void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),n.touchObject.startX=n.touchObject.curX=void 0!==t?t.pageX:e.clientX,n.touchObject.startY=n.touchObject.curY=void 0!==t?t.pageY:e.clientY,n.dragging=!0},s.prototype.unfilterSlides=s.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},s.prototype.unload=function(){var e=this;c(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},s.prototype.unslick=function(e){this.$slider.trigger("unslick",[this,e]),this.destroy()},s.prototype.updateArrows=function(){var e=this;Math.floor(e.options.slidesToShow/2),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&!1===e.options.centerMode?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&!0===e.options.centerMode&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},s.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").end(),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active"))},s.prototype.visibility=function(){this.options.autoplay&&(document[this.hidden]?this.interrupted=!0:this.interrupted=!1)},c.fn.slick=function(){var e,t,n=this,i=arguments[0],o=Array.prototype.slice.call(arguments,1),r=n.length;for(e=0;e<r;e++)if("object"==typeof i||void 0===i?n[e].slick=new s(n[e],i):t=n[e].slick[i].apply(n[e].slick,o),void 0!==t)return t;return n}});
!function(l,e){"function"==typeof define&&define.amd?define(["jquery"],e):e(l.jQuery)}(this,function(l){"use strict";function e(e){if(t.webkit&&!e)return{height:0,width:0};if(!t.data.outer){var o={border:"none","box-sizing":"content-box",height:"200px",margin:"0",padding:"0",width:"200px"};t.data.inner=l("<div>").css(l.extend({},o)),t.data.outer=l("<div>").css(l.extend({left:"-1000px",overflow:"scroll",position:"absolute",top:"-1000px"},o)).append(t.data.inner).appendTo("body")}return t.data.outer.scrollLeft(1e3).scrollTop(1e3),{height:Math.ceil(t.data.outer.offset().top-t.data.inner.offset().top||0),width:Math.ceil(t.data.outer.offset().left-t.data.inner.offset().left||0)}}function o(){var l=e(!0);return!(l.height||l.width)}function s(l){var e=l.originalEvent;return e.axis&&e.axis===e.HORIZONTAL_AXIS?!1:e.wheelDeltaX?!1:!0}var r=!1,t={data:{index:0,name:"scrollbar"},macosx:/mac/i.test(navigator.platform),mobile:/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),overlay:null,scroll:null,scrolls:[],webkit:/webkit/i.test(navigator.userAgent)&&!/edge\/\d+/i.test(navigator.userAgent)};t.scrolls.add=function(l){this.remove(l).push(l)},t.scrolls.remove=function(e){for(;l.inArray(e,this)>=0;)this.splice(l.inArray(e,this),1);return this};var i={autoScrollSize:!0,autoUpdate:!0,debug:!1,disableBodyScroll:!1,duration:200,ignoreMobile:!1,ignoreOverlay:!1,scrollStep:30,showArrows:!1,stepScrolling:!0,scrollx:null,scrolly:null,onDestroy:null,onInit:null,onScroll:null,onUpdate:null},n=function(s){t.scroll||(t.overlay=o(),t.scroll=e(),a(),l(window).resize(function(){var l=!1;if(t.scroll&&(t.scroll.height||t.scroll.width)){var o=e();(o.height!==t.scroll.height||o.width!==t.scroll.width)&&(t.scroll=o,l=!0)}a(l)})),this.container=s,this.namespace=".scrollbar_"+t.data.index++,this.options=l.extend({},i,window.jQueryScrollbarOptions||{}),this.scrollTo=null,this.scrollx={},this.scrolly={},s.data(t.data.name,this),t.scrolls.add(this)};n.prototype={destroy:function(){if(this.wrapper){this.container.removeData(t.data.name),t.scrolls.remove(this);var e=this.container.scrollLeft(),o=this.container.scrollTop();this.container.insertBefore(this.wrapper).css({height:"",margin:"","max-height":""}).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(e).scrollTop(o),this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace),this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace),this.wrapper.remove(),l(document).add("body").off(this.namespace),l.isFunction(this.options.onDestroy)&&this.options.onDestroy.apply(this,[this.container])}},init:function(e){var o=this,r=this.container,i=this.containerWrapper||r,n=this.namespace,c=l.extend(this.options,e||{}),a={x:this.scrollx,y:this.scrolly},d=this.wrapper,h={scrollLeft:r.scrollLeft(),scrollTop:r.scrollTop()};if(t.mobile&&c.ignoreMobile||t.overlay&&c.ignoreOverlay||t.macosx&&!t.webkit)return!1;if(d)i.css({height:"auto","margin-bottom":-1*t.scroll.height+"px","margin-right":-1*t.scroll.width+"px","max-height":""});else{if(this.wrapper=d=l("<div>").addClass("scroll-wrapper").addClass(r.attr("class")).css("position","absolute"==r.css("position")?"absolute":"relative").insertBefore(r).append(r),r.is("textarea")&&(this.containerWrapper=i=l("<div>").insertBefore(r).append(r),d.addClass("scroll-textarea")),i.addClass("scroll-content").css({height:"auto","margin-bottom":-1*t.scroll.height+"px","margin-right":-1*t.scroll.width+"px","max-height":""}),r.on("scroll"+n,function(e){l.isFunction(c.onScroll)&&c.onScroll.call(o,{maxScroll:a.y.maxScrollOffset,scroll:r.scrollTop(),size:a.y.size,visible:a.y.visible},{maxScroll:a.x.maxScrollOffset,scroll:r.scrollLeft(),size:a.x.size,visible:a.x.visible}),a.x.isVisible&&a.x.scroll.bar.css("left",r.scrollLeft()*a.x.kx+"px"),a.y.isVisible&&a.y.scroll.bar.css("top",r.scrollTop()*a.y.kx+"px")}),d.on("scroll"+n,function(){d.scrollTop(0).scrollLeft(0)}),c.disableBodyScroll){var p=function(l){s(l)?a.y.isVisible&&a.y.mousewheel(l):a.x.isVisible&&a.x.mousewheel(l)};d.on("MozMousePixelScroll"+n,p),d.on("mousewheel"+n,p),t.mobile&&d.on("touchstart"+n,function(e){var o=e.originalEvent.touches&&e.originalEvent.touches[0]||e,s={pageX:o.pageX,pageY:o.pageY},t={left:r.scrollLeft(),top:r.scrollTop()};l(document).on("touchmove"+n,function(l){var e=l.originalEvent.targetTouches&&l.originalEvent.targetTouches[0]||l;r.scrollLeft(t.left+s.pageX-e.pageX),r.scrollTop(t.top+s.pageY-e.pageY),l.preventDefault()}),l(document).on("touchend"+n,function(){l(document).off(n)})})}l.isFunction(c.onInit)&&c.onInit.apply(this,[r])}l.each(a,function(e,t){var i=null,d=1,h="x"===e?"scrollLeft":"scrollTop",p=c.scrollStep,u=function(){var l=r[h]();r[h](l+p),1==d&&l+p>=f&&(l=r[h]()),-1==d&&f>=l+p&&(l=r[h]()),r[h]()==l&&i&&i()},f=0;t.scroll||(t.scroll=o._getScroll(c["scroll"+e]).addClass("scroll-"+e),c.showArrows&&t.scroll.addClass("scroll-element_arrows_visible"),t.mousewheel=function(l){if(!t.isVisible||"x"===e&&s(l))return!0;if("y"===e&&!s(l))return a.x.mousewheel(l),!0;var i=-1*l.originalEvent.wheelDelta||l.originalEvent.detail,n=t.size-t.visible-t.offset;return(i>0&&n>f||0>i&&f>0)&&(f+=i,0>f&&(f=0),f>n&&(f=n),o.scrollTo=o.scrollTo||{},o.scrollTo[h]=f,setTimeout(function(){o.scrollTo&&(r.stop().animate(o.scrollTo,240,"linear",function(){f=r[h]()}),o.scrollTo=null)},1)),l.preventDefault(),!1},t.scroll.on("MozMousePixelScroll"+n,t.mousewheel).on("mousewheel"+n,t.mousewheel).on("mouseenter"+n,function(){f=r[h]()}),t.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown"+n,function(s){if(1!=s.which)return!0;d=1;var n={eventOffset:s["x"===e?"pageX":"pageY"],maxScrollValue:t.size-t.visible-t.offset,scrollbarOffset:t.scroll.bar.offset()["x"===e?"left":"top"],scrollbarSize:t.scroll.bar["x"===e?"outerWidth":"outerHeight"]()},a=0,v=0;return l(this).hasClass("scroll-arrow")?(d=l(this).hasClass("scroll-arrow_more")?1:-1,p=c.scrollStep*d,f=d>0?n.maxScrollValue:0):(d=n.eventOffset>n.scrollbarOffset+n.scrollbarSize?1:n.eventOffset<n.scrollbarOffset?-1:0,p=Math.round(.75*t.visible)*d,f=n.eventOffset-n.scrollbarOffset-(c.stepScrolling?1==d?n.scrollbarSize:0:Math.round(n.scrollbarSize/2)),f=r[h]()+f/t.kx),o.scrollTo=o.scrollTo||{},o.scrollTo[h]=c.stepScrolling?r[h]()+p:f,c.stepScrolling&&(i=function(){f=r[h](),clearInterval(v),clearTimeout(a),a=0,v=0},a=setTimeout(function(){v=setInterval(u,40)},c.duration+100)),setTimeout(function(){o.scrollTo&&(r.animate(o.scrollTo,c.duration),o.scrollTo=null)},1),o._handleMouseDown(i,s)}),t.scroll.bar.on("mousedown"+n,function(s){if(1!=s.which)return!0;var i=s["x"===e?"pageX":"pageY"],c=r[h]();return t.scroll.addClass("scroll-draggable"),l(document).on("mousemove"+n,function(l){var o=parseInt((l["x"===e?"pageX":"pageY"]-i)/t.kx,10);r[h](c+o)}),o._handleMouseDown(function(){t.scroll.removeClass("scroll-draggable"),f=r[h]()},s)}))}),l.each(a,function(l,e){var o="scroll-scroll"+l+"_visible",s="x"==l?a.y:a.x;e.scroll.removeClass(o),s.scroll.removeClass(o),i.removeClass(o)}),l.each(a,function(e,o){l.extend(o,"x"==e?{offset:parseInt(r.css("left"),10)||0,size:r.prop("scrollWidth"),visible:d.width()}:{offset:parseInt(r.css("top"),10)||0,size:r.prop("scrollHeight"),visible:d.height()})}),this._updateScroll("x",this.scrollx),this._updateScroll("y",this.scrolly),l.isFunction(c.onUpdate)&&c.onUpdate.apply(this,[r]),l.each(a,function(l,e){var o="x"===l?"left":"top",s="x"===l?"outerWidth":"outerHeight",t="x"===l?"width":"height",i=parseInt(r.css(o),10)||0,n=e.size,a=e.visible+i,d=e.scroll.size[s]()+(parseInt(e.scroll.size.css(o),10)||0);c.autoScrollSize&&(e.scrollbarSize=parseInt(d*a/n,10),e.scroll.bar.css(t,e.scrollbarSize+"px")),e.scrollbarSize=e.scroll.bar[s](),e.kx=(d-e.scrollbarSize)/(n-a)||1,e.maxScrollOffset=n-a}),r.scrollLeft(h.scrollLeft).scrollTop(h.scrollTop).trigger("scroll")},_getScroll:function(e){var o={advanced:['<div class="scroll-element">','<div class="scroll-element_corner"></div>','<div class="scroll-arrow scroll-arrow_less"></div>','<div class="scroll-arrow scroll-arrow_more"></div>','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_inner-wrapper">','<div class="scroll-element_inner scroll-element_track">','<div class="scroll-element_inner-bottom"></div>',"</div>","</div>",'<div class="scroll-bar">','<div class="scroll-bar_body">','<div class="scroll-bar_body-inner"></div>',"</div>",'<div class="scroll-bar_bottom"></div>','<div class="scroll-bar_center"></div>',"</div>","</div>","</div>"].join(""),simple:['<div class="scroll-element">','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_track"></div>','<div class="scroll-bar"></div>',"</div>","</div>"].join("")};return o[e]&&(e=o[e]),e||(e=o.simple),e="string"==typeof e?l(e).appendTo(this.wrapper):l(e),l.extend(e,{bar:e.find(".scroll-bar"),size:e.find(".scroll-element_size"),track:e.find(".scroll-element_track")}),e},_handleMouseDown:function(e,o){var s=this.namespace;return l(document).on("blur"+s,function(){l(document).add("body").off(s),e&&e()}),l(document).on("dragstart"+s,function(l){return l.preventDefault(),!1}),l(document).on("mouseup"+s,function(){l(document).add("body").off(s),e&&e()}),l("body").on("selectstart"+s,function(l){return l.preventDefault(),!1}),o&&o.preventDefault(),!1},_updateScroll:function(e,o){var s=this.container,r=this.containerWrapper||s,i="scroll-scroll"+e+"_visible",n="x"===e?this.scrolly:this.scrollx,c=parseInt(this.container.css("x"===e?"left":"top"),10)||0,a=this.wrapper,d=o.size,h=o.visible+c;o.isVisible=d-h>1,o.isVisible?(o.scroll.addClass(i),n.scroll.addClass(i),r.addClass(i)):(o.scroll.removeClass(i),n.scroll.removeClass(i),r.removeClass(i)),"y"===e&&(s.is("textarea")||h>d?r.css({height:h+t.scroll.height+"px","max-height":"none"}):r.css({"max-height":h+t.scroll.height+"px"})),(o.size!=s.prop("scrollWidth")||n.size!=s.prop("scrollHeight")||o.visible!=a.width()||n.visible!=a.height()||o.offset!=(parseInt(s.css("left"),10)||0)||n.offset!=(parseInt(s.css("top"),10)||0))&&(l.extend(this.scrollx,{offset:parseInt(s.css("left"),10)||0,size:s.prop("scrollWidth"),visible:a.width()}),l.extend(this.scrolly,{offset:parseInt(s.css("top"),10)||0,size:this.container.prop("scrollHeight"),visible:a.height()}),this._updateScroll("x"===e?"y":"x",n))}};var c=n;l.fn.scrollbar=function(e,o){return"string"!=typeof e&&(o=e,e="init"),"undefined"==typeof o&&(o=[]),l.isArray(o)||(o=[o]),this.not("body, .scroll-wrapper").each(function(){var s=l(this),r=s.data(t.data.name);(r||"init"===e)&&(r||(r=new c(s)),r[e]&&r[e].apply(r,o))}),this},l.fn.scrollbar.options=i;var a=function(){var l=0,e=0;return function(o){var s,i,n,c,d,h,p;for(s=0;s<t.scrolls.length;s++)c=t.scrolls[s],i=c.container,n=c.options,d=c.wrapper,h=c.scrollx,p=c.scrolly,(o||n.autoUpdate&&d&&d.is(":visible")&&(i.prop("scrollWidth")!=h.size||i.prop("scrollHeight")!=p.size||d.width()!=h.visible||d.height()!=p.visible))&&(c.init(),n.debug&&(window.console&&console.log({scrollHeight:i.prop("scrollHeight")+":"+c.scrolly.size,scrollWidth:i.prop("scrollWidth")+":"+c.scrollx.size,visibleHeight:d.height()+":"+c.scrolly.visible,visibleWidth:d.width()+":"+c.scrollx.visible},!0),e++));r&&e>10?(window.console&&console.log("Scroll updates exceed 10"),a=function(){}):(clearTimeout(l),l=setTimeout(a,300))}}();window.angular&&!function(l){l.module("jQueryScrollbar",[]).provider("jQueryScrollbar",function(){var e=i;return{setOptions:function(o){l.extend(e,o)},$get:function(){return{options:l.copy(e)}}}}).directive("jqueryScrollbar",["jQueryScrollbar","$parse",function(l,e){return{restrict:"AC",link:function(o,s,r){var t=e(r.jqueryScrollbar),i=t(o);s.scrollbar(i||l.options).on("$destroy",function(){s.scrollbar("destroy")})}}}])}(window.angular)});



/*
    A simple jQuery modal (http://github.com/kylefox/jquery-modal)
    Version 0.9.1
*/
!function(o){"object"==typeof module&&"object"==typeof module.exports?o(require("jquery"),window,document):o(jQuery,window,document)}(function(o,t,i,e){var s=[],l=function(){return s.length?s[s.length-1]:null},n=function(){var o,t=!1;for(o=s.length-1;o>=0;o--)s[o].$blocker&&(s[o].$blocker.toggleClass("current",!t).toggleClass("behind",t),t=!0)};o.modal=function(t,i){var e,n;if(this.$body=o("body"),this.options=o.extend({},o.modal.defaults,i),this.options.doFade=!isNaN(parseInt(this.options.fadeDuration,10)),this.$blocker=null,this.options.closeExisting)for(;o.modal.isActive();)o.modal.close();if(s.push(this),t.is("a"))if(n=t.attr("href"),this.anchor=t,/^#/.test(n)){if(this.$elm=o(n),1!==this.$elm.length)return null;this.$body.append(this.$elm),this.open()}else this.$elm=o("<div>"),this.$body.append(this.$elm),e=function(o,t){t.elm.remove()},this.showSpinner(),t.trigger(o.modal.AJAX_SEND),o.get(n).done(function(i){if(o.modal.isActive()){t.trigger(o.modal.AJAX_SUCCESS);var s=l();s.$elm.empty().append(i).on(o.modal.CLOSE,e),s.hideSpinner(),s.open(),t.trigger(o.modal.AJAX_COMPLETE)}}).fail(function(){t.trigger(o.modal.AJAX_FAIL);var i=l();i.hideSpinner(),s.pop(),t.trigger(o.modal.AJAX_COMPLETE)});else this.$elm=t,this.anchor=t,this.$body.append(this.$elm),this.open()},o.modal.prototype={constructor:o.modal,open:function(){var t=this;this.block(),this.anchor.blur(),this.options.doFade?setTimeout(function(){t.show()},this.options.fadeDuration*this.options.fadeDelay):this.show(),o(i).off("keydown.modal").on("keydown.modal",function(o){var t=l();27===o.which&&t.options.escapeClose&&t.close()}),this.options.clickClose&&this.$blocker.click(function(t){t.target===this&&o.modal.close()})},close:function(){s.pop(),this.unblock(),this.hide(),o.modal.isActive()||o(i).off("keydown.modal")},block:function(){this.$elm.trigger(o.modal.BEFORE_BLOCK,[this._ctx()]),this.$blocker=o('<div class="'+this.options.blockerClass+' blocker current"></div>').appendTo(this.$body),n(),this.options.doFade&&this.$blocker.css("opacity",0).animate({opacity:1},this.options.fadeDuration),this.$elm.trigger(o.modal.BLOCK,[this._ctx()])},unblock:function(t){!t&&this.options.doFade?this.$blocker.fadeOut(this.options.fadeDuration,this.unblock.bind(this,!0)):(this.$blocker.children().appendTo(this.$body),this.$blocker.remove(),this.$blocker=null,n(),o.modal.isActive()||this.$body.css("overflow",""))},show:function(){this.$elm.trigger(o.modal.BEFORE_OPEN,[this._ctx()]),this.options.showClose&&(this.closeButton=o('<a href="#close-modal" rel="modal:close" class="close-modal '+this.options.closeClass+'">'+this.options.closeText+"</a>"),this.$elm.append(this.closeButton)),this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker),this.$elm.css({opacity:0,display:"inline-block"}).animate({opacity:1},this.options.fadeDuration),this.$elm.trigger(o.modal.OPEN,[this._ctx()])},hide:function(){this.$elm.trigger(o.modal.BEFORE_CLOSE,[this._ctx()]),this.closeButton&&this.closeButton.remove();var t=this;this.options.doFade?this.$elm.fadeOut(this.options.fadeDuration,function(){t.$elm.trigger(o.modal.AFTER_CLOSE,[t._ctx()])}):this.$elm.hide(0,function(){t.$elm.trigger(o.modal.AFTER_CLOSE,[t._ctx()])}),this.$elm.trigger(o.modal.CLOSE,[this._ctx()])},showSpinner:function(){this.options.showSpinner&&(this.spinner=this.spinner||o('<div class="'+this.options.modalClass+'-spinner"></div>').append(this.options.spinnerHtml),this.$body.append(this.spinner),this.spinner.show())},hideSpinner:function(){this.spinner&&this.spinner.remove()},_ctx:function(){return{elm:this.$elm,$elm:this.$elm,$blocker:this.$blocker,options:this.options}}},o.modal.close=function(t){if(o.modal.isActive()){t&&t.preventDefault();var i=l();return i.close(),i.$elm}},o.modal.isActive=function(){return s.length>0},o.modal.getCurrent=l,o.modal.defaults={closeExisting:!0,escapeClose:!0,clickClose:!0,closeText:"Close",closeClass:"",modalClass:"modal",blockerClass:"jquery-modal",spinnerHtml:'<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',showSpinner:!0,showClose:!0,fadeDuration:null,fadeDelay:1},o.modal.BEFORE_BLOCK="modal:before-block",o.modal.BLOCK="modal:block",o.modal.BEFORE_OPEN="modal:before-open",o.modal.OPEN="modal:open",o.modal.BEFORE_CLOSE="modal:before-close",o.modal.CLOSE="modal:close",o.modal.AFTER_CLOSE="modal:after-close",o.modal.AJAX_SEND="modal:ajax:send",o.modal.AJAX_SUCCESS="modal:ajax:success",o.modal.AJAX_FAIL="modal:ajax:fail",o.modal.AJAX_COMPLETE="modal:ajax:complete",o.fn.modal=function(t){return 1===this.length&&new o.modal(this,t),this},o(i).on("click.modal",'a[rel~="modal:close"]',o.modal.close),o(i).on("click.modal",'a[rel~="modal:open"]',function(t){t.preventDefault(),o(this).modal()})});


/*
 * pagination.js 2.1.4
 * A jQuery plugin to provide simple yet fully customisable pagination
 * https://github.com/superRaytin/paginationjs

 * Homepage: http://pagination.js.org
 *
 * Copyright 2014-2100, superRaytin
 * Released under the MIT license.
*/
!function(a,b){function c(a){throw new Error("Pagination: "+a)}function d(a){a.dataSource||c('"dataSource" is required.'),"string"==typeof a.dataSource?void 0===a.totalNumberLocator?void 0===a.totalNumber?c('"totalNumber" is required.'):b.isNumeric(a.totalNumber)||c('"totalNumber" is incorrect. (Number)'):b.isFunction(a.totalNumberLocator)||c('"totalNumberLocator" should be a Function.'):i.isObject(a.dataSource)&&(void 0===a.locator?c('"dataSource" is an Object, please specify "locator".'):"string"==typeof a.locator||b.isFunction(a.locator)||c(a.locator+" is incorrect. (String | Function)")),void 0===a.formatResult||b.isFunction(a.formatResult)||c('"formatResult" should be a Function.')}function e(a){var c=["go","previous","next","disable","enable","refresh","show","hide","destroy"];b.each(c,function(b,c){a.off(h+c)}),a.data("pagination",{}),b(".paginationjs",a).remove()}function f(a,b){return("object"==(b=typeof a)?null==a&&"null"||Object.prototype.toString.call(a).slice(8,-1):b).toLowerCase()}void 0===b&&c("Pagination requires jQuery.");var g="pagination",h="__pagination-";b.fn.pagination&&(g="pagination2"),b.fn[g]=function(f){if(void 0===f)return this;var j=b(this),k=b.extend({},b.fn[g].defaults,f),l={initialize:function(){var a=this;if(j.data("pagination")||j.data("pagination",{}),!1!==a.callHook("beforeInit")){j.data("pagination").initialized&&b(".paginationjs",j).remove(),a.disabled=!!k.disabled;var c=a.model={pageRange:k.pageRange,pageSize:k.pageSize};a.parseDataSource(k.dataSource,function(b){if(a.isAsync=i.isString(b),i.isArray(b)&&(c.totalNumber=k.totalNumber=b.length),a.isDynamicTotalNumber=a.isAsync&&k.totalNumberLocator,!(k.hideWhenLessThanOnePage&&a.getTotalPage()<=1)){var d=a.render(!0);k.className&&d.addClass(k.className),c.el=d,j["bottom"===k.position?"append":"prepend"](d),a.observer(),j.data("pagination").initialized=!0,a.callHook("afterInit",d)}})}},render:function(a){var c=this,d=c.model,e=d.el||b('<div class="paginationjs"></div>'),f=!0!==a;c.callHook("beforeRender",f);var g=d.pageNumber||k.pageNumber,h=k.pageRange,i=c.getTotalPage(),j=g-h,l=g+h;return l>i&&(l=i,j=i-2*h,j=j<1?1:j),j<=1&&(j=1,l=Math.min(2*h+1,i)),e.html(c.generateHTML({currentPage:g,pageRange:h,rangeStart:j,rangeEnd:l})),c.callHook("afterRender",f),e},generateHTML:function(a){var c,d,e=this,f=a.currentPage,g=e.getTotalPage(),h=a.rangeStart,i=a.rangeEnd,j=e.getTotalNumber(),l=k.showPrevious,m=k.showNext,n=k.showPageNumbers,o=k.showNavigator,p=k.showGoInput,q=k.showGoButton,r=k.pageLink,s=k.prevText,t=k.nextText,u=k.ellipsisText,v=k.goButtonText,w=k.classPrefix,x=k.activeClassName,y=k.disableClassName,z=k.ulClassName,A="",B='<input type="text" class="J-paginationjs-go-pagenumber">',C='<input type="button" class="J-paginationjs-go-button" value="'+v+'">',D=b.isFunction(k.formatNavigator)?k.formatNavigator(f,g,j):k.formatNavigator,E=b.isFunction(k.formatGoInput)?k.formatGoInput(B,f,g,j):k.formatGoInput,F=b.isFunction(k.formatGoButton)?k.formatGoButton(C,f,g,j):k.formatGoButton,G=b.isFunction(k.autoHidePrevious)?k.autoHidePrevious():k.autoHidePrevious,H=b.isFunction(k.autoHideNext)?k.autoHideNext():k.autoHideNext,I=b.isFunction(k.header)?k.header(f,g,j):k.header,J=b.isFunction(k.footer)?k.footer(f,g,j):k.footer;if(I&&(c=e.replaceVariables(I,{currentPage:f,totalPage:g,totalNumber:j}),A+=c),l||n||m){if(A+='<div class="paginationjs-pages">',A+=z?'<ul class="'+z+'">':"<ul>",l&&(f<=1?G||(A+='<li class="'+w+"-prev "+y+'"><a>'+s+"</a></li>"):A+='<li class="'+w+'-prev J-paginationjs-previous" data-num="'+(f-1)+'" title="Previous page"><a href="'+r+'">'+s+"</a></li>"),n){if(h<=3)for(d=1;d<h;d++)A+=d==f?'<li class="'+w+"-page J-paginationjs-page "+x+'" data-num="'+d+'"><a>'+d+"</a></li>":'<li class="'+w+'-page J-paginationjs-page" data-num="'+d+'"><a href="'+r+'">'+d+"</a></li>";else k.showFirstOnEllipsisShow&&(A+='<li class="'+w+"-page "+w+'-first J-paginationjs-page" data-num="1"><a href="'+r+'">1</a></li>'),A+='<li class="'+w+"-ellipsis "+y+'"><a>'+u+"</a></li>";for(d=h;d<=i;d++)A+=d==f?'<li class="'+w+"-page J-paginationjs-page "+x+'" data-num="'+d+'"><a>'+d+"</a></li>":'<li class="'+w+'-page J-paginationjs-page" data-num="'+d+'"><a href="'+r+'">'+d+"</a></li>";if(i>=g-2)for(d=i+1;d<=g;d++)A+='<li class="'+w+'-page J-paginationjs-page" data-num="'+d+'"><a href="'+r+'">'+d+"</a></li>";else A+='<li class="'+w+"-ellipsis "+y+'"><a>'+u+"</a></li>",k.showLastOnEllipsisShow&&(A+='<li class="'+w+"-page "+w+'-last J-paginationjs-page" data-num="'+g+'"><a href="'+r+'">'+g+"</a></li>")}m&&(f>=g?H||(A+='<li class="'+w+"-next "+y+'"><a>'+t+"</a></li>"):A+='<li class="'+w+'-next J-paginationjs-next" data-num="'+(f+1)+'" title="Next page"><a href="'+r+'">'+t+"</a></li>"),A+="</ul></div>"}return o&&D&&(c=e.replaceVariables(D,{currentPage:f,totalPage:g,totalNumber:j}),A+='<div class="'+w+'-nav J-paginationjs-nav">'+c+"</div>"),p&&E&&(c=e.replaceVariables(E,{currentPage:f,totalPage:g,totalNumber:j,input:B}),A+='<div class="'+w+'-go-input">'+c+"</div>"),q&&F&&(c=e.replaceVariables(F,{currentPage:f,totalPage:g,totalNumber:j,button:C}),A+='<div class="'+w+'-go-button">'+c+"</div>"),J&&(c=e.replaceVariables(J,{currentPage:f,totalPage:g,totalNumber:j}),A+=c),A},findTotalNumberFromRemoteResponse:function(a){this.model.totalNumber=k.totalNumberLocator(a)},go:function(a,c){function d(a){if(!1===e.callHook("beforePaging",g))return!1;if(f.direction=void 0===f.pageNumber?0:g>f.pageNumber?1:-1,f.pageNumber=g,e.render(),e.disabled&&e.isAsync&&e.enable(),j.data("pagination").model=f,k.formatResult){var d=b.extend(!0,[],a);i.isArray(a=k.formatResult(d))||(a=d)}j.data("pagination").currentPageData=a,e.doCallback(a,c),e.callHook("afterPaging",g),1==g&&e.callHook("afterIsFirstPage"),g==e.getTotalPage()&&e.callHook("afterIsLastPage")}var e=this,f=e.model;if(!e.disabled){var g=a;if((g=parseInt(g))&&!(g<1)){var h=k.pageSize,l=e.getTotalNumber(),m=e.getTotalPage();if(!(l>0&&g>m)){if(!e.isAsync)return void d(e.getDataFragment(g));var n={},o=k.alias||{};n[o.pageSize?o.pageSize:"pageSize"]=h,n[o.pageNumber?o.pageNumber:"pageNumber"]=g;var p=b.isFunction(k.ajax)?k.ajax():k.ajax,q={type:"get",cache:!1,data:{},contentType:"application/x-www-form-urlencoded; charset=UTF-8",dataType:"json",async:!0};b.extend(!0,q,p),b.extend(q.data,n),q.url=k.dataSource,q.success=function(a){e.isDynamicTotalNumber?e.findTotalNumberFromRemoteResponse(a):e.model.totalNumber=k.totalNumber,d(e.filterDataByLocator(a))},q.error=function(a,b,c){k.formatAjaxError&&k.formatAjaxError(a,b,c),e.enable()},e.disable(),b.ajax(q)}}}},doCallback:function(a,c){var d=this,e=d.model;b.isFunction(c)?c(a,e):b.isFunction(k.callback)&&k.callback(a,e)},destroy:function(){!1!==this.callHook("beforeDestroy")&&(this.model.el.remove(),j.off(),b("#paginationjs-style").remove(),this.callHook("afterDestroy"))},previous:function(a){this.go(this.model.pageNumber-1,a)},next:function(a){this.go(this.model.pageNumber+1,a)},disable:function(){var a=this,b=a.isAsync?"async":"sync";!1!==a.callHook("beforeDisable",b)&&(a.disabled=!0,a.model.disabled=!0,a.callHook("afterDisable",b))},enable:function(){var a=this,b=a.isAsync?"async":"sync";!1!==a.callHook("beforeEnable",b)&&(a.disabled=!1,a.model.disabled=!1,a.callHook("afterEnable",b))},refresh:function(a){this.go(this.model.pageNumber,a)},show:function(){var a=this;a.model.el.is(":visible")||a.model.el.show()},hide:function(){var a=this;a.model.el.is(":visible")&&a.model.el.hide()},replaceVariables:function(a,b){var c;for(var d in b){var e=b[d],f=new RegExp("<%=\\s*"+d+"\\s*%>","img");c=(c||a).replace(f,e)}return c},getDataFragment:function(a){var b=k.pageSize,c=k.dataSource,d=this.getTotalNumber(),e=b*(a-1)+1,f=Math.min(a*b,d);return c.slice(e-1,f)},getTotalNumber:function(){return this.model.totalNumber||k.totalNumber||0},getTotalPage:function(){return Math.ceil(this.getTotalNumber()/k.pageSize)},getLocator:function(a){var d;return"string"==typeof a?d=a:b.isFunction(a)?d=a():c('"locator" is incorrect. (String | Function)'),d},filterDataByLocator:function(a){var d,e=this.getLocator(k.locator);if(i.isObject(a)){try{b.each(e.split("."),function(b,c){d=(d||a)[c]})}catch(a){}d?i.isArray(d)||c("dataSource."+e+" must be an Array."):c("dataSource."+e+" is undefined.")}return d||a},parseDataSource:function(a,d){var e=this;i.isObject(a)?d(k.dataSource=e.filterDataByLocator(a)):i.isArray(a)?d(k.dataSource=a):b.isFunction(a)?k.dataSource(function(a){i.isArray(a)||c('The parameter of "done" Function should be an Array.'),e.parseDataSource.call(e,a,d)}):"string"==typeof a?(/^https?|file:/.test(a)&&(k.ajaxDataType="jsonp"),d(a)):c('Unexpected type of "dataSource".')},callHook:function(c){var d,e=j.data("pagination"),f=Array.prototype.slice.apply(arguments);return f.shift(),k[c]&&b.isFunction(k[c])&&!1===k[c].apply(a,f)&&(d=!1),e.hooks&&e.hooks[c]&&b.each(e.hooks[c],function(b,c){!1===c.apply(a,f)&&(d=!1)}),!1!==d},observer:function(){var a=this,d=a.model.el;j.on(h+"go",function(d,e,f){(e=parseInt(b.trim(e)))&&(b.isNumeric(e)||c('"pageNumber" is incorrect. (Number)'),a.go(e,f))}),d.delegate(".J-paginationjs-page","click",function(c){var d=b(c.currentTarget),e=b.trim(d.attr("data-num"));if(e&&!d.hasClass(k.disableClassName)&&!d.hasClass(k.activeClassName))return!1!==a.callHook("beforePageOnClick",c,e)&&(a.go(e),a.callHook("afterPageOnClick",c,e),!!k.pageLink&&void 0)}),d.delegate(".J-paginationjs-previous","click",function(c){var d=b(c.currentTarget),e=b.trim(d.attr("data-num"));if(e&&!d.hasClass(k.disableClassName))return!1!==a.callHook("beforePreviousOnClick",c,e)&&(a.go(e),a.callHook("afterPreviousOnClick",c,e),!!k.pageLink&&void 0)}),d.delegate(".J-paginationjs-next","click",function(c){var d=b(c.currentTarget),e=b.trim(d.attr("data-num"));if(e&&!d.hasClass(k.disableClassName))return!1!==a.callHook("beforeNextOnClick",c,e)&&(a.go(e),a.callHook("afterNextOnClick",c,e),!!k.pageLink&&void 0)}),d.delegate(".J-paginationjs-go-button","click",function(c){var e=b(".J-paginationjs-go-pagenumber",d).val();if(!1===a.callHook("beforeGoButtonOnClick",c,e))return!1;j.trigger(h+"go",e),a.callHook("afterGoButtonOnClick",c,e)}),d.delegate(".J-paginationjs-go-pagenumber","keyup",function(c){if(13===c.which){var e=b(c.currentTarget).val();if(!1===a.callHook("beforeGoInputOnEnter",c,e))return!1;j.trigger(h+"go",e),b(".J-paginationjs-go-pagenumber",d).focus(),a.callHook("afterGoInputOnEnter",c,e)}}),j.on(h+"previous",function(b,c){a.previous(c)}),j.on(h+"next",function(b,c){a.next(c)}),j.on(h+"disable",function(){a.disable()}),j.on(h+"enable",function(){a.enable()}),j.on(h+"refresh",function(b,c){a.refresh(c)}),j.on(h+"show",function(){a.show()}),j.on(h+"hide",function(){a.hide()}),j.on(h+"destroy",function(){a.destroy()});var e=Math.max(a.getTotalPage(),1),f=k.pageNumber;a.isDynamicTotalNumber&&(f=1),k.triggerPagingOnInit&&j.trigger(h+"go",Math.min(f,e))}};if(j.data("pagination")&&!0===j.data("pagination").initialized){if(b.isNumeric(f))return j.trigger.call(this,h+"go",f,arguments[1]),this;if("string"==typeof f){var m=Array.prototype.slice.apply(arguments);switch(m[0]=h+m[0],f){case"previous":case"next":case"go":case"disable":case"enable":case"refresh":case"show":case"hide":case"destroy":j.trigger.apply(this,m);break;case"getSelectedPageNum":return j.data("pagination").model?j.data("pagination").model.pageNumber:j.data("pagination").attributes.pageNumber;case"getTotalPage":return Math.ceil(j.data("pagination").model.totalNumber/j.data("pagination").model.pageSize);case"getSelectedPageData":return j.data("pagination").currentPageData;case"isDisabled":return!0===j.data("pagination").model.disabled;default:c("Unknown action: "+f)}return this}e(j)}else i.isObject(f)||c("Illegal options");return d(k),l.initialize(),this},b.fn[g].defaults={totalNumber:0,pageNumber:1,pageSize:10,pageRange:2,showPrevious:!0,showNext:!0,showPageNumbers:!0,showNavigator:!1,showGoInput:!1,showGoButton:!1,pageLink:"",prevText:"&laquo;",nextText:"&raquo;",ellipsisText:"...",goButtonText:"Go",classPrefix:"paginationjs",activeClassName:"active",disableClassName:"disabled",inlineStyle:!0,formatNavigator:"<%= currentPage %> / <%= totalPage %>",formatGoInput:"<%= input %>",formatGoButton:"<%= button %>",position:"bottom",autoHidePrevious:!1,autoHideNext:!1,triggerPagingOnInit:!0,hideWhenLessThanOnePage:!1,showFirstOnEllipsisShow:!0,showLastOnEllipsisShow:!0,callback:function(){}},b.fn.addHook=function(a,d){arguments.length<2&&c("Missing argument."),b.isFunction(d)||c("callback must be a function.");var e=b(this),f=e.data("pagination");f||(e.data("pagination",{}),f=e.data("pagination")),!f.hooks&&(f.hooks={}),f.hooks[a]=f.hooks[a]||[],f.hooks[a].push(d)},b[g]=function(a,d){arguments.length<2&&c("Requires two parameters.");var e;if(e="string"!=typeof a&&a instanceof jQuery?a:b(a),e.length)return e.pagination(d),e};var i={};b.each(["Object","Array","String"],function(a,b){i["is"+b]=function(a){return f(a)===b.toLowerCase()}}),"function"==typeof define&&define.amd&&define(function(){return b})}(this,window.jQuery);
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
// end Magnific popup
$(document).ready(function() {
	$(document).click(function(e) {
		if($(e.target).closest('#change-lng').length || $(e.target).closest('#change-currency').length || $(e.target).closest('.catalog__header_nav-filter-body').length || $(e.target).closest('.item-buy-amount').length || $(e.target).closest('.form__dropdown').length) return;
		$('#change-lng .header__gray_nav-sub, #change-currency .header__gray_nav-sub').fadeOut(150);
		$('.item-buy-amount-list').fadeOut(150);		
		$('.catalog__header_nav-filter .catalog__header_nav-filter-list').fadeOut(150);
		$('.catalog__main_products-list .item-buy-amount-list').fadeOut(150);
		$('.form__dropdown').removeClass('active');
		$('.form__dropdown .form__dropdown_list').fadeOut(150);

	});


	$('.nav__left_search-input').focus(function(e) {
		$('.nav__left_search-input').closest('.nav__left_search').addClass('focus');
	});
	$('.nav__left_search-input').blur(function(e) {
		$('.nav__left_search-input').closest('.nav__left_search').removeClass('focus');
	});

	$('#change-lng, #change-currency').click(function(e) {
		$('#change-lng .header__gray_nav-sub, #change-currency .header__gray_nav-sub').fadeOut(150)
		if($(this).find('.header__gray_nav-sub').is(':hidden')){
			$(this).find('.header__gray_nav-sub').fadeIn(150);
		}else{
			$(this).find('.header__gray_nav-sub').fadeOut(150);
		}
	});
	
	$('#login-field').mask('+38 (000) 000 00 00');

	$('.form__dropdown span').click(function(e) {
		if($(this).closest('.form__dropdown').hasClass('active')){
			$(this).closest('.form__dropdown').removeClass('active');
			$(this).closest('.form__dropdown').find('.form__dropdown_list').fadeOut(150);
		}else{
			$('.form__dropdown').removeClass('active');
			$('.form__dropdown .form__dropdown_list').fadeOut(150);
			$(this).closest('.form__dropdown').addClass('active');
			$(this).closest('.form__dropdown').find('.form__dropdown_list').fadeIn(150);
		}
	});
	$('.form__dropdown .form__dropdown_item').click(function(e) {
		var val = $(this).attr('data-value');
		$(this).closest('.form__dropdown').find('.selected').removeClass('selected');
		$(this).addClass('selected');
		$(this).closest('.form__dropdown').find('span').text(val);
		$(this).closest('.form__dropdown').removeClass('active');
		$(this).closest('.form__dropdown').find('.form__dropdown_list').fadeOut(150);
	});

	$('.global__product-block .item-buy-amount span').click(function(e) {
		$('.item-buy-amount-list').fadeOut(150);
		if($(this).closest('.item-buy-amount').find('.item-buy-amount-list').is(':hidden')){
			$(this).closest('.item-buy-amount').find('.item-buy-amount-list').fadeIn(150);
		}else{
			$(this).closest('.item-buy-amount').find('.item-buy-amount-list').fadeOut(150);
		}
	});		



	/* ==========================================================================
			Main page
	   ========================================================================== */
	if($('main').hasClass('index')){
		$('.main-nav__list li a').each(function(i, el){
			var src = $(el).attr('data-src');			
			$(el).css('backgroundImage', 'url("'+src+'")');
		});
		$('.main-nav__list li a').mouseenter(function(e) {
			var hover = $(this).attr('data-hover');
			$(this).css('backgroundImage', 'url("'+hover+'")');
		});
		$('.main-nav__list li a').mouseleave(function(e) {
			var src = $(this).attr('data-src');			
			$(this).css('backgroundImage', 'url("'+src+'")');
		});
		$('#main-navs-slider').slick({
			arrows : false,
			dots : true,
			autoplay : true,
			autoplaySpeed : 5000,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						variableWidth: true,
						centerMode: true,
						arrows:false
					}
				}
			]
	    });
		
	    $('#main-hits-list').slick({
			arrows : true,          
			slidesToShow: 1,
			variableWidth: true,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						centerMode: true,
						arrows:false
					}
				}
			]
	    });

	    $('#main-for-you-list').slick({
			arrows : true,          
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						variableWidth: true,
						centerMode: true,
						arrows:false
					}
				}
			]
	    });
	}

	/* ==========================================================================
			Catalog page
	   ========================================================================== */
	if($('main').hasClass('category')){
		$(document).click(function(e) {
			if($(e.target).closest('#change-lng').length || $(e.target).closest('#change-currency').length || $(e.target).closest('.catalog__header_nav-filter-body').length || $(e.target).closest('.item-buy-amount').length) return;
			$('#change-lng .header__gray_nav-sub, #change-currency .header__gray_nav-sub').fadeOut(150);
			$('.catalog__header_nav-filter .catalog__header_nav-filter-list').fadeOut(150);
			$('.catalog__main_products-list .item-buy-amount-list').fadeOut(150);
		});

		

		$(document).on('click', '.catalog__header_nav-filter-body', function(e) {
			if ($(this).find('.catalog__header_nav-filter-list').is(':hidden')) {
				$(this).find('.catalog__header_nav-filter-list').fadeIn(150);
			} else {
				$(this).find('.catalog__header_nav-filter-list').fadeOut(150);
			}
		});
	}

	/* ==========================================================================
			Registration page
	   ========================================================================== */
	if($('main').hasClass('authentication')){
		$('.authentication input[type="tel"]').mask('+38 (000) 000 00 00');
		$('#name-field').blur(function(e) {
			if($.trim($(this).val()).length){
				$(this).removeClass('error');
				$(this).closest('.form__item').find('.form__error_text').slideUp(150);
				$(this).closest('.form__item').find('.form__error_close').fadeOut(150);
			}else{
				$(this).addClass('error');
				$(this).closest('.form__item').find('.form__error_text').slideDown(150);
				$(this).closest('.form__item').find('.form__error_close').fadeIn(150);
			}
		});
		$('#phone-field').blur(function(e) {
			if($(this).val().length == 19){
				$(this).removeClass('error');
				$(this).closest('.form__item').find('.form__error_text').slideUp(150);
				$(this).closest('.form__item').find('.form__error_close').fadeOut(150);
			}else{
				$(this).addClass('error');
				$(this).closest('.form__item').find('.form__error_text').slideDown(150);
				$(this).closest('.form__item').find('.form__error_close').fadeIn(150);
			}
		});
		$('#email-field').blur(function(e){
			var email = $(this).val();
			if(validateEmail(email)){
				$(this).removeClass('error');
				$(this).closest('.form__item').find('.form__error_text').slideUp(150);
				$(this).closest('.form__item').find('.form__error_close').fadeOut(150);
			}else{
				$(this).addClass('error');
				$(this).closest('.form__item').find('.form__error_text').slideDown(150);
				$(this).closest('.form__item').find('.form__error_close').fadeIn(150);
			}
			function validateEmail(email) {
				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(email);
			}
		});
		$('#password-field').blur(function(e){
			if($(this).val().length > 6){
				$(this).removeClass('error');
				$(this).closest('.form__item').find('.form__error_text').slideUp(150);
				$(this).closest('.form__item').find('.form__error_close').fadeOut(150);
			}else{
				$(this).addClass('error');
				$(this).closest('.form__item').find('.form__error_text').slideDown(150);
				$(this).closest('.form__item').find('.form__error_close').fadeIn(150);
			}
		});
		$('.form__password_show').click(function(e) {
			var type = $(this).closest('.form__item').find('input').attr('type');
			if(type == 'password'){
				$(this).closest('.form__item').find('input').attr('type', 'text');
				$(this).addClass('show');
			}else{
				$(this).closest('.form__item').find('input').attr('type', 'password');
				$(this).removeClass('show');
			}			
		});
		$('#registration-form').submit(function(e) {			
			var email = $('#email-field').val();
			if($.trim($('#name-field').val()).length == 0){
				$('#name-field').addClass('error');
				$('#name-field').closest('.form__item').find('.form__error_text').slideDown(150);
				$('#name-field').closest('.form__item').find('.form__error_close').fadeIn(150);
				e.preventDefault();
			}

			if($.trim($('#phone-field').val()).length != 19){
				$('#phone-field').addClass('error');
				$('#phone-field').closest('.form__item').find('.form__error_text').slideDown(150);
				$('#phone-field').closest('.form__item').find('.form__error_close').fadeIn(150);
				e.preventDefault();
			}

			if(!email.length || validateEmail(!email)){
				$('#email-field').addClass('error');
				$('#email-field').closest('.form__item').find('.form__error_text').slideDown(150);
				$('#email-field').closest('.form__item').find('.form__error_close').fadeIn(150);
				e.preventDefault();
			}

			if($('#password-field').val().length < 6){
				$('#password-field').addClass('error');
				$('#password-field').closest('.form__item').find('.form__error_text').slideDown(150);
				$('#password-field').closest('.form__item').find('.form__error_close').fadeIn(150);
				e.preventDefault();
			}

			if(!$('#terms-field').is(':checked')){
				$('#terms-field').closest('.form__checkbox').find('.form__error_text').slideDown(150);
				e.preventDefault();
			}

			function validateEmail(email) {
				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(email);
			}			
			
		});
		
		$('#terms-field').change(function(e) {			
			if($(this).is(':checked')){
				$('#terms-field').closest('.form__checkbox').find('.form__error_text').slideUp(150);
			}
		});
		
		$('.form__error_close').click(function(e) {
			$(this).closest('.form__item').find('input').removeClass('error');
			$(this).closest('.form__item').find('.form__error_text').slideUp(150);
			$(this).closest('.form__item').find('.form__error_close').fadeOut(150);
		});		
	}



	/* ==========================================================================
			Checkout ordering page
	   ========================================================================== */
	if($('main').hasClass('checkout')){
		$('input[type="tel"]').mask('+38 (000) 000 00 00');
		$('.checkout__ordering_register-checkbox input[type="checkbox"]').change(function(e) {
			if($(this).is(':checked')){
				$('.checkout__ordering_register-checkbox').hide();
				$('.checkout__ordering_register').slideToggle();
			}
		});
		$('.form__password_show').click(function(e) {
			var type = $(this).closest('.form__item').find('input').attr('type');
			if(type == 'password'){
				$(this).closest('.form__item').find('input').attr('type', 'text');
				$(this).addClass('show');
			}else{
				$(this).closest('.form__item').find('input').attr('type', 'password');
				$(this).removeClass('show');
			}			
		});
		$('.checkout__summ_promo a').click(function(e) {
			$('.checkout__summ_promo-input').css('display', 'inline-flex');
			e.preventDefault();
		});
		$('.checkout__profile a').click(function(e) {
			$('.checkout__profile').hide();
			$('.checkout__profile_edit').show();
			e.preventDefault();
		});
		$('.checkout__profile_edit a').click(function(e) {
			$('.checkout__profile_edit').hide();
			$('.checkout__profile').show();
			
			e.preventDefault();
		});
	}
	
	function isNumeric(n)
	{
	 return !isNaN(parseFloat(n)) && isFinite(n)
 ;
 }
	/* ==========================================================================
			Settings page
	   ========================================================================== */
	if($('main').hasClass('my-account')){
		$(document).click(function(e) {
			if($(e.target).closest('.item-buy-amount').length) return;			
			$('#my-account-hits-list .item-buy-amount-list').fadeOut(150);
		});
		// Edit My Info
		$('.my-account__edit-info button').click(function() {
			var defaultButtonWord = $(this).data('defaultword');
			var newButtonWord = $(this).data('newword');
			$(this).text(function(index, text) {
					if (text.indexOf(defaultButtonWord) != -1) {
							return text.replace(defaultButtonWord, newButtonWord);
					} else {
							return text.replace(newButtonWord, defaultButtonWord);
					}
			});
			$(".my-information__data, .my-information__edit").slideToggle();
			$(".my-information__data").toggleClass("is-hidden");
			if ($(".my-information__data").hasClass('is-hidden')) {
					$("#name-checkout2").val($(".my-account__name").text());
					$("#surname-checkout2").val($(".my-account__surname").text());
					$("#phone-checkout2").val($(".my-account__phone").text());
					$("#email-field").val($(".my-account__email").text());
			} else {
					$.ajax({
							url: '/my-account',
							type: 'post',
							dataType: 'json',
							data: $('form#formPersonalData').serialize(),
							success: function(data) {
									console.log("form submitted")
							}
					});
					$(".my-account__name").text($("#name-checkout2").val());
					$(".my-account__surname").text($("#surname-checkout2").val());
					$(".my-account__phone").text($("#phone-checkout2").val());
					$(".my-account__email").text($("#email-field").val());
			}
		})
		// end Edit My Info
		$('.my-account__invite_link a').click(function(e) {
			e.preventDefault();
			var elem = $('#invite-link')[0];
			copyToClipboard(elem);
			function copyToClipboard(elem) {				
				  // create hidden text element, if it doesn't already exist
			    var targetId = "_hiddenCopyText_";
			    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
			    var origSelectionStart, origSelectionEnd;
			    if (isInput) {
			        // can just use the original source element for the selection and copy
			        target = elem;
			        origSelectionStart = elem.selectionStart;
			        origSelectionEnd = elem.selectionEnd;
			    } else {
			        // must use a temporary form element for the selection and copy
			        target = document.getElementById(targetId);
			        if (!target) {
			            var target = document.createElement("textarea");
			            target.style.position = "absolute";
			            target.style.left = "-9999px";
			            target.style.top = "0";
			            target.id = targetId;
			            document.body.appendChild(target);
			        }
			        target.textContent = elem.textContent;
			    }
			    // select the content
			    var currentFocus = document.activeElement;
			    target.focus();
			    target.setSelectionRange(0, target.value.length);
			    
			    // copy the selection
			    var succeed;
			    try {
			    	  succeed = document.execCommand("copy");
			    } catch(e) {
			        succeed = false;
			    }			    
			    // restore original focus
			    if (currentFocus && typeof currentFocus.focus === "function") {
			        currentFocus.focus();
			    }
			    
			    if (isInput) {
			        // restore prior selection
			        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
			    } else {
			        // clear temporary content
			        target.textContent = "";
			    }
			    $('.my-account__invite_link i').show(0, function(){
			    	setTimeout(function(){
			    		$('.my-account__invite_link i').fadeOut(800);
			    	}, 500);
			    });			    
			    return succeed;
			}
		});

		$('#my-account-hits-list').slick({
			arrows : true,          
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						variableWidth: true,
						centerMode: true,
						arrows:false
					}
				}
			]
	    });
	    $('#my-account-hits-list .main__hits_list-item .item-buy-amount span').click(function(e) {
			$('#my-account-hits-list .item-buy-amount-list').fadeOut(150);
			if($(this).closest('.item-buy-amount').find('.item-buy-amount-list').is(':hidden')){
				$(this).closest('.item-buy-amount').find('.item-buy-amount-list').fadeIn(150);
			}else{
				$(this).closest('.item-buy-amount').find('.item-buy-amount-list').fadeOut(150);
			}
		});
	}


	/*==========================================================================
			Product page
		 ========================================================================== */
		 if($('.documents-dropdowns').length) {
			 var $reqUrlBase = $('.documents-dropdowns').data("url");
			 var $reqUrlTemporary = $reqUrlBase;
			 $('body').on('click', '.product__dropdown-list li input', function(e){
				if(!$(this).closest('ul').hasClass('active')){
					$('.documents-dropdowns').find(".product__dropdown-list").removeClass("active");
					$(this).closest('ul').addClass('active');
				} else {
					var $currentItem = $(this).closest('li');
					var $currentDropdown = $(this).closest('.product__dropdown');
					var $currentDropdownType =  $currentDropdown.data("type");
					var $currentProductId = $currentItem.find('input').val();
					var urlPart = "";
					var defaultDropdownTitle = "";
					var dataType = '';
					if($currentDropdownType === "products") {
						urlPart = "&id_product=";
						$reqUrlTemporary = $reqUrlBase + urlPart + $currentProductId;
						defaultDropdownTitle = "Год партии"
						dataType = 'year';
						$('.dropdown--years, .dropdown--numbers, .certificate-form-footer').fadeOut();
					} else if($currentDropdownType === "years") {
						urlPart = "&id_year=";
						$reqUrlTemporary = $reqUrlTemporary+ urlPart + $currentProductId;
						defaultDropdownTitle = "Номер партии";
						dataType = 'number';
					}
					else if($currentDropdownType === "numbers") {
						urlPart = "&id_number=";
						$reqUrlTemporary = $reqUrlTemporary+ urlPart + $currentProductId;
						defaultDropdownTitle = "Номер партии";
						dataType = 'pdf';
					}
	
					if(isNumeric($currentProductId)) {
						var $itemsArray = '<li><label><input type="radio" /><span>'+defaultDropdownTitle+'</span></label></li>';
						$.ajax({
							url: $reqUrlTemporary,
							dataType: 'json',
						})
							.done(function(data) {
								if (dataType == 'pdf') {
									var footer = $('.certificate-form-footer');
									footer.find('.add__form_submit > a').attr('href', data.download_url);
									footer.fadeIn();
									return false;
								}
	
									$.each(data, function (index, value) {
	
										var val = (dataType == 'year') ? value.id_document_certificate_year : value.id_document_certificate_number;
	
										$itemsArray +='<li><label><input type="radio" value="'+val+'"><span>'+value.value+'</span></label></li>';
									});
									if($currentDropdownType !== 'numbers') {
										$currentDropdown.next().find(".product__dropdown-list").html($itemsArray);
										$currentDropdown.next().fadeIn();
									}	else if($currentDropdownType === 'numbers') {
										$('.certificate-form-footer').fadeIn()
									}
							});	
					}
					$(this).closest('ul').prepend($currentItem);
					$(this).closest('ul').removeClass('active');			
				}
			});
			$("#printToggler").click(function() {
				var btnDownloadDoc = $('.add__form_submit > a');
				var printStr = "?print=1";
				var baseBtnHref = btnDownloadDoc.attr("href");
				var newBtnHref = "";
				if (baseBtnHref.indexOf(printStr) ==-1) {
					newBtnHref = baseBtnHref + printStr;
				} else {
					newBtnHref = baseBtnHref.replace(printStr, '');
				}
				btnDownloadDoc.attr('href', newBtnHref);
			})
		 }
		
	if($('main').hasClass('product')){
		// Init product Popup Gallery
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1], // Will preload 0 - before current, and 1 after the current image
				tCounter: ""
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: ''
			},
			callbacks: {
    
				buildControls: function() {
					// re-appends controls inside the main container
					if(this.arrowLeft) {
						this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
					}
				}
			}
		});
		// end Init product Popup Gallery	
		$(document).click(function(e) {
			if($(e.target).closest('.product__dropdown').length) return;			
			$('.product__dropdown-list').removeClass('active');
		});
		
		
		$('body').on('click', '.product__dropdown-list li input', function(e){
			if(!$(this).closest('ul').hasClass('active')){
				$(".product__dropdown-list.active").removeClass("active");
				$(this).closest('ul').addClass('active');
			}else{								
				$(this).closest('ul').prepend($(this).closest('li'));
				$(this).closest('ul').removeClass('active');		
			}
		});		

		// $('.product__dropdown > span').click(function(e) {
		// 	console.log('aaaa');
		// 	$('.product__dropdown').find('.product__dropdown-list').fadeOut(150);
		// 	$('.product__dropdown').removeClass('active');
		// 	if($(this).closest('.product__dropdown').find('.product__dropdown-list').is(':hidden')){
		// 		$(this).closest('.product__dropdown').find('.product__dropdown-list').fadeIn(150);
		// 		$(this).closest('.product__dropdown').addClass('active');
		// 	}else{
		// 		$(this).closest('.product__dropdown').find('.product__dropdown-list').fadeOut(150);
		// 		$(this).closest('.product__dropdown').removeClass('active');
		// 	}
		// });
		$('body').on('mouseenter', '.add__form_assessment .stars li', function(e){
			var rate = Number($(this).attr('data-rate'));
			$('.add__form_assessment .stars li').removeAttr('style');
			switch (rate) {
				case 1:
					$('.add__form_assessment .stars li:nth-child(1)').css({
						backgroundColor : '#0f77ff',
  						borderColor: '#0f77ff',
  						color: '#fff'
					});
					$('.add__form_assessment .stars li:nth-child(2), .add__form_assessment .stars li:nth-child(3), .add__form_assessment .stars li:nth-child(4), .add__form_assessment .stars li:nth-child(5)').css({
						backgroundColor : '#fff',
  						borderColor: '#909ca7',
  						color: '#8f9ba6'
					});
					break;
				case 2:
					$('.add__form_assessment .stars li:nth-child(1), .add__form_assessment .stars li:nth-child(2)').css({
						backgroundColor : '#0f77ff',
  						borderColor: '#0f77ff',
  						color: '#fff'
					});
					$('.add__form_assessment .stars li:nth-child(3), .add__form_assessment .stars li:nth-child(4), .add__form_assessment .stars li:nth-child(5)').css({
						backgroundColor : '#fff',
  						borderColor: '#909ca7',
  						color: '#8f9ba6'
					});
					break;
				case 3:
					$('.add__form_assessment .stars li:nth-child(1), .add__form_assessment .stars li:nth-child(2), .add__form_assessment .stars li:nth-child(3)').css({
						backgroundColor : '#0f77ff',
  						borderColor: '#0f77ff',
  						color: '#fff'
					});
					$('.add__form_assessment .stars li:nth-child(4), .add__form_assessment .stars li:nth-child(5)').css({
						backgroundColor : '#fff',
  						borderColor: '#909ca7',
  						color: '#8f9ba6'
					});
					break;
				case 4:
					$('.add__form_assessment .stars li:nth-child(1), .add__form_assessment .stars li:nth-child(2), .add__form_assessment .stars li:nth-child(3),  .add__form_assessment .stars li:nth-child(4)').css({
						backgroundColor : '#0f77ff',
  						borderColor: '#0f77ff',
  						color: '#fff'
					});
					$('.add__form_assessment .stars li:nth-child(5)').css({
						backgroundColor : '#fff',
  						borderColor: '#909ca7',
  						color: '#8f9ba6'
					});
					break;
				case 5:
					$('.add__form_assessment .stars li:nth-child(1), .add__form_assessment .stars li').css({
						backgroundColor : '#0f77ff',
  						borderColor: '#0f77ff',
  						color: '#fff'
					});
					break;
				default:
					// statements_def
					break;
			}			
		});
		$('body').on('mouseleave', '.add__form_assessment .stars', function(e){
			$('.add__form_assessment .stars li').removeAttr('style');
		});		
		$('body').on('click', '.add__form_assessment .stars li', function(e){
			var rate = $(this).attr('data-rate');
			var name = $(this).attr('data-name');
			$(this).closest('.stars').attr('class', 'stars rate-'+rate);
			$('#form-rate').val(rate).attr('name', name);
		});
		$('.product__images').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.product__images_nav',
		  infinite: false
		});
		$('.product__images_nav').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.product__images',
		  dots: false,
		  centerMode: false,
		  focusOnSelect: true,
		  infinite: false
		});
		$('.main__hits_list').slick({
			arrows : true,          
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			centerMode: true,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						arrows:false
					}
				}
			]
	    });
	    $('.product__actions_rating a').click(function(e) {
	    	var y = $('.product__reviews').offset().top - 20;	    
	    	var body = $("html, body");
			body.stop().animate({scrollTop:y}, 700);
	    	e.preventDefault();
	    });
	    $('.product__description-short_more a').click(function(e) {
	    	var y = $('.product__description').offset().top - 20;
	    	
	    	var body = $("html, body");
			body.stop().animate({scrollTop:y}, 500);
	    	e.preventDefault();
	    });
	    $('.product__actions_amount-selector .minus').click(function(e) {
	    	var val = Number($(this).closest('.product__actions_amount-selector').find('input').val());
	    	if(val > 1)$(this).closest('.product__actions_amount-selector').find('input').val(--val);	    	
	    });
	    $('.product__actions_amount-selector .plus').click(function(e) {
	    	var val = Number($(this).closest('.product__actions_amount-selector').find('input').val());
	    	$(this).closest('.product__actions_amount-selector').find('input').val(++val);	    	
	    });

	}
// Progress bar
$( ".my-account__status-visual" ).each(function( index ) {
	var progressWidth = $(this).data("progress");

	if (progressWidth >= 100 ) {
		progressWidth = 100;
	}
	progressWidth = (100 - progressWidth) * 0.33 +  progressWidth;
	var progressWidthPercent = progressWidth + "%";

	$(this).find(".my-account__progress").css("width", progressWidthPercent);
	if(progressWidth >= 100) {
		$(this).addClass("max mid min");
	} else if(progressWidth >= 66.5) {
		$(this).addClass("mid min");
	} else if(progressWidth >= 33) {
		$(this).addClass("min");
	}
});
// end Progress bar
if($('article__slider')) {
	$('.article__slider').slick({
		arrows : true,
		nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13.25 10l-7.141-7.42c-0.268-0.27-0.268-0.707 0-0.979 0.268-0.27 0.701-0.27 0.969 0l7.83 7.908c0.268 0.271 0.268 0.709 0 0.979l-7.83 7.908c-0.268 0.271-0.701 0.27-0.969 0s-0.268-0.707 0-0.979l7.141-7.417z"></path></svg></button>',
		prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13.891 17.418c0.268 0.272 0.268 0.709 0 0.979s-0.701 0.271-0.969 0l-7.83-7.908c-0.268-0.27-0.268-0.707 0-0.979l7.83-7.908c0.268-0.27 0.701-0.27 0.969 0s0.268 0.709 0 0.979l-7.141 7.419 7.141 7.418z"></path></svg></button>',      
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
		});
}

// init custom scroll
$('.scrollbar-inner').scrollbar();


// Begin mobile menu
$('#touchMobileHamburger').click(function() {
  $('body').toggleClass('nav-mobile-showing');
});

$('#touchMobileHamburger').on('click', function(e) {
  e.preventDefault();
});
// End of mobile menu
$('.toggleMobileFilter').click(function() {
  $('body').toggleClass('filter-mobile-showing');
});
$('.toggleMobileFilter').on('click', function(e) {
  e.preventDefault();
});

// Create mobile menu
function createMobileMenu() {
	$($(".main-nav").detach()).appendTo("#navMobileWrap .main-nav__mobile");

	$(".footer__list li:nth-child(3) p > *").clone().appendTo("#navMobileWrap .main-nav__additional .main-nav__list").wrap( "<li></li>" );

	$($(".top-nav__right > a:nth-child(3)").detach()).addClass("log-in-out").appendTo(" .header--mobile__buttons");

	$($("#_desktop_cart").detach()).appendTo(".header--mobile__buttons");

	$( ".header--mobile__phone" ).html($(".header__main_contacts b").html());

}
// Create mobile menu

// Toggle menu elements
var $toggleCategory = $('.main-nav__all-btn');
$('.main-nav__all').click(function(e) {
	var btnToggledText = $toggleCategory.data('toggled');
	var btnNotToggledText = $toggleCategory.data('nottoggled');
  $('.main-nav__list > li:nth-child(n+11)').animate({ opacity: 'toggle', height: 'toggle' }, 200, "linear", () => {
		$(this).hasClass('toggled') ? $toggleCategory.text(btnNotToggledText) : $toggleCategory.text(btnToggledText);
		$(this).toggleClass('toggled');
    });
});
// end Toggle menu elements

// Cut and paste product header description 
function cutAndPaste() {
		$($(".product__main_right > h1, .product__main_right > .product__price, .product__main_right > .product__info").detach()).appendTo(".product__main_top");
		
}
function cutAndPasteDestroy() {
		$($(".product__main_top > *").detach()).prependTo(".product__main_right");
}
// end  Cut and paste product header description 

// Accordion
function accordionInit() {
	$('.accordion__body').slideToggle();
	$('.accordion .accordion__item:eq(0) .accordion__header').addClass('active');
	$('.accordion .accordion__item:eq(0) .accordion__body').slideDown();
	$('.accordion .accordion__header').click(function(j) {
			var dropDown = $(this).closest('.accordion__item').find('.accordion__body');
	
			$(this).closest('.accordion').find('.accordion__body').not(dropDown).slideUp();
	
			if ($(this).hasClass('active')) {
					$(this).removeClass('active');
			} else {
					$(this).closest('.accordion').find('.accordion__header.active').removeClass('active');
					$(this).addClass('active');
			}
	
			dropDown.stop(false, true).slideToggle();
	
			j.preventDefault();
	});
}
function accordionDestroy() {
	$('.product__description .accordion__header').unbind('click')
	$('.product__description .accordion__body').slideDown();
	$('.product__description .accordion__header').removeClass('active');
}
// end Accordion

function tabsInit() {
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

	$('.tab_content').find('.tabs_item:eq("0")').css("display", "block");
	$('.tab ul.tabs li a').click(function (g) { 
		var tab = $(this).closest('.tab'), 
		index = $(this).closest('li').index(),
		currentLiIndex = tab.find('ul.tabs > li:eq(' + index + ')');
		
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		currentLiIndex.prevAll().css({
			"background-color": "#0f77ff",
			"color": "#fff" 
		});
		currentLiIndex.nextAll().css({
			"background-color": "#c8ced3",
			"color": "#000" 
		});
		
		tab.find('.tab_content').find('.tabs_item').not('.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('.tabs_item:eq(' + index + ')').slideDown();
		
		g.preventDefault();
	} );

	$('.tab .tabs_next-step').click(function (g) { 
		var tab = $(this).closest('.tab'), 
		index = $(this).closest('.tabs_item').index(),
		currentLiIndex = tab.find('ul.tabs > li:eq(' + index + ')');
		if($(this).closest('.tabs_item').next().index() === -1) return;
		
		tab.find('ul.tabs > li').removeClass('current');
		tab.find('ul.tabs > li:eq(' + index + ')').addClass('current');
		
		currentLiIndex.prevAll().css({
			"background-color": "#0f77ff",
			"color": "#fff" 
		});
		currentLiIndex.nextAll().css({
			"background-color": "#c8ced3",
			"color": "#000" 
		});

		tab.find('.tab_content').find('.tabs_item').not('.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('.tabs_item:eq(' + index + ')').slideDown();
		
		g.preventDefault();
	} );
}
var $windowWidth = $(window).width();
$( window ).resize(function() {
$windowWidth = $(window).width();
	if($windowWidth < 481) {
		if(!$("body").hasClass('mobile-viewport')) {
			cutAndPaste();
			accordionInit();
			tabsInit();
			$("body").addClass('mobile-viewport').removeClass('desktop-viewport');
		}
	} else {
		if(!$("body").hasClass('desktop-viewport')) {
			accordionDestroy()
			cutAndPasteDestroy()
			$("body").addClass('desktop-viewport').removeClass('mobile-viewport');
		}
	}
});

if($windowWidth < 992) {
	createMobileMenu();
}

if($windowWidth < 481) {
	cutAndPaste();
	accordionInit();
	tabsInit();
}

if($windowWidth > 481) {
	if($('.accordion-separate')[0]) {
		accordionInit()
	}
}
$('.btnToggleCalc').click(function() {
	$(this).closest('.product__actions_calc').find('.product__calc-quatity').stop(false, true).slideToggle();
});

// Type only numbers
$( "#calcProductQuantity" ).on("input", function(e) {
	$(this).val($(this).val().replace(/[^\d]/,''));
});
// end Type only numbers
var measuresTypeArray = ["л", "мл", "кг"];
function checkMeasureType(value, array) {
	var targetValue = '';
		var splittedVal = value.split(" ");
		$.each(splittedVal, function (indx, val) {
			for (var i = 0; i < array.length; i++) {
				if(array[i] === val) {
					targetValue = val
				}
			}
		});
		switch (targetValue) {
			case 'л':
				targetValue = 'литров';
				break;
			case 'мл':
				targetValue = 'миллилитров';
				break;
			case 'кг':
				targetValue = 'киллограмм';
				break;
			default:
				targetValue = '(выберите объем)';
				break;
		}
		return targetValue;
} 

// Count profuct quantity
$('#product__calcBtnCount').click(function() {
	var productQuantityValue = $('#calcProductQuantity').val();
	var productQuantityResult = 0;
	var btnText1 = $(this).data("text1");
	var btnText2 = $(this).data("text2");
	var productMeasure = $('.product__information .product__dropdown-list input:checked + span').text();
	productMeasure = $.trim(productMeasure);
	console.log(productMeasure)
	if(isNumeric(productQuantityValue)) {
		$('#product__calcMeasure').text(checkMeasureType(productMeasure, measuresTypeArray))
		productQuantityResult = productQuantityValue * $(this).data("coef1") + productQuantityValue * $(this).data("coef2");
		productQuantityResult = Math.round(productQuantityResult * 100) / 100;
		$(this).closest(".product__calc-quatity").find(".form__row").slideToggle();	
		$("#product__calcLitres").text(productQuantityResult);
		if($(this).text() === btnText1) {
			$(this).text(btnText2)	
		} else {
			$(this).text(btnText1)	
		}
	}
});
// end Count profuct quantity

// hide/show checkout radio inputs after select
$('.custom-radio-btn').click(function(e) {
	$(this).closest('.custom-radio-btn').addClass('checked');
	$(this).closest('.tabs_item--radio').find('.custom-radio-btn:not(.checked)').animate({height:0, margin:0, opacity:0},200);
	$(this).closest('.tabs_item--radio').find('.toggle-inputs').show();
});
$('.toggle-inputs').click(function(e) {
	$(this).closest('.tabs_item--radio').find('.custom-radio-btn').removeClass('checked').animate({height:"100%", marginBottom:"20px", opacity:1},200);
	$(this).hide();
});

// Shop filter
if(document.querySelector('.stores__filter')) {
	$('.stores__filter .custom-radio-btn').click(function(e) {
		var $storeId = $(this).find('input').data('category');

		updateMarkers($storeId, "id_category");
		if($storeId === 0) {
			$('.stores__search-list li').removeClass('choosed').show();
		} else {
			$('.stores__search-list li:not([data-category=' + $storeId + '])').removeClass('choosed').hide();
			$('.stores__search-list li[data-category=' + $storeId + ']').addClass('choosed').show();
		}
	});
	function delay(callback, ms) {
		var timer = 0;
		return function() {
			var context = this, args = arguments;
			clearTimeout(timer);
			timer = setTimeout(function () {
				callback.apply(context, args);
			}, ms || 0);
		};
	}

	$('#filterStoresSearchInput').on('keyup', delay(function() {
		var searchVal = $(this).val().toLowerCase();
		var filterItems;
		if($('.stores__search-list li').hasClass('choosed')) {
		 filterItems = $('.stores__search-list li.choosed');
		} else {
			filterItems = $('.stores__search-list li');
		}
		if ( searchVal != true ) {
			filterItems.closest('li').hide();
			var searchfilterValues = [];
			$( filterItems ).each(function() {
				var filterItemText = $( this ).text().toLowerCase();
				if(~filterItemText.indexOf(searchVal)) {
						searchfilterValues.push($(this).closest('li').data('storeid'));
					$(this).closest('li').show();
				}
				
			});
		} else {
			filterItems.show();
		}
		updateMarkersBySearch(searchfilterValues, "id_store");
	},500));
}	
// end Shop filter

// Fetch reviews and create pagination 
if(document.querySelector('#pagination-container')) {
	var dataContainer = $('#reviews-data-container');
	var template = function(data, pagination) {
		var maxRangeValue = pagination.pageNumber * pagination.pageSize;
		var minRangeValue = pagination.pageNumber * pagination.pageSize - pagination.pageSize;
		var html;

		if (data) {
			// data from flickr
			$.each(data, function(index, item) {
				if(index < maxRangeValue && index >= minRangeValue) {
					html += `<section class="assessments__comments_item">
					<h3>
						<div class="name">${item.name}, ${item.id}</div>
						<div class="stars rate-5">
							<i></i><i></i><i></i><i></i><i></i>
						</div>
					</h3>
					<div class="comment">${item.body}</div>
				</section>`;
				} else {
					return
				}
			});
		} else {
			$.each(data, function(index, item) {
				html += '<li>'+ item +'</li>';
			});
		}

		return html;
	}
	$('#pagination-container').pagination({
    dataSource: 'https://jsonplaceholder.typicode.com/comments',
    totalNumberLocator: function(response) {
			return response.length / this.pageSize
	},
		pageSize: 4,
		locator: 'items',
    callback: function(data, pagination) {
				// template method of yourself
        var html = template(data, pagination);
        dataContainer.html(html);
    }
})
}
// end Fetch reviews and create pagination 

});
// Google Map
var googleMapsLoaded = false;
var key = 'AIzaSyCUZUaQA2VgfQ7tsSMdwTDbNRwLt-GT8ok';
var urlRequest = "https://maps.google.com/maps/api/js?sensor=true&key=" + key;
if(document.querySelector('.map-canvas')) {
window.onload = function () {
	// Load Google map
	if (!googleMapsLoaded) {
		$
			.getScript(urlRequest)
			.done(() => {
				googleMapsLoaded = true;
		prepareToClearAllMarkers()

				LoadMap()
			})

	} else {
		prepareToClearAllMarkers()

		LoadMap()
	}
	// Load Google map

	// Preparation for clearing all markers
	function prepareToClearAllMarkers() {
		google.maps.Map.prototype.markers = new Array();
		google.maps.Map.prototype.getMarkers = function() {
				return this.markers
		};
		google.maps.Map.prototype.clearMarkers = function() {
				for(var i=0; i<this.markers.length; i++){
						this.markers[i].setMap(null);
				}
				this.markers = new Array();
		};
		google.maps.Marker.prototype._setMap = google.maps.Marker.prototype.setMap;
		google.maps.Marker.prototype.setMap = function(map) {
				if (map) {
						map.markers[map.markers.length] = this;
				}
				this._setMap(map);
		}

	}
};
// end Preparation for clearing all markers
var markers = $('#mapStoresCanvas').data('markers');
var mapZoom = $('#mapStoresCanvas').data('zoom');
if(!mapZoom) {
	mapZoom = 10
}
	var map;
	var marker;
	function LoadMap() {
			var mapOptions = {
					center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
					zoom: mapZoom,
					mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			map = new google.maps.Map(document.getElementById("mapStoresCanvas"), mapOptions);
			SetMarker(markers);
	};
	function SetMarker(position) {
			//Remove previous Markers.
			if (marker != null) {
					map.clearMarkers()					
			}
			var infowindow = new google.maps.InfoWindow();
			//Set Marker on Map.
		var infoWindowContent = [];
		for (i = 0; i < position.length; i++) {

			var data = position[i];
			var myLatlng = new google.maps.LatLng(data.lat, data.lng);
			marker = new google.maps.Marker({
					position: myLatlng,
					map: map,
					title: data.title
			});
			if(data.infowindow) {
				infoWindowContent[i] = '<a href="' + data.link + '">' + data.infowindow + '</a>';
				google.maps.event.addListener(
					marker,
					'click',
					(function(marker, i) {
						return function() {
							infowindow.setContent(infoWindowContent[i]);
							infowindow.open(map, marker);
						};
					})(marker, i),
				);
			}
		}
	};
}

function updateMarkers(id, filterKey) {
	if(id === 0) {
	SetMarker(markers);
	} else {
		var markersFiltered = [];
		for (var i = 0; i < markers.length ; i++) {
			if (markers[i][filterKey] == id) {
				markersFiltered.push(markers[i]);
			}
	}
		SetMarker(markersFiltered);
	}
}
function updateMarkersBySearch(id, filterKey) {
	if(id === 0) {
	SetMarker(markers);
	} else {
		var markersFiltered = [];
		for (var i = 0; i < markers.length ; i++) {
			if (id.indexOf(markers[i][filterKey]) !== -1) {
				markersFiltered.push(markers[i]);
			}
	}
		SetMarker(markersFiltered);
	}
}
// Multiple Maps
var $maps = $('.google-map');
window.initMaps = function() {
  if ($maps.length) {
    if (!googleMapsLoaded) {
      $.getScript(urlRequest)
        .done((script, textStatus) => {
          googleMapsLoaded = true;
          createMaps($maps);
        })
        .fail((jqxhr, settings, ex) => {});
    } else {
      createMaps($maps);
    }
  }
};

window.createMaps = function($maps) {
  $maps.each(function() {
	var mapMarker = $(this).data('markers');
    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(mapMarker[0].lat, mapMarker[0].lng),
      marker: true,
      scrollwheel: false,
      mapTypeControl: false,
      streetViewControl: false,
    };
    var googleMap = $(this).get(0);
    var map = new google.maps.Map(googleMap, mapOptions);
    var myLatLong = new google.maps.LatLng(mapMarker[0].lat, mapMarker[0].lng);

    if (mapOptions.marker) {
      const marker = new google.maps.Marker({
        position: myLatLong,
        map,
      });
    }
  });
};
if($maps) {
	initMaps()
}

// end Google Map
