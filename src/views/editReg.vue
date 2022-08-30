<template>
  <div class="mx-auto">
    <div class="my-4">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <h1 class="text-center">Editar Registro</h1>
          <hr />
          <form>
            <span class="fw-bold text-uppercase small text-secondary text-start"
              >Datos del Equipo</span
            >
            <div class="row">
              <div class="col-sm-3">
                <label class="my-1">Condicion:</label>
                <select class="form-select" required v-model="equipoInfo.condicion">
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
                  v-model="equipoInfo.marca"
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
                  v-model="equipoInfo.modelo"
                />
              </div>
              <div class="col-sm-3">
                <label class="my-1">Serial:</label>
                <input
                  type="text"
                  class="form-control mb-2"
                  minlength="5"
                  maxlength="10"
                  pattern="[A-Za-z0-9]{5,40}"
                  required
                  v-model="equipoInfo.serial"
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
                  v-model="equipoInfo.descripcion"
                />
              </div>

              <div class="col-sm-6 ms-1">
                <div class="form-check">
                  <input
                    id="checkbox1"
                    type="checkbox"
                    class="form-check-input"
                    v-model="equipoInfo.history"
                  />
                  <label for="checkbox1" class="form-check-label"
                    >Ya ha sido reparado</label
                  >
                </div>
              </div>
            </div>

            <span class="fw-bold text-uppercase small text-secondary text-start"
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
                  v-model="equipoInfo.c_nombre"
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
                  v-model="equipoInfo.c_apellido"
                />
              </div>

              <div class="col-sm-4">
                <label class="my-1">C.I</label>
                <input
                  type="text"
                  placeholder=""
                  class="form-control mb-2"
                  minlength="7"
                  maxlength="8"
                  pattern="[0-9]"
                  required
                  v-model="equipoInfo.c_id"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <label class="my-1">Telefono</label>
                <input
                  type="text"
                  class="form-control mb-2"
                  minlength="5"
                  maxlength="11"
                  pattern="[0-9]"
                  required
                  v-model="equipoInfo.c_tlf"
                />
              </div>

              <div class="col-sm-4">
                <label class="my-1">Correo</label>
                <input
                  type="email"
                  class="form-control mb-2"
                  minlength="5"
                  maxlength="30"
                  required
                  v-model="equipoInfo.c_email"
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
                  v-model="equipoInfo.c_address"
                />
              </div>
            </div>

            <button
              :disabled="bloquear"
              @click.prevent="updateEquipo()"
              type="submit"
              class="btn btn-success my-1 mx-1"
            >
              <span class="me-2">
                <i class="bi bi-check-square"></i>
              </span>
              <span>Actualizar</span>
            </button>

          </form>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default {
  data(){
    return{
      selectedEquipo: {},
      equipoID: null,
      docRef: null,
      equipoInfo: {
        condicion: null,
        marca: null,
        serial: null,
        modelo: null,
        descripcion: null,
        history: null,
        c_nombre: null,
        c_apellido: null,
        c_id: null,
        c_email: null,
        c_tlf: null,
        c_address: null, 
      }
      
    }
  },
  methods:{
    async getEquipo(){
      let equipoRef = doc(db, "equipos", this.equipoID);
      this.docRef = equipoRef;
      let equipo =  await getDoc(this.docRef);
      console.log(equipo.data());
      let equipoData = equipo.data();
      this.equipoInfo.condicion = equipoData.condicion;
      this.equipoInfo.descripcion = equipoData.descripcion;
      this.equipoInfo.marca = equipoData.marca;
      this.equipoInfo.serial = equipoData.serial;
      this.equipoInfo.modelo = equipoData.modelo;
      this.equipoInfo.descripcion = equipoData.descripcion;
      this.equipoInfo.history = equipoData.history;
      this.equipoInfo.c_nombre = equipoData.c_nombre;
      this.equipoInfo.c_apellido = equipoData.c_apellido;
      this.equipoInfo.c_id = equipoData.c_id;
      this.equipoInfo.c_email = equipoData.c_email;
      this.equipoInfo.c_tlf = equipoData.c_tlf;
      this.equipoInfo.c_address = equipoData.c_address;
    },    
    
    async updateEquipo(){
      let stringFullRegEx = /[A-Za-z0-9]/g;
      let stringAlfaRegEx = /[A-Za-z]/g;
      let specialRegEx = /[<>%/$]/g;
      let numRegEx = /[0-9]/g;
      let emailRegEx = /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/;
      //NULL
      if (this.equipoInfo.condicion === null) {
        alert("ERROR. Complete correctamente Formulario.");
        return;
      } else if (this.equipoInfo.descripcion === null) {
        alert("ERROR. Complete correctamente Formulario.");
        return;
      } else if (this.equipoInfo.modelo === null) {
        alert("ERROR. Complete correctamente Formulario.");
        return;
      } else if (this.equipoInfo.serial === null) {
        alert("ERROR. Complete correctamente Formulario.");
        return;
      } else if (this.equipoInfo.marca === null) {
        alert("ERROR. Complete correctamente Formulario.");
        return;
      } else if (this.equipoInfo.c_nombre === null) {
        alert("ERROR. Complete correctamente Formulario.");
        return;
      } else if (this.equipoInfo.c_apellido === null) {
        alert("ERROR. Complete correctamente Formulario.");
        return;
      } else if (this.equipoInfo.c_id === null) {
        alert("ERROR. Complete correctamente Formulario.");
        return;
      } else if (this.equipoInfo.c_tlf === null) {
        alert("ERROR. Complete correctamente Formulario.");
        return;
      } else if (this.equipoInfo.c_email === null) {
        alert("ERROR. Complete correctamente Formulario.");
        return;
      } 
      //LENGTH
      else if (this.equipoInfo.descripcion.length <= 4) {
        alert("Input 'Descripcion' erroneo. Ingrese entre 5 a 50 caracteres");
        return;
      } else if (this.equipoInfo.modelo.length <= 4) {
        alert("Input 'Modelo' erroneo. Ingrese entre 5 a 15 caracteres");
        return;
      } else if (this.equipoInfo.serial.length <= 4) {
        alert("Input 'Serial' erroneo. Ingrese entre 5 a 10 caracteres");
        return;
      } else if (this.equipoInfo.marca.length <= 4) {
        alert("Input 'Marca' erroneo. Ingrese entre 5 a 15 caracteres");
        return;
      } else if (this.equipoInfo.c_nombre.length <= 4) {
        alert("Input 'Nombre' erroneo. Ingrese entre 5 a 10 caracteres");
        return;
      } else if (this.equipoInfo.c_apellido.length <= 4) {
        alert("Input 'Apellido' erroneo. Ingrese entre 5 a 10 caracteres");
        return;
      } else if (this.equipoInfo.c_id.length <= 4) {
        alert("Input 'C.I' erroneo. Ingrese entre 5 a 10 caracteres");
        return;
      } else if (this.equipoInfo.c_tlf.length <= 4) {
        alert("Input 'Telefono' erroneo. Ingrese entre 5 a 10 caracteres");
        return;
      } else if (this.equipoInfo.c_email.length <= 4) {
        alert("Input 'Correo' erroneo. Ingrese entre 5 a 30 caracteres");
        return;
      } else if (this.equipoInfo.c_address.length <= 4) {
        alert("Input 'Direccion' erroneo. Ingrese entre 5 a 50 caracteres");
        return;
      } 
      //EXPRESIONES REGULARES
      else if (
        stringFullRegEx.test(this.equipoInfo.descripcion) != true ||
        specialRegEx.test(this.equipoInfo.descripcion) != false
      ) {
        alert("Input 'Descripcion'. No debe ingresar caracteres especiales");
        return;
      } else if (
        stringFullRegEx.test(this.equipoInfo.marca) != true ||
        specialRegEx.test(this.equipoInfo.marca) != false
      ) {
        alert("Input 'Marca'. No debe ingresar caracteres especiales");
        return;
      } else if (
        stringAlfaRegEx.test(this.equipoInfo.c_nombre) != true ||
        specialRegEx.test(this.equipoInfo.c_nombre) != false
      ) {
        alert("Input 'Nombre'. No debe ingresar numeros");
        return;
      } else if (
        stringAlfaRegEx.test(this.equipoInfo.c_apellido) != true ||
        specialRegEx.test(this.equipoInfo.c_apellido) != false
      ) {
        alert("Input 'ApellIdo'. No debe ingresar caracteres numeros");
        return;
      } else if (
        numRegEx.test(this.equipoInfo.c_tlf) != true ||
        stringAlfaRegEx.test(this.equipoInfo.c_tlf) != false
      ) {
        alert("Input 'Telefono'. No debe ingresar caracteres alfabeticos");
        return;
      } else if (
        numRegEx.test(this.equipoInfo.c_id) != true ||
        stringAlfaRegEx.test(this.equipoInfo.c_id) != false
      ) {
        alert("Input 'C.I'. No debe ingresar caracteres alfabeticos");
        return;
      } else if (
        emailRegEx.test(this.equipoInfo.c_email) != true
      ) {
        alert("Input 'Correo'. Debe ingresar un formato de correo valido");
        return;
      }else{
        await updateDoc(this.docRef, this.equipoInfo);
      alert(`El equipo con el ID "${this.equipoID}" se ha actualizado exitosamente`);
      this.$router.push("/viewreg")
      }


      
    }
  },
  computed: {
    bloquear() {
      return this.equipoInfo.condicion === null
        ? true
        : this.equipoInfo.condicion === ""
        ? true
        : this.equipoInfo.estado === null
        ? true
        : this.equipoInfo.serial === null
        ? true
        : this.equipoInfo.serial === ""
        ? true
        : this.equipoInfo.modelo === null
        ? true
        : this.equipoInfo.modelo === ""
        ? true
        : this.equipoInfo.marca === null
        ? true
        : this.equipoInfo.marca === ""
        ? true
        : this.equipoInfo.descripcion === null
        ? true
        : this.equipoInfo.descripcion === ""
        ? true
        : this.equipoInfo.c_apellido === null
        ? true
        : this.equipoInfo.c_apellido === ""
        ? true
        : this.equipoInfo.c_nombre === null
        ? true
        : this.equipoInfo.c_nombre === ""
        ? true
        : this.equipoInfo.c_id === null
        ? true
        : this.equipoInfo.c_id === ""
        ? true
        : this.equipoInfo.c_email === null
        ? true
        : this.equipoInfo.c_email === ""
        ? true
        : this.equipoInfo.c_tlf === null
        ? true
        : this.equipoInfo.c_tlf === ""
        ? true
        : this.equipoInfo.c_address === null
        ? true
        : this.equipoInfo.c_address === ""
        ? true
        : false
    },
  },
  

  created(){
    let equipoID = this.$route.params.id
    this.equipoID = equipoID;
    this.getEquipo();
  },

}
</script>