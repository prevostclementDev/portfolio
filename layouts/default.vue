<template>

  <loader v-if="loading"></loader>

  <defaultMenu></defaultMenu>

  <div class="containerCircleBackground parallaxHead" parallax="0.2">
    <div class="circle"></div>
    <div class="circle parallaxHead"></div>
  </div>

  <div id="cursor">
    <span class="text title-see-more">Voir plus</span>
    <span class="text title-see-project">Voir les projets</span>
  </div>

  <HeaderDefault :title="titlePage"></HeaderDefault>

  <section id="containerAllContent">
    <slot />
  </section>

  <FooterDefault></FooterDefault>
</template>

<script setup>
import FooterDefault from "~/components/default/footerDefault.vue";
import HeaderDefault from "~/components/default/headerDefault.vue";
import Loader from "~/components/default/loader.vue";

import {gsap} from "gsap";

const nuxtApp = useNuxtApp();
const loading = ref(true);
const fullTime = 1500;
const startTime = new Date();
const titlePage = ref('');

nuxtApp.hook("page:finish", () => {
  const endTime = new Date();
  const diff = endTime - startTime;
  const timelineHeader = renderTimeLineFinishLoaded();

  if( diff < fullTime ) {
    setTimeout(()=>{
      loading.value = false;
      timelineHeader.play();
    },fullTime-diff);
  } else {
    loading.value = false;
    timelineHeader.play();
  }
});

let ctx;

onMounted(()=>{

  const { $listen } = useNuxtApp()

  $listen('pageAsLoad', (title) => {
    ctx.revert();
    loaderAnnimation();
    titlePage.value = title;
  });

  // ##############
  // CURSOR GENERAL
  // ##############
  const cursor = document.querySelector('#cursor');

  gsap.set(cursor, {xPercent: -50, yPercent: -50});

  const xTo = gsap.quickTo(cursor,"x", {duration: 0.3, ease: "power3"});
  const yTo = gsap.quickTo(cursor,"y", {duration: 0.3, ease: "power3"});

  window.addEventListener("mousemove", e => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  // CONTEXT
  ctx = gsap.context(() => {
    loaderAnnimation();
  })
})

onUnmounted(() => {
  ctx.revert();
})

function loaderAnnimation() {
  const timelineRotation = rotateCircleTimeline();
  timelineRotation.play();

  // ######################
  // ANIMATION HOVER BUTTON
  // ######################
  const onLink = document.querySelectorAll('.onLink');
  onLink.forEach(el => {
    el.addEventListener('mouseenter',()=>{
      gsap.to(cursor,{
        scale:0.7
      })
    })
    el.addEventListener('mouseleave',()=>{
      gsap.to(cursor,{
        scale:0.3
      })
    })
  })

  // #############################
  // ANNIMATION WHEN I SEE PROJECT
  // #############################
  const onLinkSeeProject = document.querySelectorAll('.onLinkSeeProject');
  onLinkSeeProject.forEach(el => {
    el.addEventListener('mouseenter',()=>{
      gsap.to(cursor,{
        scale:1,
        background : 'radial-gradient(circle, rgba(255,255,255,1) 90%, rgba(255,255,255,0.1268907221091562) 100%)',
      })
      gsap.set('#cursor .title-see-project',{
        display:"flex"
      })
      gsap.to('#cursor .title-see-project',{
        opacity:1
      })
    })
    el.addEventListener('mouseleave',()=>{
      gsap.to(cursor,{
        scale:0.3,
        background : "transparent",
        boxShadow : '0px 0px 0px 0px white',
      })
      gsap.to('#cursor .title-see-project',{
        opacity:0
      })
      gsap.set('#cursor .title-see-project',{
        display:"none"
      })
    })
  })

  // ##################
  // PARALAX ANNIMATION
  // ##################
  const parallaxHead = document.querySelectorAll('.parallaxHead');
  window.addEventListener('scroll',()=>{

    parallaxHead.forEach(el=>{

      const translate = getTranslate(el);

      el.style.transform = 'translate('+translate[0]+'px,'+(translate[1]+window.scrollY)*el.getAttribute('parallax')+'px)';
    })

  })
}

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

function getTranslate(element) {
  const style = window.getComputedStyle(element);
  const matrix = new WebKitCSSMatrix(style.transform);
  return [matrix.e,matrix.f];
}

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

  if(document.querySelector('#bodyHead span.loadedAnnimation span') !== null) {
    timeline.to('#bodyHead span.loadedAnnimation span',{
          ease: "slow(0.7, 0.7, false)",
          duration : 0.5,
          y : 0,
          stagger:0.2
        },
        'firstTime'
    );
  }

  return  timeline;
}

</script>