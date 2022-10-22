<template>
  <div class="toc">
    <h2>ON THIS PAGE</h2>
    <ul>
      <li
        v-for="item in data"
        :key="`toc-item-${item.text}-depth-${item.depth}`"
      >
        <NuxtLink
          :to="`#${item.id}`"
          :class="{
            'level-two': item.depth == 3,
            'level-three': item.depth > 3
          }"
        >
          {{ item.text }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { TocType } from '~~/utils/extract-toc'

defineProps({
  data: { type: Array as PropType<TocType[]>, default: () => [] }
})
</script>

<style lang="scss" scoped>
.toc {
  @apply sticky top-40 left-0  hidden w-[300px] rounded-md  bg-white p-5 lg:block;

  h2 {
    @apply mb-4 text-sm font-bold;
  }

  ul {
    @apply space-y-2;

    .level-two {
      @apply ml-4;
    }

    .level-three {
      @apply ml-8 text-sm;
    }
  }
}
</style>
