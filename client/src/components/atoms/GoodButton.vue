<script setup lang="ts">
import {computed, onMounted, onUpdated, ref} from 'vue'

const count = ref(0)
function increment() {
    count.value ++
}
function isOverCount10() {
    return count.value >= 10
}
onMounted(() => {
    console.log(`the first count is 0? count == 0 : ${count.value == 0}`)
})
onUpdated(() => {
    console.log(`counter updated! current count = ${count.value}`)
})
const counter = computed({
    get: () => {
        return `${String.fromCodePoint(Math.floor(Math.random() * 1791) + 127744)} ${count.value}`
    },
    set: ():void => {}
})
</script>

<template>
    <button aria-label="good" @click="increment" :disabled="isOverCount10()" class="py-1 bg-slate-400 min-w-[120px] rounded-lg">
        {{ counter }}
    </button>
</template>

