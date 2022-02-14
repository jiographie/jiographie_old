
<template>
  <!-- header -->
  <header class="header">
    <div class="inner">
      <div class="logo_area">
        <a href="#"></a>
      </div>
      <div class="right-area">
        <div class="date-box"><a href="#">2021.00.00 금</a></div>
        <div class="alarm-box">
          <button type="button" class="alarm on"></button>
        </div>
        <span class="memberInfo">000000HM 님</span>
        <span class="bar"></span>
        <button type="button" class="logout_btn">로그아웃</button>
      </div>
    </div>
  </header>
  <!-- header -->
</template>

<script>
export default {
  name: "headerComponent",
  props: {
    msg: String,
  },
};
</script>
