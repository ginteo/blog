<template>
  <footer class="mt-10 flex w-full justify-center p-6">
    <div class="copyright mr-2 flex items-center">
      <IconsCopyright class="h-5 w-5" />
      <span>2022 Gin</span>
    </div>
    <div class="icp-record mr-2 flex items-center">
      <IconsIcp class="h-5 w-5" />
      <NuxtLink
        class="ml-2"
        target="_blank"
        to="https://beian.miit.gov.cn/#/Integrated/recordQuery"
      >
        鄂ICP备2021015619号-2
      </NuxtLink>
    </div>
    <div class="security-record flex items-center">
      <img src="@/assets/images/record.png" alt="" />
      <NuxtLink
        class="ml-2"
        target="_blank"
        to="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42010202002697"
      >
        鄂公网安备 42010202002697号
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
