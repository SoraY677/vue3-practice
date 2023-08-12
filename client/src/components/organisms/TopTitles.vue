<script lang="ts" setup>
import GoodButton from '@atoms/GoodButton.vue';
import NowTimeVue from '@atoms/NowTime.vue';
import RuleListVue from '@molecules/RuleList.vue';
import TopMainTitleContainer from '@molecules/TopMainTitleContainer.vue';
import TopSubTitleContainer from '@molecules/TopSubTitleContainer.vue';

const props = defineProps({
    mainTitle: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    }
})

const ruleList = [
    {
        title: "洗体",
        content: "サウナ室に入る前には体を洗う"
    },
    {
        title: "水風呂",
        content: "水風呂に入る前は、汗を流す"
    }
]
</script>

<template>
    <div class="text-center font-basic">
        <!-- <NowTimeVue /> -->
        <top-main-title-container :text="props.mainTitle" class="mb-2"/>
        <top-sub-title-container :text="props.subTitle" />
        <good-button class="mt-2"/>
        <rule-list-vue class="mt-4 mx-2" :rules="ruleList"/>
    </div>
    
</template>