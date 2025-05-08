<script setup>
import Header from '../components/Header.vue'
</script>

<template>
  <div>
    <Header></Header>
    <main class="home-content">
      <!-- 여기에 메인 배너, 상품리스트 등 홈화면 콘텐츠 -->
      <h1>어서오세요, 냥아티 쇼핑몰입니다!</h1>
    </main>
</div>
</template>

<style scoped>
.home-content {
  padding-top: 80px; /* 고정 헤더 아래에 공간 확보 */
}
</style>