<script setup lang="ts">
import { useHello } from '@/composables/useHello'

const { sayHi } = useHello()
</script>

<template>
  <div>
    <div class="title border border-red-400">Hello</div>
    <button type="button" @click="sayHi" class="border-2 border-brand-02 p-2 text-brand-01 sm:p-6">Say hi</button>
  </div>
</template>

<style land="scss" scoped>
.title {
  color: pink;
}
</style>
