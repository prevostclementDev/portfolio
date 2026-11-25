<script lang="ts" setup>
import type { ProjectOverviewContent } from '~/types/project'

interface Props {
  project: ProjectOverviewContent
}

defineProps<Props>()
</script>

<template>
  <section class="projectOverview pageLayoutPadding">
    <aside class="projectOverview__details">
      <CoreTextSubtitle color="secondary">
        <span class="fs-small">01 / LE PROJET</span>
      </CoreTextSubtitle>
      <dl>
        <div v-for="detail in project.details" :key="detail.label">
          <dt class="f-inter-400 fs-small">{{ detail.label }}</dt>
          <dd class="f-inter-400">{{ detail.value }}</dd>
        </div>
      </dl>
    </aside>

    <div class="projectOverview__content">
      <CoreTextSubtitle color="fadePrimary">
        <span class="fs-small">{{ project.kicker }}</span>
      </CoreTextSubtitle>
      <CoreTextH2 color="primary">
        <span class="fs-h3 f-syne-300">{{ project.title }}</span>
      </CoreTextH2>
      <CoreTextParagraph color="primary">{{ project.description }}</CoreTextParagraph>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

.projectOverview {
  display: grid;
  grid-template-columns: 38% 1fr;
  gap: 96px;
  padding-top: 88px;
  padding-bottom: 104px;

  &__details {
    padding-top: 4px;

    dl {
      margin-top: 26px;
      border-top: 1px solid map-get($map: $colors, $key: 'gray');
    }

    dl > div {
      display: grid;
      grid-template-columns: 34% 1fr;
      gap: 12px;
      padding: 14px 0;
      border-bottom: 1px solid map-get($map: $colors, $key: 'gray');
    }

    dt {
      color: map-get($map: $colors, $key: 'fadePrimary');
    }

    dd {
      margin: 0;
      line-height: 1.5;
    }
  }

  &__content {
    max-width: 650px;

    h2 {
      margin: 20px 0 22px;
    }

    p {
      max-width: 580px;
      line-height: 1.6;
    }
  }
}

@media screen and (max-width: 730px) {
  .projectOverview {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;

    &__details,
    &__content {
      min-width: 0;
    }

    &__details dl > div {
      grid-template-columns: minmax(0, 34%) minmax(0, 1fr);
    }
  }
}
</style>
