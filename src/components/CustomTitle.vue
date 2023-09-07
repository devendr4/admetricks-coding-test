<script setup lang="ts">
const props = defineProps<{
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h4'
  class?: string
}>()
</script>

<template>
  <component
    :is="props.variant"
    :class="
      'text-white font-bold mb-5 mt-3 ' +
      (props.variant === 'h1'
        ? 'text-2xl  md:text-4xl'
        : props.variant === 'h4'
        ? 'text-sm'
        : 'text-xl') +
      ' ' +
      props.class
    "
  >
    <slot></slot>
  </component>
</template>
