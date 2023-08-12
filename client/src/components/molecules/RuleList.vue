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

function createTitle(index: number, title: string):string {
    return `${index + 1}.${title}`
}
</script>

<template>
    <ul class="flex justify-around flex-wrap gap-2">
        <li v-for="(item, index) in props.rules" class="basis-[320px] flex-shrink-[1]">
            <RuleCard 
             :title="createTitle(index,item.title)"
             :content="item.content"
            />
        </li>
    </ul>
</template>