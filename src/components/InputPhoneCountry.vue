<script setup lang="ts">
import { useCountries, type CountryOption } from '@/composable/useCountries'
import { cn } from '@/service/utils'

const emits = defineEmits<{
  'update-country': [country: CountryOption]
}>()

const { countryOptions } = useCountries()

const country = ref<CountryOption>(countryOptions[0])

const isOpen = ref<boolean>(false)

watch(
  country,
  () => {
    emits('update-country', country.value)
  },
  {
    immediate: true,
  }
)

const setCountry = (o: CountryOption): void => {
  country.value = o
  isOpen.value = false
}
</script>

<template>
  <div class="relative">
    <slot name="trigger" :country="country" :click-handler="() => (isOpen = !isOpen)"></slot>
    <div
      :class="
        cn('pointer-events-none absolute -bottom-4 left-0 translate-y-[calc(100%-20px)] opacity-0 transition', {
          'pointer-events-auto translate-y-full opacity-100': isOpen,
        })
      "
    >
      <div class="grid gap-2 rounded-md border border-gray-400 bg-white py-2 shadow-md">
        <button
          v-for="item in countryOptions"
          type="button"
          class="p-2 hover:bg-slate-200/50"
          @click="setCountry(item)"
        >
          <div class="flex items-center gap-2 text-sm">
            <div class="size-6"><img :src="item.icon" class="size-full object-contain" :alt="item.country" /></div>
            <div>+{{ item.countryCallingCode }}</div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
