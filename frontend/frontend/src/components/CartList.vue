<template>
    <div class="cart-list">
      <h3 class="mb-4">장바구니</h3>
  
      <div v-if="items.length === 0" class="text-muted">장바구니가 비어 있습니다.</div>
  
      <div v-else>
        <table class="table">
          <thead>
            <tr>
              <th>상품명</th>
              <th>기종</th>
              <th>문구</th>
              <th>수량</th>
              <th>가격</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td>{{ item.productName }}</td>
              <td>{{ item.device }}</td>
              <td>{{ item.text }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.price * item.quantity }}원</td>
              <td>
                <button class="btn btn-sm btn-outline-danger" @click="$emit('remove', index)">
                  삭제
                </button>
              </td>
            </tr>
          </tbody>
        </table>
  
        <div class="text-end fw-bold">
          총액: {{ totalPrice }}원
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  const props = defineProps({
    items: {
      type: Array,
      required: true
    }
  })
  
  // 총액 계산
  const totalPrice = computed(() =>
    props.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )
  </script>
  
  <style scoped>
  .cart-list {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  