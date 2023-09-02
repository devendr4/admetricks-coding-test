<script setup lang="ts">
import SectionItem from './components/SectionItem.vue'
import type { Section } from './types'
const positions = ['20', '35', '50', '65', '80']

const sections: Section[] = [
  {
    icon: 'lightbulb',
    title: 'Agencias',
    content:
      'Crea mejores estrategias de marketing digital, planes de medios y reportes de resultados para tus clientes. Muéstrale qué está haciendo su competencia en publicidad online.'
  },
  {
    icon: 'monitor',
    title: 'Medios',
    content:
      'Mejora tus argumentos de ventas conociendo en detalle la inversión de tus clientes en otros medios y el alcance que les aporta.us clientes en otros medios y el alcance que les aporta.'
  },
  {
    icon: 'megaphone',
    title: 'Marcas',
    content:
      'Descubre las ofertas y campañas que tu competencia está promocionando. Recibe alertas cuando tu competencia lanza una nueva campaña de publicidad online.'
  },
  {
    icon: 'magglass',
    title: 'Verificación',
    content:
      'Como un agente tercero, transparente y sin conflictos de interés, Admetricks permite a los actores de la industria del marketing digital verificar que sus campañas exhiban en los sitios y formatos pautados.'
  }
]
</script>

<template>
  <div class="relative min-h-screen">
    <div class="triangle"></div>

    <!-- <div class="vl left-20%"></div>
    <div class="vl left-35%"></div>
    <div class="vl left-50%"></div>
    <div class="vl left-65%"></div>
    <div class="vl left-80%"></div> -->

    <div v-for="p in positions" v-bind:key="p" :class="`vl left-${p}%`"></div>

    <div class="overflow-hidden">
      <img class="absolute -left-20" src="./assets/greentriangle.png" />
    </div>
    <div class="relative flex mt-80 flex-wrap ml-20% w-60%">
      <div class="p-2 w-1/2">
        <div class="p-2">
          <h4>Estamos para ayudarte</h4>
          <h1 class="text-4xl mb-5 mt-3">
            ¿Tienes problemas para entender el mercado de la publicidad digital?
          </h1>
          <p class="mb-2">
            El Mercado de la publicidad online es incierto y complejo, Admetricks te ayuda a
            visibilizar cómo desempeñan las campañas y contenidos versus los de tu competencia en
            tiempo real con reportes y alertas automáticas
          </p>
          <div class="flex gap-2">
            <button class="p-3 bg-cyan-300 pl-10 pr-10 text-black rounded-full">
              Solicitar demo
            </button>
            <button>Ver funcionalidades</button>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div class="relative">
          <div class="absolute border-white border-2 rounded-lg h-[15rem] w-[20rem]"></div>
          <div class="absolute border-white border-2 rounded-lg h-[15rem] w-[20rem]"></div>
        </div>
        <img class="right-[17rem] bg-background top-[35rem] z-20" src="./assets/rectangles.png" />
      </div>
      <div class="w-full flex mt-4">
        <SectionItem v-for="section in sections" v-bind:key="section.title" :item="section" />
      </div>
    </div>

    <img class="absolute top-[40%] -right-44" src="./assets/polygons.png" />

    <div class="overflow-hidden">
      <img class="relative left-60" src="./assets/yellotriangle.png" />
    </div>
  </div>
</template>

<style scoped>
.triangle {
  background: #eef2fa;
  width: 100%;
  height: 220px;
  clip-path: polygon(0% 0%, 100% 0%, 100% 8%, 50% 60%, 0% 8%);
}

.small {
  position: absolute;
  top: 0;
  left: 0;
  background: #132d47;
  clip-path: polygon(50% 3%, 12% 99%, 83% 99%);
  width: 100%;
  height: 100%;
}

.vl {
  border-left: 3px solid #132d47;
  /* border-left: 3px solid red; */
  z-index: -10;
  height: 100%;
  position: absolute;
  margin-left: -3px;
  top: 0;
}
</style>
