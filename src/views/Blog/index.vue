<template>
  <post-list></post-list>
  <pagination></pagination>
</template>

<script>
import Pagination from "@/components/Post/Pagination";
import PostList from "@/components/Post/PostList";

export default {
  name: "index",
  components: {
    PostList,
    Pagination
  }
}
</script>

<style scoped>

</style>