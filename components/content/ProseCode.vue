<template>
  <div class="code-block">
    <div class="top">
      <div class="control">
        <div class="bg-red-500"></div>
        <div class="bg-yellow-500"></div>
        <div class="bg-green-500"></div>
      </div>
      <div class="language">{{ filename ? filename : language }}</div>
      <app-copy-button class="flex items-center" @copy="copy => copy(code)" />
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
.code-block {
  @apply mt-4 h-auto w-full shadow;

  .top {
    @apply relative flex items-center space-x-4 rounded-t-lg border-b-2 border-gray-300/75 bg-gray-200 px-3 py-1;

    .control {
      @apply flex items-center space-x-1;

      > div {
        @apply h-3 w-3 rounded-full;
      }
    }

    .language {
      @apply flex-1 pr-14 text-center text-base font-bold;
    }
  }

  :slotted(pre) {
    @apply m-0 rounded-t-none;
    counter-reset: lines;
  }

  :slotted(pre code) {
    @apply flex w-full flex-col;
  }

  :slotted(pre code .line) {
    @apply block min-h-[1rem];
  }

  :slotted(pre code .line::before) {
    @apply mr-6 inline-block w-4 text-slate-400;
    counter-increment: lines;
    content: counter(lines);
  }
}
</style>
