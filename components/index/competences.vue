<link rel="stylesheet" href="../../assets/scss/componentsStyle/index/competences.scss">
<template>
  <section id="competences">
    <h2 class="rotateOpacity">Mes compétences</h2>
    <ul class="container-competences">

      <li class="competence onLinkSeeProject" bg="#1C1919" step-label="1">
        <a class="container" href="">
          <div class="contentLeftPart">
            <h3><span>Développement web</span></h3>
            <p>
              <span>
                En tant qu’étudiant développeur web, je maîtrise un large éventail de technologies et de langages, notamment HTML, CSS, JavaScript, ainsi que des frameworks tels que VUE.js et Nuxt. J'ai également une solide expertise dans les langages backend comme PHP, et j'ai travaillé avec des plateformes CMS populaires telles que WordPress. Mon expérience s'étend également aux frameworks PHP tels que CodeIgniter et Symfony, ce qui me permet de créer des applications web robustes et performantes.
              La gestion des bases de données est une autre de mes compétences, notamment avec MySQL. De plus, je suis constamment à l'affût des dernières tendances et technologies émergentes pour rester à la pointe de mon domaine.
              </span>
            </p>
          </div>
          <div class="imgRightPart">
            <div class="filterImage"></div>
            <img src="/imgs/developpementweb-competences.png" alt="">
          </div>
        </a>
      </li>

      <li class="competence left onLinkSeeProject" bg="#282525" step-label="2">
        <a class="container" href="">
          <div class="contentLeftPart">
            <h3><span>Photographie</span></h3>
            <p><span>La photographie est ma passion, bien que je sois un amateur. J'adore immortaliser les paysages, en capturant la beauté naturelle qui m'entoure. Cependant, je ne me limite pas aux paysages, j'aime aussi explorer la photographie de portrait et animalière. C'est un monde fascinant où chaque type de photo offre une expérience unique. Je suis toujours en quête de moments extraordinaires à capturer et à partager. En parallèle, j'acquiers progressivement des compétences techniques pour améliorer constamment mes photographies.</span></p>
          </div>
          <div class="imgRightPart">
            <div class="filterImage"></div>
            <img src="/imgs/photographie-competences.png" alt="">
          </div>
        </a>
      </li>

      <li class="competence last onLinkSeeProject" bg="#1C1919" step-label="3">
        <a class="container" href="">
          <div class="contentLeftPart">
            <h3><span>Web design</span></h3>
            <p>
              <span>Le web design, et je me concentre principalement sur l'UI/UX pour créer des interfaces web intuitives et esthétiquement plaisantes. J'utilise Figma pour concevoir des maquettes de sites internet, en veillant à ce qu'ils soient aussi fonctionnels qu'attrayants. Mon objectif est de créer des expériences utilisateur exceptionnelles et d'améliorer continuellement l'aspect technique de mes créations.</span>
            </p>
          </div>
          <div class="imgRightPart">
            <div class="filterImage"></div>
            <img src="/imgs/designweb-competences.png" alt="">
          </div>
        </a>
      </li>

    </ul>
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const mm = gsap.matchMedia();

onMounted(()=>{

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.refresh()

  mm.add('(max-width : 785px)', () => {

    gsap.set('#competences .competence',{opacity:0,rotate:10,yPercent:-20,xPercent:-20});

    const elementToScrollAnimate = gsap.utils.toArray('#competences .competence');
    elementToScrollAnimate.forEach(el => {

      gsap.to(el,
          {
            rotate : 0,
            opacity : 1,
            yPercent:0,
            xPercent:0,
            duration : 0.45,
            scrollTrigger : {
              trigger:el,
              start : '-='+el.offsetHeight/2,
              toggleActions: 'play none none reverse'
            }
          })

    })

  })

  mm.add('(min-width:786px)', () => {


    gsap.set('#competences .rotateOpacity',{rotate : -15,opacity : 0,yPercent:100,xPercent:-20});

    const timelineCompetenceGlobal = gsap.timeline({
      scrollTrigger : {
        trigger:'#competences',
        start : "top",
        end : "+=5000",
        scrub : 1,
        pin: true
      }
    })

    timelineCompetenceGlobal.to('#competences .rotateOpacity', {rotate : 0, opacity : 1, yPercent : 0, stagger : 0.5, xPercent : 0,});

    const competences = gsap.utils.toArray('#competences .competence');

    competences.forEach((comp,index) => {

      const image = comp.querySelectorAll('.imgRightPart img, .imgRightPart .filterImage');
      const h3 = comp.querySelector('.contentLeftPart h3');
      const h3Span = h3.querySelector('span');
      const p = comp.querySelector('.contentLeftPart p');
      const bgColor = comp.getAttribute('bg');

      let origin = 'right';
      let imageX = 120;
      let textX = 150;
      let rotate = 15;

      if(comp.classList.contains('left')) {
        origin = "left";
        imageX = -120;
        textX = -150;
        rotate = -15;
      }

      gsap.set(comp,{yPercent:100,opacity:0,rotate:rotate});
      gsap.set(image,{xPercent:imageX,opacity:0,transformOrigin:origin,rotate:rotate});
      gsap.set(h3,{scaleX:0,transformOrigin:origin});
      gsap.set(h3Span,{opacity:0});

      const timeLineOnComp = gsap.timeline();

      timeLineOnComp
          .to('body',{background : bgColor,duration:0.2},0)
          .to(comp,{rotate : 0,yPercent:-50,opacity:1},0)
          .to(image,{rotate : 0,xPercent:0,opacity:1},0.3)
          .to(h3,{scaleX:1},0.5)
          .to(h3Span,{opacity:1})

      if(competences.length - 1 !== index){
        timeLineOnComp.to(comp,{yPercent:-100,opacity:0})
      }

      timelineCompetenceGlobal.add(timeLineOnComp);

    })

    timelineCompetenceGlobal.to('#competences .rotateOpacity',{rotate : 15,opacity : 0,yPercent:-100,xPercent:-20});

    return timelineCompetenceGlobal;


  })

  mm.add('(min-width:1px)', () => {
    const competencestimeline = gsap.timeline({
      scrollTrigger : {
        trigger:'#competences',
        start : "-=200",
        end : "top",
        scrub : 1,
      }
    })

    competencestimeline.to('body',{background: '#1C1919'})
  })

})

onUnmounted( () => {
  mm && mm.revert();
} )

</script>