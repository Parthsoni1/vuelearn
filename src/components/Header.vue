<template>
  <div id="app">
    <div class="container">
      <ul class="nav nav-pills" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="pill">
            <router-link to="/"> Home </router-link></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link active" data-toggle="pill"
            ><router-link to="/login">Login</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" data-toggle="pill"
            ><router-link to="/register">Register</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" data-toggle="pill"
            ><router-link to="/secure">Secure</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" data-toggle="pill">
            <router-link to="/about">About</router-link
            ><span v-if="isLoggedIn"> </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" data-toggle="pill">
            <router-link to="/content">Content</router-link
            ><span v-if="isLoggedIn"> </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" data-toggle="pill">
            <router-link to="/veeValidat">VeeValidat</router-link
            ><span v-if="isLoggedIn"> </span>
          </a>
        </li>
                <li class="nav-item">
          <a class="nav-link active" data-toggle="pill">
            <router-link to="/agGrid">Ag Grid</router-link
            ><span v-if="isLoggedIn"> </span>
          </a>
        </li>
        <a @click="logout">Logout</a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn : false
    }
  },
      methods:{
        logout() {
          console.log();
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #ffffff;
}
</style>
