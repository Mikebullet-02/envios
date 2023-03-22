<template>
  <div class="xl:bg-gray-300 xl:w-screen h-auto sm:bg-gray-300 sm:w-screen">
    <h1 class="text-4xl font-extrabold capitalize px-14 py-14 pl-32">
      TIPOS DE ENVÍOS
    </h1>
    <div class="xl:flex xl:justify-around xl:flex-row sm:flex sm:justify-center sm:flex-col xl:space-y-0 xl:space-x-0 sm:space-x-20 sm:space-y-5">
      <div
        class="flex xl:flex-col xl:w-72 xl:h-[450px]
        sm:h-40 sm:w-9/12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]
        xl:ml-0 sm:ml-20"
      > 
        <div class="p-4 md:p-5 sm:p-0">
          <h3 class="xl:text-3xl xl:ml-0 sm:ml-5 
          font-extrabold text-center text-gray-800 dark:text-white xl:pt-7
          sm:text-2xl sm:text-center sm:pt-5">
            Sobres
          </h3>
          <p class="xl:mt-1 xl:ml-0 text-2xl xl:pt-20 xl:pb-5 xl:text-gray-800 xl:text-center 
          xl:dark:text-gray-400 
            sm:pt-auto sm:ml-12 sm:text-left sm:dark:text-gray-400">
           Hasta un máximo de 25 hojas.
          </p>
        </div>
        <img
          class="xl:w-48 xl:h-32 xl:mt-10 xl:ml-1 sm:ml-[10px] sm:w-32 sm:h-32 rounded-b-xl place-self-center inline-block xl:align-bottom
          sm:align-right"
          src="../assets/SobreODM.png"
          alt="Image Description"
        />
      </div>
      <div
        class="flex xl:flex-col xl:w-72 xl:h-[450px] 
        sm:h-40 sm:w-9/12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
      >
        <div class="p-4 md:p-5">
          <h3 class="xl:text-3xl font-extrabold xl:text-center text-gray-800 dark:text-white xl:pt-7
          sm:text-2xl sm:text-center sm:pt-3">
            Paquetes
          </h3>
          <p class="xl:mt-1 xl:ml-0 text-2xl xl:pt-20 xl:pb-5
          sm:pt-2 sm:ml-5 sm:text-center text-gray-800 xl:text-center dark:text-gray-400">
           De 0 - 1 Kg.
          </p>
        </div>
        <img
          class="xl:w-36 xl:h-32 xl:mt-14 sm:w-32 xl:ml-2 sm:ml-36 sm:h-32 rounded-b-xl place-self-center inline-block align-bottom"
          src="../assets/CajaODM.png"
          alt="Image Description"
        />
      </div>
      <div
        class="flex xl:flex-col xl:w-72 xl:h-[450px] 
        sm:h-48 sm:w-9/12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
      >
        <div class="p-4 md:p-5">
          <h3 class="xl:text-3xl font-extrabold text-center text-gray-800 dark:text-white xl:pt-7
          sm:text-2xl sm:text-center sm:pt-3">
            Cajas
          </h3>
          <p class="mt-1 text-2xl xl:pt-16 text-gray-800 text-center dark:text-gray-400
          sm:pt-2 sm:ml-5 sm:text-center">
           De 01 - 10 Kg.
           <br />
           De 11 - 20 Kg.
           <br />
           De 21 - 30 Kg.
           <br />
          </p>
        </div>
        <img
          class="xl:w-44 xl:h-36 xl:mt-6 xl:ml-2 sm:w-42  sm:ml-32 sm:h-32 rounded-b-xl place-self-center inline-block align-bottom"
          src="../assets/CajaODM.png"
          alt="Image Description"
        />
      </div>
      <div
        class="flex xl:flex-col xl:w-72 xl:h-[450px] 
        sm:h-48 sm:w-9/12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
      >
        <div class="p-4 md:p-5">
          <h3 class="xl:text-3xl font-extrabold text-center text-gray-800 dark:text-white xl:pt-7
          sm:text-2xl sm:text-center sm:pt-3">
            Maletas
          </h3>
          <p class="mt-1 text-2xl xl:pt-16 text-gray-800 text-center dark:text-gray-400
          sm:pt-2 sm:ml-5 sm:text-center">
           De 01 - 10 Kg.
           <br />
           De 11 - 20 Kg.
           <br />
           De 21 - 30 Kg.
           <br />
          </p>
        </div>
        <img
          class="xl:w-28 xl:h-40 xl:mt-2 xl:ml-2 sm:w-28 sm:ml-36 sm:h-36 rounded-b-xl place-self-center inline-block align-bottom"
          src="../assets/maleta.png"
          alt="Image Description"
        />
      </div>
    </div>

    <div
      class="h-auto w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl"
    >
      <p>VOLUMEN MÁXIMO EN TU ENVÍO:</p>
      <p>65 X 50 X 55 = 30cm^3</p>
    </div>
  </div>
</template>
