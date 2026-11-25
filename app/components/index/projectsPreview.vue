<script lang="ts" setup>
import { projects } from '~/data/projects'
</script>

<template>
  <div id="projectsPreview">
    
    <div class="spaceBetweenSection"></div> 

    <div class="pageLayoutPadding">

      <div class="topTitle">
        <div>
          <CoreTextSubtitle color="secondary"><span class="fs-small">UNE SÉLECTION DE RÉALISATIONS</span></CoreTextSubtitle>
          <CoreTextH2 color="white">Des idées devenues <br> des projets concrets.</CoreTextH2>
        </div>
        <CoreTextSubtitle color="fadePrimary">Deux facettes d’un même travail : <br> raconter en images, concevoir pour le web.</CoreTextSubtitle>
      </div>

      <div class="projects">
        <div class="projet">
          <CoreProjectLayout
            :title="projects.veroniquePrevost.title"
            :description="projects.veroniquePrevost.previewDescription"
            :tags="projects.veroniquePrevost.tags"
            :image="projects.veroniquePrevost.previewImage"
            :link="projects.veroniquePrevost.link"
          />
        </div>
        <div class="projet">
          <CoreProjectLayout 
            :title="projects.speleoClubAnnecy.title"
            :description="projects.speleoClubAnnecy.previewDescription"
            :tags="projects.speleoClubAnnecy.tags"
            :image="projects.speleoClubAnnecy.previewImage"
            :link="projects.speleoClubAnnecy.link"
          />
        </div>
      </div>

      <div class="isYourProject">
        <CoreTextH3 color="white">Et si le prochain projet était le vôtre ?</CoreTextH3>
        <CoreButton link="/mes-projets" text="Voir mes projets" :style="'secondary'"/>
      </div>

    </div>
    
    <div class="spaceBetweenSection"></div> 

  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

#projectsPreview {
  background-color: map-get($map: $colors, $key: 'primary');
  
  .topTitle {
    @include flex( 12px, space-between,flex-start,row,nowrap );
    margin-bottom: 16px;

    h2 { margin-top: 12px; }

    span {
      text-align: right;
      margin-top: 14px;

    }

    @media screen and ( max-width : 730px ) {
      flex-direction: column-reverse;
      margin-bottom: 8px;

      span {
        text-align: left;

      }
    }
  }

  .projects {
    @include flex( 34px, space-between, flex-end, row, nowrap );
    padding: 64px 0;
    
    @media screen and ( max-width : 730px ) {
      flex-direction: column;
      align-items: flex-start;
      padding: 36px 0;

    }

    .projet {
      &:first-child { 
        width: 60%; 
        @media screen and ( max-width : 730px ) {
          width: 100%;
        }
      }
      &:last-child { 
        width: 40%; 
        @media screen and ( max-width : 730px ) {
          width: 100%;
        }
      }

    }

  }

  .isYourProject {
    padding: 44px 0 0 0;
    @include flex(12px, space-between, center, row, nowrap);
    position: relative;

    @media screen and ( max-width : 730px ) {
      flex-direction: column;
      padding: 20px 0 0 0;
      align-items: flex-start;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: map-get($map: $colors, $key: 'fadePrimary');

    }

  }

}
</style>