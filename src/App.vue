<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-dark"
    v-if="$store.state.user"
  >
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="#">Store is not store</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/about"
              >About</router-link
            >
          </li>
        </ul>
        <button
          class="btn btn-outline-danger"
          @click="$store.dispatch('logout')"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
