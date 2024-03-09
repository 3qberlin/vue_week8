<template>
  <div class="position-relative d-flex">
    <div class="container d-flex flex-column" style="min-height: 100vh">
      <div class="row my-auto pb-7">
        <div class="col-md-4 d-flex flex-column">
          <div class="my-auto">
            <h2>訂購成功</h2>
            <p>詳細訂單資料已寄送至您輸入的Email</p>
            <RouterLink to="/home" class="btn btn-dark mt-4 px-5"
              >回到首頁</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-md-50 w-100 position-absolute"
      style="
        z-index: -1;
        min-height: 100vh;
        right: 0;
        background-image: url(https://images.unsplash.com/photo-1457131760772-7017c6180f05?q=80&w=2306&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
        opacity: 50%;
        background-position: center center;
      "
    ></div>
  </div>
</template>

<script>
export default {};
</script>
