<template>
  <header>
    <a id="ak-jump" href="#ak-container" title="跳至主要內容">跳至主要內容</a>
    <h1 class="visually-hidden">{{ runtimeConfig.public.websiteName }}</h1>
    <div class="header-container">
      <div class="logo">
        <nuxt-link to="/" title="前往首頁">
          <span class="visually-hidden">回到網站首頁</span>
          <picture>
            <!-- <source media="(min-width: 768px)" srcset="/favicon.ico" /> -->
            <img class="logo-img" src="/favicon.ico" alt="" />
          </picture>
        </nuxt-link>
      </div>
      <div ref="checkScrollable" class="menubar">
        <button
          type="button"
          class="btn-open-mobile-menu"
          @click="handleToggleMobileMenuBtn"
        >
          選單
        </button>
        <div :class="['menu', mobileMenuStatus ? 'menu--open' : '']">
          <button
            type="button"
            class="btn-close-mobile-menu"
            @click="handleCloseMobileMenuBtn"
          >
            關閉選單
          </button>
          <span v-if="scrollHint" class="visually-hidden"
            >(橫向捲動顯示更多選單項目)</span
          >
          <nav class="main-menu" aria-label="主要選單">
            <ul>
              <li>
                <a
                  id="ak-header"
                  href="#ak-header"
                  title="上方功能區塊"
                  accesskey="U"
                >
                  :::
                </a>
              </li>
              <li>
                <nuxt-link
                  to="/sitemap"
                  title="前往網站導覽"
                  @click="handleToggleMobileMenuBtn"
                  >網站導覽</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  to="/nested-pages"
                  title="前往巢狀頁面範例"
                  @click="handleToggleMobileMenuBtn"
                >
                  巢狀頁面範例
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/swiper"
                  title="Swiper"
                  @click="handleToggleMobileMenuBtn"
                >
                  Swiper
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX</nuxt-link>
              </li>
            </ul>
          </nav>
          <nav class="sub-menu" aria-label="次要選單">
            <ul>
              <li>
                <nuxt-link to="/" title="XXX">XXX2</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX2</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX2</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" title="XXX">XXX2</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
// const mobileMenuStatus = ref<boolean>(false);
// const handleToggleMobileMenuBtn = () => {
//   mobileMenuStatus.value = !mobileMenuStatus.value;
// };
// const handleCloseMobileMenuBtn = () => {
//   mobileMenuStatus.value = false;
// };
</script>
