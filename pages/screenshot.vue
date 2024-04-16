<template>
  <main class="page">
    <akContainer />
    <h2>{{ pageTitle }}</h2>
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
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('html2canvas')
const pageDescription = ref('提供' + runtimeConfig.public.websiteName + 'html2canvas')
const route = useRoute()

useHead({
  title: pageTitle,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: pageDescription.value
    },
    { hid: 'og:url', property: 'og:url', content: runtimeConfig.public.baseUrl + route.path },
    {
      hid: 'og:title',
      property: 'og:title',
      content: pageTitle.value + ' - ' + runtimeConfig.public.websiteName
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: pageDescription.value
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: runtimeConfig.public.baseUrl + route.path
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: pageTitle.value + ' - ' + runtimeConfig.public.websiteName
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: pageDescription.value
    }
  ]
})

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
