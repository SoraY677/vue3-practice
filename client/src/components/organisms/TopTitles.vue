<script lang="ts" setup>
import GoodButton from '@atoms/GoodButton.vue';
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
        <top-main-title-container :text="props.mainTitle" class="mb-2"/>
        <top-sub-title-container :text="props.subTitle" />
        <good-button class="mt-2"/>
    </div>
</template>