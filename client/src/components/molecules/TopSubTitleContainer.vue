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
<h2>
    <top-sub-title :text="props.text" class="text-xl"/>
</h2>
</template>