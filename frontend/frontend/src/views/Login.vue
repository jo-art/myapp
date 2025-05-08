<template>
    <div class="login-form container mt-5" style="max-width: 400px;">
      <h2 class="mb-4 text-center">로그인</h2>
  
      <form @submit.prevent="handleLogin">
        <!-- 이메일 or 아이디 -->
        <div class="mb-3">
          <label for="username" class="form-label">아이디 또는 이메일</label>
          <input v-model="form.username" type="text" id="username" class="form-control" required />
        </div>
  
        <!-- 비밀번호 -->
        <div class="mb-3">
          <label for="password" class="form-label">비밀번호</label>
          <input v-model="form.password" type="password" id="password" class="form-control" required />
        </div>
  
        <!-- 로그인 버튼 -->
        <button type="submit" class="btn btn-primary w-100">로그인</button>
      </form>
  
      <!-- 회원가입 링크 (선택) -->
      <p class="mt-3 text-center">
        아직 회원이 아니신가요?
        <router-link to="/register">회원가입</router-link>
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const form = ref({
    username: '',
    password: ''
  })
  
  function handleLogin() {
    if (form.value.username === 'test' && form.value.password === '1234') {
      alert('로그인 성공!')
      // 실제 로그인 처리는 API 연동 필요
      router.push('/mypage')
    } else {
      alert('아이디 또는 비밀번호가 틀렸습니다.')
    }
  }
  </script>
  
  <style scoped>
  .login-form {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    padding: 2rem;
    border-radius: 10px;
    background-color: #fff;
  }
  </style>
  