<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
})
</script>

<template>
    <div class="text-left border-solid border-white border-[1px] p-4 rounded-lg shadow-white shadow-[5px_5px_0_0_rgba(0,0,0,0)]">
        <h3 class="text-3xl">
            <span class="">
                {{ props.title }}
            </span>
        </h3>
        <p class="mt-2 bg-white text-black font-bold">
            {{ props.content }}
        </p>
    </div>
</template>