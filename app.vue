<template>
  <div class="layout">
    <app-header class="header"></app-header>
    <app-plum />
    <NuxtPage class="main" />
    <app-footer class="footer"></app-footer>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  @apply flex min-h-screen flex-col;

  .header {
    @apply flex-shrink-0 flex-grow-0 basis-auto;
  }

  .main {
    @apply flex-auto;
  }

  .footer {
    @apply flex-shrink-0 flex-grow-0 basis-auto;
  }
}
</style>
