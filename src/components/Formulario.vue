<template>
  <h1 class="text-4xl font-extrabold capitalize px-20 py-12 mt-10">
    TARIFAS PREFERENCIALES
  </h1>
  <h2 class="text-3xl ml-10 font-extrabold capitalize px-14 py-1 pb-7">
    Para impulsar tu negocio
  </h2>
  <!-- component -->
  <div
    class="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0"
  >
    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="p-6 mr-2 bg-white dark:bg-gray-800 sm:rounded-lg">
            <h1
              class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight"
            >
              ¡Escríbenos!
            </h1>
            <p
              class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2"
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
              <div class="ml-4 text-md tracking-wide font-semibold w-40">
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
                +52 55-51-41-43-00
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

          <form class="p-6 flex flex-col justify-center">
            <div class="flex flex-col">
              <label for="name" class="hidden">Nombre completo</label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Nombre completo"
                class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
              />
            </div>

           

            <div class="flex flex-col mt-2">
              <label for="tel" class="hidden">Teléfono</label>
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Teléfono"
                class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
              />
            </div>
             <div class="flex flex-col mt-2">
              <label for="email" class="hidden">Correo electrónico</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Teléfono"
                class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div class="pl-10">
              <button
                class="bg-[#003368] py-7 px-12 text-white active:bg-[#D9D9D9] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                v-on:click="toggleModal()"
              >
                SOLICITAR TARIFA PREFERENTE
              </button>
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
                      <button
                        class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        v-on:click="toggleModal()"
                      >
                        <span
                          class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                        >
                          ×
                        </span>
                      </button>
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
                        v-on:click="toggleModal()"
                      >
                        OK
                      </button>
                      <!--<button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Save Changes
            </button>-->
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="showModal"
                class="opacity-25 fixed inset-0 z-40 bg-black"
              ></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "regular-modal",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
  },
};
</script>
