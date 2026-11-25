<script lang="ts" setup>

</script>

<template>
  <div id="about">
    <CoreTextH2 color="primary">à propos</CoreTextH2>
    <div class="content">
      <p class="f-syne-500 fs-paragraph">Développeur, designer et photographe. Au coeur des montagnes de la Haute-Savoie à Annecy,</p>
      
      <div class="innerAbout">
        <CoreTextParagraph>
          <span class="fs-subtitle">
            Je m’appelle Clément, j’ai 23 ans et, depuis la fin de mes études, je propose mes services en tant qu’indépendant pour concevoir votre site internet. Grâce à ma formation et à mes différentes expériences en alternance, en stage et sur des projets personnels, je peux vous proposer un large éventail de solutions adaptées à vos besoins : création de designs, développement de solutions automatisées et conception de visuels esthétiques.
          </span>
          <NuxtLink to="/mes-projets" class="c-primary">Mes réalisations <CoreIconsArrowStrait color="primary" /></NuxtLink>
        </CoreTextParagraph>
      </div>
    </div>

    <div class="imageAbout">
      <CoreBorderedColorImg image="images/mountains.png" style-class="" />
      <CoreBorderedColorImg image="images/apropos.png" style-class="" />
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';
#about {
  h2 {
    &::first-letter { text-transform: uppercase; }

  }

  .content {
    @include flex(180px, space-between, flex-start, row, nowrap);
    margin-top: 12px;

    @media screen and (max-width : 1160px) {
      gap: 100px;
      @media screen and (max-width : 980px) {
        gap: 50px;
        @media screen and (max-width : 840px) {
          flex-direction: column;
          gap: 12px;

        }
      }
    }

    .innerAbout {
      text-align: left;
      margin-top: 22px;
      max-width: 70%;
      align-self: flex-end;
      @media screen and (max-width : 840px) {
          align-self: flex-start;
          max-width: 100%;
          margin-top: 0;
      }

      a {
        text-decoration: underline;
        display: block;
        width: fit-content;
        margin-top: 26px;
        float: right;

        svg {
          margin-left: 12px;

        }

      }

    }

  }

  .imageAbout {
    @include flex(40px, space-between, center,row, nowrap);
    padding: 24px 0;
    @media screen and (max-width : 510px){
        flex-wrap: wrap;
        flex-direction: column-reverse;
    }

    .squarreImage {

      &:first-child { 
        width: 60%; 
        @media screen and (max-width : 510px){
          width: 100%;
        }
      }
      &:last-child { 
        width: 40%; 
        align-self: flex-end; 
        transform: translateY(10%); 
        @media screen and (max-width : 510px){
          width: 100%;
          align-self: flex-start;
          transform: none;
        }
      }

    }

  }

}
</style>