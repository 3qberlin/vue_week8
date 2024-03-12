<template>
  <div class="container-fluid p-0">
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block pb-5">
            <h2>渡假聖地</h2>
            <p class="h4">放鬆身心的好地方</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block pb-5">
            <h2>票選秘境</h2>
            <p class="h4">一生一定要拜訪一次的美景</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://images.unsplash.com/photo-1532926381893-7542290edf1d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block pb-5">
            <h2>走入自然</h2>
            <p class="h4">融入自然的懷抱</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12">
        <h2 class="bg-info d-inline-block rounded-2 px-3 text-white shadow
         position-relative">早鳥優惠
        <span class="position-absolute top-100 start-100 bg-warning
         rounded-5 translate-middle" style="padding:12px;"></span>
         <span class="position-absolute top-100 start-25 bg-success opacity-50
         rounded-5 translate-middle" style="padding:8px;"></span>
        </h2>
      </div>
      <div class="col-md-4 mt-4">
        <div class="card border-0 mb-4 h-100 position-relative">
          <img
            src="https://images.unsplash.com/photo-1628745750116-d4e990e4481a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="card-img-top rounded-0 object-fit-cover"
            alt="..."
          />
          <span class="position-absolute top-50 bg-info rounded-end text-dark fw-bold"
           style="width:160px;left:8px;padding:0px 8px;">$ 8015 元起 / 一晚</span>
          <div class="card-body text-center">
            <h4>卡拖卡尼．親子樂園</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">
                卡拖卡尼．親子樂園是一處迷人的住宿選擇，為家庭提供了理想的度假體驗。這個樂園擁有豐富多樣的娛樂設施和活動
                ，適合大人和小孩。來此度假，您將享受到舒適的住宿和愉快的休閒時光，是放鬆身心的理想之地。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-md-4">
        <div class="card border-0 mb-4 h-100 position-relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="card-img-top rounded-0 object-fit-cover"
            alt="..."
          />
          <span class="position-absolute top-50 bg-info rounded-end text-dark fw-bold"
           style="width:160px;left:8px;padding:0px 8px;">$ 2899 元起 / 一晚</span>
          <div class="card-body text-center">
            <h4>伊斯坦堡．歷史風情</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">
                伊斯坦堡民宿魅力無窮：歷史悠久，風格多樣，地理位置優越。每處皆彷彿是故事場景，
                親切熱情的服務，讓人感受到家的溫暖。
                交通便捷，鄰近景點，帶給旅人無盡便利。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-md-4">
        <div class="card border-0 mb-4 h-100 position-relative">
          <img
            src="https://images.unsplash.com/photo-1587985064135-0366536eab42?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="card-img-top rounded-0 object-fit-cover"
            alt="..."
          />
          <span class="position-absolute top-50 bg-info rounded-end text-dark fw-bold"
           style="width:160px;left:8px;padding:0px 8px;">$ 8899 元起 / 一晚</span>
          <div class="card-body text-center">
            <h4>艾美度假酒店．大縱酒</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">
                艾美度假酒店：奢華設施、無敵海景、尊貴服務。
                享受私密沙灘、水上活動、精緻美食，享受完美假期。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="fs-5 d-flex flex-nowrap justify-content-end">
          <router-link to="/products" class="text-muted text-decoration-none
           border-bottom border-warning border-2"
            >看更多<i class="bi bi-arrow-right-circle ms-1"></i></router-link>
          </p>
      </div>
    </div>
  </div>
  <div class="bg-light mt-7">
    <div class="container">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div>
          <div class="row justify-content-center py-7">
            <div class="col-md-6 text-center">
              <h3>為你備好，最好的旅宿去處</h3>
              <p class="my-5">
                找尋最佳旅宿？我們提供最優房價、豐富旅遊選擇，滿足您需求。探索舒適客房、優質服務，打造完美旅程體驗。
              </p>
              <p><small>—Home Travel—</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-7">
    <div class="row">
      <div class="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">當季優惠</h4>
        <p class="text-muted">
          「悠遊當季優惠」為您帶來無限精彩！探索令人嘆為觀止的景點，享受獨特的文化體驗，
          並在我們精心挑選的旅館中度過舒適的夜晚。無論您是想探索自然風光、品嚐美食、
          或是體驗冒險刺激，我們都有專屬於您的優惠計劃。立即預訂，抓住當季最佳優惠，開啟一段難忘的旅程！
        </p>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-between mt-4">
      <div class="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1625834318071-f28f0e51449b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">網友推薦</h4>
        <p class="text-muted">
          「網友推薦，旅遊高滿意度！」我們的目的地來自網友的熱情推薦，擁有極高的滿意度。
          從驚艷的景點到溫馨的住宿，我們致力於為您打造一場難忘的旅程。透過網友的真實評論，
          您可以放心地探索新的目的地，體驗當地的文化和風情。無論您是追求奢華還是探索冒險，
          我們都有專業的團隊為您量身打造，確保您的旅行充滿歡笑和美好回憶。
          讓我們一同啟程，開啟一段充滿驚喜的旅程！
        </p>
      </div>
    </div>
  </div>
  <h3 class="text-center">聯名推薦</h3>
  <div class="container-fluid bg-light">
    <div class="container">
      <ul class="row d-flex g-3 row-cols-1 row-cols-md-3 list-unstyled mt-4">
        <li class="card-body rounded-2 text-center">
          <img
            src="https://hackmd.io/_uploads/r1X10X56p.png"
            alt="cor"
            class="object-fit-cover"
            style="width: 200px"
          />
        </li>
        <li class="card-body rounded-2 text-center">
          <img
            src="https://hackmd.io/_uploads/HJH1CmcTT.png"
            alt="cor"
            class="object-fit-cover"
            style="width: 200px"
          />
        </li>
        <li class="card-body rounded-2 text-center">
          <img
            src="https://hackmd.io/_uploads/Sy8JCXq6a.png"
            alt="cor"
            class="object-fit-cover"
            style="width: 200px"
          />
        </li>
        <li class="card-body rounded-2 text-center">
          <img
            src="https://hackmd.io/_uploads/SklD10m9TT.png"
            alt="cor"
            class="object-fit-cover"
            style="width: 200px"
          />
        </li>
        <li class="card-body rounded-2 text-center">
          <img
            src="https://hackmd.io/_uploads/rkWgA7966.png"
            alt="cor"
            class="object-fit-cover"
            style="width: 200px"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>
