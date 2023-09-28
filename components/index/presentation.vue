<template>
  <section id="presentation">
    <section class="img-profil rotateOpacity">
      <img src="/imgs/profil-colored.png" :style="filterImgRef" @mouseover="onhover" @mouseleave="onleave" alt="">
    </section>
    <section class="text-profil">
      <p>
        <span class="rotateOpacity">
          <span class="fullSize"><strong>Je me présente</strong></span> je m’appelle Clément, 20 ans, étudiant en développement web. Esprit créatif, avec pour objectif de réaliser le plus fidèlement possible vos idées de projets web. Je suis principalement passionnée par le <strong>développement web</strong>. Un domaine dans lequel j’applique mes connaissances technique pour réalisé des solutions <strong>fonctionnelle</strong> et <strong>Esthétique</strong>.
        </span>
        <span class="rotateOpacity">
          <strong>La photographie</strong> est mon autre passion. J’aime particulièrement saisir des moments unique pour les partager autour de moi. Grâce à la photographie je peux embellir les sites internet que je réalise. Mais aussi de partager des images du monde.
        </span>
        <span class="rotateOpacity">
          <strong>Le design web</strong>, représente pour moi la jonction entre le développement web et la photographie. Ca allie la technique à l’esthétique. Créer une interface qui est agréable à l’œil mais aussi facile d’utilisation pour les utilisateurs.
        </span>
      </p>
    </section>
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(()=>{

  if( window.innerWidth >= 786 ) {
    createTimeline_desktop_presentation();
  } else {
    createTimeline_mobile_presentation();
  }

})

function createTimeline_desktop_presentation() {
  gsap.set('#presentation .rotateOpacity', {rotate: 15, opacity: 0, yPercent: 100, xPercent: 20});

  let scrollOnPresentation = gsap.timeline({
    scrollTrigger: {
      trigger: '#presentation',
      pin: true,
      start: "top",
      end: "+=1300",
      scrub: 1,
      // markers:true,
    }
  });

  scrollOnPresentation.to('#presentation .rotateOpacity', {
    rotate: 0,
    opacity: 1,
    yPercent: 0,
    stagger: 0.5,
    xPercent: 0,
  });
  return scrollOnPresentation;
}

function createTimeline_mobile_presentation() {
  gsap.set('#presentation .rotateOpacity',{rotate : 15,opacity : 0,yPercent:100,xPercent:20});

  const elementToScrollAnimate = document.querySelectorAll('#presentation .rotateOpacity');
  elementToScrollAnimate.forEach(el => {

    gsap.to(el,
        {
          rotate : 0,
          opacity : 1,
          yPercent:0,
          xPercent:0,
          duration : 0.25,
          scrollTrigger : {
            trigger:el,
            toggleActions: 'play none none reverse'
          }
        })

  })
}

// #########
// IMG HOVER
// #########
const filterImgRef = ref('filter:grayscale(100%);')
const onhover = () => {
  filterImgRef.value = ''
}
const onleave = () => {
  filterImgRef.value = 'filter:grayscale(100%);'
}

</script>