<script lang="ts" setup>
interface Props {
    color: 'primary' | 'secondary' | 'gray',
};

const props = withDefaults( defineProps<Props>(), {
    color : 'primary',
} );
</script>

<template>
    <svg :class="props.color" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.082 9.082V0.75H0.75M9.082 0.75L0.75 9.082" stroke-width="1.5" stroke-linecap="round" 
        stroke="#F2F0E8"/>
    </svg>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/portable.scss";
svg {

    &.primary {
        path { stroke : map-get($colors, 'primary'); }
    }
    &.secondary {
        path { stroke : map-get($colors, 'secondary'); }
    }
    &.gray {
        path { stroke : map-get($colors, 'white'); }
    }

}
</style>
