<template>
  <div class="containerCircleBackground">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>

  <HeaderDefault></HeaderDefault>

  <body>

    <section id="containerAllContent">
      <slot />
    </section>

  </body>
  
  <FooterDefault></FooterDefault>
</template>

<script setup>
import FooterDefault from "~/components/default/footerDefault.vue";
import HeaderDefault from "~/components/default/headerDefault.vue";
import {gsap} from "gsap";

onMounted(()=>{
  const timelineRotation = rotateCircleTimeline();
  timelineRotation.play();
})

function rotateCircleTimeline(){
  const timeline = gsap.timeline({repeat:-1,yoyo:true});
  timeline.to(
      '.containerCircleBackground .circle',
      {
        rotation : "random([0,360])",
        duration : 5
      }
  )
  return timeline;
}
</script>

<style scoped>

</style>