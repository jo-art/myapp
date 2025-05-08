<template>
    <div class="container mt-5">
      <h2 class="mb-4">🛒 장바구니</h2>
      <CartList :items="cartItems" @remove="removeItem" />
  
      <div class="text-end mt-4">
        <button class="btn btn-success" :disabled="cartItems.length === 0" @click="order">
          주문하기
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import CartList from '@/components/CartList.vue'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  // 임시 장바구니 데이터 (서버 연동 전)
  const cartItems = ref([
    {
      productName: '커스텀 케이스',
      device: '아이폰 13',
      text: '냥아티 최고',
      quantity: 1,
      price: 12000
    },
    {
      productName: '단체 케이스',
      device: '갤럭시 S23',
      text: '우리팀 화이팅',
      quantity: 2,
      price: 10000
    }
  ])
  
  function removeItem(index) {
    cartItems.value.splice(index, 1)
  }
  
  function order() {
    alert('주문 페이지로 이동합니다!')
    router.push('/order')  // 실제로는 주문 페이지로 이동
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  </style>
  