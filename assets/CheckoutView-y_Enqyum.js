import{_ as C,m as y,a as V,i as k,c as p,b as t,F as E,j as q,t as n,d as a,w as h,r as u,o as f,k as $,e as T}from"./index-bjpFYgoi.js";import{c as x}from"./cartPinia-6hj5ba_u.js";import{a as c}from"./axios-G2rPRu76.js";var A={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_API_NAME:"berlin",BASE_URL:"/vue_week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:d,VITE_API_NAME:i}=A,N={computed:{...y(x,["carts","final_total","total"])},methods:{...V(x,["getCarts","pinia_carts","carts"]),addProduct(s){const e={product_id:s.product_id,qty:s.qty+1};console.log("cart",e);const l=`${d}/api/${i}/cart/${s.id}`;c.put(l,{data:e}).then(()=>{this.carts.qty=e.qty,this.getCarts()})},reduceProduct(s){const e={product_id:s.product_id,qty:s.qty-1};console.log("cart",e);const l=`${d}/api/${i}/cart/${s.id}`;c.put(l,{data:e}).then(()=>{this.carts.qty=e.qty,this.getCarts()})},delCartItem(s){const e=`${d}/api/${i}/cart/${s}`;c.delete(e).then(()=>{this.getCarts()}).catch(l=>{alert(l.response.data.message)})},couponTicket(){const s={code:this.couponContent},e=`${d}/api/${i}/coupon`;c.post(e,{data:s}).then(l=>{this.final_total=l.data.data.final_total,this.getCarts()})},buildOrder(){const s=`${d}/api/${i}/order`,e=this.form;c.post(s,{data:e}).then(()=>{this.$router.push({name:"checkoutSuccess"}),this.getCarts()}).catch(l=>{alert(l.response.data.message)})}},mounted(){this.getCarts()},data(){return{couponContent:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}}},I={class:"container"},M=t("div",{class:"row justify-content-center"},[t("div",{class:"col-md-10"},[t("h3",{class:"fw-bold mb-4 pt-3"},"結帳")])],-1),P={class:"row flex-row-reverse justify-content-center pb-5"},U={class:"col-md-4"},j={class:"border p-4 mb-4"},L=["src"],R={class:"w-100"},D={class:"d-flex justify-content-between"},S={class:"mb-0 fw-bold"},B={class:"mb-0"},O={class:"mb-0 fw-bold"},F={class:"table mt-4 border-top border-bottom text-muted"},z=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"小計",-1),G={class:"text-end border-0 px-0 pt-4"},H=t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"付款方式"),t("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"LinePay")],-1),J={class:"d-flex justify-content-between mt-4"},K=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),Q={class:"mb-0 h4 fw-bold"},W={class:"col-md-6"},X=t("p",null,"聯絡資訊",-1),Y={class:"mb-0"},Z=t("label",{for:"ContactMail",class:"text-muted mb-0"},"Email ",-1),tt={class:"mb-2"},et=t("label",{for:"ContactName",class:"text-muted mb-0 mt-2"},"姓名 ",-1),st={class:"mb-2"},ot=t("label",{for:"ContactTel",class:"text-muted mb-0 mt-2"},"電話 ",-1),at={class:"mb-2"},lt=t("label",{for:"ContactAddress",class:"text-muted mb-0 mt-2"},"地址 ",-1),rt={class:"mb-2"},nt=t("label",{for:"ContactMessage",class:"text-muted mb-0"},"備註",-1),ct={class:"form-control",rows:"3",id:"ContactMessage",placeholder:"其他留言"},dt={class:"d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-center align-items-end w-100"},it=t("i",{class:"bi bi-arrow-left"},null,-1),mt=t("a",{class:"ms-3 text-decoration-none text-muted text-nowrap h-100"},"回 購物車",-1);function _t(s,e,l,ut,r,v){const m=u("v-field"),_=u("ErrorMessage"),g=u("v-form"),b=u("RouterLink"),w=k("modal");return f(),p("div",I,[M,t("div",P,[t("div",U,[t("div",j,[(f(!0),p(E,null,q(s.carts,o=>(f(),p("div",{class:"d-flex",key:o},[t("img",{src:o.product.imagesUrl,alt:"",class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,8,L),t("div",R,[t("div",D,[t("p",S,n(o.product.title),1),t("p",B,"NT$"+n(o.product.price),1)]),t("p",O,n(o.product.num)+" 組",1)])]))),128)),t("table",F,[t("tbody",null,[t("tr",null,[z,t("td",G,"NT$"+n(this.final_total),1)]),H])]),t("div",J,[K,t("p",Q,"NT$"+n(this.final_total),1)])])]),t("div",W,[X,a(g,null,{default:h(()=>[t("div",Y,[Z,a(m,{name:"email",type:"email",rules:"required|email",class:"form-control",id:"ContactMail",placeholder:"example@gmail.com",modelValue:r.form.user.email,"onUpdate:modelValue":e[0]||(e[0]=o=>r.form.user.email=o)},null,8,["modelValue"]),a(_,{name:"email"})]),t("div",tt,[et,a(m,{name:"姓名",type:"text",rules:"required",class:"form-control",id:"ContactName",placeholder:"王 小明",modelValue:r.form.user.name,"onUpdate:modelValue":e[1]||(e[1]=o=>r.form.user.name=o)},null,8,["modelValue"]),a(_,{name:"姓名"})]),t("div",st,[ot,a(m,{name:"電話",type:"tel",rules:"required",class:"form-control",id:"ContactTel",placeholder:"0912345678",modelValue:r.form.user.tel,"onUpdate:modelValue":e[2]||(e[2]=o=>r.form.user.tel=o)},null,8,["modelValue"]),a(_,{name:"電話"})]),t("div",at,[lt,a(m,{name:"地址",type:"text",rules:"required",class:"form-control",id:"ContactAddress",placeholder:"台灣台北市大安區羅斯福利101號",modelValue:r.form.user.address,"onUpdate:modelValue":e[3]||(e[3]=o=>r.form.user.address=o)},null,8,["modelValue"]),a(_,{name:"地址"})]),t("div",rt,[nt,$(t("textarea",ct,null,512),[[w,r.form.message]])])]),_:1}),t("div",dt,[a(b,{to:"/cart",class:"text-dark mt-md-0 mt-3 d-flex align-items-center"},{default:h(()=>[it,mt]),_:1}),a(b,{to:"/checkout",class:"mx-5 btn btn-dark w-100 mt-4",onClick:e[4]||(e[4]=o=>v.buildOrder())},{default:h(()=>[T("送出訂單")]),_:1})])])])])}const bt=C(N,[["render",_t]]);export{bt as default};