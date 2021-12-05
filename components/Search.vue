<template>
  <div class="container">
    <div class="w-11/12 sm:w-8/12 md:w-10/12 lg:w-8/12 mx-auto pb-7">
      <form>
        <div
          class="
            relative
            text-purple-500
            dark:text-gray-200 dark:hover:text-gray-50
          "
        >
          <input
            v-model="search"
            class="
              h-14
              w-full
              bg-gray-200
              dark:bg-gray-700
              text-base text-gray-700
              dark:text-gray-50
              rounded
              outline-none
              pl-4
              pr-14
            "
            type="text"
            placeholder="Search Schedule..."
            @keyup="writeOn"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 absolute top-1/2 right-4 transform -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
      return {
        search: ''
      }
    },
    methods: {
      writeOn() {
        this.$emit('keyup', this.search)
      }
    },
}
</script>