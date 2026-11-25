<script lang="ts" setup>
</script>

<template>
  <header>
      <div class="content">
        <CoreTextH1 color="white">Je crée des solutions digitales entre design, performance et identité visuelle.</CoreTextH1>
        <CoreTextParagraph color="white">Sites web, solutions sur mesure et photographie pour développer votre présence en ligne.</CoreTextParagraph>
        <div class="space">
          <CoreButton :style="'gray'" link="/#expertises" text="En savoir plus" icon="arrowStrait" />
        </div>
      </div>
  </header>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

header {
  background-image: url("images/main.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 95vh;

  @include flex(0, center,flex-start,column,nowrap);
  padding: 0 0 0 60px;

  @media screen and (max-width : 730px) {
    padding: 0 30px;
    height: 90vh;
  }

  .content {
    max-width: 710px;
    @include flex(16px, center,flex-start,column,nowrap);

    .space {
      margin-top: 18px;

    }

  }

}
</style>