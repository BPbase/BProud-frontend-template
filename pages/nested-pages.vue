<template>
  <main class="page">
    <akContainer />
    <h2>巢狀頁面範例</h2>
    <nuxt-link to="/nested-pages/id" title="前往巢狀頁面內頁">巢狀頁面內頁</nuxt-link>
    <NuxtPage />
    <ul>
      <li v-for="(itemm, index) in 50" :key="index">
        <nuxt-link to="/">test scroll-padding-top</nuxt-link>
      </li>
    </ul>
  </main>
</template>
