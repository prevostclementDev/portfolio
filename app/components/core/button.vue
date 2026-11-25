<script lang="ts" setup>
import { gsap } from 'gsap'

interface Props {
  text: string,
  icon?: 'none' | 'arrowUp' | 'arrowStrait',
  style: 'primary' | 'gray' | 'secondary',
  link?: string,
  type?: 'link' | 'button' | 'submit',
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(),{
  text: 'Default',
  icon: 'none',
  style: 'primary',
  link: '/',
  type: 'link',
  disabled: false
})

const isHover = ref(false)
let hoverTween: gsap.core.Tween | undefined

const colors = {
  primary: {
    border: '#17251F',
    text: '#F2F0E8',
    hoverBackground: '#F2F0E8',
    hoverBorder: '#17251F',
    hoverText: '#17251F'
  },
  gray: {
    border: '#CDD1C5',
    text: '#17251F',
    hoverBackground: '#17251F',
    hoverBorder: '#17251F',
    hoverText: '#F2F0E8'
  },
  secondary: {
    border: '#D0945E',
    text: '#F2F0E8',
    hoverBackground: '#F2F0E8',
    hoverBorder: '#F2F0E8',
    hoverText: '#D0945E'
  }
} satisfies Record<Props['style'], {
  border: string
  text: string
  hoverBackground: string
  hoverBorder: string
  hoverText: string
}>

const animateHover = (hovered: boolean, event: MouseEvent | FocusEvent) => {
  isHover.value = hovered
  const button = event.currentTarget
  if (!(button instanceof HTMLElement)) return
  const background = button.querySelector<HTMLElement>('.buttonBackground')
  if (!background) return

  const variant = colors[props.style]
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  hoverTween?.kill()
  hoverTween = gsap.timeline()
    .to(background, {
      scaleX: hovered ? 1 : 0,
      backgroundColor: variant.hoverBackground,
      duration: reduceMotion ? 0 : 0.35,
      ease: 'power2.out'
    }, 0)
    .to(button, {
      borderColor: hovered ? variant.hoverBorder : variant.border,
      color: hovered ? variant.hoverText : variant.text,
      y: hovered && !reduceMotion ? -2 : 0,
      duration: reduceMotion ? 0 : 0.25,
      ease: 'power2.out'
    }, 0)
}

onBeforeUnmount(() => hoverTween?.kill())

const arrowColor = computed(() => {
  const initialColor = ( (props.style === 'primary') ? 'gray' : ( props.style === 'gray' ) ? 'primary' : 'gray' );

  if ( ! isHover.value ) return initialColor;

  return ( props.style === 'primary' ) ? 'primary' : ( props.style === 'gray' ) ? 'gray' :  'secondary'
  
})
</script>

<template>
  <div>
    <NuxtLink
      v-if="props.type === 'link'"
      @mouseenter="animateHover(true, $event)"
      @mouseleave="animateHover(false, $event)"
      @focus="animateHover(true, $event)"
      @blur="animateHover(false, $event)"
      :to="props.link || '/'"
      :class="['f-syne-400', props.style, props.icon !== 'none' && 'hasIcon']"
    >
      <span class="buttonBackground" aria-hidden="true"></span>
      <span class="buttonText">{{ props.text }}</span>

      <CoreIconsArrowUp 
        :color="arrowColor" 
        aria-hidden="true"
        v-if="props.icon === 'arrowUp'" 
      />
      <CoreIconsArrowStrait 
        :color="arrowColor" 
        aria-hidden="true"
        v-else-if="props.icon === 'arrowStrait'" 
      />
    </NuxtLink>
    <button
      v-else
      @mouseenter="animateHover(true, $event)"
      @mouseleave="animateHover(false, $event)"
      @focus="animateHover(true, $event)"
      @blur="animateHover(false, $event)"
      :type="props.type === 'submit' ? 'submit' : 'button'"
      :disabled="props.disabled"
      :class="['f-syne-400', props.style, props.icon !== 'none' && 'hasIcon']"
    >
      <span class="buttonBackground" aria-hidden="true"></span>
      <span class="buttonText">{{ props.text }}</span>

      <CoreIconsArrowUp
        :color="arrowColor"
        aria-hidden="true"
        v-if="props.icon === 'arrowUp'"
      />
      <CoreIconsArrowStrait
        :color="arrowColor"
        aria-hidden="true"
        v-else-if="props.icon === 'arrowStrait'"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/portable.scss";
a,
button {
    text-decoration: none;
    padding: 18px 24px;
    display: block;
    width: fit-content;
    position: relative;
    overflow: hidden;
    border : 1px solid;
    min-width: 200px;
    @include flex();
    font: inherit;
    cursor: pointer;

    @media screen and (max-width : 730px) {
      font-size: calc( map-get($map: $fontSize, $key: 'subtitle') - 2px );
      padding: 14px 18px;
      min-width: auto;

    }

  &:focus-visible {
    outline: 2px solid map-get($colors, 'secondary');
    outline-offset: 3px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  .buttonBackground {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-color: transparent;
    transform: scaleX(0);
    transform-origin: left center;
    pointer-events: none;
  }

  .buttonText,
  svg {
    position: relative;
    z-index: 1;
  }

  &.primary {
    background-color: map-get($colors,'primary');
    border-color: map-get($colors, 'primary');
    color: map-get($colors, 'white');
  }
  &.gray {
    background-color: map-get($colors,'white');
    border-color: map-get($colors, 'gray');
    color: map-get($colors, 'primary');
  }
  &.secondary {
    background-color: map-get($colors,'secondary');
    border-color: map-get($colors, 'secondary');
    color: map-get($colors, 'white');
  }

  &.hasIcon {
    .buttonText {
      margin-right: 30px;

      @media screen and (max-width : 730px) {
        margin-right: 10px;
      }

    }
  }

}
</style>