import{a as h}from"./axios-G2rPRu76.js";import{_ as k,c as o,b as e,d as _,w as b,F as g,j as m,n as v,l as f,h as Z,r as N,o as i,e as p,t as c}from"./index-N1iuwma0.js";var w={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_API_NAME:"berlin",BASE_URL:"/vue_week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:x,VITE_API_NAME:y}=w,P="eyJhbGciOiJSUzI1NiIsImtpZCI6IkFrZEJodyJ9.eyJpc3MiOiJodHRwczovL3Nlc3Npb24uZmlyZWJhc2UuZ29vZ2xlLmNvbS92dWUtY291cnNlLWFwaSIsImF1ZCI6InZ1ZS1jb3Vyc2UtYXBpIiwiYXV0aF90aW1lIjoxNzA5OTY5OTc1LCJ1c2VyX2lkIjoiVklrYjA4ZHhBT2F4TzRBNE1kZlphYWZ6Q1AyMyIsInN1YiI6IlZJa2IwOGR4QU9heE80QTRNZGZaYWFmekNQMjMiLCJpYXQiOjE3MDk5Njk5NzUsImV4cCI6MTcxMDQwMTk3NSwiZW1haWwiOiIzcS5iZXJsaW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIjNxLmJlcmxpbkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.OsCNmHr-44a97_GiU-lGqPZh_t__I34fSYoMZt-8q9UxXzizIRsbQdtE2Hjz8j0Q9v5_zLIM0uz0m1DyiwxEF0VnNfYThd_AAnHm2xFgUg1fcznIrfuHfXpIDpXdD9kn8_FNTz5393ZRBFqZzZ1ANo_61e4r6dtji5BjEOfO0fPcWKThOtKqZ55GBy3yEhf2bpq9nuo-aZWpU_FQKvKMSG8315wVI7_-0_rogd_viibO35unqI0mjGNE9qPg2fNlOuo9fqAhKLbJrkiMHnG_oHo_ELqXPcqmXg6w7Kju76SL039xK-mG9uxNjdwLqGUt_QGIc8uQ1PmV--ING3XgFA",E={data(){return{products:[],categories:["海景","野外","飯店","民宿"],vuePagination:{}}},watch:{"$route.query":{handler(){this.getProducts()}},deep:!0},methods:{getProducts(){const{category:d=""}=this.$route.query,s=`${x}api/${y}/products?category=${d}`;h.get(s).then(n=>{this.products=n.data.products,this.pagination()})},pagination(d=1){const{category:s=""}=this.$route.query,n=`${x}/api/${y}/products?page=${d}&category=${s}`;h.get(n).then(r=>{const{products:a,pagination:l}=r.data;this.products=a,this.vuePagination=l}).catch(r=>{alert(r.response.data.message)})},createToken(){h.defaults.headers.common.Authorization=P}},mounted(){this.getProducts(),this.createToken(),this.pagination()}},T={class:"container mt-md-5 mt-3 mb-7"},O={class:"row"},V={class:"col-md-4"},j={class:"accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3",id:"accordionExample"},A={class:"card border-0"},F=e("div",{class:"card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0",id:"headingOne","data-bs-toggle":"collapse","data-bs-target":"#collapseOne"},[e("div",{class:"d-flex justify-content-between align-items-center pe-1"},[e("h4",{class:"mb-0"},"產品分類"),e("i",{class:"fas fa-chevron-down"})])],-1),W={id:"collapseOne",class:"collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},z={class:"card-body py-0"},J={class:"list-unstyled"},L={class:"py-2 d-block text-muted"},S=Z('<div class="card"><div class="card-body"><h6><i class="bi bi-exclamation-lg me-1 text-danger"></i>住訂房須知</h6><p>支援所有行動支付</p><p>透過HexSponser第三方安全支付管理您的付款資訊</p><p>所有房型皆須付30%訂金，部份房型可免訂金訂房</p><p></p></div><div></div></div><div class="accordion accordion-flush mt-4 border rounded-1" id="accordionFlushExample"><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> 有哪些行動支付？信用卡類型？ </button></h2><div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"><div class="accordion-body"><p>行動支付</p><ul><li>Apple Pay</li><li>Line Pay</li><li>SomSung Pay</li></ul><hr><p>信用卡</p><ul><li>VISA</li><li>Master</li><li>Unio</li></ul></div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"> 飯店或民宿提供哪些設施？ </button></h2><div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"><div class="accordion-body"><ul><li>游泳池、桑拿室、熱水浴缸和按摩浴缸</li><li>健身房和健身中心</li><li>餐廳和酒吧</li><li>花園和露台</li><li>接待櫃台、接駁車和接待櫃台服務 </li><li>兒童俱樂部和家庭娛樂 </li><li>安全、保安、清潔度和清潔服務 </li><li>商務設施 </li><li>租車服務 </li></ul><p class="text-primary ms-3">實際設備依個別訂房資訊所載</p></div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"> 常見問答 </button></h2><div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"><div class="accordion-body"><p> Q：遺失入住證明怎麼辦？ </p><p>A:請撥打國際免付費專線0809-777889，將有專人協助處理。或使用<code> serviceTravel@gmail.com</code> 通知我們，我們將於2個小時內回覆並提供必須協助</p></div></div></div></div>',2),M={class:"col-md-8 mt-4 mt-md-0"},C={class:"row"},U={class:"card border-0 mb-4 position-relative position-relative"},X=["src"],G=e("a",{href:"#",class:"text-dark"},[e("i",{class:"far fa-heart position-absolute",style:{right:"16px",top:"16px"}})],-1),Y={class:"card-body p-0"},q={class:"mb-0 mt-3"},Q={class:"card-text mb-0"},R={class:"text-muted"},B=e("p",{class:"text-muted mt-3"},null,-1),H={"aria-label":"Page navigation example",class:"d-flex justify-content-center"},D={class:"pagination"},$=e("span",{"aria-hidden":"true"},"«",-1),K=[$],ee=["onClick"],te=e("span",{"aria-hidden":"true"},"»",-1),ae=[te];function se(d,s,n,r,a,l){const u=N("RouterLink");return i(),o("div",T,[e("div",O,[e("div",V,[e("div",j,[e("div",A,[F,e("div",W,[e("div",z,[e("ul",J,[e("li",L,[_(u,{to:"/products",class:"text-muted text-decoration-none"},{default:b(()=>[p("全部")]),_:1})]),(i(!0),o(g,null,m(a.categories,t=>(i(),o("li",{key:t,class:"py-2 d-block text-muted"},[_(u,{to:`/products?category=${t}`,class:"text-muted text-decoration-none"},{default:b(()=>[p(c(t),1)]),_:2},1032,["to"])]))),128))])])])])]),S]),e("div",M,[e("div",C,[(i(!0),o(g,null,m(a.products,t=>(i(),o("div",{class:"col-md-6",key:t.id},[e("div",U,[e("img",{src:t.imagesUrl,style:{"max-height":"350px","min-height":"300px"},class:"card-img-top rounded-0 object-fit-cover",alt:"..."},null,8,X),G,e("div",Y,[e("h4",q,[_(u,{to:`/product/${t.id}`,class:"text-dark text-decoration-none"},{default:b(()=>[p(c(t.title),1)]),_:2},1032,["to"])]),e("p",Q,[p(" NT$"+c(t.price)+" ",1),e("span",R,[e("del",null," NT$"+c(t.origin_price),1)])]),B])])]))),128))]),e("nav",H,[e("ul",D,[e("li",{class:v(["page-item",{disabled:a.vuePagination.current_page===1}])},[e("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:s[0]||(s[0]=f(t=>l.pagination(a.vuePagination.current_page-1),["prevent"]))},K)],2),(i(!0),o(g,null,m(a.vuePagination.total_pages,(t,I)=>(i(),o("li",{key:I,class:v(["page-item",{active:t===a.vuePagination.current_page}])},[e("a",{class:"page-link",href:"#",onClick:f(oe=>l.pagination(t),["prevent"])},c(t),9,ee)],2))),128)),e("li",{class:v(["page-item",{disabled:a.vuePagination.current_page===a.vuePagination.total_pages}])},[e("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:s[1]||(s[1]=f(t=>l.pagination(a.vuePagination.current_page+1),["prevent"]))},ae)],2)])])])])])}const ce=k(E,[["render",se]]);export{ce as default};