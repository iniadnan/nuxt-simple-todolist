<template>
  <div>
    <Search @keyup="writeOn" />
    <PostList :posts="filteredPost" />
    <div class="mb-20 flex items-center justify-center">
      <nuxt-link v-if="page > 1" :to="{ path: '/', query: { page: Number(page) - 1 }}" class="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-purple-700 text-gray-700 dark:text-gray-100 mr-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
</svg>
      </nuxt-link>
      <nuxt-link v-if="search === ''" :to="{ path: '/', query: { page: Number(page) + 1 }}" class="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-purple-700 text-gray-700 dark:text-gray-100 ml-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import PostList from '@/components/PostList.vue'
export default {
  components: {
    Search,
    PostList,
  },
  layout: 'Default',
  data() {
    return {
      allPost: [],
      filteredPost: [],
      search: '',
      page: 1,
      row: 3,
      start: null
    }
  },
  async fetch() {
    const getQuery = this.$route.query
    if(Object.keys(getQuery).length === 0) {
      this.allPost = await this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=${this.row}`)
      this.filteredPost = this.allPost
    } else {
      this.page = getQuery.page;
      this.start = (this.page > 1) ? (this.page * this.row) - this.row : 0;
      this.allPost = await this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/?_start=${this.start}&_limit=${this.row}`)
      this.filteredPost = this.allPost
    }
  },
  watch: {
    '$route.query': '$fetch'
  },
  methods: {
    writeOn(value) {
      this.search = value;
      const val = value.toLowerCase()
      const posts = this.allPost;
      if(val !== '') {
        const filteredCharaters = posts.filter((post) => {
          return (
            post.title.toLowerCase().includes(val) ||
            post.body.toLowerCase().includes(val)
          );
        })
        this.filteredPost = filteredCharaters;
      } else {
        this.filteredPost = posts;
      }
    }
  },
}
</script>