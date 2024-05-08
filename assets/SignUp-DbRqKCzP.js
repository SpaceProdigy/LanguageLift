import{s as S,b as c,j as e,T as j}from"./index-CC8K7kPt.js";import{u as b,o as v,s as I}from"./authShema-BsgZs86D.js";import{F as i,I as n,O as u,a as m}from"./OutlinedInput-BFQV-n1K.js";import{B as y}from"./Button-96W1LRy8.js";const w=S("form")`
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  gap: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,H=()=>{var p,d,g;const[r,s]=c.useState(JSON.parse(localStorage.getItem("signup"))&&JSON.parse(localStorage.getItem("signup"))),{register:a,handleSubmit:x,formState:{errors:l},reset:h}=b({resolver:v(I),mode:"onBlur",defaultValues:r??{login:"",email:"",password:""}}),f=t=>{console.log(t),h(),s(),localStorage.removeItem("signup")};return c.useEffect(()=>{(JSON.parse(localStorage.getItem("signup"))||r)&&localStorage.setItem("signup",JSON.stringify(r))},[r]),e.jsx(e.Fragment,{children:e.jsxs(w,{onSubmit:x(f),children:[e.jsx(j,{variant:"h5",sx:{mb:3},children:"Sing up"}),e.jsxs(i,{variant:"outlined",fullWidth:!0,children:[e.jsx(n,{variant:"outlined",children:"Login"}),e.jsx(u,{label:"Login",placeholder:"Enter your login or email",onInput:t=>s(o=>({...o,login:t.target.value})),...a("login")}),e.jsx(m,{sx:{minHeight:40},error:!0,children:(p=l.login)==null?void 0:p.message})]}),e.jsxs(i,{variant:"outlined",fullWidth:!0,children:[e.jsx(n,{variant:"outlined",children:"Email"}),e.jsx(u,{label:"Email",type:"email",placeholder:"Enter your password",onInput:t=>s(o=>({...o,email:t.target.value})),...a("email")}),e.jsx(m,{sx:{minHeight:40},error:!0,children:(d=l.email)==null?void 0:d.message})]}),e.jsxs(i,{variant:"outlined",fullWidth:!0,children:[e.jsx(n,{variant:"outlined",children:"Password"}),e.jsx(u,{label:"Password",type:"password",placeholder:"Enter your password",...a("password")}),e.jsx(m,{sx:{minHeight:40},error:!0,children:(g=l.password)==null?void 0:g.message})]}),e.jsx(y,{type:"submit",variant:"contained",fullWidth:!0,size:"large",children:"Submit"})]})})};export{H as default};
