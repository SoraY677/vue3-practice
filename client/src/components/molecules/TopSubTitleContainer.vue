<script lang="ts" setup>
import TopSubTitle from '@atoms/TopSubTitle.vue';

const props = defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>

<template>
<h1>
    <top-sub-title :text="props.text"/>
</h1>
</template>