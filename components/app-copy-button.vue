<template>
  <button class="copy-button" @click="$emit('copy', copy)">
    <icons-clipboard-check v-if="copied" class="h-4 w-4" />
    <icons-clipboard-copy v-else class="h-4 w-4" />
  </button>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const { copy, copied } = useClipboard()
defineEmits(['copy'])
</script>

<style lang="scss" scoped>
.copy-button {
  @apply absolute right-1 top-0 p-[0.5rem] font-mono text-xs font-semibold leading-none focus:outline-none;
}
</style>
