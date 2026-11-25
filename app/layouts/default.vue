<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const navbar = ref<HTMLElement | null>(null)
const bg = ref<HTMLElement | null>(null)
const menuToggle = ref<HTMLButtonElement | null>(null)
const menuOpen = ref(false)
let ctx: gsap.Context | null = null

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

const closeMenuAndFocus = () => {
  closeMenu()
  menuToggle.value?.focus()
}

onMounted(() => {
  if (!navbar.value || !bg.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const tween = gsap.fromTo(
      bg.value,
      { scaleY: 0, transformOrigin: 'top center', boxShadow: '0 2px 20px rgba(0, 0, 0, 0)' },
      { scaleY: 1, boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)', duration: 0.3, ease: 'ease', paused: true }
    );

    ScrollTrigger.create({
      start: 70,
      onEnter: () => tween.timeScale(1).play(),
      onLeaveBack: () => tween.timeScale(2).reverse(),
    });
  }, navbar.value)
})

onBeforeUnmount(() => {
  ctx?.revert()
  ctx = null
})
</script>

<template>
  <div>
    <div id="navbar" ref="navbar" :class="{ 'menu-open': menuOpen }" @keydown.esc="closeMenuAndFocus">
      <div ref="bg" class="navbar-bg bg-white"></div>
      <CoreLogo color="primary" :with-subtitle="false" />
      <button
        ref="menuToggle"
        class="navbarToggle"
        type="button"
        aria-controls="primary-navigation"
        :aria-expanded="menuOpen"
        :aria-label="menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="primary-navigation" aria-label="Navigation principale" @click="closeMenu">
        <ul class="f-inter-400">
          <li><NuxtLink class="animatedLink" to="/#expertises">Expertises</NuxtLink></li>
          <li><NuxtLink class="animatedLink" to="/mes-projets">Réalisations</NuxtLink></li>
          <li><NuxtLink class="animatedLink" to="/#about">À propos</NuxtLink></li>
          <li>
            <CoreButton
              text="Parlons de votre projet"
              :style="'primary'"
              icon="arrowUp"
              link="/prendre-contact"
            />
          </li>
        </ul>
      </nav>
    </div>
    <main id="main-content">
      <slot />
    </main>
    <footer id="footer">

      <div class="spaceBetweenSection"></div> 

      <div class="pageLayoutPadding">

        <div class="ctaFooter">
          <div class="title">
            <CoreTextSubtitle color="secondary"><span class="fs-small">VOTRE PROJET COMMENCE ICI</span></CoreTextSubtitle>
            <CoreTextH2 color="white">
              Une idée en tête ? <br>
              <span class="c-secondary">On en parle</span>.
            </CoreTextH2>
            <div class="button">
              <CoreButton link="/prendre-contact" :style="'secondary'" text="Contact par mail" icon="arrowUp" />
              <CoreButton link="/mes-projets" :style="'gray'" text="Voir plus de projet" icon="arrowUp" />
            </div>
          </div>
          <div class="content">
            <CoreTextH3 color="white">Faisons le point sur ce dont vous avez vraiment besoin.</CoreTextH3>
            <CoreTextParagraph color="gray">Un premier rendez-vous gratuit de 30 minutes environ. En présentiel, en visio-conférence ou par téléphone.</CoreTextParagraph>
            <CoreTextSubtitle color="secondary">ANNECY · HAUTE-SAVOIE</CoreTextSubtitle>
          </div>
        </div>

      </div>

      <div class="spaceBetweenSection"></div> 

      <div class="bottomFooter">
        <div class="pageLayoutPadding">
          <div>
            <CoreLogo color="white" :with-subtitle="true" />
          </div>
          <div>
            <nav>
              <ul class="f-inter-400 fs-small">
                <li><NuxtLink to="/#expertises" class="c-white animatedLink">Expertises</NuxtLink></li>
                <li><NuxtLink to="/mes-projets" class="c-white animatedLink">Réalisations</NuxtLink></li> 
                <li><NuxtLink to="/#about" class="c-white animatedLink">À propos</NuxtLink></li>
                <li><NuxtLink to="/#FAQ" class="c-white animatedLink">FAQ</NuxtLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div class="mentions">
        <div class="pageLayoutPadding">
          <CoreTextSubtitle color="gray"><span class="fs-small">© 2027 Prévost Clément</span></CoreTextSubtitle>
          <NuxtLink to="/" class="f-inter-400 fs-small c-gray animatedLink">Mentions légales</NuxtLink>
        </div>
      </div>

    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';

#navbar {
  padding: 14px 26px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  @include flex(12px, space-between);
  width: 100%;
  box-sizing: border-box;

  .navbar-bg {
    position: absolute;
    inset: 0;
    z-index: -1;
    will-change: transform;
  }

  nav {

    ul {
      @include flex(26px);

      li {

        a {
          text-decoration: none;
          color: map-get($map: $colors, $key: 'primary');

        }

      }

    }

  }

  .navbarToggle {
    display: none;
  }

}

@media screen and (max-width: 900px) {
  #navbar {
    padding: 10px 24px;

    .navbarToggle {
      display: flex;
      width: 44px;
      height: 44px;
      flex: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 0;
      border: 1px solid map-get($map: $colors, $key: 'gray');
      background: transparent;
      color: map-get($map: $colors, $key: 'primary');
      cursor: pointer;
      transition: border-color 200ms ease;

      span {
        display: block;
        width: 18px;
        height: 1px;
        background-color: currentColor;
        transition: transform 200ms ease, opacity 200ms ease;
      }

      &:focus-visible {
        outline: 2px solid map-get($map: $colors, $key: 'secondary');
        outline-offset: 3px;
      }
    }

    nav {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      padding: 8px 24px 24px;
      border-top: 1px solid map-get($map: $colors, $key: 'gray');
      background-color: map-get($map: $colors, $key: 'white');
      box-shadow: 0 12px 20px rgba(23, 37, 31, 0.08);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transform: translateY(-8px);
      transition: opacity 200ms ease, transform 200ms ease, visibility 200ms ease;

      ul {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 0;

        li + li {
          border-top: 1px solid map-get($map: $colors, $key: 'gray');
        }

        li a {
          display: block;
          padding: 15px 2px;
        }

        li:last-child {
          padding-top: 18px;
          border-top: 0;
        }
      }
    }

    &.menu-open {
      .navbarToggle {
        border-color: map-get($map: $colors, $key: 'fadePrimary');

        span:first-child {
          transform: translateY(6px) rotate(45deg);
        }

        span:nth-child(2) {
          opacity: 0;
        }

        span:last-child {
          transform: translateY(-6px) rotate(-45deg);
        }
      }

      nav {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transform: translateY(0);
      }
    }
  }

  #navbar nav ul li:last-child :deep(a) {
    width: 100%;
    justify-content: space-between;
  }
}

@media (prefers-reduced-motion: reduce) {
  #navbar .navbarToggle,
  #navbar .navbarToggle span,
  #navbar nav {
    transition: none;
  }
}

#footer {
  background-color: map-get($map: $colors, $key: 'primary');

  .ctaFooter {
    @include flex(12px, space-between, center, row, nowrap);
    @media screen and (max-width: 905px) {
      @include flex(22px, space-between, center, column, nowrap);
    }

    .title {
      width: 60%;
      @media screen and (max-width : 905px) {
        width: 100%;

      }

      h2 {
        margin: 12px 0 24px 0;
        @media screen and (max-width : 905px) {
          margin: 8px 0 16px 0;

        }

      }

      .button {
        @include flex(12px, flex-start, center, row, nowrap);
        @media screen and (max-width : 460px) {
          @include flex(12px, center, center, column, nowrap);

        }

      }

    }

    .content {
      width: 40%;
      @include flex(24px, flex-start, flex-start, column);
      @media screen and (max-width : 905px) {
        display: none;

      }

    }

  }

  .bottomFooter {
    .pageLayoutPadding {
      @include flex(12px, space-between);
      @media screen and (max-width : 530px) {
        @include flex(12px, center, center, column, nowrap);

      }

      nav {
        ul {
          @include flex();

          a {
            text-decoration: none;

          }

        }

      }

    }

  }

  .mentions {
    padding: 60px 0;

    .pageLayoutPadding {
      @include flex(12px, space-between);

    }

  }

}

</style>