<template>
  <main class="home">
    <p class="posts-title">Blog Posts</p>

    <div class="list">
      <section
        v-for="(item, index) in blogList"
        :key="`item-${item._path}-${index}`"
        class="item"
      >
        <h2 class="title">
          {{ item.title }}
        </h2>

        <ul v-if="item.children" class="content">
          <li
            v-for="(val, i) in item.children"
            :key="`child-${val._path}-${i}`"
          >
            <Nuxt-Link :to="`/blog${val._path}`">{{ val.title }}</Nuxt-Link>
          </li>
        </ul>

        <ul v-else class="content">
          <li>
            <NuxtLink :to="`/blog${item._path}`">Get Started</NuxtLink>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const { data: blogList } = await useAsyncData('navigation', () => {
  return fetchContentNavigation(queryContent('blog'))
})
useHead({
  title: "Gin's blog"
})
</script>

<style lang="scss" scoped>
.home {
  @apply px-[5%] pt-14 lg:px-[15%] lg:pt-20;

  .posts-title {
    @apply mb-10 text-center font-medium uppercase tracking-wider text-gray-500;
  }
}

.list {
  @apply grid grid-cols-1 gap-5 lg:grid-cols-3;

  .item {
    @apply rounded-lg border-2 px-7 py-5;

    .title {
      @apply text-lg font-semibold;
    }

    .content {
      @apply mt-4 list-inside list-disc space-y-3 pl-2;
      li {
        @apply list-item text-sm text-gray-600 hover:text-indigo-600 hover:underline;
      }
    }
  }
}
</style>
