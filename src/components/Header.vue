<template>
  <div class="w-screen -mb-10 sm:w-auto">
    <header class="w-screen">
      <div class="bg-white pt-10">
  <nav class="container px-6 py-8 mr-4 md:mr-20 mx-auto md:flex md:justify-between md:items-center">
    <div class="flex items-center justify-between">
      <!-- Mobile menu button -->
      <div @click="toggleNav" class="flex md:hidden">
        <button type="button" class="text-[#003368] hover:text-gray-900 focus:outline-none focus:text-gray-800">
          <svg viewBox="0 0 24 24" class="w-20 h-18 fill-current">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 bg-white lg:bg-white md:bg-white sm:bg-[#003368]">
      <li class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white md:text-[#003368] xl:text-[#003368]">
        <a href="#">Tipos<br>de envíos</a>
      </li>
      <li class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white md:text-[#003368] xl:text-[#003368]">
        <a href="#">Cobertura<br> de envíos</a>
      </li>
      <li class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white md:text-[#003368] xl:text-[#003368]">
        <a href="#">Calcula<br> tu paquete</a>
      </li>
      <li class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white md:text-[#003368] xl:text-[#003368]">
        <a href="#">Tarifas<br> preferenciales</a>
      </li>
    </ul>
  </nav>
</div>

      <div class="mt-[-100px] bg-inherit py-10 px-6 sm:py-20 sm:px-16 lg:py-40 lg:px-48 text-start text-neutral-800">
  <h1 class="mb-6 text-[#003368] text-4xl sm:text-5xl md:text-6xl  font-bold blue:bg-neutral-700 sm:pl-[20px] md:pl-[30px] lg:pl-[-30px] xl:ml-[10px] tracking-widest">
    AHORRA HASTA 60% EN <br />
    LOGÍSTICA PARA TU <br />
    EMPRESA
  </h1>
  <div class="mx-auto max-w-[600px]">
    <ul class="flex flex-col space-y-2 list-disc object-left py-5 pt-10 pb-10 text-lg sm:text-3xl text-gray-800">
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
  </div>
  <img class="mx-auto w-full sm:w-80 h-auto mt-[-40px] sm:mt-[-550px] lg:float-right lg:mt-[-550px] xl:opacity-100 sm:opacity-0 md:opacity-0" src="../assets/personajeODM.png" />
  <div class="mx-auto max-w-[600px] pt-10 sm:pt-20 lg:pt-28">
    <button class="bg-[#003368] w-full sm:w-auto h-14 sm:h-28 hover:bg-blue-600 text-white text-xl sm:text-4xl font-extrabold py-2 px-4 rounded-full">
      Tarifas preferenciales
    </button>
  </div>
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

    const toggleNav = () => {
      showMenu.value = !showMenu.value;
    };

    return { showMenu, toggleNav };
  },
};
</script>
