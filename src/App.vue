<template>
  <router-view />
  <Header></Header>

  <Envios></Envios>

  <div class="cobertura">
    <div class="titulo">
      <h1>COBERTURA DE ENVÍOS</h1>
      <div>
        <section class="main-section">
          <form>
            <div class="caja">
              <select v-model="origen" @change="(e) => cargar(e)">
                <option value="">¿Dónde dejar tus paquetes?</option>
                <option
                  v-for="destinos in databaseStore.$state.documents"
                  :key="destinos.id"
                  :value="destinos"
                >
                  {{ destinos.origen }}
                </option>
              </select>
            </div>
            <div class="card">
              <h2>Dirección</h2>
              <h3>De:</h3>
              <p v-if="origen != null">
                {{ origen.ubicacion }}
              </p>
            </div>
            <div class="caja">
              <select v-model="destino">
                <option value="">¿Dónde recoger tus paquetes?</option>
                <option
                  v-for="destinos in databaseStore.$state.destinos"
                  :key="destinos.id"
                  :value="destinos"
                >
                  {{ destinos.nombre }}
                </option>
              </select>
            </div>
            <div class="card">
              <h2>Dirección</h2>
              <h3>De:</h3>
              <p v-if="destino != null">
                {{ destino.direccion }}
              </p>
            </div>
          </form>
          <div v-if="destino != null">
            <div
              v-for="key in Object.keys(destino.precios)"
              :key="key"
              class="card"
            >
              <h2>{{ key }}</h2>
              <p>${{ destino.precios[key] }}</p>
            </div>
          </div>

          <div class="h-e-a-d-w-e-b-rectangle">
            <span class="h-e-a-d-w-e-b-text02">
              <span>
                <span> ***VALOR DE REFERENCIA SUJETO A CAMBIOS*** </span>
              </span>
            </span>
          </div>
        </section>
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


<style>
</style>