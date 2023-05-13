<script lang="ts" setup>
import TopMainTitleContainer from '@molecules/TopMainTitleContainer.vue';
import TopSubTitleContainer from '@molecules/TopSubTitleContainer.vue';

const props = defineProps({
    mainTitle: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="text-center font-crimson">
        <top-main-title-container :text="props.mainTitle"/>
        <top-sub-title-container :text="props.subTitle" />
    </div>
</template>