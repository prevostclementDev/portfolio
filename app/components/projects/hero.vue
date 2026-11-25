<script lang="ts" setup>
import type { ProjectHeroContent } from '~/types/project'

interface Props {
  project: ProjectHeroContent
}

defineProps<Props>()
</script>

<template>
  <section class="projectHero pageLayoutPadding">
    <div class="projectHero__heading">
      <div>
        <CoreTextSubtitle color="fadePrimary">
          <span class="fs-small">{{ project.label }}</span>
        </CoreTextSubtitle>
        <CoreTextH1 color="primary">
          <span class="fs-h2 f-spaceGrotesk-400">{{ project.title[0] }}<br> {{ project.title[1] }}</span>
        </CoreTextH1>
      </div>
      <CoreTextParagraph color="primary">{{ project.description }}</CoreTextParagraph>
    </div>

    <figure class="projectHero__image">
      <img :src="project.image" :alt="project.imageAlt" fetchpriority="high">
    </figure>
  </section>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

.projectHero {
  &__heading {
    @include flex(64px, space-between, flex-end, row, nowrap);
    margin: 36px 0 32px;

    > div {
      width: 52%;
    }

    h1 {
      margin-top: 14px;
      line-height: 1;
    }

    > p {
      width: 38%;
      margin-bottom: 4px;
      line-height: 1.55;
    }
  }

  &__image {
    height: 480px;
    margin: 0;
    overflow: hidden;
    background-color: map-get($map: $colors, $key: 'primary');

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 54%;
      filter: brightness(0.78);
    }
  }
}

@media screen and (max-width: 730px) {
  .projectHero {
    &__heading {
      align-items: stretch;
      flex-direction: column;
      gap: 24px;

      > div,
      > p {
        width: 100%;
      }
    }

    &__image {
      height: auto;
      aspect-ratio: 16 / 9;
    }
  }
}
</style>
