<script setup lang="ts">
import gsap from 'gsap'

interface FaqItem {
  question: string
  answer: string
}

const props = withDefaults(
  defineProps<{
    items: FaqItem[]
    /** Autorise plusieurs panneaux ouverts en même temps */
    multiple?: boolean
    /** Index du panneau ouvert au chargement (null = tous fermés) */
    defaultOpen?: number | null
    /** Durée de l’animation en secondes */
    duration?: number
  }>(),
  { multiple: false, defaultOpen: null, duration: 0.45 }
)

const uid = useId()

// État d’ouverture (réactif)
const openIndexes = ref<number[]>(props.defaultOpen !== null ? [props.defaultOpen] : [])

const panelEls: (HTMLElement | null)[] = []
const iconEls: (HTMLElement | null)[] = []

const isOpen = (i: number) => openIndexes.value.includes(i)

function animate(i: number, open: boolean) {
  const panel = panelEls[i]
  const icon = iconEls[i]
  if (!panel) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const duration = reduceMotion ? 0 : props.duration

  gsap.killTweensOf([panel, icon])

  gsap.to(panel, {
    height: open ? 'auto' : 0,
    duration,
    ease: open ? 'power3.out' : 'power3.inOut'
  })

  if (icon) {
    gsap.to(icon, {
      rotate: open ? 45 : 0,
      duration: duration * 0.8,
      ease: 'power2.out'
    })
  }
}

function toggle(i: number) {
  const willOpen = !isOpen(i)

  if (!props.multiple && willOpen) {
    openIndexes.value.filter((j) => j !== i).forEach((j) => animate(j, false))
    openIndexes.value = [i]
  } else if (willOpen) {
    openIndexes.value = [...openIndexes.value, i]
  } else {
    openIndexes.value = openIndexes.value.filter((j) => j !== i)
  }

  animate(i, willOpen)
}

// Position initiale de l’icône pour le panneau ouvert par défaut
onMounted(() => {
  openIndexes.value.forEach((i) => {
    if (panelEls[i]) gsap.set(panelEls[i], { height: 'auto' })
    if (iconEls[i]) gsap.set(iconEls[i], { rotate: 45 })
  })
})

onBeforeUnmount(() => {
  gsap.killTweensOf([...panelEls, ...iconEls].filter(Boolean))
})
</script>

<template>
  <div class="faq">
    <div v-for="(item, i) in items" :key="i" class="faq__item">
      <h3 class="faq__heading">
        <button
          :id="`${uid}-trigger-${i}`"
          class="faq__trigger"
          type="button"
          :aria-expanded="isOpen(i)"
          :aria-controls="`${uid}-panel-${i}`"
          @click="toggle(i)"
        >
          <span class="faq__question f-spaceGrotesk-400 fs-paragraph c-primary">{{ item.question }}</span>
          <span :ref="(el) => (iconEls[i] = el as HTMLElement)" class="faq__icon" aria-hidden="true" />
        </button>
      </h3>

      <div
        :id="`${uid}-panel-${i}`"
        :ref="(el) => (panelEls[i] = el as HTMLElement)"
        class="faq__panel"
        role="region"
        :aria-labelledby="`${uid}-trigger-${i}`"
        :inert="!isOpen(i)"
      >
        <div class="faq__answer f-inter-400 c-fadePrimary fs-subtitle">
          <slot name="answer" :item="item" :index="i">
            {{ item.answer }}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/portable.scss';
.faq {
  width: 100%;

  &__item {
    border-bottom: 1px solid map-get($map: $colors, $key: 'gray');
  }

  &__heading {
    margin: 0;
    font: inherit;
  }

  &__trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    padding: 24px 0;
    background: none;
    border: 0;
    font-weight: 600;
    text-align: left;
    cursor: pointer;

  }

  // Icône « + » dessinée en CSS, pivote en « × » via GSAP
  &__icon {
    position: relative;
    flex: none;
    width: 1rem;
    height: 1rem;

    &::before,
    &::after {
      content: '';
      position: absolute;
      inset: 50% 0 auto;
      height: 2px;
      background: map-get($colors, 'fadePrimary');
      transform: translateY(-50%);
    }

    &::after {
      transform: translateY(-50%) rotate(90deg);
    }
  }

  &__panel {
    height: 0;
    overflow: hidden;
  }

  &__answer {
    padding: 0 2.5rem 24px 0;
    line-height: 1.6;
  }
}
</style>