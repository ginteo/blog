<template>
  <header>
    <NuxtLink to="/" class="logo">
      <img src="@/assets/images/logo.png" alt="" />
    </NuxtLink>
    <nav class="nav">
      <div class="spacer"></div>
      <div class="right">
        <NuxtLink
          to="mailto:215129113@qq.com"
          target="_blank"
          title="mail me at"
        >
          <IconsEmail />
        </NuxtLink>
        <NuxtLink to="https://github.com/ginteo" target="_blank" title="GitHub">
          <IconsGithub />
        </NuxtLink>
        <NuxtLink to="/feed.xml" target="_blank" title="RSS">
          <IconsRss />
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.logo {
  @apply absolute m-4 h-10 w-10 select-none outline-none lg:fixed;
}

.nav {
  @apply box-border  grid grid-flow-col grid-cols-[auto,max-content] p-6;

  * {
    @apply m-auto;
  }

  .right {
    @apply grid grid-flow-col gap-4;
  }

  a {
    @apply opacity-60 transition-opacity hover:opacity-100;
  }
}
</style>
