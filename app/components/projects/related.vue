<script lang="ts" setup>
import type { Project } from '~/types/project'

interface Props {
  project: Project
}

defineProps<Props>()
</script>

<template>
  <section class="moreProjects pageLayoutPadding">
    <div class="moreProjects__heading">
      <CoreTextSubtitle color="fadePrimary">
        <span class="fs-small">À DÉCOUVRIR AUSSI</span>
      </CoreTextSubtitle>
    </div>
    <NuxtLink :to="project.link" class="moreProjects__card">
      <img :src="project.previewImage" :alt="project.previewImageAlt" loading="lazy">
      <div class="moreProjects__content">
        <span class="f-inter-400 fs-small">{{ project.relatedCategory }}</span>
        <span class="moreProjects__title f-spaceGrotesk-400 fs-h3">{{ project.relatedTitle[0] }}<br> {{ project.relatedTitle[1] }}</span>
        <span class="f-inter-400 fs-small">Découvrir le projet</span>
      </div>
      <span class="moreProjects__arrow" aria-hidden="true">↗</span>
    </NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

.moreProjects {
  padding-top: 30px;
  border-top: 1px solid map-get($map: $colors, $key: 'gray');

  &__heading {
    margin-bottom: 24px;
  }

  &__card {
    display: grid;
    grid-template-columns: minmax(0, 42%) minmax(0, 1fr) 48px;
    gap: clamp(20px, 3vw, 48px);
    align-items: center;
    color: map-get($map: $colors, $key: 'primary');
    text-decoration: none;

    img {
      display: block;
      width: 100%;
      aspect-ratio: 1.65;
      object-fit: cover;
      transition: transform 300ms ease;
    }

    &:hover img {
      transform: scale(1.02);
    }

    &:hover .moreProjects__arrow {
      color: map-get($map: $colors, $key: 'white');
      background-color: map-get($map: $colors, $key: 'primary');
      transform: translateX(3px);
    }

    &:focus-visible {
      outline: 2px solid map-get($map: $colors, $key: 'primary');
      outline-offset: 6px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    > span:first-child {
      color: map-get($map: $colors, $key: 'fadePrimary');
    }

    > span:nth-child(2) {
      line-height: 1.05;
    }

    > span:last-child {
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }

  &__arrow {
    display: grid;
    width: 48px;
    height: 48px;
    place-items: center;
    border: 1px solid map-get($map: $colors, $key: 'gray');
    border-radius: 50%;
    font-size: 22px;
    transition: color 200ms ease, background-color 200ms ease, transform 200ms ease;
  }
}

@media screen and (max-width: 730px) {
  .moreProjects {
    &__card {
      grid-template-columns: minmax(0, 1fr) 40px;
      gap: 20px 16px;
      align-items: start;

      img {
        grid-column: 1 / -1;
      }
    }

    &__content {
      min-width: 0;
      overflow-wrap: anywhere;
    }

    &__arrow {
      align-self: center;
      width: 40px;
      height: 40px;
      font-size: 19px;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .moreProjects__card img,
  .moreProjects__arrow {
    transition: none;
  }
}
</style>
