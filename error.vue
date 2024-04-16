<template>
  <NuxtLayout name="default" aria-live="polite" :aria-busy="loading">
    <main class="page">
      <akContainer />
      <h2>網頁發生了某些錯誤</h2>
      <p>錯誤代碼：{{ error.statusCode }}</p>
      <div v-if="error.statusCode === 404">
        <p>很抱歉，我們找不到您輸入的網址頁面，請您嘗試看看從選單選取您想觀看的頁面。</p>
      </div>
      <div v-else>
        <p>{{ error.message }}</p>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup>
defineProps({
  error: Object
})

onBeforeUnmount(() => {
  clearError({ redirect: '/' })
})
</script>
