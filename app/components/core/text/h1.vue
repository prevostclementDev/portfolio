<script lang="ts" setup>
interface Props { color : "white" | "primary" | "fadePrimary" | "fadePrimaryTwo" | "secondary" | "gray" }
const props = withDefaults( defineProps<Props>(), {
  color: "primary"
} )
</script>

<template>
  <h1 
    :class="'f-spaceGrotesk-700 fs-h1 c-' + props.color"
    ><slot/>
  </h1>
</template>

<style lang="scss" scoped>
</style>