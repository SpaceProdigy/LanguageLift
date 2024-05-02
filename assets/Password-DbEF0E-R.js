import{c as S,i as _,j as e,s as p,B as i,N as W,P as l,r as u,Q as X,R as H,as as Q,K as V,aj as I,T as b,m as G}from"./index-CL5SmFiH.js";var k={},J=_;Object.defineProperty(k,"__esModule",{value:!0});var R=k.default=void 0,K=J(S()),M=e;R=k.default=(0,K.default)((0,M.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");var y={},U=_;Object.defineProperty(y,"__esModule",{value:!0});var $=y.default=void 0,Z=U(S()),O=e;$=y.default=(0,Z.default)((0,O.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const ee=p(i)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: ${({theme:r})=>r.palette.background.paper};
  box-shadow: ${({theme:r})=>r.shadows[11]};
  padding: 50px;
  border-radius: 5px;
`,te=p(W)`
  color: transparent;
  text-decoration: none;
`,re=p(i)`
  position: absolute;
  left: 15px;
  top: 15px;
`,ae=p(i)`
  position: absolute;
  right: 15px;
  top: 15px;
`,se=p("input")`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 28px;
  text-align: center;
  background-color: inherit;
`,ne=p(i)`
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
  animation: ${({error:r})=>r?"shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both":""};
  animation: ${({success:r})=>r?"shake-vertical 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both":""};
`,oe=p(i)`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({borderColor:r})=>r};

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

  animation: ${({tab:r})=>r?"vibrate-1 0.3s linear both":""};
`,le=({passwordKey:r,sessionKey:m,buttonBack:B=!1,closeClickInside:D=!1,openWithInitilizat:N=!1,openModal:w=!1,setOpenModal:c=!1,buttonClose:z=!1})=>{const[E,g]=u.useState(N??!sessionStorage.getItem(m)),[C,P]=u.useState(null),n=u.useRef({1:"",2:"",3:"",4:""}),[x,j]=u.useState({1:"",2:"",3:"",4:""}),o=Object.values(x).join(""),f=X(),{language:v}=u.useContext(H),T=()=>g(!1),h=o.length===4&&r!==o,d=r===o,{state:q}=Q();u.useEffect(()=>{d&&(sessionStorage.setItem(m,"access"),setTimeout(()=>{c&&c(!1),T()},500))},[d,m,c]),u.useEffect(()=>{o.length===4&&n.current[C].blur()},[C,o.length]);const F=(t,a)=>{const s=t.target.value,L=s.replace(/\D/g,"");if(j(()=>({...x,[t.target.id]:L.slice(0,1)})),!isNaN(s)&&s!==""){if(a===4){n.current[1].focus();return}n.current[a+1].focus()}},Y=(t,a)=>{if(t.keyCode===39){if(a===4)return n.current[1].focus();n.current[a+1].focus()}if(t.keyCode===37){if(a===1)return n.current[4].focus();n.current[a-1].focus(),n.current[a-1]}if(t.keyCode===8){if(o.length===0&&n.current[a].blur(),t.preventDefault(),a===1){j(s=>({...s,[a]:""})),n.current[4].focus();return}n.current[a-1].focus(),j(s=>({...s,[a]:""}))}},A=t=>o===r?f.palette.success.main:o.length===4&&r!==o?f.palette.error.main:x[t]?f.palette.info.main:f.palette.text.primary;return e.jsx(e.Fragment,{children:e.jsx(V,{open:w||E,onClose:()=>{D&&g(!1),c&&c(!1)},children:e.jsxs(ee,{children:[B&&e.jsx(re,{children:e.jsx(te,{to:q,children:e.jsx(I,{children:e.jsx(R,{})})})}),z&&e.jsx(ae,{children:e.jsx(I,{onClick:()=>{c?c(!1):g(!1)},children:e.jsx($,{})})}),e.jsxs(i,{sx:{display:"flex",gap:1,flexDirection:"column",alignItems:"center"},children:[e.jsx(b,{variant:"subtitle2",children:v==="en"?"Enter password":"Введіть пароль"}),e.jsx(i,{sx:{position:"relative",width:200,height:50},children:e.jsx(ne,{error:h?"+":"",success:d?"+":"",children:[1,2,3,4].map((t,a)=>e.jsx(oe,{tab:Number(t)<=Number(x[t])?"+":"",borderColor:A(t),children:e.jsx(se,{ref:s=>{n.current[t]=s},id:t,onChange:s=>F(s,t),value:x[t],autoComplete:"off",autoFocus:a===0,onKeyDown:s=>Y(s,t),onFocus:()=>P(t),type:"tel"})},a))})}),e.jsx(G.div,{animate:{opacity:h||d?1:0},transition:{duration:.5},style:{height:50,width:"100%"},children:e.jsxs(i,{display:"flex",flexDirection:"column",alignItems:"center",gap:0,color:h?f.palette.error.main:f.palette.success.main,children:[h&&(v==="en"?e.jsxs(e.Fragment,{children:[e.jsx(b,{variant:"subtitle2",component:"span",textAlign:"center",children:"The password is incorrect,"}),e.jsx(b,{variant:"subtitle2",component:"span",textAlign:"center",children:"please try again"})]}):"Пароль невірний, спробуйте ще раз"),e.jsx(b,{variant:"h6",component:"span",textAlign:"center",children:d&&(v==="en"?"Success":"Yспіх")})]})})]})]})})})};le.propTypes={passwordKey:l.string.isRequired,sessionKey:l.string.isRequired,buttonBack:l.bool,closeClickInside:l.bool,openWithInitilizat:l.bool,openModal:l.bool,setOpenModal:l.func,buttonClose:l.bool};export{le as P,$ as d};
