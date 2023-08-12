<script setup lang="ts">
import {ref} from 'vue'

const count = ref(0)
function increment() {
    count.value ++
}

</script>

<template>
    <button aria-label="good" @click="increment" class="py-1 bg-slate-400 min-w-[120px] rounded-lg">
        👍{{ count }}
    </button>
</template>

