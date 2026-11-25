<script lang="ts" setup>
interface Props { color : "white" | "primary" | "fadePrimary" | "fadePrimaryTwo" | "secondary" | "gray" }
const props = withDefaults( defineProps<Props>(), {
  color: "primary"
} )
</script>
<template>
  <p :class="'f-syne-400 fs-paragraph c-' + props.color"><slot/></p>
</template>

<style lang="scss" scoped>
</style>