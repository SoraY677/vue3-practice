<script lang="ts" setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    }
})

</script>

<template>
    <span class="text-4xl">{{ props.text }}</span>
</template>