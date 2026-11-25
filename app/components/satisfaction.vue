<script lang="ts" setup></script>

<template>
  <div id="satisfaction">

    <div class="pageLayoutPadding">

      <div class="content img">
        <div class="f-spaceGrotesk-400 fs-h2 c-primary">4,3<span class="fs-paragraph c-fadePrimary">/5</span></div>
        <div class="subContentImg">
          <NuxtImg src="images/google.png" />
          <span class="c-fadePrimary fs-small f-inter-300">13 Avis clients sur Google</span>
        </div>
      </div>

      <div class="content text">
        <p class="c-primary fs-paragraph f-spaceGrotesk-400">Un seul interlocuteur.</p>
        <span class="c-fadePrimary fs-subtitle f-inter-300">Du design à la production, je vous accompagne sur l’ensemble de votre projet.</span>
      </div>

      <div class="content text">
        <p class="c-primary fs-paragraph f-spaceGrotesk-400">Un premier pas, gratuit.</p>
        <span class="c-fadePrimary fs-subtitle f-inter-300">Un rendez-vous de 30 minutes maximum pour faire le point, en présentiel, en visio ou par téléphone.</span>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

#satisfaction {
  border-top: 1px solid map-get($map: $colors, $key: 'gray');
  border-bottom: 1px solid map-get($map: $colors, $key: 'gray');
  padding: 48px 0;

  @media screen and (max-width : 630px) {
    padding: 24px 0;
  }

  .pageLayoutPadding {
    @include flex(12px, space-between, center);

    @media screen and (max-width : 1100px) {
        align-items: flex-start;
      @media screen and (max-width : 630px) {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;

      }

    }

    .content {
      width: calc(20%);

      @media screen and (max-width : 1100px) {
        width: calc(100% / 3 - 12px);
        @media screen and (max-width : 630px) {
          width:  100%;
          text-align: center;

        }

      }
      
      &.img {

        .subContentImg {
          @include flex(4px, flex-start, center, row, nowrap);

          @media screen and (max-width : 630px) {
            justify-content: center;
          }

          img {
            width: 20px;
            height: 20px;

          }

        }

      }

      &.text {
        p {
          margin-bottom: 8px;

        }
        
      }

    }

  }

}
</style>