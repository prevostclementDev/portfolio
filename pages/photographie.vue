<template>
  <a href="" class="onLink link">Test</a>
</template>

<script setup>
onMounted(() => {
  const { $event } = useNuxtApp();
  $event('pageAsLoad','');
})
</script>
