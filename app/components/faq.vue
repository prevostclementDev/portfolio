<script lang="ts" setup>
const faqs = [
  {
    question: 'Combien de temps faut-il pour créer un site internet ?',
    answer: 'Chaque projet a son propre périmètre : création, refonte, design ou développement sur mesure. Le premier rendez-vous permet de préciser vos besoins et d’aborder le calendrier de votre projet.'
  },
  {
    question: 'Peut-on refaire mon site sans perdre mon référencement ?',
    answer: 'Les délais dépendent de votre projet...'
  },
  {
    question: 'Proposez-vous la maintenance de site internet ?',
    answer: 'Vous pouvez nous contacter par email...'
  },
  {
    question: 'Travaillez-vous uniquement sur Annecy ?',
    answer: 'Vous pouvez nous contacter par email...'
  },
  {
    question: 'Pourrai-je modifier mon site moi-même ?',
    answer: 'Vous pouvez nous contacter par email...'
  }
]
</script>

<template>
  <div id="FAQ">

    <div class="text">
      <CoreTextSubtitle color="secondary"><span class="fs-small">AVANT DE SE LANCER</span></CoreTextSubtitle>
      <CoreTextH2 color="primary">Des réponses <br> pour avancer.</CoreTextH2>
      <CoreTextParagraph color="fadePrimary">Vous avez un projet en tête, mais pas <br> encore toutes les réponses ? Parlons-en.</CoreTextParagraph>
      <CoreButton 
        text="Me contacter"
        icon="arrowUp"
        :style="'gray'"
        link="/prendre-contact"
      />
    </div>
    <div class="faqContent">
      <CoreFaqList :items="faqs" :default-open="0"></CoreFaqList>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

#FAQ {
  @include flex(12px, space-between,flex-start,row,nowrap);

  @media screen and (max-width : 980px) {
      flex-direction: column;

  }

  .text {
    @include flex(12px, flex-start, flex-start,column,nowrap);

    @media screen and (max-width : 980px) {
        width: 100%;

    }

    p {
      margin-bottom: 28px;
      
    }

  }

  .faqContent {
    width: 60%;
    margin-top: 24px;

    @media screen and (max-width : 980px) {
        width: 100%;

    }

  }


}
</style>