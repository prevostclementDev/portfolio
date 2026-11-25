<script setup lang="ts">
import { gsap } from 'gsap'

const transitionOverlay = ref<HTMLElement | null>(null)

const loaderStartedAt = import.meta.client ? Date.now() : 0

const initialPageReady = new Promise<void>((resolve) => {
  if (import.meta.client) {
    useNuxtApp().hook('page:finish', () => resolve())
  } else {
    resolve()
  }
})

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const wait = (duration: number) =>
  new Promise<void>((resolve) => window.setTimeout(resolve, duration))

onMounted(async () => {
  const overlay = transitionOverlay.value
  if (!overlay || prefersReducedMotion()) return

  const remainingMinimumTime = Math.max(0, 900 - (Date.now() - loaderStartedAt))
  await Promise.all([wait(remainingMinimumTime), initialPageReady])
  await gsap.to(overlay, {
    yPercent: -100,
    duration: 0.32,
    ease: 'power3.inOut'
  }).then()
  gsap.set(overlay, { autoAlpha: 0, yPercent: 100 })
})

onBeforeUnmount(() => {
  if (transitionOverlay.value) gsap.killTweensOf(transitionOverlay.value)
})
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>

  <div ref="transitionOverlay" class="routeTransition" aria-hidden="true">
    <div class="routeTransition__content">
      <span class="routeTransition__brand">CLÉMENT PRÉVOST</span>
      <span class="routeTransition__loader"><span></span></span>
      <span class="routeTransition__label">UN INSTANT</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.routeTransition {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: grid;
  place-items: center;
  background-color: #17251F;
  transform: translateY(0);
  pointer-events: none;
  will-change: transform;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    color: #F2F0E8;
  }

  &__brand {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 13px;
    letter-spacing: 0.12em;
  }

  &__loader {
    width: 120px;
    height: 2px;
    overflow: hidden;
    background-color: rgba(242, 240, 232, 0.2);

    span {
      display: block;
      width: 40%;
      height: 100%;
      background-color: #D0945E;
      animation: routeLoaderSweep 0.7s ease-in-out infinite alternate;
    }
  }

  &__label {
    font-family: Inter, sans-serif;
    font-size: 10px;
    letter-spacing: 0.16em;
    color: #BCC8BE;
  }
}

@keyframes routeLoaderSweep {
  from { transform: translateX(-100%); }
  to { transform: translateX(250%); }
}

@media (prefers-reduced-motion: reduce) {
  .routeTransition {
    display: none;
  }

  .routeTransition__loader span {
    animation: none;
  }
}
</style>