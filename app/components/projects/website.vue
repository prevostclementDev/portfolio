<script lang="ts" setup>
import type { ProjectWebsiteContent } from '~/types/project'

interface Props {
  project: ProjectWebsiteContent
}

defineProps<Props>()
</script>

<template>
  <section id="site-preview" class="projectWebsite pageLayoutPadding">
    <div class="projectWebsite__heading">
      <div>
        <CoreTextSubtitle color="fadePrimary">
          <span class="fs-small">03 / DE L’INTENTION À L’ÉCRAN</span>
        </CoreTextSubtitle>
        <CoreTextH2 color="primary">
          <span class="fs-h3 f-syne-300">{{ project.title[0] }}<br> {{ project.title[1] }}</span>
        </CoreTextH2>
      </div>
      <CoreTextParagraph color="primary">{{ project.description }}</CoreTextParagraph>
    </div>

    <figure id="site-preview-image" class="projectWebsite__image">
      <img :src="project.image" :alt="project.imageAlt" loading="eager">
    </figure>
    <CoreButton
      :text="project.buttonText"
      :style="'primary'"
      :link="project.buttonLink"
      icon="arrowUp"
    />
  </section>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

.projectWebsite {
  padding-top: 92px;
  padding-bottom: 82px;

  &__heading {
    @include flex(72px, space-between, flex-end, row, nowrap);
    margin-bottom: 38px;

    h2 {
      margin-top: 18px;
      line-height: 1.05;
    }

    > p {
      width: 38%;
      max-width: 490px;
      margin-bottom: 4px;
      line-height: 1.55;
    }
  }

  &__image {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 42px;
    background-color: #E4E7DC;

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}

@media screen and (max-width: 730px) {
  .projectWebsite {
    &__heading {
      align-items: stretch;
      flex-direction: column;
      gap: 24px;

      > p {
        width: 100%;
      }
    }

    &__image {
      padding: 24px;
    }
  }
}
</style>
