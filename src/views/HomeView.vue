<script setup lang="ts">
import SectionList from '@/components/SectionList.vue'
import ContentGrid from '@/components/ContentGrid.vue'
import PlaceholderCards from '@/components/PlaceholderCards.vue'
import MainContent from '@/components/MainContent.vue'
</script>

<template>
  <main class="relative md:mt-80 md:ml-20% md:mr-20% ml-[5%] mr-5%">
    <div class="flex flex-wrap-reverse w-full">
      <div class="md:w-1/2 w-full">
        <MainContent />
      </div>
      <div class="md:w-1/2 w-full">
        <PlaceholderCards />
      </div>
    </div>
    <div>
      <SectionList />
    </div>

    <ContentGrid />
    <img class="-left-[40%] w-52" src="../assets/orangetriangle.png" />
    <div class="overflow-hidden"></div>
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
