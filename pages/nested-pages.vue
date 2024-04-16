<template>
  <main class="page">
    <akContainer />
    <h2>{{ pageTitle }}</h2>
    <nuxt-link to="/nested-pages/id" title="前往巢狀頁面內頁">巢狀頁面內頁</nuxt-link>
    <NuxtPage />
    <ul>
      <li v-for="(itemm, index) in 50" :key="index">
        <nuxt-link to="/">test scroll-padding-top</nuxt-link>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('巢狀頁面範例')
const pageDescription = ref('提供' + runtimeConfig.public.websiteName + '巢狀頁面範例')
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
</script>
