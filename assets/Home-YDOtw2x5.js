import{s as g,B as h,m as x,P as j,j as a,T as m,r as f,e as b,R as B}from"./index-Dyyx1Aw4.js";import{u as I}from"./useMediaQuery-CpqS0rwr.js";const A=g(h)`
  width: 90%;
  max-width: 500px;
  overflow-y: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${({theme:i})=>i.palette.mode==="dark"?"#000000bb":"#ffffffbb"};
  padding: 15px;
  border-radius: 5px;
  scrollbar-width: thin;
`,O=x(A),L=g(h)`
  height: ${({matches500:i})=>i==="false"?"70px":""};

  overflow-y: auto;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${({theme:i})=>i.palette.mode==="dark"?"#000000bb":"#ffffffbb"};
  padding: 15px;
  scrollbar-width: thin;
`,D=x(L),N=g(h)(({theme:i,imageurl:n})=>({width:"100%",position:"relative",backgroundImage:`url(${n})`,[i.breakpoints.up("lg")]:{height:"600px"},[i.breakpoints.between(900,1200)]:{height:"500px"},[i.breakpoints.between(400,900)]:{height:"400px"},[i.breakpoints.down(400)]:{height:"300px"},backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"5px"})),M=x(N);function S({arr:i}){const n=I("(min-width:500px)");return a.jsx(a.Fragment,{children:a.jsx(h,{sx:{width:"100%",marginTop:6,marginBottom:6,display:"flex",alignItems:"center",flexDirection:"column",gap:5},children:i.map(({title:t,description:e,imageUrl:s,id:o},r)=>a.jsxs(M,{id:o,initial:{y:70},whileInView:{y:0},transition:{type:"spring",bounce:.4,duration:.8},viewport:{once:!0},imageurl:s,children:[a.jsx(O,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0,amount:1},children:a.jsx(m,{textAlign:"center",variant:n?"h5":"h6",children:t})}),a.jsx(D,{matches500:String(n),initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0,amount:.8},children:a.jsx(m,{textAlign:"center",variant:n?"body1":"body2",component:"p",children:e})})]},r))})})}S.propTypes={arr:j.array};const w="/languagelift/assets/cathedral-EMdNVelu.jpg",C="/languagelift/assets/city-qShvSBbv.jpg",T="/languagelift/assets/natural-history-museum-D6XOY4a0.jpg",H={en:[{title:"Interactive Language Lessons",description:"Engage in interactive lessons designed to improve your English skills. Practice speaking, listening, reading, and writing in a fun and effective way.",imageUrl:w},{title:"Personalized Learning Experience",description:"Receive a personalized learning experience tailored to your needs and learning pace. Our platform adapts to your progress and provides targeted exercises and feedback.",imageUrl:C},{title:"Language Practice Anytime, Anywhere",description:"Practice English whenever and wherever you want with our mobile-friendly platform. Access lessons, quizzes, and resources on your smartphone or tablet.",imageUrl:T}],ua:[{title:"Інтерактивні уроки англійської",description:"Беріть участь у інтерактивних уроках, спрямованих на покращення вашої англійської. Практикуйте говоріння, слухання, читання та письмо в цікавий та ефективний спосіб.",imageUrl:w},{title:"Персоналізований досвід навчання",description:"Отримуйте персоналізований досвід навчання, підготовлений під ваші потреби та темп навчання. Наша платформа адаптується до вашого прогресу та надає цілеспрямовані вправи та зворотний зв'язок.",imageUrl:C},{title:"Практикуйте мову в будь-який час і в будь-якому місці",description:"Практикуйте англійську мову в будь-який час і в будь-якому місці з нашою мобільною платформою. Отримайте доступ до уроків, тестів та ресурсів на своєму смартфоні або планшеті.",imageUrl:T}]},q={en:"Your path to a brighter future starts here",ua:"Ваш шлях до яскравого майбутнього починається тут"},F="/languagelift/assets/road-BNxpMxvb.jpg",R="/languagelift/assets/london-bridge-Da9NWUIt.jpg",z=g(h)`
  width: 100%;
  height: 100%;
  background-image: url(${F});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 720px) {
    background-image: url(${R});
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
`,U=g(h)`
  position: absolute;
  width: 90%;
  max-width: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({theme:i})=>i.palette.mode==="dark"?"#000000bb":"#ffffffbb"};
  padding: 10px 0;
  border-radius: 7px;
`,W=g(h)`
  position: relative;
  width: calc(100% + 32px);
  height: 100vh;
  margin-left: -16px;
  margin-right: -16px;

  @media screen and (min-width: 600px) {
    margin-left: -24px;
    margin-right: -24px;
    width: calc(100% + 48px);
  }
`;function v(){return v=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(i[e]=t[e])}return i},v.apply(this,arguments)}var $={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(i){},onComplete:function(i){},preStringTyped:function(i,n){},onStringTyped:function(i,n){},onLastStringBackspaced:function(i){},onTypingPaused:function(i,n){},onTypingResumed:function(i,n){},onReset:function(i){},onStop:function(i,n){},onStart:function(i,n){},onDestroy:function(i){}},_=new(function(){function i(){}var n=i.prototype;return n.load=function(t,e,s){if(t.el=typeof s=="string"?document.querySelector(s):s,t.options=v({},$,e),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(d){return d.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var o=Array.prototype.slice.apply(t.stringsElement.children),r=o.length;if(r)for(var p=0;p<r;p+=1)t.strings.push(o[p].innerHTML.trim())}for(var c in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[c]=c;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},n.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},n.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.setAttribute(e,"true"),s.innerHTML=`
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
      `,document.body.appendChild(s)}},n.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.setAttribute(e,"true"),s.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(s)}},i}()),P=new(function(){function i(){}var n=i.prototype;return n.typeHtmlChars=function(t,e,s){if(s.contentType!=="html")return e;var o=t.substring(e).charAt(0);if(o==="<"||o==="&"){var r;for(r=o==="<"?">":";";t.substring(e+1).charAt(0)!==r&&!(1+ ++e>t.length););e++}return e},n.backSpaceHtmlChars=function(t,e,s){if(s.contentType!=="html")return e;var o=t.substring(e).charAt(0);if(o===">"||o===";"){var r;for(r=o===">"?"<":"&";t.substring(e-1).charAt(0)!==r&&!(--e<0););e--}return e},i}()),V=function(){function i(t,e){_.load(this,e,t),this.begin()}var n=i.prototype;return n.toggle=function(){this.pause.status?this.start():this.stop()},n.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},n.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},n.destroy=function(){this.reset(!1),this.options.onDestroy(this)},n.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},n.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},n.typewrite=function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),r=1;this.pause.status!==!0?this.timeout=setTimeout(function(){e=P.typeHtmlChars(t,e,s);var p=0,c=t.substring(e);if(c.charAt(0)==="^"&&/^\^\d+/.test(c)){var d=1;d+=(c=/\d+/.exec(c)[0]).length,p=parseInt(c),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+d),s.toggleBlinking(!0)}if(c.charAt(0)==="`"){for(;t.substring(e+r).charAt(0)!=="`"&&(r++,!(e+r>t.length)););var y=t.substring(0,e),l=t.substring(y.length+1,e+r),u=t.substring(e+r+1);t=y+l+u,r--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),e>=t.length?s.doneTyping(t,e):s.keepTyping(t,e,r),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},p)},o):this.setPauseStatus(t,e,!0)},n.keepTyping=function(t,e,s){e===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var o=t.substring(0,e+=s);this.replaceText(o),this.typewrite(t,e)},n.doneTyping=function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,e)},this.backDelay))},n.backspace=function(t,e){var s=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=P.backSpaceHtmlChars(t,e,s);var r=t.substring(0,e);if(s.replaceText(r),s.smartBackspace){var p=s.strings[s.arrayPos+1];s.stopNum=p&&r===p.substring(0,e)?e:0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))},o)}else this.setPauseStatus(t,e,!1)},n.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},n.setPauseStatus=function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e},n.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},n.humanizer=function(t){return Math.round(Math.random()*t/2)+t},n.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},n.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},n.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},n.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&t.el.value.length!==0||t.start()}))},n.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},i}();const Y=f.memo(({style:i,className:n,typedRef:t,parseRef:e,stopped:s,children:o,startWhenVisible:r,...p})=>{const c=f.useRef(null),d=f.useMemo(()=>{var l;return[...Object.values(p).filter(u=>typeof u=="boolean"||typeof u=="number"||typeof u=="string"),(l=p.strings)==null?void 0:l.join(",")]},[p]);f.useEffect(()=>{const l=e&&e(c)||c.current,u=new V(l,{...p});if((s||r)&&(u==null||u.stop()),r){const k=new IntersectionObserver(([E])=>{E.isIntersecting&&(u==null||u.start(),k.disconnect())});k.observe(l)}return t&&u&&t(u),()=>{u.destroy()}},d);const y=o?b.cloneElement(o,{ref:c}):b.createElement("span",{style:i,ref:c});return b.createElement("span",{style:i,className:n,"data-testid":"react-typed"},y)}),G=()=>{const{language:i}=f.useContext(B);return a.jsxs(a.Fragment,{children:[a.jsxs(W,{children:[a.jsx(z,{}),a.jsxs(U,{children:[a.jsx(m,{textAlign:"center",variant:"h4",children:"Language lift"}),a.jsx(m,{variant:"body2",textAlign:"center",marginTop:1,children:a.jsx(Y,{strings:[q[i]],typeSpeed:70,cursorChar:""})})]})]}),a.jsx(S,{arr:H[i]})]})};export{G as default};
