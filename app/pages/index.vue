<script lang="ts" setup>
usePortfolioSeo({
  title: 'Clément Prévost | Développeur web, photographe et designer à Annecy',
  description: 'Je crée des sites web, des solutions sur mesure et des images pour développer votre présence en ligne. Découvrez mes expertises et mes projets à Annecy.',
  image: '/images/main.png'
})
</script>

<template>
  <div>
    <IndexHeader />
    
    <div class="spaceBetweenSection"></div> 

    <div class="pageLayoutPadding">
      <IndexExpertises />
    </div>

    <div class="spaceBetweenSection"></div> 

    <IndexTalkAbout />
    <IndexProjectsPreview />

    <div class="spaceBetweenSection"></div> 

    <div class="pageLayoutPadding">
      <IndexAbout />
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
</style>