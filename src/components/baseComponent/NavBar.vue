<template>
  <nav class="navbar navbar-expand-sm bg-light">

    <div class="container-fluid">
      <!-- Links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/users">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/post">Post</router-link>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>