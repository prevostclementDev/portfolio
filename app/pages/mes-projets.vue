<script lang="ts" setup>
usePortfolioSeo({
  title: 'Réalisations web et photographie | Clément Prévost',
  description: 'Découvrez une sélection de projets web, de webdesign et de photographie réalisés par Clément Prévost.',
  image: '/images/projets/sca.png'
})
</script>

<template>
  <div id="mesProjets">

    <div class="spaceBetweenSection"></div>

    <div class="pageLayoutPadding">

      <div class="title">
        <CoreTextSubtitle color="fadePrimary"><span class="fs-small">Mes Projets</span></CoreTextSubtitle>
        <div>
          <CoreTextH1 color="primary">
            <span class="fs-h2 f-spaceGrotesk-400">Un aperçu de mes réalisations.</span>
          </CoreTextH1>
        </div>
        <div>
          <CoreTextSubtitle color="secondary">Et si on faisais en sorte que votre projet prennent vie aussi ? <NuxtLink to="/prendre-contact" class="c-secondary">Lancez-vous !</NuxtLink></CoreTextSubtitle>
        </div>
      </div>

    </div>

    <div class="spaceBetweenSection"></div> 

    <ProjectsList />
    
    <div class="spaceBetweenSection"></div> 
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';
.title {
  @include flex(12px, space-between, flex-start,row,wrap);
  margin-top: 40px;

  & > span  {
    width: 100%;

  }

  & > div {
    width: calc(50% - 12px);
    @media screen and (max-width: 600px) {
      width: 100%;
    }

    &:first-child {
      @include flex(20px, flex-start, flex-start, column);

    }

    &:last-child {
      text-align: right;
      @include flex(12px, flex-end);
      @media screen and (max-width: 600px) {
        text-align: left;
        justify-content: flex-start;
      }
      
      span {
        display: block;
        max-width: 50%;
        @media screen and (max-width: 600px) {
          max-width: 100%;
        }

      }

    }

  }

}
</style>