<template>
  <header>
      <section class="left parallaxHead" parallax="0.3">
        <p>PORTFOLIO</p>
      </section>
      <section class="center">
        <p class="title">{{title}}</p>
      </section>
      <section class="right">
        <button id="navigationOpen" class="onLink">Menu</button>
      </section>
  </header>
</template>

<script setup>
const props = defineProps({
  title: String
})
</script>