<template>
  <main class="page">
    <akContainer />
    <h2>Html2Canvas</h2>
    <nuxt-link
      to="https://html2canvas.hertzen.com/"
      title="另開視窗前往 html2canvas 套件網站"
      target="_blank"
      rel="noreferrer noopener"
    >
      html2canvas 官網
    </nuxt-link>
    <br /><br />
    <button type="button" @click="handleScreenshot()">點我截圖！</button>
    <div v-if="loadingScreenshotImg">載入螢幕截圖中...</div>
    <img v-if="screenshot" class="screenshot" :src="screenshot" alt="螢幕截圖" />
  </main>
</template>
<script setup lang="ts">
const { loadingScreenshotImg, screenshot, handleScreenshot } = useHtml2canvas()
</script>

<style scoped>
img {
  width: 90%;
  height: auto;
  margin: 4rem auto;
  border: 1px solid #bbb;
}
</style>
