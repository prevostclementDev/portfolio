<script lang="ts" setup>
interface Props { withSubtitle?: boolean, color?: "white" | "primary" }

const props = withDefaults( defineProps<Props>(), {
  withSubtitle : true,
  color : 'primary'
} )
</script>

<template>
  <div class="container">
    <NuxtLink to="/" class="logoLink" aria-label="Retour à l’accueil">
      <span class="logoImage">
        <NuxtImg :src="'images/logo-'+props.color+'.png'" />
      </span>
      <div>
        <CoreTextParagraph><span :class="'f-spaceGrotesk-400 c-' +props.color">Prévost Clément</span></CoreTextParagraph>
        <CoreTextSubtitle v-if="props.withSubtitle"><span :class="'fs-small c-' +props.color">Développeur web · Photographe · Designer</span></CoreTextSubtitle>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/portable.scss";

.container {
  width: fit-content;
  
  .logoLink {
    @include flex();
    color: inherit;
    text-decoration: none;

    .logoImage {
      display: block;
      flex: none;

      img {
        width: 50px;
        height: 50px;
      }
    }
  }

}
</style>