<template>
  <div class="container">
    <div class="row">
      <loading v-if="isLoading"></loading>
      <div class="col-md-3" v-else>
          <card-user-info :user="user"></card-user-info>
      </div>
    </div>
    <router-link to="/users" class="btn btn-danger">back</router-link>
  </div>
</template>

<script setup>
import axios from 'axios'
import {onMounted, ref} from "vue";
import Loading from "@/components/baseComponent/Loading.vue";
import {useRoute} from "vue-router";
import CardUserInfo from "@/components/CardUserInfo.vue";
const user = ref({});
const isLoading = ref(true);
const route = useRoute();


function getUserInfo() {
  axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
      .then(function (response) {
        user.value = response.data;
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