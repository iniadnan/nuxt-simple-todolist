<template>
  <div id="app" class="bg-gray-50 dark:bg-gray-800 pt-28 sm:pt-32 md:pt-40">
    <ThemeToggler />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import ThemeToggler from '@/components/ThemeToggler.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Default',
  components: {
    ThemeToggler,
    Footer,
  }
}
</script>