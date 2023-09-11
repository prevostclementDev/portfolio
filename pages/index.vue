<template>

  <loader v-if="loading"></loader>

  <body-head></body-head>
  <presentation></presentation>
  <experiences></experiences>
  <competences></competences>
</template>

<script setup>
import BodyHead from "~/components/index/bodyHead.vue";
import Presentation from "~/components/index/presentation.vue";
import Experiences from "~/components/index/experiences.vue";
import Competences from "~/components/index/competences.vue";
import Loader from "~/components/default/loader.vue";

import { gsap } from "gsap";

const nuxtApp = useNuxtApp();
const loading = ref(true);
const fullTime = 1500;
const startTime = new Date();

onMounted(() => {
  const timelineHeader = renderTimeLineFinishLoaded();
  timelineHeader.play();
})
function renderTimeLineFinishLoaded() {
  let timeline = gsap.timeline({paused:true});

  timeline.addLabel("firstTime",0);
  timeline.addLabel("secondTime",0.5);

  timeline.to('header .left , header .right', {
        duration : 0.6,
        height : "auto",
        stagger : 0.2
      },
      'firstTime'
  );

  timeline.to('#bodyHead span.loadedAnnimation',{
        ease: "slow(0.7, 0.7, false)",
        duration : 0.5,
        height : "auto",
        stagger:0.2
      },
      'firstTime'
  );

  let timelineSecondTime = gsap.timeline();

  timelineSecondTime.to('#bodyHead .loadedAnnimationBTN', {
    duration : 0.3,
    scaleY : 1
  });

  timelineSecondTime.to('#bodyHead .loadedAnnimationBTN svg', {
        duration : 0.1,
        opacity : 1
  });

  timeline.add(timelineSecondTime,'secondTime');

  return  timeline;
}

nuxtApp.hook("page:finish", () => {
  const endTime = new Date();
  const diff = endTime - startTime;

  if( diff < fullTime ) {
    setTimeout(()=>{
      loading.value = false;
    },fullTime-diff);
  } else {
    loading.value = false;
  }
});

</script>