<script lang="ts" setup>
interface Props {
  title : string,
  description: string,
  image: string,
  tags: string[],
  link: string
}
const props = withDefaults(defineProps<Props>(),{
  title : 'Projet numéro 1',
  description : 'Shooting photo',
  image : 'images/projets/sophrologie.png',
  tags: ['Photographie'],
  link: '/mes-projets'
})
</script>

<template>
  <NuxtLink :to="props.link" class="project bg-primary">
    
      <div class="projectImage">
        <NuxtImg :src="props.image" />
        <span class="imageWipe" aria-hidden="true"></span>
        <span class="projectTag bg-secondary fs-small f-inter-400">{{ props.tags[0]?.toUpperCase() }}</span>
      </div>
      <div class="projectContent">
        <div class="textContent">
          <CoreTextH3  color="white">{{ props.title }}</CoreTextH3>
          <CoreTextSubtitle>{{ props.description }}</CoreTextSubtitle>
        </div>
        <div class="linkContent" aria-hidden="true">
          <CoreIconsArrowUp color="gray" />
        </div>
      </div>

  </NuxtLink>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

.project {
  width: 100%;
  display: block;
  color: inherit;
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid map-get($map: $colors, $key: 'secondary');
    outline-offset: 4px;
  }
  
  .projectImage {
    height: fit-content;
    width: 100%;
    position: relative;
    overflow: hidden;

    img {
      display: block;
      height: auto;
      width: 100%;
      transition: transform 0.45s ease;
    }

    .projectTag {
      position: absolute;
      z-index: 2;
      padding: 8px 16px;
      margin: 12px 0 0 12px;
    }

    .imageWipe {
      position: absolute;
      inset: 0;
      z-index: 1;
      background-color: map-get($map: $colors, $key: 'secondary');
      opacity: 0.25;
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform 0.45s ease;
    }
  }

  .projectContent {
    margin-top: 24px;
    @include flex(12px, space-between);

    .linkContent svg {
      transition: transform 0.25s ease;
    }
  }

  &:hover,
  &:focus-visible {
    .projectImage {
      img {
        transform: scale(1.04);
      }

      .imageWipe {
        transform: scaleX(1);
      }
    }

    .linkContent svg {
      transform: translate(3px, -3px);
    }
  }

}

@media (prefers-reduced-motion: reduce) {
  .project {
    .projectImage img,
    .projectImage .imageWipe,
    .linkContent svg {
      transition: none;
    }
  }
}
</style>