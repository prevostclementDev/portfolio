<script lang="ts" setup>
interface Props { color : "white" | "primary" | "fadePrimary" | "fadePrimaryTwo" | "secondary" | "gray" }
const props = withDefaults( defineProps<Props>(), {
  color: "fadePrimary"
} )
</script>
<template>
  <span :class="'f-inter-400 fs-subtitle c-' + props.color"><slot/></span>
</template>

<style lang="scss" scoped>
</style>