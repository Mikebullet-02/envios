<template>
  <div class="container max-w-screen-xl h-full">
    <header>
      <nav
        class=" max-w-screen-xl relative flex w-full h-20 items-end grid justify-items-end bg-white py-10 text-xl text-[#003368] hover:text-black-800 focus:text-black-700 blue:text-black-200 md:flex-wrap md:justify-end"
        data-te-navbar-ref
      >
        <div class="flex w-full flex-wrap items-center justify-between px-6">
          <div class="flex items-center">
            <button
              class="mr-2 border-0 bg-transparent py-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-black dark:focus:text-white lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div
            class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContentY"
            data-te-collapse-item
          >
            <ul
              class="text-xl mr-auto flex flex-col lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li data-te-nav-item-ref>
                <a
                  class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-black dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="#!"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  >Tipos de env??os</a
                >
              </li>
              <li data-te-nav-item-ref>
                <a
                  class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-black dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="#!"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  >Cobertura de env??os</a
                >
              </li>
              <li data-te-nav-item-ref>
                <a
                  class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-black dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="#!"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  >Calcula tu paquete</a
                >
              </li>
              <li data-te-nav-item-ref>
                <a
                  class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-black dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                  href="#!"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  >Tarifas preferenciales</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="max-w-screen-xl bg-inherit py-40 px-6 text-start px-16 text-neutral-800">
        <h1
          class="mb-6 text-[#003368] text-5xl font-bold blue:bg-neutral-700 pl-24"
        >
          AHORRA HASTA 60% EN <br />LOG??STICA PARA TU EMPRESA
        </h1>
        <ul class="list-disc object-left py-5 pl-28 text-2xl">
          <li>Tarifas preferenciales para empresas.</li>
          <li>
            Env??a y recibe paquetes el mismo d??a
            <p class="text-gray-500 inline">(sin costo extra)</p>
            .
          </li>
          <li>
            Cobertura en zonas extendidad
            <p class="text-gray-500 inline">(sin costo extra)</p>.
          </li>
          <li>
            Servicio ocurre, en m??s de 50 ciudades
            <p class="text-gray-500 inline">(Baj??o, Norte y Centro del pa??s)</p>
            .
          </li>
        </ul>
        <div class="container px-32">
          <button
            type="button"
            class="text-white text-lg m-5 bg-[#003368] hover:bg-[#003368] focus:outline-none focus:ring-4 focus:ring-blue-900 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-[#003368] dark:hover:bg-[#003368] dark:focus:ring-blue-800 h-16 w-60 text-xl"
          >
            Tarifas preferenciales
          </button>
        </div>
        <img
          src="../assets/personajeODM.png"
          class="personaje max-w-sm h-30 -mt-96 w-48"
          alt="personajeODM"
        />
      </div>
    </header>
  </div>
</template>

<style>
.personaje{
  margin-left: 900px;  
}
</style>
