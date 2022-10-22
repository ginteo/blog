<template>
  <main class="blog relative">
    <ContentDoc v-slot="{ doc }" :path="$route.path.replace('/blog', '')">
      <Toc :data="extractToc(doc.body.toc.links)" />

      <div class="content">
        <h2 class="blog-title -mt-8 mb-6 text-5xl font-semibold">
          {{ doc.title }}
        </h2>

        <section class="post-info mb-6">
          <div class="flex items-center gap-2 text-gray-500">
            <div class="author flex items-center">
              <IconsUser class="mr-2 h-5 w-5" />
              <span>gin</span>
            </div>
            <div class="date flex items-center">
              <IconsCalendar class="mr-2 h-5 w-5" />
              <span>{{ formatTime(doc.date) }}</span>
            </div>
          </div>

          <div class="tags mt-4 flex gap-4">
            <div
              v-for="tag in doc.tags"
              :key="tag"
              class="select-none rounded-full border border-transparent bg-slate-200 py-1 px-2 text-center hover:cursor-pointer hover:border-slate-800"
            >
              {{ tag }}
            </div>
          </div>
        </section>

        <ContentRenderer :value="doc" class="prose prose-lg prose-slate" />
      </div>
    </ContentDoc>
  </main>
</template>

<script lang="ts" setup>
import { formatTime, extractToc } from '@/utils'
</script>

<style lang="scss" scoped>
.blog {
  @apply relative flex items-start px-[5%] pt-10 lg:space-x-10 lg:px-[10%] lg:pt-20;
}
</style>
