import{s as t,C as O,aS as S,r as f,k as T,a,j as c,u as $,F as w,aT as h,aU as n,f as G,P as A,aV as k}from"./index.33c306ae.js";import{f as R,u as Y}from"./index.d4c938b8.js";const N=t.div``,I=t.div`
  cursor: pointer;

  ${({active:r,theme:i})=>r?O`
          background-color: ${i.colors.petrol40K};
          color: ${i.colors.white};

          label {
            font-size: 0.9rem;
            font-weight: 600;
          }
        `:O`
          color: ${i.colors.coolGrey60K};

          label {
            font-size: 0.9rem;
            font-weight: 400;
          }
        `}

  &:hover {
    background-color: ${({theme:r,active:i})=>i?"":r.colors.catskill};
  }

  padding: 5px;
  display: flex;
  flex-flow: column;

  border-bottom: solid 1px ${({theme:r})=>r.colors.coolGrey};

  &:first-child {
    margin-top: 1px;
  }
`,K=t.div`
  width: 11px;
  height: 11px;

  border-radius: 50%;

  background: ${({theme:r,success:i})=>i?r.colors.green:r.colors.signalRed40K};
`,H=t.div`
  display: flex;
  align-items: center;

  gap: 5px;

  margin-bottom: 4px;
`,U=t.div`
  margin-bottom: 4px;
`,E=({currentId:r,onClick:i})=>{const{filter:d}=S(),[s,y]=f.exports.useState([]);return f.exports.useEffect(()=>{const u=JSON.parse(d!=null?d:"{}");T.goodsMovementsSearch(u).then(p=>p.items).then(p=>y(p!=null?p:[]))},[]),a(N,{children:s.map((u,p)=>c(I,{active:u.id===r,onClick:()=>i(u.id),children:[c(H,{children:[a(K,{success:!u.isFailed})," ",u.id," - ",u.partNumber]}),c(U,{children:[u.embossedId," (",u.licensePlate,")"]})]},p))})},W=t.div`
  padding: 1rem;

  .ant-collapse-content-box {
    padding: 0 !important;
    width: 100%;

    margin-top: 10px;

    overflow: auto;
  }
`,j=t.div`
  padding: 1rem;
  background: ${({theme:r})=>r.colors.alabaster};
`,z=t.div`
  display: flex;

  gap: 25px;
  justify-content: end;
  width: 30%;
`,B=t.div`
  display: flex;
  width: 70%;
  gap: 5px;

  font-size: 1.333rem;
  font-weight: 600;
  color: ${({theme:r})=>r.colors.petrol70};
`,F=t.div`
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
`,L=t.div`
  width: 11px;
  height: 11px;

  border-radius: 50%;

  background: ${({theme:r,success:i})=>i?r.colors.green:r.colors.signalRed40K};
`;t.div`
  display: flex;
  align-items: center;

  gap: 5px;

  margin-bottom: 30px;
`;const b=t.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 3rem;
  }
`,e=t.div`
  width: 32%;
`,l=t.div`
  margin-bottom: 5px;
  color: #707070;
  font-size: 0.9rem;
`,V=({goodsMovement:r})=>{var d,s,y,u,p,D,x,C,P;const i=$();return c(w,{children:[a(j,{children:c(F,{children:[c(B,{children:[a(L,{success:!(r!=null&&r.errorText)&&!(r!=null&&r.errorType)}),r==null?void 0:r.id]}),c(z,{children:[c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.CreatedAt")}),(r==null?void 0:r.createdDateUtc)&&R(r==null?void 0:r.createdDateUtc).format("DD.MM.YYYY HH:mm")]}),c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.ModifiedAt")}),(r==null?void 0:r.modifiedDateUtc)&&R(r==null?void 0:r.modifiedDateUtc).format("DD.MM.YYYY HH:mm")]})]})]})}),c(W,{children:[a(h,{defaultActiveKey:"1",children:c(h.Panel,{header:i("Rabs.GoodsMovement.Details"),children:[c(b,{children:[c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.PriceNetto")}),a(n,{readOnly:!0,value:`\u20AC${(d=r==null?void 0:r.price)==null?void 0:d.netto}`})]}),c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.PriceBrutto")}),a(n,{readOnly:!0,value:`\u20AC${(s=r==null?void 0:r.price)==null?void 0:s.brutto}`})]}),c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.Quantity")}),a(n,{readOnly:!0,value:r==null?void 0:r.quantity})]})]}),a(b,{children:c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.ApplyDate")}),a(n,{readOnly:!0,value:r!=null&&r.applyDateUtc?R(r==null?void 0:r.applyDateUtc).format("DD.MM.YYYY HH:mm"):""})]})})]},"1")}),a(h,{defaultActiveKey:"2",children:a(h.Panel,{header:i("Rabs.GoodsMovement.ProviderDetails"),children:c(b,{children:[c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.ServiceProvider.AccountingType")}),a(n,{readOnly:!0,value:i(`Rabs.GoodsMovement.AccountingType${(y=r==null?void 0:r.serviceProvider)==null?void 0:y.accountingType}`)})]}),c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.ServiceProvider.AccountingData1")}),a(n,{readOnly:!0,value:(u=r==null?void 0:r.serviceProvider)==null?void 0:u.accountingData1})]}),c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.ServiceProvider.AccountingData2")}),a(n,{readOnly:!0,value:(p=r==null?void 0:r.serviceProvider)==null?void 0:p.accountingData2})]})]})},"2")}),a(h,{defaultActiveKey:"3",children:c(h.Panel,{header:i("Rabs.GoodsMovement.ConsumerDetails"),children:[c(b,{children:[c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.ServiceConsumer.AccountingType")}),a(n,{readOnly:!0,value:i(`Rabs.GoodsMovement.AccountingType.${(D=r==null?void 0:r.serviceConsumer)==null?void 0:D.accountingType}`)})]}),c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.ServiceConsumer.AccountingData1")}),a(n,{readOnly:!0,value:(x=r==null?void 0:r.serviceConsumer)==null?void 0:x.accountingData1})]}),c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.ServiceConsumer.AccountingData2")}),a(n,{readOnly:!0,value:(C=r==null?void 0:r.serviceConsumer)==null?void 0:C.accountingData2})]})]}),a(b,{children:c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.ServiceConsumer.AccountingData3")}),a(n,{readOnly:!0,value:(P=r==null?void 0:r.serviceConsumer)==null?void 0:P.accountingData3})]})})]},"3")}),a(h,{defaultActiveKey:"4",children:a(h.Panel,{header:i("Rabs.GoodsMovement.VehicleDetails"),children:c(b,{children:[c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.FIN")}),a(n,{readOnly:!0,value:r==null?void 0:r.fin})]}),c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.VIN")}),a(n,{readOnly:!0,value:r==null?void 0:r.vin})]}),c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.LicensePlate")}),a(n,{readOnly:!0,value:r==null?void 0:r.licensePlate})]})]})},"4")}),a(h,{defaultActiveKey:"5",children:a(h.Panel,{header:i("Rabs.GoodsMovement.OtherDetails"),children:c(b,{children:[c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.ErrorType")}),a(n,{readOnly:!0,value:r==null?void 0:r.errorType})]}),c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.ErrorText")}),a(n,{readOnly:!0,value:r==null?void 0:r.errorText})]}),c(e,{children:[a(l,{children:i("Rabs.GoodsMovement.PartNumber")}),a(n,{readOnly:!0,value:r==null?void 0:r.partNumber})]})]})},"5")})]})]})},q=t(G.Content)`
  overflow-y: scroll;
`,J=t(G.Header)`
  background: ${({theme:r})=>r.colors.petrol} !important;
  display: flex !important;
  align-items: center !important;
  padding: 10px !important;
  height: 60px !important;
`,Q=t(G.Sider).attrs({width:"320px"})`
  background-color: ${({theme:r})=>r.colors.white} !important;
  box-shadow: 3px 2px 3px ${({theme:r})=>r.colors.coolGrey};

  overflow-y: auto !important;
`,X=()=>{const r=Y(A.GOODSMOVEMENTS),{id:i}=S(),d=$(),[s,y]=f.exports.useState(Number.parseInt(i!=null?i:"-1")),[u,p]=f.exports.useState();f.exports.useEffect(()=>{T.goodsMovements(s).then(x=>p(x))},[s]);const D=x=>{y(x)};return c(G,{children:[a(J,{children:a(k,{onClick:r,children:d("Rabs.Common.Back")})}),c(G,{children:[a(Q,{children:a(E,{currentId:s,onClick:D})}),a(q,{children:a(V,{goodsMovement:u})})]})]})},Z=()=>a(X,{}),v=f.exports.memo(Z);export{v as default};
//# sourceMappingURL=index.490edaba.js.map
