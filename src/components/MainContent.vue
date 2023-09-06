<script setup lang="ts">
import CustomTitle from './CustomTitle.vue'
</script>
<template>
  <div class="p-2 flex justify-center flex-col">
    <h4 class="text-cyan">Estamos para ayudarte</h4>
    <CustomTitle class="text-4xl mb-5 mt-3">
      ¿Tienes problemas para<br />
      <mark class="under">entender el mercado </mark><br />de la publicidad digital?
    </CustomTitle>
    <p class="mb-2">
      El Mercado de la publicidad online es incierto y complejo, Admetricks te
      <mark class="text-cyan bg-transparent">
        ayuda a visibilizar cómo desempeñan las campañas y contenidos</mark
      >
      versus los de tu competencia en tiempo real con reportes y alertas automáticas
    </p>
    <div class="flex flex-wrap justify-center items-center gap-4 mt-4">
      <RouterLink class="p-3 bg-cyan pl-10 pr-10 text-black rounded-full" to="/currency"
        >Ver datos del CLP</RouterLink
      >
      <button></button>
      <button>Ver funcionalidades</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  position: relative;
  z-index: 10;
}
.under {
  background: transparent;
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
}
/* .under::before {
  z-index: -10;
  content: '';
  position: absolute;
  width: 80%;
  left: 0;
  height: 20px;
  bottom: 30%;
  border-radius: 200px;
  background: linear-gradient(111.3deg, #9c27b0 9.6%, #00bcd4 93.6%);
} */
</style>
