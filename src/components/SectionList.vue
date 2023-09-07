<script setup lang="ts">
import type { Section } from '../types'
import SectionItem from './SectionItem.vue'
import lightbulb from '@/assets/lightbulb.png'
import monitor from '@/assets/monitor.png'
import megaphone from '@/assets/megaphone.png'
import magglass from '@/assets/magglass.png'

const sections: Section[] = [
  {
    icon: lightbulb,
    title: 'Agencias',
    content:
      'Crea mejores estrategias de marketing digital, planes de medios y reportes de resultados para tus clientes. Muéstrale qué está haciendo su competencia en publicidad online.',
  },
  {
    icon: monitor,
    title: 'Medios',
    content:
      'Mejora tus argumentos de ventas conociendo en detalle la inversión de tus clientes en otros medios y el alcance que les aporta.us clientes en otros medios y el alcance que les aporta.',
  },
  {
    icon: megaphone,
    title: 'Marcas',
    content:
      'Descubre las ofertas y campañas que tu competencia está promocionando. Recibe alertas cuando tu competencia lanza una nueva campaña de publicidad online.',
  },
  {
    icon: magglass,
    title: 'Verificación',
    content:
      'Como un agente tercero, transparente y sin conflictos de interés, Admetricks permite a los actores de la industria del marketing digital verificar que sus campañas exhiban en los sitios y formatos pautados.',
  },
]
</script>
<template>
  <div class="grid md:grid-cols-4 md:mt-20 mb-20">
    <SectionItem v-for="section in sections" v-bind:key="section.title" :item="section" />
  </div>
</template>
