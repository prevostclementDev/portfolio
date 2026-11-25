<script lang="ts" setup>
usePortfolioSeo({
  title: 'Parlons de votre projet | Clément Prévost',
  description: 'Contactez Clément Prévost pour échanger sur votre projet de site web, de design ou de photographie à Annecy et en Haute-Savoie.',
  image: '/images/main.png'
})
</script>

<template>
  <div id="prendreContact">

    <div class="spaceBetweenSection"></div> 

    <div class="pageLayoutPadding">
      <div class="formContactLayout">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>

    <div class="spaceBetweenSection"></div> 

    <Satisfaction />

    <div class="spaceBetweenSection"></div> 

    <div class="pageLayoutPadding">
      <Faq />
    </div>

    <div class="spaceBetweenSection"></div> 
    
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

#prendreContact {
  .formContactLayout {
    @include flex(40px, flex-start, stretch, row, nowrap);

    @media screen and (max-width : 1060px) {
      gap: 18px;
      @media screen and (max-width : 900px) {
        flex-direction: column-reverse;
        margin-top: 26px;

      }

    }

  }

}
</style>