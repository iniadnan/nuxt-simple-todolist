<template>
  <main>
    <div class="container">
      <div class="w-11/12 sm:w-8/12 md:w-10/12 lg:w-8/12 mx-auto pb-5">
        <ul class="w-full">
          <li
            v-for="(post, index) in posts"
            :key="index"
            class="
              w-full
              flex flex-wrap
              bg-gray-200
              dark:bg-gray-700
              rounded
              shadow
              py-6
              px-10
              mb-4
            "
          >
            <div class="w-full flex items-center mb-5">
              <h2
                class="
                  w-11/12
                  font-semibold
                  text-2xl text-gray-700
                  dark:text-gray-100
                "
              >
                <NuxtLink :to="'/post/' + post.id">{{
                  post.title
                }} - {{ post.id }}</NuxtLink>
              </h2>
            </div>
            <div>
              <p class="w-full md:w-4/5 font-normal text-base text-gray-600 dark:text-gray-100">{{ post.body }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    posts: {
      type: Array,
      default: null,
    },
  },
}
</script>