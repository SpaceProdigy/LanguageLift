import{u as j,g as I,r as g,a as B,s as m,B as f,m as w,P as O,j as c,T as y,R as b,b as A}from"./index-DEMqSzXo.js";function D(s,i,t,e,n){const[r,o]=g.useState(()=>n&&t?t(s).matches:e?e(s).matches:i);return B(()=>{let u=!0;if(!t)return;const a=t(s),l=()=>{u&&o(a.matches)};return l(),a.addListener(l),()=>{u=!1,a.removeListener(l)}},[s,t]),r}const P=g.useSyncExternalStore;function N(s,i,t,e,n){const r=g.useCallback(()=>i,[i]),o=g.useMemo(()=>{if(n&&t)return()=>t(s).matches;if(e!==null){const{matches:h}=e(s);return()=>h}return r},[r,s,e,n,t]),[u,a]=g.useMemo(()=>{if(t===null)return[r,()=>()=>{}];const h=t(s);return[()=>h.matches,d=>(h.addListener(d),()=>{h.removeListener(d)})]},[r,t,s]);return P(a,u,o)}function M(s,i={}){const t=j(),e=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:n=!1,matchMedia:r=e?window.matchMedia:null,ssrMatchMedia:o=null,noSsr:u=!1}=I({name:"MuiUseMediaQuery",props:i,theme:t});let a=s;return a=a.replace(/^@media( ?)/m,""),(P!==void 0?N:D)(a,n,r,o,u)}const H=m(f)`
  width: 90%;
  max-width: 500px;
  overflow-y: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${({theme:s})=>s.palette.mode==="dark"?"#000000bb":"#ffffffbb"};
  padding: 15px;
  border-radius: 5px;
  scrollbar-width: thin;
`,R=w(H),F=m(f)`
  height: ${({matches500:s})=>s==="false"?"70px":""};

  overflow-y: auto;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${({theme:s})=>s.palette.mode==="dark"?"#000000bb":"#ffffffbb"};
  padding: 15px;
  scrollbar-width: thin;
`,U=w(F),q=m(f)(({theme:s,imageurl:i})=>({width:"100%",position:"relative",backgroundImage:`url(${i})`,[s.breakpoints.up("lg")]:{height:"600px"},[s.breakpoints.between(900,1200)]:{height:"500px"},[s.breakpoints.between(400,900)]:{height:"400px"},[s.breakpoints.down(400)]:{height:"300px"},backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"5px"})),z=w(q);function E({arr:s}){const i=M("(min-width:500px)");return c.jsx(c.Fragment,{children:c.jsx(f,{sx:{width:"100%",marginTop:6,marginBottom:6,display:"flex",alignItems:"center",flexDirection:"column",gap:5},children:s.map(({title:t,description:e,imageUrl:n,id:r},o)=>c.jsxs(z,{id:r,initial:{y:70},whileInView:{y:0},transition:{type:"spring",bounce:.4,duration:.8},viewport:{once:!0},imageurl:n,children:[c.jsx(R,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0,amount:1},children:c.jsx(y,{textAlign:"center",variant:i?"h5":"h6",children:t})}),c.jsx(U,{matches500:String(i),initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0,amount:.8},children:c.jsx(y,{textAlign:"center",variant:i?"body1":"body2",component:"p",children:e})})]},o))})})}E.propTypes={arr:O.array};const x="/LanguageLift/assets/cathedral-EMdNVelu.jpg",C="/LanguageLift/assets/city-qShvSBbv.jpg",S="/LanguageLift/assets/natural-history-museum-D6XOY4a0.jpg",W={en:[{title:"Interactive Language Lessons",description:"Engage in interactive lessons designed to improve your English skills. Practice speaking, listening, reading, and writing in a fun and effective way.",imageUrl:x},{title:"Personalized Learning Experience",description:"Receive a personalized learning experience tailored to your needs and learning pace. Our platform adapts to your progress and provides targeted exercises and feedback.",imageUrl:C},{title:"Language Practice Anytime, Anywhere",description:"Practice English whenever and wherever you want with our mobile-friendly platform. Access lessons, quizzes, and resources on your smartphone or tablet.",imageUrl:S}],ua:[{title:"Інтерактивні уроки англійської",description:"Беріть участь у інтерактивних уроках, спрямованих на покращення вашої англійської. Практикуйте говоріння, слухання, читання та письмо в цікавий та ефективний спосіб.",imageUrl:x},{title:"Персоналізований досвід навчання",description:"Отримуйте персоналізований досвід навчання, підготовлений під ваші потреби та темп навчання. Наша платформа адаптується до вашого прогресу та надає цілеспрямовані вправи та зворотний зв'язок.",imageUrl:C},{title:"Практикуйте мову в будь-який час і в будь-якому місці",description:"Практикуйте англійську мову в будь-який час і в будь-якому місці з нашою мобільною платформою. Отримайте доступ до уроків, тестів та ресурсів на своєму смартфоні або планшеті.",imageUrl:S}]},Q={en:"Your path to a brighter future starts here",ua:"Ваш шлях до яскравого майбутнього починається тут"},$="/LanguageLift/assets/road-BNxpMxvb.jpg",_="/LanguageLift/assets/london-bridge-Da9NWUIt.jpg",V=m(f)`
  width: 100%;
  height: 100%;
  background-image: url(${$});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 720px) {
    background-image: url(${_});
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #11111170;
  }
`,Y=m(f)`
  position: absolute;
  width: 90%;
  max-width: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({theme:s})=>s.palette.mode==="dark"?"#000000bb":"#ffffffbb"};
  padding: 10px 0;
  border-radius: 7px;
`,X=m(f)`
  position: relative;
  width: calc(100% + 32px);
  height: 100vh;
  margin-left: -16px;
  margin-right: -16px;
`;function v(){return v=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s[e]=t[e])}return s},v.apply(this,arguments)}var G={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(s){},onComplete:function(s){},preStringTyped:function(s,i){},onStringTyped:function(s,i){},onLastStringBackspaced:function(s){},onTypingPaused:function(s,i){},onTypingResumed:function(s,i){},onReset:function(s){},onStop:function(s,i){},onStart:function(s,i){},onDestroy:function(s){}},J=new(function(){function s(){}var i=s.prototype;return i.load=function(t,e,n){if(t.el=typeof n=="string"?document.querySelector(n):n,t.options=v({},G,e),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(l){return l.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(t.stringsElement.children),o=r.length;if(o)for(var u=0;u<o;u+=1)t.strings.push(r[u].innerHTML.trim())}for(var a in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[a]=a;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},i.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},i.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(n)}},i.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(n)}},s}()),T=new(function(){function s(){}var i=s.prototype;return i.typeHtmlChars=function(t,e,n){if(n.contentType!=="html")return e;var r=t.substring(e).charAt(0);if(r==="<"||r==="&"){var o;for(o=r==="<"?">":";";t.substring(e+1).charAt(0)!==o&&!(1+ ++e>t.length););e++}return e},i.backSpaceHtmlChars=function(t,e,n){if(n.contentType!=="html")return e;var r=t.substring(e).charAt(0);if(r===">"||r===";"){var o;for(o=r===">"?"<":"&";t.substring(e-1).charAt(0)!==o&&!(--e<0););e--}return e},s}()),K=function(){function s(t,e){J.load(this,e,t),this.begin()}var i=s.prototype;return i.toggle=function(){this.pause.status?this.start():this.stop()},i.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},i.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},i.destroy=function(){this.reset(!1),this.options.onDestroy(this)},i.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},i.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},i.typewrite=function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){e=T.typeHtmlChars(t,e,n);var u=0,a=t.substring(e);if(a.charAt(0)==="^"&&/^\^\d+/.test(a)){var l=1;l+=(a=/\d+/.exec(a)[0]).length,u=parseInt(a),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+l),n.toggleBlinking(!0)}if(a.charAt(0)==="`"){for(;t.substring(e+o).charAt(0)!=="`"&&(o++,!(e+o>t.length)););var h=t.substring(0,e),d=t.substring(h.length+1,e+o),p=t.substring(e+o+1);t=h+d+p,o--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,o),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},u)},r):this.setPauseStatus(t,e,!0)},i.keepTyping=function(t,e,n){e===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var r=t.substring(0,e+=n);this.replaceText(r),this.typewrite(t,e)},i.doneTyping=function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(t,e)},this.backDelay))},i.backspace=function(t,e){var n=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=T.backSpaceHtmlChars(t,e,n);var o=t.substring(0,e);if(n.replaceText(o),n.smartBackspace){var u=n.strings[n.arrayPos+1];n.stopNum=u&&o===u.substring(0,e)?e:0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))},r)}else this.setPauseStatus(t,e,!1)},i.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},i.setPauseStatus=function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e},i.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},i.humanizer=function(t){return Math.round(Math.random()*t/2)+t},i.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},i.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},i.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},i.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&t.el.value.length!==0||t.start()}))},i.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},s}();const Z=g.memo(({style:s,className:i,typedRef:t,parseRef:e,stopped:n,children:r,startWhenVisible:o,...u})=>{const a=g.useRef(null),l=g.useMemo(()=>{var d;return[...Object.values(u).filter(p=>typeof p=="boolean"||typeof p=="number"||typeof p=="string"),(d=u.strings)==null?void 0:d.join(",")]},[u]);g.useEffect(()=>{const d=e&&e(a)||a.current,p=new K(d,{...u});if((n||o)&&(p==null||p.stop()),o){const k=new IntersectionObserver(([L])=>{L.isIntersecting&&(p==null||p.start(),k.disconnect())});k.observe(d)}return t&&p&&t(p),()=>{p.destroy()}},l);const h=r?b.cloneElement(r,{ref:a}):b.createElement("span",{style:s,ref:a});return b.createElement("span",{style:s,className:i,"data-testid":"react-typed"},h)}),et=()=>{const{language:s}=g.useContext(A);return c.jsxs(c.Fragment,{children:[c.jsxs(X,{children:[c.jsx(V,{}),c.jsxs(Y,{children:[c.jsx(y,{textAlign:"center",variant:"h4",children:"Language Lift"}),c.jsx(y,{variant:"body2",textAlign:"center",marginTop:1,children:c.jsx(Z,{strings:[Q[s]],typeSpeed:70,cursorChar:""})})]})]}),c.jsx(E,{arr:W[s]})]})};export{et as default};
