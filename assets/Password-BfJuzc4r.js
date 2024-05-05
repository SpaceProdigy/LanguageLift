import{r,aA as N,aB as U,aC as H,j as e,aD as O,aE as G,aF as V,b as T,i as q,s as z,B as w,N as J,P as R,u as Q,a as Z,K as ee,aG as te,M as re,af as L,T as S,m as ne}from"./index-rF1xy_YO.js";function W(){const t=r.useRef(!1);return N(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function se(){const t=W(),[i,n]=r.useState(0),a=r.useCallback(()=>{t.current&&n(i+1)},[i]);return[r.useCallback(()=>U.postRender(a),[a]),i]}class oe extends r.Component{getSnapshotBeforeUpdate(i){const n=this.props.childRef.current;if(n&&i.isPresent&&!this.props.isPresent){const a=this.props.sizeRef.current;a.height=n.offsetHeight||0,a.width=n.offsetWidth||0,a.top=n.offsetTop,a.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ae({children:t,isPresent:i}){const n=r.useId(),a=r.useRef(null),y=r.useRef({width:0,height:0,top:0,left:0}),{nonce:g}=r.useContext(H);return r.useInsertionEffect(()=>{const{width:u,height:x,top:j,left:b}=y.current;if(i||!a.current||!u||!x)return;a.current.dataset.motionPopId=n;const s=document.createElement("style");return g&&(s.nonce=g),document.head.appendChild(s),s.sheet&&s.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${x}px !important;
            top: ${j}px !important;
            left: ${b}px !important;
          }
        `),()=>{document.head.removeChild(s)}},[i]),e.jsx(oe,{isPresent:i,childRef:a,sizeRef:y,children:r.cloneElement(t,{ref:a})})}const B=({children:t,initial:i,isPresent:n,onExitComplete:a,custom:y,presenceAffectsLayout:g,mode:u})=>{const x=O(ie),j=r.useId(),b=r.useMemo(()=>({id:j,initial:i,isPresent:n,custom:y,onExitComplete:s=>{x.set(s,!0);for(const f of x.values())if(!f)return;a&&a()},register:s=>(x.set(s,!1),()=>x.delete(s))}),g?[Math.random()]:[n]);return r.useMemo(()=>{x.forEach((s,f)=>x.set(f,!1))},[n]),r.useEffect(()=>{!n&&!x.size&&a&&a()},[n]),u==="popLayout"&&(t=e.jsx(ae,{isPresent:n,children:t})),e.jsx(G.Provider,{value:b,children:t})};function ie(){return new Map}function ce(t){return r.useEffect(()=>()=>t(),[])}const I=t=>t.key||"";function le(t,i){t.forEach(n=>{const a=I(n);i.set(a,n)})}function ue(t){const i=[];return r.Children.forEach(t,n=>{r.isValidElement(n)&&i.push(n)}),i}const Ee=({children:t,custom:i,initial:n=!0,onExitComplete:a,exitBeforeEnter:y,presenceAffectsLayout:g=!0,mode:u="sync"})=>{const x=r.useContext(V).forceRender||se()[0],j=W(),b=ue(t);let s=b;const f=r.useRef(new Map).current,$=r.useRef(s),c=r.useRef(new Map).current,C=r.useRef(!0);if(N(()=>{C.current=!1,le(b,c),$.current=s}),ce(()=>{C.current=!0,c.clear(),f.clear()}),C.current)return e.jsx(e.Fragment,{children:s.map(p=>e.jsx(B,{isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:g,mode:u,children:p},I(p)))});s=[...s];const E=$.current.map(I),h=b.map(I),k=E.length;for(let p=0;p<k;p++){const d=E[p];h.indexOf(d)===-1&&!f.has(d)&&f.set(d,void 0)}return u==="wait"&&f.size&&(s=[]),f.forEach((p,d)=>{if(h.indexOf(d)!==-1)return;const v=c.get(d);if(!v)return;const M=E.indexOf(d);let P=p;if(!P){const _=()=>{f.delete(d);const F=Array.from(c.keys()).filter(o=>!h.includes(o));if(F.forEach(o=>c.delete(o)),$.current=b.filter(o=>{const l=I(o);return l===d||F.includes(l)}),!f.size){if(j.current===!1)return;x(),a&&a()}};P=e.jsx(B,{isPresent:!1,onExitComplete:_,custom:i,presenceAffectsLayout:g,mode:u,children:v},I(v)),f.set(d,P)}s.splice(M,0,P)}),s=s.map(p=>{const d=p.key;return f.has(d)?p:e.jsx(B,{isPresent:!0,presenceAffectsLayout:g,mode:u,children:p},I(p))}),e.jsx(e.Fragment,{children:f.size?s:s.map(p=>r.cloneElement(p))})};var D={},fe=q;Object.defineProperty(D,"__esModule",{value:!0});var Y=D.default=void 0,pe=fe(T()),de=e;Y=D.default=(0,pe.default)((0,de.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");var A={},xe=q;Object.defineProperty(A,"__esModule",{value:!0});var K=A.default=void 0,he=xe(T()),me=e;K=A.default=(0,he.default)((0,me.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const ge=z(w)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: ${({theme:t})=>t.palette.background.paper};
  box-shadow: ${({theme:t})=>t.shadows[11]};
  padding: 50px;
  border-radius: 5px;
`,be=z(J)`
  color: transparent;
  text-decoration: none;
`,je=z(w)`
  position: absolute;
  left: 15px;
  top: 15px;
`,Ce=z(w)`
  position: absolute;
  right: 15px;
  top: 15px;
`,ve=z("input")`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 28px;
  text-align: center;
  background-color: inherit;
`,ye=z(w)`
  position: absolute;
  display: flex;
  gap: 16px;
  top: 5px;
  left: -5px;

  @keyframes shake-horizontal {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateX(-10px);
    }
    20%,
    40%,
    60% {
      transform: translateX(10px);
    }
    80% {
      transform: translateX(8px);
    }
    90% {
      transform: translateX(-8px);
    }
  }

  @keyframes shake-vertical {
    0%,
    100% {
      transform: translateY(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateY(-8px);
    }
    20%,
    40%,
    60% {
      transform: translateY(8px);
    }
    80% {
      transform: translateY(6.4px);
    }
    90% {
      transform: translateY(-6.4px);
    }
  }
  animation: ${({error:t})=>t?"shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both":""};
  animation: ${({success:t})=>t?"shake-vertical 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both":""};
`,ke=z(w)`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({borderColor:t})=>t};

  @keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }

  animation: ${({tab:t})=>t?"vibrate-1 0.3s linear both":""};
`,Re=({passwordKey:t,sessionKey:i,buttonBack:n=!1,closeClickInside:a=!1,openWithInitilizat:y=!1,openModal:g=!1,setOpenModal:u=!1,buttonClose:x=!1})=>{const j=Q(Z),[b,s]=r.useState(y??!sessionStorage.getItem(i)),[f,$]=r.useState(null),c=r.useRef({1:"",2:"",3:"",4:""}),[C,E]=r.useState({1:"",2:"",3:"",4:""}),h=Object.values(C).join(""),k=ee(),p=()=>s(!1),d=h.length===4&&t!==h,v=t===h,{state:M}=te();r.useEffect(()=>{v&&(sessionStorage.setItem(i,"access"),setTimeout(()=>{u&&u(!1),p()},500))},[v,i,u]),r.useEffect(()=>{h.length===4&&c.current[f].blur()},[f,h.length]);const P=(o,l)=>{const m=o.target.value,X=m.replace(/\D/g,"");if(E(()=>({...C,[o.target.id]:X.slice(0,1)})),!isNaN(m)&&m!==""){if(l===4){c.current[1].focus();return}c.current[l+1].focus()}},_=(o,l)=>{if(o.keyCode===39){if(l===4)return c.current[1].focus();c.current[l+1].focus()}if(o.keyCode===37){if(l===1)return c.current[4].focus();c.current[l-1].focus(),c.current[l-1]}if(o.keyCode===8){if(h.length===0&&c.current[l].blur(),o.preventDefault(),l===1){E(m=>({...m,[l]:""})),c.current[4].focus();return}c.current[l-1].focus(),E(m=>({...m,[l]:""}))}},F=o=>h===t?k.palette.success.main:h.length===4&&t!==h?k.palette.error.main:C[o]?k.palette.info.main:k.palette.text.primary;return e.jsx(e.Fragment,{children:e.jsx(re,{open:g||b,onClose:()=>{a&&s(!1),u&&u(!1)},children:e.jsxs(ge,{children:[n&&e.jsx(je,{children:e.jsx(be,{to:M??"/",children:e.jsx(L,{children:e.jsx(Y,{})})})}),x&&e.jsx(Ce,{children:e.jsx(L,{onClick:()=>{u?u(!1):s(!1)},children:e.jsx(K,{})})}),e.jsxs(w,{sx:{display:"flex",gap:1,flexDirection:"column",alignItems:"center"},children:[e.jsx(S,{variant:"subtitle2",children:j==="en"?"Enter password":"Введіть пароль"}),e.jsx(w,{sx:{position:"relative",width:200,height:50},children:e.jsx(ye,{error:d?"+":"",success:v?"+":"",children:[1,2,3,4].map((o,l)=>e.jsx(ke,{tab:Number(o)<=Number(C[o])?"+":"",borderColor:F(o),children:e.jsx(ve,{ref:m=>{c.current[o]=m},id:o,onChange:m=>P(m,o),value:C[o],autoComplete:"off",autoFocus:o===1,onKeyDown:m=>_(m,o),onFocus:()=>$(o),type:"tel"})},l))})}),e.jsx(ne.div,{animate:{opacity:d||v?1:0},transition:{duration:.5},style:{height:50,width:"100%"},children:e.jsxs(w,{display:"flex",flexDirection:"column",alignItems:"center",gap:0,color:d?k.palette.error.main:k.palette.success.main,children:[d&&(j==="en"?e.jsxs(e.Fragment,{children:[e.jsx(S,{variant:"subtitle2",component:"span",textAlign:"center",children:"The password is incorrect,"}),e.jsx(S,{variant:"subtitle2",component:"span",textAlign:"center",children:"please try again"})]}):e.jsxs(e.Fragment,{children:[e.jsx(S,{variant:"subtitle2",component:"span",textAlign:"center",children:"Пароль невірний,"}),e.jsx(S,{variant:"subtitle2",component:"span",textAlign:"center",children:"спробуйте ще раз"})]})),e.jsx(S,{variant:"h6",component:"span",textAlign:"center",children:v&&(j==="en"?"Success":"Yспіх")})]})})]})]})})})};Re.propTypes={passwordKey:R.string.isRequired,sessionKey:R.string.isRequired,buttonBack:R.bool,closeClickInside:R.bool,openWithInitilizat:R.bool,openModal:R.bool,setOpenModal:R.func,buttonClose:R.bool};export{Ee as A,Re as P,K as d};
