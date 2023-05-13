<script lang="ts" setup>
import TopMainTitle from '@atoms/TopMainTitle.vue';

const props = defineProps({
    text: {
        type: String,
        required: true
    }
})

</script>

<template>
<h1>
    <top-main-title :text="props.text"/>
</h1>
</template>