<script setup lang="ts">
import type { Section } from '../types'
const props = defineProps<{
  item: Section
}>()
</script>
<template>
  <div class="p-3">
    <img :src="`src/assets/${props.item.icon}.png`" />
    <h4>{{ props.item.title }}</h4>
    <p>{{ props.item.content }}</p>
  </div>
</template>
