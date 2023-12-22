import{s as e,a as s,L as a,P as i,b2 as n,T as o,r as p,b3 as d}from"./index.2f59c431.js";import{D as l}from"./styled.7a46e1f3.js";const c=e.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  margin-top: 40px;
`,x=({mandants:t})=>s(l,{children:s(c,{children:t.map(r=>s(a,{to:i.DASHBOARD,onClick:()=>n(r.id.toString()),children:s(o,{title:`${r.id} - ${r.name}`,description:`${r.longDescription} ( ${r.shortDescription} )`})},r.id))})}),m=()=>{const t=d();return t?s(x,{mandants:t}):null},f=p.exports.memo(m);export{f as default};
//# sourceMappingURL=index.9dccc5fe.js.map
