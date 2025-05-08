<script setup>
import Header from './components/Header.vue' // 헤더 컴포넌트 불러오기
</script>

<template>
  <div class="app-wrapper">
    <Header></Header>   <!-- 상단 고정 헤더 삽입 -->
    <main class="page-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-wrapper {
  font-family: sans-serif;
}

.page-content {
  padding-top: 70px; /* 고정 헤더 높이만큼 여백 줘야 콘텐츠 안 겹침 */
}
</style>
