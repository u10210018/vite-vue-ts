<script setup lang="ts">
import { useMouse } from '@vueuse/core'

import HomeView from '@/pages/HomeView.vue'

const { x, y } = useMouse()

watch([x, y], ([nX, nY]) => {
  console.log([nX, nY])
})
</script>

<template>
  <div>
    <HomeView />
  </div>
</template>

<style lang="scss" scoped></style>
