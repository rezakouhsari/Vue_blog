<template>

  <div class="card m-3">
    <router-link class="card-header" :to="{name:'userId',params:{id:user.id}}">Name : {{ user.name }}</router-link>
    <div class="card-body">Website : {{ user.website }}</div>
    <div class="card-body">Name : {{ user.email }}</div>
    <div class="card-footer">Name : {{ user.phone }}</div>
  </div>

</template>

<script setup>
defineProps({
  user: Object
})
</script>


<style scoped>

</style>