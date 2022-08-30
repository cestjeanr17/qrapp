<template>
  <div class="mx-auto">
    <div class="my-4">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <h1 class="text-center">Nuevo Registro</h1>
          <hr />
          <form>
            <span class="fw-bold text-uppercase text-primary text-start"
              >Datos del Equipo</span
            >
            <div class="row">
              <div class="col-sm-3">
                <label class="my-1">Condicion:</label>
                <select class="form-select" required v-model="equipo.condicion">
                  <option value="">Seleccione..</option>
                  <option value="Operativo">Operativo</option>
                  <option value="Fallando">Fallando</option>
                  <option value="Inoperativo">Inoperativo</option>
                </select>
              </div>

              <div class="col-sm-3">
                <label class="my-1">Marca:</label>
                <input
                  type="text"
                  class="form-control mb-2"
                  minlength="5"
                  maxlength="15"
                  required
                  v-model="equipo.marca"
                />
                <div class="invalid-feedback">Ingrese una marca</div>
              </div>
              <div class="col-sm-3">
                <label class="my-1">Modelo:</label>
                <input
                  type="text"
                  class="form-control mb-2"
                  minlength="5"
                  maxlength="15"
                  required
                  v-model="equipo.modelo"
                />
              </div>
              <div class="col-sm-3">
                <label class="my-1">Serial:</label>
                <input
                  type="text"
                  class="form-control mb-2"
                  minlength="5"
                  maxlength="10"
                  pattern="[A-Za-z0-9]{5,10}"
                  required
                  v-model="equipo.serial"
                />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-sm-6">
                <label class="my-1">Descripcion:</label>
                <input
                  type="text"
                  placeholder="Ingrese aca informacion adicional"
                  class="form-control mb-2"
                  minlength="5"
                  maxlength="50"
                  pattern="[A-Za-z]"
                  required
                  v-model="equipo.descripcion"
                />
              </div>

              <div class="col-sm-3">
                <label class="my-1"> Fecha</label>
                <input type="date" name="" id="" class="form-control" v-model="equipo.fecha" required>
              </div>

              <div class="col-sm-6 ms-1">
                <div class="form-check">
                  <input
                    id="checkbox1"
                    type="checkbox"
                    class="form-check-input"
                    v-model="equipo.history"
                  />
                  <label for="checkbox1" class="form-check-label"
                    >Ya ha sido reparado</label
                  >
                </div>
              </div>
            </div>

            <span class="fw-bold text-uppercase text-start text-primary"
              >Datos del Cliente</span
            >
            <div class="row">
              <div class="col-sm-4">
                <label class="my-1">Nombre</label>
                <input
                  type="text"
                  class="form-control mb-2"
                  minlength="5"
                  maxlength="20"
                  pattern="[A-Za-z]"
                  required
                  v-model="equipo.c_nombre"
                />
              </div>

              <div class="col-sm-4">
                <label class="my-1">Apellido</label>
                <input
                  type="text"
                  class="form-control mb-2"
                  minlength="5"
                  maxlength="20"
                  pattern="[A-Za-z]"
                  required
                  v-model="equipo.c_apellido"
                />
              </div>

              <div class="col-sm-4">
                <label class="my-1">C.I</label>
                <input
                  type="text"
                  placeholder="(0-9)"
                  class="form-control mb-2"
                  minlength="7"
                  maxlength="8"
                  pattern="[0-9]"
                  required
                  v-model="equipo.c_id"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <label class="my-1">Telefono</label>
                <input
                  type="text"
                  placeholder="04121234567"
                  class="form-control mb-2"
                  minlength="11"
                  maxlength="11"
                  pattern="[0-9]"
                  required
                  v-model="equipo.c_tlf"
                />
              </div>

              <div class="col-sm-4">
                <label class="my-1">Correo</label>
                <input
                  type="email"
                  placeholder="ejemplo@correo.com"
                  class="form-control mb-2"
                  minlength="5"
                  maxlength="30"
                  required
                  v-model="equipo.c_email"
                />
              </div>

              <div class="col-sm-4">
                <label class="my-1">Direccion</label>
                <input
                  type="text"
                  placeholder=""
                  class="form-control mb-2"
                  minlength="5"
                  maxlength="50"
                  pattern="[A-Za-z]"
                  required
                  v-model="equipo.c_address"
                />
              </div>
            </div>

            <button
              :disabled="bloquear" @click.prevent="procesarForm()"
              type="submit"
              class="btn btn-primary my-1 mx-1"
            >
              <span class="me-2">
                <i class="bi bi-check-square"></i>
              </span>
              <span>Procesar</span>
            </button>

            <button :disabled="bloquear" @click.prevent="limpiarCampos()" type="button" class="btn btn-warning my-1 mx-1">
              <span class="me-2">
                <i class="bi bi-trash"></i>
              </span>
              <span>Limpiar</span>
            </button>
          </form>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addDoc } from "firebase/firestore";
import { collRef } from "../firebase";
// import { router } from "vue";

export default {
  data() {
    return {
      equipos: [],
      equipo: {
        condicion: null,
        marca: null,
        serial: null,
        modelo: null,
        descripcion: null,
        history: null,
        fecha:null,
        c_nombre: null,
        c_apellido: null,
        c_id: null,
        c_email: null,
        c_tlf: null,
        c_address: null,
      },
    };
  },
  //TODO agregar validacion a formularios. Detalle importante
  methods: {
    //CREAR EQUIPO
    async procesarForm() {
      let stringFullRegEx = /[A-Za-z0-9]/g;
      let stringAlfaRegEx = /[A-Za-z]/g;
      let specialRegEx = /[<>%/$]/g;
      let numRegEx = /[0-9]/g;
      let emailRegEx = /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/;
      //NULL
      if (this.equipo.condicion === null) {
        alert("ERROR. Seleccione la condicion del equipo.");
        return;
      } else if (this.equipo.descripcion === null) {
        alert("ERROR. Ingrese una pequeña descripcion.");
        return;
      } else if (this.equipo.modelo === null) {
        alert("ERROR. Ingrese modelo del equipo.");
        return;
      } else if (this.equipo.serial === null) {
        alert("ERROR. Ingrese serial del equipo.");
        return;
      } else if (this.equipo.marca === null) {
        alert("ERROR. Ingrese marca del equipo.");
        return;
      } else if (this.equipo.c_nombre === null) {
        alert("ERROR. Ingrese nombre del cliente.");
        return;
      } else if (this.equipo.c_apellido === null) {
        alert("ERROR. Ingrese apellido del cliente.");
        return;
      } else if (this.equipo.c_id === null) {
        alert("ERROR. ID del cliente no puede ser nulo.");
        return;
      } else if (this.equipo.c_tlf === null) {
        alert("ERROR. Agregue telefono de cliente.");
        return;
      } else if (this.equipo.c_email === null) {
        alert("ERROR. email del cliente no puede ser nulo.");
        return;
      } else if (this.equipo.fecha === null){
        alert("ERROR. Fecha no puede ser nula")
      }
      //LENGTH
      else if (this.equipo.descripcion.length <= 4) {
        alert("Input 'Descripcion' erroneo. Ingrese entre 5 a 50 caracteres");
        return;
      } else if (this.equipo.modelo.length <= 4) {
        alert("Input 'Modelo' erroneo. Ingrese entre 5 a 15 caracteres");
        return;
      } else if (this.equipo.serial.length <= 4) {
        alert("Input 'Serial' erroneo. Ingrese entre 5 a 10 caracteres");
        return;
      } else if (this.equipo.marca.length <= 4) {
        alert("Input 'Marca' erroneo. Ingrese entre 5 a 15 caracteres");
        return;
      } else if (this.equipo.c_nombre.length <= 4) {
        alert("Input 'Nombre' erroneo. Ingrese entre 5 a 10 caracteres");
        return;
      } else if (this.equipo.c_apellido.length <= 4) {
        alert("Input 'Apellido' erroneo. Ingrese entre 5 a 10 caracteres");
        return;
      } else if (this.equipo.c_id.length <= 4) {
        alert("Input 'C.I' erroneo. Ingrese entre 5 a 10 caracteres");
        return;
      } else if (this.equipo.c_tlf.length <= 4) {
        alert("Input 'Telefono' erroneo. Ingrese entre 5 a 10 caracteres");
        return;
      } else if (this.equipo.c_email.length <= 4) {
        alert("Input 'Correo' erroneo. Ingrese entre 5 a 30 caracteres");
        return;
      } else if (this.equipo.c_address.length <= 4) {
        alert("Input 'Direccion' erroneo. Ingrese entre 5 a 50 caracteres");
        return;
      } 
      //EXPRESIONES REGULARES
      else if (
        stringFullRegEx.test(this.equipo.descripcion) != true ||
        specialRegEx.test(this.equipo.descripcion) != false
      ) {
        alert("Input 'Descripcion'. No debe ingresar caracteres especiales");
        return;
      } else if (
        stringFullRegEx.test(this.equipo.marca) != true ||
        specialRegEx.test(this.equipo.marca) != false
      ) {
        alert("Input 'Marca'. No debe ingresar caracteres especiales");
        return;
      } else if (
        stringAlfaRegEx.test(this.equipo.c_nombre) != true ||
        specialRegEx.test(this.equipo.c_nombre) != false
      ) {
        alert("Input 'Nombre'. No debe ingresar numeros");
        return;
      } else if (
        stringAlfaRegEx.test(this.equipo.c_apellido) != true ||
        specialRegEx.test(this.equipo.c_apellido) != false
      ) {
        alert("Input 'ApellIdo'. No debe ingresar caracteres numeros");
        return;
      } else if (
        numRegEx.test(this.equipo.c_tlf) != true ||
        stringAlfaRegEx.test(this.equipo.c_tlf) != false
      ) {
        alert("Input 'Telefono'. No debe ingresar caracteres alfabeticos");
        return;
      } else if (
        numRegEx.test(this.equipo.c_id) != true ||
        stringAlfaRegEx.test(this.equipo.c_id) != false
      ) {
        alert("Input 'C.I'. No debe ingresar caracteres alfabeticos");
        return;
      } else if (
        emailRegEx.test(this.equipo.c_email) != true
      ) {
        alert("Input 'Correo'. Debe ingresar un formato de correo valido");
        return;
      } else {
        console.log("Creando Equipo"); // eslint-disable-next-line
        await addDoc(collRef, {
          descripcion: this.equipo.descripcion,
          condicion: this.equipo.condicion,
          serial: this.equipo.serial,
          modelo: this.equipo.modelo,
          marca: this.equipo.marca,
          history: this.equipo.history,
          fecha: this.equipo.fecha,
          c_nombre: this.equipo.c_nombre,
          c_apellido: this.equipo.c_apellido,
          c_id: this.equipo.c_id,
          c_tlf: this.equipo.c_tlf,
          c_email: this.equipo.c_email,
          c_address: this.equipo.c_address,
        })
          .then(() => {
            console.log("Equipo Creado");
            alert("Equipo Creado. Chequea en Inventario");
            this.equipo.descripcion = null;
            this.equipo.condicion = null;
            this.equipo.serial = null;
            this.equipo.modelo = null;
            this.equipo.marca = null;
            this.equipo.history = null;
            this.equipo.fecha = null;
            this.equipo.c_nombre = null;
            this.equipo.c_apellido = null;
            this.equipo.c_id = null;
            this.equipo.c_tlf = null;
            this.equipo.c_email = null;
            this.equipo.c_address = null;
          })
          .catch(function (error) {
            console.error("Error", error);
          });
      }
    },

    limpiarCampos() {
      this.equipo.descripcion = null;
      this.equipo.condicion = null;
      this.equipo.serial = null;
      this.equipo.modelo = null;
      this.equipo.modelo = null;
      this.equipo.marca = null;
      this.equipo.history = null;
      this.equipo.fecha = null;
      this.equipo.c_nombre = null;
      this.equipo.c_apellido = null;
      this.equipo.c_id = null;
      this.equipo.c_tlf = null;
      this.equipo.c_email = null;
      this.equipo.c_address = null;
      console.log("Campos de formulario limpios");
    },
  },
  computed: {
    bloquear() {
      return this.equipo.condicion === null
        ? true
        : this.equipo.condicion === ""
        ? true
        : this.equipo.estado === null
        ? true
        : this.equipo.serial === null
        ? true
        : this.equipo.serial === ""
        ? true
        : this.equipo.modelo === null
        ? true
        : this.equipo.modelo === ""
        ? true
        : this.equipo.marca === null
        ? true
        : this.equipo.marca === ""
        ? true
        : this.equipo.descripcion === null
        ? true
        : this.equipo.descripcion === ""
        ? true
        : this.equipo.c_apellido === null
        ? true
        : this.equipo.c_apellido === ""
        ? true
        : this.equipo.c_nombre === null
        ? true
        : this.equipo.c_nombre === ""
        ? true
        : this.equipo.c_id === null
        ? true
        : this.equipo.c_id === ""
        ? true
        : this.equipo.c_email === null
        ? true
        : this.equipo.c_email === ""
        ? true
        : this.equipo.c_tlf === null
        ? true
        : this.equipo.c_tlf === ""
        ? true
        : this.equipo.c_address === null
        ? true
        : this.equipo.c_address === ""
        ? true
        : false
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 50px;
}
</style>
