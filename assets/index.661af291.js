import{s as n,C as O,u as D,aS as T,r as I,k as P,a as e,j as a,F as $,aT as c,aU as s,f,P as Y,aV as S}from"./index.2f59c431.js";import{f as x,u as w}from"./index.835cf47c.js";const A=n.div``,k=n.div`
  cursor: pointer;

  ${({active:r,theme:t})=>r?O`
          background-color: ${t.colors.petrol40K};
          color: ${t.colors.white};

          label {
            font-size: 0.9rem;
            font-weight: 600;
          }
        `:O`
          color: ${t.colors.coolGrey60K};

          label {
            font-size: 0.9rem;
            font-weight: 400;
          }
        `}

  &:hover {
    background-color: ${({theme:r,active:t})=>t?"":r.colors.catskill};
  }

  padding: 5px;
  display: flex;
  flex-flow: column;

  border-bottom: solid 1px ${({theme:r})=>r.colors.coolGrey};

  &:first-child {
    margin-top: 1px;
  }
`,N=n.div`
  width: 11px;
  height: 11px;

  border-radius: 50%;

  background: ${({theme:r,success:t})=>t?r.colors.green:r.colors.signalRed40K};
`,H=n.div`
  display: flex;
  align-items: center;

  gap: 5px;

  margin-bottom: 4px;
`,M=n.div`
  margin-bottom: 4px;
`,K=({currentId:r,onClick:t})=>{const p=D(),{filter:m}=T(),[g,b]=I.exports.useState([]);return I.exports.useEffect(()=>{const o=JSON.parse(m!=null?m:"{}");P.invoicesSearch(o).then(y=>{var h;return b((h=y.items)!=null?h:[])})},[]),e(A,{children:g.map((o,y)=>a(k,{active:o.id===r,onClick:()=>t(o.id),children:[a(H,{children:[e(N,{success:!o.isFailed}),`${o.id} - ${p(`Rabs.Invoices.Filter.InvoiceTypes.${o.invoiceType}`)}`]}),a(M,{children:[o.embossedId," (",o.licensePlate,")"]})]},y))})};n.div``;const F=n.div`
  padding: 1rem;

  .ant-collapse-content-box {
    padding: 0 !important;
    width: 100%;

    margin-top: 10px;

    overflow: auto;
  }
`,U=n.div`
  padding: 1rem;
  background: ${({theme:r})=>r.colors.alabaster};
`,E=n.div`
  display: flex;

  gap: 25px;
  justify-content: end;
  width: 30%;
`,W=n.div`
  display: flex;
  width: 70%;
  gap: 5px;

  font-size: 1.333rem;
  font-weight: 600;
  color: ${({theme:r})=>r.colors.petrol70};
`,j=n.div`
  margin: 0 10px;
  padding: 10px 5px;

  display: flex;

  gap: 5px;

  font-size: 1.333rem;
  font-weight: 600;
  color: ${({theme:r})=>r.colors.petrol70};

  &:hover {
    background-color: ${({theme:r})=>r.colors.coolGrey};
  }
`,z=n.div`
  width: 11px;
  height: 11px;

  border-radius: 50%;

  background: ${({theme:r,success:t})=>t?r.colors.green:r.colors.signalRed40K};
`;n.div`
  display: flex;
  align-items: center;

  gap: 5px;

  margin-bottom: 30px;
`;const u=n.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 3rem;
  }
`,l=n.div`
  width: 32%;
`,d=n.div`
  margin-bottom: 5px;
  color: #707070;
  font-size: 0.9rem;
`,B=({invoice:r})=>{var p,m,g,b,o,y,h,R,C;const t=D();return a($,{children:[e(U,{children:a(j,{children:[a(W,{children:[e(z,{success:!(r!=null&&r.errorText)&&!(r!=null&&r.errorType)}),r==null?void 0:r.id]}),a(E,{children:[a(l,{children:[e(d,{children:t("Rabs.Invoice.CreatedAt")}),(r==null?void 0:r.createdDateUtc)&&x(r==null?void 0:r.createdDateUtc).format("DD.MM.YYYY HH:mm")]}),a(l,{children:[e(d,{children:t("Rabs.Invoice.ModifiedAt")}),(r==null?void 0:r.modifiedDateUtc)&&x(r==null?void 0:r.modifiedDateUtc).format("DD.MM.YYYY HH:mm")]})]})]})}),a(F,{children:[e(c,{defaultActiveKey:"1",children:a(c.Panel,{header:t("Rabs.Invoice.Details"),children:[a(u,{children:[a(l,{children:[e(d,{children:t("Rabs.Invoice.InvoiceType")}),e(s,{readOnly:!0,value:t(`Rabs.Invoice.InvoiceTypes.${r==null?void 0:r.invoiceType}`)})]}),a(l,{children:[e(d,{children:t("Rabs.Invoice.PriceNetto")}),e(s,{readOnly:!0,value:`\u20AC${(p=r==null?void 0:r.price)==null?void 0:p.netto}`})]}),a(l,{children:[e(d,{children:t("Rabs.Invoice.PriceBrutto")}),e(s,{readOnly:!0,value:`\u20AC${(m=r==null?void 0:r.price)==null?void 0:m.brutto}`})]})]}),a(u,{children:[a(l,{children:[e(d,{children:t("Rabs.Invoice.IsCredited")}),e(s,{readOnly:!0,value:r!=null&&r.isCredited?t("Rabs.Common.Yes"):t("Rabs.Common.No")})]}),a(l,{children:[e(d,{children:t("Rabs.Invoice.IsCredit")}),e(s,{readOnly:!0,value:r!=null&&r.isCredit?t("Rabs.Common.Yes"):t("Rabs.Common.No")})]}),a(l,{children:[e(d,{children:t("Rabs.Invoice.IsInTransfer")}),e(s,{readOnly:!0,value:r!=null&&r.isInTransfer?t("Rabs.Common.Yes"):t("Rabs.Common.No")})]})]}),a(u,{children:[a(l,{children:[e(d,{children:t("Rabs.Invoice.ApplyDate")}),e(s,{readOnly:!0,value:(r==null?void 0:r.applyDateUtc)&&x(r==null?void 0:r.applyDateUtc).format("DD.MM.YYYY HH:mm")})]}),a(l,{children:[e(d,{children:t("Rabs.Invoice.Quantity")}),e(s,{readOnly:!0,value:r==null?void 0:r.quantity})]}),e(l,{})]})]},"1")}),e(c,{defaultActiveKey:"2",children:e(c.Panel,{header:t("Rabs.Invoice.ProviderDetails"),children:a(u,{children:[a(l,{children:[e(d,{children:t("Rabs.Invoice.ServiceProvider.AccountingType")}),e(s,{readOnly:!0,value:t(`Rabs.Invoice.AccountingType${(g=r==null?void 0:r.serviceProvider)==null?void 0:g.accountingType}`)})]}),a(l,{children:[e(d,{children:t("Rabs.Invoice.ServiceProvider.AccountingData1")}),e(s,{readOnly:!0,value:(b=r==null?void 0:r.serviceProvider)==null?void 0:b.accountingData1})]}),a(l,{children:[e(d,{children:t("Rabs.Invoice.ServiceProvider.AccountingData2")}),e(s,{readOnly:!0,value:(o=r==null?void 0:r.serviceProvider)==null?void 0:o.accountingData2})]})]})},"2")}),e(c,{defaultActiveKey:"3",children:a(c.Panel,{header:t("Rabs.Invoice.ConsumerDetails"),children:[a(u,{children:[a(l,{children:[e(d,{children:t("Rabs.Invoice.ServiceConsumer.AccountingType")}),e(s,{readOnly:!0,value:t(`Rabs.Invoice.AccountingType.${(y=r==null?void 0:r.serviceConsumer)==null?void 0:y.accountingType}`)})]}),a(l,{children:[e(d,{children:t("Rabs.Invoice.ServiceConsumer.AccountingData1")}),e(s,{readOnly:!0,value:(h=r==null?void 0:r.serviceConsumer)==null?void 0:h.accountingData1})]}),a(l,{children:[e(d,{children:t("Rabs.Invoice.ServiceConsumer.AccountingData2")}),e(s,{readOnly:!0,value:(R=r==null?void 0:r.serviceConsumer)==null?void 0:R.accountingData2})]})]}),e(u,{children:a(l,{children:[e(d,{children:t("Rabs.Invoice.ServiceConsumer.AccountingData3")}),e(s,{readOnly:!0,value:(C=r==null?void 0:r.serviceConsumer)==null?void 0:C.accountingData3})]})})]},"3")}),e(c,{defaultActiveKey:"4",children:e(c.Panel,{header:t("Rabs.Invoice.VehicleDetails"),children:a(u,{children:[a(l,{children:[e(d,{children:t("Rabs.Invoice.FIN")}),e(s,{readOnly:!0,value:r==null?void 0:r.fin})]}),a(l,{children:[e(d,{children:t("Rabs.Invoice.VIN")}),e(s,{readOnly:!0,value:r==null?void 0:r.vin})]}),a(l,{children:[e(d,{children:t("Rabs.Invoice.LicensePlate")}),e(s,{readOnly:!0,value:r==null?void 0:r.licensePlate})]})]})},"4")}),e(c,{defaultActiveKey:"5",children:a(c.Panel,{header:t("Rabs.Invoice.OtherDetails"),children:[a(u,{children:[a(l,{children:[e(d,{children:t("Rabs.Invoice.ForeignDocumentNumber")}),e(s,{readOnly:!0,value:r==null?void 0:r.foreignDocumentNumber})]}),a(l,{children:[e(d,{children:t("Rabs.Invoice.ForeignDocumentDate")}),e(s,{readOnly:!0,value:(r==null?void 0:r.foreignDocumentDate)&&x(r==null?void 0:r.foreignDocumentDate).format("DD.MM.YYYY HH:mm")})]}),a(l,{children:[e(d,{children:t("Rabs.Invoice.DeliveryDate")}),e(s,{readOnly:!0,value:(r==null?void 0:r.deliveryDate)&&x(r==null?void 0:r.deliveryDate).format("DD.MM.YYYY HH:mm")})]})]}),a(u,{children:[a(l,{children:[e(d,{children:t("Rabs.Invoice.ExternalDeliveryNumber")}),e(s,{readOnly:!0,value:r==null?void 0:r.externalDeliveryNumber})]}),a(l,{children:[e(d,{children:t("Rabs.Invoice.Description")}),e(s,{readOnly:!0,value:r==null?void 0:r.description})]}),a(l,{children:[e(d,{children:t("Rabs.Invoice.ErrorType")}),e(s,{readOnly:!0,value:r==null?void 0:r.errorType})]})]}),e(u,{children:a(l,{children:[e(d,{children:t("Rabs.Invoice.ErrorText")}),e(s,{readOnly:!0,value:r==null?void 0:r.errorText})]})})]},"5")})]})]})},G=n(f.Content)`
  overflow-y: scroll;
`,L=n(f.Header)`
  background: ${({theme:r})=>r.colors.petrol} !important;
  display: flex !important;
  align-items: center !important;
  padding: 10px !important;
  height: 60px !important;
`,V=n(f.Sider).attrs({width:"320px"})`
  background-color: ${({theme:r})=>r.colors.white} !important;
  box-shadow: 3px 2px 3px ${({theme:r})=>r.colors.coolGrey};

  overflow-y: auto !important;
`,q=()=>{const r=w(Y.INVOICES),t=D(),{id:p}=T(),[m,g]=I.exports.useState(),[b,o]=I.exports.useState(Number.parseInt(p!=null?p:"-1"));I.exports.useEffect(()=>{P.invoices(b).then(h=>g(h))},[b]);const y=h=>{o(h)};return a(f,{children:[e(L,{children:e(S,{onClick:r,children:t("Rabs.Common.Back")})}),a(f,{children:[e(V,{children:e(K,{currentId:b,onClick:y})}),e(G,{children:e(B,{invoice:m})})]})]})},J=()=>e(q,{}),Z=I.exports.memo(J);export{Z as default};
//# sourceMappingURL=index.661af291.js.map
