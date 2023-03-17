<template>
  <div class="w-screen -mb-10">
    <header class="w-screen">
      <div class="xl:bg-white pt-10">
        <nav
          class="container px-6 py-8 mr-20 mx-auto md:flex md:justify-between md:items-center"
        >
          <div class="flex items-center justify-between">
            <!-- Mobile menu button -->
            <div @click="toggleNav" class="flex md:hidden">
              <button
                type="button"
                class="text-[#003368] hover:text-gray-400 focus:outline-none focus:text-gray-400
                "
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
            class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 xl:bg-white sm:bg-[#003368]"
          >
            <li
              class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white xl:text-[#003368]"
            >
              Tipos de <br />
              envíos
            </li>
            <li
              class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white xl:text-[#003368]"
            >
              Cobertura <br />
              de envíos
            </li>
            <li
              class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white xl:text-[#003368]"
            >
              Calcula tu <br />
              paquete
            </li>
            <li
              class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white xl:text-[#003368]"
            >
              Tarifas <br />
              preferenciales
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="w-screen -mt-20 bg-inherit py-40 px-48 text-start text-neutral-800"
      >
        <h1
          class="mb-6 text-[#003368] xl:text-7xl font-bold blue:bg-neutral-700 pl-20 tracking-widest 
          lg:text-6xl md:text-4xl 
          sm:text-5xl sm:pl-[0px]"
        >
          AHORRA HASTA 60% EN <br />LOGÍSTICA PARA TU <br />
          EMPRESA
        </h1>
        <ul class="xl:flex flex-col xl:space-y-4 list-disc xl:object-left py-5 xl:pt-20 xl:pb-20 xl:text-3xl
        sm:text-2xl sm:pb-24 sm:space-y-2">
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
        <img
          class="w-80 h-auto grid justify-items-end float-right mt-[-500px]
          xl:opacity-100 sm:opacity-0"
          src="../assets/personajeODM.png"
        />
        <div class="container px-32 xl:ml-[20px] sm:ml-[-298px] ">
          <button
            class="bg-[#003368] w-[600px] h-28 hover:bg-blue-600 text-white text-4xl font-extrabold py-2 px-4 rounded-full"
          >
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
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
