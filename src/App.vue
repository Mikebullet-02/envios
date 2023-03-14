<template>
  <router-view />
  <Header></Header>

  <Envios></Envios>

  <div class="container mx-auto py-10 max-w-screen-xl">
    <div class="titulo">
      <h1 class="text-4xl font-extrabold capitalize px-14 py-10">
        COBERTURA DE ENVÍOS
      </h1>
      <div class="">
        <div class="container flex flex-none items-center">
          <div class="container ml-40 mt-10">
            <div class="container flex-none">
              <select
                v-model="origen"
                @change="(e) => cargar(e)"
                class="bg-white-50 mt-0 w-96 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              <h2>Dirección</h2>
          <h3>De:</h3>
          <p v-if="origen != null">
            {{ origen.ubicacion }}
          </p></div>
          </div>
          <div class="container ml-40 mt-10 mr-32">
            <select
              v-model="destino"
              class="bg-white-50 mt-0 w-96 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <h2>Dirección</h2>
          <h3>A:</h3>
          <p v-if="destino != null">
            {{ destino.direccion }}
          </p>
        </div>
          </div>
        </div>
       <div>

       
       </div>

        <div class="flex justify-around items-center mt-10 wrap">
          <div
            class="h-64 w-64 block max-w-sm rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700"
            >
            <div
              class="border-b-2 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50"
            >
              Sobres
            </div>
            <div class="p-6">
              <h5
                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
              >
                Hasta 25 hojas
              </h5>
              <div v-if="destino != null">
                <div
                  v-for="key in Object.keys(destino.precios)"
                  :key="key"
                  class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
                >
                  <h2>{{ key }}</h2>
                  <p>${{ destino.precios[key] }}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="block max-w-sm rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700"
          >
            <div
              class="border-b-2 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50"
            >
              Paquetes
            </div>
            <div class="p-6">
              <h5
                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
              >
                De 0 - 10 Kg.
              </h5>
              <div v-if="destino != null">
                <div
                  v-for="key in Object.keys(destino.precios)"
                  :key="key"
                  class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
                >
                  <h2>{{ key }}</h2>
                  <p>${{ destino.precios[key] }}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="block max-w-sm rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700"
          >
            <div
              class="border-b-2 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50"
            >
              Cajas
            </div>
            <div class="p-6">
              <h5
                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
              >
                De 1 - 10 Kg.
              </h5>
              <div v-if="destino != null">
                <div
                  v-for="key in Object.keys(destino.precios)"
                  :key="key"
                  class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
                >
                  <h2>{{ key }}</h2>
                  <p>${{ destino.precios[key] }}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="block max-w-sm rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700"
          >
            <div
              class="border-b-2 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50"
            >
              Cajas
            </div>
            <div class="p-6">
              <h5
                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
              >
                De 11 - 20 Kg.
              </h5>
              <div v-if="destino != null">
                <div
                  v-for="key in Object.keys(destino.precios)"
                  :key="key"
                  class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
                >
                  <h2>{{ key }}</h2>
                  <p>${{ destino.precios[key] }}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="block max-w-sm rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700"
          >
            <div
              class="border-b-2 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50"
            >
              Maletas
            </div>
            <div class="p-6">
              <h5
                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
              >
                De 21 - 30 Kg.
              </h5>
              <div v-if="destino != null">
                <div
                  v-for="key in Object.keys(destino.precios)"
                  :key="key"
                  class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
                >
                  <h2>{{ key }}</h2>
                  <p>${{ destino.precios[key] }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="container h-auto w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle"
        >
          <p>***VALOR DE REFERENCIA SUJETO A CAMBIOS***</p>
        </div>
      </div>
    </div>
  </div>

  <Calculadora></Calculadora>
  <Formulario></Formulario>
  <Footer></Footer>
</template>

<script setup>
import Header from "./components/Header.vue";
import Landing from "./components/Landing.vue";
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

<style></style>
