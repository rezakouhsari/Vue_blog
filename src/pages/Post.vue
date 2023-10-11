<template>

  <div class="container">
    <div class="row">
      <loading v-if="isLoading"></loading>
      <router-link to="/" class="btn btn-secondary m-5">Add Post</router-link>
      <div class="col-md-3" v-else v-for="post in posts" :key="post.id">
        <card-post-info :post="post"></card-post-info>
      </div>
    </div>
    <router-link to="/post" class="btn btn-danger">back</router-link>
  </div>

</template>

<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
import Loading from "@/components/baseComponent/Loading.vue";
import CardPostInfo from "@/components/CardPostInfo.vue";

const posts=ref([]);
const isLoading = ref(true);



function getUserInfo() {
  axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(function (response) {
        posts.value = response.data;
        isLoading.value = false;
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
}

onMounted(() => {
  getUserInfo()
})

</script>

<style scoped>

</style>