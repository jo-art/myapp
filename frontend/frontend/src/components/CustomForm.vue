<template>
    <div class="custom-form container mt-5">
      <h2 class="mb-4">커스터마이즈 폰케이스 주문</h2>
  
      <form @submit.prevent="handleSubmit">
        <!-- 브랜드 선택 -->
        <div class="mb-3">
          <label for="brand" class="form-label">브랜드 선택</label>
          <select v-model="form.brand" id="brand" class="form-select" required>
            <option disabled value="">-- 브랜드를 선택하세요 --</option>
            <option value="아이폰">아이폰</option>
            <option value="갤럭시">갤럭시</option>
          </select>
        </div>
  
        <!-- 기종 선택 -->
        <div class="mb-3" v-if="form.brand">
          <label for="device" class="form-label">기종 선택</label>
          <select v-model="form.device" id="device" class="form-select" required>
            <option disabled value="">-- 기종을 선택하세요 --</option>
            <option v-for="model in filteredModels" :key="model" :value="model">
              {{ model }}
            </option>
          </select>
        </div>
  
        <!-- 문구 입력 -->
        <div class="mb-3">
          <label for="text" class="form-label">폰케이스에 넣을 문구</label>
          <input v-model="form.text" type="text" id="text" class="form-control" placeholder="예: 내가 제일 잘 나가" />
        </div>
  
        <!-- 이미지 업로드 -->
        <div class="mb-3">
          <label for="image" class="form-label">삽입할 이미지</label>
          <input type="file" class="form-control" id="image" @change="handleImageUpload" />
          <div v-if="imagePreview" class="mt-2">
            <p class="text-muted">미리보기:</p>
            <img :src="imagePreview" alt="Preview" class="img-thumbnail" style="max-width: 200px;" />
          </div>
        </div>
  
        <!-- 버튼 -->
        <div class="d-flex gap-3">
          <button type="button" class="btn btn-outline-primary" @click="addToCart">장바구니 담기</button>
          <button type="submit" class="btn btn-success">주문하기</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const form = ref({
    brand: '',
    device: '',
    text: '',
    image: null
  })
  
  const imagePreview = ref(null)
  
  const models = {
    아이폰: ['아이폰 14', '아이폰 13', '아이폰 12 미니', '아이폰 SE 3세대'],
    갤럭시: ['갤럭시 S23', '갤럭시 Z플립5', '갤럭시 노트20', '갤럭시 A52']
  }
  
  const filteredModels = computed(() => {
    return models[form.value.brand] || []
  })
  
  function handleImageUpload(event) {
    const file = event.target.files[0]
    form.value.image = file
  
    if (file) {
      const reader = new FileReader()
      reader.onload = e => {
        imagePreview.value = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
  
  function addToCart() {
    alert('장바구니에 담겼습니다.')
    // 여기에 장바구니 API 연동 로직 추가 가능
  }
  
  function handleSubmit() {
    alert('주문이 완료되었습니다.')
    // 여기에 주문 처리 API 연동 로직 추가 가능
  }
  </script>
  
  <style scoped>
  .custom-form {
    max-width: 600px;
  }
  </style>
  