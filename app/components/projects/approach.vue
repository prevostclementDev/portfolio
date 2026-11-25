<script lang="ts" setup>
import type { ProjectApproachContent } from '~/types/project'

interface Props {
  project: ProjectApproachContent
}

defineProps<Props>()
</script>

<template>
  <section class="projectApproach bg-primary">
    <div class="pageLayoutPadding">
      <div class="projectApproach__heading">
        <div>
          <CoreTextSubtitle color="secondary">
            <span class="fs-small">02 / LA DIRECTION</span>
          </CoreTextSubtitle>
          <CoreTextH2 color="white">
            <span class="fs-h2 f-spaceGrotesk-400">{{ project.title[0] }}<br> {{ project.title[1] }}</span>
          </CoreTextH2>
        </div>
        <CoreTextParagraph color="fadePrimaryTwo">{{ project.description }}</CoreTextParagraph>
      </div>

      <ul class="projectApproach__list">
        <li v-for="(item, index) in project.items" :key="item.title">
          <span class="projectApproach__number f-inter-400 fs-small">0{{ index + 1 }}</span>
          <h3 class="f-spaceGrotesk-400">{{ item.title }}</h3>
          <p class="f-inter-400">{{ item.description }}</p>
        </li>
      </ul>

      <div class="projectApproach__deliverables">
        <span class="f-inter-400 fs-small">LIVRABLES EXPLORÉS</span>
        <p class="f-inter-400">
          <template v-for="(deliverable, index) in project.deliverables" :key="deliverable">
            <span v-if="index > 0"> / </span>{{ deliverable }}
          </template>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

.projectApproach {
  padding: 92px 0 58px;
  color: map-get($map: $colors, $key: 'white');

  &__heading {
    @include flex(72px, space-between, flex-end, row, nowrap);
    margin-bottom: 70px;

    h2 {
      margin-top: 18px;
      line-height: 1.06;
    }

    > p {
      width: 40%;
      max-width: 500px;
      margin-bottom: 4px;
      line-height: 1.6;
    }
  }

  &__list {
    border-top: 1px solid map-get($map: $colors, $key: 'fadePrimary');

    li {
      display: grid;
      grid-template-columns: 48px 38% 1fr;
      gap: 20px;
      align-items: start;
      padding: 24px 0;
      border-bottom: 1px solid map-get($map: $colors, $key: 'fadePrimary');
    }

    h3 {
      margin: 0;
      font-size: 20px;
      font-weight: 400;
    }

    p {
      max-width: 500px;
      margin: 0;
      color: map-get($map: $colors, $key: 'fadePrimaryTwo');
      font-size: 14px;
      line-height: 1.6;
    }
  }

  &__number {
    padding-top: 4px;
    color: map-get($map: $colors, $key: 'secondary');
  }

  &__deliverables {
    display: grid;
    grid-template-columns: calc(48px + 38% + 40px) 1fr;
    gap: 20px;
    padding-top: 24px;
    color: map-get($map: $colors, $key: 'fadePrimaryTwo');

    > span {
      color: map-get($map: $colors, $key: 'secondary');
    }

    p {
      margin: 0;
      line-height: 1.6;
    }

    p span {
      padding: 0 8px;
      color: map-get($map: $colors, $key: 'secondary');
    }
  }
}

@media screen and (max-width: 730px) {
  .projectApproach {
    &__heading {
      align-items: stretch;
      flex-direction: column;
      gap: 24px;

      > p {
        width: 100%;
      }
    }

    &__list li {
      grid-template-columns: 32px minmax(0, 34%) minmax(0, 1fr);
      gap: 12px;
    }

    &__list h3,
    &__list p {
      min-width: 0;
      overflow-wrap: anywhere;
    }

    &__deliverables {
      grid-template-columns: minmax(0, 32%) minmax(0, 1fr);
      gap: 12px;

      p {
        min-width: 0;
        overflow-wrap: anywhere;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .projectApproach {
    &__list li {
      grid-template-columns: 28px minmax(0, 1fr);
    }

    &__list h3,
    &__list p {
      grid-column: 2;
    }

    &__number {
      grid-row: span 2;
    }

    &__deliverables {
      grid-template-columns: minmax(0, 1fr);
    }
  }
}
</style>
