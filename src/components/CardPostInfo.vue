<template>

  <div class="card m-3">
    <router-link class="card-header" :to="{name:'postId',params:{id:post.id}}">Name : {{ post.id }}</router-link>
    <div class="card-body">Title : {{ post.title }}</div>
    <div class="card-body">Body : {{ post.body }}</div>
  </div>

</template>

<script setup>
defineProps({
  post: Object
})
</script>


<style scoped>

</style>