<script setup lang="ts">
import { ref } from 'vue';

const getNowTime = () => {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
const now = ref(getNowTime())

setInterval(() => { now.value =  getNowTime() },500)
</script>

<template>
    <p>
        {{ now }}
    </p>
</template>