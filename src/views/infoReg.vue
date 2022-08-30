<template>
<div id="content">
  <div class="row mt-5">
    <div class="col text-center">
      <h1>Info del Equipo:</h1>
      <h3>{{ $route.params.id }}</h3>
    </div>
  </div>

  <hr />

  <div class="row">
    <div class="col-sm-4">
      <span class="fw-bold text-uppercase text-primary text-start"
        >Datos del Equipo</span
      >

      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{equipoInfo.marca}}</li>
        <li class="list-group-item">{{equipoInfo.modelo}}</li>
        <li class="list-group-item">{{equipoInfo.serial}}</li>
        <li class="list-group-item">{{equipoInfo.condicion}}</li>
        <li class="list-group-item">¿Reparado Anteriormente? {{equipoInfo.history}}</li>
        <li class="list-group-item">Fecha de Ingreso: {{equipoInfo.fecha}}</li>
      </ul>
    </div>

    <div class="col-sm-4">
      <span class="fw-bold text-uppercase text-primary text-start"
        >Datos del Cliente</span
      >

      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{equipoInfo.c_nombre}}</li>
        <li class="list-group-item">{{equipoInfo.c_apellido}}</li>
        <li class="list-group-item">{{equipoInfo.c_id}}</li>
        <li class="list-group-item">{{equipoInfo.c_tlf}}</li>
        <li class="list-group-item">{{equipoInfo.c_email}}</li>
        <li class="list-group-item">{{equipoInfo.c_address}}</li>
      </ul>
    </div>


    <div class="col-sm-4">
        <span class="fw-bold text-uppercase text-primary text-start"
        >Codigo QR</span>
        <div class="img" id="qr">
            <vue-qr :text="this.url" :size="200"></vue-qr>
        </div>
        <button @click="descargarPDF()" class="btn btn-small btn-danger mx-5">
          <small>Descargar</small> <i class="bi bi-filetype-pdf"></i>
        </button>
    </div>
  </div>
</div>
  
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
// import router from "@/router";
import vueQr from 'vue-qr/src/packages/vue-qr.vue';
import jspdf from "jspdf";
import html2canvas from "html2canvas"


export default {
  components: {
    vueQr,
  },
  data() {
    return {
      url:null,
      equipoID: this.$route.params.id,
      docRef: null,
      equipoInfo: {
        condicion: null,
        marca: null,
        serial: null,
        modelo: null,
        descripcion: null,
        history: null,
        fecha: null,
        c_nombre: null,
        c_apellido: null,
        c_id: null,
        c_email: null,
        c_tlf: null,
        c_address: null,
      },
    };
  },
  methods: {
    async getRegInfo() {
      let regRef = doc(db, "equipos", this.equipoID);
      this.docRef = regRef;
      let equipo = await getDoc(this.docRef);
      console.log(equipo.data());
      let equipoData = equipo.data();
      this.equipoInfo.descripcion = equipoData.descripcion;
      this.equipoInfo.condicion = equipoData.condicion;
      this.equipoInfo.modelo = equipoData.modelo;
      this.equipoInfo.serial = equipoData.serial;
      this.equipoInfo.marca = equipoData.marca;
      this.equipoInfo.history = equipoData.history;
      this.equipoInfo.fecha = equipoData.fecha;
      this.equipoInfo.c_apellido = equipoData.c_apellido;
      this.equipoInfo.c_id = equipoData.c_id;
      this.equipoInfo.c_tlf = equipoData.c_tlf;
      this.equipoInfo.c_email = equipoData.c_email;
      this.equipoInfo.c_address = equipoData.c_address;
      this.equipoInfo.c_nombre = equipoData.c_nombre

    },
    GenerateURL(){
    let fullUrl = window.location.origin + this.$route.path
    this.url = fullUrl
    console.log(fullUrl);
  },
  descargarPDF(){
    window.html2canvas = html2canvas;
    let doc = new jspdf('p', 'pt', [205, 205]);

    doc.html(document.querySelector("#qr"), {
      callback: function(pdf){
        pdf.save("Registro.pdf")
      }
    })
    
  }

  },
  created() {
    this.getRegInfo();
    this.GenerateURL();
  },
};
</script>
