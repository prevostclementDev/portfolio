<script lang="ts" setup>
import { projects } from '~/data/projects'

const projectList = [projects.speleoClubAnnecy, projects.veroniquePrevost]
</script>

<template>
  <div id="projectList">
    
    <ul>
      <li v-for="project in projectList" :key="project.title" class="pageLayoutPadding">
        <div class="content">
          <CoreTextH2 color="primary"><span class="fs-h3 f-syne-300">{{ project.title }}</span></CoreTextH2>
          <CoreTextSubtitle color="secondary"><span class="fs-small">{{ project.listDescription }}</span></CoreTextSubtitle>
          <CoreButton text="En savoir plus" icon="arrowStrait" :style="'gray'" :link="project.link" />
        </div>
        <div class="img">
          <img v-for="image in project.galleryImages" :key="image.src" :src="image.src" :alt="image.alt">
        </div>
      </li>
    </ul>

  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';
#projectList {

  .pageLayoutPadding {
    padding-top: 36px;
    padding-bottom: 46px;
    border-top: 1px solid map-get($map: $colors, $key: 'gray');
    @include flex(12px, flex-start, center, row, nowrap);

    @media screen and (max-width : 715px) {
      @include flex(12px, flex-start, center, column-reverse, nowrap);
      padding-top: 24px;
      padding-bottom: 24px;

    }

    &:last-child { border-bottom: 1px solid map-get($map: $colors, $key: 'gray'); }  

    .content {
      @include flex(0px, flex-start,flex-start,column, nowrap);
      width: calc(40% - 12px);

      @media screen and (max-width : 715px) {
        width: 100%;
        jusify-content: center;
        align-items: center;
        text-align: center;

      }

      h2 {
        line-height: 100%;

      } 

      span {
        margin-top: -10px;

      }

      & > div {
        margin-top: 12px;

      }

    }

    .img {
      width: calc(60% - 12px);
      @include flex(24px, flex-start, center, row, nowrap);

      @media screen and (max-width : 715px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        @media screen and (max-width : 500px) {
          flex-direction: column;

        }

      }

      img {
        display: block;
        width: 100%;

      }

    }

  }

}
</style>