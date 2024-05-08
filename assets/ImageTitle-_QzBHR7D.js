import{u as c,aL as p,j as e,aM as l,s,B as n,T as a,P as i}from"./index-BS9e2PLG.js";import{u as d,R as g}from"./index-BpabbXDK.js";const b=()=>{const t=c(p),r=d("(max-width:480px)");return e.jsx("div",{children:e.jsx(l,{style:r&&{width:"90%",marginTop:20,marginLeft:20},position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:t})})},x="/languagelift/assets/city-bridg-Dpd-2PSY.jpg",u=s(n)`
  width: calc(100% + 32px);
  height: 200px;
  background-image: ${({image:t})=>t?`url(${t})`:`url(${x})`};
  margin-left: -16px;
  margin-right: -16px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  @media screen and (min-width: 600px) {
    margin-left: -24px;
    margin-right: -24px;
    width: calc(100% + 48px);
    font-size: 32px;
    height: 300px;
  }
`,h=s(n)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #11111150; */
`,m=s(n)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px;
  background-color: ${({theme:t})=>t.palette.mode==="light"?"#ffffffbb":"#111111bb"};
  border-radius: 7px;
`;f.propTypes={tipingText:i.string,image:i.string,title:i.string};function f({tipingText:t,image:r,title:o}){return e.jsx(e.Fragment,{children:e.jsx(u,{image:r,children:e.jsx(h,{children:e.jsxs(m,{children:[e.jsx(a,{variant:"inherit",children:o}),e.jsx(a,{variant:"h6",children:t&&e.jsx(g,{strings:[t],typeSpeed:70,cursorChar:""})})]})})})})}export{b as A,f as I};
