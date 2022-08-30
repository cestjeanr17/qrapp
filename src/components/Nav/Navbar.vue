<template>
  <div>
    <!-- navbar -->
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <div class="container-fluid">
        <!-- sidebar trigger -->
        <SidebarButton v-if="userAuth" />
        <!-- sidebar trigger -->

        <router-link class="navbar-brand fw-bold text-uppercase me-auto" to="/"
          >EMB</router-link
        >

        <div class="dropdown me-3">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-person-circle"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li v-if="!userAuth">
                  <router-link class="dropdown-item" to="/login"
                    >Iniciar Sesion</router-link
                  >
                </li>
                <li v-if="userAuth">
                  <button @click="logoutUser" class="dropdown-item">Cerrar Sesion</button>
                </li>
          </ul>
        </div>

        <!-- <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-person-circle"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li v-if="!userAuth">
                  <router-link class="dropdown-item" to="/login"
                    >Iniciar Sesion</router-link
                  >
                </li>
                <li v-if="userAuth">
                  <button class="dropdown-item">Cerrar Sesion</button>
                </li>
              </ul>
            </li>
          </ul>
        </div> -->
      </div>
    </nav>
    <!-- navbar  -->
    <Sidebar />
  </div>
</template>

<script>
import SidebarButton from "./SidebarButton.vue";
import Sidebar from "./Sidebar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { SidebarButton, Sidebar },
  methods:{
    ...mapActions(["logoutUser"])
  },
  computed: {
    ...mapGetters(["userAuth"]),
  },
};
</script>

<style scoped></style>
