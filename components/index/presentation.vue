<template>
  <section id="presentation">
    <section class="img-profil rotateOpacity">
      <img :src="backgroundProfilImg" @mouseover="onhover" @mouseleave="onleave" alt="">
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

  gsap.set('#presentation .rotateOpacity',{rotate : 15,opacity : 0,yPercent:20});

  let scrollOnPresentation = gsap.timeline({
    scrollTrigger: {
      trigger : '#presentation',
      pin : true,
      start : "top",
      end : "+=650",
      scrub : 1,
      markers:true,
    }
  });

  scrollOnPresentation.to('#presentation .rotateOpacity', {
        rotate : 0,
        opacity : 1,
        yPercent : 0,
        stagger : 0.5
      });

})


// #########
// IMG HOVER
// #########
const backgroundProfilImg = ref('/imgs/profil-w&b.png');
const onhover = () => {
  backgroundProfilImg.value = '/imgs/profil-colored.png';
}
const onleave = () => {
  backgroundProfilImg.value = '/imgs/profil-w&b.png'
}

</script>