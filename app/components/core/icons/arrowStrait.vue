<script lang="ts" setup>
interface Props {
    color: 'primary' | 'secondary' | 'gray'
};

const props = withDefaults( defineProps<Props>(), {
    color : 'primary'
} );
</script>

<template>
    <svg :class="props.color" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 7.36377L-6.35181e-08 8.36377L14.5312 8.36377L14.5312 7.36377L14.5313 6.36377L6.35181e-08 6.36377L0 7.36377ZM15.2384 8.07088C15.6289 7.68035 15.6289 7.04719 15.2384 6.65666L8.8744 0.292703C8.48387 -0.0978216 7.85071 -0.0978217 7.46018 0.292703C7.06966 0.683227 7.06966 1.31639 7.46018 1.70692L13.117 7.36377L7.46018 13.0206C7.06966 13.4111 7.06966 14.0443 7.46018 14.4348C7.85071 14.8254 8.48387 14.8254 8.87439 14.4348L15.2384 8.07088Z" 
        fill="#17251F"/>
    </svg>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/portable.scss";
svg {

    &.primary {
        path { fill : map-get($colors, 'primary'); }
    }
    &.secondary {
        path { fill : map-get($colors, 'secondary'); }
    }
    &.gray {
        path { fill : map-get($colors, 'white'); }
    }

}
</style>