<script setup lang="ts">
import RuleCard from '@atoms/RuleCard.vue';

const props = defineProps({
    rules: {
        type: Array<{
            title: string,
            content: string
        }>,
        required: true
    }
})
</script>

<template>
    <ul class="flex justify-around flex-wrap gap-2">
        <li v-for="item in props.rules" class=" basis-[320px] flex-shrink-[1]">
            <RuleCard 
             :title="item.title"
             :content="item.content"
            />
        </li>
    </ul>
</template>