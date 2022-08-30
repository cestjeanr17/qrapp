<template>
  <div class="mx-auto">
    <div class="my-4">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="hero text-center">
            <div class="img">
            <vue-qr :text="this.url" :size="200"></vue-qr>
            </div>
            <h1 class="hero-title">Electronica Moderna Barinas</h1>
            <hr class="mx-auto" />
            <p class="hero-p mx-auto">
              Aplicacion Web diseñada para operaciones de registro, control y
              gestion de dospositivos electronicos destinados a reparacion, de
              nuestros clientes de la ciudad de Barinas.
            </p>
            <div class="hero-buttons">
              <router-link class="btn btn-primary mx-3 my-2" to="/about"
                ><span class="me-2">
                  <i class="bi bi-info-circle"></i>
                </span>
                <span> Mas informacion </span></router-link
              >
              <a class="btn btn-primary mx-3 my-2" href="https://drive.google.com/file/d/11bstGBBjkkNxw4dYxZVc8f_WDd9RaERH/view?usp=sharing" target="_blank">
                <span class="me-2">
                  <i class="bi bi-book"></i>
                </span>
                <span> Manual de Usuario </span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueQr from 'vue-qr/src/packages/vue-qr.vue'

export default {
  name: "",
  components: {vueQr},
  data() {
    return {
      url: null
    }
  },
  methods:{
    GenerateURL(){
    let fullUrl = window.location.origin + this.$route.path
    this.url = fullUrl
    console.log(this.url);
  }
  },
  created(){
    this.GenerateURL()
  }
};
</script>

<style scoped>
.qr {
  width: 200px;
}

.hero-title {
  font-size: 50px;
}

.hero-p {
  width: 400px;
  height: min-content;
  padding: 5px;
  text-align: center;
}
</style>
