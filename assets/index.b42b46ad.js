import{a as t,e as l,s as u,D as B,I as j,C as $,B as w,r as p,u as E,b4 as V,j as m,S as I,f as H,g as W,h as z,i as J,k as K,l as Y,t as q,m as T,P as F}from"./index.2f59c431.js";import{S as Q,a as U,b as X,c as Z,D as _}from"./styled.8312eb2b.js";const ee=[{title:()=>t(l,{value:"Rabs.GoodsMovements.Search.Id"}),dataIndex:"id",key:"id",sortDirections:["ascend","descend","ascend"],sorter:(e,s)=>e.id-s.id},{title:()=>t(l,{value:"Rabs.GoodsMovements.Search.LicensePlate"}),dataIndex:"licensePlate",key:"licensePlate",sortDirections:["ascend","descend","ascend"],sorter:(e,s)=>{var a,o,n;return(n=(o=e.licensePlate)==null?void 0:o.localeCompare((a=s.licensePlate)!=null?a:""))!=null?n:-1}},{title:()=>t(l,{value:"Rabs.GoodsMovements.Search.EmbossedId"}),dataIndex:"embossedId",key:"embossedId",sortDirections:["ascend","descend","ascend"],sorter:(e,s)=>{var a,o,n;return(n=(o=e.embossedId)==null?void 0:o.localeCompare((a=s.embossedId)!=null?a:""))!=null?n:-1}},{title:()=>t(l,{value:"Rabs.GoodsMovements.Search.PartNumber"}),dataIndex:"partNumber",key:"partNumber",sortDirections:["ascend","descend","ascend"],sorter:(e,s)=>{var a,o,n;return(n=(o=e.partNumber)==null?void 0:o.localeCompare((a=s.partNumber)!=null?a:""))!=null?n:-1}},{title:()=>t(l,{value:"Rabs.Invoices.Search.ServiceProvider.AccountingType"}),dataIndex:["serviceProvider","accountingType"],key:"spAccountingType",sortDirections:["ascend","descend","ascend"],sorter:(e,s)=>{var a,o,n,c;return((o=(a=e.serviceProvider)==null?void 0:a.accountingType)!=null?o:0)>((c=(n=s.serviceProvider)==null?void 0:n.accountingType)!=null?c:0)?1:-1}},{title:()=>t(l,{value:"Rabs.Invoices.Search.ServiceProvider.AccoutingData1"}),dataIndex:["serviceProvider","accountingData1"],key:"spAccountingData1",sortDirections:["ascend","descend","ascend"],sorter:(e,s)=>{var a,o,n,c,i;return(i=(c=(a=e.serviceProvider)==null?void 0:a.accountingData1)==null?void 0:c.localeCompare((n=(o=s.serviceProvider)==null?void 0:o.accountingData1)!=null?n:""))!=null?i:-1}},{title:()=>t(l,{value:"Rabs.Invoices.Search.ServiceProvider.AccoutingData2"}),dataIndex:["serviceProvider","accountingData2"],key:"spAccountingData2",sortDirections:["ascend","descend","ascend"],sorter:(e,s)=>{var a,o,n,c,i;return(i=(c=(a=e.serviceProvider)==null?void 0:a.accountingData2)==null?void 0:c.localeCompare((n=(o=s.serviceProvider)==null?void 0:o.accountingData2)!=null?n:""))!=null?i:-1}},{title:()=>t(l,{value:"Rabs.Invoices.Search.ServiceConsumer.AccountingType"}),dataIndex:["serviceConsumer","accountingType"],key:"scAccountingType",sortDirections:["ascend","descend","ascend"],sorter:(e,s)=>{var a,o,n,c;return((o=(a=e.serviceConsumer)==null?void 0:a.accountingType)!=null?o:0)>((c=(n=s.serviceConsumer)==null?void 0:n.accountingType)!=null?c:0)?1:-1}},{title:()=>t(l,{value:"Rabs.Invoices.Search.ServiceConsumer.AccoutingData1"}),dataIndex:["serviceConsumer","accountingData1"],key:"scAccountingData1",sortDirections:["ascend","descend","ascend"],sorter:(e,s)=>{var a,o,n,c,i;return(i=(c=(a=e.serviceConsumer)==null?void 0:a.accountingData1)==null?void 0:c.localeCompare((n=(o=s.serviceConsumer)==null?void 0:o.accountingData1)!=null?n:""))!=null?i:-1}},{title:()=>t(l,{value:"Rabs.Invoices.Search.ServiceConsumer.AccoutingData2"}),dataIndex:["serviceConsumer","accountingData2"],key:"scAccountingData2",sortDirections:["ascend","descend","ascend"],sorter:(e,s)=>{var a,o,n,c,i;return(i=(c=(a=e.serviceConsumer)==null?void 0:a.accountingData2)==null?void 0:c.localeCompare((n=(o=s.serviceConsumer)==null?void 0:o.accountingData2)!=null?n:""))!=null?i:-1}},{title:()=>t(l,{value:"Rabs.Invoices.Search.ServiceConsumer.AccoutingData3"}),dataIndex:["serviceConsumer","accountingData3"],key:"scAccountingData3",sortDirections:["ascend","descend","ascend"],sorter:(e,s)=>{var a,o,n,c,i;return(i=(c=(a=e.serviceConsumer)==null?void 0:a.accountingData3)==null?void 0:c.localeCompare((n=(o=s.serviceConsumer)==null?void 0:o.accountingData3)!=null?n:""))!=null?i:-1}},{title:()=>t(l,{value:"Rabs.GoodsMovements.Search.IsFailed"}),dataIndex:"failed",key:"isFailed",sortDirections:["ascend","descend","ascend"],sorter:(e,s)=>(e.isFailed?1:0)-(s.isFailed?1:0)},{title:"",dataIndex:"action",key:"action"}];u(B)`
  background: ${({theme:e})=>e.colors.petrol70};
  height: 30px;
`;const C=u(j)`
  border-radius: 0;
  background: ${({theme:e})=>e.colors.petrol};
  border-color: ${({theme:e})=>e.colors.petrol80} !important;

  color: ${({theme:e})=>e.colors.white};

  &:active,
  &:focus {
    background: ${({theme:e})=>e.colors.petrol40K};
  }
`,g=u.label`
  margin-top: 4px;
`;u.div`
  width: 200px;
`;const te=u.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;
`,G=$`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
`;u.div`
  ${G}

  @media (max-width: 1250px) {
    display: block;
    min-width: 100px;
  }
`;const oe=u.span`
  ${G}

  margin-top: 10px;

  gap: 10px;
`,M=$`
  color: ${({theme:e})=>e.colors.white} !important;

  svg {
    fill: ${({theme:e})=>e.colors.white};
  }

  &:hover,
  &:focus {
    background: ${({theme:e})=>e.colors.petrol80};
  }
`,ae=u(w)`
  ${M}

  font-size: 1rem;
  background: transparent;
`,ne=u(w)`
  ${M}

  background: ${({theme:e})=>e.colors.petrol70};
`,h=u.div`
  margin-bottom: 5px;
  color: ${({theme:e})=>e.colors.white};

  font-size: 0.933rem;
`,se=({onSearch:e})=>{const[s,a]=p.exports.useState(),[o,n]=p.exports.useState(),[c,i]=p.exports.useState(),[v,b]=p.exports.useState(""),[S,D]=p.exports.useState(),[P,A]=p.exports.useState(""),[f,R]=p.exports.useState(),[y,k]=p.exports.useState(""),N=()=>{e({isFailed:y,vehicleIdentity:s,licensePlate:o,serviceProviderAccountingType:v,serviceConsumerAccountingType:P,serviceProviderAccountingData:S,serviceConsumerAccountingData:f,partNumber:c})},O=()=>{a(void 0),i(void 0),R(void 0),A(""),D(void 0),b(""),k(""),n(void 0),e({})},d=E(),x=Object.keys(V).map(r=>({label:d(`Rabs.Invoices.Filter.AccountingTypes.${r}`),value:r}));x.unshift({label:d("Rabs.Common.All"),value:""});const L=[{label:d("Rabs.Common.All"),value:""},{label:d("Rabs.Common.Yes"),value:"true"},{label:d("Rabs.Common.No"),value:"false"}];return m(te,{children:[m(g,{children:[t(h,{children:d("Rabs.GoodsMovements.Filter.FinOrVin")}),t(C,{value:s,onChange:r=>a(r.target.value)})]}),m(g,{children:[t(h,{children:d("Rabs.GoodsMovements.Filter.LicensePlate")}),t(C,{value:o,onChange:r=>n(r.target.value)})]}),m(g,{children:[t(h,{children:d("Rabs.GoodsMovements.Filter.PartNumber")}),t(C,{value:c,onChange:r=>i(r.target.value)})]}),m(g,{children:[t(h,{children:d("Rabs.Invoices.Filter.ProviderAccountingType")}),t(I,{options:x,value:v,onSelect:r=>b(r),placeholder:""})]}),m(g,{children:[t(h,{children:d("Rabs.Invoices.Filter.ProviderAccountingData")}),t(C,{value:S,onChange:r=>D(r.target.value)})]}),m(g,{children:[t(h,{children:d("Rabs.Invoices.Filter.CustomerAccountingType")}),t(I,{options:x,value:P,onSelect:r=>A(r),placeholder:""})]}),m(g,{children:[t(h,{children:d("Rabs.Invoices.Filter.CustomerAccountingData")}),t(C,{value:f,onChange:r=>R(r.target.value)})]}),m(g,{children:[t(h,{children:d("Rabs.GoodsMovements.Filter.IsFailed")}),t(I,{options:L,value:y==null?"":y.toString(),onSelect:r=>k(r),placeholder:""})]}),m(oe,{children:[t(ae,{icon:t(Q,{}),onClick:O,children:t(l,{value:"Rabs.Common.Buttons.Clear"})}),t(ne,{icon:t(U,{}),onClick:N,children:t(l,{value:"Rabs.Common.Buttons.Search"})})]})]})},ce=({onSearch:e})=>t(se,{onSearch:e}),re=u(H)`
  background-color: ${({theme:e})=>e.colors.white} !important;
`,ie=u(W)`
  background-color: ${({theme:e})=>e.colors.petrol} !important;

  height: fit-content !important;
`,le=u(z)`
  overflow: auto !important;
`,de=()=>{const e=J(),[s,a]=p.exports.useState([]),[o,n]=p.exports.useState({});p.exports.useEffect(()=>{K.goodsMovementsSearch(o).then(v=>{var b;return a((b=v.items)!=null?b:[])})},[o]);const c=s.map(v=>{var S;const b=(S=JSON.stringify(o))==null?void 0:S.replaceAll("*","**");return{...v,key:v.id,action:t(Y,{icon:t(X,{fill:q.colors.petrol}),onClick:()=>{const D=o?T(F.GOODSMOVEMENTWITHFILTER,{id:`${v.id}`,filter:`${b}`}):T(F.GOODSMOVEMENT,{id:`${v.id}`});e(D)}}),failed:v.isFailed&&t(Z,{})}});return m(re,{children:[t(ie,{children:t(ce,{onSearch:v=>{n(v)}})}),t(le,{children:t(_,{columns:ee,dataSource:c!=null?c:[],pagination:!1})})]})},ue=()=>t(de,{}),me=p.exports.memo(ue);export{me as default};
//# sourceMappingURL=index.b42b46ad.js.map
