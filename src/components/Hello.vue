<script setup lang="ts">
import { useHello } from '@/composables/useHello'

defineOptions({
  name: 'PanView',
})

const { sayHi } = useHello()
</script>

<template>
  <div>
    <button type="button" @click="sayHi" class="border-brand-02 text-brand-01 border-2 p-2 sm:p-6">Say hi</button>
  </div>
</template>

<style scoped></style>
