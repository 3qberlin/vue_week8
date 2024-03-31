import{_ as q,m as w,a as C,r,i as N,o as b,c as v,d as o,b as t,F as A,j as I,t as c,w as x,n as u,k as M,e as i}from"./index-S08Wae_T.js";import{S,c as y}from"./cartPinia-P2TuFnae.js";import{a as p}from"./axios-G2rPRu76.js";import{T as $,t as V}from"./TravelConditions-s02TmOFd.js";var D={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_API_NAME:"berlin",BASE_URL:"/vue_week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:h,VITE_API_NAME:f}=D,U={computed:{...w(y,["final_total","total"]),...w(V,["selectedPeople","startTime","endTime"])},methods:{...C(y,["getCarts","pinia_carts","carts"]),...C(V,["setPeople","getStart","getEnd"]),addProduct(s){const e={product_id:s.product_id,qty:s.qty+1},d=`${h}/api/${f}/cart/${s.id}`;p.put(d,{data:e}).then(()=>{this.carts.qty=e.qty,this.getCarts()})},reduceProduct(s){const e={product_id:s.product_id,qty:s.qty-1},d=`${h}/api/${f}/cart/${s.id}`;p.put(d,{data:e}).then(()=>{this.carts.qty=e.qty,this.getCarts()})},couponTicket(){const s={code:this.couponContent},e=`${h}/api/${f}/coupon`;p.post(e,{data:s}).then(d=>{this.final_total=d.data.data.final_total,this.getCarts()})},buildOrder(){const s=`${h}/api/${f}/order`,e=this.form;p.post(s,{data:e}).then(()=>{this.$router.push({name:"checkoutSuccess"}),this.getCarts()}).catch(()=>{S.fire({icon:"error",title:"表單未正確填寫",text:"請依提示填寫"})})}},mounted(){this.getCarts()},data(){return{couponContent:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{TravelConditions:$}},j={class:"container"},L=t("div",{class:"row justify-content-center"},[t("div",{class:"col-md-10"},[t("h3",{class:"fw-bold mb-4 pt-3"},"結帳")])],-1),R={class:"row flex-row-reverse justify-content-center pb-5"},B={class:"col-md-4"},O={class:"border p-4 mb-4"},F=["src"],z={class:"w-100"},G={class:"d-flex justify-content-between"},H={class:"mb-0 fw-bold"},J={class:"mb-0"},K={class:"mb-0 fw-bold"},Q=t("h4",{class:"fw-bold mb-4"},"訂單資料",-1),W={class:"table mt-4 border-top border-bottom text-muted"},X=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"}," 小計 ",-1),Y={class:"text-end border-0 px-0 pt-4"},Z=t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"}," 付款方式 "),t("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"LinePay")],-1),tt={class:"d-flex justify-content-between mt-4"},et=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),st={class:"mb-0 h4 fw-bold"},ot={class:"col-md-6"},at=t("p",null,"聯絡資訊",-1),lt={class:"mb-0"},nt=t("label",{for:"ContactMail",class:"text-muted mb-0"},[t("span",{class:"text-danger"},"*"),i(" Email ")],-1),dt={class:"mb-2"},rt=t("label",{for:"ContactName",class:"text-muted mb-0 mt-2"},[t("span",{class:"text-danger"},"*"),i(" 姓名 ")],-1),ct={class:"mb-2"},it=t("label",{for:"ContactTel",class:"text-muted mb-0 mt-2"},[t("span",{class:"text-danger"},"*"),i(" 電話 ")],-1),mt={class:"mb-2"},_t=t("label",{for:"ContactAddress",class:"text-muted mb-0 mt-2"},[t("span",{class:"text-danger"},"*"),i(" 地址 ")],-1),ut=t("label",{for:"travelDate",class:"text-muted mb-0 mt-2"},"旅遊期間",-1),pt=["value"],ht={class:"mb-2"},ft=t("label",{for:"travelPeopleNum",class:"text-muted mb-0 mt-2"},"人數",-1),bt=["value"],vt={class:"mb-2"},xt=t("label",{for:"ContactMessage",class:"text-muted mb-0"},"備註",-1),gt={class:"form-control",rows:"3",id:"ContactMessage",placeholder:"其他留言"},wt={class:"d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-center align-items-end w-100"},Ct=t("i",{class:"bi bi-arrow-left"},null,-1),yt=t("a",{class:"ms-3 text-decoration-none text-muted text-nowrap h-100"},"回 購物車",-1);function Vt(s,e,d,Tt,l,T){const P=r("TravelConditions"),m=r("v-field"),_=r("ErrorMessage"),k=r("v-form"),g=r("RouterLink"),E=N("modal");return b(),v("div",j,[o(P,{class:"d-none"}),L,t("div",R,[t("div",B,[t("div",O,[(b(!0),v(A,null,I(s.carts,a=>(b(),v("div",{class:"d-flex",key:a},[t("img",{src:a.product.imagesUrl,alt:"productImages",class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,8,F),t("div",z,[t("div",G,[t("p",H,c(a.product.title),1),t("p",J,"NT$"+c(a.product.price),1)]),t("p",K,c(a.product.num)+" 組",1)])]))),128)),Q,t("table",W,[t("tbody",null,[t("tr",null,[X,t("td",Y," NT$"+c(this.final_total),1)]),Z])]),t("div",tt,[et,t("p",st,"NT$"+c(this.final_total),1)])])]),t("div",ot,[at,o(k,null,{default:x(({errors:a})=>[t("div",lt,[nt,o(m,{name:"email",type:"email",rules:"required|email",class:u(["form-control",{"is-invalid":a.email}]),id:"ContactMail",placeholder:"example@gmail.com",modelValue:l.form.user.email,"onUpdate:modelValue":e[0]||(e[0]=n=>l.form.user.email=n)},null,8,["modelValue","class"]),o(_,{class:"text-danger",name:"email"})]),t("div",dt,[rt,o(m,{name:"姓名",type:"text",rules:"required",class:u(["form-control",{"is-invalid":a.姓名}]),id:"ContactName",placeholder:"王 小明",modelValue:l.form.user.name,"onUpdate:modelValue":e[1]||(e[1]=n=>l.form.user.name=n)},null,8,["modelValue","class"]),o(_,{class:"text-danger",name:"姓名"})]),t("div",ct,[it,o(m,{name:"電話",type:"tel",rules:"required",class:u(["form-control",{"is-invalid":a.電話}]),id:"ContactTel",placeholder:"0912345678",modelValue:l.form.user.tel,"onUpdate:modelValue":e[2]||(e[2]=n=>l.form.user.tel=n)},null,8,["modelValue","class"]),o(_,{class:"text-danger",name:"電話"})]),t("div",mt,[_t,o(m,{name:"地址",type:"text",rules:"required",class:u(["form-control",{"is-invalid":a.地址}]),id:"ContactAddress",placeholder:"台灣台北市大安區羅斯福利101號",modelValue:l.form.user.address,"onUpdate:modelValue":e[3]||(e[3]=n=>l.form.user.address=n)},null,8,["modelValue","class"]),o(_,{class:"text-danger",name:"地址"})]),t("div",null,[ut,t("input",{type:"text",class:"form-control",id:"travelDate",disabled:"",value:s.startTime+"   到   "+s.endTime},null,8,pt)]),t("div",ht,[ft,t("input",{type:"text",class:"form-control",id:"travelPeopleNum",disabled:"",value:s.selectedPeople},null,8,bt)]),t("div",vt,[xt,M(t("textarea",gt,null,512),[[E,l.form.message]])])]),_:1}),t("div",wt,[o(g,{to:"/cart",class:"text-dark mt-md-0 mt-3 d-flex align-items-center"},{default:x(()=>[Ct,yt]),_:1}),o(g,{to:"/checkout",class:"mx-5 btn btn-dark w-100 mt-4",onClick:e[4]||(e[4]=a=>T.buildOrder())},{default:x(()=>[i("送出訂單")]),_:1})])])])])}const Nt=q(U,[["render",Vt]]);export{Nt as default};
