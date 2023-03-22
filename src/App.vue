<template>
  <router-view />
  <Header></Header>
  <Envios></Envios>
  <h1 class="text-4xl font-extrabold capitalize px-14 py-14 pl-32">
      COBERTURA DE ENVÍOS
    </h1>
  <div class="mx-auto py-10">
    <div class="xl:flex xl:flex-none xl:items-center xl:pb-20 sm:flex-auto">
      <div class="container xl:ml-40 xl:mt-10">
        <div class="container flex-none sm:w-[500px] sm:ml-20">
          <select
            v-model="origen"
            @change="(e) => cargar(e)"
            class="bg-white mt-0 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block xl:w-[600px] xl:h-20 sm:w-[500px] p-2.5 dark:bg-[#D9D9D9] dark:border-white dark:placeholder-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500
            sm:h-24"
          >
            <option selected="¿Dónde dejar tus paquetes?">
              ¿Dónde dejar tus paquetes?
            </option>
            <option
              v-for="destinos in databaseStore.$state.documents"
              :key="destinos.id"
              :value="destinos"
            >
              {{ destinos.origen }}
            </option>
          </select>
        </div>
        <div class="xl:mt-10 sm:mt-7 sm:pl-12 sm:mb-5">
          <h2 class="xl:text-3xl sm:text-2xl font-bold">Dirección</h2>
          <h3 class="text-gray-500 xl:text-2xl sm:text-xl">De:</h3>
          <p v-if="origen != null" class="xl:text-2xl sm:text-xl">
            {{ origen.ubicacion }}
          </p>
        </div>
      </div>
      <div class="container xl:ml-40 xl:mt-10">
        <select
          v-model="destino"
          class="bg-white mt-0 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block xl:w-[600px] xl:h-20 sm:w-[500px] p-2.5 dark:bg-[#D9D9D9] dark:border-white dark:placeholder-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500
          xl:ml-0 sm:ml-20 sm:h-24"
        >
          <option value="">¿Dónde recoger tus paquetes?</option>
          <option
            v-for="destinos in databaseStore.$state.destinos"
            :key="destinos.id"
            :value="destinos"
          >
            {{ destinos.nombre }}
          </option>
        </select>

        <div class="xl:mt-10 sm:mt-7 sm:pl-12">
          <h2 class="xl:text-3xl sm:text-2xl font-bold">Dirección</h2>
          <h3 class="text-gray-500 xl:text-2xl sm:text-xl">A:</h3>
          <p v-if="destino != null" class="xl:text-2xl sm:text-xl">
            {{ destino.direccion }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-2 gap-4 px-20 xl:pt-0 sm:pt-10"
    >
      <div
        class="flex flex-col items-center justify-center bg-gray-400 p-4 shadow rounded-lg xl:w-auto xl:h-[611px] 
        sm:h-[150px] sm:w-auto"
      >
        <h2 class="xl:mt-[-10px] font-extrabold xl:text-6xl sm:mt-[-0px] sm:text-2xl">Sobres</h2>
        <h6 class="xl:mt-40 xl:text-4xl font-bold xl:pt-[0px] xl:pb-10 sm:mt-[20px]">Hasta 25 hojas</h6>

        <div
          v-if="destino != null"
          class="xl:mb-0 xl:text-xl font-medium leading-tight
          sm:text-sm
           text-neutral-800 dark:text-neutral-50"
        >
          <p class="xl:text-7xl xl:mt-20 sm:text-2xl sm:mt-5">${{ destino.precios.SOB }}</p>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-center bg-gray-400 p-4 shadow rounded-lg xl:w-auto xl:h-[611px] 
        sm:h-[150px] sm:w-auto"
      >
        <h2 class="xl:mt-[-10px] font-extrabold xl:text-6xl sm:mt-[-0px] sm:text-2xl">Paquetes</h2>
        <h6 class="xl:mt-40 xl:text-4xl font-bold xl:pt-[0px] xl:pb-10 sm:mt-[20px]">De 0 - 1 Kg</h6>

        <div v-if="destino != null">
          <div
            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
          >
            <p class="xl:text-7xl xl:mt-20 sm:text-2xl sm:mt-5">${{ destino.precios.PAQ }}</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center bg-gray-400 p-4 shadow rounded-lg xl:w-auto xl:h-[611px] 
        sm:h-[150px] sm:w-auto"
      >
        <h2 class="xl:mt-[-10px] font-extrabold xl:text-6xl sm:mt-[-0px] sm:text-2xl">Cajas</h2>
        <h6 class="xl:mt-40 xl:text-4xl font-bold xl:pt-[0px] xl:pb-10 sm:mt-[20px]">De 1 - 10 Kg</h6>

        <div v-if="destino != null">
          <div
            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
          >
            <p class="xl:text-7xl xl:mt-20 sm:text-2xl sm:mt-5">${{ destino.precios.C1 }}</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center bg-gray-400 p-4 shadow rounded-lg xl:w-auto xl:h-[611px] 
        sm:h-[150px] sm:w-auto"
      >
        <h2 class="xl:mt-[-10px] font-extrabold xl:text-6xl sm:mt-[-0px] sm:text-2xl">Cajas</h2>
        <h6 class="xl:mt-40 xl:text-4xl font-bold xl:pt-[0px] xl:pb-10 sm:mt-[20px]">De 11 - 20 Kg</h6>

        <div v-if="destino != null">
          <div
            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
          >
            <p class="xl:text-7xl xl:mt-20 sm:text-2xl sm:mt-5">${{ destino.precios.C2 }}</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center bg-gray-400 p-4 shadow rounded-lg xl:w-[1760px] xl:h-[372px]
        sm:h-[150px] sm:w-auto"
      >
        <h2 class="xl:m-8 font-extrabold xl:text-6xl sm:mt-[-0px] sm:text-2xl">Maletas</h2>
        <h6 class="xl:mt-5 xl:text-4xl font-bold xl:pt-[0px] xl:pb-10 sm:mt-[20px]">De 21 - 30 kg</h6>

        <div v-if="destino != null">
          <div
            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
          >
            <p class="xl:text-7xl xl:mt-2 sm:text-2xl sm:mt-5">${{ destino.precios.C3 }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-auto w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl"
    >
      <p>***VALOR DE REFERENCIA SUJETO A CAMBIOS***</p>
    </div>
  </div>

  <Calculadora></Calculadora>
  <Formulario></Formulario>
  <Footer></Footer>
  <router-view />
</template>

<script setup>
import Header from "./components/Header.vue";
import Envios from "./components/Envios.vue";
import Calculadora from "./components/Calculadora.vue";
import Footer from "./components/Footer.vue";
import { computed, onMounted, ref } from "@vue/runtime-core";
import { userDatabaseStore } from "./stores/database.js";
import Formulario from "./components/Formulario.vue";
const databaseStore = userDatabaseStore();
onMounted(async () => {
  await databaseStore.getDocuments("envios");
});
const origen = ref(null);
const destino = ref(null);
// on origen change
const cargar = async () => {
  destino.value = null;
  await databaseStore.getDocumentByKey("envios", "id", origen.value.id);
};
</script>
