<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">🐾 냥아티</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/custom">커스텀 폰케이스</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/group">단체 폰케이스</router-link>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/mypage">
              <i class="fas fa-user"></i> 마이페이지
            </router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="nav-link" to="/login">
              <i class="fas fa-sign-in-alt"></i> 로그인
            </router-link>
          </li>
          <li class="nav-item" v-else>
            <button class="btn btn-outline-danger btn-sm" @click="logout">
              <i class="fas fa-sign-out-alt"></i> 로그아웃
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoggedIn = ref(false)

function logout() {
  isLoggedIn.value = false
  alert("로그아웃 되었습니다.")
  router.push('/')
}
</script>

<style scoped>
body {
  padding-top: 70px;
}
</style>
