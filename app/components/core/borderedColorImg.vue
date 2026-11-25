<script lang="ts" setup>
interface Props { image : string, styleClass: string };
const props = withDefaults( defineProps<Props>(), {
  image : 'images/apropos.png',
  styleClass : ''
})
</script>

<template>
  <div :class="'squarreImage '+props.styleClass">
      <NuxtImg :src="props.image"/>
      <div class="elementDesignSquarre bg-secondary"></div>
  </div>
</template>

<style lang="scss" scoped>
.squarreImage {
  position: relative;
  width: 100%;
  
  img {
    z-index: 2;
    width: 100%;
    height: auto;
    position: relative;

  }

  .elementDesignSquarre {
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 2%;
    left: 2%;
    position: absolute;

  }

}
</style>