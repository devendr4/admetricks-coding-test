<script setup lang="ts">
import type { Section } from '../types';
import CustomTitleVue from './CustomTitle.vue';
const props = defineProps<{
  item: Section;
}>();
</script>
<template>
  <div>
    <img class="pl-3" :src="props.item.icon" />
    <CustomTitleVue variant="h4" class="border-l-2 border-cyan pl-3 mb-1">{{
      props.item.title
    }}</CustomTitleVue>
    <p class="p-4">{{ props.item.content }}</p>
  </div>
</template>
