<template>
  <div class="container">
    <div class="row">
      <loading v-if="isLoading"></loading>
      <div class="col-md-3" v-else v-for="user in userdata" :key="user.id">
        <card-user-info :user="user"></card-user-info>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardUserInfo from "@/components/CardUserInfo.vue";
import axios from 'axios'
import {onMounted, ref} from "vue";
import Loading from "@/components/baseComponent/Loading.vue";
import {useRoute} from "vue-router";

const userdata = ref([]);
const isLoading = ref(true);

const route_id = useRoute();

defineProps({
  user: Object
})


function getUserInfo() {
  axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        userdata.value = response.data;
        route_id.value = response.data.id;
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