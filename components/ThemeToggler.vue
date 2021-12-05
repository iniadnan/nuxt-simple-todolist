<template>
    <button type="button"
        class="h-12 md:h-14 w-12 md:w-14 absolute top-5 right-7 bg-gray-100 dark:bg-purple-800 text-color-yellow-fec260 dark:text-white rounded-full overflow-hidden" @click="toggle">
        <!-- SUN -->
        <svg class="w-6 h-6 md:w-7 md:h-7 absolute top-1/2 dark:-top-10 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd" />
        </svg>
        <!-- MOON -->
        <svg class="w-6 h-6 md:w-7 md:h-7 absolute -bottom-10 dark:top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
    </button>
</template>

<script>
export default {
    name: "ThemeToggler",
    methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value === "light" ? "dark" : "light";
    }
  }
}
</script>