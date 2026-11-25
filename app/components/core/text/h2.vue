<script lang="ts" setup>
interface Props { color : "white" | "primary" | "fadePrimary" | "fadePrimaryTwo" | "secondary" | "gray" }
const props = withDefaults( defineProps<Props>(), {
  color: "primary"
} )
</script>
<template>
  <h2 :class="'f-spaceGrotesk-500 fs-h2 c-' + props.color"><slot/></h2>
</template>

<style lang="scss" scoped>
</style>