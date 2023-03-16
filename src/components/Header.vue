<template>
  <div class="container w-screen -mb-10">
    <header class="container w-screen">
      <div class="bg-white">
        <nav
          class="container px-6 py-8 mr-20 mx-auto md:flex md:justify-between md:items-center"
        >
          <div class="flex items-center justify-between">
            <!-- Mobile menu button -->
            <div @click="toggleNav" class="flex md:hidden">
              <button
                type="button"
                class="text-[#003368] hover:text-gray-400 focus:outline-none focus:text-gray-400"
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
          >
            <li class="text-[#003368] hover:text-indigo-400">Tipos de envíos</li>
            <li class="text-[#003368] hover:text-indigo-400">
              Cobertura de envíos
            </li>
            <li class="text-[#003368] hover:text-indigo-400">
              Calcula tu paquetes
            </li>
            <li class="text-[#003368] hover:text-indigo-400">
              Tarifas preferenciales
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="w-screen -mt-20 bg-inherit py-40 px-48 text-start px-16 text-neutral-800"
      >
        <h1
          class="mb-6 text-[#003368] text-6xl font-bold blue:bg-neutral-700 pl-5"
        >
          AHORRA HASTA 60% EN <br />LOGÍSTICA PARA TU <br/> EMPRESA
        </h1>
        <ul class="list-disc object-left py-5 -pl-0 text-2xl">
          <li>Tarifas preferenciales para empresas</li>
          <li>
            Envía y recibe paquetes el mismo día
            <p class="text-gray-500 inline">(sin costo extra)</p>
          </li>
          <li>
            Cobertura en zonas extendidad
            <p class="text-gray-500 inline">(sin costo extra)</p>
          </li>
          <li>
            Servicio ocurre, en más de 50 ciudades
            <p class="text-gray-500 inline">(Bajío, Norte y Centro del país)</p>
          </li>
        </ul>
        <div class="container px-32">
          <button
            type="button"
            class="text-white m-5 bg-[#003368] hover:bg-[#003368] focus:outline-none focus:ring-4 focus:ring-blue-900 font-extrabold rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-[#003368] dark:hover:bg-[#003368] dark:focus:ring-blue-800 h-24 w-96 text-xl"
          >
            <a href="#formulario">Tarifas preferenciales</a>
          </button>
        </div>
        <img
          src="../assets/personajeODM.png"
          class="personaje max-w-sm h-30 -mt-96 w-48"
          alt="personajeODM"
        />
      </div>
    </header>
  </div>
</template>

<style>
.personaje {
  margin-left: 800px;
}
</style>
<script>
import { ref } from "vue";
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
