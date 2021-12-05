<template>
  <main>
    <div>
      <NuxtLink
        to="/"
        class="
          inline-flex
          items-center
          justify-center
          absolute
          top-5
          left-7
          bg-gray-100
          dark:bg-purple-800
          text-color-yellow-fec260
          dark:text-white
          py-4
          px-4
          rounded
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </NuxtLink>
    </div>
    <div class="container">
      <div
        class="
          relative
          w-11/12
          sm:w-8/12
          md:w-10/12
          lg:w-8/12
          bg-gray-100
          dark:bg-gray-700
          mx-auto
          rounded
          pt-10
          px-8
          py-20
          mb-60
        "
      >
        <div class="mb-6">
          <h1
            class="
              font-semibold
              text-2xl
              sm:text-3xl
              md:text-4xl
              text-gray-700
              dark:text-gray-50
              text-center
            "
          >
            {{ post.title }}
          </h1>
        </div>
        <div>
          <p
            class="
              text-base
              sm:text-lg
              md:text-lg
              text-gray-600
              dark:text-gray-100
            "
          >
            {{ post.body }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'PostDetail',
  layout: 'Default',
  data() {
    return {
      post: [],
    }
  },
  async fetch() {
    this.post = await this.$axios.$get('posts/1' + this.$route.params.id)
  },
}
</script>