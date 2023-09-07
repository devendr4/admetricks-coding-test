<template>
  <div class="content-grid">
    <div class="overflow-hidden">
      <img
        class="absolute md:-left-[48px] bottom-72 md:bottom-auto -left-12"
        src="../assets/yellotriangle.png"
        width="100px" />
    </div>
    <div class="bg-white rounded-xl div1"></div>
    <div class="bg-white rounded-xl div2"></div>
    <div class="bg-white rounded-xl div3"></div>
    <div class="bg-white rounded-xl div4"></div>
    <div class="bg-white rounded-xl div5"></div>
  </div>
</template>
<style scoped>
.content-grid {
  display: grid;
  width: 100%;
  height: 40rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(8, 1fr) 0.5fr repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.div1 {
  grid-area: 1 / 1 / 4 / 5;
}
.div2 {
  grid-area: 4 / 3 / 9 / 5;
}
.div3 {
  grid-area: 4 / 1 / 10 / 3;
}
.div4 {
  grid-area: 10 / 1 / 12 / 3;
}
.div5 {
  grid-area: 9 / 3 / 13 / 5;
}

@media (min-width: 768px) {
  .content-grid {
    height: 40rem;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 0.25fr repeat(5, 1fr) 0.25fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  .div1 {
    grid-area: 2 / 1 / 3 / 3;
  }
  .div2 {
    grid-area: 2 / 3 / 5 / 6;
  }
  .div3 {
    grid-area: 1 / 6 / 5 / 8;
  }
  .div4 {
    grid-area: 5 / 3 / 8 / 8;
  }
  .div5 {
    grid-area: 3 / 1 / 7 / 3;
  }
}
</style>
