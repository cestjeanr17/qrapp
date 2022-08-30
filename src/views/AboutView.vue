<template>
  <div class="container text-center">
      <div class="container">
      <div class="row d-flex justify-content-evenly mx-auto text-center">
        <div class="col">
          <h1 class="text-center fs-4 fw-bold my-3">
            Aplicacion Web para el Almacenamiento e Identificacion de Objetos Mediante Codigo QR
          </h1>
          <hr>
          <div class="accordion my-4" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  About
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p class="">
                    Aplicacion Web para el almacenamiento e identificacion de objetos a traves de codigo Qr. Destinada para la agilizacion del proceso de registro, gestion y control de equipos electronicos a ser reparados por la empresa Electronica Moderna Barinas, con la caracteristica unica de asignacion de codigo QR para cada registro y su acceso a traves del mismo.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Autor
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p class="">
                    Aplicacion Web diseñada y desarrollada por el bachiller Jean Ramirez
                    perteneciente a la casa de estudios I.U.P.S.M. Barinas, como
                    requisito obligatorio para la aprobacion de Trabajo de Grado y obtencion del titulo Ingeniero en Sistemas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="hero-img mx-auto text-center my-4">
            <img src="../assets/iupsm.png" class="about-img" />
          </div>
          <a href="http://www.psmbarinas.edu.ve/" class="btn btn-primary mx-2">IUPSM</a>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .about-img{
    border-radius: 25px;
    width: 250px;
  }
</style>