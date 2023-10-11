<template>
  <div class="container">
    <div class="row">
      <loading v-if="isLoading"></loading>
      <div class="col-md-3" v-else>
        <card-post-info :post="post"></card-post-info>
      </div>
    </div>
    <router-link to="/" class="btn btn-danger m-1">DELETE</router-link>
    <router-link to="/" class="btn btn-success m-1">Edit</router-link>
  </div>
</template>

<script setup>
import axios from 'axios'
import {onMounted, ref} from "vue";
import Loading from "@/components/baseComponent/Loading.vue";
import {useRoute} from "vue-router";
import CardPostInfo from "@/components/CardPostInfo.vue";


const post = ref({});
const isLoading = ref(true);
const route = useRoute();

function getUserInfo() {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
      .then(function (response) {
        post.value = response.data;
        console.log(post.value)
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