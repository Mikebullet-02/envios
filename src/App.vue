<template>
  <router-view />
  <Header></Header>
  <Envios></Envios>
  <div class="mx-auto py-10">
    <h1 class="text-4xl font-extrabold capitalize px-20 py-12">
      COBERTURA DE ENVÍOS
    </h1>
    <div class="flex flex-none items-center pb-20">
      <div class="container ml-40 mt-10">
        <div class="container flex-none">
          <select
            v-model="origen"
            @change="(e) => cargar(e)"
            class="bg-white-50 mt-0  border border-gray-300 text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <label value="">¿Dónde dejar tus paquetes?</label>
            <option
              v-for="destinos in databaseStore.$state.documents"
              :key="destinos.id"
              :value="destinos"
            >
              {{ destinos.origen }}
            </option>
          </select>
        </div>
        <div class="mt-10">
          <h2 class="text-3xl font-bold">Dirección</h2>
          <h3 class="text-gray-500 text-2xl">De:</h3>
          <p v-if="origen != null" class="text-2xl">
            {{ origen.ubicacion }}
          </p>
        </div>
      </div>
      <div class="container ml-40 mt-10 mr-32">
        <select
          v-model="destino"
          class="bg-white-50 mt-0  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

        <div class="mt-10">
          <h2 class="text-3xl font-bold">Dirección</h2>
          <h3 class="text-gray-500 text-2xl">A:</h3>
          <p v-if="destino != null" class="text-2xl">
            {{ destino.direccion }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-20"
    >
      <div
        class="flex flex-col items-center justify-center bg-gray-400 p-4 shadow rounded-lg"
      >
        <h2 class="mt-4 font-extrabold text-xl">Sobres</h2>
        <h6 class="mt-20 text-lg font-bold pb-10">Hasta 25 hojas</h6>

        <div v-if="destino != null">
          <div
            v-for="key in Object.keys(destino.precios)"
            :key="key"
            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
          >
            <p>${{ destino.precios.SOB }}</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center bg-gray-400 p-4 shadow rounded-lg"
      >
        <h2 class="mt-4 font-extrabold text-xl">Paquetes</h2>
        <h6 class="mt-20 text-lg font-bold pb-10">De 0 - 1 Kg</h6>

        <div v-if="destino != null">
          <div
            v-for="key in Object.keys(destino.precios)"
            :key="key"
            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
          >
            <p>${{ destino.precios.PAQ }}</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center bg-gray-400 p-4 shadow rounded-lg"
      >
        <h2 class="mt-4 font-extrabold text-xl">Cajas</h2>
        <h6 class="mt-20 text-lg font-bold pb-10">De 1 - 10 Kg</h6>

        <div v-if="destino != null">
          <div
            v-for="key in Object.keys(destino.precios)"
            :key="key"
            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
          >
            <p>${{ destino.precios.C1 }}</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center bg-gray-400 p-4 shadow rounded-lg"
      >
        <h2 class="mt-4 font-extrabold text-xl">Cajas</h2>
        <h6 class="mt-20 text-lg font-bold pb-10">De 11 - 20 Kg</h6>

        <div v-if="destino != null">
          <div
            v-for="key in Object.keys(destino.precios)"
            :key="key"
            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
          >
            <p>${{ destino.precios.C2 }}</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center bg-gray-400 p-4 shadow rounded-lg"
      >
        <h2 class="mt-4 font-extrabold text-xl">Maletas</h2>
        <h6 class="mt-20 text-lg font-bold pb-10">De 21 - 30 kg</h6>

        <div v-if="destino != null">
          <div
            v-for="key in Object.keys(destino.precios)"
            :key="key"
            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
          >
            <p>${{ destino.precios.C3 }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-auto w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle"
    >
      <p>***VALOR DE REFERENCIA SUJETO A CAMBIOS***</p>
    </div>
  </div>

  <Calculadora></Calculadora>
  <Formulario></Formulario>
  <Footer></Footer>
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
