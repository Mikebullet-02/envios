<template>
  <div class="container bg-gray-300 w-screen h-auto">
    <h1 class="text-4xl font-extrabold capitalize px-14 py-10 pl-32">
      TIPOS DE ENVÍOS
    </h1>
    <div class="flex justify-around flex-wrap">
      <div class="flex space-x-10">
        <div class="flex h-auto w-auto block max-w-sm rounded-lg bg-sky-900/60">
          <div class="p-8">
            <h5
              class="m-10 p-5 text-3xl font-bold leading-tight text-black text-center"
            >
              Sobres
            </h5>
            <p class="mb-5 text-black-600 text-center text-2xl inline-block align-middle">
              Hasta un máximo de 25 hojas.
            </p>
              <img
                class="rounded-t-lg py-1 w-auto h-auto px-10 pt-24"
                src="../assets/SobreODM.png"
                alt=""
              />
          </div>
        </div>
        <div class="h-auto w-auto block max-w-sm rounded-lg bg-sky-900/60">
          <div class="p-8">
            <h5
              class="m-10 p-5 text-3xl font-bold leading-tight text-black text-center"
            >
              Paquetes
            </h5>
            <p class="mb-5 text-black-600 text-center text-2xl">De 0 - 1 Kg.</p>
            <a href="">
              <img
                class="rounded-t-lg py-1 w-auto h-auto mt-32 px-16"
                src="../assets/CajaODM.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="h-auto w-auto block max-w-sm rounded-lg bg-sky-900/60">
          <div class="p-8">
            <h5
              class="m-10 p-5 text-3xl font-bold leading-tight text-black text-center"
            >
              Cajas
            </h5>
            <p class="mb-5 text-black-600 text-center text-2xl">
              De 01 - 10 Kg.
              <br />
              De 11 - 20 Kg.
              <br />
              De 21 - 30 Kg.
            </p>
            <a href="">
              <img
                class="rounded-t-lg py-1 w-auto h-auto px-10"
                src="../assets/CajaODM.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="block max-w-sm rounded-lg bg-sky-900/60">
          <div class="p-8">
            <h5
              class="m-10 p-5 text-3xl font-bold leading-tight text-black text-center"
            >
              Maletas
            </h5>
            <p class="mb-5 text-black-600 text-center text-2xl">
              De 01 - 10 Kg.
              <br />
              De 11 - 20 Kg.
              <br />
              De 21 - 30 Kg.
            </p>
            <a href="">
              <img
                class="rounded-t-lg py-1 w-auto h-auto px-10"
                src="../assets/maleta.png"
                alt=""
              />
            </a>
          </div>
        </div>
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
