import{s as r,B as i,m as o,P as x,j as t,T as n,u as b,a as f}from"./index-DNf80v2z.js";import{u as w,R as y}from"./index-DQciCfKL.js";const v=r(i)`
  width: 90%;
  max-width: 500px;
  overflow-y: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${({theme:e})=>e.palette.mode==="dark"?"#000000bb":"#ffffffbb"};
  padding: 15px;
  border-radius: 5px;
  scrollbar-width: thin;
`,k=o(v),j=r(i)`
  height: ${({matches500:e})=>e==="false"?"70px":""};

  overflow-y: auto;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${({theme:e})=>e.palette.mode==="dark"?"#000000bb":"#ffffffbb"};
  padding: 15px;
  scrollbar-width: thin;
`,T=o(j),S=r(i)(({theme:e,imageurl:a})=>({width:"100%",position:"relative",backgroundImage:`url(${a})`,[e.breakpoints.up("lg")]:{height:"600px"},[e.breakpoints.between(900,1200)]:{height:"500px"},[e.breakpoints.between(400,900)]:{height:"400px"},[e.breakpoints.down(400)]:{height:"300px"},backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"5px"})),W=o(S);function l({arr:e}){const a=w("(min-width:500px)");return t.jsx(t.Fragment,{children:t.jsx(i,{sx:{width:"100%",marginTop:6,marginBottom:6,display:"flex",alignItems:"center",flexDirection:"column",gap:5},children:e.map(({title:d,description:g,imageUrl:u,id:h},m)=>t.jsxs(W,{id:h,initial:{y:70},whileInView:{y:0},transition:{type:"spring",bounce:.4,duration:.8},viewport:{once:!0},imageurl:u,children:[t.jsx(k,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0,amount:1},children:t.jsx(n,{textAlign:"center",variant:a?"h5":"h6",children:d})}),t.jsx(T,{matches500:String(a),initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0,amount:.8},children:t.jsx(n,{textAlign:"center",variant:a?"body1":"body2",component:"p",children:g})})]},m))})})}l.propTypes={arr:x.array};const s="/languagelift/assets/cathedral-EMdNVelu.jpg",p="/languagelift/assets/city-qShvSBbv.jpg",c="/languagelift/assets/natural-history-museum-D6XOY4a0.jpg",A={en:[{title:"Interactive Language Lessons",description:"Engage in interactive lessons designed to improve your English skills. Practice speaking, listening, reading, and writing in a fun and effective way.",imageUrl:s},{title:"Personalized Learning Experience",description:"Receive a personalized learning experience tailored to your needs and learning pace. Our platform adapts to your progress and provides targeted exercises and feedback.",imageUrl:p},{title:"Language Practice Anytime, Anywhere",description:"Practice English whenever and wherever you want with our mobile-friendly platform. Access lessons, quizzes, and resources on your smartphone or tablet.",imageUrl:c}],ua:[{title:"Інтерактивні уроки англійської",description:"Беріть участь у інтерактивних уроках, спрямованих на покращення вашої англійської. Практикуйте говоріння, слухання, читання та письмо в цікавий та ефективний спосіб.",imageUrl:s},{title:"Персоналізований досвід навчання",description:"Отримуйте персоналізований досвід навчання, підготовлений під ваші потреби та темп навчання. Наша платформа адаптується до вашого прогресу та надає цілеспрямовані вправи та зворотний зв'язок.",imageUrl:p},{title:"Практикуйте мову в будь-який час і в будь-якому місці",description:"Практикуйте англійську мову в будь-який час і в будь-якому місці з нашою мобільною платформою. Отримайте доступ до уроків, тестів та ресурсів на своєму смартфоні або планшеті.",imageUrl:c}]},I={en:"Your path to a brighter future starts here",ua:"Ваш шлях до яскравого майбутнього починається тут"},P="/languagelift/assets/road-BNxpMxvb.jpg",U="/languagelift/assets/london-bridge-Da9NWUIt.jpg",$=r(i)`
  width: 100%;
  height: 100%;
  background-image: url(${P});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 720px) {
    background-image: url(${U});
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
`,z=r(i)`
  position: absolute;
  width: 90%;
  max-width: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({theme:e})=>e.palette.mode==="dark"?"#000000bb":"#ffffffbb"};
  padding: 10px 0;
  border-radius: 7px;
`,E=r(i)`
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
`,R=()=>{const e=b(f);return t.jsxs(t.Fragment,{children:[t.jsxs(E,{children:[t.jsx($,{}),t.jsxs(z,{children:[t.jsx(n,{textAlign:"center",variant:"h4",children:"Language lift"}),t.jsx(n,{variant:"body2",textAlign:"center",marginTop:1,children:t.jsx(y,{strings:[I[e]],typeSpeed:70,cursorChar:""})})]})]}),t.jsx(l,{arr:A[e]})]})};export{R as default};
