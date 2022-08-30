<template>
  <div>
    <Navbar/>
      <div class="container">
        <router-view />
      </div>
  </div>
</template>

<script>
import Navbar from "./components/Nav/Navbar.vue";
import { mapActions } from "vuex";

export default {
  components: {
    Navbar
},
  data() {
    return {};
  },
  methods: {
    ...mapActions(['loadLocalStorage']),
  },
  created(){
    this.loadLocalStorage()
  }
};
</script>

<style>


</style>