<template>
  <button ref="copyRef" class="copy copy-button">
    <icons-clipboard-check v-if="state === 'copied'" class="h-5 w-5" />
    <icons-clipboard-copy v-else class="h-5 w-5" />
  </button>
</template>

<script setup lang="ts">
import Clipboard from 'clipboard'

const state = ref('init')
const copyRef = ref<HTMLButtonElement>()

onMounted(() => {
  const copyCode = new Clipboard(copyRef.value, {
    target(trigger) {
      return trigger.previousElementSibling
    }
  })

  copyCode.on('success', e => {
    e.clearSelection()

    state.value = 'copied'

    window.setTimeout(() => {
      state.value = 'init'
    }, 2000)
  })
})

defineExpose({ copyRef })
</script>

<style lang="scss" scoped>
.copy {
  @apply absolute right-1 top-0 border-white px-2 py-2 font-mono text-xs font-semibold leading-none text-gray-400 shadow-lg focus:outline-none;
}
</style>
