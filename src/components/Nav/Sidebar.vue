<template>
  <div>
    <div
      class="offcanvas offcanvas-start text-bg-dark text-white"
      style="width: 270px"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
        <h5
          class="offcanvas-title fw-bold text-uppercase me-auto mx-4"
          id="offcanvasExampleLabel"
        >
          EMB
        </h5>
      </div>
      <div class="offcanvas-body p-0">
        <nav class="navbar-dark">
          <ul class="navbar-nav">
            <li>
              <router-link to="/" class="nav-link px-3 active">
                <span class="me-2">
                  <i class="bi bi-house"></i>
                </span>
                <span> Pagina Principal </span>
              </router-link>
            </li>
            <li class="my-2">
              <hr class="dorpdown-divider" />
            </li>

            <li>
              <div class="tex-muted small fw-bold text-uppercase px-3">
                Acciones
              </div>
            </li>
            <li>
              <router-link to="/addreg" class="nav-link px-3 active">
                <span class="me-2">
                  <i class="bi bi-plus-square"></i>
                </span>
                <span> Nuevo Registro </span>
              </router-link>
            </li>
            <li>
              <router-link to="/viewreg" class="nav-link px-3 active">
                <span class="me-2">
                  <i class="bi bi-search"></i>
                </span>
                <span> Visualizar Registros </span>
              </router-link>
            </li>
            <li class="my-2">
              <hr class="dorpdown-divider" />
            </li>


            <li>
              <div class="tex-muted small fw-bold text-uppercase px-3">
                Informacion
              </div>
            </li>
            <li>
              <router-link to="/about" class="nav-link px-3 active">
                <span class="me-2">
                  <i class="bi bi-info-circle"></i>
                </span>
                <span> Mas informacion </span>
              </router-link>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/11bstGBBjkkNxw4dYxZVc8f_WDd9RaERH/view?usp=sharing" target="_blank" class="nav-link px-3 active">
                <span class="me-2">
                  <i class="bi bi-book"></i>
                </span>
                <span> Manual de Usuario </span>
              </a>
            </li>
            <li class="my-2">
              <hr class="dorpdown-divider" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
