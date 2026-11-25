<script lang="ts" setup>
</script>

<template>
  <div id="talkAbout">
    
    <div class="pageLayoutPadding">

      <div class="innerContent">
          <CoreTextH2 color="primary">Parlons de vive voix de votre projet !</CoreTextH2>
          <CoreTextParagraph color="primary">Un premier rendez-vous gratuit d’une trentaine de minute maximun pour faire un premier point sur votre projet, en présentiel, en visio-conférence ou en appel !</CoreTextParagraph>

          <div class="contentButton">
            <CoreButton link="/" :style="'primary'" icon="arrowUp" text="Réserver un créneau" />
            <CoreButton link="/" :style="'gray'" text="Contact par mail" />
          </div>
        </div>

    </div>
    
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

#talkAbout {
  background-color: map-get($map: $colors, $key: 'primary');

  .innerContent {
    background-color: map-get($map: $colors, $key: 'secondary');
    padding: 100px 150px;
    transform: translateY(-40px);
    @include flex(18px, center,center,column,nowrap);
    text-align: center;

    @media screen and (max-width : 1110px) {
      padding: 70px 120px;
      @media screen and (max-width : 710px) {
        padding: 40px 90px;
        @media screen and (max-width : 540px) {
          padding: 30px 30px;
        }
      }
    }

    .contentButton {
      margin-top: 44px;
      @include flex();

      @media screen and (max-width : 710px) {
        margin-top: 20px;
      }

    }

  }

}
</style>