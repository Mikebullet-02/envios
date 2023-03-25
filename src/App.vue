<template>
  <Header></Header>
  <div class="pl-5 pr-5">
    <Envios></Envios>
    <h1 class="text-4xl font-extrabold capitalize px-14 py-14 pl-32">
      COBERTURA DE ENVÍOS
    </h1>
    <div class="mx-auto py-10 pl-20 pr-20">
      <div class="flex flex-wrap justify-center items-center py-10">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0">
          <select
            v-model="origen"
            @change="(e) => cargar(e)"
            class="block w-full py-3 px-4 leading-tight text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-[#D9D9D9] dark:border-white dark:placeholder-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>¿Dónde dejar tus paquetes?</option>
            <option
              v-for="destinos in databaseStore.$state.documents"
              :key="destinos.id"
              :value="destinos"
            >
              {{ destinos.origen }}
            </option>
          </select>
          <div class="mt-4">
            <h2 class="text-2xl font-bold">Dirección</h2>
            <h3 class="text-gray-500 text-lg">De:</h3>
            <p v-if="origen != null" class="text-lg">{{ origen.ubicacion }}</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0">
          <select
            v-model="destino"
            class="block w-full py-3 px-4 leading-tight text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-[#D9D9D9] dark:border-white dark:placeholder-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <div class="mt-4">
            <h2 class="text-2xl font-bold">Dirección</h2>
            <h3 class="text-gray-500 text-lg">A:</h3>
            <p v-if="destino != null" class="text-lg">
              {{ destino.direccion }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
    >
      <div v-if="destino != null" class="bg-gray-400 p-4 shadow rounded-lg">
        <h2 class="font-extrabold text-4xl text-center">Sobres</h2>
        <h2 class="font-extrabold text-3xl text-center">Hasta 25 hojas</h2>
        <p class="mt-4 text-2xl text-center">${{ destino.precios.SOB }}</p>
      </div>
      <div v-if="destino != null" class="bg-gray-400 p-4 shadow rounded-lg">
        <h2 class="font-extrabold text-4xl text-center">Paquetes</h2>
        <h2 class="font-extrabold text-3xl text-center">De 0 - 1 Kg.</h2>
        <p class="mt-4 text-2xl text-center">${{ destino.precios.PAQ }}</p>
      </div>
      <div v-if="destino != null" class="bg-gray-400 p-4 shadow rounded-lg">
        <h2 class="font-extrabold text-4xl text-center">Cajas</h2>
        <h2 class="font-extrabold text-3xl text-center">De 1 - 10 Kg.</h2>
        <p class="mt-4 text-2xl text-center">${{ destino.precios.C1 }}</p>
      </div>
      <div v-if="destino != null" class="bg-gray-400 p-4 shadow rounded-lg">
        <h2 class="font-extrabold text-4xl text-center">Cajas</h2>
        <h2 class="font-extrabold text-3xl text-center">De 11 - 20 Kg.</h2>
        <p class="mt-4 text-2xl text-center">${{ destino.precios.C2 }}</p>
      </div>
      <div v-if="destino != null" class="bg-gray-400 p-4 shadow rounded-lg">
        <h2 class="font-extrabold text-4xl text-center">Maletas</h2>
        <h2 class="font-extrabold text-3xl text-center">De 21 - 30 Kg.</h2>
        <p class="mt-4 text-2xl text-center">${{ destino.precios.C3 }}</p>
      </div>
    </div>

    <div
    class="xl:h-auto xl:w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl xl:pl-0 xl:pr-0 "
  >
    <p>***VALOR DE REFERENCIA SUJETO A CAMBIOS***</p>
    
  </div>

    <Calculadora></Calculadora>
    <Formulario></Formulario>
  </div>
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
