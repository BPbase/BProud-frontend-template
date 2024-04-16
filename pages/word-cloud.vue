<template>
  <main class="page">
    <akContainer />
    <h2>{{ pageTitle }}</h2>
    <nuxt-link
      to="https://github.com/SeregPie/VueWordCloud"
      title="另開視窗前往 Vue-word-cloud 套件網站"
      target="_blank"
      rel="noreferrer noopener"
    >
      Vue-word-cloud Github
    </nuxt-link>
    <vue-word-cloud
      style="height: 480px; width: 640px"
      :words="[
        ['romance', 19],
        ['horror', 3],
        ['fantasy', 7],
        ['adventure', 3]
      ]"
      :color="
        ([, weight]: [string, number]) =>
          weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'
      "
      font-family="Roboto"
    />
  </main>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const pageTitle = ref('Vue Word Cloud')
const pageDescription = ref('提供' + runtimeConfig.public.websiteName + 'Vue Word Cloud')
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

const { VueWordCloud } = useWordCloud()
</script>
