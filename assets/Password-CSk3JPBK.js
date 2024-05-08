import{b as n,ay as K,az as J,aA as Q,j as t,aB as Z,aC as ee,aD as te,r as O,i as U,s as z,B as w,N as re,P as R,u as ne,a as se,O as oe,aE as ae,M as ie,ag as X,T as S,m as ce}from"./index-CC8K7kPt.js";function H(){const e=n.useRef(!1);return K(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function le(){const e=H(),[a,r]=n.useState(0),i=n.useCallback(()=>{e.current&&r(a+1)},[a]);return[n.useCallback(()=>J.postRender(i),[i]),a]}class ue extends n.Component{getSnapshotBeforeUpdate(a){const r=this.props.childRef.current;if(r&&a.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=r.offsetHeight||0,i.width=r.offsetWidth||0,i.top=r.offsetTop,i.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function fe({children:e,isPresent:a}){const r=n.useId(),i=n.useRef(null),k=n.useRef({width:0,height:0,top:0,left:0}),{nonce:b}=n.useContext(Q);return n.useInsertionEffect(()=>{const{width:u,height:m,top:C,left:j}=k.current;if(a||!i.current||!u||!m)return;i.current.dataset.motionPopId=r;const s=document.createElement("style");return b&&(s.nonce=b),document.head.appendChild(s),s.sheet&&s.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${m}px !important;
            top: ${C}px !important;
            left: ${j}px !important;
          }
        `),()=>{document.head.removeChild(s)}},[a]),t.jsx(ue,{isPresent:a,childRef:i,sizeRef:k,children:n.cloneElement(e,{ref:i})})}const D=({children:e,initial:a,isPresent:r,onExitComplete:i,custom:k,presenceAffectsLayout:b,mode:u})=>{const m=Z(pe),C=n.useId(),j=n.useMemo(()=>({id:C,initial:a,isPresent:r,custom:k,onExitComplete:s=>{m.set(s,!0);for(const f of m.values())if(!f)return;i&&i()},register:s=>(m.set(s,!1),()=>m.delete(s))}),b?[Math.random()]:[r]);return n.useMemo(()=>{m.forEach((s,f)=>m.set(f,!1))},[r]),n.useEffect(()=>{!r&&!m.size&&i&&i()},[r]),u==="popLayout"&&(e=t.jsx(fe,{isPresent:r,children:e})),t.jsx(ee.Provider,{value:j,children:e})};function pe(){return new Map}function de(e){return n.useEffect(()=>()=>e(),[])}const I=e=>e.key||"";function xe(e,a){e.forEach(r=>{const i=I(r);a.set(i,r)})}function he(e){const a=[];return n.Children.forEach(e,r=>{n.isValidElement(r)&&a.push(r)}),a}const $e=({children:e,custom:a,initial:r=!0,onExitComplete:i,exitBeforeEnter:k,presenceAffectsLayout:b=!0,mode:u="sync"})=>{const m=n.useContext(te).forceRender||le()[0],C=H(),j=he(e);let s=j;const f=n.useRef(new Map).current,$=n.useRef(s),l=n.useRef(new Map).current,v=n.useRef(!0);if(K(()=>{v.current=!1,xe(j,l),$.current=s}),de(()=>{v.current=!0,l.clear(),f.clear()}),v.current)return t.jsx(t.Fragment,{children:s.map(p=>t.jsx(D,{isPresent:!0,initial:r?void 0:!1,presenceAffectsLayout:b,mode:u,children:p},I(p)))});s=[...s];const E=$.current.map(I),g=j.map(I),x=E.length;for(let p=0;p<x;p++){const d=E[p];g.indexOf(d)===-1&&!f.has(d)&&f.set(d,void 0)}return u==="wait"&&f.size&&(s=[]),f.forEach((p,d)=>{if(g.indexOf(d)!==-1)return;const y=l.get(d);if(!y)return;const _=E.indexOf(d);let P=p;if(!P){const B=()=>{f.delete(d);const M=Array.from(l.keys()).filter(o=>!g.includes(o));if(M.forEach(o=>l.delete(o)),$.current=j.filter(o=>{const c=I(o);return c===d||M.includes(c)}),!f.size){if(C.current===!1)return;m(),i&&i()}};P=t.jsx(D,{isPresent:!1,onExitComplete:B,custom:a,presenceAffectsLayout:b,mode:u,children:y},I(y)),f.set(d,P)}s.splice(_,0,P)}),s=s.map(p=>{const d=p.key;return f.has(d)?p:t.jsx(D,{isPresent:!0,presenceAffectsLayout:b,mode:u,children:p},I(p))}),t.jsx(t.Fragment,{children:f.size?s:s.map(p=>n.cloneElement(p))})};var A={},me=U;Object.defineProperty(A,"__esModule",{value:!0});var V=A.default=void 0,ge=me(O()),be=t;V=A.default=(0,ge.default)((0,be.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");var L={},je=U;Object.defineProperty(L,"__esModule",{value:!0});var G=L.default=void 0,Ce=je(O()),ve=t;G=L.default=(0,Ce.default)((0,ve.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const ye=z(w)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: ${({theme:e})=>{var a,r;return(r=(a=e==null?void 0:e.palette)==null?void 0:a.background)==null?void 0:r.paper}};
  box-shadow: ${({theme:e})=>e.shadows[11]};
  padding: 50px;
  border-radius: 5px;
`,ke=z(re)`
  color: transparent;
  text-decoration: none;
`,Re=z(w)`
  position: absolute;
  left: 15px;
  top: 15px;
`,we=z(w)`
  position: absolute;
  right: 15px;
  top: 15px;
`,Ee=z("input")`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 28px;
  text-align: center;
  background-color: inherit;
`,Ie=z(w)`
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
  animation: ${({error:e})=>e?"shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both":""};
  animation: ${({success:e})=>e?"shake-vertical 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both":""};
`,ze=z(w)`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({borderColor:e})=>e};

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

  animation: ${({tab:e})=>e?"vibrate-1 0.3s linear both":""};
`,Pe=({passwordKey:e,sessionKey:a,buttonBack:r=!1,closeClickInside:i=!1,openWithInitilizat:k=!1,openModal:b=!1,setOpenModal:u=!1,buttonClose:m=!1})=>{const C=ne(se),[j,s]=n.useState(k??!sessionStorage.getItem(a)),[f,$]=n.useState(null),l=n.useRef({1:"",2:"",3:"",4:""}),[v,E]=n.useState({1:"",2:"",3:"",4:""}),g=Object.values(v).join(""),x=oe(),p=()=>s(!1),d=g.length===4&&e!==g,y=e===g,{state:_}=ae();n.useEffect(()=>{y&&(sessionStorage.setItem(a,"access"),setTimeout(()=>{u&&u(!1),p()},500))},[y,a,u]),n.useEffect(()=>{g.length===4&&l.current[f].blur()},[f,g.length]);const P=(o,c)=>{const h=o.target.value,F=h.replace(/\D/g,"");if(E(()=>({...v,[o.target.id]:F.slice(0,1)})),!isNaN(h)&&h!==""){if(c===4){l.current[1].focus();return}l.current[c+1].focus()}},B=(o,c)=>{if(o.keyCode===39){if(c===4)return l.current[1].focus();l.current[c+1].focus()}if(o.keyCode===37){if(c===1)return l.current[4].focus();l.current[c-1].focus(),l.current[c-1]}if(o.keyCode===8){if(g.length===0&&l.current[c].blur(),o.preventDefault(),c===1){E(h=>({...h,[c]:""})),l.current[4].focus();return}l.current[c-1].focus(),E(h=>({...h,[c]:""}))}},M=o=>{var c,h,F,N,T,q,W,Y;return g===e?(h=(c=x==null?void 0:x.palette)==null?void 0:c.success)==null?void 0:h.main:g.length===4&&e!==g?(N=(F=x==null?void 0:x.palette)==null?void 0:F.error)==null?void 0:N.main:v[o]?(q=(T=x==null?void 0:x.palette)==null?void 0:T.info)==null?void 0:q.main:(Y=(W=x==null?void 0:x.palette)==null?void 0:W.text)==null?void 0:Y.primary};return t.jsx(t.Fragment,{children:t.jsx(ie,{open:b||j,onClose:()=>{i&&s(!1),u&&u(!1)},children:t.jsxs(ye,{children:[r&&t.jsx(Re,{children:t.jsx(ke,{to:_??"/",children:t.jsx(X,{children:t.jsx(V,{})})})}),m&&t.jsx(we,{children:t.jsx(X,{onClick:()=>{u?u(!1):s(!1)},children:t.jsx(G,{})})}),t.jsxs(w,{sx:{display:"flex",gap:1,flexDirection:"column",alignItems:"center"},children:[t.jsx(S,{variant:"subtitle2",children:C==="en"?"Enter password":"Введіть пароль"}),t.jsx(w,{sx:{position:"relative",width:200,height:50},children:t.jsx(Ie,{error:d?"+":"",success:y?"+":"",children:[1,2,3,4].map((o,c)=>t.jsx(ze,{tab:Number(o)<=Number(v[o])?"+":"",borderColor:M(o),children:t.jsx(Ee,{ref:h=>{l.current[o]=h},id:o,onChange:h=>P(h,o),value:v[o],autoComplete:"off",autoFocus:o===1,onKeyDown:h=>B(h,o),onFocus:()=>$(o),type:"tel"})},c))})}),t.jsx(ce.div,{animate:{opacity:d||y?1:0},transition:{duration:.5},style:{height:50,width:"100%"},children:t.jsxs(w,{display:"flex",flexDirection:"column",alignItems:"center",gap:0,color:d?x.palette.error.main:x.palette.success.main,children:[d&&(C==="en"?t.jsxs(t.Fragment,{children:[t.jsx(S,{variant:"subtitle2",component:"span",textAlign:"center",children:"The password is incorrect,"}),t.jsx(S,{variant:"subtitle2",component:"span",textAlign:"center",children:"please try again"})]}):t.jsxs(t.Fragment,{children:[t.jsx(S,{variant:"subtitle2",component:"span",textAlign:"center",children:"Пароль невірний,"}),t.jsx(S,{variant:"subtitle2",component:"span",textAlign:"center",children:"спробуйте ще раз"})]})),t.jsx(S,{variant:"h6",component:"span",textAlign:"center",children:y&&(C==="en"?"Success":"Yспіх")})]})})]})]})})})};Pe.propTypes={passwordKey:R.string.isRequired,sessionKey:R.string.isRequired,buttonBack:R.bool,closeClickInside:R.bool,openWithInitilizat:R.bool,openModal:R.bool,setOpenModal:R.func,buttonClose:R.bool};export{$e as A,Pe as P,G as d};
