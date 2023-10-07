<template>
  <body-head></body-head>
  <presentation></presentation>
  <experiences></experiences>
  <competences></competences>
</template>

<script setup>
import BodyHead from "~/components/index/bodyHead.vue";
import Presentation from "~/components/index/presentation.vue";
import Experiences from "~/components/index/experiences.vue";
import Competences from "~/components/index/competences.vue";

onMounted(() => {
  const { $event } = useNuxtApp();
  $event('pageAsLoad','');
})
</script>