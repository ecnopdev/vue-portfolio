<template>
    <BaseSection>
        <template #header>
            <h1 id="experience">02. Where I've worked</h1>
        </template>
        <template #content>
            <Timeline />
        </template>
    </BaseSection>
</template>
<script>
const BaseSection = () => import('@/sections/BaseSection.vue');
const Timeline = () => import('@/components/Timeline.vue');

export default {
    components : {
        BaseSection,
        Timeline
    }
}
</script>