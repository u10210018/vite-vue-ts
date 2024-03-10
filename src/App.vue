<script setup lang="ts">
import { useHeadStyle } from '@/composables/useHeadStyle'
import HomeView from '@/pages/HomeView.vue'

const { sheetHtml } = useHeadStyle()
</script>

<template>
  <div>
    <div v-html="sheetHtml"></div>
    <HomeView />
  </div>
</template>

<style lang="scss" scoped></style>
