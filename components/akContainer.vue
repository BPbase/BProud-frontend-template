<template>
  <a id="ak-container" ref="focusableLink" href="#ak-container" title="中央內容區塊" accesskey="C">
    :::
  </a>
</template>

<script setup lang="ts">
const focusableLink = ref<HTMLAnchorElement | null>(null)

onMounted(() => {
  if (focusableLink.value) {
    focusableLink.value.focus()
  }
})
</script>
