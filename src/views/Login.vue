<template>
  <div class="mx-auto">
    <div class="my-4">
      <div class="row ">
        <div class="col-md-6 offset-md-3 text-center">
          <h1>Inicia Sesion</h1>
          <div class="mx-auto login">
            <form @submit.prevent="procesarForm">
              <div class="form-group mb-3">
                <input
                  class="form-control"
                  type="email"
                  placeholder="Correo Electronico"
                  v-model.trim="email"
                />
              </div>

              <div class="form-group my-3">
                <input
                  class="form-control"
                  type="password"
                  placeholder="Contraseña"
                  v-model.trim="password"
                />
              </div>

              <button type="submit" class="btn btn-primary w-100 my-2" :disabled="bloquear">
                Iniciar Sesion
              </button>
              <!-- <button type="button" class="btn btn-success w-100 mt-2" disabled>
                <span class="me-2">
                  <i class="bi bi-google"></i>
                </span>
                <span>Google</span>
              </button> -->
            </form>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods:{
    ...mapActions(['loginUser']),
    procesarForm(){
      this.loginUser({email: this.email, password: this.password})
      this.email= '',
      this.password= ''
    }
  },
  computed:{
    bloquear(){
      if(!this.email.includes('@')){
        return true
      }
      if (this.password.length > 5) {
        return false
      }
      return true
    }

  }
};
</script>

<style scoped>
.login {
  width: 350px;
  height: min-content;
  padding: 0px 20px 20px 20px;
  border-radius: 12px;
}

h1 {
  font-size: 50px;
}
</style>
