<script lang="ts" setup>
import { projects } from '~/data/projects'

const project = projects.veroniquePrevost
const presentation = project.presentation

usePortfolioSeo({
  title: project.seoTitle,
  description: project.seoDescription,
  image: project.seoImage
})

if (!presentation) {
  throw new Error('La présentation du projet de Véronique Prévost est manquante.')
}
</script>

<template>
  <div id="projectPresentation">
    <div class="spaceBetweenSection"></div>
    <ProjectsHero :project="presentation.hero" />
    <ProjectsOverview :project="presentation.overview" />
    <ProjectsApproach :project="presentation.approach" />
    <ProjectsWebsite :project="presentation.website" />
    <ProjectsRelated :project="projects.speleoClubAnnecy" />
    <div class="spaceBetweenSection"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

#projectPresentation {
  color: map-get($map: $colors, $key: 'primary');

  > .spaceBetweenSection:first-child {
    padding-top: 100px;
  }
}
</style>
