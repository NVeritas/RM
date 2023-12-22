import{a as t,e as d,s as v,D as W,I as z,C as E,B as L,r as u,u as G,A as J,E as K,j as g,S as C,f as M,g as Y,h as q,i as Q,k as U,l as X,t as Z,m as w,P as N}from"./index.33c306ae.js";import{S as _,a as ee,b as te,c as ne,D as ae}from"./styled.71b90564.js";const oe=[{title:()=>t(d,{value:"Rabs.Invoices.Search.Id"}),dataIndex:"id",key:"id",sortDirections:["ascend","descend","ascend"],sorter:(e,c)=>e.id-c.id},{title:()=>t(d,{value:"Rabs.Invoices.Search.LicensePlate"}),dataIndex:"licensePlate",key:"licensePlate",sortDirections:["ascend","descend","ascend"],sorter:(e,c)=>{var a,n,o;return(o=(n=e.licensePlate)==null?void 0:n.localeCompare((a=c.licensePlate)!=null?a:""))!=null?o:-1}},{title:()=>t(d,{value:"Rabs.Invoices.Search.EmbossedId"}),dataIndex:"embossedId",key:"embossedId",sortDirections:["ascend","descend","ascend"],sorter:(e,c)=>{var a,n,o;return(o=(n=e.embossedId)==null?void 0:n.localeCompare((a=c.embossedId)!=null?a:""))!=null?o:-1}},{title:()=>t(d,{value:"Rabs.Invoices.Search.InvoiceType"}),dataIndex:"invoiceType",key:"invoiceType",sortDirections:["ascend","descend","ascend"],sorter:(e,c)=>{var a,n;return((a=e.invoiceType)!=null?a:0)>((n=c.invoiceType)!=null?n:0)?1:-1}},{title:()=>t(d,{value:"Rabs.Invoices.Search.ServiceProvider.AccountingType"}),dataIndex:["serviceProvider","accountingType"],key:"spAccountingType",sortDirections:["ascend","descend","ascend"],sorter:(e,c)=>{var a,n,o,s;return((n=(a=e.serviceProvider)==null?void 0:a.accountingType)!=null?n:0)>((s=(o=c.serviceProvider)==null?void 0:o.accountingType)!=null?s:0)?1:-1}},{title:()=>t(d,{value:"Rabs.Invoices.Search.ServiceProvider.AccoutingData1"}),dataIndex:["serviceProvider","accountingData1"],key:"spAccountingData1",sortDirections:["ascend","descend","ascend"],sorter:(e,c)=>{var a,n,o,s,r;return(r=(s=(a=e.serviceProvider)==null?void 0:a.accountingData1)==null?void 0:s.localeCompare((o=(n=c.serviceProvider)==null?void 0:n.accountingData1)!=null?o:""))!=null?r:-1}},{title:()=>t(d,{value:"Rabs.Invoices.Search.ServiceProvider.AccoutingData2"}),dataIndex:["serviceProvider","accountingData2"],key:"spAccountingData2",sortDirections:["ascend","descend","ascend"],sorter:(e,c)=>{var a,n,o,s,r;return(r=(s=(a=e.serviceProvider)==null?void 0:a.accountingData2)==null?void 0:s.localeCompare((o=(n=c.serviceProvider)==null?void 0:n.accountingData2)!=null?o:""))!=null?r:-1}},{title:()=>t(d,{value:"Rabs.Invoices.Search.ServiceConsumer.AccountingType"}),dataIndex:["serviceConsumer","accountingType"],key:"scAccountingType",sortDirections:["ascend","descend","ascend"],sorter:(e,c)=>{var a,n,o,s;return((n=(a=e.serviceConsumer)==null?void 0:a.accountingType)!=null?n:0)>((s=(o=c.serviceConsumer)==null?void 0:o.accountingType)!=null?s:0)?1:-1}},{title:()=>t(d,{value:"Rabs.Invoices.Search.ServiceConsumer.AccoutingData1"}),dataIndex:["serviceConsumer","accountingData1"],key:"scAccountingData1",sortDirections:["ascend","descend","ascend"],sorter:(e,c)=>{var a,n,o,s,r;return(r=(s=(a=e.serviceConsumer)==null?void 0:a.accountingData1)==null?void 0:s.localeCompare((o=(n=c.serviceConsumer)==null?void 0:n.accountingData1)!=null?o:""))!=null?r:-1}},{title:()=>t(d,{value:"Rabs.Invoices.Search.ServiceConsumer.AccoutingData2"}),dataIndex:["serviceConsumer","accountingData2"],key:"scAccountingData2",sortDirections:["ascend","descend","ascend"],sorter:(e,c)=>{var a,n,o,s,r;return(r=(s=(a=e.serviceConsumer)==null?void 0:a.accountingData2)==null?void 0:s.localeCompare((o=(n=c.serviceConsumer)==null?void 0:n.accountingData2)!=null?o:""))!=null?r:-1}},{title:()=>t(d,{value:"Rabs.Invoices.Search.ServiceConsumer.AccoutingData3"}),dataIndex:["serviceConsumer","accountingData3"],key:"scAccountingData3",sortDirections:["ascend","descend","ascend"],sorter:(e,c)=>{var a,n,o,s,r;return(r=(s=(a=e.serviceConsumer)==null?void 0:a.accountingData3)==null?void 0:s.localeCompare((o=(n=c.serviceConsumer)==null?void 0:n.accountingData3)!=null?o:""))!=null?r:-1}},{title:()=>t(d,{value:"Rabs.Invoices.Search.ExternalDeliveryNumber"}),dataIndex:"externalDeliveryNumber",key:"externalDeliveryNumber",sortDirections:["ascend","descend","ascend"],sorter:(e,c)=>{var a,n,o;return(o=(n=e.externalDeliveryNumber)==null?void 0:n.localeCompare((a=c.externalDeliveryNumber)!=null?a:""))!=null?o:-1}},{title:()=>t(d,{value:"Rabs.Invoices.Search.IsFailed"}),dataIndex:"failed",key:"isFailed",sortDirections:["ascend","descend","ascend"],sorter:(e,c)=>(e.isFailed?1:0)-(c.isFailed?1:0)},{title:"",dataIndex:"action",key:"action"}];v(W)`
  background: ${({theme:e})=>e.colors.petrol70};
  height: 30px;
`;const I=v(z)`
  border-radius: 0;
  background: ${({theme:e})=>e.colors.petrol};
  border-color: ${({theme:e})=>e.colors.petrol80} !important;

  color: ${({theme:e})=>e.colors.white};

  &:active,
  &:focus {
    background: ${({theme:e})=>e.colors.petrol40K};
  }
`,m=v.label`
  margin-top: 4px;
`;v.div`
  width: 200px;
`;const ce=v.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;
`,O=E`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
`;v.div`
  ${O}

  @media (max-width: 1250px) {
    display: block;
    min-width: 100px;
  }
`;const se=v.span`
  ${O}

  margin-top: 10px;

  gap: 10px;
`,j=E`
  color: ${({theme:e})=>e.colors.white} !important;

  svg {
    fill: ${({theme:e})=>e.colors.white};
  }

  &:hover,
  &:focus {
    background: ${({theme:e})=>e.colors.petrol80};
  }
`,ie=v(L)`
  ${j}

  font-size: 1rem;
  background: transparent;
`,re=v(L)`
  ${j}

  background: ${({theme:e})=>e.colors.petrol70};
`,h=v.div`
  margin-bottom: 5px;
  color: ${({theme:e})=>e.colors.white};

  font-size: 0.933rem;
`,le=({onSearch:e})=>{const[c,a]=u.exports.useState(),[n,o]=u.exports.useState(),[s,r]=u.exports.useState(""),[p,b]=u.exports.useState(""),[y,D]=u.exports.useState(),[A,T]=u.exports.useState(""),[f,P]=u.exports.useState(),[x,R]=u.exports.useState(""),[k,F]=u.exports.useState(),B=()=>{e({isFailed:x,vehicleIdentity:c,licensePlate:n,serviceProviderAccountingType:p,serviceConsumerAccountingType:A,serviceProviderAccountingData:y,serviceConsumerAccountingData:f,externalDeliveryNumber:k,invoiceType:s})},V=()=>{a(void 0),P(void 0),T(""),D(void 0),b(""),F(void 0),R(""),o(void 0),r(""),e({})},l=G(),S=Object.keys(J).map(i=>({label:l(`Rabs.Invoices.Filter.AccountingTypes.${i}`),value:i}));S.unshift({label:l("Rabs.Common.All"),value:""});const $=Object.keys(K).map(i=>({label:l(`Rabs.Invoices.Filter.InvoiceTypes.${i}`),value:i}));$.unshift({label:l("Rabs.Common.All"),value:""});const H=[{label:l("Rabs.Common.All"),value:""},{label:l("Rabs.Common.Yes"),value:"true"},{label:l("Rabs.Common.No"),value:"false"}];return g(ce,{children:[g(m,{children:[t(h,{children:l("Rabs.Invoices.Filter.FinOrVin")}),t(I,{value:c,onChange:i=>a(i.target.value)})]}),g(m,{children:[t(h,{children:l("Rabs.Invoices.Filter.LicensePlate")}),t(I,{value:n,onChange:i=>o(i.target.value)})]}),g(m,{children:[t(h,{children:l("Rabs.Invoices.Filter.InvoiceType")}),t(C,{options:$,value:s,onSelect:i=>r(i),placeholder:""})]}),g(m,{children:[t(h,{children:l("Rabs.Invoices.Filter.ProviderAccountingType")}),t(C,{options:S,value:p,onSelect:i=>b(i),placeholder:""})]}),g(m,{children:[t(h,{children:l("Rabs.Invoices.Filter.ProviderAccountingData")}),t(I,{value:y,onChange:i=>D(i.target.value)})]}),g(m,{children:[t(h,{children:l("Rabs.Invoices.Filter.CustomerAccountingType")}),t(C,{options:S,value:A,onSelect:i=>T(i),placeholder:""})]}),g(m,{children:[t(h,{children:l("Rabs.Invoices.Filter.CustomerAccountingData")}),t(I,{value:f,onChange:i=>P(i.target.value)})]}),g(m,{children:[t(h,{children:l("Rabs.Invoices.Filter.IsFailed")}),t(C,{options:H,value:x==null?"":x.toString(),onSelect:i=>R(i),placeholder:""})]}),g(m,{children:[t(h,{children:l("Rabs.Invoices.Filter.ExternalDeliveryNumber")}),t(I,{value:k,onChange:i=>F(i.target.value)})]}),g(se,{children:[t(ie,{icon:t(_,{}),onClick:V,children:t(d,{value:"Rabs.Common.Buttons.Clear"})}),t(re,{icon:t(ee,{}),onClick:B,children:t(d,{value:"Rabs.Common.Buttons.Search"})})]})]})},de=({onSearch:e})=>t(le,{onSearch:e}),ue=v(M)`
  background-color: ${({theme:e})=>e.colors.white} !important;
`,ve=v(Y)`
  background-color: ${({theme:e})=>e.colors.petrol} !important;

  height: fit-content !important;
`,pe=v(q)`
  overflow: auto !important;
`,ge=()=>{const e=Q(),[c,a]=u.exports.useState([]),[n,o]=u.exports.useState({});u.exports.useEffect(()=>{U.invoicesSearch(n).then(p=>{var b;return a((b=p.items)!=null?b:[])})},[n]);const s=c.map(p=>{var y;const b=(y=JSON.stringify(n))==null?void 0:y.replaceAll("*","**");return{...p,key:p.id,action:t(X,{icon:t(te,{fill:Z.colors.petrol}),onClick:()=>{const D=n?w(N.INVOICEWITHFILTER,{id:`${p.id}`,filter:`${b}`}):w(N.INVOICE,{id:`${p.id}`});e(D)}}),failed:p.isFailed&&t(ne,{})}});return g(ue,{children:[t(ve,{children:t(de,{onSearch:p=>{o(p)}})}),t(pe,{children:t(ae,{columns:oe,dataSource:s!=null?s:[],pagination:!1})})]})},me=()=>t(ge,{}),ye=u.exports.memo(me);export{ye as default};
//# sourceMappingURL=index.fb28af90.js.map
