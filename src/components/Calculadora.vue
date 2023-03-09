
<template>
  <div className="flex flex-col  w-full">
    <div class="grid-container grid grid-cols-6 my-4 items-center">
      <label
        class="col-span-1 mx-10 text-gray-700 text-xl font-bold"
        for="inline-alto"
        >Alto:</label
      >
      <input
        class="col-span-4 border-2 border-gray-200 rounded w-full py-4 px-5 text-gray-700 focus:border-gray-800"
        v-model="calculos.alto"
        type="text"
        name="inline-alto"
        placeholder="Alto"
      />
      <span class="col-span-1 mx-10 text-gray-700 text-xl font-bold">cm</span>
    </div>
    <div class="grid-container grid grid-cols-6 my-4 items-center">
      <label
        class="col-span-1 mx-10 text-gray-700 text-xl font-bold"
        for="inline-ancho"
        >Ancho:</label
      >
      <input
        class="col-span-4 border-2 border-gray-200 rounded w-full py-4 px-5 text-gray-700 focus:border-gray-800"
        v-model="calculos.ancho"
        type="text"
        name="inline-ancho"
        placeholder="Ancho"
      />
      <span class="col-span-1 mx-10 text-gray-700 text-xl font-bold">cm</span>
    </div>

    <div class="grid-container grid grid-cols-6 my-4 items-center">
      <label
        class="col-span-1 mx-10 text-gray-700 text-xl font-bold"
        for="inline-largo"
        >Largo:</label
      >
      <input
        class="col-span-4 border-2 border-gray-200 rounded w-full py-4 px-5 text-gray-700 focus:border-gray-800"
        v-model="calculos.largo"
        type="text"
        name="inline-largo"
        placeholder="Largo"
      />
      <span class="col-span-1 mx-10 text-gray-700 text-xl font-bold">cm</span>
    </div>
    <div class="my-4">
      <div class="flex items-cener justify-center">
        <span class="col-span-1 mx-10 text-gray-700 text-xl font-bold"
          >Peso: {{ peso }} Kg</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const calculos = ref({
  largo: 0,
  ancho: 0,
  alto: 0,
});
const peso = computed({
  get: () => {
    let resultado = 0;
    resultado =
      (calculos.value.largo * calculos.value.ancho * calculos.value.alto) /
      6000;
    return resultado.toFixed(2);
  },
  set: (value) => {
    calculos.value.largo = value;
    calculos.value.ancho = value;
    calculos.value.alto = value;
  },
});
</script>

<style>
</style>


