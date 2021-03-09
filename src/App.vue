<template>
  <header class="columns is-centered">
    <nav class="navbar column is-10">
      <ul class="navbar-menu has-background-primary-light">
        <div class="navbar-start">
          <li class="navbar-item"><router-link :to="{ name: 'home' }">Accueil</router-link></li>
          <li class="navbar-item"><router-link :to="{ name: 'blog' }">Blog</router-link></li>
        </div>
        <div class="navbar-end">
          <li v-if="!isConnected" class="navbar-item"><router-link :to="{ name: 'login' }">Se connecter</router-link></li>
          <li v-if="isConnected" class="navbar-item"><router-link :to="{ name: 'admin' }">Admin</router-link></li>
          <li v-if="isConnected" class="navbar-item"><a href="#" @click="logOut">Se déconnecter</a></li>
        </div>
      </ul>
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main>


</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'App',
  components: {
  },
  methods: {
    ...mapMutations([
        'logOut'
    ])
  },
  computed: {
    ...mapGetters([
        'isConnected'
    ])
  }
}
</script>

<style scoped>

</style>
