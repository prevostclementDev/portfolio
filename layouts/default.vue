<template>

  <div class="containerCircleBackground parallaxHead" parallax="0.2">
    <div class="circle"></div>
    <div class="circle parallaxHead"></div>
  </div>

  <div id="cursor">
    <span class="text title-see-more">Voir plus</span>
    <span class="text title-see-project">Voir les projets</span>
  </div>

  <HeaderDefault></HeaderDefault>

  <section id="containerAllContent">
    <slot />
  </section>

  <FooterDefault></FooterDefault>
</template>

<script setup>
import FooterDefault from "~/components/default/footerDefault.vue";
import HeaderDefault from "~/components/default/headerDefault.vue";
import {gsap} from "gsap";

onMounted(()=>{
  const timelineRotation = rotateCircleTimeline();
  timelineRotation.play();

  const cursor = document.querySelector('#cursor');
  const onLink = document.querySelectorAll('.onLink');
  const onLinkSeeProject = document.querySelectorAll('.onLinkSeeProject');

  gsap.set(cursor, {xPercent: -50, yPercent: -50});

  const xTo = gsap.quickTo(cursor,"x", {duration: 0.3, ease: "power3"});
  const yTo = gsap.quickTo(cursor,"y", {duration: 0.3, ease: "power3"});

  window.addEventListener("mousemove", e => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

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


  const parallaxHead = document.querySelectorAll('.parallaxHead');

  window.addEventListener('scroll',()=>{

    parallaxHead.forEach(el=>{

      const translate = getTranslate(el);

      el.style.transform = 'translate('+translate[0]+'px,'+(translate[1]+window.scrollY)*el.getAttribute('parallax')+'px)';
    })

  })

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

function getTranslate(element) {
  const style = window.getComputedStyle(element);
  const matrix = new WebKitCSSMatrix(style.transform);
  return [matrix.e,matrix.f];
}
</script>

<style scoped>

</style>