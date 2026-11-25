<script lang="ts" setup>
interface Props { color : "white" | "primary" | "fadePrimary" | "fadePrimaryTwo" | "secondary" | "gray" }
const props = withDefaults( defineProps<Props>(), {
  color: "primary"
} )
</script>
<template>
  <h3 :class="'f-spaceGrotesk-300 fs-h3 c-' + props.color"><slot/></h3>
</template>

<style lang="scss" scoped>
</style>