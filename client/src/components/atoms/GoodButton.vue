<script setup lang="ts">
import {onMounted, onUnmounted, onUpdated, ref} from 'vue'

const count = ref(0)
function increment() {
    count.value ++
}
onMounted(() => {
    console.log(`the first count is 0? count == 0 : ${count.value == 0}`)
})
onUpdated(() => {
    console.log(`counter updated! current count = ${count.value}`)
})

</script>

<template>
    <button aria-label="good" @click="increment" class="py-1 bg-slate-400 min-w-[120px] rounded-lg">
        👍{{ count }}
    </button>
</template>

