<template>
  <section id="competences">
    <h2>Mes compétences</h2>
    <ul class="container-competences">
      <li class="competence">
        <a class="container" href="">
          <div class="background">
            <div class="filterBackground"></div>
            <img src="/imgs/developpementweb-competences.png" alt="">
          </div>

          <div class="content">
            <p>Poste de travail</p>
            <div class="title">
              <h3>Développement web</h3>
            </div>
          </div>
        </a>
      </li>
      <li class="competence right">
        <a class="container" href="">
          <div class="background">
            <div class="filterBackground"></div>
            <img src="/imgs/photographie-competences.png" alt="">
          </div>

          <div class="content">
            <p>Paris Juillet 2023</p>
            <div class="title">
              <h3>Photographie</h3>
            </div>
          </div>
        </a>
      </li>
      <li class="competence">
        <a class="container" href="">
          <div class="background">
            <div class="filterBackground"></div>
            <img src="/imgs/designweb-competences.png" alt="">
          </div>

          <div class="content">
            <p>Plan de travail figma</p>
            <div class="title">
              <h3>Web design</h3>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(()=>{

  // const competencestimeline = gsap.timeline({
  //   scrollTrigger : {
  //     trigger:'#competences',
  //     start : "-=200",
  //     end : "+=500",
  //     scrub : true
  //   }
  // })
  //
  // competencestimeline.to('html',{
  //   background: '#1C1919',
  // })

})

</script>

<style scoped>

</style>