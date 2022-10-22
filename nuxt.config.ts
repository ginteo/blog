// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/content'],

  content: {
    documentDriven: true,
    markdown: {
      mdc: true,
      toc: {
        depth: 4,
        searchDepth: 4
      }
    },
    highlight: {
      theme: 'material-darker',
      preload: ['scss', 'less', 'vue', 'sql', 'python']
    }
  }
})
