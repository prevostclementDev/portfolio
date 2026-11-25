<script lang="ts" setup>

</script>

<template>
  <div id="expertises">
    
      <div class="topTitle">
        <CoreTextH2 color="primary">Une approche global, avec trois expertises.</CoreTextH2>
        <CoreTextSubtitle color="secondary">Un interlocuter pour votre projet, du design à la production, je vous accompagne sur l’ensemble de votre projet. </CoreTextSubtitle>
      </div>

      <div class="content">
        <div class="expertise">
          <div class="lineBox">
            <CoreTextH3 color="secondary">Webdesign</CoreTextH3>
          </div>
          <CoreTextParagraph color="primary"> Des sites modernes, rapides et adaptés à votre activité et à vos objectifs. Ainsi que des solutions pour vous faire gagner du temps et simplifier les tâches répétitives du quotidiens </CoreTextParagraph>
        </div>
        <div class="expertise">
          <div class="lineBox">
            <CoreTextH3 color="secondary">Photographie</CoreTextH3>
          </div>
          <CoreTextParagraph color="primary"> Des sites modernes, rapides et adaptés à votre activité et à vos objectifs. Ainsi que des solutions pour vous faire gagner du temps et simplifier les tâches répétitives du quotidiens </CoreTextParagraph>
        </div>
        <div class="expertise">
          <div class="lineBox">
            <CoreTextH3 color="secondary">Développement</CoreTextH3>
          </div>
          <CoreTextParagraph color="primary"> Des sites modernes, rapides et adaptés à votre activité et à vos objectifs. Ainsi que des solutions pour vous faire gagner du temps et simplifier les tâches répétitives du quotidiens </CoreTextParagraph>
        </div>
      </div>

  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

#expertises {

  .topTitle {
    @include flex( 12px, space-between,flex-start,row,nowrap );
    margin-bottom: 22px;

    span {
      text-align: right;
      margin-top: 14px;

    }

    @media screen and ( max-width : 730px ) {
      flex-direction: column-reverse;

      span {
        text-align: left;

      }
    }
  }

  .content {

    .expertise {
      margin: 16px 0;

      .lineBox {
        position: relative;

        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: map-get($map: $colors, $key: 'secondary');
          z-index: 1;


        }

        h3 {
          margin-bottom: 8px;
          background-color: map-get($map: $colors, $key: 'white');
          padding: 0 16px 0 0;
          position: relative;
          width: fit-content;
          z-index: 2;

        }

      }

    }

  }

}
</style>