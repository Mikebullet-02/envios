<template>
  <div class="xl:bg-gray-300 xl:w-screen h-auto sm:bg-gray-300 sm:w-screen">
    <h1 class="text-4xl font-extrabold capitalize px-14 py-20 pl-32">
      TIPOS DE ENVÍOS
    </h1>
    <div class="xl:flex xl:justify-around xl:flex-row sm:flex sm:justify-center sm:flex-col xl:space-y-0 xl:space-x-auto sm:space-x-5 sm:space-y-5">
      <div
        class="flex xl:flex-col xl:w-72 xl:h-96 sm:w-9/12 bg-white border shadow-sm rounded-xl dark:bg-gray-700 dark:border-gray-700 dark:shadow-slate-700/[.7]"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-3xl font-extrabold text-center text-gray-800 dark:text-white pt-7">
            Sobres
          </h3>
          <p class="mt-1 text-2xl xl:pt-20 sm:pt-5 pb-5 text-gray-800 xl:text-center sm:text-left dark:text-gray-400">
           Hasta un máximo de 25 hojas.
          </p>
        </div>
        <img
          class="xl:w-48 xl:h-32 sm:w-60 sm:h-48 rounded-b-xl place-self-center inline-block align-bottom"
          src="../assets/SobreODM.png"
          alt="Image Description"
        />
      </div>
      <div
        class="flex xl:flex-col xl:w-72 xl:h-96 sm:w-9/12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-3xl font-extrabold text-center text-gray-800 dark:text-white pt-7">
            Paquetes
          </h3>
          <p class="mt-1 text-2xl pt-20 pb-5 text-gray-800 text-center dark:text-gray-400">
           De 0 - 1 Kg.
          </p>
        </div>
        <img
          class="w-32 h-28 rounded-b-xl place-self-center inline-block align-bottom"
          src="../assets/CajaODM.png"
          alt="Image Description"
        />
      </div>
      <div
        class="flex xl:flex-col xl:w-72 xl:h-96 sm:w-9/12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-3xl font-extrabold text-center text-gray-800 dark:text-white pt-7">
            Cajas
          </h3>
          <p class="mt-1 text-2xl pt-12 pb-2 text-gray-800 text-center dark:text-gray-400">
           De 01 - 10 Kg.
           <br />
           De 11 - 20 Kg.
           <br />
           De 21 - 30 Kg.
           <br />
          </p>
        </div>
        <img
          class="w-32 h-28 rounded-b-xl place-self-center inline-block align-bottom"
          src="../assets/CajaODM.png"
          alt="Image Description"
        />
      </div>
      <div
        class="flex xl:flex-col xl:w-72 xl:h-96 sm:w-9/12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-3xl font-extrabold text-center text-gray-800 dark:text-white pt-7">
            Maletas
          </h3>
          <p class="mt-1 text-2xl pt-12 pb-2 text-gray-800 text-center dark:text-gray-400">
           De 01 - 10 Kg.
           <br />
           De 11 - 20 Kg.
           <br />
           De 21 - 30 Kg.
           <br />
          </p>
        </div>
        <img
          class="w-auto h-28 rounded-b-xl place-self-center inline-block align-bottom"
          src="../assets/maleta.png"
          alt="Image Description"
        />
      </div>
    </div>

    <div
      class="h-auto w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle"
    >
      <p>VOLUMEN MÁXIMO EN TU ENVÍO:</p>
      <p>65 X 50 X 55 = 30cm^3</p>
    </div>
  </div>
</template>
