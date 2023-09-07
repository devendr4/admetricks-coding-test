<script setup lang="ts">
const props = defineProps<{
  link: string;
}>();
</script>

<template>
  <a class="p-3 bg-cyan pl-10 pr-10 text-black rounded-full" :href="props.link" download
    ><slot
  /></a>
</template>
