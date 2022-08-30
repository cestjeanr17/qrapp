<template>
  <div class="row mt-5 text-center">
    <div class="col-lg-6 col-sm-6">
      <h1>Registros</h1>
    </div>

    <div class="col-lg-3 col-sm-3 my-1">
      <router-link to="/addreg" class="btn btn-small btn-primary"><small>Nuevo </small><i
          class="bi bi-file-earmark-plus"></i></router-link>
    </div>
    <div class="col-lg-3 col-sm-3 my-1">
      <button @click="exportJSON()" class="btn btn-small btn-success"><small>Descargar</small><i
          class="bi bi-file-earmark-excel"></i></button>
    </div>
  </div>

  <div class="row mt-3">
    <div class="col table-responsive">
      <table class="table table-hover table-sm">
        <thead class="">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Fecha</th>
            <th scope="col">Marca</th>
            <th scope="col">Condicion</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Telefono</th>
            <th scope="col">Correo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="equipo in equipos" :key="equipo.id">
            <th scope="row">{{ equipo.id }}</th>
            <td>{{ equipo.fecha }}</td>
            <td>{{ equipo.marca }}</td>
            <td>{{ equipo.condicion }}</td>
            <td>{{ equipo.c_nombre }}</td>
            <td>{{ equipo.c_apellido }}</td>
            <td>{{ equipo.c_tlf }}</td>
            <td>{{ equipo.c_email }}</td>
            <td>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button @click="router.push(`/inforeg/${equipo.id}`)" class="btn btn-primary" type="button">
                  <i class="bi bi-info-square"></i>
                </button>
                <button @click="router.push(`/editreg/${equipo.id}`)" class="btn btn-warning" type="button">
                  <i class="bi bi-pencil-square"></i>
                </button>
                <button @click="eliminarEquipo(equipo.id)" class="btn btn-danger" type="button">
                  <i class="bi bi-trash3"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot class="table-group-divider">
          <span></span>
        </tfoot>
      </table>
    </div>
  </div>

  <!-- <div class="row mt-3">
    <h1 class="text-center my-1">Nueva Tabla</h1>
    <div class="col table-responsive">
      <table id="mytable" class="table table-bordered table-hover table-sm my-2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Marca</th>
            <th>Condicion</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cedula</th>
            <th>Telefono</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody class="table-group-divider"></tbody>
        <tfoot class="table-group-divider">
          <span></span>
        </tfoot>
      </table>
    </div>

  </div> -->
</template>

<!-- <script setup>
//IMPORTS
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { db, collRef } from "../firebase";
import { onSnapshot, doc, deleteDoc } from "firebase/firestore";
import exportFromJSON from 'export-from-json'
//IMPORTS

const router = useRouter();
const equipos = ref([]);


//METHODS
//get
onMounted(() => {
  onSnapshot(collRef, (querySnapshot) => {
    const fbEquipos = [];
    querySnapshot.forEach((doc) => {
      const equipo = {
        id: doc.id,
        condicion: doc.data().condicion,
        marca: doc.data().marca,
        fecha: doc.data().fecha,
        c_nombre: doc.data().c_nombre,
        c_apellido: doc.data().c_apellido,
        c_tlf: doc.data().c_tlf,
        c_email: doc.data().c_email,
      };
      fbEquipos.push(equipo);
    });
    equipos.value = fbEquipos;
    console.log("Inventario mostrandose");
  });
});

//delete
const eliminarEquipo = (id) => {
  deleteDoc(doc(db, "equipos", id));
  console.log("Equipo eliminado");
}; -->
<!-- 
</script> -->

<script>
import { useRouter } from "vue-router";
import { db, collRef } from "../firebase";
import { onSnapshot, doc, deleteDoc } from "firebase/firestore";
import exportFromJSON from 'export-from-json';
import $ from 'jquery';
import router from "@/router";

export default {
  data() {
    return {
      router: useRouter(),
      equipos: [],

    }
  },
  methods: {
    getEquipos() {
      onSnapshot(collRef, (querySnapshot) => {
        const fbEquipos = [];
        querySnapshot.forEach((doc) => {
          const equipo = {
            id: doc.id,
            condicion: doc.data().condicion,
            marca: doc.data().marca,
            fecha: doc.data().fecha,
            c_nombre: doc.data().c_nombre,
            c_apellido: doc.data().c_apellido,
            c_tlf: doc.data().c_tlf,
            c_id: doc.data().c_id,
            c_email: doc.data().c_email,
          };
          fbEquipos.push(equipo);

        });
        this.equipos = fbEquipos;
        //NUEVATABLA
        // $('#mytable').DataTable({
        //   dom: 'Bfrtilp',
        //   buttons: [
        //     'copy', 'csv', 'excel', 'print'

        //   ],
        //   "language": {
        //     "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
        //   },
        //   data: fbEquipos,
        //   columns: [
        //     { data: 'id' },
        //     { data: 'fecha' },
        //     { data: 'marca' },
        //     { data: 'condicion' },
        //     { data: 'c_nombre' },
        //     { data: 'c_apellido' },
        //     { data: 'c_id' },
        //     { data: 'c_tlf' },
        //     { data: 'c_email' },
        //     {
        //       data: 'id',
        //       render: function (data) {
        //         return `<div class="btn-group" role="group" aria-label="Basic example">
        //         <button data-id="${data} "class="btn btn-primary" type="button" id="info">
        //           <i class="bi bi-info-square"></i>
        //         </button>
        //         <button  data-id="${data} "class="btn btn-warning" type="button" id="edit">
        //           <i class="bi bi-pencil-square"></i>
        //         </button>
        //         <button  data-id="${data} "class="btn btn-danger" type="button" id="delete">
        //           <i class="bi bi-trash3"></i>
        //         </button>
        //       </div>`
        //       }
        //     }

        //   ],
        // });
        // //info
        //     $('#mytable').on('click', '#info', function(){
        //       let id = $(this).data('id');
        //       let equipo = {id:id}
        //       console.log(equipo.id)
        //       router.push(`/inforeg/${equipo.id}`)
        //     })
        // // //edit
        //     $('#mytable').on('click', '#edit', function(){
        //       let id = $(this).data('id');
        //       let equipo = {id:id}
        //       console.log(equipo.id)
        //       router.push(`/editreg/${equipo.id}`)
        //     })
        // // //delete
        //     // $('#mytable').on('click', '#delete', function(){
        //     //   let id = $(this).data('id');
        //     //   eliminarEquipo(id)
        //     // })

        console.log("Inventario mostrandose");
      });
    },
    eliminarEquipo(id) {
      deleteDoc(doc(db, "equipos", id));
      console.log("Equipo eliminado");
    },
    exportJSON() {
      const data = this.equipos;
      const fileName = 'download'
      const exportType = exportFromJSON.types.csv
      exportFromJSON({ data, fileName, exportType })
    }
  },
  mounted() {
    this.getEquipos()
  }
}
</script>
