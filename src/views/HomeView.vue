<script setup lang="ts">
import SectionList from '@/components/SectionList.vue'
import ContentGrid from '@/components/ContentGrid.vue'
import PlaceholderCards from '@/components/PlaceholderCards.vue'
import MainContent from '@/components/MainContent.vue'
</script>

<template>
  <main>
    <div class="relative flex mt-80 flex-wrap ml-20% w-60%">
      <div class="p-2 w-1/2">
        <MainContent />
      </div>
      <div class="w-1/2">
        <PlaceholderCards />
      </div>

      <div class="w-full flex mt-20 mb-20">
        <SectionList />
      </div>

      <ContentGrid />
    </div>
    <div class="overflow-hidden">
      <img class="-left-12 w-52" src="../assets/orangetriangle.png" />
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
