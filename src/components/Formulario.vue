<template>
  <div class="w-full">
    <h1 class="text-4xl font-extrabold capitalize px-14 py-14">
      TARIFAS PREFERENCIALES
    </h1>
    <h2 class="text-3xl ml-10 font-extrabold capitalize px-14 py-1">
      Para impulsar tu negocio
    </h2>
    <div
      class="relative flex items-top justify-center mt-0 bg-white dark:bg-white sm:items-center sm:pt-0"
    >
      <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 pb-10">
        <div class="mt-8 overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-6 mr-2 bg-white dark:bg-white sm:rounded-lg">
              <h1
                class="text-4xl sm:text-5xl text-black dark:text-black font-extrabold tracking-tight"
              >
                ¡Escríbenos!
              </h1>
              <p
                class="text-normal pt-2 text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2"
              >
                Y nos pondremos en contacto a la brevedad.
              </p>

              <div
                class="flex items-center mt-8 text-gray-600 dark:text-gray-400"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-80">
                  Av Central 56, Nueva Industrial Vallejo, Gustavo A. Madero,
                  07700 Ciudad de México, CDMX
                </div>
              </div>

              <div
                class="flex items-center mt-4 text-gray-600 dark:text-gray-400"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  55-51-41-43-00
                </div>
              </div>

              <div
                class="flex items-center mt-2 text-gray-600 dark:text-gray-400"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  desarrollowebodm@gmail.com
                </div>
              </div>
            </div>
            <form
              class="p-6 flex flex-col justify-center"
              @submit.prevent="handleSubmit"
            >
              <div class="flex flex-col">
                <label for="name" class="hidden">Nombre completo</label>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none"
                  v-model="url"
                />
              </div>
              <div class="flex flex-col">
                <label for="name" class="hidden">Teléfono</label>
                <input
                  type="number"
                  placeholder="Teléfono"
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none"
                  v-model="telefono"
                />
              </div>
              <div class="flex flex-col">
                <label for="name" class="hidden">Nombre de tu empresa</label>
                <input
                  type="text"
                  placeholder="Nombre de tu empresa"
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none"
                  v-model="empresa"
                />
              </div>
              <div class="flex flex-col">
                <label for="name" class="hidden">Ciudad</label>
                <input
                  type="text"
                  placeholder="Ciudad"
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none"
                  v-model="ciudad"
                />
              </div>
              <div class="flex flex-col">
                <label for="name" class="hidden">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none"
                  v-model="email"
                />
              </div>
                
              <div class="pt-5 sm:pt-10 sm:flex sm:justify-center">
                <button
                  class="bg-[#003368] py-7 px-12 text-white active:bg-[#D9D9D9] font-bold uppercase text-2xl px-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-10 sm:mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                  v-on:click="toggleModal()"
                >
                  SOLICITAR TARIFA PREFERENTE
                </button>
              </div>
              <div
                  v-if="showModal"
                  class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
                >
                  <div class="relative w-auto my-6 mx-auto max-w-3xl">
                    <!--content-->
                    <div
                      class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                    >
                      <!--header-->
                      <div
                        class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
                      >
                        <h3 class="text-3xl font-semibold">¡EXCELENTE!</h3>
                      </div>
                      <!--body-->
                      <div class="relative p-6 flex-auto">
                        <p class="my-4 text-slate-500 text-lg leading-relaxed">
                          Hemos recibido tu información.
                          <br />
                          En breve nos comunicaremos contigo.
                        </p>
                      </div>
                      <!--footer-->
                      <div
                        class="flex items-center justify-end p-6 bg-[#003368]border-t border-solid border-slate-200 rounded-b"
                      >
                        <button
                          class="text-white bg-[#003368] border border-solid border-white hover:bg-blue-900 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          v-on:click="closeModal()"
                        >
                          OK
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="showModal"
                  class="opacity-25 fixed inset-0 z-40 bg-black"
                ></div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { ref } from "vue";
import { userDatabaseStore } from "../stores/database.js";
const databaseStore = userDatabaseStore();
const showModal = ref(false);
    const toggleModal = () => {
      showModal.value = !showModal.value;
    };
    const closeModal = () => {
      showModal.value = false;
    };

const url = ref('');
const telefono = ref('');
const empresa = ref('');
const ciudad = ref('');
const email = ref('');
const handleSubmit = () => {
  if (!url.value || !telefono.value || !empresa.value || !ciudad.value || !email.value) {
    alert('Please fill in all fields');
    return;
  }
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
    alert('Please enter a valid email address');
    return;
  }
  databaseStore.addUrl(url.value, telefono.value, empresa.value, ciudad.value, email.value)
  console.log('FORMULARIO');
  url.value = '';
  telefono.value = '';
  empresa.value = '';
  ciudad.value = '';
  email.value = '';
}

</script>
